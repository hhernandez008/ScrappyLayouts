var app = angular.module("scrappyLayouts", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "htmlPages/home.html",
            controller: "homeCtrl"
        })
        .when("/sketching", {
            templateUrl: "htmlPages/sketchCreator.html",
            controller: "sketchCtrl"
        })
        .when("/gallery", {
            templateUrl: "htmlPages/gallery.html",
            controller: "galleryCtrl"
        })
        .when("/user", {
            templateUrl: "htmlPages/userHome.html",
            controller: "userHomeCtrl"
        })
        .otherwise({
            redirectTo: "/"
        });
});
