import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual-keyboard',
  templateUrl: './virtual-keyboard.component.html',
  styleUrls: ['./virtual-keyboard.component.css'],
  standalone: true
})
export class VirtualKeyboardComponent {
  @ViewChild('keyboard') keyboard!: ElementRef;
  @Output() keyPress = new EventEmitter<string>();

  private dragging: boolean = false;
  private offsetX: number = 0;
  private offsetY: number = 0;

  onDragStart(event: MouseEvent): void {
    this.dragging = true;
    this.offsetX = event.clientX - this.keyboard.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.keyboard.nativeElement.getBoundingClientRect().top;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onDragEnd);
  }

  onMouseMove = (event: MouseEvent): void => {
    if (this.dragging) {
      const x = event.clientX - this.offsetX;
      const y = event.clientY - this.offsetY;
      this.keyboard.nativeElement.style.left = `${x}px`;
      this.keyboard.nativeElement.style.top = `${y}px`;
    }
  };

  onDragEnd = (): void => {
    this.dragging = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onDragEnd);
  };

  onKeyPress(key: string): void {
    if (key === 'backspace') {
      this.keyPress.emit('BACKSPACE');
    } else if (key === 'space') {
      this.keyPress.emit(' ');
    } else if (key === 'enter') {
      this.keyPress.emit('ENTER');
    } else if (key === 'tab') {
      this.keyPress.emit('TAB');
    } else {
    this.keyPress.emit(key);
    }
  }

  onTouchStart(event: TouchEvent): void {
    this.dragging = true;
    this.offsetX = event.touches[0].clientX - this.keyboard.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.touches[0].clientY - this.keyboard.nativeElement.getBoundingClientRect().top;
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
  }

  onTouchMove = (event: TouchEvent): void => {
    if (this.dragging) {
        const x = event.touches[0].clientX - this.offsetX;
        const y = event.touches[0].clientY - this.offsetY;
        this.keyboard.nativeElement.style.left = `${x}px`;
        this.keyboard.nativeElement.style.top = `${y}px`;
    }
  };

  onTouchEnd = (): void => {
    this.dragging = false;
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
  };
  
  setScale(scale: number): void {
    this.keyboard.nativeElement.style.transform = `scale(${scale / 100})`;
  }
  
}
