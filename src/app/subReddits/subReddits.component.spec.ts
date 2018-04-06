import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRedditsComponent } from './subReddits.component';

describe('SubRedditsComponent', () => {
  let component: SubRedditsComponent;
  let fixture: ComponentFixture<SubRedditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubRedditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRedditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
