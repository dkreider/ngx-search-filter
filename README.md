<p align="center">
 <img width="15%" height="15%" src="logo.png">
</p>

<br />

[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-search-filter)](https://bundlephobia.com/result?p=ngx-loading-button)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/dkreider/ngx-search-filter/blob/main/LICENSE)


## [ngx-search-filter](https://www.npmjs.com/package/ngx-search-filter)
A lightweight Angular search filter pipe. You can use it with [ngFor](https://angular.io/api/common/NgFor) to filter arrays of strings of objects.

![demo-image](https://i.imgur.com/dI5Mzvq.gif)


## Install

```bash
npm i ngx-search-filter --save
```
```bash
yarn add ngx-search-filter 
```
## Usage

Import `Ng2SearchPipeModule` to your module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { Ng2SearchPipeModule } from 'ngx-search-filter';

@NgModule({
  imports: [
    BrowserModule, 
    Ng2SearchPipeModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component after declaring and initializing it in your component:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="term">
        <div *ngFor = "let item of items | filter:term" >
          <p>
            {{item.name}}
          </p>
        </div>

    </div>  
  `
})

export class AppComponent {
  items: string[] = [{ name: "archie" }, { name: "jake" }, { name: "richard" }];
  term = '';
}
```

## Support ngx-search-filter

ngx-search-filter is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## Contribute

Please do 🙂

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Solodynamo](https://github.com/solodynamo/ng2-search-filter)

## Credits

<a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Freepik - Flaticon</a>