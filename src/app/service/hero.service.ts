import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../components/models/hero';
import { HEROES } from '../components/models/mock-heroes';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {



  constructor(private messageService : MessageService) { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
  // For now, assume that a hero with the specified `id` always exists.
  // Error handling will be added in the next step of the tutorial.
  const hero = HEROES.find(h => h.id === id)!;
  this.messageService.add(`funcion HeroService.getHero(id): fetched hero id=${id}`);
  return of(hero);
}
}



