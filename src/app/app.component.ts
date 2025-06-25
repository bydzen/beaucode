import { Component } from '@angular/core';
import { BeautifierComponent } from './beautifier/beautifier.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BeautifierComponent],
  template: `<app-beautifier></app-beautifier>`,
})
export class AppComponent {}
