import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";
import { DataService, Skin } from "./data.service";
import { ConfirmationService } from "primeng/api";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  providers: [ConfirmationService]
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
    private dService: DataService,
    private confService: ConfirmationService
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
    this.confService.confirm({
      message: "Delete the `" + this.currentSkin.SKIN_NAME + "` skin?",
      header: "Confirmation",
      icon: "pi pi-question-circle",
      accept: () => {
        const ndx: number = this.skins.indexOf(this.currentSkin);
        const id: number = this.currentSkin.ID;
        if (ndx !== -1) this.skins.splice(ndx, 1);

        this.currentSkin = this.skins[ndx];

        this.dService.delete(id).subscribe(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
      },
      reject: () => {}
    });
    /*
    if (confirm("Delete " + this.currentSkin.SKIN_NAME + "?")) {
      const ndx: number = this.skins.indexOf(this.currentSkin);
      const id: number = this.currentSkin.ID;
      if (ndx !== -1) this.skins.splice(ndx, 1);

      this.currentSkin = this.skins[ndx];

      this.dService.delete(id).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
*/
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
