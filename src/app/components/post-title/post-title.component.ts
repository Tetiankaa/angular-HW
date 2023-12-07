import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-post-title',
  standalone: true,
  imports: [],
  templateUrl: './post-title.component.html',
  styleUrl: './post-title.component.css'
})
export class PostTitleComponent {
  @Input() post:IPost

  constructor(private router:Router) {
  }
  getPostInfo() {
    this.router.navigate([`/posts/${this.post.id}`])
  }
}
