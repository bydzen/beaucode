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

  // Change the type of code to beautify
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

  // Copy the beautified code to clipboard and change the button text to "Copied!"
  copyToClipboard() {
    navigator.clipboard.writeText(this.output).then(() => {
      const copyButton = document.querySelector(
        '.copy-button'
      ) as HTMLButtonElement;
      if (copyButton) {
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
          copyButton.textContent = 'Copy Beaucode';
        }, 2000);
      }
    });
  }

  // Clear the input and output fields
  clear() {
    this.code = '';
    this.output = '';
  }
}
