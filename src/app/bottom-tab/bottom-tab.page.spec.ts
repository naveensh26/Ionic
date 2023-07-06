import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BottomTabPage } from './bottom-tab.page';

describe('BottomTabPage', () => {
  let component: BottomTabPage;
  let fixture: ComponentFixture<BottomTabPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BottomTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
