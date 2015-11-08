import "angular";
import "angular-ui-router";
import backand from './vendor/backand';
import config from './config';

// Controllers
import RegisterController from './controllers/register';
import CarController from './controllers/car';

// Services
import CarService from './services/car';

// Our Application Setup
angular.module('app', ['ui.router', 'backand'])

.constant('PARSE', {
  URL: 'https://api.parse.com/1/',
  CONFIG: {
    headers: {
      'X-Parse-Application-Id': 'vGVew7j7wAC76IoYUeIbNeqRD9BIgCJxPQKSh1wA',
      'X-Parse-REST-API-Key': 'a2pzTvhaEb6AEgmOQlDUSbwhyQNvM3n52QqDPlNi'
    }
  }
})

.controller('CarController', CarController)
.controller('RegisterController', RegisterController)

.service('CarService', CarService)

.config(config);
