import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Usamos el decorador Input, 
  // para indicar que una propiedad puede venir desde un componente externo
  @Input() heroe : any = {};
  @Input() index : number; 

  // @Output() heroeSeleccionado : EventEmitter<number>;

  constructor(private router : Router) { 
    // this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    // this.heroeSeleccionado.emit(this.index);
  }

}
