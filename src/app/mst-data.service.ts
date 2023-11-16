import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Subject, Observable } from 'rxjs';
import MstData from './MstData';

@Injectable({
  providedIn: 'root'
})
export class MstDataService {

  public dataUpdates = new Subject<MstData>();

  constructor() { }

  socket = io('https://mst-full-stack-dev-test.herokuapp.com/');

  public getDataUpdate = () => {
    this.socket.on('data-update', (data) => {
      this.dataUpdates.next(data);
    });
    return this.dataUpdates.asObservable();
  }
}
