import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {MatChipsModule} from "@angular/material/chips";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatChipsModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatSliderModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatChipsModule
  ]
})
export class MaterialModule {
}
