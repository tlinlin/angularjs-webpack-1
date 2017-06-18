export function registerRoutes(states) {
    config.$inject = ['$uiRouterProvider'];
    function config($uiRouterProvider) {
        states.forEach(state => $uiRouterProvider.stateRegistry.register(state));
    }
    return config;
}