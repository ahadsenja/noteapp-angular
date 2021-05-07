import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesAddComponent } from './components/notes-add/notes-add.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';
import { NotesComponent } from './components/notes/notes.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: NotesAddComponent },
  { path: 'notes/edit', component: NotesEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
