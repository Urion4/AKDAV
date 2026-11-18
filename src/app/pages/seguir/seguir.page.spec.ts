import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeguirPage } from './seguir.page';

describe('SeguirPage', () => {
  let component: SeguirPage;
  let fixture: ComponentFixture<SeguirPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
