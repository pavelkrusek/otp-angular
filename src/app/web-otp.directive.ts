import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
interface CredentialRequestOptions {
  otp: any;
  signal: any;
}

@Directive({
  selector: '[appWebOtp]',
})
export class WebOtpDirective implements OnInit, OnDestroy {
  private ac = new AbortController();
  constructor(private el: ElementRef) { };

  ngOnInit(): void {
    const options: CredentialRequestOptions = {
      otp: { transport: ['sms'] },
      signal: this.ac.signal
    }
    navigator.credentials.get(options).then((otp: any) => {
      this.el.nativeElement.value = otp.code;
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnDestroy(): void {
    this.ac.abort();
  }
}
