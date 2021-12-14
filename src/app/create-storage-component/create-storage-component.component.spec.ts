import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStorageComponentComponent } from './create-storage-component.component';

describe('CreateStorageComponentComponent', () => {
  let component: CreateStorageComponentComponent;
  let fixture: ComponentFixture<CreateStorageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStorageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStorageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
