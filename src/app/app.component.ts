import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DataService, Skin } from "./data.service";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
    styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
})
export class AppComponent implements OnInit { 
  skins: any;
  currentSkin = null;
  editSkin = {};
  currentIndex = -1;
  editDialog = false;
  submitted = false;
  name = "";

  constructor(private primengConfig: PrimeNGConfig, private dService: DataService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
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
