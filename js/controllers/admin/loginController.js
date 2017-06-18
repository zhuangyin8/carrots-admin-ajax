/**
 *
 */
angular.module("admin").controller('LoginController', ['$rootScope', '$state', '$cookies', '$timeout', 'loginService', 'managerService', 'recordCookies', LoginController]);

function LoginController($rootScope, $state, $cookies, $timeout, loginService, managerService, recordCookies) {
    var vm = this;

    vm.submit = function () {
        var params = {
            name: vm.name,
            pwd: vm.pwd
        };

        loginService.login(params).then(function (res) {
            if (res.data.code == 0) {
                $cookies.login = "true";
                $state.go("field.dashboard");
                recordCookies({managerID: res.data.data.manager.id, roleID: res.data.data.manager.roleID});
                managerService.saveSelfDetail(res.data.data);
            } else {
                vm.errorTip = res.data.message;
                $timeout(function () {
                    vm.errorTip = "";
                }, 3000);
            }
        });
    };
}

/**
 * The $timeout Service The $timeout service is AngularJS' version of the window.setTimeout function.
 * $ timeout服务 $ timeout服务是AngularJS版本的window.setTimeout函数。
 */
