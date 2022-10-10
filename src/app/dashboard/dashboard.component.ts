import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userFirstName: string = '';

  constructor() { }

  ngOnInit(): void {
    this.userFirstName = 'Rajan';
  }

}
