import {Component, Input} from '@angular/core';

import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
    @Input() post:IPost
}
