# Angular 16+ Search Filter Pipe

## Install
```
npm i ngx-search-filter
```

```
yarn add ngx-search-filter
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
  selector: 'my-component',
  template: `
    <div>
        <input type="text" [(ngModel)]="searchValue">
        <div *ngFor = "let item of items | searchFilter : searchValue : ['name']" >
          <p>
            {{item.name}}
          </p>
        </div>

    </div>  
  `
})

export class AppComponent {
  items: string[] = [{ id: 1, name: "archie" }, { id: 2, name: "jake" }, { id: 3, name: "richard" }];
}
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [EJOrtega](https://github.com/ejportega/ngx-search-filter-pipe)