var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("inbox");

	$stateProvider
		.state('inbox',{
			url: "/",
			templateUrl: "inbox.html"
		})
		.state('message',{
			url: "/message",
			templateUrl: "message.html"
		})
});

app.controller('mainCtrl', ['$scope', function($scope){



}]);

