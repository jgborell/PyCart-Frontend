'use strict';

angular.module('myApp.adminDashboard', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin', {
            templateUrl: 'admin_dashboard/admin_dashboard.html',
            controller: 'AdminDashboardCtrl'
        });
    }])

    .controller('AdminDashboardCtrl', [function () {

    }]);



