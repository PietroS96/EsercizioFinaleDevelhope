import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityModule } from './activity/activity.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SharedModule, ActivityModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
