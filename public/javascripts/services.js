//- create new AngularJS module
//- use existing AngularJS module that is driving app (in app.js)
//- use single resources 'ngResource'
angular.module('projectServices', ['ngResource'])
	//- define the service for the projects using the factory method
	//- allows define object in AngularJS that may be reused repeatedly
	//- name of service is 'Project'. use dependency injection to get 
	//- resource object (new service by using $resource)
	.factory('Project', function ($resource) {
		//- route to service of new service created
		//- if projectCode not specified it will simply pull projects data
		return $resource('/projects/:projectCode');
	})
	.factory('Projects', function($resource) {
		return $resource('/projects');
	});