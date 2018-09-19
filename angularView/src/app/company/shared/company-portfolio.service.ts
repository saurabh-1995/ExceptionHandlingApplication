import { Injectable } from '@angular/core';
import {CompanyPortfolio} from './company-portfolio.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable'

import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class CompanyPortfolioService {
  selectedCompanyPortfolio:CompanyPortfolio;
  companyList:CompanyPortfolio[];
  constructor(private http : Http) { }
  posttblCompanyDetail(company : CompanyPortfolio)
  {
    var body = JSON.stringify(company);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions= new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
    return this.http.post('http://localhost:51004/api/tblCompanyDetails',body,requestOptions).map(x=>x.json);
  }
  gettblCompanyDetails()
  {
    this.http.get('http://localhost:51004/api/tblCompanyDetails')
    .map((data:Response)=>{
      return data.json() as CompanyPortfolio[];
    }).toPromise().then(x=>{
      this.companyList=x;
    })
  }
}
