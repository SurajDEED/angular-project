import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { TableComponent } from '../table/table.component';
import axios from 'axios';
import { User } from '../table/user.interface';

@Component({
  selector: 'app-integration',
  standalone: true,
  imports: [FormComponent,TableComponent],
  templateUrl: './integration.component.html',
  styleUrl: './integration.component.css'
})
export class IntegrationComponent {
  users: User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await axios.get('http://localhost:3000/users');
      this.users = response.data;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

}
