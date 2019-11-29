import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory, ElementRef } from '@angular/core';
import { NavigateService } from '../../core/services/navigate-service';
import { GenericClassComponent } from '../../core/toolbox/generic-class-component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-main-content',
  templateUrl: './page-main-content.component.html'
})
export class PageMainContentComponent extends GenericClassComponent implements OnInit {
  @ViewChild('componentPlace', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;

  componentRef: any;

  constructor(private navigateService: NavigateService,
    private resolver: ComponentFactoryResolver,
    elem: ElementRef) {
    super(elem);
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
      factory = this.resolver.resolveComponentFactory(this.navigateService.currentComponent);
      this.componentRef = this.entry.createComponent(factory);
    }
  }
}
