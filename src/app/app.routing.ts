import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { DashboardtarefasComponent } from './dashboard-tarefas/dashboard-tarefas.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: DashboardtarefasComponent },
    { path: 'tarefas', component: TarefasComponent },   
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);