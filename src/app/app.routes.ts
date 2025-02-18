import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContattiComponent } from './pages/contatti/contatti.component';
import { EventiComponent } from './pages/eventi/eventi.component';
import { GalleriaComponent } from './pages/galleria/galleria.component';
import { SquadreComponent } from './pages/squadre/squadre.component';
import { ServiziComponent } from './pages/servizi/servizi.component';
import { SquadraDetailComponent } from './pages/squadra-detail/squadra-detail.component';
import { FotoComponent } from './pages/galleria/foto/foto.component';
import { VideoComponent } from './pages/galleria/video/video.component';
import { FotoDetailComponent } from './pages/galleria/foto-dettail/foto-dettail.component';
import { VideoDetailComponent } from './pages/galleria/video-detail/video-detail.component';

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
    path: '',
    component: HomeComponent,
  },
  {
    path: 'collection/:id',
    component: FotoDetailComponent
  },
  {
    path: 'galleria/foto',
     component: FotoComponent

  }, // Pagina della lista album
  {
    path: 'galleria/foto/:id',
    component: FotoDetailComponent

  }, // Pagina di dettaglio album
  {
    path: 'galleria/video',
    component: VideoComponent
  },
  {
    path: 'squadra/:id',
    component: SquadraDetailComponent
  },
  { path: 'galleria/video/:id',
    component: VideoDetailComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];
