# Angular 16+ Search Filter Pipe

Angular pipe that will filters the list of objects based on the filter value and keys provided.

![demo-image](https://i.imgur.com/hAmmM6v.gif)

## Install
```
npm i ngx-search-2-pipe
```

```
yarn add ngx-search-2-pipe
```

## Usage

Import `NgxSearchPipeModule` to your module

```typescript 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSearchFilterPipeModule }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSearchFilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

And use pipe in your component

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
    <div>
        <input type="text" [(ngModel)]="searchValue">
        <div *ngFor = "let item of items | searchFilter : searchValue : ['name']" >
          {{item.name}}
        </div>

    </div>  
  `
})

export class AppComponent {
  items: string[] = [{ id: 1, name: "iPhone 9" }, { id: 2, name: "iPhone X" }, { id: 3, name: "Samsung Universe 9" }, { id: 4, name: "OPPOF19" }, { id: 5, name: "Huawei P30" }, { id: 6, name: "Macbook Pro" }];
  searchValue: string;
```

## Support ngx-search-2-pipe

ngx-search-2-pipe is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## License

[MIT](https://tldrlegal.com/license/mit-license) © [EJOrtega](https://github.com/ejportega/ngx-search-pipe)