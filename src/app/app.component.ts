import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit}   from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  ngOnInit() :void {
    this.getHeroes();
  }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;   // selectedHero должен быть вида Hero 

  constructor(private heroService: HeroService) // заливаем heroService в констрактор, чтобы его можно было вызывть в дальнейшем
  {}      
  //называется это dependency injection

     getHeroes(): void {
    this.heroService.getHeroes().then(HEROES=>
    this.heroes = HEROES);
  }


  onSelect(Hero: Hero) {   // when selecting particular hero (type Hero) we assign selectedHero to this hero
    this.selectedHero = Hero;
  }
  
}


