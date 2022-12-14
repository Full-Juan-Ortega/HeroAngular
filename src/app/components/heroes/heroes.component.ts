import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/service/hero.service';
import { Hero } from '../models/hero';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {


  heroes : Hero[] | undefined;
  selectedHero: Hero | undefined;

  constructor(private heroService:HeroService) { }


  // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . 
  //Angular llama a ngOnInit() inmediatamente después de crear el componente.
  // Adecuado para poner la lógica de inicialización

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
