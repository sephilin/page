import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { EventService } from '../core/services/event-services';
import { PageAboutComponent } from '../page-about/page-about.component';
import { PagePortfolioComponent } from '../page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from '../page-contact-me/page-contact-me.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  loaderComponent: any = PageAboutComponent;
  pageSubscriptions: Array<Subscription>;

  constructor(private cd: ChangeDetectorRef, private eventService: EventService) { }

  ngOnInit() {
    this.registerSubscribes();
  }

  ngDestroy() {
    this.UnsubscribePageSubscriptions();
  }

  private registerSubscribes() {
    this.pageSubscriptions = new Array<Subscription>();

    this.pageSubscriptions.push(this.eventService.pageAboutClickObserver
      .subscribe(() => this.injectComponentAndThrowDetection(PageAboutComponent)));

    this.pageSubscriptions.push(this.eventService.pagePortfolioClickObserver
      .subscribe(() => this.injectComponentAndThrowDetection(PagePortfolioComponent)));

    this.pageSubscriptions.push(this.eventService.pageContactClickObserver
      .subscribe(() => this.injectComponentAndThrowDetection(PageContactMeComponent)));
  }

  private UnsubscribePageSubscriptions() {
    this.pageSubscriptions.forEach((subs) => { subs.unsubscribe() });
  }

  private injectComponentAndThrowDetection(component: any) {
    this.loaderComponent = component;
    this.cd.markForCheck();
  }
}
