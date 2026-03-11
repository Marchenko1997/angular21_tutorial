import { Component, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class SignalComponent  {
  // courseName: string = "Angular 21";

  courseName = signal('Angular 21');
  rollNo = signal(112);
  student = signal({ name: 'John', age: 25, city: 'New York' });
  cityList = signal(['Mumbai', 'Delhi', 'Hyderabad', 'Chennai']);
  courseDuration: Signal<string> = signal("3 months");

  constructor() {
    console.log('before ' + this.courseName());

    setTimeout(() => {
      this.courseName.set('React Js');
      console.log('After ' + this.courseName());
    }, 3000);
  }

  changeCourse() {
    this.courseName.set("Java")
  }
}