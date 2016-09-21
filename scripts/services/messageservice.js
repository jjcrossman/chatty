'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8899/api/messages');
      },

      addMessage: function ( message, user ) {
        return $http.post('http://localhost:8899/api/messages', { message: message, user: user });
      }
    };
  });
