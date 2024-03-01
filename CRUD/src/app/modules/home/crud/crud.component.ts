import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  constructor(private http: HttpClient){

  }
 
  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
        lastName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required])
  });

  addNewUser(){
    const obj = this.userForm.value;
    this.http.post('https://dummyjson.com/users/add',obj).subscribe(result => {
      console.log(result);
      alert('User Added Successfully!');
      this.userForm.reset();
    },err => {
      console.log(err);
    })
  }

}
