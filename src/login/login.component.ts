declare var google: any;
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    this.googleLogin();
  }

  private TokeDecode(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

  googleLogin() {
    if (google!=undefined && google && google?.accounts) {
      google.accounts.id.initialize({
        client_id:
          '70089408606-9tdkuu4bcrmmt7551m25vlu7snv6u0vm.apps.googleusercontent.com',
        callback: (res: any) => this.handleLogin(res),
      });

      google.accounts.id.renderButton(
        document.getElementById('google-button'),
        {
          theme: 'filler_blue',
          size: 'large',
          shape: 'circular',
          width: 350,
        }
      );
    }
    else{
      setTimeout(() => {
        this.googleLogin();
      }, 5);
    }
  }

  handleLogin(res: any) {
    if (res) {
      //decode the token first
      const payLoad = this.TokeDecode(res.credential);
      //store in session
      sessionStorage.setItem('CurrentUser', JSON.stringify(payLoad));
      localStorage.setItem("Reload","true");
      //navigate to
      this.router.navigate(['/Home']);
    }
  }
}
