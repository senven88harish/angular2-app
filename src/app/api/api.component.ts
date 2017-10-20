import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";

@Component({
  selector: 'my-api',
  templateUrl: './api.component.html',
  styleUrls: [ './api.component.css' ]
})

export class ApiComponent implements OnInit{

  users;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(p=>this.users = p);
  }
}
