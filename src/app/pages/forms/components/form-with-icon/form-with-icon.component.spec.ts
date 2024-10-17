import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithIconComponent } from './form-with-icon.component';

describe('FormWithIconComponent', () => {
  let component: FormWithIconComponent;
  let fixture: ComponentFixture<FormWithIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormWithIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
