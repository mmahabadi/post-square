import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Post } from './post.model';
import { PostService } from './post.service';
import { of } from 'rxjs';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch posts from the API', () => {
    // Arrange
    const expectedPosts: Post[] = [
      { id: 1, title: 'Post 1', body: 'Body 1', userId: 1 },
      { id: 2, title: 'Post 2', body: 'Body 2', userId: 2 },
    ];
    spyOn(service, 'loadPosts').and.returnValue(of(expectedPosts));

    // Act
    service.loadPosts().subscribe((posts) => {
      // Assert
      expect(posts).toEqual(expectedPosts);
    });
  });
});
