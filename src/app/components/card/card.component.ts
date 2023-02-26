import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  aficiones = ['Futbol', 'Tecnologia', 'Música', 'Leer'];
  
  habilidadesPersonales = ['Respetuoso', 'Puntual', 'Constante', 'Adaptable'];



}
