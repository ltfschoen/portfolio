// overall file for entire AngularJS app
// module self contained code designed to work with AngularJS
// module method takes two args (name of module, any dependencies needed for the module). use empty array if no dependencies 
// to use this module, assign this module to the app, by updating layout.jade with <html ng-app="portfolio"  ... instead of just <html ng-app>
// allow AngularJS to find project object as supply it in the project controller
angular.module('portfolio', ['portfolioServices'])
	// call chained method called 'config'
	// pass in fn to define the views
	// create fn called 'portfolioRouter'
	.config(portfolioRouter);
	// define fn called 'portfolioRouter'
	// AngularJS uses dependency injection for the fn passed into config so can specify objects wanted for AngularJS to fetch and pass in as it calls portfolioRouter
function portfolioRouter ($routeProvider) {
	// build single page app where all URLS interpretted by AngularJS rather than a server. URLs bound to a markup or partials
	// use $routeProvider to define the routes with 'when' method
	$routeProvider
		// route, object
		// pass in path to partial or markup itself
		// pass in controller to be executed, whether link was followed, or URL in browser changed
		// for highlighting to take place we must specify the scope in our controller. get AngularJS pass in the scope through dependency injections using $scope
		// PARTIALS: USE BELOW
		.when('/', {templateUrl: 'partials/form.jade', 
		// controller: function ($scope) {
		// 	$scope.setActive('stacks');
		// }})
    // refactor to just specify names of controllers and move functions in separate controller files
    controller: 'StacksCtrl'})
		// NON-PARTIAL (MARKUP): USE BELOW
			// test the power of AngularJS nesting. modification of inner scope not effect outer scope (only access allowed)
	  //$scope.projects = {};
	  .when('/projects/:projectCode', {
	  	templateUrl: 'partials/project.jade',
	  	controller: 'ProjectCtrl'
	  })
	  //- define route to display two projects
	  .when('/projects/:project1/:project2', {
	  	templateUrl: 'partials/two_projects.jade',
	  })/
		//.when('/projects', {template: '<h3>Projects</h3> {{projects | json}}',
		.when('/projects', {templateUrl: 'partials/projects.jade',
		// controller: function ($scope) {
		// 	$scope.setActive('projects');
		// }});
    // refactor to just specify names of controllers and move functions in separate controller files
    controller: 'ProjectsCtrl'});
    .when('/stacks', {templateUrl: 'partials/stacks.jade',
    controller: 'StacksCtrl'});
}