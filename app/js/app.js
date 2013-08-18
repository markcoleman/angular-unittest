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

app.factory("ComplexService", ["SimpleService", function (SimpleService) {

    var complexService = {
        handleData: function () {
            var promise = SimpleService.getData();
            promise.then(function (fruits) {
                //some sort of data processing
                angular.forEach(fruits, function (fruit) {
                    if (fruit.name === "banana") {
                        fruit.hasMoney = true;
                    }
                });
            }, function (reason) {
                //do something with the reason.
            });

            return promise;
        }
    };

    return complexService;
}]);