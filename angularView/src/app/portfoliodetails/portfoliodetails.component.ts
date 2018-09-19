import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../company/shared/portfolio.service';

@Component({
  selector: 'app-portfoliodetails',
  templateUrl: './portfoliodetails.component.html',
  styleUrls: ['./portfoliodetails.component.css']
})
export class PortfoliodetailsComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    this.portfolioService.gettblPortfolioDetails();
  }

}
