import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from "../hero";
import { HeroService } from '../hero.service';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

// getHeroes(): void {
//   this.heroService.getHeroes()
//   .subscribe(heroes => this.heroes = heroes);
// }
  constructor(private heroService: HeroService) {
  
   }

  ngOnInit(): void {
    // this.getHeroes();
  }

}
