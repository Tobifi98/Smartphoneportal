import { initializeApp } from "firebase/app";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'smartphoneportal-8230c',
    appId: '1:924247986735:web:99d560f07557bbf828ecda',
    storageBucket: 'smartphoneportal-8230c.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBn0mYcbiT5eg1K8iTW-JidHm3vqaN8FME',
    authDomain: 'smartphoneportal-8230c.firebaseapp.com',
    messagingSenderId: '924247986735',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
