import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IActivity } from 'src/app/models/Activity';

@Component({
  selector: 'app-generate-activity',
  templateUrl: './generate-activity.component.html',
  styleUrls: ['./generate-activity.component.css'],
})
export class GenerateActivityComponent implements OnInit {
  dataActivity: IActivity = {
    accessibility: 0,
    activity: '',
    key: '',
    link: '',
    participants: 0,
    price: 0,
    type: '',
  };

  @Output() dataSend = new EventEmitter<IActivity>();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  generateActivity() {
    this.http
      .get<IActivity>('https://www.boredapi.com/api/activity/')
      .subscribe((x) => (this.dataActivity = x));
  }

  sendDataFavorite() {
    this.dataSend.emit(this.dataActivity);
  }
}
