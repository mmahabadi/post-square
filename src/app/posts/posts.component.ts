import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { setActivePost } from './+state/post.actions';
import { selectActivePost, selectPosts } from './+state/post.selectors';
import { PostComponent } from './post.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, PostComponent],
  template: `
    <div
      class="grid grid-cols-10 gap-0 border border-gray-200 rounded-lg shadow-sm bg-white min-w-[1024px]"
    >
      @for (item of posts$ | async; track item.id) {
      <app-post
        (click)="setActivePost(item.id)"
        [post]="item"
        [active]="(selectedPostId$ | async) === item.id"
      />
      }
    </div>
  `,
})
export class PostsComponent {
  private readonly store = inject(Store);
  posts$ = this.store.select(selectPosts);
  selectedPostId$ = this.store.select(selectActivePost);

  setActivePost(postId: number) {
    this.store.dispatch(setActivePost({ postId }));
  }
}
