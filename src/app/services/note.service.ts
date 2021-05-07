import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private URL = 'http://localhost:3000/notes';
  
  notes: Note[] = [];

  constructor(private http: HttpClient) { }

  onGetAll(): Observable<Note[]> {
    return this.http.get<Note[]>(this.URL);
  }
}
