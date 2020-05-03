import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../services/data.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  userModal = new User();

  constructor(private dataService :DataService, private router :Router ) { }

  onSubmit() {
    alert('Form Submitted succesfully and sent to the api\n Check the values in browser console.');
    
    let form = this.userModal


     let newUser = {
      "first_name": form.firstName,
      "last_name": form.lastName,
      "user_name":form.username,
      "phone": form.phone,
      "email": form.email,
      "password": form.password,

    }
    this.dataService.addPost(newUser);

     this.router.navigate(["/main"]) ;
  }
}