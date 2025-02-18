import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { SquadreComponent } from './pages/squadre/squadre.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SquadraDetailComponent } from './pages/squadra-detail/squadra-detail.component';

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
    path: "servizi",
    component: ServiziComponent
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
    path: 'squadra/:id',
    component: SquadraDetailComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
