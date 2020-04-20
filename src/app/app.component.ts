import { Component } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apply-ngx-auth-firebaseui';
  prov: AuthProvider[] = [AuthProvider.PhoneNumber, AuthProvider.Google, AuthProvider.Github];
}
