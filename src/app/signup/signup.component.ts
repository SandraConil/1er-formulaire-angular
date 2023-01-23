import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model : User = new User ("","","","");

  onSubmnit(): void {
  console.log('formulaire envoyé !')  }

}
