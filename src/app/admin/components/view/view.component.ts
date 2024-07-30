import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../admin.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { UserpopupComponent } from '../userpopup/userpopup.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatIcon,MatButton],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  data:any;
  constructor(private dialog:MatDialog){}


 private http=inject(AdminService);


  ngOnInit(): void {
this.getUserList();
  }

   deleteUser(id:any) {

  }

  getUserList(){
    this.http.getUser().subscribe(response => {
      this.data = response.message;
     
    });

    }

    openpopup(){
      this.dialog.open(UserpopupComponent,{
        width:'40%',
        enterAnimationDuration:'1000ms',
        exitAnimationDuration:'1000ms',

      })
    }

}
