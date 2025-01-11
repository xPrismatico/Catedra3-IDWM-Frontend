import { Component } from '@angular/core';
import { PostCardComponent } from "../../components/post-card/post-card.component";

@Component({
  selector: 'posts',
  imports: [PostCardComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {

}
