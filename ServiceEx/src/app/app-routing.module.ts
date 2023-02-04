import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteTypeComponent } from './institute-type/institute-type.component';
import { ShowInstituteTypeComponent } from './show-institute-type/show-institute-type.component';

const routes: Routes = [
  {path:"",component:InstituteTypeComponent},
  {path:"details/:id",component:ShowInstituteTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
