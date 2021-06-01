import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WizardModule } from '../../../../seb-ng-wizard/src/lib/wizard/wizard.module';
import { SharedModule } from '../shared/shared.module';

import { MoreExamplesComponent } from './components/secondary-content/more-examples/more-examples.component';
import { ExamplesComponent } from './components/steps/examples/examples.component';
import { GettingStartedComponent } from './components/steps/getting-started/getting-started.component';
import { IntroductionComponent } from './components/steps/introduction/introduction.component';
import { OptionsComponent } from './components/steps/options/options.component';
import { WizardTutorialRoutingModule } from './wizard-tutorial-routing.module';
import { WizardTutorialComponent } from './wizard-tutorial.component';

@NgModule({
  declarations: [
    WizardTutorialComponent,
    IntroductionComponent,
    GettingStartedComponent,
    OptionsComponent,
    ExamplesComponent,
    MoreExamplesComponent,
  ],
  imports: [CommonModule, WizardTutorialRoutingModule, WizardModule, SharedModule],
})
export class WizardTutorialModule {}
