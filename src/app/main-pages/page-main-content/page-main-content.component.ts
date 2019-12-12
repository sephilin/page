import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ElementRef, Injector } from '@angular/core';
import { Subscription } from 'rxjs';
import { GenericPageMainComponent } from '../common/generic-page-main-component';
import { ComponentTypeMap } from 'src/app/common/constants/componentTypeMap';

@Component({
  selector: 'app-page-main-content',
  templateUrl: './page-main-content.component.html'
})
export class PageMainContentComponent extends GenericPageMainComponent implements OnInit {
  @ViewChild('componentPlace', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  componentRef: any;

  constructor(private injector: Injector,
    elem: ElementRef) {
    super(injector, elem);
  }

  ngOnInit() {
    this.subscribeAll();
    this.ComponentFactory();
  }

  ngDestroy() {
    this.componentRef.destroy();
    this.RemovePageSubscriptions();
  }

  private subscribeAll() {
    this.AddPageSubscriptions((subs: Array<Subscription>) => {

      // Subscribe event click menu
      subs.push(this.navigateService.registerMenuEventClick().subscribe(() => {
        this.ComponentFactory();
      }));

    });
  }

  private ComponentFactory() {
    if (this.entry) {
      this.entry.clear();

      let factory: ComponentFactory<unknown> = null;
      factory = this.resolver.resolveComponentFactory(ComponentTypeMap[this.navigateService.currentPage]);
      this.componentRef = this.entry.createComponent(factory);     
    }
  }
}
