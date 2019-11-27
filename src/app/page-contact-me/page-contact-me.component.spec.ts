import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactMeComponent } from './page-contact-me.component';

describe('PageContactMeComponent', () => {
  let component: PageContactMeComponent;
  let fixture: ComponentFixture<PageContactMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageContactMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
