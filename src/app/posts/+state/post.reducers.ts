import { createReducer, on } from '@ngrx/store';
import {
  loadPosts,
  loadPostsFailure,
  loadPostsSuccess,
  setActivePost,
} from './post.actions';
import { PostStore } from './post.model';

const initialState: PostStore = {
  posts: [],
  activePostId: null,
  loading: false,
  error: null,
};

export const postReducer = createReducer(
  initialState,
  on(loadPosts, (state) => ({ ...state, loading: true })),
  on(loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(loadPostsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(setActivePost, (state, { postId }) => ({
    ...state,
    activePostId: postId,
  }))
);
