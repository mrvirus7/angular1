import { Component, OnInit, inject } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SuccessorpopupComponent } from '../successorpopup/successorpopup.component';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatIcon,MatButton],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  data:any;
  constructor(private dialog:MatDialog){}


 private http=inject(AdminService);


  ngOnInit(): void {
this.getProjectList();
  }

   deleteUser(id:any) {

  }

  getProjectList(){
    this.http.getproject().subscribe(response => {
      this.data = response.message;
      console.log(this.data);

    });

    }

    //edit modal click

    updateUser(id: any) {
      // Assign the row values to this.updateRestaurant
      // console.log(id)

      this.openpopup(id, 'Edit Staff')

    }
    addUser(){
      this.openpopup(0, 'Add Staff');
    }

    openpopup(id:any,title:any){
      var _popup =  this.dialog.open(SuccessorpopupComponent,{
          width:'40%',
          enterAnimationDuration:'1000ms',
          exitAnimationDuration:'1000ms',
          data:{
            title:title,
            id:id
          }

        });
        _popup.afterClosed().subscribe(item=>{
         this.ngOnInit();
        })
      }

    // openpopup(){
    //   this.dialog.open(SuccessorpopupComponent,{
    //     width:'40%',
    //     enterAnimationDuration:'1000ms',
    //     exitAnimationDuration:'1000ms',

    //   })
    // }


}
