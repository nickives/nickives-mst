import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Subject } from 'rxjs';
import MstData from './MstData';

@Injectable({
  providedIn: 'root'
})
export class MstDataService {

  public dataSubject = new Subject<MstData>();

  constructor() { }

  socket = io('https://mst-full-stack-dev-test.herokuapp.com/');

  public getDataUpdate = () => {
    this.socket.on('data-update', (data) => {
      console.log(data);
      this.dataSubject.next(data);
    });
    return this.dataSubject;
  }
}
