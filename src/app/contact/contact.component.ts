import { Component, OnInit } from '@angular/core';
import { ContactItem } from '../_models';
import { CONTACT_ITEMS } from '../_data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactItems: ContactItem[];
  constructor() {
    this.contactItems = CONTACT_ITEMS;
  }
  ngOnInit() {
  }

}
