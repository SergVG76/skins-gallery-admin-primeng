import { Component, OnInit } from "@angular/core";
import { DialogService } from 'primeng/dynamicdialog';
import { DataService, Skin } from "../data.service";

@Component({
  selector: "grid-main",
  templateUrl: "./grid-main.component.html",
  providers: [DialogService],
  styleUrls: ["./grid-main.component.css"]
})
export class GridMainComponent implements OnInit {
  skins: any;
  currentSkin = null;
  editSkin = {};
  currentIndex = -1;
  editDialog = false;
  submitted = false;
  name = "";

  constructor(private dService: DataService, public dialogService: DialogService) {}

  ngOnInit(): void {
    this.readSkins();
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

  refresh(): void {
    this.readSkins();
    this.currentSkin = null;
    confirm("refresh");
    this.currentIndex = -1;
  }

  addNew(): void {
    this.editSkin = {};
    this.editDialog = true;
    this.submitted = false;
  }

  setCurrentSkin(skin, index): void {
    this.currentSkin = skin;
    this.currentIndex = index;
  }

  deleteAllskins(): void {
    this.dService.deleteAll().subscribe(
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
    //    confirm("Search "+this.name);
    this.dService.searchByName(this.name).subscribe(
      skins => {
        this.skins = skins;
        console.log(skins);
      },
      error => {
        console.log(error);
      }
    );
  } /*
  skins: Skin[];

  ngOnskin{
    this.dService.readAll().subscribe((skins: Skin[]) => {
      this.skins = skins;
      console.log(this.skins);
    });
  }

  constructor(private dService: DataService) {}
*/
}
