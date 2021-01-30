import { Component } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { INgxFixedSettingsBarStyleConfig } from 'ngx-fixed-settings-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  faCog = faCog;
  config: INgxFixedSettingsBarStyleConfig = {
    
  };

  constructor(){

  }
}
