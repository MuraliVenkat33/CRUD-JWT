import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud/crud.component';
import { HomeRoutingModule } from './home-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    CrudComponent,
    UserListComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
