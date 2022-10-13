import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ContentHeaderComponent } from './content-header/content-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    ProductListComponent,
    ProductItemComponent,
    ContentHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
