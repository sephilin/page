import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html'
})
export class PageAboutComponent implements OnInit { 
  public datasource: any;

  constructor(private route: ActivatedRoute) {    
  }

  ngOnInit() {
    this.datasource = this.route.snapshot.data['dataSourceJson']["en"].about;  
  }
}
