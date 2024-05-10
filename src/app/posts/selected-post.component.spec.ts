import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectedPostComponent } from './selected-post.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { selectActivePost } from './+state/post.selectors';

describe('SelectedPostComponent', () => {
  let component: SelectedPostComponent;
  let fixture: ComponentFixture<SelectedPostComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPostComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(SelectedPostComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header component with "Select a post to see the magic!"', function () {
    //Arrange
    store.overrideSelector(selectActivePost, null);
    store.refreshState();
    // Act
    fixture.detectChanges();
    // Assert
    expect(fixture.nativeElement.querySelector('h3').textContent).toContain(
      'Select a post to see the magic!'
    );
  });

  it('should render the header component with "Wow! Post number {id} is active now!"', function () {
    // Arrange
    store.overrideSelector(selectActivePost, 1);
    // Act
    store.refreshState();
    fixture.detectChanges();
    // Assert
    expect(
      fixture.nativeElement.querySelector('h3').textContent.trim()
    ).toContain('Wow! Post number  1  is active now!');
  });
});
