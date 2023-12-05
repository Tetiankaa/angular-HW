import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {PostService, UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {PostsComponent} from "../posts/posts.component";


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    PostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users:IUser[];
  posts:IPost[];

  constructor(private userService:UserService, private postService:PostService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }


  getPosts(id: number) {
    this.postService.getByUserId(id).subscribe(value => this.posts = value)
  }
}
