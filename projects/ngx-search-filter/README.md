# NgxSearchFilter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-search-filter` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-search-filter`.
> Note: Don't forget to add `--project ngx-search-filter` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-search-filter` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-search-filter`, go to the dist folder `cd dist/ngx-search-filter` and run `npm publish`.

## Running unit tests

Run `ng test ngx-search-filter` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
> Important Note: This is a fork of [ng2-search-filter](https://github.com/solodynamo/ng2-search-filter) that has now been archived. Many thanks to [Ankit](https://github.com/solodynamo) and all the other contributors.

<img width="15%" height="15%" src="https://raw.githubusercontent.com/dkreider/ngx-search-filter/main/logo.png">
<br />

[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-search-filter)](https://bundlephobia.com/result?p=ngx-search-filter``)
[![ngx-search-filter](https://github.com/dkreider/ngx-search-filter/workflows/ngx-search-filter/badge.svg)](https://github.com/dkreider/ngx-search-filter/actions/workflows/main.yml)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/dkreider/ngx-search-filter/blob/main/LICENSE)


## [ngx-search-filter](https://www.npmjs.com/package/ngx-search-filter)

A lightweight Angular search filter pipe. You can use it with [ngFor](https://angular.io/api/common/NgFor) to filter arrays of strings of objects.

If you find this library useful, please give it a 🌟.

![demo-image](https://i.imgur.com/dI5Mzvq.gif)


## Install ⌛️

```bash
npm i ngx-search-filter --save
```
```bash
yarn add ngx-search-filter 
```
## Usage 🧲

Import `NgxSearchFilterModule` to your module

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';

import { NgxSearchFilterModule } from 'ngx-search-filter';

@NgModule({
  imports: [
    BrowserModule, 
    NgxSearchFilterModule
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

## Issues 🐛

Found a bug? Want to request a feature? Confused? Or wanna simply comment on how useful this library is? 

Open an issue [here](https://github.com/dkreider/ngx-search-filter/issues).


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.danielk.tech/"><img src="https://avatars.githubusercontent.com/u/11043868?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Kreider</b></sub></a><br /><a href="https://github.com/dkreider/ngx-search-filter/commits?author=dkreider" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/solodynamo"><img src="https://avatars.githubusercontent.com/u/17698714?v=4" width="100px;" alt=""/><br /><sub><b> Ankit Singh </b></sub></a><br /><a href="https://github.com/solodynamo/ng2-search-filter" title="Code">💻</a></td>  
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

Contributions of any kind welcome!

## License 📜

[MIT](https://tldrlegal.com/license/mit-license) © [Solodynamo](https://github.com/solodynamo/ng2-search-filter)

## Credits 🧸

<a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Freepik - Flaticon</a>