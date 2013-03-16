var dataURL = "https://script.google.com/macros/s/AKfycbwWoRTpADuPOFSrCyGi_4mNsvxJShrP6DsVmhd83yhHnJ2nieNa/exec";

angular.module('myApp', ['ngCookies','filters']);

function ShellCtrl($scope,$http,$timeout,$cookieStore) {
  var repeat = function() {
    $http.jsonp(dataURL + '?prefix=JSON_CALLBACK').success(
      function (results) {
        $scope.delay = 15000;
        var diff = 0;
        var oldresults = $cookieStore.get("results") || ($cookieStore.put("results",results),results);
        if ( oldresults[5][3] != results[5][3] )  //   cell(5,3) is last trade time
        {
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











