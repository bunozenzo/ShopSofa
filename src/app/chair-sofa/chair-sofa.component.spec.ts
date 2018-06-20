import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairSofaComponent } from './chair-sofa.component';

describe('ChairSofaComponent', () => {
  let component: ChairSofaComponent;
  let fixture: ComponentFixture<ChairSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChairSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChairSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
