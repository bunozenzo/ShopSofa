import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSofaComponent } from './table-sofa.component';

describe('TableSofaComponent', () => {
  let component: TableSofaComponent;
  let fixture: ComponentFixture<TableSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
