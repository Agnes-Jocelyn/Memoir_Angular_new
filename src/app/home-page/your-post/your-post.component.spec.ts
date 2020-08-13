import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPostComponent } from './your-post.component';

describe('YourPostComponent', () => {
  let component: YourPostComponent;
  let fixture: ComponentFixture<YourPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
