import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '../../core/services/navigate-service';
import { PageTypes } from '../../common/constants/pageTypes';
import { LanguageService } from '../../core/services/language-service';
import { GenericClassComponent } from '../../core/toolbox/generic-class-component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html'
})
export class PageHeaderComponent extends GenericClassComponent implements OnInit {
  public model: any;

  constructor(private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private navigate: NavigateService,
    private languageService: LanguageService,
    elem: ElementRef) {
    super(elem);

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
    this.navigate.NavigateTo(route);
  }
}
