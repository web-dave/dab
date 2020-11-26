import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { TitleBoxComponent } from './title-box/title-box.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AboutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
