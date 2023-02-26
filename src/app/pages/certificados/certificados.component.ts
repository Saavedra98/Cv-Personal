import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {

  certificados = [
    ['DESARROLLADOR WEB FRONT END - ANGULAR', '[Octubre 2022 - Febrero 2023]', 'CERTUS'],
    
    ['CURSO EXCEL Y POWER BI - ANÁLISIS Y VISUALIZACIÓN DE DATOS', '[Septiembre 2022]', 'UDEMY'],
    
    ['SQL PARA TODOS', '[Agosto 2022]', 'DATAPATH'],
    
    ['POWER BI INTERMEDIO-AVANZADO', '[Septiembre 2022]', 'NETZUN'],

    ['INTRODUCCION A PYTHON PARA CIENCIA DE DATOS', '[Septiembre 2022]', 'NETZUN'],
    
    ['POWER QUERY Y POWER PIVOT', '[Septiembre 2022]', 'NETZUN'],
    
    ['INTRODUCCIÓN AL MUNDO DE GOOGLE CLOUD', '[Septiembre 2022]', 'NETZUN'],
    
  ];


}
