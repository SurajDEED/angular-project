import { Component, Input } from '@angular/core';
import { User } from './user.interface';
import { PdfDownloadComponent } from '../pdf-download/pdf-download.component';
import { PdfGenrationComponent } from '../pdf-genration/pdf-genration.component';
import { PdfViewingComponent } from '../pdf-viewing/pdf-viewing.component';
import axios from 'axios';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    PdfDownloadComponent,
    PdfGenrationComponent,
    PdfViewingComponent,
    PdfGenrationComponent,
    CommonModule,
    RouterLink,
    AppRoutingModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  @Input() users: User[] = [];

  constructor(private router: Router) {}

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

  async deleteUser(user: any) {
    console.log(user._id);
    let id = user._id;
    await axios.delete(`http://localhost:3000/users/${id}`);
    this.router.navigate(['/']); // Navigate to the root route
    window.location.reload(); // Reload the page
  }
}
