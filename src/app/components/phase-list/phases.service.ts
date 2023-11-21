import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const CONCEPT = 'concept',
  DOING = 'doing',
  READY = 'ready',
  DONE = 'done';

@Injectable({
  providedIn: 'root',
})
export class PhasesService {
  basePhases = [CONCEPT, DOING, READY, DONE];
  basePhasesSubject = new Subject<string[]>()
  constructor() {}

  addPhase(phase: string, position: number = this.basePhases.length) {
    this.basePhases.splice(position, 0, phase)
    this.basePhasesSubject.next(this.basePhases)
  }
}
