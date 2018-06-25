import { Component, OnInit } from '@angular/core';
import { AuthService,SocialUser,GoogleLoginProvider} from 'angular4-social-login';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule} from '@angular/material';
@Component({
  selector: 'app-site-login',
  templateUrl: './site-login.component.html',
  styleUrls: ['./site-login.component.css']
})
export class SiteLoginComponent implements OnInit {
  user: SocialUser;
  form: FormGroup;
  usermodel:any ={};
  private formSubmitAttempt: boolean;
  email = new FormControl('', [Validators.required, Validators.email]);
  formSubmitted:boolean=false;
  color='orange';

  constructor(private auth: AuthService,private router: Router,private fb: FormBuilder,private http:HttpClient) { }
 ngOnInit() {
  this.auth.authState.subscribe((user) => {
  this.user = user; });
  this.form = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

 }
 getErrorMessage() {
  return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
          '';
}
isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    debugger;
    this.formSubmitted=true;
    if (this.form.valid) {
      this.http.post('/user', this.usermodel)
      .subscribe(res => {
         // let id = res['_id'];
         // this.router.navigate(['/book-details', id]);
         this.formSubmitted=false;
        }, (err) => {
          this.formSubmitted=true;
          console.log(err);
        }
      );
    }

    this.formSubmitAttempt = true;
  }
 signInWithGoogle(): void {

  this.auth.signIn(GoogleLoginProvider.PROVIDER_ID).then(value => {
    debugger;
    console.log('Sucess', value),
      console.log('The given name is ' + value);
      this.router.navigateByUrl('/books');
  } )
    ;


 }
 signOut(): void {
  this.auth.signOut();
 }
}
