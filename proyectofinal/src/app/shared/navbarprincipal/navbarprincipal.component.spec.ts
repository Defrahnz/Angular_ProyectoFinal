import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarprincipalComponent } from './navbarprincipal.component';

describe('NavbarprincipalComponent', () => {
  let component: NavbarprincipalComponent;
  let fixture: ComponentFixture<NavbarprincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarprincipalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarprincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
