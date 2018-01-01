import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaderItemComponent } from './weader-item.component';

describe('WeaderItemComponent', () => {
  let component: WeaderItemComponent;
  let fixture: ComponentFixture<WeaderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
