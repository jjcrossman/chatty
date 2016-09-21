'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {

    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data;
      $scope.messages = $scope.messages.reverse();
    });

    $scope.addMessage = function ( message, user ) {
      if ( message, user && $scope.currentUser !== "none" ) {
        messageService.addMessage(message, user).then(function ( response ) {
          $scope.messages = response.data;
          $scope.messages = $scope.messages.reverse();
        });
      }
    };

    $scope.currentUser = "none";

    $scope.setUserName = ( username ) => {
       $scope.currentUser = username;
    };

    $scope.userName = "";

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
