import { Subscription } from 'rxjs';
import { Languages } from 'src/app/common/constants/languages';
import { ElementRef } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

export abstract class GenericClassComponent {

    public readonly dataSourceName: string = "dataSourceJson";
    public language: Languages = "en";
    public tagNameSelector: string;

    private pageSubscriptions: Array<Subscription>;

    constructor(elem: ElementRef) {
        this.pageSubscriptions = new Array<Subscription>();
        this.tagNameSelector = elem.nativeElement.tagName.toLowerCase();
    }

    public AddPageSubscriptions(subs: (sub) => any) {
        subs(this.pageSubscriptions);
    }

    public RemovePageSubscriptions() {
        this.pageSubscriptions.forEach((subs) => { subs.unsubscribe() });
    }

    public getRessource(snapshot: ActivatedRouteSnapshot): any{
        return snapshot.data[this.dataSourceName][this.language];
    }
}