import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly http: HttpClient) { }

  searchValue = '';
  products$ = this.http.get('https://dummyjson.com/products?limit=150').pipe(map((response: any) => response.products))
}
