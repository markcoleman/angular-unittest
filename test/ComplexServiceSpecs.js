describe("ComplexService", function () {

    var service,
        mockSimpleService,
        $q,
        deferred,
        $rootScope;

    beforeEach(module("app", function ($provide) {
        mockSimpleService = {
            getData: function () {
                deferred = $q.defer();
                return deferred.promise;
            }
        };
        $provide.value("SimpleService", mockSimpleService);
    }));

    beforeEach(inject(function (ComplexService, _$q_, _$rootScope_) {
        service = ComplexService;
        $q = _$q_;
        $rootScope = _$rootScope_;
    }));

    describe("handleData", function () {

        it("should set has money if the fruit is a banana", function () {
            var promise = service.handleData();
            var banana = null;

            promise.then(function (fruits) {
                angular.forEach(fruits, function (fruit) {
                    if (fruit.name === "banana") {
                        banana = fruit;
                        return false;
                    }
                });
            });
            deferred.resolve([
                {
                    id: 1,
                    name: "banana"
                }
            ]);
            $rootScope.$apply();
            expect(banana.hasMoney).toBeTruthy();
        });
    });
});