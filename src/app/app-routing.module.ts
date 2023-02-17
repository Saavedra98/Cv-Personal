import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AptitudesComponent } from './pages/aptitudes/aptitudes.component';
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { HomeComponent } from './pages/home/home.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'certificados', component:CertificadosComponent},
  {path:'aptitudes', component:AptitudesComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
