import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';

@NgModule({
  declarations: [AppComponent, SearchFormComponent, MovieListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
