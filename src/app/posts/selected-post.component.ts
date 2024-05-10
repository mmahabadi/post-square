import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { HeaderComponent } from '@share/components/header.component';
import { selectActivePost } from './+state/post.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-selected-post',
  standalone: true,
  imports: [HeaderComponent, AsyncPipe],
  template: `
    <app-header>
      <h3 class="text-xl font-bold">
        @if(activePostId$ | async){ Wow! Post number
        <span class="text-orange-500 text-2xl">
          {{ activePostId$ | async }}
        </span>
        is active now! } @else { Select a post to see the magic! }
      </h3>
    </app-header>
  `,
})
export class SelectedPostComponent {
  private readonly store = inject(Store);
  activePostId$ = this.store.select(selectActivePost);
}
