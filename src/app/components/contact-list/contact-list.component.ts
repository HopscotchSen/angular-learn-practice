import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contact_list: Contact[];

  constructor() { }

  ngOnInit() {
    this.contact_list = [
      new Contact("warrior-one", 132788516),
      new Contact("warrior-tow", 15133818291),
      new Contact("warrior-three", 13212222222),
    ];
  }

}

export class Contact {
  constructor(public name: string, public number: number) { }
}
