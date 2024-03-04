import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription, map } from 'rxjs';
import { User } from '../../types/user.type';
import { selectUserState } from '../../store/user.selector';

@Component({
  selector: 'app-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrl: './account-dropdown.component.scss',
})
export class AccountDropdownComponent implements OnDestroy {
  userSubscription: Subscription;
  user: User;

  constructor(private store: Store<{ user: User }>) {
    this.userSubscription = this.store
      .select(selectUserState)
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
