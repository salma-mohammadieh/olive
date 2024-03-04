// window-size.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WindowSizeService {
  private screenWidth$ = new BehaviorSubject<number>(
    isPlatformBrowser(this.platformId) ? window.innerWidth : 0
  );

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('resize', () => {
        this.screenWidth$.next(window.innerWidth);
      });
    }
  }

  getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
