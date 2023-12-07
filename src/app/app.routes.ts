import { Routes } from '@angular/router';

import {MainLayoutComponent} from "./layouts";
import {PostDetailsPageComponent, PostTitlesPageComponent, UserDetailsPageComponent, UsersPageComponent} from "./pages";


export const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[
      {path:'',redirectTo:'users',pathMatch:"full"},
      {path:'users',component:UsersPageComponent},
      {path:'users/:id', component:UserDetailsPageComponent,children:[
              {path:'posts',component:PostTitlesPageComponent}
            ]},
      {path:'posts/:id',component:PostDetailsPageComponent}
    ]}
];
