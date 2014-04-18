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
      "stack": [
        "Ruby",
        "Rails"
      ],
      "price": 4000
    },
    "Littlehumans": {
      "code": "LHM",
      "name": "Littlehumans",
      "url": "http://littlehumans.herokuapp.com",
      "stack": [
        "jQuery",
        "Rails"
      ],
      "price": 5000
    }
  };
}