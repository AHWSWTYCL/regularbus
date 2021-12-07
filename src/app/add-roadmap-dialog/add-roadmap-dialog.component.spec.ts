import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoadmapDialogComponent } from './add-roadmap-dialog.component';

describe('AddRoadmapDialogComponent', () => {
  let component: AddRoadmapDialogComponent;
  let fixture: ComponentFixture<AddRoadmapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRoadmapDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoadmapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
