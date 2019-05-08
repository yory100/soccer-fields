import { Component, OnInit } from "@angular/core";

import { FieldService } from "../../../services/field.service";
import { Auth } from "../../../core/auth";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  constructor(private fieldService: FieldService, private auth: Auth) {}

  fields: Object;
  ngOnInit() {
    this.fieldService.getAll().subscribe(data => {
      this.fields = data;
      console.log(data);
    });
  }
}
