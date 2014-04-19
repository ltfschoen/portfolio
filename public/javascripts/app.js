// overall file for entire AngularJS app
// module self contained code designed to work with AngularJS
// module method takes two args (name of module, any dependencies needed for the module). use empty array if no dependencies 
// to use this module, assign this module to the app, by updating layout.jade with <html ng-app="portfolio"  ... instead of just <html ng-app>
angular.module('portfolio', [])
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
		controller: function ($scope) {
			$scope.setActive('stacks');
		}})
		// NON-PARTIAL (MARKUP): USE BELOW
		.when('/projects', {template: '<h3>Projects</h3>',
		controller: function ($scope) {
			$scope.setActive('projects');
		}});
}