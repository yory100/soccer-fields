import { Component, OnInit } from "@angular/core";

import { PlayersService } from "../../../services/players.service";
import { Auth } from "../../../core/auth";

@Component({
  selector: "app-all-players",
  templateUrl: "./all-players.component.html",
  styleUrls: ["./all-players.component.css"]
})
export class AllPlayersComponent implements OnInit {
  constructor(public playersService: PlayersService, public auth: Auth) {}

  players: Object;
  ngOnInit() {
    this.playersService.getAll().subscribe(data => {
      this.players = data;
    });
  }
}
