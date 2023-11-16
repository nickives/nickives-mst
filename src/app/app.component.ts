import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MstDataService } from './mst-data.service';
import MstData from './MstData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nickives-mst';
  dataList: MstData[] = [];
  private dataService: MstDataService;

  constructor(dataService: MstDataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    this.dataService
      .getDataUpdate()
      .subscribe((data) => {
        console.log(data);
        this.dataList.push(data);
      });
  }
}
