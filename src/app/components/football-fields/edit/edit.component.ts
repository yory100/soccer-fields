import { Component, OnInit } from "@angular/core";

import { FieldService } from "../../../services/field.service";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(private fieldService: FieldService) {}

  field: Object;
  ngOnInit() {
    this.fieldService.getById().subscribe(data => {
      this.field = data;
    });
  }
}
