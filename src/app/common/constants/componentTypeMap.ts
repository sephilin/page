import { PageAboutComponent } from 'src/app/page-about/page-about.component';
import { PagePortfolioComponent } from 'src/app/page-portfolio/page-portfolio.component';
import { PageContactMeComponent } from 'src/app/page-contact-me/page-contact-me.component';

export const ComponentTypeMap = {
    ["about"]: PageAboutComponent,
    ["portfolio"]: PagePortfolioComponent,
    ["contact"]: PageContactMeComponent,    
}