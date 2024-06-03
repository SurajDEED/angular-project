import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { IntegrationComponent } from './integration/integration.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  { path: 'users', component: IntegrationComponent },
  { path: 'users/edit', component: UserEditComponent },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}
