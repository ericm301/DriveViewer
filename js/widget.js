var dataURL = "https://script.google.com/macros/s/AKfycbxMjXzTaUy0LH7b8AtSmZ7Cihkys11D65kuyoEuR5IxHnFM70g/exec";

function ShellCtrl($scope) {
  $.getJSON(dataURL + '?prefix=?', null,
    function (results) {
      $scope.tableData = results;
      $scope.$apply();
    });
}

 