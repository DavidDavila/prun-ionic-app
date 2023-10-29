import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrunPage } from './prun.page';

describe('PrunPage', () => {
  let component: PrunPage;
  let fixture: ComponentFixture<PrunPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
