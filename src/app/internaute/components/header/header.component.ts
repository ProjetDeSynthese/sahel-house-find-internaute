import { Component } from '@angular/core';
import { baseURL_FRONT_ADMIN } from 'src/app/core/config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
LOGIN= baseURL_FRONT_ADMIN
}
