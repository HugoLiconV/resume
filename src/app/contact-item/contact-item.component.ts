import { Component, OnInit, Input } from '@angular/core';
import { ContactItem } from '../_models';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent implements OnInit {

  constructor() { }
  @Input() contactItem: ContactItem;
  ngOnInit() {
  }

  redirect() {
    window.open(this.contactItem.link, '_blank');
  }
}
