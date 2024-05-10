import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { loadPosts } from './posts/+state/post.actions';
import { selectError, selectLoading } from './posts/+state/post.selectors';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header, posts, and selected post components', function () {
    // Arrange
    store.overrideSelector(selectLoading, false);
    store.overrideSelector(selectError, null);

    // Act
    store.refreshState();
    fixture.detectChanges();
    // Assert
    expect(fixture.nativeElement.querySelector('app-posts')).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('app-selected-post')
    ).toBeTruthy();
    expect(fixture.nativeElement.querySelector('app-loading')).toBeFalsy();
    expect(fixture.nativeElement.querySelector('app-alert')).toBeFalsy();
  });

  it('should dispatch loadPosts action on init', function () {
    // Arrange
    const loadPostsSpy = spyOn(store, 'dispatch').and.callThrough();

    // Act
    fixture.detectChanges();

    // Assert
    expect(loadPostsSpy).toHaveBeenCalledOnceWith(loadPosts());
  });

  it('should render loading component when loading$ is true', () => {
    // Arrange
    store.overrideSelector(selectLoading, true);

    //Act
    store.refreshState();
    fixture.detectChanges();

    // Assert
    const loadingComponent = fixture.nativeElement.querySelector('app-loading');
    expect(loadingComponent).toBeTruthy();
  });

  it('should render error alert when error$ has a value', () => {
    // Arrange
    const errorMessage = new Error('An error occurred');
    store.overrideSelector(selectError, errorMessage);

    //Act
    store.refreshState();
    fixture.detectChanges();

    // Assert
    const errorAlert = fixture.nativeElement.querySelector('app-alert');
    expect(errorAlert).toBeTruthy();
    expect(errorAlert.textContent).toContain(errorMessage);
  });
});
