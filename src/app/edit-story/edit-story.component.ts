import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {

  post: Post;
  private _postSubscription: Subscription;
  
  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _postService: PostService) { }

  ngOnInit() {
    this._activatedRoute
    .data
    .subscribe((data: { post: Post }) => {
      this.post = data.post;
    });
  }

  editPost(post: Post): void {
    this._unsubscribePostCreation();
    this._postSubscription = this._postService
                                 .updatePost(post)
                                 .subscribe(() => this._router.navigate(['/']));
  }

  private _unsubscribePostCreation(): void {
    if (this._postSubscription) {
      this._postSubscription.unsubscribe();
    }
  }

}
