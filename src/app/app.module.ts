import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowEmployeeComponent } from './components/show-employee/show-employee.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';

import { EmployeeService } from './services/employee.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { SpinnerComponent } from './spinner/spinner/spinner.component';
import { SpinnerInterceptor } from '../interceptors/spinnerInterceptor';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShowEmployeeComponent,
    AddEditEmployeeComponent,
    SpinnerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [EmployeeService, {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
