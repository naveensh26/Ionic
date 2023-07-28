import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelemetryTypePage } from './telemetry-type.page';

describe('TelemetryTypePage', () => {
  let component: TelemetryTypePage;
  let fixture: ComponentFixture<TelemetryTypePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TelemetryTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
