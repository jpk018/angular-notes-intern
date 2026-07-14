import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css',
})
export class NoteFormComponent implements OnInit {
  @Input() editingNote: Note | null = null;
  @Output() onSubmit = new EventEmitter<{ title: string; content: string }>();
  @Output() onCancel = new EventEmitter<void>();

  title: string = '';
  content: string = '';

  ngOnInit(): void {
    // Do nothing on init
  }

  ngOnChanges(): void {
    // Pre-populate form when editingNote changes
    if (this.editingNote) {
      this.title = this.editingNote.title;
      this.content = this.editingNote.content;
    } else {
      this.title = '';
      this.content = '';
    }
  }

  handleSubmit(): void {
    if (!this.title.trim() || !this.content.trim()) {
      alert('Title dan content tidak boleh kosong');
      return;
    }

    this.onSubmit.emit({
      title: this.title.trim(),
      content: this.content.trim(),
    });

    this.title = '';
    this.content = '';
  }

  handleCancel(): void {
    this.title = '';
    this.content = '';
    this.onCancel.emit();
  }
}
