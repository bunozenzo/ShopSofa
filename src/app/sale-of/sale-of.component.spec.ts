import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleOfComponent } from './sale-of.component';

describe('SaleOfComponent', () => {
  let component: SaleOfComponent;
  let fixture: ComponentFixture<SaleOfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleOfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
