var app = angular.module("app", []);

app.controller("SimpleCtrl", function ($scope) {
    $scope.message = "Hello World";
});

app.factory("SimpleService", ["$http", "$q", function ($http, $q) {

    var service = {
        getData: function () {
            var deferred = $q.defer();

            $http.get("/api/v1/fruits").success(function (data) {
                deferred.resolve(data);

            }).error(function () {
                    deferred.reject("error");

                });
            return deferred.promise;
        }

    };

    return service;
}]);