import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from './post.service';
import { loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { Post } from './post.model';

@Injectable()
export class PostEffects {
  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      exhaustMap(() =>
        this.postService.loadPosts().pipe(
          map((posts: Post[]) => loadPostsSuccess({ posts })),
          catchError((error: Error) => of(loadPostsFailure({ error })))
        )
      )
    )
  );
}
