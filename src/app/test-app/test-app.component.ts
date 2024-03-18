import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VirtualKeyboardComponent } from '../virtual-keyboard/virtual-keyboard.component';

@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.css'],
  standalone: true,
  imports: [VirtualKeyboardComponent, FormsModule, NgIf]
})
export class TestAppComponent {
  keyboardVisible = false;
  typedText = '';

  toggleKeyboard(): void {
    this.keyboardVisible = !this.keyboardVisible;
  }

  onKeyTyped(key: string): void {
    if (key === 'BACKSPACE') {
      this.typedText = this.typedText.slice(0, -1);
    } else if (key === 'ENTER') {
      this.typedText += '\n';
    } else if (key === 'TAB') {
      this.typedText += '\t';
    } else {
      this.typedText += key;
    }
  }

}


