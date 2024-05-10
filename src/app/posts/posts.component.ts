import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectPosts } from './+state/post.selectors';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h1 class="text-3xl font-bold underline">Posts</h1>
    @for (item of posts$ | async; track item.id) {
    <div>{{ item.title }}</div>
    }
  `,
})
export class PostsComponent implements OnInit {
  private readonly store = inject(Store);
  posts$ = this.store.select(selectPosts);

  ngOnInit(): void {}
}
