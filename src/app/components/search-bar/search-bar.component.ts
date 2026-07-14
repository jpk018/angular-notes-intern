import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  @Input() value: string = '';
  @Output() onChange = new EventEmitter<string>();

  onInputChange(event: any): void {
    this.onChange.emit(event.target.value);
  }
}
