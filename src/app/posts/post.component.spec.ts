import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { PostComponent } from './post.component';
import { Post } from './+state/post.model';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let store: MockStore;
  const initialState = {};
  const post: Post = {
    id: 1,
    title: 'Test Post',
    body: 'Lorem ipsum',
    userId: 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set caption to post title', () => {
    //Arrange
    component.post = post;
    component.active = false;
    //Act
    fixture.detectChanges();
    //Assert
    expect(component.caption).toEqual(post.title);
  });

  it('should set caption to post id', () => {
    //Arrange
    component.post = post;
    component.active = true;
    //Act
    fixture.detectChanges();
    //Assert
    expect(component.caption).toEqual(post.id.toString());
  });
});
