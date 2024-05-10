import { Component, Input } from '@angular/core';
import { Post } from './+state/post.model';

@Component({
  selector: 'app-post',
  standalone: true,
  styles: `
  .post {
    @apply flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 border-e bg-white;
    @apply hover:bg-gray-100 hover:rounded-none h-[172px] w-[172px] overflow-hidden cursor-pointer;

    &.active{
      @apply bg-orange-500 border-orange-500 text-white hover:bg-orange-600;
    }
  }
  
  `,
  template: `
    <div (click)="clickHandler()" class="post" [class.active]="active">
      {{ caption }}
    </div>
  `,
})
export class PostComponent {
  @Input({ required: true }) post!: Post;
  @Input()
  set active(value: boolean) {
    this._active = value;
    if (!!value) {
      this.activeIndex = 1;
      this.setCaption();
    } else {
      this.activeIndex = 0;
      this.setCaption();
    }
  }
  get active() {
    return this._active;
  }

  caption = '';
  private _active = false;
  private activeIndex = 0;
  private readonly postProperties = ['title', 'id', 'body', 'userId'];

  clickHandler() {
    if (!this.active) return;

    this.activeIndex = (this.activeIndex + 1) % this.postProperties.length;
    this.setCaption();
  }

  private setCaption() {
    const property = this.postProperties[this.activeIndex];
    this.caption = this.post[property as keyof Post].toString();
  }
}
