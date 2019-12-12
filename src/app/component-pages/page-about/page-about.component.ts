import { Component, OnInit, ElementRef, ChangeDetectionStrategy, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { GenericPageComponent } from '../common/generic-page-component';
import { contact, about } from 'src/app/common/constants/globalConstants';


class PageAboutModel {
  paragraphs: Array<string>
  messageContact: string
  buttonContact: string
  leftBlock: string
}

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageAboutComponent extends GenericPageComponent implements OnInit {
  public model: PageAboutModel;  

  constructor(private injector: Injector,
    private route: ActivatedRoute,
    elem: ElementRef,
  ) {
    super(injector, elem);
  }

  ngOnInit() {
    this.getComponentRessource();

    this.AddPageSubscriptions((subs: Array<Subscription>) => {
      // Subscription of languages
      subs.push(this.getService("LanguageService").getLanguage().subscribe((lang) => {
        this.SetRessourceLanguage(lang);
        this.getComponentRessource();
        let serviceCD = this.getService("ChangeDetectorRef");       
        serviceCD.markForCheck();    
      }));

    });
  }

  public NatigateToPageContact()
  {
    this.getService("NavigateService").NavigateTo(contact);
  }

  private getComponentRessource() {
    this.model = this.getRessource(this.route.snapshot)[about] as PageAboutModel;
    this.createLeftBlock();
  }

  private createLeftBlock() {

    let block: string = "";

    this.model.paragraphs.forEach(paragraph => {
      block += paragraph;
    });

    this.model.leftBlock = block;
  } 
}
