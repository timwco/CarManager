
let config = function ($stateProvider, $urlRouterProvider, BackandProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/about.tpl.html'
    })
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html'
    });

  BackandProvider.setAppName('carmanager');
};

config.$inject = ['$stateProvider', '$urlRouterProvider', 'BackandProvider'];


export default config;