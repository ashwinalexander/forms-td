import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'teacher';
  defaultRadio = 'female';
  answer = '';
  genders = ['male', 'female'];
  submitted = false;

  user = {
    username: '',
    email: '',
    secretQuestion: "",
    secretAnswer: '',
    gender: ''

  }


  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue(
    //   {
    //     userData: {
    //       username: suggestedName,
    //       email: '',
    //     },
    //     secret: 'pet',
    //     questionAnswer: '',
    //     gender: 'male'

    //   }
    // );

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName,

      }


    });

  }


  // onSubmit(form: NgForm) {
  //   console.log(form);

  // }


  onSubmit() {
    console.log(this.signUpForm);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.secretAnswer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    //resets form and also state
    this.signUpForm.reset();
  }



}
