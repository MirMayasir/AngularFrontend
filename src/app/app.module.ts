import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmpListComponent,
    EmpAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
