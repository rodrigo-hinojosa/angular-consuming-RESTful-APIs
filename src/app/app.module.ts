import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeriadoService } from './services/feriado.service';
import { routes } from './app.routes';
import { HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { FeriadosComponent } from './feriados/feriados.component';
import { FeriadoListComponent } from './feriados/feriado-list/feriado-list.component';


@NgModule({
  declarations: [
    AppComponent,
    FeriadosComponent,
    FeriadoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routes
  ],
  providers: [FeriadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
