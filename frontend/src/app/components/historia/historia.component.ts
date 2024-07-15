import { Component, OnInit } from '@angular/core';
import { JapanCulture } from '../../../models/japanculture.model';
import { CulturaService } from '../../services/cultura.service';
@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrl: './historia.component.css'
})
export class HistoriaComponent implements OnInit{
  japanData: JapanCulture = { festivals: [], traditionalClothing: [] };

  constructor(private cservice:CulturaService){} 
  ngOnInit(): void {
      this.cservice.getJapanData().subscribe(data=>{
        this.japanData=data;
        console.log(this.japanData);
      });
  }
}
