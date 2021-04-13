import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";
import { GridMainComponent } from "./grid-main/grid-main.component";
import { DataService } from "./data.service";

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from "primeng/button"
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import { DynamicDialogModule } from 'primeng/dynamicdialog';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
		DialogModule,
    DynamicDialogModule,
    TableModule,
		ToastModule,
    RadioButtonModule,
    InputNumberModule,
    ToolbarModule
  ],
  declarations: [AppComponent, GridMainComponent],
  bootstrap: [AppComponent],
  providers: [MessageService, DataService]
})
export class AppModule {}
