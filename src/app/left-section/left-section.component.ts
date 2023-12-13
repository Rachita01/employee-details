import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-left-section',
  templateUrl: './left-section.component.html',
  styleUrls: ['./left-section.component.css'],
})
export class LeftSectionComponent {
  @Output() addClick = new EventEmitter<void>();
  @Output() viewClick = new EventEmitter<void>();

  addClicked() {
    this.addClick.emit();
  }

  viewClicked() {
    this.viewClick.emit();
  }
}
