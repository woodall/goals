/**
* goalies Module
*
* What would you like to know?
*/
angular.module('goalies', ['goaliesFilters'])
  .config(goaliesRouter);


function goaliesRouter ($routeProvider) {

  $routeProvider

    .when('/',
      { templateUrl: 'partials/welcome.html',
      controller: function($scope){
        $scope.setActive('welcome');
      }})

    .when('/goal/:goalName/:goalId',
      { templateUrl: 'partials/current_goal.html',
      controller: 'CategoryCtrl'})

    .when('/calculator',
      { templateUrl: 'partials/time_calculator.html',
      controller: 'CalculatorCtrl'})

    .when('/goals',
      { templateUrl: 'partials/goal_index.html',
      controller: 'GoalsCtrl'})

    .when('/about',
      { templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'})

    .when('/progress',
      { templateUrl: 'partials/progress.html',
      controller: 'ProgressCtrl'});
}

