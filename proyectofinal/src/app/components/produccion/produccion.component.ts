import { Component, OnInit } from '@angular/core';
import { GraficaModel } from '../grafica.model';
import { GraficaService } from '../grafica.service';
declare var google:any;

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.component.html',
  styleUrls: ['./produccion.component.css']
})
export class ProduccionComponent implements OnInit {
  title= 'Pro';
  myAngularxQrCode:any;
  constructor(
    /* private graficaService:GraficaService */
  ) {
    this.myAngularxQrCode = 'la info traerla de la base de datoa a qui';
   }

  ngOnInit(): void {
    //let grafica:GraficaModel[] = this.graficaService.getAll();
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);//se borra este para el buildChart y se descomenta lo de abajo
    //this.buildChart(grafica);
  }
/*
    buildChart(grafica:GraficaModel){
    var funct=(chart:any)=>{
      var data = new google.visualization.DataTable();
        data.addColumn('string', 'datos');
        data.addColumn('number', 'Slices');
        carreras.forEach((item: { carreraName: any; carreraAlumno: any; }) => {
          data.addRows([
            [item.carreraName, item.carreraAlumno]
          ]);
        });
        var option={
          title: 'Graficos de admin',
          'width':500,
          'height':400
        };
        chart().draw(data, option);
    }
    var chart =()=> new google.visualization.PieChart(document.getElementById('divPieChart'));
    var callback=()=>funct(chart);
  google.charts.setOnLoadCallback(callback);
  } */
  //crea la tabla con sus datos
  drawChart(){}
}
