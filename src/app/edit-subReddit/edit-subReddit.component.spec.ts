import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubRedditComponent } from './edit-subReddit.component';

describe('EditSubRedditComponent', () => {
  let component: EditSubRedditComponent;
  let fixture: ComponentFixture<EditSubRedditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSubRedditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSubRedditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
