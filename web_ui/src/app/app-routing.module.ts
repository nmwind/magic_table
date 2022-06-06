import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultComponent } from './components/effects/default/default.component';
import { RainbowComponent } from './components/effects/rainbow/rainbow.component';

const routes: Routes = [
  { path: 'rainbow', component: RainbowComponent },
  { path: 'default', component: DefaultComponent },
  { path: '', redirectTo: '/default', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }