import { Component, OnInit, ElementRef, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTypes } from 'src/app/common/constants/pageTypes';
import { GenericPageMainComponent } from '../common/generic-page-main-component';
import { about } from 'src/app/common/constants/globalConstants';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html'
})
export class PageFooterComponent extends GenericPageMainComponent  implements OnInit {

  constructor(private injector: Injector,
    private route: ActivatedRoute,  
    elem: ElementRef) {
    super(injector, elem);
   }

  ngOnInit() {       
  }

  public get textFooter() : string {
      return this.getRessource(this.route.snapshot)[about].paragraphs[1];
  }

  public Navigate(route: PageTypes): void {
    this.navigateService.NavigateTo(route);
  }
}
