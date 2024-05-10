import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostsComponent } from './posts.component';
import { selectActivePost, selectPosts } from './+state/post.selectors';
import { Post } from './+state/post.model';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-post')).toBeFalsy();
  });

  it('should render the post component', function () {
    // Arrange
    store.overrideSelector(selectPosts, [{ id: 1, title: 'Post 1' } as Post]);
    store.overrideSelector(selectActivePost, 1);
    // Act
    store.refreshState();
    fixture.detectChanges();
    // Assert
    expect(fixture.nativeElement.querySelector('app-post')).toBeTruthy();
    expect(fixture.nativeElement.querySelectorAll('app-post').length).toBe(1);
  });
});
