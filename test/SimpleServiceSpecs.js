/**
 * Created with JetBrains WebStorm.
 * User: colemanm
 * Date: 7/29/13
 * Time: 9:45 PM
 * To change this template use File | Settings | File Templates.
 */

describe("SimpleService", function(){

    beforeEach(module("app"));

    var service;

    beforeEach(inject(function(SimpleService){
       service = SimpleService;
    }));

    describe("getData", function(){

        it("should return an array of items", function(){

            expect(service.getData()).toBeDefined();

        });

    });

});