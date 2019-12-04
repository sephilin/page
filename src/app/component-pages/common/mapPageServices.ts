import { ReCaptchaV3Service } from 'ng-recaptcha';
import { CaptchaService } from 'src/app/core/services/captcha-service';
import { ChangeDetectorRef } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language-service';
import { EventService } from 'src/app/core/services/event-service';

export const MapPageServices = {
    ["app-page-about"]: [
        ChangeDetectorRef,
        LanguageService,
        EventService       
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