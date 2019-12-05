import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    
    public navigateClickObserver: Observable<any>;         

    constructor() { 
       this.navigateClickObserver = new EventEmitter(); 
    }
    
    public navigateClick()
    {        
        (this.navigateClickObserver as EventEmitter<any>).emit();
    }
}
