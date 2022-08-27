import { Schedule } from './../../models/schedule';
import { Leisure } from './../../models/leisure';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leisures',
  templateUrl: './leisures.page.html',
  styleUrls: ['./leisures.page.scss'],
})
export class LeisuresPage implements OnInit {
  leisures;
  constructor() {
    this.leisures = [
      new Leisure({
        id: Math.random().toString(),
        name: 'Teacher1',
        schedules: [
          new Schedule({
            id: Math.random().toString(),
            period: 1,
            day: 1,
            class: '7th Class',
            subject: 'English',
            section: 'A',
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
      new Leisure({
        id: Math.random().toString(),
        name: 'Teacher2',
        schedules: [
          new Schedule({
            id: Math.random().toString(),
            period: 1,
            day: 1,
            class: '7th Class',
            subject: 'English',
            section: 'A',
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      }),
    ];
  }

  ngOnInit() {}
}
