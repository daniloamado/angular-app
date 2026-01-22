import { Component, OnInit } from '@angular/core';
import { ActivatedRoute Router } from '@angular/router';
import { Role } from '../role.model';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role-update',
  templateUrl: './role-update.component.html',
  styleUrls: ['./role-update.component.css']
})
export class RoleUpdateComponent implements OnInit {

  id!: number;
  role: Role = new Role();

  constructor(private roleService: RoleService,
    private route: ActivatedRoute, private router: Router) { }

  private getRoleById() {
    this.id = this.route.snapshot.params['id'];
    this.roleService.getRoleById(this.id).subscribe({
      next: (data) => {
        this.role = data;
        },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getRoleById();
  }

  updateRole() {
    this.roleService.updateRole(this.id, this.role).subscribe({
      next: (data) => {
        console.log(data);
        this.redirectToRoleList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  redirectToRoleList() {
    this.router.navigate(['/roles']);
  }

  onSubmit() {
    console.log(this.role);
    this.updateRole();
  }

}
