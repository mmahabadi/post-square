import { createSelector } from '@ngrx/store';
import { PostStore } from './post.model';

export const selectBlog = (state: { blog: PostStore }) => state.blog;
export const selectPosts = createSelector(
  selectBlog,
  (state: PostStore) => state.posts
);

export const selectLoading = createSelector(
  selectBlog,
  (state: PostStore) => state.loading
);

export const selectError = createSelector(
  selectBlog,
  (state: PostStore) => state.error
);
