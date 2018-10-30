import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AvengerTableComponent } from './avenger-table/avenger-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'avenger-table', component: AvengerTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Routing components should be declared here, instead of declaring in app.module.ts.
export const routingComponents = [HomeComponent, AvengerTableComponent];
