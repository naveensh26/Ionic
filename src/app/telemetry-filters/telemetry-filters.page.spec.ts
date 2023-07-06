import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryFiltersPage } from './telemetry-filters.page';

describe('TelemetryFiltersPage', () => {
  let component: TelemetryFiltersPage;
  let fixture: ComponentFixture<TelemetryFiltersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelemetryFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
