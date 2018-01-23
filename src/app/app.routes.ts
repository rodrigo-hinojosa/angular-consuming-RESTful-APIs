import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriadosComponent } from './feriados/feriados.component';

const appRoutes: Routes = [
	{path: '**', component: FeriadosComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
