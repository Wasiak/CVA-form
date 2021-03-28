import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Item {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  constructor() { }

  items: Item[] = [
    { id: 1, name: 'item 1', description: 'description for item 1'},
    { id: 2, name: 'item 2', description: 'description for item 2'},
    { id: 3, name: 'item 3', description: 'description for item 3'},
    { id: 4, name: 'item 4', description: 'description for item 4'},
    { id: 5, name: 'item 5', description: 'description for item 5'},
    { id: 6, name: 'item 6', description: 'description for item 6'},
  ];

  itemForm: FormGroup;

  ngOnInit(): void {
    this.itemForm = new FormGroup({
      'itemControl': new FormControl(null)
    });

    this.itemForm.valueChanges.subscribe(
      value => console.log(value.itemControl)
    );
  }

  checkSelection(id: number) {
    return id === this.itemForm.value.itemControl?.id
  }
}
