import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from '../core/services/event-services';

class PageHeaderModel {
  menu1: string
  menu2: string
  menu3: string
}

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent implements OnInit {
  public datasource: PageHeaderModel;

  constructor(private eventService: EventService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.datasource = this.route.snapshot.data['dataSourceJson'].en.header as PageHeaderModel;   
  }

  public Navigate(route: string): void {  
    switch (route) {
      case 'about':
        this.eventService.PageAboutClick();
        break;
      case 'portfolio':
        this.eventService.PagePortfolioClick();
        break;
      case 'contact':
        this.eventService.PageContactClick();
        break;
    }
  }

}
