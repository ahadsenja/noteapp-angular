import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteService } from 'src/app/services/note.service';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  notes: Note[] = [];

  _id: number = 0;
  title: string = '';
  content: string = '';
  submitted = false;

  constructor(
    private noteService: NoteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreateNote(): void {
    const data = {
      _id: this._id,
      title: this.title,
      content: this.content
    }
    this.noteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        }
      )
    
      this.router.navigate(['/notes']);
  }

}
