import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../clientes/contact.interface';
import icPhone from '@iconify/icons-ic/twotone-phone';
import icBusiness from '@iconify/icons-ic/twotone-business';
import icMail from '@iconify/icons-ic/twotone-mail';
import icChat from '@iconify/icons-ic/twotone-chat';
import icStar from '@iconify/icons-ic/twotone-star';
import icStarBorder from '@iconify/icons-ic/twotone-star-border';
import { ContactModel, ContactModelReador } from '../../models/contact.model';

@Component({
  selector: 'vex-contacts-card',
  templateUrl: './contacts-card.component.html',
  styleUrls: ['./contacts-card.component.scss']
})
export class ContactsCardComponent implements OnInit {

  @Input() contact: ContactModelReador;
  @Output() openContactActualizar = new EventEmitter<any['id']>();
  @Output() toggleStar = new EventEmitter<any['id']>();

  icBusiness = icBusiness;
  icPhone = icPhone;
  icMail = icMail;
  icChat = icChat;
  icStar = icStar;
  icStarBorder = icStarBorder;

  constructor() { }

  ngOnInit() {
  }

  emitToggleStar(event: MouseEvent, contactId: any['id']) {
    event.stopPropagation();
    this.toggleStar.emit(contactId);
  }
}
