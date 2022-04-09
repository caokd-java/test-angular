import {Component, OnInit} from '@angular/core';
import {GameService} from "./game.service";
import {Game} from "./game";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  topGames: Game[] = [];
  newGames: Game[] = [];
  slots: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.getData().subscribe(response => {

      console.log(response);

      for (let i = 0; i < response.length; i++) {
        const item = response[i];

        if (item.categories.indexOf('top') > -1) {
          this.topGames.push(item);
        }

        if (item.categories.indexOf('new') > -1) {
          this.newGames.push(item);
        }

        if (item.categories.indexOf('slots') > -1) {
          this.slots.push(item);
        }

      }

      // response.forEach(item => {
      //   if (item.categories.indexOf('top') > -1) {
      //     this.topGames.push(item);
      //   }
      //
      //   if (item.categories.indexOf('new') > -1) {
      //     this.newGames.push(item);
      //   }
      //
      //   if (item.categories.indexOf('slots') > -1) {
      //     this.slots.push(item);
      //   }
      // });

      // console.log(this.topGames);
    });
  }
}
