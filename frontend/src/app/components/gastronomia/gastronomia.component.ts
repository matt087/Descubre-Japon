import { Component, OnInit } from '@angular/core';
import { GastronomiaService } from '../../services/gastronomia.service';
import { Dish } from '../../../models/dish.model';
@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrl: './gastronomia.component.css'
})
export class GastronomiaComponent implements OnInit{
  dishes: Dish[] = [];
  constructor(private dishService: GastronomiaService) { }
  
  ngOnInit(): void {
    this.dishService.getDishes().subscribe(data => {
      this.dishes = data;
      console.log(this.dishes);
    });
  }
}
