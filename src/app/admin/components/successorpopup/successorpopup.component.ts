
import { Component, OnInit,Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';

import {
  MatDialogModule,

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../admin.service';

@Component({
  selector: 'app-successorpopup',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule,MatButtonModule,MatMenuModule, MatInputModule, MatSelectModule,CommonModule],
  templateUrl: './successorpopup.component.html',
  styleUrl: './successorpopup.component.css'
})
export class SuccessorpopupComponent implements OnInit {
  inputdata:any;
  myForm!:FormGroup;
  Nameoptions: any[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private builder:FormBuilder,private ref:MatDialogRef<SuccessorpopupComponent>){

  }
  private http=inject(AdminService);

  ngOnInit(): void {
    this.inputdata=this.data;
    this.NameOptions();
  }

  ClosePopup(){
    this.ref.close();
  }

  NameOptions() {
    this.http.getName()
      .subscribe(response => {
        this.Nameoptions = response.message;
          //  console.log(this.options);

      });
  }



}
