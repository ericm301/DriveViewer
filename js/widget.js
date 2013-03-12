var dataURL = "https://script.google.com/macros/s/AKfycbxMjXzTaUy0LH7b8AtSmZ7Cihkys11D65kuyoEuR5IxHnFM70g/exec";

angular.module('myApp', ['ngCookies','filters']);

function ShellCtrl($scope,$http,$timeout,$cookieStore) {
  var repeat = function() {
    $http.jsonp(dataURL + '?prefix=JSON_CALLBACK').success(
      function (results) {
        $scope.delay = 15000;
        var diff = 0;
        var oldresults = $cookieStore.get("results") || ($cookieStore.put("results",results),results);
        if ( oldresults != results ) 
        {
          // delay = 60000;
          $cookieStore.put("results",results);
        }
        results[5][1] = (results[1][0] - oldresults[1][0]).toFixed(2);
        $scope.tableData = results;
        $scope.diff = results[5][1];
        $timeout(repeat, $scope.delay);
      });
  }
  repeat();
}

angular.module( 'filters', [] )
  .filter( 'textornumber', function() {
    return function ( item, digits ) {
      //var itemUndefined = ( item === undefined );
      //var itemBlank = ( item === "" );
      //var itemNonDigit = item.toString().match( /[^.\d]/ );
      return ( ( item === undefined ) || ( item === "" ) || item.toString().match( /[^.\d-]/ ) ) ?
            item : parseFloat( item ).toFixed( digits || 2 );
      };
  });



//  every minute the spreadsheet changes, so...
//    start polling the page every 5s
//    when page changes, poll every 60s
//    if page doesn't change between polls, go back to start



