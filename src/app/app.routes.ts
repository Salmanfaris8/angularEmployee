import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';

export const routes: Routes = [
    {path:"",component:LoginComponent},
    {path:"employee",component:EmployeeComponent}
];
