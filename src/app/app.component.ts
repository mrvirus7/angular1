import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './admin/components/home/home.component';


import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AboutComponent,ContactComponent,HomeComponent,AdminModule,CommonModule,AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang17';
}
