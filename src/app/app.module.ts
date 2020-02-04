import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BankSnippetComponent } from './bank-snippet/bank-snippet.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { PaginationComponent } from './pagination/pagination.component';
import { SearchPipe } from './pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { FavListComponent } from './fav-list/fav-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    BankSnippetComponent,
    BankDetailsComponent,
    PaginationComponent,
    SearchPipe,
    FavListComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
