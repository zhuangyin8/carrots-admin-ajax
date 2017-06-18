/**
 *
 */
angular.module('admin').controller('MainController', ['$rootScope', MainController]);

function MainController($rootScope) {
    var vm = this;

    if (!$rootScope.permissionSet && localStorage["permissionsSet"]) {
        $rootScope.permissionSet = JSON.parse(localStorage["permissionsSet"]);
    }

    Array.prototype.in_array = function (e) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == e)
                return true;
        }
        return false;
    };

    // 点击按钮,换肤
    vm.skinChangeBtn = function (cssName) {
        localStorage.cssName = cssName;
        var name = "css/SBAdmin/" + (cssName || 'orange') + ".css";
        $("#skin").attr("href", name);
    };
}

/**
 * The $interval Service The $interval service is AngularJS' version of the window.setInterval function.
 * $ interval服务 $ interval服务是AngularJS的window.setInterval函数的版本。
 */
// angular.module('admin')
//     .controller('timeCtrl', function ($scope, $interval) {
//         $scope.theTime = new Date().toLocaleTimeString();
//         $interval(function () {
//             $scope.theTime = new Date().toLocaleTimeString();
//         }, 1000);
//     });
