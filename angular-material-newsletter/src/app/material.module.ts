import {NgModule} from'@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule, MatDialogModule, MatTableModule, MatIconModule,
    MatMenuModule, MatFormFieldModule],
})
export class CustomMaterialModule { }