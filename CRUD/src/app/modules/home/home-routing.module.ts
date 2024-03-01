import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './home.component';


const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children: [
        { path: 'list', component: UserListComponent },
        { path: 'crud', component: CrudComponent},
        {
            path: '', component: UserListComponent
        }
      ]
    },

  ];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRoutingModule {}