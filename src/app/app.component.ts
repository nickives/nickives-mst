import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MstDataService } from './mst-data.service';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {Sort, MatSortModule, MatSort} from '@angular/material/sort';
import MstData from './MstData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTableModule,
    MatCardModule,
    MatSortModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'nickives-mst';
  dataService: MstDataService;
  private dataList: MstData[] = [];
  dataSource = new MatTableDataSource(this.dataList);;
  @ViewChild(MatTable) table!: MatTable<MstData>;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = [
    "First",
    "Last",
    "Score",
    "Today",
    "Hole1STP",
    "Hole1Strokes",
    "Hole2STP",
    "Hole2Strokes",
    "Hole3STP",
    "Hole3Strokes",
    "Hole4STP",
    "Hole4Strokes",
    "Hole5STP",
    "Hole5Strokes",
    "Hole6STP",
    "Hole6Strokes",
    "Hole7STP",
    "Hole7Strokes",
    "Hole8STP",
    "Hole8Strokes",
    "Hole9STP",
    "Hole9Strokes",
    "Hole10STP",
    "Hole10Strokes",
    "Hole11STP",
    "Hole11Strokes",
    "Hole12STP",
    "Hole12Strokes",
    "Hole13STP",
    "Hole13Strokes",
    "Hole14STP",
    "Hole14Strokes",
    "Hole15STP",
    "Hole15Strokes",
    "Hole16STP",
    "Hole16Strokes",
    "Hole17STP",
    "Hole17Strokes",
    "Hole18STP",
    "Hole18Strokes"
]

  constructor(dataService: MstDataService) {
    this.dataService = dataService;
  }

  ngAfterViewInit() {
    /**
     * We have to bind the data service *after* view init here because otherwise it won't
     * play nicely with the sort, and the sort needs the view to be constructed first
     * otherwise it sees it as undefined.
     */
    this.dataSource.sort = this.sort;
    this.dataService
      .getDataUpdate()
      .subscribe((data) => {
        this.dataList.push(data);
        this.table.renderRows();
        this.dataSource._updateChangeSubscription();
      });
  }

}
