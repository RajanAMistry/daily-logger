import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostListComponent } from './dashboard/post-list/post-list.component';
import { ManagePostComponent } from './dashboard/manage-post/manage-post.component';
import { DailyLoggerService } from './core/services/daily-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostListComponent,
    ManagePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DailyLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
