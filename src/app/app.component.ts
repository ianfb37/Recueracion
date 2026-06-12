import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AgilityService, User } from './services/agility.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  guias$: Observable<User[]>;

  constructor(private agilityService: AgilityService) {
    this.guias$ = this.agilityService.getGuias();
  }
}
