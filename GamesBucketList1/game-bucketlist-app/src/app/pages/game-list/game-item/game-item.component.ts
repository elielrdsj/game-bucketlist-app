import { Component, Input } from '@angular/core';

import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent{
  @Input() game?: Game;

  constructor() {
  }
  changeStatus(): void {
    if (this.game) this.game.played = !this.game?.played;
  }

  getColor(): string {
    return this.game?.played? "#808080": "";
  }
}
