'use strict';

angular.module('Checklist', [])
	.config(['$routeProvider', '$locationProvider', 
		function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'static/partials/checklist.html',
					controller: ChecklistController
				})
				.otherwise({
					redirectTo: '/'
				});
			$locationProvider.html5Mode(true);
	}]);