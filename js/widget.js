var dataURL = "https://script.google.com/macros/s/AKfycbxMjXzTaUy0LH7b8AtSmZ7Cihkys11D65kuyoEuR5IxHnFM70g/exec";

angular.module('myApp', ['ngCookies']);

function ShellCtrl($scope,$http,$timeout,$cookieStore) {
  var repeat = function() {
    $http.jsonp(dataURL + '?prefix=JSON_CALLBACK').success(
      function (results) {
        var delay = 5000, diff = 0;
        var oldresults = $cookieStore.get("results") || ($cookieStore.put("results",results),results);
        if ( oldresults[5][0] != results[5][0] ) 
        {
          delay = 55000 + 997 * 2;  // 997 is greatest prime less that 1000
          $cookieStore.put("results",results);
        }
        results[5][1] = Math.round((results[1][0] - oldresults[1][0])*100)/100;
        $scope.tableData = results;
        $scope.diff = results[5][1];
        // $scope.$apply();
        $timeout(repeat, delay);
      });
  }
  repeat();
}

