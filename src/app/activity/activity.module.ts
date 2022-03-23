import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateActivityComponent } from './generate-activity/generate-activity.component';
import { FavoriteActivityComponent } from './favorite-activity/favorite-activity.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [GenerateActivityComponent, FavoriteActivityComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GenerateActivityComponent, FavoriteActivityComponent],
})
export class ActivityModule {}
