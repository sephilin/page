import { ReCaptchaV3Service } from 'ng-recaptcha';
import { CaptchaService } from 'src/app/core/services/captcha-service';
import { ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language-service';
import { NavigateService } from 'src/app/core/services/navigate-service';

export const MapPageServices = {
    ["app-page-title"]: [
        ChangeDetectorRef,
        LanguageService,
        NavigateService
    ],
    ["app-page-about"]: [
        ChangeDetectorRef,
        LanguageService,
        NavigateService       
    ],
    ["app-page-contact-me"]: [
        ChangeDetectorRef,
        ReCaptchaV3Service,
        CaptchaService        
    ],
    ["app-page-portfolio"]: [
        ReCaptchaV3Service,
        CaptchaService
    ],    
}