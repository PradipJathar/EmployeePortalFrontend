import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @ViewChild("myModal") model : ElementRef | undefined;
  
    employeeForm : FormGroup = new FormGroup({});

    constructor(private fb: FormBuilder){};

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
  
    setFormState()
    {
      this.employeeForm = this.fb.group({

        id: [0],
        name: ['', Validators.required],
        email: ['', Validators.required],
        mobile: ['', Validators.required],
        age: ['', Validators.required],
        salery: ['', Validators.required],
        status: [false, Validators.required]

      });
    }    

    onSubmit()
    {
      console.log(this.employeeForm.value);
    }

}