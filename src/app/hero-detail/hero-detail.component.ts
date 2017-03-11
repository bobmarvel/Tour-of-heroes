import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'my-hero-detail',
  templateUrl: `hero-detail.component.hmtl`
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
