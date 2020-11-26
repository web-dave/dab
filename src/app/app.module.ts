import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
import { BooksModule } from './books/books.module';
import { BooksComponent } from './books/books.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AboutModule,
    HttpClientModule,
    BooksModule,
  ],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const elm = createCustomElement(BooksComponent, { injector });
    customElements.define('books-module', elm);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {}
}
