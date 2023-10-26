import { NgModule } from '@angular/core';
import { SearchFilterPipe } from './ngx-search.pipe';

@NgModule({
  declarations: [SearchFilterPipe],
  exports: [SearchFilterPipe],
})
export class NgxSearchPipeModule {}
