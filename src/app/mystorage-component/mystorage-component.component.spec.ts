import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MystorageComponentComponent } from './mystorage-component.component';

describe('MystorageComponentComponent', () => {
  let component: MystorageComponentComponent;
  let fixture: ComponentFixture<MystorageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MystorageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MystorageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
