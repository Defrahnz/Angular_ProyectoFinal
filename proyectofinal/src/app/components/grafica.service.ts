import { Injectable } from '@angular/core';
import { GraficaModel } from './grafica.model';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {
  grafica:GraficaModel[]=[
    /* todo lo de la grafica de base de datos*/
  /*   {carreraName:'sistemas' ,carreraAlumno:4},
    {carreraName:'economifista' ,carreraAlumno:7},
    {carreraName:'automotriz' ,carreraAlumno:5},
    {carreraName:'enfermeria' ,carreraAlumno:9},
    {carreraName:'computacion inteligente' ,carreraAlumno:2},
    {carreraName:'psicologia' ,carreraAlumno:7} */
  ]
  constructor() { }
  getll(){
    return this.grafica;
  }
}
