import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerSofaComponent } from './corner-sofa.component';

describe('CornerSofaComponent', () => {
  let component: CornerSofaComponent;
  let fixture: ComponentFixture<CornerSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CornerSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
