import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from '../services/role.service'
import { Role } from '../role.model';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Role[] | undefined;

  constructor(private roleService: RoleService, private router: Router) {

  }

  ngOnInit(): void {
    this.getRoles();
  }

  private getRoles() {
    this.roleService.getRoleList().subscribe(data => {
      this.roles = data;
    });
  }

  updateRole(id: number) {
    this.router.navigate(['update-role', id]);
  }

  deleteRole(id: number) {
    this.roleService.deleteRole(id).subscribe(data => {
      console.log(data);
      this.getRoles();
    });
  }

}
