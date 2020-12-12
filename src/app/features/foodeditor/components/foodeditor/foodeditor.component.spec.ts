import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodeditorComponent } from './foodeditor.component';

describe('FoodeditorComponent', () => {
  let component: FoodeditorComponent;
  let fixture: ComponentFixture<FoodeditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodeditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
