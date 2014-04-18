// define function with arg '$scope'
// angular parses first
// angular pulls '$scope' object and supply into function
function AppCtrl ($scope) {

  // 'projects' is a an object and a property of '$scope'	
  $scope.projects = {
    "Trendmyhunch": {
      "code": "TMH",
      "name": "Trendmyhunch",
      "url": "http://trendmyhunch.herokuapp.com",
      "stacks": [
        "Ruby",
        "Rails"
      ],
      "price": 4000
    },
    "Littlehumans": {
      "code": "LHM",
      "name": "Littlehumans",
      "url": "http://littlehumans.herokuapp.com",
      "stacks": [
        "jQuery",
        "Rails"
      ],
      "price": 5000
    }
  };

	// NOT WORKING - HTML OR JADE VERSION (currentProject not defined error)
	// set sidebarURL used in index.jade
	//$scope.sidebarURL = "../partials/project.jade";
	$scope.formURL = "../partials/form.jade";
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


