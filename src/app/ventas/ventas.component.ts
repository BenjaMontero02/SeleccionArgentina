import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plantel } from '../plantel/plantel';
import { PlantelDataService } from '../service/plantel-data.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss']
})
export class VentasComponent{
  plantel!: Plantel;
  id!: number;
  

  constructor(private plantelDataService : PlantelDataService, private activatedRoute: ActivatedRoute, private router:Router){
    
  }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params =>{
     this.id = params['id']}
    );

    this.plantelDataService.getById(this.id).subscribe(plantel => this.plantel = plantel);
  }
}





