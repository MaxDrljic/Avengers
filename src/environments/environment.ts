// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PublicKey: 'e04d9602573a32a9a3497d998652813f',
  PrivateKey: '0da2dd398aacf77326a6afab5f9b06ff302533cb',
  MarvelEndpoint: 'http://gateway.marvel.com/v1/public/characters?ts='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.