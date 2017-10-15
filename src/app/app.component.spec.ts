import { SearchBoxComponent } from './search-box/search-box.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent: testing del componente', () => {

  let fixture;
  let componente;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    componente = fixture.componentInstance;
  }));

  it('debería instanciarse', async(() => {

    expect(componente).toBeTruthy();
  }));
});


describe('AppComponent: testing del template', () => {

  let fixture;
  let template;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderBarComponent,
        SearchBoxComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    template = fixture.debugElement;
  }));

  it('debería tener un título con el texto Postium', () => {
    let h1 = template.query(By.css('h1'));
    let h1nativo = h1.nativeElement;
    expect(h1nativo.textContent).toBe('Postium');
  });

  it('debería tener una zona dinámica donde pintar los posts', () => {
    let routerOutlet = template.query(By.directive(RouterOutlet))
    expect(routerOutlet).toBeTruthy();
  });

});