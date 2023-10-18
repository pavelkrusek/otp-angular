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
  // private timer: NodeJS.Timeout | null = null;
  private timer: number | null = null;
  constructor(private el: ElementRef) { };

  @Input('timeout') timeout?: number;

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
    if (this.timeout) {
      this.timer = setTimeout(() => {
        this.ac.abort();
      }, this.timeout)
    }
  }
  ngOnDestroy(): void {
    this.ac.abort();
    if (this.timer !== null) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}


// import { Directive, ElementRef, NgZone } from '@angular/core';
//
// @Directive({
//   selector: '[appWebOtp]'
// })
// export class WebOtpDirective {
//
//   constructor(private el: ElementRef, private ngZone: NgZone) {
//     this.listenForOtp();
//   }
//
//   listenForOtp() {
//     if ('OTPCredential' in window) {
//       window.addEventListener('DOMContentLoaded', (e) => {
//         const input = this.el.nativeElement;
//         const otp = new URLSearchParams(window.location.search).get('otp');
//         if (otp) {
//           this.ngZone.run(() => {
//             input.value = otp;
//           });
//         }
//       });
//
//       navigator.credentials.get({
//         otp: { transport:['sms'] }
//       }).then(otp => {
//         this.ngZone.run(() => {
//           this.el.nativeElement.value = otp.code;
//         });
//       }).catch(err => {
//         console.error(err);
//       });
//     }
//   }
// }
//
