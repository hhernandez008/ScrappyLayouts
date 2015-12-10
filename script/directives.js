var app = angular.module("scrappyLayouts");

app.directive("navigation", function(){
    return {
        restrict: "AE",
        templateUrl: "navigation.html"
    };
});