import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

import {IComment} from "../../interfaces";


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment:IComment

}
