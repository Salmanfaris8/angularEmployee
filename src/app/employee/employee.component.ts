import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees:any[] = []
  addEmployeeForm:FormGroup

  constructor(private fb:FormBuilder){
    this.addEmployeeForm = this.fb.group({
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      contact:['',[Validators.required,Validators.pattern("^\\d{10}$")]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required]]
    })
  }

  addEmployeeDetails(){
    if(this.addEmployeeForm.valid){
      this.employees.push(this.addEmployeeForm.value)
      alert("Employee added successfully!")
    }
    else{
      alert("Please fill out all fields correctly.")
    }
  }
}
