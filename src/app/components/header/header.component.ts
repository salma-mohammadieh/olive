import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WindowSizeService } from '../../services/window-size.service';
import { Store } from '@ngrx/store';
import { selectUserStatus } from '../../store/user.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  host: {
    '(window:resize)': 'onResize($event)',
  },
})
export class HeaderComponent {
  screenWidth: number;
  isMenuOpen = false;
  isLoggedIn$: Observable<boolean>;

  @Output() didToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private windowSizeService: WindowSizeService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.windowSizeService.getScreenWidth().subscribe((width) => {
      this.onResize({ target: { innerWidth: width } });
    });
    this.isLoggedIn$ = this.store.select(selectUserStatus);
  }

  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }

  onToggle() {
    this.didToggle.emit(!!this.isMenuOpen);
  }
}
