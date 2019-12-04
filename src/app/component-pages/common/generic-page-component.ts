import { Component, ElementRef, ChangeDetectorRef, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { Languages } from 'src/app/common/constants/languages';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MapPageServices } from './mapPageServices';

@Component({
    selector: 'No Selector'
})
export class GenericPageComponent {
    private injectorService: Injector

    private servicesAvailable: Array<{
        nameService: string,
        serviceInstance: any
    }> = [];

    public getService(nameService: string): any {
        return this.servicesAvailable.find(s => s.nameService === nameService).serviceInstance;     
    }

    public tagNameSelector: string;

    private language: Languages = "en";
    private readonly dataSourceName: string = "dataSourceJson";
    private pageSubscriptions: Array<Subscription>;

    constructor(_injector: Injector, elem: ElementRef) {
        this.injectorService = _injector;
        this.pageSubscriptions = new Array<Subscription>();
        this.tagNameSelector = elem.nativeElement.tagName.toLowerCase();

        this.injectServices();        
    }

    private injectServices() {
        let services = MapPageServices[this.tagNameSelector] as Array<any>;
       
        services.forEach(service => {
           this.servicesAvailable.push(
               {
                   nameService: Object.prototype.constructor(service).name,
                   serviceInstance: this.injectorService.get(service)
               });
        });        
    }

    public AddPageSubscriptions(subs: (sub) => any) {
        subs(this.pageSubscriptions);
    }

    public RemovePageSubscriptions() {
        this.pageSubscriptions.forEach((subs) => { subs.unsubscribe() });
    }

    public getRessource(snapshot: ActivatedRouteSnapshot): any {
        return snapshot.data[this.dataSourceName][this.language];
    }

    public SetRessourceLanguage(lang: string) {
        this.language = lang as Languages;
    }
}