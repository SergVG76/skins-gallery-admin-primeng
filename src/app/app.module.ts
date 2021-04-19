import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DataService } from "./data.service";

import { ConfirmDialogModule } from "primeng/confirmdialog";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { RatingModule } from "ng-starrating";
import { RadioButtonModule } from "primeng/radiobutton";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { InputTextModule } from "primeng/inputtext";
import { ToolbarModule } from "primeng/toolbar";
import { InputNumberModule } from "primeng/inputnumber";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { CheckboxModule } from "primeng/checkbox";
import { FileUploadModule } from "primeng/fileupload";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";

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
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    CheckboxModule,
    ToolbarModule,
    DividerModule,
    FileUploadModule,
    DropdownModule,
    ConfirmDialogModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule {}
