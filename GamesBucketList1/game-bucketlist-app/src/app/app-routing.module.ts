import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameListComponent } from './pages/game-list/game-list.component';
import { GameCreateComponent } from './pages/game-create/game-create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:"list", component: GameListComponent },
  { path:"create", component: GameCreateComponent },
  { path:"", redirectTo: "list", pathMatch: "full" },
  { path:"**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
