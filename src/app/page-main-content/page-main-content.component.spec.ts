import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainContentComponent } from './page-main-content.component';

describe('PageMainContentComponent', () => {
  let component: PageMainContentComponent;
  let fixture: ComponentFixture<PageMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
