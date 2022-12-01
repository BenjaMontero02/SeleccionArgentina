import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantelComponent } from './plantel/plantel.component';
import { VentasComponent } from './ventas/ventas.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ButtonVentaComponent } from './button-venta/button-venta.component';
import { BtnFinalizarCompraComponent } from './btn-finalizar-compra/btn-finalizar-compra.component';
import { CompraFinalizadaComponent } from './compra-finalizada/compra-finalizada.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantelComponent,
    VentasComponent,
    HomeComponent,
    ButtonVentaComponent,
    BtnFinalizarCompraComponent,
    CompraFinalizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
