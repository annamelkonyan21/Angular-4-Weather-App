import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaderListComponent } from './weader-list.component';

describe('WeaderListComponent', () => {
  let component: WeaderListComponent;
  let fixture: ComponentFixture<WeaderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
