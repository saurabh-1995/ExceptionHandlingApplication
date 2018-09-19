import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
//import { ToastrModule } from 'ngx-toastr';
import { CompanyComponent } from './company/company.component';
import { CompanyPortfolioComponent } from './company/company-portfolio/company-portfolio.component';
import { CompanyPortfolioDetailsComponent } from './company/company-portfolio-details/company-portfolio-details.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PortfoliodetailsComponent } from './portfoliodetails/portfoliodetails.component';

import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{
  path: '',
   component: CompanyComponent
 },
 {
   path:'Portfolio',
 component: PortfolioComponent,
 },
 
 ];


@NgModule({
  declarations: [
    AppComponent,
    
    CompanyComponent,
    CompanyPortfolioComponent,
    CompanyPortfolioDetailsComponent,
    PortfolioComponent,
    PortfoliodetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
