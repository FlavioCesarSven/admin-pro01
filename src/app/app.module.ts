import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Rutas  */
import { FeatureRoutingModule } from './app.routing';

/* PagesModule  */
import { PagesModule } from './pages/pages.module';

/* Componentes  */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
