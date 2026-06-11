import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Register } from "../auth/register/register";
import { LoginComponent } from "../auth/login/login";
import { CommonModule } from '@angular/common'; 
import { OnInit, OnDestroy, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  //imports: [Register, LoginComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  page:string ="";

  private modalService = inject(NgbModal);

  open(content: any,_page:string) {
    this.page = _page;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

   slides = [
    { image: 'https://picsum.photos/id/20/1920/700', title: 'Lighting the Future', subtitle: 'Secure healthcare infrastructure' },
    { image: 'https://picsum.photos/id/96/1920/700', title: 'Deep Blue Compliance', subtitle: 'Enterprise-ready APIs' },
    { image: 'https://picsum.photos/id/48/1920/700', title: 'Zero-Trust Innovation', subtitle: 'Protecting patient data' }
  ];
  
  currentIndex = 0;
  private intervalId: any;
  private readonly AUTO_INTERVAL = 5000;
 
  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

}
