import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="fixed bg-white text-black h-16 w-full p-4 text-center shadow-md z-10"
    >
      <ng-content></ng-content>
    </header>
  `,
})
export class HeaderComponent {}
