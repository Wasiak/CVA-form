import { Component, Input, OnInit } from '@angular/core';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapsable-section',
  templateUrl: './collapsable-section.component.html',
  styleUrls: ['./collapsable-section.component.scss']
})
export class CollapsableSectionComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  contentExpanded = true;
  chevronUp = faAngleUp;
  chevronDown = faAngleDown;

  ngOnInit(): void {
  }

  onToggleExpand() {
    this.contentExpanded = !this.contentExpanded;
  }

}
