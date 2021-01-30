import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxFixedSettingsBarComponent } from './Components/ngx-fixed-settings-bar.component';
import { StopPropagationDirective } from './Directives/stop-propagation.directive';

@NgModule({
  declarations: [
    NgxFixedSettingsBarComponent,
    StopPropagationDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxFixedSettingsBarComponent
  ]
})
export class NgxFixedSettingsBarModule { }
