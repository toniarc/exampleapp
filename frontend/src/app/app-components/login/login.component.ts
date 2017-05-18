import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthenticationService } from '../../prodepa/security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    if(!this.auth.isUserLoggedIn()){
      this.auth.login()
      .subscribe((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigate(['/main/home']);
          return;
        }

        window.location.href = 'https://www2.desenvolver.prodepa.gov.br/governodigital';
      }, (error: Response) => {
        if (error.status === 401) {
          window.location.href = 'https://www2.desenvolver.prodepa.gov.br/governodigital';
        } else {
          console.log('ocorreu um erro', error);
        }

      });
    }
    
  }

}
