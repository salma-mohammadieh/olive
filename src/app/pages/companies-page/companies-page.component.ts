import { Component, OnInit } from '@angular/core';
import { Company } from '../../types/company.type';
import { SearchService } from '../../services/search.service';
import { dataService } from '../../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { WindowSizeService } from '../../services/window-size.service';

@Component({
  selector: 'app-companies-page',
  templateUrl: './companies-page.component.html',
  styleUrl: './companies-page.component.scss',
})
export class CompaniesPageComponent implements OnInit {
  addButtonText: string = '';
  data: Company[] = [];
  Companies_Data: MatTableDataSource<Company>;
  columns = ['name', 'type', 'country', 'status', 'edit'];
  screenWidth: number;

  constructor(
    private searchService: SearchService,
    private dataService: dataService,
    private windowSizeService: WindowSizeService
  ) {}

  onResize(event): void {
    this.screenWidth = event.target.innerWidth;
    this.addButtonText = this.screenWidth > 576 ? 'Add New +' : '+';
  }

  ngOnInit(): void {
    this.windowSizeService.getScreenWidth().subscribe((width) => {
      this.onResize({ target: { innerWidth: width } });
    });
    this.data = this.dataService.fetchCompanies();
    this.Companies_Data = new MatTableDataSource<Company>(this.data);
  }

  handleSearch(searchPerformed: boolean): void {
    if (searchPerformed) {
      this.searchService.searchData$.subscribe(
        (searchData) =>
          (this.Companies_Data = new MatTableDataSource<Company>(searchData))
      );
    } else {
      this.Companies_Data = new MatTableDataSource<Company>(this.data);
    }
  }

  handlePagination({ previousPageIndex, pageIndex, pageSize }) {
    const newData = this.dataService.fetchCompanies(
      pageSize,
      previousPageIndex
    );
    this.Companies_Data = new MatTableDataSource<Company>(newData);
  }
}
