import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

  proyectos = [
    ['./assets/img/PROYECTOS/p-1.png', 
    'Crud-Persona', 
    'https://saavedra98.github.io/Angular-Actividad-15/', 
    'https://github.com/Saavedra98/Angular-Actividad-15.git'],
    
    ['./assets/img/PROYECTOS/p-2.png', 
    'Rutas', 
    'https://saavedra98.github.io/Angular-Session-17/',
    'https://github.com/Saavedra98/Angular-Session-17.git'],
    
    ['./assets/img/PROYECTOS/p-3.png', 
    'Crud-Productos', 
    'https://saavedra98.github.io/Angular-Actividad-17/',
    'https://github.com/Saavedra98/Angular-Actividad-17.git'],
    
    ['./assets/img/PROYECTOS/p-4.png', 
    'Pokemones', 
    'https://saavedra98.github.io/Angular-Session-19/', 
    'https://github.com/Saavedra98/Angular-Session-19.git'],
    
    ['./assets/img/PROYECTOS/p-5.png', 
    'Crud-Usuarios-Firebase', 
    'https://angular-30-cb9e2.web.app/', 
    'https://github.com/Saavedra98/Angular-Session-30.git'],
    
    ['./assets/img/PROYECTOS/p-6.png', 
    'Ecommerce Productos', 
    'https://trabajofinalsaavedraerazo.web.app/', 
    'https://github.com/Saavedra98/Angular-TrabajoFinal.git'],
    
    
  ];



}
