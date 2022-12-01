import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantelComponent } from './plantel/plantel.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'plantel', component:PlantelComponent},
  {path: 'ventas/:id', component:VentasComponent},
  {path: 'ventas', component:PlantelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
