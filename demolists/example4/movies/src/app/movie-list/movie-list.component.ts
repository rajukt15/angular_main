import { Component, OnInit } from '@angular/core';
import { MovieContextService } from '../services/movie-context.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  comp1Val: string = '';
  comp2Val: string = '';

  movieList: any;
  defaultImg =
    'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

  constructor(private service: MovieContextService) {
    // this.service.comp2Val = 'Component 2 initial value';
  }

  ngAfterContentChecked() {
    // this.comp1Val = this.service.comp1Val;

    if (this.service.movieList) {
      if (this.service.movieList.Response) {
        this.movieList = this.service.movieList.Search;
      }
    }
  }

  ngOnInit(): void {}
}
