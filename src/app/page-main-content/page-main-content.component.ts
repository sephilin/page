import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory } from '@angular/core';

const PageTitle: {
  [key: string]: {
    pageTitle: string,
    pageSubTitle: string
  }
} =
{
  ["PageAboutComponent"]: {
    pageTitle: "About",
    pageSubTitle: "Learn more about me"
  },
  ["PagePortfolioComponent"]: {
    pageTitle: "Portfolio",
    pageSubTitle: "Browse some of my work"
  },
  ["PageContactMeComponent"]: {
    pageTitle: "Contact",
    pageSubTitle: "Send a message to get in touch"
  }
};


@Component({
  selector: 'app-page-main-content',
  templateUrl: './page-main-content.component.html'
})
export class PageMainContentComponent implements OnInit {
  @ViewChild('componentPlace', { read: ViewContainerRef, static: true }) entry: ViewContainerRef;
  @Input('load-component') component: any;

  componentRef: any;
  titles: {
    pageTitle: string,
    pageSubTitle: string
  };

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.titles = PageTitle["PageAboutComponent"];
  }

  ngOnChanges() {
    this.ComponentFactory();
    this.SetTitleByComponentRef();
  }

  destroyComponent() {
    this.componentRef.destroy();
  }

  private ComponentFactory() {
    if (this.entry) {
      this.entry.clear();

      let factory: ComponentFactory<unknown> = null;
      factory = this.resolver.resolveComponentFactory(this.component);
      this.componentRef = this.entry.createComponent(factory);
    }
  }

  private SetTitleByComponentRef() {
    let componentName = Object.getPrototypeOf(this.componentRef.instance).constructor.name;
    this.titles = PageTitle[componentName];  
  }
}
