import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MstDataService } from './mst-data.service';

export const appConfig: ApplicationConfig = {
  providers: [{provide: MstDataService}, provideRouter(routes)]
};
