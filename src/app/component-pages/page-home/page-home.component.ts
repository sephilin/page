import { Component, OnInit, Injector, ElementRef } from '@angular/core';
import { GenericPageComponent } from '../common/generic-page-component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html'
})
export class PageHomeComponent extends GenericPageComponent implements OnInit {

  constructor(private injector: Injector,
    private route: ActivatedRoute,
    elem: ElementRef,
  ) {
    super(injector, elem);
  }

  ngOnInit() {
  }

}
