import { Component, Input } from '@angular/core';
import { Plantel } from '../plantel/plantel';
import { PlantelComponent } from '../plantel/plantel.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button-venta',
  templateUrl: './button-venta.component.html',
  styleUrls: ['./button-venta.component.scss']
})
export class ButtonVentaComponent {

  constructor(private router:Router) { }

  @Input()
  plantel:Plantel | undefined

  ventaCamisetas(){
    if(this.plantel != undefined){this.router.navigate(['/ventas', this.plantel.id]);}
  }
}
