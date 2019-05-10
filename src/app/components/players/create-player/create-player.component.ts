import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { PlayersService } from "../../../services/players.service";

@Component({
  selector: "app-create-player",
  templateUrl: "./create-player.component.html",
  styleUrls: ["./create-player.component.css"]
})
export class CreatePlayerComponent implements OnInit {
  constructor(public playersService: PlayersService) {}

  createForm: FormGroup;

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required),
      games: new FormControl(null, Validators.required),
      goals: new FormControl(null, Validators.required),
      assists: new FormControl(null, Validators.required),
      picture: new FormControl(null)
    });
  }
  onSubmit() {
    this.playersService.add(this.createForm.value);
  }
}
