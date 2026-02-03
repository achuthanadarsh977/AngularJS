var app = angular.module("myApp", []);

// 1. SERVICE - Creates a singleton instance using 'new' keyword
app.service("UserService", function () {
  this.users = ["Alice", "Bob", "Charlie"];
  this.getUsers = function () {
    return this.users;
  };
  this.addUser = function (name) {
    this.users.push(name);
  };
});

// 2. FACTORY - Returns an object/function (more flexible)
app.factory("MathFactory", function () {
  return {
    add: function (a, b) {
      return a + b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };
});

// 3. VALUE - Simple value injection
app.value("appName", "My AngularJS App");
app.value("appVersion", "1.0.0");

// 4. CONSTANT - Cannot be modified, available in config phase
app.constant("API_URL", "https://api.example.com");

// 5. PROVIDER - Most configurable, can be configured before app runs
app.provider("Greeting", function () {
  var greeting = "Hello";

  this.setGreeting = function (newGreeting) {
    greeting = newGreeting;
  };

  this.$get = function () {
    return {
      greet: function (name) {
        return greeting + ", " + name + "!";
      },
    };
  };
});

// Controller with multiple dependencies injected
app.controller("MainCtrl", [
  "$scope",
  "$timeout",
  "UserService",
  "MathFactory",
  "appName",
  "appVersion",
  "API_URL",
  "Greeting",
  function (
    $scope,
    $timeout,
    UserService,
    MathFactory,
    appName,
    appVersion,
    API_URL,
    Greeting,
  ) {
    // Using VALUE
    $scope.title = appName + " v" + appVersion;

    // Using CONSTANT
    $scope.apiUrl = API_URL;

    // Using SERVICE
    $scope.users = UserService.getUsers();
    $scope.newUser = "";
    $scope.addUser = function () {
      if ($scope.newUser) {
        UserService.addUser($scope.newUser);
        $scope.newUser = "";
      }
    };

    // Using FACTORY
    $scope.num1 = 5;
    $scope.num2 = 3;
    $scope.sum = MathFactory.add($scope.num1, $scope.num2);
    $scope.product = MathFactory.multiply($scope.num1, $scope.num2);

    // Using PROVIDER
    $scope.greetingMsg = Greeting.greet("Developer");

    // Using built-in $timeout service
    $scope.delayedMsg = "Waiting...";
    $timeout(function () {
      $scope.delayedMsg = "Loaded after 2 seconds!";
    }, 2000);
  },
]);
