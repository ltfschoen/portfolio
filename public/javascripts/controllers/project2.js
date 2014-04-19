function Project2Ctrl ($scope, $routeParams) {
	//- looks up :project2 in app.js where it states:
	//- ... :project1/:project2
	$scope.currentProject = $scope.projects[$routeParams.project2];
}