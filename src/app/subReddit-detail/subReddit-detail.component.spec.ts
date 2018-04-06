import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditDetailComponent } from './subReddit-detail.component';

describe('SubRedditDetailComponent', () => {
  let component: SubRedditDetailComponent;
  let fixture: ComponentFixture<SubRedditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
