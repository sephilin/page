import { Injectable } from '@angular/core';
import { EventService } from './event-service';
import { PageTypes } from 'src/app/common/constants/pageTypes';
import { Observable } from 'rxjs';
import { PageNames } from 'src/app/common/constants/pageNames';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  public currentPage: PageTypes = PageNames.about as PageTypes; 

  constructor(private eventService: EventService) {}  

  public NavigateTo(page: PageTypes) {
    if (this.currentPage != page) {
      this.currentPage = page;
      switch (page) {
        case PageNames.about:        
          this.eventService.navigateClick();
          break;
        case PageNames.portfolio:         
          this.eventService.navigateClick();
          break;
        case PageNames.contact:        
          this.eventService.navigateClick();
          break;
      }
    }
  }

  public registerMenuEventClick(): Observable<any> {
    return this.eventService.navigateClickObserver;
  }
}
