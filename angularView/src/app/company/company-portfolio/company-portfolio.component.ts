import { Component, OnInit } from '@angular/core';
import { CompanyPortfolioService} from '../shared/company-portfolio.service';
import {PortfolioService} from '../shared/portfolio.service';
import { NgForm } from '../../../../node_modules/@angular/forms';
//import { ToastrService } from '../../../../node_modules/ngx-toastr';


@Component({
  selector: 'app-company-portfolio',
  templateUrl: './company-portfolio.component.html',
  styleUrls: ['./company-portfolio.component.css']
})
export class CompanyPortfolioComponent implements OnInit {

  constructor(private companyService:CompanyPortfolioService,private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.resetForm();
  }
  companyName:string;
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();
    this.companyService.selectedCompanyPortfolio={
      CompanyName:'',
      Address:'',
      EmailID:'',
      PhoneNo:null,
      ContactPerson:''
    }
  }
  onSubmit(form:NgForm){
    this.companyService.posttblCompanyDetail(form.value)
    .subscribe(data=>{
      this.companyService.gettblCompanyDetails();
      this.companyName=form.controls.CompanyName.value;
      this.portfolioService.companyName=form.controls.CompanyName.value;
      this.resetForm(form);
      //this.toastr.success('New Record Added Successfully');
    })
  }

}
