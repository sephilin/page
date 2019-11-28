import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Languages } from 'src/app/common/constants/languages';


@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private currentLanguage: Languages = "en";
    private currentLanguageObserver: Observable<string>;

    constructor() { 
        this.currentLanguageObserver = new EventEmitter<string>();
    }   

    public setLaguage(language: Languages)
    {
        this.currentLanguage = language;
        (this.currentLanguageObserver as EventEmitter<any>).emit(this.currentLanguage);
    }

    public getLanguage() : Observable<string>
    {
        return this.currentLanguageObserver;
    }
}
