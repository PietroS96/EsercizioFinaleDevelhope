import { Component, Input, OnInit } from '@angular/core';
import { IActivity } from 'src/app/models/Activity';

@Component({
  selector: 'app-favorite-activity',
  templateUrl: './favorite-activity.component.html',
  styleUrls: ['./favorite-activity.component.css'],
})
export class FavoriteActivityComponent implements OnInit {
  @Input() dataActivity!: IActivity[];

  constructor() {}

  ngOnInit(): void {}

  deleteSelected(favorite: IActivity) {
    this.dataActivity.splice(this.dataActivity.indexOf(favorite, 0), 1);
    localStorage.removeItem(JSON.stringify(favorite.activity));
    localStorage.setItem('Activity', JSON.stringify(this.dataActivity));
  }

  borderColor(favorite: IActivity) {
    if (favorite.accessibility < 0.3) {
      return 'table-primary';
    } else if (favorite.accessibility > 0.5) {
      return 'table-danger';
    } else {
      return 'table-warning';
    }
  }
}
