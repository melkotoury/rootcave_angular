// Directives
var angular;

/**
*  Module
*
* Description: This is a directive modules to add all the common directives of rootcave website
*/
angular.module('rootCave', ).directive(function () {
    return {
     
        
    };
});
angular.module("rootCave", ['ngRoute'])

    .service('aboutService', function ($http, $q) {
        "use strict";
        var deferred = $q.defer();

        $http.get('assets/data.json').then(function (rcdata) {
            deferred.resolve(rcdata);
        });
        this.getAbout = function () {
            return deferred.promise;
        };
    })

    .controller('aboutCtrl', function ($scope, aboutService) {
        var promise = aboutService.getAbout();
        promise.then(function (rcdata) {
            $scope.about = rcdata.data.about;
            $scope.products = rcdata.data.products;
            $scope.mopileProduct = rcdata.data.mopileProduct;
            $scope.clients = rcdata.data.clients;
            $scope.anytime = rcdata.data.anytime;
            $scope.lobProduct = rcdata.data.lobProduct;
            $scope.Product = rcdata.data.lobProduct.projectsdetails;
        });
    })

    .config(function ($routeProvider) {
        $routeProvider
            .when('/lob',
                {
                    controller: 'loburl',
                    templateUrl: 'line-of-business.php'
                });

    });
