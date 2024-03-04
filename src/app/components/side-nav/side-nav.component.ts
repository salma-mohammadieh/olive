import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
  sideNavData: listItem[] = [
    { name: 'Dashboard', route: 'dashboard' },
    { name: 'Companies', route: 'companies' },
    { name: 'Services', route: 'services' },
    { name: 'Biling', route: 'biling' },
    { name: 'Reports', route: 'reports' },
    { name: 'Project Management', route: 'projectmanagement' },
  ];
}

export interface listItem {
  name: string;
  route: string;
}
