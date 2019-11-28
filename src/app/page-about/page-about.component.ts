import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenericClassComponent } from '../core/toolbox/generic-class-component';
import { PageNames } from '../common/constants/pageNames';

class PageAboutModel {
  paragraphs: Array<string>
  messageContact: string
  buttonContact: string
  leftBlock: string
}

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html'
})
export class PageAboutComponent extends GenericClassComponent implements OnInit {
  public model: PageAboutModel;

  constructor(private route: ActivatedRoute,
    elem: ElementRef) {
    super(elem);
  }

  ngOnInit() {
    this.createLeftBlock();
  }

  private createLeftBlock() {
    this.model = this.getRessource(this.route.snapshot)[PageNames.about] as PageAboutModel;

    let block: string = "";

    this.model.paragraphs.forEach(paragraph => {
      block += paragraph;
    });
    
    this.model.leftBlock = block;
  }
}
