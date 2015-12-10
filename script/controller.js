var app = angular.module("scrappyLayouts");

app.controller("mainCtrl", function(){
    this.currPage = '';
    this.setPageName = function(page){
        this.currPage = page;
    }
}).controller("navCtrl", function(){
    this.pages = [
        {page: "Home", link:"index.html"},
        {page: "Layout Sketching", link:"sketching.html"},
        {page: "Design Gallery", link:"gallery.html"},
        {page: "Login", link:"login.html"}
    ];
    this.activePage = function(currPage, pageLink){
        return currPage == pageLink;
    }

}).controller("homeCtrl", function(){

});