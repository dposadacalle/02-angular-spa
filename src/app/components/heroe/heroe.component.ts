import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe : any = {}; 

  strCasa : string;

  constructor(private activeRoute: ActivatedRoute, private _heroesService : HeroesService) {
      this.activeRoute.params.subscribe(params => {
        // console.log(params['id']);
        this.heroe = this._heroesService.getHeroe(params['id']);
        console.log(this.heroe);
    });
  }

  /* public isCasa() : string{
    if(this.heroe.casa == "DC"){
      this.strCasa =  'assets/images/dc-logo.jpg';
    }else if(this.heroe.casa == "Marvel"){
      this.strCasa = 'assets/images/marvel-logo.png';
    }else{
      this.strCasa = '';
    }

    return this.strCasa;
  }*/
}
