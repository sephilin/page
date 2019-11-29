import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericClassComponent } from '../../core/toolbox/generic-class-component';
import { PageNames } from '../../common/constants/pageNames';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language-service';

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
export class PageAboutComponent extends GenericClassComponent implements OnInit {
  public model: PageAboutModel;

  constructor(private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    elem: ElementRef) {
    super(elem);
  }

  ngOnInit() {
    this.getComponentRessource();
    

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
    this.model = this.getRessource(this.route.snapshot)[PageNames.about] as PageAboutModel;
    this.createLeftBlock();
  }

  private createLeftBlock() {

    let block: string = "";

    this.model.paragraphs.forEach(paragraph => {
      block += paragraph;
    });

    this.model.leftBlock = block;

    console.log(this.model);
  }
}
