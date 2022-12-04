import { Component } from '@angular/core';
import Game from 'src/app/models/Game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {
  gameList: Game[] = [
    {
      title: "Dark Souls 3",
      synopsis: "The fire is fading. Darkness creeps across the land. The Lords of Cinder charged with watching over the First Flame have abandoned their thrones. The Champion of Ash, an undead is chosen to return them to their thrones.",
      releaseDate: new Date("2016-03-24"),
      studio: "From Software",
      played: false
    },
    {
      title: "The Last of Us",
      synopsis: "In a hostile, post-pandemic world, Joel and Ellie, brought together by desperate circumstances, must rely on each other to survive a brutal journey across what remains of the United States.",
      releaseDate: new Date(),
      studio: "Naughty Dog",
      played: false
    },
    {
      title: "Vampire: The Masquerade - Bloodlines",
      synopsis: "Beginning your journey as a new Kindred, you must choose your path to follow the high class Vampire Society, or the lawbreaking group of Anarchs as you find your place in this new world.",
      releaseDate: new Date("2004-11-16"),
      studio: "Troika Games",
      played: false
    },
    {
      title: "Celeste",
      synopsis: "The game follows a young woman named Madeline as she climbs the titular Celeste Mountain, facing opposition from both the mountain's natural obstacles and from within herself.",
      releaseDate: new Date("2004-11-16"),
      studio: "Troika Games",
      played: false
    }
  ];
}
