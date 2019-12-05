import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language-service';
import { NavigateService } from 'src/app/core/services/navigate-service';
import { Subscription } from 'rxjs';
import { GenericPageComponent } from 'src/app/component-pages/common/generic-page-component';


@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent extends GenericPageComponent implements OnInit {

  model: any;

  constructor(private injector: Injector,
    private route: ActivatedRoute,  
    elem: ElementRef) {
    super(injector, elem);
   }

  ngOnInit() {
    this.getComponentRessource();

    this.AddPageSubscriptions((subs : Array<Subscription>) => {

      // Subscription of languages
      subs.push(this.getService("LanguageService").getLanguage().subscribe((lang) => {
        this.SetRessourceLanguage(lang);
        this.getComponentRessource();
        this.getService("ChangeDetectorRef").markForCheck();
      }));  
      
       // Subscription of navigation
       subs.push(this.getService("NavigateService").registerMenuEventClick().subscribe(() => {
        this.getComponentRessource();
        this.getService("ChangeDetectorRef").markForCheck();
      })); 

    });  
  }

  private getComponentRessource() {    
    this.model = this.getRessource(this.route.snapshot)[this.getService("NavigateService").currentPage][this.tagNameSelector];
  }
}
