import { User } from '../user';
import { Post } from '../post';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() post: Post;
  
  private _postSubscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute,private _userService: UserService,private _postService: PostService,private _router: Router) { }

  ngOnInit() {
    this._activatedRoute
    .data
    .subscribe((data: {post: Post})=>{
      this.post = data.post;
    });
    
  }

  addFavorite(){
    
    let idUser:number = this._userService.getUser().id;
    
    //si el usuario no ha dado like al post anteriormente
    if (!this.post.likes.find((element:number)=>{return element==idUser })){
    
      this._unsubscribeUpdateFavorite();
      this._postSubscription= this._postService
                              .addLikePost(this.post,idUser)
                              .subscribe(() => this._router.navigate([`/posts/${this.post.id}`]));
      
    }else{
      alert("Ya existe like tuyo de este post")
    }
    
  }

  private _unsubscribeUpdateFavorite(): void {
    if (this._postSubscription) {
      this._postSubscription.unsubscribe();
    }
  }

  

}
