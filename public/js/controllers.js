(function(){

  var freddieApp = angular.module("freddieApp", []);

  freddieApp.controller('ChatCtrl', function($scope, $http) {

    this.test = 'moo';

    $http.get('api/chat.json').success(function(data) {

      $scope.messages = data;

    });

    $scope.submit = function() {

      data = { username: $scope.username, message: $scope.message };

      $http.post('api/chat.json', data).success(function(updatedData) {

        $scope.messages = updatedData;

      });
      
    };

    $scope.deleteMessage = function() {

      message = {};

      $http.post('api/chat/'+this.message.id, message).success(function(updatedData) {

        $scope.messages = updatedData;

      });

    };
    

  });

})();