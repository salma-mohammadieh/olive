import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, throwError } from 'rxjs';
import { Company } from '../types/company.type';
import { apiUrl } from '../constants/constants';

@Injectable({
  providedIn: 'root',
})
export class dataService {
  private apiUrl = apiUrl;

  // constructor(private http: HttpClient) {}

  //   fetchData(pageSize? , previousPageIndex?): Observable<Company[]> {
  fetchCompanies(pageSize?, previousPageIndex?): Company[] {
    //const response$ = this.http.get<Company[]>(this.apiUrl/?page_size=${pageSize}&previous_page_index=${previousPageIndex}).pipe(
    //   catchError((error) => {
    //     // Emit an error observable
    //     return new Observable((observer) => {
    //       observer.error({ status:error.status, message:error.message });
    //     });
    //   })
    // );

    //todo:remove
    return Companies_Data;
  }

  //   fetchData(id:string): Observable<Company> {
  fetchCompany(id: string): Company {
    //const response$ = this.http.get<Company[]>(this.apiUrl/:${id}).pipe(
    //   catchError((error) => {
    //     // Emit an error observable
    //     return new Observable((observer) => {
    //       observer.error({ status:error.status, message:error.message });
    //     });
    //   })
    // );
    return fetch_company;
  }

  //searchCompanies(query: string): Observable<Company[]>  {
  searchCompanies(query: string): Company[] {
    // const searchUrl = `${this.apiUrl}?search=${query}`;
    // const response$ = this.http.get<Company[]>(searchUrl).pipe(
    //   catchError((error) => {
    //     // Emit an error observable
    //     return new Observable((observer) => {
    //       observer.error({ status:error.status, message:error.message });
    //     });
    //   })
    // );

    //todo:remove
    return Search_Data;
  }

  editCompany(
    id: string,
    newData: Company
  ): Observable<{ status: number; message: string }> {
    // const editUrl = `${this.apiUrl}/${id}`;
    // const response$ = this.http.put<Company>(editUrl, data).pipe(
    //   catchError((error) => {
    //     // Emit an error observable
    //     return new Observable((observer) => {
    //       observer.error({ status:error.status, message:error.message });
    //     });
    //   })
    // );
    //Todo:remove
    const response$ = { status: 404, message: 'failed' };
    if (response$.status !== 200) {
      return new Observable((observer) => {
        observer.error({
          status: response$.status,
          message: response$.message,
        }); // Emit an error
      });
    }
    return of({ status: response$.status, message: response$.message });
  }

  createCompany(
    data: Company
  ): Observable<{ status: number; message: string }> {
    // const response$ = this.http.post<{message:string}>( data).pipe(
    //   catchError((error) => {
    //     // Emit an error observable
    //     return new Observable((observer) => {
    //       observer.error({ status:error.status, message:error.message });
    //     });
    //   })
    // );

    //Todo:remove
    const response$ = { status: 400, message: 'failed' };
    if (response$.status !== 200) {
      return new Observable((observer) => {
        observer.error({
          status: response$.status,
          message: response$.message,
        });
      });
    }
    return of({ status: response$.status, message: response$.message });
  }
}

//test data to be removed
const Companies_Data: Company[] = [
  {
    name: 'Hydrogen',
    type: 'Bank',
    country: 'jordan',
    status: true,
    id: '1',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Helium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Lithium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Beryllium',
    type: 'Bank',
    country: 'saudi arabia',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Boron',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Carbon',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Nitrogen',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Oxygen',
    type: 'Bank',
    country: 'Jordan',
    status: false,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Fluorine',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Neon',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Sodium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Magnesium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Aluminum',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Silicon',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Phosphorus',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Sulfur',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Chlorine',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Argon',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Potassium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'Calcium',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
];

const Search_Data: Company[] = [
  {
    name: 'salma',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'salma',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'salma',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'salma',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
  {
    name: 'test',
    type: 'Bank',
    country: 'Jordan',
    status: true,
    id: '2',
    email: 'test@test',
    admin: { name: 'test', email: 'test@test' },
    logoUrl: 'test',
  },
];

const fetch_company = {
  name: 'test',
  type: 'Bank',
  country: 'jordan',
  status: true,
  id: '2',
  email: 'test@test',
  admin: { name: 'test', email: 'test@test' },
  logoUrl: 'test',
};
