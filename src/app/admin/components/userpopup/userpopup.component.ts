import { Component, OnInit,Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import Swal from 'sweetalert2';

import {
  MatDialogModule,

  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminService } from '../../../admin.service';
import { CommonModule } from '@angular/common';
import { response } from 'express';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-userpopup',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, ReactiveFormsModule, MatIconModule,MatButtonModule,MatMenuModule, MatInputModule, MatSelectModule,CommonModule ,  BrowserModule],
  templateUrl: './userpopup.component.html',
  styleUrl: './userpopup.component.css'
})
export class UserpopupComponent implements OnInit {
  inputdata:any;
  myForm!:FormGroup;
  options: any[] = [];

  firstname:any;
  lastname:any;
  phone:any;
  location:any;
  role:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private builder:FormBuilder,private ref:MatDialogRef<UserpopupComponent>){

  }

  private http=inject(AdminService);


  ngOnInit(): void {
    this.inputdata=this.data;
   this.fetchOptions();
   this.inputdata=this.data;
   this.setValue(this.inputdata.id)
  }
  setValue(newValue: any) {
    if (newValue) {
      this.firstname = newValue.firstname;
      this.lastname = newValue.lastname;
      this.phone = newValue.phone;
      this.location=newValue.location;
      this.role=newValue.role;
    }
  }

  ClosePopup(){
    this.ref.close();
  }

  SaveUser() {
    // Log form value
    console.log(this.myForm.value);

    // Check form validity
  }

  fetchOptions() {
    this.http.getrole()
      .subscribe(response => {
        this.options = response.message;
          //  console.log(this.options);

      });
  }

  SaveStaff() {
    // Check if required fields are not empty
    if (!this.firstname || !this.lastname || !this.phone || !this.location) {
      // If any required field is empty, show an error message
      //this.showError('Please fill in all required fields.');
      return; // Exit the function to prevent further execution
    }

    // Validate phone number format (assuming rest_phone is a string)
    // const phoneRegex = /^\d{10}$/; // Simple regex for 10-digit phone numbers
    // if (!phoneRegex.test(this.phone)) {
    //   this.showError('Please enter a valid phone number (10 digits without spaces or special characters).');
    //   return; // Exit the function if phone number format is invalid
    // }

    // If all validation passes, proceed to save the restaurant
    const addRest = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
      location:this.location
    };

    // this.http.createAuth(addRest).subscribe({
    //   next: (res) => {
    //     // Success response
    //     this.showSuccess('Restaurant added successfully!');
    //     this.ClosePopup(); // Close the popup after successful save
    //   },
    //   error: (err) => {
    //     // Error response
    //     console.error('Error occurred:', err);
    //     this.showError('An error occurred. Please check the log.');
    //   }
    // });
  }


  UpdateStaff() {
    const updateRest = {
      firstname: this.firstname,
      lastname: this.lastname,
      phone: this.phone,
      location:this.location
    };
    // this.http.createAuth(this.editId,updateRest).subscribe({
    //   next: (res) => {
    //     // Success response
    //     this.showSuccess('Restaurant edited successfully!');
    //     this.inputdata; // I'm not sure what this line does, please adjust as needed
    //     this.ClosePopup(); // Close the popup after successful save
    //   },
    //   error: (err) => {
    //     // Error response
    //     console.error('Error occurred:', err);
    //     this.showError('An error occurred. Please check the log.');
    //   }
    // });
    }
  showSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: message
    });
  }

  showError(message: string) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: message
    });
  }

}
