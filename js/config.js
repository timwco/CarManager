import angular from 'angular';


let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '',
      abstract: true,
      views: {
        'header': {
          templateUrl: 'templates/header.tpl.html'
        },
        'footer' : {
          templateUrl: 'templates/footer.tpl.html'
        }
      }
    })
    .state('root.home', {
      url: '/',
      views: {
        'content@': {
          templateUrl: 'templates/home.tpl.html'
        }
      }
    })
    .state('root.about', {
      url: '/about',
      views: {
        'content@': {
          templateUrl: 'templates/about.tpl.html'
        }
      }
    });
};

config.$inject = ['$stateProvider', '$urlRouterProvider'];


export default config;