import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/Iemployee';
import {EmployeeService } from 'src/app/services/employee.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  @Input() employee:IEmployee;

  id:String;
  firstName:String;
  lastName:String;
  gender:String;
  cellNumber:String;
  department:String;
  dateOfJoining:String;

  ngOnInit(): void {

    this.firstName = this.employee.fistName;
    this.lastName = this.employee.lastName;
    this.gender = this.employee.gender;
    this.cellNumber = this.employee.cellNumber;
    this.department = this.employee.department;
    this.dateOfJoining = this.employee.dateOfJoining;
  }

  addEmployee(){
    const employeeId = Guid.create().toString();
    var employee={
      id:employeeId,
      fistName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      cellNumber: this.cellNumber,
      department: this.department,
      dateOfJoining: this.dateOfJoining
    }

    this.service.addEmployee(employee).subscribe(res=>{
      console.log(res);
    });

  }

  updateEmployee(){
    var employee={
      id:this.id,
      fistName: this.firstName,
      lastName: this.lastName,
      gender: this.gender,
      cellNumber: this.cellNumber,
      department: this.department,
      dateOfJoining: this.dateOfJoining
    }

    this.service.updateEmployee(employee).subscribe(res=>{
      console.log(res);
    });
  }

}
