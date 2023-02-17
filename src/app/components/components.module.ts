import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { TitleComponent } from './title/title.component';
import { MenuComponent } from './menu/menu.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ], exports: [
    CardComponent,
    TitleComponent,
    MenuComponent
  ],
})
export class ComponentsModule { }
