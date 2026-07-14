# 📝 Notes App - Angular

A modern notes application built with Angular 17 and Tailwind CSS. This project is designed for learning Angular fundamentals through hands-on development.

## 🚀 Quick Start

### Prerequisites
- Node.js LTS (v18 or higher)
- npm or yarn
- Angular CLI (optional, but recommended)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
# Or use: ng serve --open
```

The app will open at `http://localhost:4200`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── notes-list/
│   │   │   ├── notes-list.component.ts
│   │   │   ├── notes-list.component.html
│   │   │   └── notes-list.component.css
│   │   ├── note-card/
│   │   │   ├── note-card.component.ts
│   │   │   ├── note-card.component.html
│   │   │   └── note-card.component.css
│   │   ├── note-form/
│   │   │   ├── note-form.component.ts
│   │   │   ├── note-form.component.html
│   │   │   └── note-form.component.css
│   │   └── search-bar/
│   │       ├── search-bar.component.ts
│   │       ├── search-bar.component.html
│   │       └── search-bar.component.css
│   ├── app.component.ts       # Main app component
│   ├── app.component.html     # Main app template
│   └── app.component.css      # Main app styles
├── styles.css                 # Global styles & Tailwind
├── main.ts                    # Angular bootstrap
└── index.html                 # HTML entry point
```

## ✨ Features

- ✅ **Create Notes** - Add new notes with title and content
- ✅ **Edit Notes** - Modify existing notes
- ✅ **Delete Notes** - Remove notes with confirmation
- ✅ **Search/Filter** - Find notes by title or content
- ✅ **Persistent Storage** - Notes saved in localStorage
- ✅ **Responsive Design** - Works on mobile, tablet, and desktop

## 🛠️ Available Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Lint code
ng lint

# Format code
npm run format
```

## 📚 Learning Path

Follow the **TASKS.md** file for a structured 7-day learning plan:

1. **Day 1** - Setup & Display Static Notes
2. **Day 2** - Add Note Functionality
3. **Day 3** - Delete Note
4. **Day 4-5** - Edit Note
5. **Day 6** - localStorage Persistence
6. **Day 7** - Search/Filter & Polish

## 🧠 Key Concepts Covered

- Angular Components & Standalone API
- Template Syntax (`*ngIf`, `*ngFor`, `{{ }}`)
- Property Binding `[property]`
- Event Binding `(event)`
- Two-Way Binding `[(ngModel)]`
- Component Communication (`@Input`, `@Output`, `EventEmitter`)
- Lifecycle Hooks (`ngOnInit`, `ngOnChanges`)
- Services & Dependency Injection (bonus)
- localStorage API
- Tailwind CSS utilities

## 🎨 Tech Stack

- **Angular 17** - Framework
- **TypeScript** - Programming language
- **Tailwind CSS** - Utility-first CSS
- **FormsModule** - For form handling
- **CommonModule** - Angular common utilities
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📖 Key Angular Concepts

### Components
- Every UI element is a component
- Components are standalone (using `standalone: true`)
- Each component has TypeScript class, template, and styles

### Template Syntax
```html
<!-- Property binding: sends data to component -->
<app-note-card [note]="note"></app-note-card>

<!-- Event binding: listens to component events -->
<button (click)="handleDelete()">Hapus</button>

<!-- Two-way binding: property + event -->
<input [(ngModel)]="title">

<!-- Conditional rendering -->
<div *ngIf="notes.length === 0">No notes</div>

<!-- Loop/rendering list -->
<app-note-card *ngFor="let note of notes" [note]="note"></app-note-card>

<!-- String interpolation -->
<h1>{{ title }}</h1>
```

### Component Communication
```typescript
// Parent → Child (via @Input)
@Input() note: Note;

// Child → Parent (via @Output + EventEmitter)
@Output() onDelete = new EventEmitter<number>();
this.onDelete.emit(noteId);
```

## 📝 Notes

- All notes are stored in browser's localStorage
- Data persists across browser sessions
- Clear browser storage to reset all notes
- Uses TypeScript for type safety

## 🎯 Next Steps (After Completion)

- Create a service layer for data management
- Implement advanced Angular features (routing, guards)
- Add unit tests with Jasmine
- Implement state management with NgRx
- Add note categories/tags
- Export to JSON/PDF
- Deploy to Firebase or Vercel

## 🤝 Common Issues & Solutions

### Issue: Form not updating
**Solution:** Make sure FormsModule is imported in component

### Issue: Console error about ngModel
**Solution:** Verify FormsModule is imported in imports array

### Issue: localStorage not working
**Solution:** Check DevTools Application → Local Storage tab

### Issue: Components not displaying
**Solution:** Verify components are imported in imports array of parent component

---

## 📚 Resources

- [Angular Official Docs](https://angular.io/docs)
- [Angular University](https://angular-university.io/)
- [MDN Web Docs](https://developer.mozilla.org)
- [Tailwind CSS](https://tailwindcss.com)

---

**Happy coding! 🚀**
