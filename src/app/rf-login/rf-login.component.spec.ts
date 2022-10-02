import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfLoginComponent } from './rf-login.component';

describe('RfLoginComponent', () => {
  let component: RfLoginComponent;
  let fixture: ComponentFixture<RfLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
