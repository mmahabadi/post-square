import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const loadPosts = createAction('[Post] Load Posts');
export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: Post[] }>()
);
export const loadPostsFailure = createAction(
  '[Post] Load Posts Failure',
  props<{ error: Error }>()
);

export const setActivePost = createAction(
  '[Post] Set Active Post',
  props<{ postId: number }>()
);
