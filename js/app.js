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
}]);/**
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
}]);

app.controller('HeaderController', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
});

app.controller('HomeController', function($scope){
    $scope.pageClass = 'home';
});

app.controller('TechnicalController', function($scope){
    $scope.pageClass = 'technical';
});

app.controller('ArtisticController', function($scope){
    $scope.pageClass = 'artistic';
});

app.controller('EmotionalController', function($scope){
    $scope.pageClass = 'emotional';
});

app.controller('ContactController', function($scope, $http){
    $scope.pageClass = 'contact';

});

app.controller('ProjectsController', function($scope){
    $scope.pageClass = 'projects';
});

app.controller('PartnersController', function($scope){
    $scope.pageClass = 'partners';
});