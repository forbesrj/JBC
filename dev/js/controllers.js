/**
 * Created by ryan on 10/14/14.
 */
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

app.controller('ContactController', function($scope){
    $scope.pageClass = 'contact';
});

app.controller('ProjectsController', function($scope){
    $scope.pageClass = 'projects';
});

app.controller('PartnersController', function($scope){
    $scope.pageClass = 'partners';
});