import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchFilterBarPage } from './search-filter-bar.page';

describe('SearchFilterBarPage', () => {
  let component: SearchFilterBarPage;
  let fixture: ComponentFixture<SearchFilterBarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchFilterBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
