import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { MessageService } from 'src/app/service/message.service';
import { Hero } from '../models/hero';





@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {


  heroes : Hero[] | undefined;
  selectedHero: Hero | undefined;

  constructor(private heroService:HeroService ,
              private messageService : MessageService ) { }


  // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . 
  //Angular llama a ngOnInit() inmediatamente después de crear el componente.
  // Adecuado para poner la lógica de inicialización

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
