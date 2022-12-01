import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plantel } from '../plantel/plantel';

@Component({
  selector: 'app-btn-finalizar-compra',
  templateUrl: './btn-finalizar-compra.component.html',
  styleUrls: ['./btn-finalizar-compra.component.scss']
})
export class BtnFinalizarCompraComponent implements OnInit {

  constructor(private router:Router){}

  @Input()
  plantel! : Plantel
  
  ngOnInit(): void {
  }

  compraFinalizada(plantel : Plantel): void{
    alert('Finalizaste tu compra de: '+ plantel.jugador +', felicidades, gracias por aportar a la comunidad');
    this.router.navigate(['/home'])
  }

}
