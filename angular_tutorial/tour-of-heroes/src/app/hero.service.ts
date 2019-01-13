import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  /*
  getHeroes(): Observable<Hero[]> {
      this.MessageService.add('HeroService: fetched heroes');
      return of (HEROES);
  }*/

  getHeroes(): Observable<Hero[]> {
       return this.http.get<Hero[]>(this.heroesUrl)
       .pipe(
        tap(_ => this.log('fetched heroes')),
         catchError(this.handleError('getHeroes',[]))
       );  
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero>{
    this.MessageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id ===id));
  }

  private log(message: string){
    this.MessageService.add(`HeroService: $(message)`);
  }

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient, private MessageService: MessageService) { }
}
