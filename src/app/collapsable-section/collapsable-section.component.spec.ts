import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableSectionComponent } from './collapsable-section.component';

describe('CollapsableSectionComponent', () => {
  let component: CollapsableSectionComponent;
  let fixture: ComponentFixture<CollapsableSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapsableSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change expanded value', () => {
    component.contentExpanded = false;

    component.onToggleExpand();

    expect(component.contentExpanded).toBeTrue();
  });
});
