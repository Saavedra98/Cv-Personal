import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CertificadosComponent } from './certificados/certificados.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { ProyectosComponent } from './proyectos/proyectos.component';



@NgModule({
  declarations: [
    HomeComponent,
    CertificadosComponent,
    AptitudesComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HomeComponent,
    CertificadosComponent,
    AptitudesComponent,
    ProyectosComponent
  ],
})
export class PagesModule { }
