// separate controller used with router
function StacksCtrl ($scope, Stacks) {
	$scope.setActive('stacks');
	// test the power of AngularJS nesting. modification of inner scope not effect outer scope (only access allowed)
	//$scope.projects = {};
	$scope.stacks = Stacks.query();
}