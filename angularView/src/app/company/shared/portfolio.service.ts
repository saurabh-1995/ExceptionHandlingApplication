import { Injectable } from '@angular/core';
import {Portfolio} from './portfolio.model';
import {Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import  'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  selectedItem: any;
  
  
  companyName:string;
  CompanyPortfolioList = []
  selectedPortfolio:Portfolio;
  portfolioList:Portfolio[];


  constructor(private http : Http) { }
  posttblPortfolioDetail(portfolio : Portfolio)
  {
    var body = JSON.stringify(portfolio);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions= new RequestOptions({method:RequestMethod.Post,headers:headerOptions});
    return this.http.post('http://localhost:51004/api/tblPortfolioDetails', body,requestOptions).map(x=>x.json);
  }
  gettblPortfolioDetails()
  {
    
    this.http.get('http://localhost:51004/api/tblPortfolioDetails')
    .map((data:Response)=>{
      console.log(data)
      return data.json() as Portfolio[];
    }).toPromise().then(x=>{
      this.portfolioList=x;
    })
  }
}
