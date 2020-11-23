import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HostListener } from '@angular/core';

const SPACE_CHAR_CODE = 32;

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent {
  @Input() switchFlag: boolean;
  @Output() switchFlagChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() switchLabel: string;
  @Input() disabled: boolean;

  constructor() { }

  /**
   * Hosts listener
   * @param: event
   */
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key: number = event.which || event.keyCode;
    if (key && key === SPACE_CHAR_CODE || event.code === 'Space') {
      this.switchFlag = !this.switchFlag;
      this.changeSwitchEvent();
    }
  }

  /**
   * Change switch event of switch component.
   */
  changeSwitchEvent = (): void => {
    this.switchFlagChange.emit(this.switchFlag);
  }
}
