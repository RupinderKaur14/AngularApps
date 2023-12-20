import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, HttpClientModule,HttpHandler, provideHttpClient } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryDbService, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )),
    provideRouter(routes,withViewTransitions()),
    HttpClientModule
]
};
