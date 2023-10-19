import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-fill',
  templateUrl: './auto-fill.component.html',
  styleUrls: ['./auto-fill.component.scss']
})
export class AutoFillComponent {
  otp: string = '';
  isVisible = false;

  onCodeCompleted(code: string) {
    this.isVisible = true;
  }
}
