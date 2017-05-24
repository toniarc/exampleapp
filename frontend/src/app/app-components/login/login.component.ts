import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthenticationService } from '../../prodepa/security/authentication.service';
import { ControleAcessoLogin } from '../../prodepa/security/controleacessologin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends ControleAcessoLogin implements OnInit {

  constructor(auth: AuthenticationService, router: Router) {
    super(auth, router);
   }

  ngOnInit(){
    this.login();
  }
}
