import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapTableComponent } from './roadmap-table.component';

describe('RoadmapTableComponent', () => {
  let component: RoadmapTableComponent;
  let fixture: ComponentFixture<RoadmapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadmapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadmapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
