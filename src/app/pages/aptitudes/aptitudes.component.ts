import { Component } from '@angular/core';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {

  aptitudes = [
    ['HTML', '90%', 'html-menu'],
    
    ['CSS', '70%', 'css-menu'],
    
    ['JavaScript', '70%', 'js-menu'],
    
    ['TypeScript', '70%', 'ts-menu'],
    
    ['Angular', '80%', 'ng-menu'],
    
    ['Bootstrap', '70%', 'bt-menu'],
    
    
    
    ['Tailwind CSS', '60%', 'tw-menu'],
    
    ['SQL Server', '75%', 'sql-menu'],
    
    ['PostgreSQL', '60%', 'ps-menu'],
    
    ['Excel', '90%', 'exc-menu'],
    
    
    
    ['Power Bi', '65%', 'pb-menu'],
    
    
    
  ];


}
