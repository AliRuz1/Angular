import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie$!: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) {}


  ngOnInit() {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMovie(params.get('id')!))
    );
  }

  gotoMovies(movie: Movie) {
    const movieId = movie ? movie.id : null;
    const movieInfo = movie ? movie.info : null;
    this.router.navigate(['/newmovies', { id: movieId, url: '' }]);
  }
}
