import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  courseName: string = 'Angular 21';
  currentVersion = 'v.21';

  rollNo: number = 101;
  productprice = 999.99;

  isActive: boolean = true;
  isAvailable = false;

  currentDate: Date = new Date();

  cityList: string[] = ['Mumbai', 'Delhi', 'Hyderabad', 'Chennai'];

  rollNoArray: number[] = [1, 2, 3, 4, 5];

  studentObj = {
    name: 'John',
    age: 25,
    city: 'New York',
  };

  studentList = [
    {
      name: 'John',
      age: 25,
      city: 'New York',
    },
    {
      name: 'Jane',
      age: 30,
      city: 'London',
    },
    {
      name: 'Bob',
      age: 35,
      city: 'Paris',
    },
  ];

  constructor() {
    this.courseName = "33";

    this.rollNo = 100;
  }
}
