import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart4',
  templateUrl: './chart4.component.html',
  styleUrls: ['./chart4.component.scss']
})
export class Chart4Component implements OnInit {
  canvas: any;
  ctx: any;
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.canvas = document.getElementById('myChart4');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(80, 80, 0)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },
      // Configuration options go here
      options: {}
    });
  }
  // ngAfterViewInit() {


  // }
}
