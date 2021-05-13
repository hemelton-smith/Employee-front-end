import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/interfaces/Iemployee';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  readonly baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this.baseUrl}/api/getallemployees`);
  }

  addEmployee(employee:IEmployee){
    return this.http.post(`${this.baseUrl}/api/addemployee`,employee);
  }

  updateEmployee(employee:IEmployee){
    return this.http.put(`${this.baseUrl}/api/updateemployee`,employee);
  }

  deleteEmployee(employeeId:String){
    return this.http.delete(`${this.baseUrl}/api/deleteemployee?employeeId=`+employeeId);
  }
}
