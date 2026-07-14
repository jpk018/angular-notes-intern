import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.css',
})
export class NoteCardComponent {
  @Input() note!: Note;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onEdit = new EventEmitter<Note>();

  handleDelete(): void {
    this.onDelete.emit(this.note.id);
  }

  handleEdit(): void {
    this.onEdit.emit(this.note);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID');
  }
}
