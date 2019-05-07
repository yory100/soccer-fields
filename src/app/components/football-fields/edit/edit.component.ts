import { Component, OnInit } from "@angular/core";

import { FieldService } from "../../../services/field.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(private fieldService: FieldService) {}

  fields: Object;
  ngOnInit() {
    this.fieldService.getAll().subscribe(data => {
      this.fields = data;
    });
  }
}
