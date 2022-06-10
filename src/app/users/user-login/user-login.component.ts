import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListsService } from 'src/app/Services/movie-lists.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import * as crypto from 'crypto-js';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserLoginComponent implements OnInit {

  constructor(private service:SharedService,private router: Router) { }

  ngOnInit(): void {
  }
  public userEmail: string="";
  public userPassword:string="";

  onSubmit()
  {
    const data=
      {
        "email":this.userEmail,
        "password": crypto.SHA256(this.userPassword).toString(),
      }
      

      
       
        this.service.validateUser(data).subscribe((res) => {
          console.log("all data from validation user")
          console.log(this.service.get());
          if(res)
         this.router.navigate(['/homepage'])
          else
          alert("Incorrect Username or Password");
        });
        
      } 
    }


