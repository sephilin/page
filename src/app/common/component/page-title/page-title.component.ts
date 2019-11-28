import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { GenericClassComponent } from 'src/app/core/toolbox/generic-class-component';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/core/services/language-service';
import { NavigateService } from 'src/app/core/services/navigate-service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageTitleComponent extends GenericClassComponent implements OnInit {

  model: any;

  constructor(private cd: ChangeDetectorRef,
    private route: ActivatedRoute, 
    private languageService: LanguageService,
    private navigateService: NavigateService,
    elem: ElementRef) {
    super(elem);
   }

  ngOnInit() {
    this.model = this.getComponentRessource();

    this.AddPageSubscriptions((subs : Array<Subscription>) => {

      // Subscription of languages
      subs.push(this.languageService.getLanguage().subscribe(() => {
        this.model = this.getComponentRessource();
        this.cd.markForCheck();
      }));  
      
       // Subscription of navigation
       subs.push(this.navigateService.registerMenuEventClick().subscribe(() => {
        this.model = this.getComponentRessource();
        this.cd.markForCheck();
      })); 

    });  
  }

  private getComponentRessource(): any {    
    return this.getRessource(this.route.snapshot)[this.navigateService.currentPage][this.tagNameSelector];
  }
}
