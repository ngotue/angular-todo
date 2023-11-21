import { Component } from '@angular/core';
import { PhasesService } from './phases.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.scss'],
})
export class PhaseListComponent {
  phaseList: String[];
  phaseSub: Subscription

  constructor(private phasesService: PhasesService){}

  ngOnInit() {
    this.phaseList = this.phasesService.basePhases
    this.phaseSub = this.phasesService.basePhasesSubject.subscribe(phases => {
      this.phaseList = phases
    })
  }

  ngOnDestroy(){
    this.phaseSub?.unsubscribe()
  }
}
