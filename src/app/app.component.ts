import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to Angular Assignment of Switching';
  toggleFlag = true;
  label = 'Toggle Switch Component';
  disabledToggle = false;
}
