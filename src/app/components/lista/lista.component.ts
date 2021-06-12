import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  @ViewChild(IonList) lista: IonList;
  @Input() terminada = true;
  listas: Lista[] = [];

  constructor(private router:Router, private deseosService: DeseosService,private alertController: AlertController) {
    this.listas = this.deseosService.getListas();
   }

  ngOnInit() {}

  verLista(lista: Lista){
    if(this.terminada){
      this.router.navigate(['/tabs/tab2/agregar',lista.id]);
    }else{
      this.router.navigate(['/tabs/tab1/agregar',lista.id]);
    }
  }

  borrar(lista:Lista){
    this.deseosService.borrarLista(lista);
    this.listas = this.deseosService.getListas();
  }

  async editar(lista:Lista){
    const alert = await this.alertController.create({
      header: 'Editar Lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        value: lista.titulo,
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
      {
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
          this.lista.closeSlidingItems();
          console.log('Cancelar');
        }
      },
      {
        text: 'Editar',
        handler:(data)=>{
          console.log(data);
          if(data.titulo.length===0){
            return;
          }
          this.deseosService.editarLista(lista,data.titulo);
          this.lista.closeSlidingItems();
        }
      }
    ]
    });

    await alert.present();
  }


}
