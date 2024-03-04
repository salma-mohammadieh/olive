import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { dataService } from '../../services/data.service';
import { Company } from '../../types/company.type';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent implements AfterViewInit {
  @Input() dataSource: MatTableDataSource<Company>;
  @Input() columns: string[];
  @Output() pagination: EventEmitter<any> = new EventEmitter<any>();
  currentPage = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
    }
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.pagination.emit(pageEvent);
  }
}
