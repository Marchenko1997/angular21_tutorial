import { Component, signal,  WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeAvl: boolean = false;
  isSuccessDivVisible: WritableSignal<boolean> = signal(false);
  studentTotalMarks: number = 0;
  studentResult: string = '';
  offerList: string[] = ['OFFER10', 'OFFER20', 'OFFER30'];
  employeeList: any[] = [
    { name: 'Alice', department: 'HR', isManager: true },
    { name: 'Bob', department: 'IT', isManager: false },
    { name: 'Charlie', department: 'Finance', isManager: false },
  ]
  productCategoryList: string[] = ['Electronics', 'Clothing', 'Books', 'Home Appliances'];
  toggleDivVisibility() {
    this.isSuccessDivVisible.set(!this.isSuccessDivVisible());
  }
}
