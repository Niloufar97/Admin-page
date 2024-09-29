import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListComponent } from './pages/list/list.component';
import { FormsComponent } from './pages/forms/forms.component';

export const routes: Routes = [
    {path: '', component: DashboardComponent, pathMatch: 'full'},
    {path: 'list', component: ListComponent},
    {path: 'form', component: FormsComponent},
    {path: '**', redirectTo: ''}
];
