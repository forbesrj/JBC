/**
 * Created by Ryan on 10/8/2014.
 */
var app = angular.module('jbcModule', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/technical', {templateUrl:'partials/technical.html', controller: 'TechnicalController'})
        .when('/artistic', {templateUrl:'partials/artistic.html', controller: 'ArtisticController'})
        .when('/emotional', {templateUrl: 'partials/emotional.html', controller: 'EmotionalController'})
        .when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'})
        .when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'})
        .when('/partners', {templateUrl: 'partials/partners.html', controller: 'PartnersController'})
        .otherwise({redirectTo:'/', templateUrl: 'partials/home.html', controller: 'HomeController'})
}]);/*.directive('pageAnimate', function() {
    return {
        compile: function(elm) {
            $(elm).addClass('pt-page-moveToLeft').delay(10000).removeClass('pt-page-moveToLeft');
            return function(scope, elm, attrs) {
            };
        }
    };
});   */