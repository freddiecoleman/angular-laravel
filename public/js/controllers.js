(function(){

  var freddieApp = angular.module("freddieApp", []);

  freddieApp.controller('ChatCtrl', function($scope, $http) {

    this.test = 'moo';

    $http.get('api/chat.json').success(function(data) {

      $scope.messages = data;

    });

    $scope.submit = function() {

      formData = $scope.form;

      $http.post('api/chat.json', formData).success(function(data) {

        alert('hi');

      });
      
    };
    

  });

})();