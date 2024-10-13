import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../../Models/employee';
import { EmployeeService } from '../../Services/employee.service';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  @ViewChild("myModal") model : ElementRef | undefined;
  
    employeeForm : FormGroup = new FormGroup({});

    constructor(private fb: FormBuilder){};

    ngOnInit(): void {
      this.setFormState();
    }

    employeeList: Employee[] = [];

    empService = inject(EmployeeService);

    openModel()
    {
      const empModel = document.getElementById("myModal");
  
      if(empModel != null)
      {
        empModel.style.display = 'block';
      }
    }
  
    closeModel()
    {
      if(this.model != null)
      {
        this.model.nativeElement.style.display = 'none';
      }
    }

    getEmployess()
    {
      this.empService.getAllEmployee().subscribe((res) => {
        this.employeeList = res;
      })
    }
  
    setFormState()
    {
      this.employeeForm = this.fb.group({

        id: [0],
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        age: ['', Validators.required],
        salary: ['', Validators.required],
        status: [false, Validators.required]

      });
    }    

    onSubmit()
    {
      console.log(this.employeeForm.value);
    }

}