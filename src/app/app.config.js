configDebug.$inject = ['$compileProvider'];
export function configDebug($compileProvider) {
    $compileProvider.debugInfoEnabled(!process.env.PROD);
    $compileProvider.commentDirectivesEnabled(!process.env.PROD);
    $compileProvider.cssClassDirectivesEnabled(!process.env.PROD);
}

configRedirect.$inject = ['$uiRouterProvider'];
export function configRedirect($uiRouterProvider) {
    $uiRouterProvider.urlService.rules.otherwise({ state: 'home' });
}