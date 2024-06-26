import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements AfterViewInit {
  public isPopupVisible: boolean = false;
  public popupText: string = '';

  ngAfterViewInit(): void {
    this.setContactMargin();
  }

  public setContactMargin(): void {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const content = document.querySelector('.contactContent');
    const screenHeight = window.innerHeight;

    const margin =
      ((screenHeight -
        header!.clientHeight -
        footer!.clientHeight -
        content!.clientHeight) /
        2) *
      0.96;

    content!.setAttribute('style', `margin: ${margin}px 0 ${margin}px 0`);
  }

  public downloadResume(): void {
    const resumeUrl = 'assets/princeresume.pdf';
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'princeresume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  public openPopup(): void {
    this.popupText = 'My email is: Chaudhary.prince97@gmail.com';
    this.isPopupVisible = true;
  }

  public openPopup2(): void {
    this.popupText = 'My phone number is: +91-9958214458';
    this.isPopupVisible = true;
  }

  public closePopup(): void {
    this.isPopupVisible = false;
    this.popupText = '';
  }
}
