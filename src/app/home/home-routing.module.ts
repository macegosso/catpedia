import { FavoriteComponent } from './favorite/favorite.component';
import { CardsComponent } from './card/display/cards.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './card/detail/detail.component';

const routes: Routes = [
  {path: '', component: CardsComponent},
  {path: 'favoritos', component: FavoriteComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
