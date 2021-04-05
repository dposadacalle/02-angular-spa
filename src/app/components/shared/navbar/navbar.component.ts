import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HeroesService} from '../../../services/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router : Router, private _heroesServies: HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    // console.log(termino);
   console.log(this._heroesServies.buscarHeroes(termino));

   this._router.navigate(['/buscar', termino]);
  }

}
