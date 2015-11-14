angular.module('firebase.config', [])
  .constant('FBURL', 'https://cards-against-humans.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
