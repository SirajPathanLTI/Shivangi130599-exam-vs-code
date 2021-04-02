import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent  {
  employee: Employee = new Employee()

    departments: string[] = [
      "IT", "HR", "Admin", "Sales", "Payroll"
    ]

    add(){
      console.log(this.employee);
    }
  
  }

  export class Employee {
    empno: number;
    name: string;
    dateOfJoining: string;
    salary: number;
    department: string;

  }

