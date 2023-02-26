import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  educacion = [
    ['Universidad Nacional de Piura', '[2016 - 2022]', 'Bachiller de Ingeniería Informática, perteneciente al tercio superior de la facultad'],
    
    ['Instituto de Idioma (UNP)', '[2021 - 2021]', 'Ingles Básico, Ingles Pre-Intermedio'],
    
    ['Jorge Basadre Grohmann', '[2005 - 2015]', 'Primaria, Secundaria'],
  
  ];



  tareas = ['Encargado de la base de datos de la empresa y el área de gerencia de Prodef',
  'Restauración de las bases de datos de la empresa.',
  'Instalación y actualizaciones de Software y Hardware.',
  'Generar reportes mediante consultas SQL server que requiere las empresas.',
  'Generar dashboard para la mejora de toma de decisiones, ayudando a la empresa a seguir creciendo'];


}
