import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService, IHeroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: IHeroe[] = [];

  constructor(private _heroesServices: HeroesService, private router: Router) {

  }

  ngOnInit(): void {
    this.heroes = this._heroesServices.getHeroes();
    console.log(this.heroes);
  }

  public verHeroe(index: number) {
    // console.log(index);
    this.router.navigate(['/heroe', index]);
  }
}
