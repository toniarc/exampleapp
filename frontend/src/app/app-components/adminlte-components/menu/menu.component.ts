import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../prodepa/security/authentication.service';
import { AuthenticatedUser } from '../../../prodepa/security/authenticateduser';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

  authenticatedUser: AuthenticatedUser;

  constructor(private auth: AuthenticationService) { 
    this.authenticatedUser = this.auth.getAuthenticatedUser();
  }

  hasRole(roleName): boolean {
    return this.auth.hasRole(roleName);
  }
}