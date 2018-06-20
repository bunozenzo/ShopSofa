import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinSofaComponent } from './skin-sofa.component';

describe('SkinSofaComponent', () => {
  let component: SkinSofaComponent;
  let fixture: ComponentFixture<SkinSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
