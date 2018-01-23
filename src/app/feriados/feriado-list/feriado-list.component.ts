import { Component, OnInit } from '@angular/core';
import { Feriado } from '../../models/feriado';
import { FeriadoService } from '../../services/feriado.service';

@Component({
  selector: 'app-feriado-list',
  templateUrl: './feriado-list.component.html',
  styleUrls: ['./feriado-list.component.css']
})
export class FeriadoListComponent implements OnInit {

  feriados: Feriado[];

  constructor(private feriadoService:FeriadoService) { }

  ngOnInit() {
    this.feriadoService.getFeriados().subscribe(
           resultArray => this.feriados = resultArray,
           error => console.log("Error :: " + error)
       )
  }

}
