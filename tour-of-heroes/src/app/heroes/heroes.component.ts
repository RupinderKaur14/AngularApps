import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroservice: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroservice.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
