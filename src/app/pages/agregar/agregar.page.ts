import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private deseosService: DeseosService, private router: ActivatedRoute) {
    this.router.params.subscribe(params=>{
      this.id = params['listaId'];
      this.consultarLista();
    });
   }

  consultarLista(){
    this.lista = this.deseosService.obtenerLista(this.id);
  }

  ngOnInit(){
  } 

}
