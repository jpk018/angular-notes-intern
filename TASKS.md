# 🚀 Angular Notes App - 7 Days Learning Track

**Intern:** [Nama lo]  
**Framework:** Angular 17 + Tailwind CSS  
**Duration:** 7 hari  
**Objective:** Buat aplikasi Notes yang fully functional dengan dependency injection, component communication, dan UI yang bagus

---

## 📋 Prerequisites

Sebelum mulai, pastikan sudah:
- [x] Install Node.js LTS (verify: `node -v`)
- [x] Clone repo ini
- [x] `npm install` di project root
- [x] `npm start` atau `ng serve` berjalan di http://localhost:4200

Jika dev server tidak jalan, tanya mentor!

---

## 📅 Daily Tasks

### **DAY 1: Setup & Display Static Notes**

**Duration:** 2-3 jam  
**Learning Goal:** Paham Angular component structure, property binding, dan *ngFor directive

#### Tasks:

1. **Setup Environment** ✅
   - [ ] Verify `npm install` selesai (check `node_modules` ada)
   - [ ] Run `npm start` (atau `ng serve`)
   - [ ] Akses http://localhost:4200 → lihat "My Notes App" text

2. **Understand Project Structure** 📂
   - [ ] Baca file-file ini (in order):
     - `src/main.ts` → bootstrap entry point
     - `src/app/app.component.ts` → main component (notice ada TODO comments)
     - `src/app/app.component.html` → template (lihat component nesting)
     - `src/app/components/notes-list/notes-list.component.ts`
     - `src/app/components/note-card/note-card.component.ts`
   - [ ] Pahami: component itu class + decorator + template

3. **Create Dummy Data** 📝
   - [ ] Di `app.component.ts`, di `ngOnInit()`, buat array `dummyNotes`:
     ```typescript
     const dummyNotes = [
       {
         id: 1,
         title: 'Welcome to Notes App',
         content: 'Ini adalah catatan pertama mu...',
         createdAt: new Date().toISOString(),
       },
       // ... tambah 2-4 lagi
     ];
     this.notes = dummyNotes;
     ```

4. **Verify Template Rendering** 🎨
   - [ ] Open browser → lihat "My Notes App" header
   - [ ] Lihat 3+ note cards tampil
   - [ ] Setiap kartu punya button "Edit" & "Hapus"
   - [ ] Check styling dengan Tailwind classes

5. **Push to Git** 📤
   ```bash
   git add .
   git commit -m "feat: setup project and display static notes"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Dev server running
- [ ] 3+ dummy notes tampil di halaman
- [ ] Setiap note memiliki card dengan button Edit & Hapus
- [ ] Tidak ada console errors
- [ ] Code di-commit dengan message yang jelas

#### ❓ Self-Check Questions:
- Apa itu decorator `@Component`?
- Di mana `*ngFor` digunakan?
- Bagaimana property binding bekerja (`[note]="note"`)?

---

### **DAY 2: Add Note Functionality (Create)**

**Duration:** 2-3 jam  
**Learning Goal:** Paham template-driven forms, two-way binding, event binding

#### Tasks:

1. **Understand NoteForm Component** 📄
   - [ ] Buka `src/app/components/note-form/note-form.component.ts`
   - [ ] Pahami: `@Input()`, `@Output()`, `EventEmitter`
   - [ ] Template punya form dengan `[(ngModel)]` (two-way binding)

2. **Implement handleAddNote in app.component.ts** 🔧
   - [ ] Cari `TODO: Implement add note`
   - [ ] Implement function:
     ```typescript
     handleAddNote(formData: { title: string; content: string }): void {
       const newNote: Note = {
         id: Date.now(),
         title: formData.title,
         content: formData.content,
         createdAt: new Date().toISOString(),
       };
       this.notes = [newNote, ...this.notes];
     }
     ```

3. **Test Form Submission** ✅
   - [ ] Fill form dengan title & content
   - [ ] Click tombol "Buat Note"
   - [ ] Lihat note baru muncul di atas list
   - [ ] Form clear (kosong lagi)
   - [ ] Check browser console → no errors

4. **Understand Two-Way Binding** 📚
   - [ ] Di NoteForm template, lihat `[(ngModel)]="title"`
   - [ ] Pahami: `[ngModel]="title"` (property binding) + `(ngModelChange)="title=$event"` (event binding)
   - [ ] Test: type di form → lihat real-time change

5. **Git Commit** 📤
   ```bash
   git add .
   git commit -m "feat: implement add note functionality"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Form bisa di-submit
- [ ] New note muncul di list
- [ ] Form clear setelah submit
- [ ] Validation works (no empty submit)
- [ ] No console errors

#### ❓ Self-Check Questions:
- Apa perbedaan `[property]`, `(event)`, dan `[(ngModel)]`?
- Apa itu `@Output()` dan `EventEmitter`?
- Bagaimana data flow dari parent → child → parent?

---

### **DAY 3: Delete Note Functionality**

**Duration:** 1-2 jam  
**Learning Goal:** Paham array manipulation dan state update di Angular

#### Tasks:

1. **Implement handleDeleteNote** 🗑️
   - [ ] Di `app.component.ts`, cari `TODO: Implement delete note`
   - [ ] Implement:
     ```typescript
     handleDeleteNote(id: number): void {
       this.notes = this.notes.filter(note => note.id !== id);
     }
     ```

2. **Test Delete Functionality** ✅
   - [ ] Click tombol "Hapus" di salah satu note
   - [ ] Note seharusnya hilang dari list
   - [ ] Verify: ada 3 notes, delete 1 → tinggal 2 notes

3. **Add Confirmation** (Optional) 🎯
   - [ ] Sebelum delete, buat `confirm()` prompt:
     ```typescript
     if (confirm('Yakin mau hapus note ini?')) {
       this.handleDeleteNote(id);
     }
     ```
   - [ ] Atau modify template di note-card:
     ```html
     (click)="handleDelete()"
     ```

4. **Git Commit** 📤
   ```bash
   git commit -m "feat: implement delete note functionality"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Delete button berfungsi
- [ ] Note hilang dari list setelah delete
- [ ] Confirm dialog muncul (jika di-implement)

#### ❓ Self-Check Questions:
- Apa itu `.filter()` dan bagaimana cara kerjanya?
- Bagaimana event bubbling bekerja di Angular template?

---

### **DAY 4: Edit Note Functionality (Part 1 - Setup)**

**Duration:** 2 jam  
**Learning Goal:** Paham conditional rendering (*ngIf) dan component input/output

#### Tasks:

1. **Understand handleEditNote** 📝
   - [ ] Di `app.component.ts`, cari `TODO: Implement edit note`
   - [ ] Implement:
     ```typescript
     handleEditNote(note: Note): void {
       this.editingNote = note;
     }
     ```

2. **Implement handleCancelEdit** ❌
   - [ ] Cari `TODO: Clear editing state`
   - [ ] Implement:
     ```typescript
     handleCancelEdit(): void {
       this.editingNote = null;
     }
     ```

3. **Check Form Pre-population** 🔄
   - [ ] Di `note-form.component.ts`, lihat `ngOnChanges()`:
     ```typescript
     ngOnChanges(): void {
       if (this.editingNote) {
         this.title = this.editingNote.title;
         this.content = this.editingNote.content;
       } else {
         this.title = '';
         this.content = '';
       }
     }
     ```
   - [ ] Test: click Edit di note → form harus isi dengan title & content note itu

4. **Test Button Conditional Rendering** ❌
   - [ ] Click Edit di note → lihat "Buat Note" button berubah jadi "Update Note"
   - [ ] Lihat ada button "Batal" (karena ada `*ngIf="editingNote"`)
   - [ ] Click "Batal" → form clear, button back ke "Buat Note"

5. **Git Commit** 📤
   ```bash
   git commit -m "feat: implement edit note setup (form pre-population)"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Click Edit → form populate dengan note data
- [ ] Form buttons change based on `editingNote` state
- [ ] Cancel button clear the form
- [ ] No console errors

#### ❓ Self-Check Questions:
- Apa itu `*ngIf` dan kapan biasanya digunakan?
- Apa perbedaan `*ngIf` vs CSS `display: none`?
- Apa itu lifecycle hook `ngOnChanges()`?

---

### **DAY 5: Edit Note Functionality (Part 2 - Update)**

**Duration:** 2 jam  
**Learning Goal:** Paham conditional logic dalam state update

#### Tasks:

1. **Update handleAddNote untuk support edit** 🔄
   - [ ] Modify `handleAddNote()`:
     ```typescript
     handleAddNote(formData: { title: string; content: string }): void {
       if (this.editingNote) {
         // Update existing note
         this.notes = this.notes.map(note =>
           note.id === this.editingNote!.id
             ? { ...note, title: formData.title, content: formData.content }
             : note
         );
         this.editingNote = null; // Clear edit state
       } else {
         // Create new note
         const newNote: Note = {
           id: Date.now(),
           title: formData.title,
           content: formData.content,
           createdAt: new Date().toISOString(),
         };
         this.notes = [newNote, ...this.notes];
       }
     }
     ```

2. **Test Edit Update** ✅
   - [ ] Click Edit di note → form populate
   - [ ] Change title/content
   - [ ] Click "Update Note" → data harus update di list
   - [ ] Verify: update adalah in-place (tidak create note baru)

3. **Test Flow End-to-End** 🔄
   - [ ] Create note baru
   - [ ] Edit note itu
   - [ ] Delete note
   - [ ] Verify semuanya bekerja smooth

4. **Git Commit** 📤
   ```bash
   git commit -m "feat: complete edit note functionality"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Edit button dapat trigger form population
- [ ] Update note berfungsi (data berubah di list)
- [ ] Button label berubah (Buat vs Update)
- [ ] Cancel button work
- [ ] No console errors

#### ❓ Self-Check Questions:
- Apa perbedaan `.map()` vs `.filter()`?
- Bagaimana immutable update bekerja di Angular?
- Apa itu spread operator `...`?

---

### **DAY 6: Local Storage Persistence**

**Duration:** 2 jam  
**Learning Goal:** Paham lifecycle hooks dan browser storage

#### Tasks:

1. **Implement ngOnInit untuk Load** 📥
   - [ ] Di `app.component.ts`, modify `ngOnInit()`:
     ```typescript
     ngOnInit(): void {
       const savedNotes = localStorage.getItem('notes');
       if (savedNotes) {
         try {
           this.notes = JSON.parse(savedNotes);
         } catch (error) {
           console.error('Error loading notes:', error);
         }
       }
     }
     ```

2. **Implement ngOnChanges untuk Auto-Save** 💾
   - [ ] Add ngOnChanges hook atau gunakan setter:
     ```typescript
     set notes(value: Note[]) {
       this._notes = value;
       localStorage.setItem('notes', JSON.stringify(value));
     }
     get notes(): Note[] {
       return this._notes;
     }
     private _notes: Note[] = [];
     ```
   - [ ] Atau lebih simple: di setiap method yang modify notes, tambah:
     ```typescript
     private saveToStorage(): void {
       localStorage.setItem('notes', JSON.stringify(this.notes));
     }
     ```
   - [ ] Dan panggil `saveToStorage()` di akhir setiap method (add, delete, update)

3. **Test Persistence** 🔄
   - [ ] Buat 2-3 notes
   - [ ] Refresh browser (F5) → notes harus masih ada!
   - [ ] Edit salah satu note
   - [ ] Refresh → perubahan masih ada
   - [ ] Delete note
   - [ ] Refresh → deleted note tidak ada

4. **Test Local Storage di DevTools** 🔍
   - [ ] Buka Chrome DevTools (F12)
   - [ ] Go to Application tab → Local Storage
   - [ ] Klik URL localhost:4200
   - [ ] Cari key 'notes' → lihat JSON array isinya
   - [ ] Verifikasi: struktur note sama dengan di code

5. **Git Commit** 📤
   ```bash
   git commit -m "feat: implement localStorage persistence"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Notes save ke localStorage
- [ ] Data persist setelah refresh
- [ ] Load dari localStorage saat component init
- [ ] No console errors

#### ❓ Self-Check Questions:
- Kapan `ngOnInit()` dijalankan?
- Apa perbedaan lifecycle hooks: `ngOnInit`, `ngOnChanges`, `ngAfterViewInit`?
- Mengapa perlu `JSON.stringify()` dan `JSON.parse()`?

---

### **DAY 7: Search/Filter & Polish**

**Duration:** 2-3 jam  
**Learning Goal:** Paham filtering, responsive design, code quality

#### Tasks:

1. **SearchBar Component Sudah Ada** ✅
   - [ ] Check `src/app/components/search-bar/search-bar.component.ts` → sudah jadi
   - [ ] Check `app.component.ts` → lihat `get filteredNotes()`:
     ```typescript
     get filteredNotes(): Note[] {
       return this.notes.filter(
         (note) =>
           note.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
           note.content.toLowerCase().includes(this.searchTerm.toLowerCase())
       );
     }
     ```

2. **Test Search Functionality** 🔍
   - [ ] Type di search box
   - [ ] List filter real-time sesuai search term
   - [ ] Search case-insensitive (besar/kecil tidak penting)
   - [ ] Clear search → semua notes balik

3. **Responsive Design Check** 📱
   - [ ] Open DevTools
   - [ ] Resize ke mobile (375px width)
   - [ ] Check:
     - [ ] Layout tidak broken
     - [ ] Text readable
     - [ ] Buttons clickable
     - [ ] Cards stack vertical (1 column)
   - [ ] Resize ke tablet (768px) → 2 columns
   - [ ] Resize ke desktop (1200px) → 3 columns

4. **Code Quality & Cleanup** 🧹
   - [ ] Remove `console.log()` yang tidak perlu
   - [ ] Check naming: variable/function names clear & consistent
   - [ ] Run linter: `ng lint` → fix any warnings
   - [ ] Run formatter: `npm run format` → consistent formatting

5. **Final Testing** ✅
   - [ ] Test semua fitur:
     - [ ] Add note
     - [ ] Edit note
     - [ ] Delete note (dengan confirm)
     - [ ] Search/filter
     - [ ] Refresh → data persist
   - [ ] Check console → no errors/warnings
   - [ ] Test di mobile view

6. **Create/Update README.md** 📖
   - [ ] Update `README.md` dengan:
     - Project description
     - How to run (`npm install` + `npm start`)
     - Features implemented
     - Tech stack
     - Component structure
     - Screenshots (optional)

7. **Git Commit Final** 📤
   ```bash
   git add .
   git commit -m "feat: implement search/filter, responsive design, and final polish"
   git push origin main
   ```

#### 📌 Acceptance Criteria:
- [ ] Search/filter bekerja
- [ ] Responsive di mobile/tablet/desktop
- [ ] No console errors/warnings
- [ ] All features tested & working
- [ ] Code formatted & linted
- [ ] README updated
- [ ] All commits pushed

#### 🎉 Completion Checklist:
- [ ] 7 commits dengan message yang meaningful
- [ ] Semua features working
- [ ] Code clean & readable
- [ ] Responsive design implemented
- [ ] localStorage working
- [ ] No console errors

---

## 📚 Resources

### Angular Docs:
- [Angular Official Docs](https://angular.io/docs)
- [Components](https://angular.io/guide/component-overview)
- [Template Syntax](https://angular.io/guide/template-syntax)
- [Forms](https://angular.io/guide/forms)
- [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)

### TypeScript:
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
- [Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

### JavaScript:
- [Array Methods (.map, .filter, .find)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Tailwind CSS:
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Grid System](https://tailwindcss.com/docs/grid-template-columns)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)

### Tools:
- Chrome DevTools F12 (inspect, console, Application tab)
- VSCode Extensions: Angular Language Service, Prettier, ESLint

---

## 🤝 Mentoring Tips

### Jika Stuck:
1. **Check console first** → ada error message biasanya
2. **Google the error** → 80% udah ada yang tanya
3. **Ask mentor** → tapi baru setelah coba sendiri 20 min
4. **Pair programming** → troubleshoot bersama

### Expected Progress:
- Day 1: ~30% (setup + display)
- Day 2: ~50% (add feature)
- Day 3: ~60% (delete feature)
- Day 4-5: ~75% (edit feature)
- Day 6: ~90% (persistence)
- Day 7: ~100% (search + polish)

### Daily Standup Template:
```
DAILY STANDUP - [Date]
---
Yesterday: [What did I do]
Today: [What will I do]
Blocked: [Any blockers? (yes/no)]
  └─ If yes: [Describe]

Self-rating: [1-10] (how confident with today's task)
```

---

## ✅ Final Submission

**Before declaring done, confirm with mentor:**
- [ ] All 7 features working
- [ ] Code pushed to Git
- [ ] README updated
- [ ] Repo link shared with mentor
- [ ] Mentor did code review
- [ ] No critical issues

**Bonus achievements:**
- [ ] Add note color/category
- [ ] Add note priority levels
- [ ] Export notes to JSON
- [ ] Add filter by date/category
- [ ] Deploy to Firebase or similar
- [ ] Add unit tests
- [ ] Implement service layer for data management

---

**Good luck! 🚀 Tanya mentor kalau ada yang tidak jelas. Jangan takut error—itu cara belajar terbaik.**
