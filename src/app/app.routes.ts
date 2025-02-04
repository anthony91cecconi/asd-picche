import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { SquadreComponent } from './pages/squadre/squadre.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "contatti",
    component: ContattiComponent
  },
  {
    path: "squadre",
    component: SquadreComponent
  },
  {
    path: "eventi",
    component: EventiComponent
  },
  {
    path: "galleria",
    component: GalleriaComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
