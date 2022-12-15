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
  
}
