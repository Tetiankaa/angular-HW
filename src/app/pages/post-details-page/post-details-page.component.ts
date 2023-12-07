import { Component } from '@angular/core';

import {PostDetailsComponent} from "../../components/post-details/post-details.component";

@Component({
  selector: 'app-post-details-page',
  standalone: true,
  imports: [
    PostDetailsComponent
  ],
  templateUrl: './post-details-page.component.html',
  styleUrl: './post-details-page.component.css'
})
export class PostDetailsPageComponent {

}
