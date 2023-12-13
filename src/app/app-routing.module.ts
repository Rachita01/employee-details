import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component'; 
import { SecondpageComponent } from './secondpage/secondpage.component';
import { RightSectionComponent } from './right-section/right-section.component';


const routes: Routes = [
  {path:'firstpage',component:FirstpageComponent},
  {path:'secondpage',component:SecondpageComponent},
  {path:'addemployee',component:RightSectionComponent},
  {path:'',redirectTo:'/firstpage',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
