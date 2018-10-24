import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatGridListModule,
    Material.MatToolbarModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
  ],
  exports: [
    Material.MatButtonModule,
    Material.MatCheckboxModule,
    Material.MatCardModule,
    Material.MatDialogModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatGridListModule,
    Material.MatToolbarModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
  ],
  declarations: []
})
export class MaterialModule { }
