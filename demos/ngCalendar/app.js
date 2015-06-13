var app = angular.module('calendarApp', []);

app.controller('CalendarController', function($scope){
  $scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  $scope.months = [{0:'January'},{1:'February'}, {2:'March'}, {3:'April'}, {4:'May'}, {5:'June'}, {6:'July'}, {7:'August'},
    {8:'September'}, {9:'October'}, {10:'November'}, {11:'December'}];
  $scope.today = new Date();
  $scope.month = $scope.today.getMonth();
  $scope.year = $scope.today.getFullYear();
  $scope.day = $scope.today.getDay();

  $scope.selectedDate = $scope.today;

  $scope.currentDay = $scope.today.getDate();
  $scope.currentMonth = $scope.today.getMonth();
  $scope.currentYear = $scope.today.getFullYear();

  $scope.showText = true;

  $scope.startDayOfMonth = function(m, y) {
    return new Date(y, m, 1).getUTCDay();
  };
  $scope.daysInMonth = function(m, y) {
    return new Date(y, (m+1), 0).getDate();
  };

  $scope.daysList = function () {
    var arr = [];
    var numDays = $scope.daysInMonth($scope.month, $scope.year);
    var padding = $scope.firstDay().getDay();
    var endpadding = ($scope.numberOfWeeks().length * 7) - (numDays + padding);

    for (var i = 0; i < padding; i++) {
      arr.push(0);
    }

    for (var i = 1; i <= numDays; i++) {
      arr.push(i);
    }

    for (var i = 0; i < endpadding; i++) {
      arr.push(0);
    }

    return arr;
  };

  $scope.numberOfWeeks = function() {
    var firstDay = $scope.firstDay();
    var lastDay = new Date($scope.year, $scope.month + 1, 0);
    var numWeeks = Math.ceil((firstDay.getDay() + lastDay.getDate()) / 7);

    var arr = [];
    for(var i = 0; i < numWeeks; i++) {
      arr.push(i);
    }
    return arr;
  };

  $scope.firstDay = function() {
    return new Date($scope.year, $scope.month, 1);
  };

  $scope.previousMonth = function() {
    if ($scope.month === 0) {
      $scope.month = 11;
      $scope.year = $scope.year - 1;
    }
    else {
      $scope.month = $scope.month - 1;
    }
    $scope.updateCalendar();
  };

  $scope.nextMonth = function() {
    if ($scope.month === 11) {
      $scope.month = 0;
      $scope.year = $scope.year + 1;
    }
    else {
      $scope.month = $scope.month + 1;
    }
    $scope.updateCalendar();
  };

  $scope.setDate = function(year, month, day) {
    $scope.selectedDate = new Date(year, month, day);
  }

  $scope.updateCalendar = function() {
    $scope.startDayOfMonth($scope.month, $scope.year);
    $scope.daysInMonth($scope.month, $scope.year);
    $scope.daysList($scope.month, $scope.year);
    $scope.numberOfWeeks();
  };

  $scope.displayDate = function(day) {
    alert('Date is ' + $scope.month + '/' + day + '/' + $scope.year);
  };

  $scope.displayToday = function() {
    $scope.month = $scope.today.getMonth();
    $scope.year = $scope.today.getFullYear();
  };
});
app.directive('calendar', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/cal.html'
  };
});