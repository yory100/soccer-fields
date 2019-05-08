import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { FieldService } from "../../../services/field.service";
import { Auth } from "../../../core/auth";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  constructor(private fieldService: FieldService, private auth: Auth) {}

  editForm: FormGroup;
  field: Object = {
    name: "",
    address: "",
    tel: ""
  };
  name: string;

  ngOnInit() {
    this.fieldService.getById().subscribe(data => {
      this.field = data;

      this.editForm = new FormGroup({
        name: new FormControl(this.field.name, Validators.required),
        address: new FormControl(this.field.address, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40)
        ]),
        tel: new FormControl(this.field.tel, Validators.required),
        pictures: new FormArray([]),
        openFrom: new FormControl("07:00"),
        openTo: new FormControl("23:00")
      });
    });
  }

  onSubmit() {
    this.fieldService.edit(this.editForm.value);
  }

  // deleteForm(){
  //   this.fieldService.deleteField()
  // }

  onAddPicture() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.editForm.get("pictures")).push(control);
  }
}
