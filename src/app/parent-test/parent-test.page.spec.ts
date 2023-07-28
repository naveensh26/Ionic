import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentTestPage } from './parent-test.page';

describe('ParentTestPage', () => {
  let component: ParentTestPage;
  let fixture: ComponentFixture<ParentTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ParentTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
