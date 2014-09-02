angular.module('Cor', [
        'ui.bootstrap',
        'ngRoute'
]).config([
        '$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            //Index is default route
            $routeProvider.when('/', {
                redirectTo: '/SignIn'
            })
                .when('/SignIn', {
                    templateUrl: '/SignIn/SignIn',
                    controller: 'signInCtrl'
                })
                .when('/Program', {
                    templateUrl: '/Program/Program',
                    controller: 'programCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });

            // Specify HTML5 mode (using the History APIs) or HashBang syntax.
            $locationProvider.html5Mode(false).hashPrefix('!');
            //$locationProvider.html5Mode(true);

        }
    ]);