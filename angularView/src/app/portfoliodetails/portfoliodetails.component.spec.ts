import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliodetailsComponent } from './portfoliodetails.component';

describe('PortfoliodetailsComponent', () => {
  let component: PortfoliodetailsComponent;
  let fixture: ComponentFixture<PortfoliodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfoliodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfoliodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
