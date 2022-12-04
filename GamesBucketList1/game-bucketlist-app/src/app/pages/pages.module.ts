import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameItemComponent } from './game-list/game-item/game-item.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameCreateComponent } from './game-create/game-create.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    GameListComponent,
    GameItemComponent,
    GameCreateComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    GameListComponent,
    GameItemComponent
  ]
})
export class PagesModule { }
