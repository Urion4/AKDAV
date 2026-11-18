import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HgPage } from './hg.page';

describe('HgPage', () => {
  let component: HgPage;
  let fixture: ComponentFixture<HgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
