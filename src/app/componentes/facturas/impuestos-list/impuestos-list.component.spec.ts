import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpuestosListComponent } from './impuestos-list.component';

describe('ImpuestosListComponent', () => {
  let component: ImpuestosListComponent;
  let fixture: ComponentFixture<ImpuestosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpuestosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpuestosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
