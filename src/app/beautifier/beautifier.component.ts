import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  js as beautifyJs,
  html as beautifyHtml,
  css as beautifyCss,
} from 'js-beautify';

@Component({
  selector: 'app-beautifier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './beautifier.component.html',
  styleUrls: ['./beautifier.component.css'],
})
export class BeautifierComponent {
  code = '';
  output = '';
  type: 'html' | 'css' | 'js' = 'html';

  beautify() {
    switch (this.type) {
      case 'html':
        this.output = beautifyHtml(this.code, { indent_size: 2 });
        break;
      case 'css':
        this.output = beautifyCss(this.code, { indent_size: 2 });
        break;
      case 'js':
        this.output = beautifyJs(this.code, { indent_size: 2 });
        break;
    }
  }
}
