import { UserService } from '../user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostFormComponent } from './post-form.component';


describe('FormPostComponent:', () => {
    
      let component: PostFormComponent;
      let fixture: ComponentFixture<PostFormComponent>;
      
      beforeEach(() => {
    
        TestBed.configureTestingModule({
            imports:[
                ReactiveFormsModule
            ],
          declarations: [
              PostFormComponent
            ],
            providers:[
                UserService
            ]
        });
    
        fixture = TestBed.createComponent(PostFormComponent);
        component = fixture.componentInstance;
      
    });

      it('Formulario inválido cuando está vacio', () => {
        expect(component.postForm.valid).toBeFalsy();
      });
    });
