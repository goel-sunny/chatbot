import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextngComponent } from './textng.component';

describe('TextngComponent', () => {
  let component: TextngComponent;
  let fixture: ComponentFixture<TextngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
