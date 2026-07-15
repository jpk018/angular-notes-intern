import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NotesListComponent,
    NoteFormComponent,
    SearchBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  searchTerm: string = '';
  editingNote: Note | null = null;

  ngOnInit(): void {
    const dummyNotes: Note[]=[
      {
        id: 1,
        title:'WORLD CUP FINAL',
        content:'SPAIN VS ARGENTINA',
        createdAt:new Date().toISOString()
      },
      {
        id: 2,
        title:'GOAT OF FOOTBALL',
        content:'LIONEL ANDREAS MESSI',
        createdAt:new Date().toISOString()
      },
      {
        id: 3,
        title:'GOLDEN BOOT WORLD CUP',
        content:'LIONEL MESSI ',
        createdAt:new Date().toISOString()
      },
      {
        id:4,
        title:'GOLDEN BALL WORLD CUP',
        content:'LIONEL MESSI',
        createdAt:new Date().toISOString()
      },
    ];
    this.notes=dummyNotes;
    // TODO: Implement loadNotesFromStorage
    // Load notes dari localStorage saat component mount
    // Key: 'notes'
  }

  get filteredNotes(): Note[] {
    return this.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  handleAddNote(formData: { title: string; content: string }): void {
    const newNote: Note={
      id: Date.now(),
      title:formData.title,
      content:formData.content,
      createdAt:new Date().toISOString()
    }
    this.notes=[newNote,...this.notes]
    // TODO: Implement add note
    // 1. Create new note object dengan id unik, title, content, createdAt
    // 2. Add ke notes array
    // 3. Clear editingNote jika ada
    console.log('Add note:', formData);
  }

  handleDeleteNote(id: number): void {
    this.notes=this.notes.filter(note=>note.id!==id)
    // TODO: Implement delete note
    // 1. Filter notes array
    // 2. Remove note dengan id yang match
    console.log('Delete note:', id);
  }

  handleEditNote(note: Note): void {
    // TODO: Implement edit note
    // Set editingNote untuk pre-populate form
    this.editingNote = note;
  }

  handleCancelEdit(): void {
    // TODO: Clear editing state
    this.editingNote = null;
  }
}
