import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { JoinAvengersComponent } from './join-avengers/join-avengers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'join-avengers', component: JoinAvengersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Routing components should be declared here, instead of declaring in app.module.ts.
export const routingComponents = [HomeComponent, JoinAvengersComponent];
