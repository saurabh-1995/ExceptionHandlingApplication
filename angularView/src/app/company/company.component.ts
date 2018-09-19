import { Component, OnInit } from '@angular/core';
import { CompanyPortfolioService } from './shared/company-portfolio.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[CompanyPortfolioService]
})
export class CompanyComponent implements OnInit {

  constructor(private companyService:CompanyPortfolioService) { }

  ngOnInit() {
  }

}
