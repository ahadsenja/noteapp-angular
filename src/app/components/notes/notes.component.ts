import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.onGetNotes();
  }

  onGetNotes() {
    this.noteService.getAll()
      .subscribe(
        notes => {
          this.notes = notes,
          console.log(notes)
        },
        error => {
          console.log(error)
        }
      )
  }

  onSelectNote(_id: number): void {
    this.router.navigate(['/notes/edit', _id]);
  }

  onDelete(note: Note): void {
    this.noteService.delete(note)
      .subscribe(response => {
        this.notes = this.notes.filter(id => id !== note)
        console.log(response)
      })
  }

}
