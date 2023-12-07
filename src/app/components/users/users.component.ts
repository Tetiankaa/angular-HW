import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {UserComponent} from "../user/user.component";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    UserDetailsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:IUser[]
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }


}
