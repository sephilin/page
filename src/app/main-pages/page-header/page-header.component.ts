import { Component, OnInit, ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTypes } from '../../common/constants/pageTypes';

import { Subscription } from 'rxjs';
import { GenericPageMainComponent } from '../common/generic-page-main-component';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent extends GenericPageMainComponent implements OnInit {
  public model: any;

  constructor(private injector: Injector,  
    private route: ActivatedRoute,   
    elem: ElementRef) {
    super(injector, elem);

  }

  ngOnInit() {
    this.subscribeAll();
    this.getComponentRessource();
  }

  ngDestroy() {
    this.RemovePageSubscriptions();
  }

  private subscribeAll() {
    this.AddPageSubscriptions((subs: Array<Subscription>) => {

      // Subscription of languages
      subs.push(this.languageService.getLanguage().subscribe((lang) => {
        this.SetRessourceLanguage(lang);
        this.getComponentRessource();
        this.cd.markForCheck();
      }));

    });
  }

  private getComponentRessource() {
    this.model = this.getRessource(this.route.snapshot)[this.tagNameSelector];
  }

  public Navigate(route: PageTypes): void {
    this.navigateService.NavigateTo(route);
  }
}
