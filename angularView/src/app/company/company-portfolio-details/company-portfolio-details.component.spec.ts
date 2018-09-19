import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyPortfolioDetailsComponent } from './company-portfolio-details.component';

describe('CompanyPortfolioDetailsComponent', () => {
  let component: CompanyPortfolioDetailsComponent;
  let fixture: ComponentFixture<CompanyPortfolioDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyPortfolioDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyPortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
