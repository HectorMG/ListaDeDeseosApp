import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor(private deseoService: DeseosService, private router: Router, private alertController:AlertController) {
    this.listas = this.deseoService.getListas();
  }

  async agregar(){
   
    const alert = await this.alertController.create({
      header: 'Nueva Lista',
      inputs: [{
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [
      {
        text:'Cancelar',
        role:'cancel',
        handler:()=>{
          console.log('Cancelar');
          
        }
      },
      {
        text: 'Crear',
        handler:(data)=>{
          console.log(data);
          if(data.titulo.length===0){
            return;
          }
          let id = this.deseoService.crearLista(data.titulo);
          this.router.navigate(['/tabs/tab1/agregar',id]);
        }
      }
    ]
    });

    await alert.present();
  }

}
