import { Component, NgModule } from '@angular/core';
import { TokenStorageService } from './token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles:string[]=[];
  isLoggedIn=false;
  showAdmin=false;
  showModerator=false;
  username?:string;
  title = 'user-login';

  constructor(private tokenStorageServices: TokenStorageService){}

  ngOnInit():void {
    this.isLoggedIn=!!this.tokenStorageServices.getToken();
    if(this.isLoggedIn) {
      const user=this.tokenStorageServices.getUser();
      this.roles=user.roles;

      this.showAdmin=this.roles.includes('ROLE_ADMIN');
      this.showModerator=this.roles.includes('ROLE_MODERATOR');
      this.username=user.username;
    }
  }
  logout(): void {
    this.tokenStorageServices.signOut();
    window.location.reload();
  }
}
