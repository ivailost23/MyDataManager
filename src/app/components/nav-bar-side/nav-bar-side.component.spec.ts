import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarSideComponent } from './nav-bar-side.component';

describe('NavBarSideComponent', () => {
  let component: NavBarSideComponent;
  let fixture: ComponentFixture<NavBarSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
