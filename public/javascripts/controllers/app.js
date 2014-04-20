// define function with arg '$scope'
// angular parses first
// angular pulls '$scope' object and supply into function
function AppCtrl ($scope) {
	$scope.projectTemplate = 'partials/project.jade'

	$scope.setActive = function (type) {
		// set scope variables to blank so class for each scope item is cleared
		// highlights the link that is active
		$scope.stacksActive = '';
		$scope.projectsActive = '';
		// lookup scope variable to set to Active
		$scope[type + 'Active'] = 'active';
	};

  // 'projects' is a an object and a property of '$scope'	
  // OUTER SCOPE - setting list of all projects in the system 
  // REMOVED FOR SERVER-SIDE INTEGRATION
  // $scope.projects = {
  //   "Trendmyhunch": {
  //     "code": "TMH",
  //     "name": "Trendmyhunch",
  //     "url": "http://trendmyhunch.herokuapp.com",
  //     "stacks": [
  //       "Ruby",
  //       "Rails"
  //     ],
  //     "price": 4000
  //   },
  //   "Littlehumans": {
  //     "code": "LHM",
  //     "name": "Littlehumans",
  //     "url": "http://littlehumans.herokuapp.com",
  //     "stacks": [
  //       "jQuery",
  //       "Rails"
  //     ],
  //     "price": 5000
  //   }
  // };

  // shifted code only pertaining to 'projects' controller to 'projects.js' as this code is nested

}


