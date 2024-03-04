import { AfterContentInit, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { dataService } from '../../services/data.service';
import { Company } from '../../types/company.type';

@Component({
  selector: 'app-createcompany-form',
  templateUrl: './createcompany-form.component.html',
  styleUrl: './createcompany-form.component.scss',
})
export class CreatecompanyFormComponent implements AfterContentInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: dataService,
    private Activatedroute: ActivatedRoute
  ) {}

  isEditing = false;
  countries = ['jordan', 'saudi arabia']; // to be removed and fetched from database
  error: string;
  companyData: Company = {
    name: '',
    type: '',
    country: '',
    status: false,
    id: '',
    email: '',
    admin: {
      name: '',
      email: '',
    },
  };
  companyForm = this.formBuilder.group({
    companyName: ['', Validators.required],
    companyEmail: ['', Validators.required],
    companyType: [''],
    companyCountry: [],
    adminName: ['', Validators.required],
    adminEmail: ['', Validators.required],
    companyLogo: [],
  });

  ngAfterContentInit(): void {
    this.Activatedroute.params.subscribe((params) => {
      if (params['id']) {
        this.isEditing = true;
        //Todo:
        //fetch data for the corrosponding company
        //fetch countries
        this.companyData = this.dataService.fetchCompany(params['id']);
        this.companyForm.patchValue({
          companyName: this.companyData.name,
          companyEmail: this.companyData.email,
          companyType: this.companyData.type,
          companyCountry: this.companyData.country,
          adminName: this.companyData.admin.name,
          adminEmail: this.companyData.admin.email,
        });
      }
    });
  }

  formSubmit() {
    if (this.companyForm.valid) {
      const {
        companyName,
        companyEmail,
        companyLogo,
        companyCountry,
        companyType,
        adminEmail,
        adminName,
      } = this.companyForm.value;
      const companyFormData: Company = {
        name: companyName,
        email: companyEmail,
        logoUrl: companyLogo,
        country: companyCountry,
        type: companyType,
        status: true,
        admin: {
          name: adminName,
          email: adminEmail,
        },
      };
      if (this.isEditing) {
        this.dataService
          .editCompany(this.companyData.id, companyFormData)
          .subscribe({
            next: (response) => this.router.navigate(['/home/companies']),
            error: (error) => (this.error = error.message),
          });
      } else {
        this.dataService.createCompany(companyFormData).subscribe({
          next: (response) => this.router.navigate(['/home/companies']),
          error: (error) => (this.error = error.message),
        });
      }
    }
  }

  handleFileInput(event) {
    this.companyForm.patchValue({
      companyLogo: [event.target.files[0], event.target.files[0].name],
    });
  }
}
