function Project1Ctrl ($scope, $routeParams) {
	//- looks up :project1 in app.js where it states:
	//- ... :project1/:project2
	$scope.currentProject = $scope.projects[$routeParams.project1];
}