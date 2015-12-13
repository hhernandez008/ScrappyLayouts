var app = angular.module("scrappyLayouts");

app.controller("navCtrl", function($location){
    this.pages = [
        {page: "Home", link:"index.html"},
        {page: "Layout Sketching", link:"sketching.html"},
        {page: "Design Gallery", link:"gallery.html"},
        {page: "Login", link:"login.html"}
    ];
    this.activePage = function(pageLink){
        var currPage =  $location.absUrl();
        var lastSlash = currPage.lastIndexOf("/");
        currPage = currPage.substr(lastSlash + 1);
        return currPage == pageLink;
    }

}).controller("pastDesignsCtrl", function(){
    this.pastPagesFull = [
        {title: "Design 1", link: "#", pageSrc: "../images/dummySketches/Design2.jpg"},
        {title: "Design 2", link: "#", pageSrc: "../images/dummySketches/Design8.jpg"},
        {title: "Design 3", link: "#", pageSrc: "../images/dummySketches/Design7.jpg"},
        {title: "Design 4", link: "#", pageSrc: "../images/dummySketches/Design4.jpg"},
        {title: "Design 5", link: "#", pageSrc: "../images/dummySketches/Design10.jpg"},
        {title: "Design 6", link: "#", pageSrc: "../images/dummySketches/Design3.jpg"},
        {title: "Design 7", link: "#", pageSrc: "../images/dummySketches/Design6.jpg"},
        {title: "Design 8", link: "#", pageSrc: "../images/dummySketches/Design1.jpg"},
        {title: "Design 9", link: "#", pageSrc: "../images/dummySketches/Design9.jpg"},
        {title: "Design 10", link: "#", pageSrc: "../images/dummySketches/Design5.jpg"}
    ];
    this.pastPagesSummary = [
        {title: "Design 1", link: "#", pageSrc: "../images/dummySketches/Design2.jpg"},
        {title: "Design 2", link: "#", pageSrc: "../images/dummySketches/Design8.jpg"},
        {title: "Design 3", link: "#", pageSrc: "../images/dummySketches/Design7.jpg"},
        {title: "Design 4", link: "#", pageSrc: "../images/dummySketches/Design4.jpg"},
        {title: "Design 5", link: "#", pageSrc: "../images/dummySketches/Design10.jpg"},
        {title: "Design 6", link: "#", pageSrc: "../images/dummySketches/Design3.jpg"}
    ];

}).controller("userSnapshotCtrl", function(){
    this.user={name: "Heather", id: 1};
    this.stats = {created: 7, stars: 2, saved: 1};
    this.allPages = [
        {title: "Design 1", link: "#", pageSrc: "../images/dummySketches/Design6.jpg"},
        {title: "Design 2", link: "#", pageSrc: "../images/dummySketches/Design3.jpg"},
        {title: "Design 3", link: "#", pageSrc: "../images/dummySketches/Design1.jpg"},
        {title: "Design 4", link: "#", pageSrc: "../images/dummySketches/Design9.jpg"},
        {title: "Design 5", link: "#", pageSrc: "../images/dummySketches/Design7.jpg"},
        {title: "Design 6", link: "#", pageSrc: "../images/dummySketches/Design8.jpg"},
        {title: "Design 7", link: "#", pageSrc: "../images/dummySketches/Design10.jpg"},
        {title: "Design 8", link: "#", pageSrc: "../images/dummySketches/Design4.jpg"}
    ];
    this.pagesSummary = this.allPages.slice(0, 4);
});
