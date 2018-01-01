import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaderSearchComponent } from './weader-search.component';

describe('WeaderSearchComponent', () => {
  let component: WeaderSearchComponent;
  let fixture: ComponentFixture<WeaderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
