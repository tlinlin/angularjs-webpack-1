export const HomeComponent = {
    template: require('./home.tpl.html'),
    controller: HomeController
};

function HomeController() {
    this.hello = process.env.HELLO;
}