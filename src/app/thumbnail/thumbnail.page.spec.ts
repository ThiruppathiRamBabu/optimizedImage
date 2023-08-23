import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThumbnailPage } from './thumbnail.page';

describe('ThumbnailPage', () => {
  let component: ThumbnailPage;
  let fixture: ComponentFixture<ThumbnailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThumbnailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
