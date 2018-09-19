import { TestBed, inject } from '@angular/core/testing';

import { CompanyPortfolioService } from './company-portfolio.service';

describe('CompanyPortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyPortfolioService]
    });
  });

  it('should be created', inject([CompanyPortfolioService], (service: CompanyPortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
