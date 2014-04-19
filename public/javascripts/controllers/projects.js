// separate controller used with router
function ProjectsCtrl ($scope) {
	$scope.setActive('projects');

	// NOT WORKING - HTML OR JADE VERSION (currentProject not defined error)
	// set sidebarURL used in index.jade
	//$scope.sidebarURL = "../partials/project.jade";
	//$scope.formURL = "../partials/form.jade";
	//$scope.sidebarURL = "../partials/project.html";
	//$scope.formURL = "../partials/form.html";

	// track current project with function and variable
	// set as '$scope' variable
	$scope.currentProject = null;

  // select current project function 
	// takes single arg 'code' to use for lookup specific project info
	// stores it as the 'currentProject'
	$scope.setProject = function (code) {
		// lookup projects in the projects scope variable
		// then sets currentProject in same scope
		$scope.currentProject = $scope.projects[code];
	};

	$scope.editProject = function (code) {
		$scope.editing = $scope.projects[code];
	};

}