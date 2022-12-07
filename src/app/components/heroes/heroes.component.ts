import { Component, OnInit } from '@angular/core';
import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  hero: Hero = {
  id : 1 ,
  name : 'Junkrat'
  }

  heroes = HEROES;

  

  constructor() { }


  // El ngOnInit() es un gancho de ciclo de vida ("lifecycle hook") . 
  //Angular llama a ngOnInit() inmediatamente después de crear el componente.
  // Adecuado para poner la lógica de inicialización

  ngOnInit(): void {
  }

}
