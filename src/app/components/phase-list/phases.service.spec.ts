import { TestBed } from '@angular/core/testing';

import { PhasesService } from './phases.service';

describe('PhasesService', () => {
  let service: PhasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when add phase', () => {
    describe('without specifing its position', () => {
      it('should add the new phase at the last position of existing phase list', () => {
        const newPhase = 'new phase';
        service.addPhase(newPhase);
        expect(service.basePhases[service.basePhases.length - 1]).toEqual(
          newPhase
        );
      });
    });
    describe('with its position specified', () => {
      it('should add the new phase at the given position', () => {
        const newPhase = 'new phase';
        service.addPhase(newPhase, 2);
        expect(service.basePhases[2]).toEqual(newPhase);
      });
    });
  });
});
