import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoFillComponent } from './auto-fill.component';

describe('AutoFillComponent', () => {
  let component: AutoFillComponent;
  let fixture: ComponentFixture<AutoFillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoFillComponent]
    });
    fixture = TestBed.createComponent(AutoFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
