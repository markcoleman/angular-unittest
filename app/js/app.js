/**
 * Created with JetBrains WebStorm.
 * User: colemanm
 * Date: 7/29/13
 * Time: 9:17 PM
 * To change this template use File | Settings | File Templates.
 */

var app = angular.module("app", []);

app.controller("SimpleCtrl", function($scope){
    $scope.message = "Hello World";
});