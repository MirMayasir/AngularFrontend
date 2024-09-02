import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';

const routes: Routes = [
  {path: 'home' , component:HomePageComponent},
  {path: 'emplist', component: EmpListComponent},
  {path: 'register', component: EmpAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
