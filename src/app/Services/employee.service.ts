import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'https://localhost:7021/api/Employee';

  constructor() { }

  http = inject(HttpClient)

  getAllEmployee()
  {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
