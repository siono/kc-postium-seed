import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UserService } from '../user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { PostService } from '../post.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostFormComponent } from '../post-form/post-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStoryComponent } from './new-story.component';

describe('NewStoryComponent: testing del componente', () => {
  let component: NewStoryComponent;
  let fixture: ComponentFixture<NewStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports:[
            ReactiveFormsModule,
            RouterTestingModule
          ],
      declarations: [ 
          NewStoryComponent,
          PostFormComponent
         ],
         providers:[
            PostService,
            HttpClient,
            HttpHandler,
            UserService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería instanciarse', () => {
    expect(component).toBeTruthy();
  });
});

describe('NewStoryComponent: testing del template', () => {
    
      let fixture;
      let template;
      let component;
      let submitEl;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports:[
                ReactiveFormsModule,
                RouterTestingModule
              ],
          declarations: [ 
              NewStoryComponent,
              PostFormComponent
             ],
             providers:[
                PostService,
                HttpClient,
                HttpHandler,
                UserService
            ]
        }).compileComponents();
    
        fixture = TestBed.createComponent(NewStoryComponent);
        template = fixture.debugElement;
        component = fixture.componentInstance;
        submitEl = fixture.debugElement.query(By.css('button'));
      }));
    
      it('Por defecto submit botton está deshabilitado', () => {
        component.enabled = false;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeTruthy();

      });
    
      
    
    });