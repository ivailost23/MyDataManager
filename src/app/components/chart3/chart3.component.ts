import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart3',
  templateUrl: './chart3.component.html',
  styleUrls: ['./chart3.component.scss']
})
export class Chart3Component implements OnInit {
  canvas: any;
  ctx: any;
  constructor(private elementRef: ElementRef) {
  }
  ngOnInit(): void {
    this.canvas = document.getElementById('myChart3');
    this.ctx = this.canvas.getContext('2d');
    let chart = new Chart(this.ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'green',
          borderColor: 'rgb(255, 99, 132)',
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
