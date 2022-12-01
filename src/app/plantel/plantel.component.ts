import { Component } from '@angular/core';
import { PlantelDataService } from '../service/plantel-data.service';
import { Plantel } from './plantel';

@Component({
  selector: 'app-plantel',
  templateUrl: './plantel.component.html',
  styleUrls: ['./plantel.component.scss']
})
export class PlantelComponent {
  plantel : Plantel[]= [];
  

  constructor(private plantelDataService : PlantelDataService){

  }

  ngOnInit(): void{
    this.plantelDataService.getAll().subscribe(plantel  => this.plantel = plantel);
  }
}
