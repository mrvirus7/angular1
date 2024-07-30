import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { HttpClientJsonpModule, HttpClientModule,HttpResponse } from '@angular/common/http';
import { response } from 'express';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule,FormsModule,HttpClientModule,ReactiveFormsModule,HttpClientJsonpModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

   forms!: FormGroup;
 // myForm!: FormGroup;
  validationErrors: any;

   id:any='';
  name: string = '';
  course: string ='';
  email:string='';
  phone:string='';
  validationMessages = {
    name: {
      required: 'Name is required.',
      maxLength: 'Name must be less than 191 characters.'
    },
    course: {
      required: 'Course is required.',
      maxLength: 'Course must be less than 191 characters.'
    },
    email: {
      required: 'Email is required.',
      email: 'Please enter a valid email address.',
      maxLength: 'Email must be less than 191 characters.'
    },
    phone: {
      required: 'Phone is required.',
      minLength: 'Phone must be 10 digits long.',
      maxLength: 'Phone must be 10 digits long.',
      pattern: 'Phone must contain only numbers.'
    }
  };

// private http=inject(AdminService);
 constructor(private fb:FormBuilder,private http: AdminService){
  this.forms = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(191)]],
    course: ['', [Validators.required, Validators.maxLength(191)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(191)]],
    phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]]
  });
 }


  ngOnInit(): void {

  }


  submitForm() {
    if (this.forms.invalid) {
      // Handle form validation errors (e.g., display error messages)
      console.log("Form is invalid. Please check the fields.");
      return;
    }

    const formData = this.forms.value; // Retrieve form data
    this.http.createAuth(formData).subscribe(
      (response: any) => {
        if (response.status === 200) {
          console.log("Form submitted successfully:", response);
          // Optionally, reset the form after successful submission
          this.forms.reset();
        } else {
          console.error("Server returned an error:", response);
        }
      },
      (error) => {
        if (error.status === 422) {
          console.error("Validation errors occurred:", error.error.message);

          // Handle validation errors (e.g., display error messages)
        } else {
          console.error("An error occurred:", error);
        }
      }
    );
  }
}

