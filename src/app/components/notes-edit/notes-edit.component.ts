import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Note } from '../../models/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {
  notes: Note[] = [];
  note: Note = new Note();

  id: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.noteService.getNoteById(this.id)
      .subscribe(data => {
        this.note = data
        console.log(data)
      })
  }

  onUpdate() {
    this.noteService.update(this.id, this.note)
      .subscribe(data => {
        console.log(data)
        this.router.navigate(['/notes'])
      }, error => console.log(error))
  }

}
