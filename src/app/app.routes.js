export const appRoutes = [{
    name: 'app',
    redirectTo: 'home',
    component: 'myApp'
}, {
    parent: 'app',
    name: 'home',
    url: '/home',
    component: 'myHome'
}, {
    name: 'module.**',
    url: '/module/{moduleId}',
    lazyLoad: transition => {
        const targetState = transition.targetState();
        const moduleId = targetState.params().moduleId;
        const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
        return import(/* webpackChunkName: "async" */ `./${moduleId}/${moduleId}.module`).then(ngmod => $ocLazyLoad.load(ngmod.module));
    }
}];