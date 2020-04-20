# ApplyNgxAuthFirebaseui

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

# add firebase uix
ng add ngx-auth-firebaseui

# got angular/cdk missing error
npm i -s @angular/material @angular/cdk @angular/flex-layout @angular/forms @angular/animations @angular/router
npm i -s firebase @angular/fire

# add angular material
ng add @angular/material

# add angular material-extension / password-strength
sudo ng add @angular-material-extensions/password-strength

# available auth providers. based on ngx-auth-firebaseui/projects/ngx-auth-firebaseui/src/lib/services/auth-process.service.ts

at line 26

export enum AuthProvider {
  ALL = 'all',
  ANONYMOUS = 'anonymous',
  EmailAndPassword = 'firebase',
  Google = 'google',
  Apple = 'Apple',
  Facebook = 'facebook',
  Twitter = 'twitter',
  Github = 'github',
  Microsoft = 'microsoft',
  Yahoo = 'yahoo',
  PhoneNumber = 'phoneNumber'
}

# import the enumeration
import { AuthProvider } from 'ngx-auth-firebaseui'

# ngx-auth-firebaseui/projects/ngx-auth-firebaseui/src/lib/components/ngx-auth-firebaseui/auth.component.ts

at line 67

@Input() providers: AuthProvider[] | AuthProvider = AuthProvider.ALL;