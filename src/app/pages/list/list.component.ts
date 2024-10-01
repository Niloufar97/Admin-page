import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../Models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatInputModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  users: User[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@example.com', address: '123 Main St' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', address: '456 Elm St' },
    { id: 3, firstName: 'Mike', lastName: 'Johnson', email: 'mike@example.com', address: '789 Maple Ave' },
    { id: 4, firstName: 'Sarah', lastName: 'Williams', email: 'sarah@example.com', address: '101 Pine St' },
    { id: 5, firstName: 'Chris', lastName: 'Brown', email: 'chris@example.com', address: '202 Oak St' },
    { id: 6, firstName: 'Emily', lastName: 'Davis', email: 'emily@example.com', address: '303 Birch St' },
    { id: 7, firstName: 'David', lastName: 'Martinez', email: 'david@example.com', address: '404 Cedar St' },
    { id: 8, firstName: 'Laura', lastName: 'Garcia', email: 'laura@example.com', address: '505 Walnut St' },
    { id: 9, firstName: 'Asghar', lastName: 'asghari', email: 'asghar@example.com', address: '707 Walnut St' },
    { id: 10, firstName: 'mobina', lastName: 'Abadea', email: 'mobina@example.com', address: '200 Maple Ave' },
  ];

  dataSource = new MatTableDataSource<User>(this.users); 

  pageSize: number = 8;
  pageSizeOptions: number[] = [8, 10, 20];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(userId: number) {
    // Filter out the user with the given ID
    this.users = this.users.filter(user => user.id !== userId);
    this.dataSource.data = this.users; // Update data source
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
