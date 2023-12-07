import { Component } from '@angular/core';
import {PostTitlesComponent} from "../../components/post-titles/post-titles.component";

@Component({
  selector: 'app-post-titles-page',
  standalone: true,
  imports: [
    PostTitlesComponent
  ],
  templateUrl: './post-titles-page.component.html',
  styleUrl: './post-titles-page.component.css'
})
export class PostTitlesPageComponent {

}
