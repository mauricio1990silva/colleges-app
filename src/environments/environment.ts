// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAb2aX3I1tq1a8Ea1e-KMJxpPxALapvXro',
    authDomain: 'colleges-app.firebaseapp.com',
    databaseURL: 'https://colleges-app.firebaseio.com',
    projectId: 'colleges-app',
    storageBucket: '',
    messagingSenderId: '589492624157'
  }
};
