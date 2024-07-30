import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
   HttpClientModule,
   
    MatIconModule,
    MatToolbarModule
  ]
})
export class AdminModule { }
