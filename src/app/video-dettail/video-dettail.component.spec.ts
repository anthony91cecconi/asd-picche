import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDettailComponent } from './video-dettail.component';

describe('VideoDettailComponent', () => {
  let component: VideoDettailComponent;
  let fixture: ComponentFixture<VideoDettailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoDettailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
