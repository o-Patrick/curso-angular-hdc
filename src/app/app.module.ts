import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { DadosPaiComponent } from './components/dados-pai/dados-pai.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { RenderCondicionalComponent } from './components/render-condicional/render-condicional.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmissorComponent } from './components/emitindo-eventos/emissor/emissor.component';
import { MudaNumeroComponent } from './components/emitindo-eventos/muda-numero/muda-numero.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DadosPaiComponent,
    DiretivasComponent,
    RenderCondicionalComponent,
    EventosComponent,
    EmissorComponent,
    MudaNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
