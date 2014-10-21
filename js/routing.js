/**
 * Created by Ryan on 10/8/2014.
 */
var app = angular.module('jbcModule', ['ngRoute', 'ngAnimate', 'vr.directives.nlForm']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/technical', {templateUrl:'partials/technical.html', controller: 'TechnicalController'})
        .when('/artistic', {templateUrl:'partials/artistic.html', controller: 'ArtisticController'})
        .when('/emotional', {templateUrl: 'partials/emotional.html', controller: 'EmotionalController'})
        .when('/projects', {templateUrl: 'partials/projects.html', controller: 'ProjectsController'})
        .when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactController'})
        .when('/partners', {templateUrl: 'partials/partners.html', controller: 'PartnersController'})
        .otherwise({redirectTo:'/', templateUrl: 'partials/home.html', controller: 'HomeController'})
}]);