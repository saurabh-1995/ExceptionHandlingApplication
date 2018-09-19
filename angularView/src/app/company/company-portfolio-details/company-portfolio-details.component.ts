import { Component, OnInit } from '@angular/core';
import { CompanyPortfolioService } from '../shared/company-portfolio.service';
import { PortfolioService} from '../shared/portfolio.service';
import { CompanyPortfolio } from '../shared/company-portfolio.model';
import { Router,ActivatedRoute } from '@angular/router';
import { Portfolio } from '../shared/portfolio.model';

@Component({
  selector: 'app-company-portfolio-details',
  templateUrl: './company-portfolio-details.component.html',
  styleUrls: ['./company-portfolio-details.component.css']
})
export class CompanyPortfolioDetailsComponent implements OnInit {

  constructor(private companyService:CompanyPortfolioService, private route: ActivatedRoute, private portfolioService: PortfolioService, private routes: Router) { }
  
  companyName: string;
  sub: any;
  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe(params => {

        

      });
    this.companyService.gettblCompanyDetails();
    
  }
  showForEdit(company: CompanyPortfolio) {
    this.companyService.selectedCompanyPortfolio = Object.assign({}, company);;
  }
  onSelect(selectedItem: any) {
    console.log("Selected item Id: ", selectedItem.CompanyName);
    
    //this.routes.navigateByUrl('/Portfolio')// You get the Id of the selected item here
    this.routes.navigate(['Portfolio'], { queryParams: { CompanyName: selectedItem.CompanyName } });
  }
  

}
