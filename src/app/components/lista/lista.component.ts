import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {

  listas: Lista[] = [];

  constructor(private router:Router, private deseosService: DeseosService) {
    this.listas = this.deseosService.getListas();
   }

  ngOnInit() {}

  verLista(lista: Lista){
    this.router.navigate(['/tabs/tab1/agregar',lista.id]);
  }

}
