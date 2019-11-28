import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from '../dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { PageHeaderComponent } from 'src/app/page-header/page-header.component';
import { PageFooterComponent } from 'src/app/page-footer/page-footer.component';
import { PageMainContentComponent } from 'src/app/page-main-content/page-main-content.component';
import { PagePortfolioComponent } from 'src/app/page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from 'src/app/page-contact-me/page-contact-me.component';
import { PageAboutComponent } from 'src/app/page-about/page-about.component';
import { PageTitleComponent } from 'src/app/common/component/page-title/page-title.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRouting,
    HttpClientModule
    ],
  providers: [],
  declarations: [DashboardComponent,
    DashboardComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageMainContentComponent,
    PagePortfolioComponent,
    PageContactMeComponent,
    PageAboutComponent,
    PageTitleComponent],
  entryComponents: [
    PageAboutComponent,
    PagePortfolioComponent,
    PageContactMeComponent
  ],
  bootstrap: [DashboardComponent]
})
export class AppRoutingModule {

}
