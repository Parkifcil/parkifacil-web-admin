import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { fadeInUp400ms } from '../../../../@vex/animations/fade-in-up.animation';
import user from '@iconify/icons-fa-solid/user';
import { UserModel } from '../../../models/user.model';
import { AuthService } from '../../../services/login.service';





@Component({
  selector: 'vex-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel(); 

  form: FormGroup;

  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(public router: Router,
              public fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              public authService: AuthService
  ) {

   
  }

  ngOnInit() {

    this.form = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required]
    });
    
  }

  // send() {
  //   this.router.navigate(['/']);
  //   console.log(this.user);
  //   console.log('hola');

   // this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
     // duration: 10000
    // });
  // }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  loginUser(){
    console.log('hola');
    this.authService.signIn(this.form.value);

  }
}
