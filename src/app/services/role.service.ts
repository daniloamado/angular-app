import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from '../role.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = "http://locahost:8080/role"

  constructor(private httpClient: HttpClient) {

  }

  getRoleList(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.baseUrl}`);
  }

  createRole(role: Role): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, role);
  }

  getRoleById(id: number): Observable<Role>{
    return this.httpClient.get<Role>(`${this.baseUrl}/${id}`)
  }

  updateRole(id:number, role:Role): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, role);
  }

  deleteRole(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
