import { Component, OnInit, Inject } from '@angular/core';
// import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(@Inject('auth') private authservice) { }

  ngOnInit() {
  }

  onClick(username, password) {
    console.log('button was clicked');
    console.log('username:' + username + "\n\r" + "password" + password);
    console.log('auth result is: ' + this.authservice.loginWithCredentials(username, password));
  }

}
