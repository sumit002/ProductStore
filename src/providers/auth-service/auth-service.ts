import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  setUserCredentials(result) {
    localStorage.setItem('currentUser', JSON.stringify({ uid: result.uid, 
      displayName: result.displayName, 
      email: result.email, 
      phoneNumber: result.phoneNumber,
      photoURL: result.photoURL, 
      emailVerified: result.emailVerified }));

    // localStorage.setItem('uid', result.uid);
    // localStorage.setItem('displayName', result.displayName);
    // localStorage.setItem('email', result.email);
    // localStorage.setItem('phoneNumber', result.phoneNumber);
    // localStorage.setItem('photoURL', result.photoURL);
    // localStorage.setItem('emailVerified', result.emailVerified);
  }

  getUserCredentials() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var token = currentUser.token; // your token

    return currentUser;
  }

}
