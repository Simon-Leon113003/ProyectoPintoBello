import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {

  constructor() { }

  ganancias: ChartData<'bar', number[], string>;

  ngOnInit(): void {
    this.ganancias = {
      labels: ["Noviembre 2022"],
      datasets: [{
        data: [11252],
        label: "Total de Ventas"
      },
      {
        data: [7000],
        label: "Total Gastado"
      },
      {
        data: [4252],
        label: "Total de Ganancias"
      }
      ],
      
    }
  }

}
