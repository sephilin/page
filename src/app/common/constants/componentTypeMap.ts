import { about, contact, portfolio, home } from './globalConstants';
import { PageAboutComponent } from 'src/app/component-pages/page-about/page-about.component';
import { PagePortfolioComponent } from 'src/app/component-pages/page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from 'src/app/component-pages/page-contact-me/page-contact-me.component';
import { PageHomeComponent } from 'src/app/component-pages/page-home/page-home.component';

export const ComponentTypeMap = {
    [home]: PageHomeComponent,
    [about]: PageAboutComponent,
    [contact]: PageContactMeComponent,
    [portfolio]: PagePortfolioComponent,    
}