import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { LanguageService } from '../core/services/language-service';
import { Languages } from '../common/constants/languages';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef,
    private languageService: LanguageService   
    ) {    
  }

  ngOnInit() { }

  ngDestroy() { }

  public changeLanguage(lang: string) {
    console.log(lang);
    this.languageService.setLaguage(lang as Languages);    
  }
}
