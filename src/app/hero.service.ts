import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES  } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> { // промисы-  асинхронный запрос на данные
    //A Promise is ... well it's a promise to call us back later when the results are ready.
  return Promise.resolve(HEROES);
}

}
