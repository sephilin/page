import { PageAboutComponent } from 'src/app/component-pages/page-about/page-about.component';
import { PagePortfolioComponent } from 'src/app/component-pages/page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from 'src/app/component-pages/page-contact-me/page-contact-me.component';

export const ComponentTypeMap = {
    ["about"]: PageAboutComponent,
    ["portfolio"]: PagePortfolioComponent,
    ["contact"]: PageContactMeComponent,    
}