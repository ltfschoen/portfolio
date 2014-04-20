function ReservationsCtrl ($scope, Reservations) {
	$scope.setActive('reservations');
	
	$scope.reservations = Reservations.query();

	// reserveFlight called in stacks.jade
	$scope.reserveProject = function () {
		// $scope.reserve will pass ng-model='reserve.name' from stacks.jade
		// also pass callback function that will be called when response from server
		// data from server will be passed in
		Reservations.save($scope.reserve, function(data) {
			// reset the form
			$scope.reserve.name = '';
			// update to display new reservations
			// add reservation data to reservations array
			$scope.reservations.push(data);
		})
	}
}