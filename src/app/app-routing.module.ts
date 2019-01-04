import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RecyclerComponent } from './recycler/recycler.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '',     redirectTo: '/catalog', pathMatch: 'full'},
  { path: 'recycler', component: RecyclerComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'catalog', component: CatalogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
