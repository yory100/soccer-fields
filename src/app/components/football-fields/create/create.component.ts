import { Component, OnInit } from "@angular/core";

import { FieldService } from "../../../services/field.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(public fieldService: FieldService) {}

  ngOnInit() {}

  create(form) {
    this.fieldService.add(form.value);
  }
}
