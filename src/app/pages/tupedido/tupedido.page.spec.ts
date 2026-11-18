import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TupedidoPage } from './tupedido.page';

describe('TupedidoPage', () => {
  let component: TupedidoPage;
  let fixture: ComponentFixture<TupedidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TupedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
