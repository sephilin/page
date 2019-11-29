import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language-service';
import { ActivatedRoute } from '@angular/router';
import { GenericClassComponent } from 'src/app/core/toolbox/generic-class-component';
import { PageNames } from 'src/app/common/constants/pageNames';

class PageContactModel {
  paragraphs: Array<string>
  messageContact: string
  buttonContact: string
  leftBlock: string
}

@Component({
  selector: 'app-page-contact-me',
  templateUrl: './page-contact-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContactMeComponent extends GenericClassComponent implements OnInit {
  public model: PageContactModel;

  constructor(private cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    elem: ElementRef) {
    super(elem);
  }

  ngOnInit() {
    this.getComponentRessource();
  }

  private getComponentRessource() {
    this.model = this.getRessource(this.route.snapshot)[PageNames.contact] as PageContactModel;

  }

  public sendMessage()
  {

  }
}
