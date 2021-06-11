import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  id: string;
  lista: Lista;
  nombreItem: string;

  constructor(private deseosService: DeseosService, private router: ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.id = params['listaId'];
      this.consultarLista();
    });
   }

  consultarLista(){
    this.lista = this.deseosService.obtenerLista(this.id);
  }

  agregarItem(){
    if(this.nombreItem.length===0){
      return;
    }
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);
    this.nombreItem = "";
    this.deseosService.guardarStorage();
  }

  cambioEstado(item: ListaItem){

    const pendientes = this.lista.items.filter(itemData=>!itemData.estado).length;

    if(pendientes===0){
      this.lista.terminadaEn = new Date();
      this.lista.estado = true;
    }else{
      this.lista.terminadaEn = null;
      this.lista.estado = false;
    }

    this.deseosService.guardarStorage();
  }

  ngOnInit(){
  } 

}
