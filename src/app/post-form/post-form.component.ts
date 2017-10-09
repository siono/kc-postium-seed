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
      body: ['']
    });
  }

  

  emitPostSubmitted(): void {
    const postFormulario: Post = this.postForm.value;
    postFormulario.likes = this.post.likes ? this.post.likes : [];
    postFormulario.categories = this.post.categories ? this.post.categories : [];
    postFormulario.author = this.post.author ? this.post.author : this._userService.getDefaultUser();
    postFormulario.publicationDate = this.post.publicationDate ? this.post.publicationDate : Date.now();
    if(this.post.id) {postFormulario.id = this.post.id};
    console.log('PostFormulario', postFormulario);
    this.postSubmitted.emit(postFormulario);
  }


    public ngOnChanges(): void {
      this.postForm.reset();
      this.postForm.setValue({
        title: this.post.title || '',
        intro: this.post.intro || '',
        body: this.post.body || ''
      }
      )
    }
}
