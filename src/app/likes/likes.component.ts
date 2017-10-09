import { Post } from '../post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {

  @Input() post: Post;

  likes:number[];
  userId: number;

  constructor() { }

  ngOnInit() {
    this.likes = this.post.likes;
  }

  addFavorite(idUser:number){

    let likes:number[] = this.post.likes;
    if (!likes.find((element:number)=>{return element==idUser })){
      console.log("Añadiendo Like al POST...");
      //TODO: añadir like al post de forma fija.
    }else{
      alert("Ya existe like tuyo de este post.")
    }
    
  }

  

}
