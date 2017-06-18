import angular from 'angular';
import {asyncRoutes} from './async.routes';
import {registerRoutes} from '../common/route/route.helpers';
import {AsyncComponent} from './async.component';

export const module = angular.module('myApp.async', [])
    .component('myAsync', AsyncComponent)
    .config(registerRoutes(asyncRoutes));