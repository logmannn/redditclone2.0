import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditHeaderHeaderLinksComponent } from './sub-reddit-header-header-links.component';

describe('SubRedditHeaderHeaderLinksComponent', () => {
  let component: SubRedditHeaderHeaderLinksComponent;
  let fixture: ComponentFixture<SubRedditHeaderHeaderLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditHeaderHeaderLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditHeaderHeaderLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
