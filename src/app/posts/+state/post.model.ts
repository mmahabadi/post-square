export interface PostStore {
  posts: Post[];
  loading: boolean;
  error: Error | null;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
