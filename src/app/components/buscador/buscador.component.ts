import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {HeroesService, IHeroe} from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})
export class BuscadorComponent implements OnInit {

  heroesBsArr : IHeroe[] = [];
  termino : string; 

  constructor(private activeRoute : ActivatedRoute, 
              private heroesServices : HeroesService, 
              private router: Router) { 

  }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      // console.log(params['termino']);
      // console.log(this.heroesServices.buscarHeroes(params['termino']));
      this.termino = params['termino'];
      this.heroesBsArr = this.heroesServices.buscarHeroes(params['termino']);
      console.log(this.heroesBsArr);
    });

    
  }

  public verHeroe(index: number) {
    // console.log(index);
    this.router.navigate(['/heroe', index]);
  }

}
