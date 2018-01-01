import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeaderItemComponent } from './weader-list/weader-item/weader-item.component';
import { WeaderListComponent } from './weader-list/weader-list.component';
import { WeaderSearchComponent } from './weader-list/weader-item/weader-search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaderItemComponent,
    WeaderListComponent,
    WeaderSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
