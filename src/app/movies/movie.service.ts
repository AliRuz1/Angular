import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';

@Injectable({
  providedIn: 'root',
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie[]> {
    return of(MOVIES);
  }

  getMovie(id: number | string) {
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find(movie => movie.id === +id)!)
    );
  }
}


