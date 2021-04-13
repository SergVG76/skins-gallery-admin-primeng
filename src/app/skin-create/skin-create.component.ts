import { Component, OnInit } from "@angular/core";
import { DataService, Skin } from "../data.service";

@Component({
  selector: "app-skin-create",
  templateUrl: "./skin-create.component.html",
  styleUrls: ["./skin-create.component.css"]
})
export class SkinCreateComponent implements OnInit {
  skin = {
    id: "",
    name: "",
    available: false
  };
  submitted = false;
  constructor(private dService: DataService) {}

  ngOnInit() {}

  createSkin(): void {
    const data = {
      id: this.skin.id,
      name: this.skin.name
    };

    this.dService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newSkin(): void {
    this.submitted = false;
    this.skin = {
      id: "",
      name: "",
      available: false
    };
  }
}
