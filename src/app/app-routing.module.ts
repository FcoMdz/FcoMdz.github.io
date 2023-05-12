import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CasaComponent } from './components/casa/casa.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { DudasComponent } from './dudas/dudas.component';
import { ReservacionesComponent } from './components/reservaciones/reservaciones.component';
import { SkinsComponent } from './components/skins/skins.component';

const routes: Routes = [
  { path: 'busqueda/:termino', component: BusquedaComponent},
  { path: 'busqueda', component: BusquedaComponent},
  { path: 'registro',  component: RegistroComponent},
  { path: 'casa/:casa', component: CasaComponent},
  { path: 'conocenos', component: ConocenosComponent},
  { path: 'dudas', component: DudasComponent},
  { path: 'reservaciones', component: ReservacionesComponent},
  { path: 'skins', component: SkinsComponent },
  { path: 'home', component: PrincipalComponent },
  { path: '', component: PrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
