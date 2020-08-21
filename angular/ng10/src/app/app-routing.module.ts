import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DavidComponent } from './david/david.component';
import { KennyComponent } from './kenny/kenny.component';
import { LenovoComponent } from './second/lenovo/lenovo.component';

const routes: Routes = [
  { path: 'david', component: DavidComponent },
  { path: 'kenny', component: KennyComponent },
  { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
