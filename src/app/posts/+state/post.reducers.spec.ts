import { loadPosts, loadPostsFailure, loadPostsSuccess } from './post.actions';
import { Post, PostStore } from './post.model';
import { initialState, postReducer } from './post.reducers';

describe('PostReducers', () => {
  beforeAll(() => {});
  it('should return the default state', () => {
    // Arrange
    const action = { type: 'Unknown' };
    // Act
    const result = postReducer(initialState, action);
    // Assert
    expect(result).toEqual(initialState);
  });
  it('should set loading to true on loadPosts', () => {
    // Act
    const result = postReducer(initialState, loadPosts());
    // Assert
    expect(result.loading).toBe(true);
    expect(result.error).toBeNull();
  });

  it('should receive posts on loadPostsSuccess', () => {
    // Arrange
    const posts = [{ id: 1, title: 'Test' } as Post];
    // Act
    const result = postReducer(initialState, loadPostsSuccess({ posts }));
    // Assert
    expect(result.posts).toEqual(posts);
    expect(result.loading).toBe(false);
    expect(result.error).toBeNull();
  });
  it('should set error on loadPostsFailure', () => {
    // Arrange
    const error = new Error('Error');
    // Act
    const result = postReducer(initialState, loadPostsFailure({ error }));
    // Assert
    expect(result.error).toEqual(error);
    expect(result.loading).toBe(false);
  });
});
