import { Injectable } from '@angular/core';
import { EventService } from './event-service';
import { PageTypes } from 'src/app/common/constants/pageTypes';
import { Observable } from 'rxjs';
import { home } from 'src/app/common/constants/globalConstants';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  public currentPage: PageTypes = home as PageTypes; 

  constructor(private eventService: EventService) {}  

  public NavigateTo(page: PageTypes) {
    if (this.currentPage != page) {
      this.currentPage = page;
      this.eventService.navigateClick();     
    }
  }

  public registerMenuEventClick(): Observable<any> {
    return this.eventService.navigateClickObserver;
  }
}
