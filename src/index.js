import {appModule} from './app/app.module';
import angular from 'angular';

angular.element(function () {
    angular.bootstrap(document, [appModule.name], {strictDi: true});
});