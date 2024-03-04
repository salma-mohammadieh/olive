import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  screenWidth: number;

  constructor(private windowSizeService: WindowSizeService) {}

  ngOnInit(): void {
    this.windowSizeService.getScreenWidth().subscribe((width) => {
      this.onResize({ target: { innerWidth: width } });
    });
  }

  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
  }
}
