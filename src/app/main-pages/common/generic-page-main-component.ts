import { Component, ElementRef, ChangeDetectorRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { Subscription } from 'rxjs';
import { Languages } from 'src/app/common/constants/languages';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language-service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { CaptchaService } from 'src/app/core/services/captcha-service';
import { NavigateService } from 'src/app/core/services/navigate-service';


@Component({
    selector: 'No Selector'
})
export class GenericPageMainComponent {
    private injectorService: Injector
    public languageService: LanguageService;
    public cd: ChangeDetectorRef;
    public recaptchaV3Service: ReCaptchaV3Service;
    public captchaService: CaptchaService;
    public navigateService: NavigateService;
    public resolver: ComponentFactoryResolver;
    

    public tagNameSelector: string;

    private language: Languages = "en";
    private readonly dataSourceName: string = "dataSourceJson";
    private pageSubscriptions: Array<Subscription>;

    constructor(_injector: Injector, elem: ElementRef) {
        this.injectorService = _injector;

        this.injectServices();
        this.pageSubscriptions = new Array<Subscription>();
        this.tagNameSelector = elem.nativeElement.tagName.toLowerCase();
    }

    private injectServices() {
        this.languageService = this.injectorService.get(LanguageService);
        this.cd = this.injectorService.get(ChangeDetectorRef);
        this.recaptchaV3Service = this.injectorService.get(ReCaptchaV3Service);
        this.captchaService = this.injectorService.get(CaptchaService);
        this.navigateService = this.injectorService.get(NavigateService);
        this.resolver = this.injectorService.get(ComponentFactoryResolver);
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