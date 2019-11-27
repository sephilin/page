import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    
    public pageAboutClickObserver: Observable<any>;
    public pagePortfolioClickObserver: Observable<any>;
    public pageContactClickObserver: Observable<any>;   

    constructor() { 
       this.pageAboutClickObserver = new EventEmitter();
       this.pagePortfolioClickObserver = new EventEmitter();
       this.pageContactClickObserver = new EventEmitter();        
    }

    public PageAboutClick()
    {        
        (this.pageAboutClickObserver as EventEmitter<any>).emit();
    }

    public PagePortfolioClick()
    {
        (this.pagePortfolioClickObserver as EventEmitter<any>).emit();
    }

    public PageContactClick()
    {
        (this.pageContactClickObserver as EventEmitter<any>).emit();
    }
}
