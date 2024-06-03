import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { IntegrationComponent } from './integration/integration.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, AppRoutingModule ],
})
export class AppModule {}
