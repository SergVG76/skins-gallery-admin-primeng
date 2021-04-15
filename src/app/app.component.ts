import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { DataService, Skin } from "./data.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  skins: Skin[];
  currentSkin: Skin;
  editSkin: Skin;
  currentIndex = -1;
  editDialog = false;
  submitted = false;
  name = "";

  constructor(
    private primengConfig: PrimeNGConfig,
    private dService: DataService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.readSkins();
  }

  onSkinSelect() {
    this.currentIndex = this.currentSkin.ID;
  }

  onSkinUnselect() {
    this.currentIndex = -1;
  }

  onSkinDblClick($eevnt, skin) {
    this.setCurrentSkin(skin, skin.ID);
    this.edit();
  }

  readSkins(): void {
    this.dService.readAll().subscribe(
      skins => {
        this.skins = skins;
        console.log(skins);
      },
      error => {
        console.log(error);
      }
    );
  }

  addNew(): void {
    this.editSkin = {};
    this.editSkin.SKIN_NAME = "";
    this.editDialog = true;
    this.submitted = false;
  }

  edit(): void {
    this.editSkin = this.currentSkin;
    this.editDialog = true;
    this.submitted = false;
  }

  setCurrentSkin(skin, index): void {
    this.currentSkin = skin;
    this.currentIndex = index;
  }

  delete(): void {
    this.dService.delete(this.currentIndex).subscribe(
      response => {
        console.log(response);
        this.readSkins();
      },
      error => {
        console.log(error);
      }
    );
  }

  searchByName(): void {
    this.dService.searchByName(this.name).subscribe(
      skins => {
        this.skins = skins;
        console.log(skins);
      },
      error => {
        console.log(error);
      }
    );
  }

  hideDialog() {
    this.editDialog = false;
    this.submitted = false;
  }

  /*
  refresh(): void {
    this.readSkins();
    this.currentSkin = null;
    confirm("refresh");
    this.currentIndex = -1;
  }
*/
}
