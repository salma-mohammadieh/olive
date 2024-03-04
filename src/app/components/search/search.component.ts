import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output() didSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService
  ) {}

  searchForm = this.formBuilder.group({
    searchTerm: [''],
  });

  onSearch(): void {
    const searchQuery = this.searchForm.value.searchTerm;
    this.searchService.search(searchQuery);
    this.didSearch.emit(!!searchQuery);
  }
}
