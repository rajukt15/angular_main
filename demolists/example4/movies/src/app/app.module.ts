import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SinglMovieComponent } from './singl-movie/singl-movie.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: 'movie', component: MovieComponent },
  { path: 'moviedetail/:id', component: SinglMovieComponent },
  { path: '**', component: MovieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    MovieListComponent,
    SinglMovieComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
