import { Component, OnInit } from '@angular/core';
import { MovieContextService } from '../services/movie-context.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  show: boolean = false;

  comp1Val: string = '';
  comp2Val: string = '';

  constructor(private service: MovieContextService) {
    this.service.getDataAPI('batman').subscribe((data) => {
      this.service.movieList = data;
    });
  }

  ngOnInit(): void {}

  ngAfterContentChecked() {
    // this.comp2Val = this.service.comp2Val;
  }

  getMoviesData(event: any) {
    if (event.target.value.trim().length > 2) {
      this.show = false;
      this.service.getDataAPI(event.target.value).subscribe((data) => {
        this.service.movieList = data;
      });
    } else {
      this.show = true;
    }
  }
}
