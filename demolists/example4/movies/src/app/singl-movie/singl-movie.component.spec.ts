import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglMovieComponent } from './singl-movie.component';

describe('SinglMovieComponent', () => {
  let component: SinglMovieComponent;
  let fixture: ComponentFixture<SinglMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
