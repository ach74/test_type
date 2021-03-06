// IMPORTAR LOS MODULOS DEL RUOTER DE ANGULAR
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

// IMPORTAR COMPONENTES
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { ExternoComponent } from './externo/externo.component';

//Array de rutas
const appRoutes: Routes = [
  { path: '', component : HomeComponent},
  { path: 'home', component : HomeComponent},
  { path: 'zapatillas' , component : ZapatillasComponent},
  { path: 'videojuego' , component : VideojuegoComponent},
  { path: 'curso', component : CursosComponent },
  { path: 'curso/:nombre/:follow', component : CursosComponent },
  { path: 'externo', component : ExternoComponent },
  { path: '**', component: HomeComponent}
];


// Expotar el modulo del router

export const appRoutingProviders : any[] = [];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
