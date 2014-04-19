//- AngularJS reads this function definition and automatically 
//- supplies correct variables when fn is called 
function ProjectCtrl ($scope, $routeParams) {
	//- routeParams object allows get correct project code from the route
	//- lookup currentProject and set it in this scope
	//- projectCode property matches that :projectCode in app.js route
	$scope.currentProject = $scope.projects[$routeParams.projectCode];
}