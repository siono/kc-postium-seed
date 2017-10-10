import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post } from '../post';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnChanges{

  postForm: FormGroup;
  @Input() post:Post;

  @Output() postSubmitted: EventEmitter<Post> = new EventEmitter();

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder) {
      this.createForm();
    }

  private createForm() {

    /*=========================================================================|
    | Purple Path                                                              |
    |==========================================================================|
    | Define para este FormGroup los objetos FormControl correspondientes a    |
    | las propiedades 'title', 'intro' y 'body' de los posts. Los dos primeros |
    | son obligatorios, así que recuerda añadir el validador oportuno.         |
    |=========================================================================*/

    this.postForm = this._formBuilder.group({
      title: ['',Validators.required],
      intro: ['',Validators.required],
      body: [''],
      media: ['']
    });
  }

  

  emitPostSubmitted(): void {
    const postFormulario: Post = this.postForm.value;
    postFormulario.likes = (this.post === undefined) ? [] : this.post.likes ;
    postFormulario.categories = (this.post === undefined) ? [] : this.post.categories ;
    postFormulario.author = (this.post === undefined) ? this._userService.getDefaultUser() : this.post.author ;
    postFormulario.publicationDate = (this.post === undefined) ? Date.now() : this.post.publicationDate ;
    
    if (typeof this.post !== 'undefined'){
      postFormulario.id = this.post.id
    };
  
    this.postSubmitted.emit(postFormulario);
  }

  
    public ngOnChanges(): void {
      this.postForm.reset();
      this.postForm.setValue({
        title: this.post.title || '',
        intro: this.post.intro || '',
        body: this.post.body || '',
        media: this.post.media || ''
      }
      )
    }
}
