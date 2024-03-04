import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { dataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchDataSubject = new BehaviorSubject<any[]>([]);
  searchData$: Observable<any[]> = this.searchDataSubject.asObservable();

  constructor(private dataService: dataService) {}

  search(query: string): void {
    const results = this.dataService.searchCompanies(query);
    this.searchDataSubject.next(results);
  }
}
