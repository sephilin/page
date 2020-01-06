import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';

// Main component
import { DashboardComponent } from '../dashboard.component';
// Main routing
import { DashboardRouting } from './dashboard.routing';

// Shared components
import { PageMainContentComponent } from 'src/app/main-pages/page-main-content/page-main-content.component';
import { PageHeaderComponent } from 'src/app/main-pages/page-header/page-header.component';
import { PageFooterComponent } from 'src/app/main-pages/page-footer/page-footer.component';
import { PageTitleComponent } from 'src/app/common/component/page-title/page-title.component';

// Components page
import { PageHomeComponent } from 'src/app/component-pages/page-home/page-home.component';
import { PagePortfolioComponent } from 'src/app/component-pages/page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from 'src/app/component-pages/page-contact-me/page-contact-me.component';
import { PageAboutComponent } from 'src/app/component-pages/page-about/page-about.component';
import { SectionPresentationComponent } from 'src/app/component-pages/page-home/common/section-presentation/section-presentation.component';
import { SectionPortfolioComponent } from 'src/app/component-pages/page-home/common/section-portfolio/section-portfolio.component';


@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    DashboardRouting,
    ReactiveFormsModule,
    RecaptchaV3Module
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6Lc1rMUUAAAAAOvQPJ7Jt2tzX96yYK5-zGB1KrF9' }
  ],
  declarations: [DashboardComponent,
    PageHomeComponent,    
    PageHeaderComponent,
    PageFooterComponent,
    PageMainContentComponent,
    PagePortfolioComponent,
    PageContactMeComponent,
    PageAboutComponent,
    PageTitleComponent,
    SectionPresentationComponent,
    SectionPortfolioComponent
  ],
  entryComponents: [
    PageHomeComponent,
    PageAboutComponent,
    PagePortfolioComponent,
    PageContactMeComponent
  ],
  bootstrap: [DashboardComponent]
})
export class AppRoutingModule {

}
