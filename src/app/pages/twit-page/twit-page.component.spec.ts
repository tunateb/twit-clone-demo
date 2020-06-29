import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitPageComponent } from './twit-page.component';

describe('TwitPageComponent', () => {
  let component: TwitPageComponent;
  let fixture: ComponentFixture<TwitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
