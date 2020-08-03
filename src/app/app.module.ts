import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// rutas
import { APP_ROUTES } from './app.routes';

 // Modulos
import { PagesModule } from './pages/pages.module';
import { PAGES_ROUTES } from './pages/pages.routes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
