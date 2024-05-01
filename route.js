let app = angular.module("myApp", ["ngRoute"])
app.config(function ($routeProvider) {
    $routeProvider
        .when(
            "/home",
            {
                templateUrl: "index.html"
            })
        .when(
            "/home/m1s1",
            {
                templateUrl: "m1s1.html"
            })
        .when(
            "/home/m1s2",
            {
                templateUrl: "m1s2.html"
            })
        .when(
            "/home/m1s3",
            {
                templateUrl: "m1s3.html"
            })
        .when(
            "/home/m1s4",
            {
                templateUrl: "m1s4.html"
            })
        .when(
            "/home/m1s5",
            {
                templateUrl: "m1s5.html"
            })
        .when(
            "/home/m1s6",
            {
                templateUrl: "m1s6.html"
            })
        .when(
            "/home/m1s7",
            {
                templateUrl: "m1s7.html"
            })
        .when(
            "/home/page_cal_tool",
            {
                templateUrl: "page_cal_tool.html"
            })

        .otherwise({
            redirectTo: "/home"
        })
})