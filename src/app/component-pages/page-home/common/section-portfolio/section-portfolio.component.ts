import { Component, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate-service';
import { PageTypes } from 'src/app/common/constants/pageTypes';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html'
})
export class SectionPortfolioComponent implements OnInit {

  constructor(private navigateService: NavigateService) { }

  ngOnInit() {
  }

  public Navigate(route: PageTypes): void {
    this.navigateService.NavigateTo(route);
  }

}
