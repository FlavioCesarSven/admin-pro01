
import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    NopagesfoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    NopagesfoundComponent,
  ],
  exports: [
    NopagesfoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    NopagesfoundComponent,
  ]
})
export class SharedModule { }
