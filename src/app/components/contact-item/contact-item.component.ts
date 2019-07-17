import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact-list/contact-list.component';

@Component({
  selector: 'contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent implements OnInit {

  _contact: Contact = new Contact("", 12);

  @Input()
  set contactObj(contact: Contact) {
    this._contact.name = (contact.name && contact.name.trim()) || "待定用户";
    if (this._contact.name === "待定用户") {
      this._contact.number = 1320000000;
    }
  }

  get contactObj() {
    return this._contact;
  }

  constructor() { }

  ngOnInit() {
  }

}
