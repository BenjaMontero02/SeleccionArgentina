import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnFinalizarCompraComponent } from './btn-finalizar-compra.component';

describe('BtnFinalizarCompraComponent', () => {
  let component: BtnFinalizarCompraComponent;
  let fixture: ComponentFixture<BtnFinalizarCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnFinalizarCompraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnFinalizarCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
