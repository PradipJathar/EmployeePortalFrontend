import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @ViewChild("myModal") model : ElementRef | undefined;
  
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
  
  }