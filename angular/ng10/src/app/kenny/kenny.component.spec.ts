import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennyComponent } from './kenny.component';

describe('KennyComponent', () => {
  let component: KennyComponent;
  let fixture: ComponentFixture<KennyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
