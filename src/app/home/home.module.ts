import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CardsComponent } from './card/display/cards.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MaterialModule } from './../material/material.module';
import { DetailComponent } from './card/detail/detail.component';

@NgModule({
  declarations: [
    CardsComponent,
    FavoriteComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
