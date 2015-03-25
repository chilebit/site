var App = angular.module("App", ["ionic"]);

App.service("ChileBitBook", ["$http","$log", ChileBitBook]);

App.controller("AppCtrl", ["$scope", "ChileBitBook", "$log", AppCtrl]);

function AppCtrl($scope, ChileBitBook, $log){
    $scope.Bids = [];
    $scope.Asks = [];
    $scope.updateBook = function(){
        ChileBitBook.getBook($scope);
    };
}

function ChileBitBook($http, $log){
    this.getBook = function($scope) {
        $http.jsonp("https://api.blinktrade.com/api/v1/CLP/orderbook?callback=JSON_CALLBACK")
        .success(function(result){
            var Bid;
            $.each(result.bids, function(index, stringBid){
                Bid = {
                    Price: stringBid[0],
                    Volume: stringBid[1],
                    Id: stringBid[2],
                };

                $scope.Bids.push(Bid);
            });
            
            var Ask;
            $.each(result.asks, function(index, stringAsk){
                Ask = {
                    Price: stringAsk[0],
                    Volume: stringAsk[1],
                    Id: stringAsk[2],
                };

                $scope.Asks.push(Ask);
            });

           
        });
    };
}