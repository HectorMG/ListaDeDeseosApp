import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor(private deseoService: DeseosService, private router: Router) {
    this.listas = this.deseoService.getListas();
  }

  agregar(){
    this.router.navigate(['/tabs/tab1/agregar']);
  }

}
