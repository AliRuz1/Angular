import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  movies$!: Observable<Movie[]>;
  selectedId = 0;

  constructor(   private service: MovieService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getMovies();
      })
    );
  }

}
