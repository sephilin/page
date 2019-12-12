import { Component, OnInit, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, ComponentFactoryResolver, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { GenericPageComponent } from '../common/generic-page-component';
import { contact } from 'src/app/common/constants/globalConstants';

class PageContactModel {
  name: FormControl
  email: FormControl
  message: FormControl
  paragraphs: Array<string>
  messageContact: string
  buttonContact: string
  leftBlock: string
  status: string
}

const statusSend = 'Send';
const statusSending = 'Sending';
const statusSent = 'Sent';

@Component({
  selector: 'app-page-contact-me',
  templateUrl: './page-contact-me.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageContactMeComponent extends GenericPageComponent implements OnInit {
  public model: PageContactModel;

  constructor(private injector: Injector,      
    private route: ActivatedRoute,  
    elem: ElementRef) {
    super(injector, elem);
  }

  ngOnInit() {
    this.getComponentRessource();
  }

  ngOnDestroy() {
    this.RemovePageSubscriptions();
  }

  private getComponentRessource() {
    this.model = this.getRessource(this.route.snapshot)[contact] as PageContactModel;
    this.initialize();  
  }

  private createFormGroup() {
    this.model.name = new FormControl();
    this.model.email = new FormControl();
    this.model.message = new FormControl();
  }

  private initialize() {
    this.model.status = statusSend;
    this.createFormGroup();
  }

  public get checkStatusSend(): boolean {
    return this.model.status === statusSend;
  }

  public get checkStatusSending(): boolean {
    return this.model.status === statusSending;
  }

  public get checkStatusSent(): boolean {
    return this.model.status === statusSent;
  }

  public sendData(): void {
    if (this.model.status === statusSend) {
      this.model.status = statusSending;

      console.log(this.model);
      
      // const subscribeCaptcha =  this.getService("ReCaptchaV3Service").execute('sendData')
      // .subscribe((token) => this.resolved(token));

      // this.AddPageSubscriptions((subs : Array<Subscription>) => {
      //   subs.push(subscribeCaptcha);
      // });

      setTimeout(() => {
        console.log(statusSent);
        this.model.status = statusSent;     
        this.getService("ChangeDetectorRef").markForCheck();    
      }, 5000);

    }
  }

  public resolved(captchaResponse: string) {

    const reponseCaptcha = this.getService("CaptchaService").verifySite(captchaResponse).subscribe((data) => {
      console.log(data);
    });

    this.AddPageSubscriptions((subs: Array<Subscription>) => {
      subs.push(reponseCaptcha);
    });

    this.model.status = statusSent;
  }
}



