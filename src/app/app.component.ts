import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AlertComponent } from '@share/components/alert.component';
import { loadPosts } from './posts/+state/post.actions';
import { selectError, selectLoading } from './posts/+state/post.selectors';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, AsyncPipe, PostsComponent, AlertComponent],
  template: ` @if (loading$ | async) {
    <div>Loading...</div>
    } @if (error$ | async) {
    <app-alert class="text-center">{{ error$ | async }}</app-alert>
    }

    <app-posts></app-posts>`,
})
export class AppComponent {
  private readonly store = inject(Store);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);
  ngOnInit(): void {
    this.store.dispatch(loadPosts());
  }
}
