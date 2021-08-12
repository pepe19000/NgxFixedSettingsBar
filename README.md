# NgxFixedSettingsBar

This is an Angular module. It helps with show a fixed settings bar with dropdown menu on the right side with help of Bootstrap.

[![npm downloads](https://img.shields.io/npm/dm/ngx-fixed-settings-bar.svg)](http://npm-stat.com/charts.html?package=ngx-fixed-settings-bar)

Check out [the demo](https://pepe19000.github.io/Demo/menu/NgxFixedSettingsBar)!

*Note: v12.2.1 is out and supports Angular 12!*

## Install

1) Install by running `npm install ngx-fixed-settings-bar`

2) Add `NgxFixedSettingsBarModule` to your `app.module.ts` imports:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxFixedSettingsBarModule } from 'ngx-fixed-settings-bar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFixedSettingsBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

*Important: This module work with bootstrap, popper, jquery and bootstrap-material-design, so install & import of these are REQUIRED!!*

3) Next step is install dependencies: `npm install bootstrap bootstrap-material-design jquery popper.js`

4) After that you have to import them:

`angular.json`

```json

"scripts": [
              "node_modules/jquery/dist/jquery.js",
              "node_modules/popper.js/dist/umd/popper.js",
              "node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js"
            ]

```

In case of scss: 

`styles.scss`

```scss

@import "~bootstrap/scss/bootstrap";

```

In case of css:

`angular.json`

```json

"styles": [
    "./node_modules/bootstrap/dist/css/bootstrap.css"
]

```

OR

`index.html`

```html

<head>
    ...
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    ...
</head>

```

## Basics

### Usage

You can use this module easily after imports. Just use `ngx-fixed-settings-bar` tag in your html and set settings bar icon and body.
For example:

`app.component.html`

```html
<ngx-fixed-settings-bar>
    <!--Mark icon container with `settings-icon` attribute-->
  <div settings-icon>
    Icon
  </div>
    <!--Mark body container with `settings-body` attribute-->
  <div settings-body>
    Body
  </div>
</ngx-fixed-settings-bar>
```

## Override Default Styles

Currently you can only set settings bar's top, background and transform-origin (x-placement) styles with config.
Default config looks like this:

```ts
...

export class AppComponent {
    config: INgxFixedSettingsBarStyleConfig = {
        top: 115,
        backgroundColor: "rgba(30,30,30,0.5)",
        xPlacement: "bottom-end"
    };

    ...
}
```

And give this config to Component through `styleConfig` attribute like an `@Input()`

```html

<ngx-fixed-settings-bar [styleConfig]="config">
...
</ngx-fixed-settings-bar>

```

### INgxFixedSettingsBarStyleConfig properties


| Property | Type |
| --- | --- |
| `top` | number? |
| `backgroundColor` | string? |
| `xPlacement` | string?: `bottom-start`, `bottom-end`, `top-start`, `top-end` |