import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotesComponent } from './components/notes/notes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotesAddComponent } from './components/notes-add/notes-add.component';
import { NotesEditComponent } from './components/notes-edit/notes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    DashboardComponent,
    NotesAddComponent,
    NotesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
