import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlockUserComponent } from './block-user/block-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'block-user', component:BlockUserComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[
  BlockUserComponent,AboutComponent,HomeComponent
]

