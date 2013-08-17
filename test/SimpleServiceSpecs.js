/**
 * Created with JetBrains WebStorm.
 * User: colemanm
 * Date: 7/29/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */

describe("SimpleService", function(){

    beforeEach(module("app"));

    var service,
        $httpBackend;

    beforeEach(inject(function(SimpleService, _$httpBackend_){
        service = SimpleService;
        $httpBackend = _$httpBackend_;
    }));

    describe("getData", function(){

        it("should make an ajax call to api/v1/fruits", function(){
            $httpBackend.whenGET("/api/v1/fruits").respond([{id:1, name: "banana"}]);
            expect(service.getData()).toBeDefined();
        });

        it("should resolve to an array of fruit", function(){
            $httpBackend.whenGET("/api/v1/fruits").respond([{id:1, name: "banana"}]);
            var promise = service.getData(),
                theFruits = null;

            promise.then(function(fruits){
                theFruits = fruits;
            });
            $httpBackend.flush();
            expect(theFruits instanceof Array).toBeTruthy();
        });
        it("should reject the promise and respond with error", function(){
            $httpBackend.whenGET("/api/v1/fruits").respond(500);
            var promise = service.getData(),
                result = null;

            promise.then(function(fruits){
                result = fruits;
            }, function(reason){
                result = reason;
            });
            $httpBackend.flush();
            expect(result).toBe("error");
        });
    });

});