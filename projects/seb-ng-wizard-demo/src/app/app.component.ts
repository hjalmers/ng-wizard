import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WizardStep } from 'projects/seb-ng-wizard/src/public_api';

@Component({
  selector: 'demo-root',
  template: `
    <wiz-wizard [wizardTitle]="title" [steps]="steps" lang="en" (navigate)="nav($event)">
      <div class="wizard-main col-12 col-lg order-1 order-md-0">
        <demo-main-content-example></demo-main-content-example>
      </div>
      <div class="wizard-right-content col-12 col-lg-auto order-0 order-md-1">
        <div class="alert alert-info">
          <h4 class="alert-heading">Right content</h4>
          Donec interdum, mauris ac dictum sollicitudin, sem metus accumsan nibh, eget lacinia nibh diam quis quam. Nam
          vel felis vitae sem dapibus pharetra. Nam vulputate odio risus, vitae placerat augue dignissim vel.
        </div>
      </div>
    </wiz-wizard>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seb-ng-wizard-demo';
  steps: WizardStep[] = [
    { path: '/first', text: 'First step' },
    { path: '/second', text: 'Second step' },
    { path: '/third', text: 'Third step' },
  ];

  constructor(private router: Router) {}

  nav(e: WizardStep) {
    this.router.navigateByUrl(e.path);
  }
}
