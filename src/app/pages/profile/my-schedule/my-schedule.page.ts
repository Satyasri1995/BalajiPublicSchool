import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.page.html',
  styleUrls: ['./my-schedule.page.scss'],
})
export class MySchedulePage implements OnInit {

  today;
  constructor() {
    this.today=new Date().getDay();
   }

  ngOnInit() {
  }

}
