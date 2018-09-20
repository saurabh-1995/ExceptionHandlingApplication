import { Component, OnInit } from '@angular/core';
import { PortfolioService} from '../company/shared/portfolio.service'; 
import { NgForm } from '../../../node_modules/@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Portfolio} from '../company/shared/portfolio.model';
//import { ToastrService } from '../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  message:string;
  sub: any;
  companyName: any;
  portfolioName:any;
  constructor(private portfolioService:PortfolioService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.queryParams
      .subscribe(params => {

        this.companyName = params['CompanyName'];
        
        
        this.portfolioService.gettblPortfolioDetails();
        

      });
    this.resetForm();  
  }
  resetForm(form?:NgForm)
  {
    if(form!=null)
    form.reset();
    this.portfolioService.selectedPortfolio={
      CompanyName:'',
      PortFolioName:'',
      Description:'',
      CoverImage:'',
      YoutubeVideo:''
    }
  }
  onSubmit(form:NgForm){
    
    this.portfolioService.posttblPortfolioDetail(form.value)
    .subscribe(data=>{
    this.portfolioService.gettblPortfolioDetails();
    
      //this.toastr.success('New Record Added Successfully');
    },
    err => {
      this.message = "PortfolioName Already Exists";
    }
  )
  }
  showForEdit(port: Portfolio) {
    this.portfolioService.selectedPortfolio = Object.assign({}, port);;
  }
 

}
