import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {

  isAdmin: boolean = false;

  constructor(private authService: AuthService) {
    authService.isAdmin();

   }

  ngOnInit(): void {
    this.authService.isAdmin$.subscribe(isAdmin => {
      console.log(`isAdmin ${isAdmin}`)
      this.isAdmin = isAdmin;
    })
  }

}
