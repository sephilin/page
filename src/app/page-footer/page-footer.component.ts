import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigateService } from '../core/services/navigate-service';
import { GenericClassComponent } from '../core/toolbox/generic-class-component';
import { PageNames } from '../common/constants/pageNames';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html'
})
export class PageFooterComponent extends GenericClassComponent  implements OnInit {

  constructor(private route: ActivatedRoute, 
    private navigateService: NavigateService,
    elem: ElementRef) {
    super(elem);
   }

  ngOnInit() {
   
    let info = this.getRessource(this.route.snapshot)[PageNames.about];

    console.log(info.paragraphs[1]);

  }

  public get textFooter() : string {
      return this.getRessource(this.route.snapshot)[PageNames.about].paragraphs[1];
  }
}
