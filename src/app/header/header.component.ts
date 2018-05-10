import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';

import { User } from '../auth/shared/services/auth/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() user: User;

  @Output() logout = new EventEmitter<any>();

  logoutUser() {
    this.logout.emit();
  }
}
