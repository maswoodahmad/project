import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RowDetailsDialogComponent } from './row-details-dialog/row-details-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'services', component:ServicesComponent},
  {path: 'about', component:AboutComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComp = [HomeComponent, ServicesComponent,AboutComponent, RowDetailsDialogComponent];
