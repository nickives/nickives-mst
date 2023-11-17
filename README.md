# NickivesMst

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1.

# Overview
This is a small demonstration of using Angular to display data from the [MST example data feed](https://mst-full-stack-dev-test.herokuapp.com/). This app uses [Angular Material](https://material.angular.io/) components, the [socket.io-client](https://www.npmjs.com/package/socket.io-client) library for [Socket.io](https://socket.io/), and [RxJS](https://rxjs.dev/). This is the first time I have used these particular technologies, so this project is a small exercise to demonstrate them working together.

# Getting Started

## Install dependancies
Running `npm install` should get you everything.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Project Structure

Everything can be found in the [app](/app) directory. There are two parts to this example - the `App` component and the `MstData` service.

## MstData
This class simply binds the Socket.io client to an RxJS `Subject`. This allows us to consume the data feed anywhere in the client by simply injecting the service.
```
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
```

## App
This is a straightforward Angular component. It takes the `MstData` service and uses it to update the table in real time. It also supports sorting based on first name, last name, and score. The table sort announces when the sort state changes. This is lifted directly from the Material component documentation and uses the built-in Angular `LiveAnnouncer`.

# Future considerations
This project lacks test coverage. My preference generally is [Testing Library](https://testing-library.com/), which [has angular support](https://testing-library.com/docs/angular-testing-library/intro/). Testing library is good because it uses actual DOM nodes, and encourages the use of accessible selectors. This means tests can be designed around the actual interactions users will make with components.

This example could be expanded to dynamically group incoming events - e.g. it would be possible to have a card for each match ID, and dynamically create / update cards based on the incoming data.