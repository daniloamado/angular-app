import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.css']
})
export class RoleCreateComponent implements OnInit {

  role: Role = new Role();

  constructor(private roleService: RoleService, private router: Router) { }

  ngOnInit(): void {
  }

  saveRole() {
    this.roleService.createRole(this.role).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToRoleList();
      },
      error: (err) => {
        console.error('Failed to save role', err)
      }
    });
  }

  redirectToRoleList(): void {
    this.router.navigate(['/roles']);
  }

  onSubmit() {
    console.log(this.role);
    this.saveRole();
  }
}
