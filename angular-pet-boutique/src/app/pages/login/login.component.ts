import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements AfterViewInit {
  @ViewChild('signin') btnSignin!: ElementRef<HTMLButtonElement>;
  @ViewChild('signup') btnSignup!: ElementRef<HTMLButtonElement>;
  @ViewChild('body') body!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    if (this.btnSignin && this.btnSignup && this.body) {
      this.btnSignin.nativeElement.addEventListener('click', () => {
        this.body.nativeElement.className = 'sign-in-js';
      });

      this.btnSignup.nativeElement.addEventListener('click', () => {
        this.body.nativeElement.className = 'sign-up-js';
      });
    }
  }
}
