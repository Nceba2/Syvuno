import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private router = inject(Router);
  private modalService = inject(NgbModal);

  login() {
    // Navigate
    this.router.navigate(['/dashboard']);
    this.modalService.dismissAll();
  }
}
