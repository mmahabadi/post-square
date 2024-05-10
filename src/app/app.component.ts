import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertComponent } from '@share/components/alert.component';
import { HeaderComponent } from '@share/components/header.component';
import { LoadingComponent } from '@share/components/loading.component';
import { loadPosts } from './posts/+state/post.actions';
import { selectError, selectLoading } from './posts/+state/post.selectors';
import { PostsComponent } from './posts/posts.component';
import { SelectedPostComponent } from './posts/selected-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    PostsComponent,
    AlertComponent,
    HeaderComponent,
    LoadingComponent,
    SelectedPostComponent,
  ],
  template: `
    <app-selected-post />
    <main class="pt-16">
      @if (loading$ | async) {
      <app-loading />
      } @if (error$ | async) {
      <app-alert class="text-center">{{ error$ | async }}</app-alert>
      }
      <app-posts></app-posts>
    </main>
  `,
})
export class AppComponent {
  private readonly store = inject(Store);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
