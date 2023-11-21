import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { PhaseListComponent } from './phase-list.component';
import { PhasesService } from './phases.service';
import { Subject } from 'rxjs';

describe('PhaseListComponent', () => {
  let component: PhaseListComponent;
  let fixture: ComponentFixture<PhaseListComponent>;
  let phasesService: PhasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhaseListComponent],
      providers: [{ provide: PhasesService, useClass: PhasesServiceMock }],
    });
    fixture = TestBed.createComponent(PhaseListComponent);
    phasesService = TestBed.inject(PhasesService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have phase list retrieved from the service', fakeAsync(() => {
    expect(component.phaseList).toEqual(phasesService.basePhases);
  }));
});

class PhasesServiceMock {
  basePhases: string[] = [];
  basePhasesSubject = new Subject<string[]>()
}
