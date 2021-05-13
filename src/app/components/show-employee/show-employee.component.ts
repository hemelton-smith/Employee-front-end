import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { IEmployee } from 'src/app/interfaces/Iemployee';

@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }

  employeeList:IEmployee[] = [];
  ModalTitle:String;
  ActivateAddEditEmployeeComp:boolean=false;
  employee:IEmployee;

  ngOnInit(): void {
    this.getAndInitialiseEmployees();
  }

  getAndInitialiseEmployees(){
    this.service.getAllEmployees().subscribe(data =>{
      this.employeeList = data;
    });
  }

  addClick(){
    this.employee={
      id:"",
      fistName:"",
      lastName:"",
      gender:"",
      cellNumber:"",
      department:"",
      dateOfJoining:""
    }
    this.ModalTitle="Add employee";
    this.ActivateAddEditEmployeeComp=true;
  }

  editClick(item){
    this.employee = item;
    this.ModalTitle="Update employee";
    this.ActivateAddEditEmployeeComp=true;
  }

  closeClick(){
    this.getAndInitialiseEmployees();
    this.ActivateAddEditEmployeeComp=false;
  }

  deleteClick(item){
    if(confirm("Are you sure you want to delete this employee?")){
      this.service.deleteEmployee(item.id).subscribe(res=>{
        this.getAndInitialiseEmployees();
      });
      
    }
  }
}
