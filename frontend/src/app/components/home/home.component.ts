import { Component, OnInit  } from '@angular/core';
import { Section } from '../../../models/section.model';
import { InfoService } from '../../services/info.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  sections: Section[] = [];
  constructor(private inservice: InfoService) { }
  ngOnInit(): void {
    this.inservice.getSections().subscribe(data => {
      this.sections = data;
      console.log(data);
    });
  }
}
