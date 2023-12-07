import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IComment, IPost} from "../../interfaces";
import {CommentService, PostService} from "../../services";
import {CommentComponent} from "../comment/comment.component";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent {
    post:IPost
    comments:IComment[]
    constructor(private activatedRoute:ActivatedRoute, private postService:PostService,private commentService:CommentService) {
      this.activatedRoute.params.subscribe(({id})=>{

         this.postService.getById(id).subscribe(value => this.post = value);
         this.commentService.getByPostId(id).subscribe(value => this.comments = value)

      })
    }
}
