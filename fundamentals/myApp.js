var app = angular.module("myApp", []);

app.component("thankyou", {
  template: `<h2>Thank You {{$ctrl.name}}</h2>`,

  controller: function () {
    this.name = "Angular JS";
  },
});

app.controller("MyCtrl", function ($scope, DataService) {
  $scope.msg = "Hello AngularJS";
  $scope.serviceData = DataService.getData();
});

app.service("DataService", function () {
  this.getData = function () {
    return "Data from service";
  };
});
