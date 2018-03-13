import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleBlockComponent } from './middle-block.component';

describe('MiddleBlockComponent', () => {
  let component: MiddleBlockComponent;
  let fixture: ComponentFixture<MiddleBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
