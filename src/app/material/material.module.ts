import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatMenuModule
  ]
})
export class MaterialModule { }
