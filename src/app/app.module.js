import angular from 'angular';
import {AppComponent} from './app.component';
import {configDebug, configRedirect} from './app.config';
import {MenuComponent} from './menu/menu.component';
import {registerRoutes} from './common/route/route.helpers';
import {appRoutes} from './app.routes';
import {HomeComponent} from './home/home.component';
import uiRouter from '@uirouter/angularjs';
import ocLazyLoad from 'oclazyload';

export const appModule = angular.module('myApp', [uiRouter, ocLazyLoad])
    .component('myApp', AppComponent)
    .component('myMenu', MenuComponent)
    .component('myHome', HomeComponent)
    .config(configDebug)
    .config(configRedirect)
    .config(registerRoutes(appRoutes));