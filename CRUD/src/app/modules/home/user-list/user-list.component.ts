import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any = []
  userForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private http: HttpClient) {
    this.getUsers()
  }

  getUsers() {
    this.http.get('https://dummyjson.com/users').subscribe((result: any) => {
      console.log(result);
      this.users = result.users;
    })
  }

  editBtnClicked(user: any){
    this.http.get('https://dummyjson.com/users/'+user.id).subscribe((result: any) => {
      console.log(result);
      // this.users = result.users;
      this.userForm = new FormGroup({
        id: new FormControl(result.id),
        firstName: new FormControl(result.firstName, [Validators.required]),
        lastName: new FormControl(result.lastName,[Validators.required]),
        email: new FormControl(result.email,[Validators.required])
      });
    })
  }
  @ViewChild('closebtn') closebutton: any;
  updateUser(){
    console.log(this.userForm.value);
    this.http.put('https://dummyjson.com/users/'+this.userForm.value.id, this.userForm.value).subscribe(result => {
      console.log(result);
      this.closebutton.nativeElement.click();
      alert('User Updated SuccessFully!');
    }, err => {
      console.log(err);
    })
  }

  deleteBtnClicked(user: any){
    this.http.delete('https://dummyjson.com/users/'+user.id, user).subscribe(result => {
      console.log(result);
      alert('User Deleted Successfully.');
    }, err => {
      console.log(err);
    })
  }
}
