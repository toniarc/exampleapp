import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../prodepa/security/authentication.service';
import { AuthenticatedUser } from '../../../prodepa/security/authenticateduser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  authenticatedUser: AuthenticatedUser;

  constructor(private auth: AuthenticationService) {
    this.authenticatedUser = auth.getAuthenticatedUser();
  }

  ngOnInit() {
  }

}
