import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautifierComponent } from './beautifier.component';

describe('BeautifierComponent', () => {
  let component: BeautifierComponent;
  let fixture: ComponentFixture<BeautifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautifierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
