import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  BASE_URL = 'http://localhost:3000';
  
  notes: Note[] = [];

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(`${this.BASE_URL}/notes`);
  }

  create(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(`${this.BASE_URL}/notes`, note)
  }

  delete(note: Note): Observable<Note> {
    return this.httpClient.delete<Note>(`${this.BASE_URL}/notes/${note._id}`)
  }
}
