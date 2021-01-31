import { Component, Input, OnInit } from '@angular/core';
import { INgxFixedSettingsBarStyleConfig } from '../Models/ngx-fixed-settings-bar-style.config';

@Component({
  selector: 'ngx-fixed-settings-bar',
  templateUrl: "./ngx-fixed-settings-bar.html",
  styleUrls: [ "./ngx-fixed-settings-bar.scss" ]
})
export class NgxFixedSettingsBarComponent implements OnInit {

  @Input() styleConfig: INgxFixedSettingsBarStyleConfig;

  constructor() { 
    
  }

  ngOnInit(): void {
      if(!this.styleConfig)
        this.styleConfig = {
          top: 115,
          backgroundColor: "rgba(30,30,30,0.5)",
          xPlacement: "bottom-end"
        }
  }
}
