import { Injectable } from '@angular/core';
import { EventService } from './event-service';
import { PageTypes } from 'src/app/common/constants/pageTypes';
import { Observable } from 'rxjs';
import { ComponentTypeMap } from 'src/app/common/constants/componentTypeMap';
import { PageNames } from 'src/app/common/constants/pageNames';


@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  public currentPage: PageTypes = PageNames.about as PageTypes;
  public currentComponent: any = ComponentTypeMap[this.currentPage];

  constructor(private eventService: EventService) {
  }

  public NavigateToPageContact() {
    this.NavigateTo("contact");
  }

  public NavigateTo(page: PageTypes) {
    if (this.currentPage != page) {
      this.currentPage = page;
      switch (page) {
        case PageNames.about:
          this.currentComponent = ComponentTypeMap[page];
          this.eventService.navigateClick();
          break;
        case PageNames.portfolio:
          this.currentComponent = ComponentTypeMap[page];
          this.eventService.navigateClick();
          break;
        case PageNames.contact:
          this.currentComponent = ComponentTypeMap[page];
          this.eventService.navigateClick();
          break;
      }
    }
  }

  public registerMenuEventClick(): Observable<any> {
    return this.eventService.navigateClickObserver;
  }
}
