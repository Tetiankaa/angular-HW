import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForOf} from "@angular/common";


import {PostService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {PostTitleComponent} from "../post-title/post-title.component";
@Component({
  selector: 'app-post-titles',
  standalone: true,
  imports: [
    PostTitleComponent,
    NgForOf
  ],
  templateUrl: './post-titles.component.html',
  styleUrl: './post-titles.component.css'
})
export class PostTitlesComponent {
  posts:IPost[]

    constructor(private activatedRoute: ActivatedRoute, private postService:PostService) {
           this.activatedRoute.parent?.params.subscribe(({id})=>{
         this.postService.getByUserId(id).subscribe(value => this.posts = value);
    })

    }
}
