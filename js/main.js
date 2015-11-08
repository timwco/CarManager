import "angular";
import "angular-ui-router";
import backand from './vendor/backand';
import config from './config';



angular.module('app', ['ui.router', 'backand'])

.config(config);
