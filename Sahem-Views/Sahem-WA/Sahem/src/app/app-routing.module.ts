import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'projects', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) }, { path: 'creators', loadChildren: () => import('./creators/creators.module').then(m => m.CreatorsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
