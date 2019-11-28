import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { NavigateService } from '../core/services/navigate-service';
import { GenericClassComponent } from '../core/toolbox/generic-class-component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent extends GenericClassComponent implements OnInit {
 
  constructor(private cd: ChangeDetectorRef,elem: ElementRef) { 
      super(elem);
    }

  ngOnInit() {       
  }

  ngDestroy() {
    this.RemovePageSubscriptions();
  }
}
