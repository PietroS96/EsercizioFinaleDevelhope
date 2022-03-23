import { Component, OnInit } from '@angular/core';
import { IActivity } from '../models/Activity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  datActivity: IActivity[] = [];

  constructor() {}

  ngOnInit(): void {
    const dataStorage = localStorage.getItem('Activity');
    if (dataStorage != null) {
      this.datActivity = JSON.parse(dataStorage);
    }
  }

  sendToChild(data: IActivity) {
    if (!this.datActivity.includes(data)) {
      this.datActivity.push(data);
      localStorage.setItem('Activity', JSON.stringify(this.datActivity));
    }
  }
}
