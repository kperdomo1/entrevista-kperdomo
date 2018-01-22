'use strict';

/**
 * @ngdoc function
 * @name leadakiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leadakiApp
 */
angular.module('leadakiApp').controller('MainCtrl', function ($scope) {

    $scope.register = function () {
        if (!$scope.email) {
            alert("Por favor ingrese el email");
        } else {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(re.test($scope.email.toLowerCase())) {
                alert("Email registrado exitosamente")
            } else {
                alert("Email invalido")
            }
        }
    };

});
