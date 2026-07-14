import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from '../note-card/note-card.component';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [CommonModule, NoteCardComponent],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
})
export class NotesListComponent {
  @Input() notes: Note[] = [];
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Note>();

  handleDelete(id: number): void {
    this.onDelete.emit(id);
  }

  handleEdit(note: Note): void {
    this.onEdit.emit(note);
  }
}
