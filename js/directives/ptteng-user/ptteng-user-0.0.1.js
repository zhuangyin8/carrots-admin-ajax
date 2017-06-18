/**
 *
 */
angular.module('admin')
    .directive('user', function () {
        return {
            templateUrl: 'js/directives/ptteng-user/ptteng-user-0.0.1.html',
            restrict: 'E',
            replace: true,
            scope: {},
            //在指令中加上scope:{},就能把它的作用域独立出来啦！每用一次指令都会有一个不同的作用域哟
            controller: function ($scope, $state, $cookies, loginService, managerService) {
                $scope.user = managerService.getSelfDetail();
                /**
                 * 退出
                 */
                $scope.logout = function () {
                    loginService.logout().then(function (res) {
                        if (res.data.code == 0) {
                            // 删除登陆的cookies
                            delete $cookies["login"];
                            // 删除记录的cookies
                            delete $cookies["record"];
                            sessionStorage.mineSide = '';
                            managerService.clearSelfDetail();
                            // 跳转到登陆页面
                            $state.go("login");
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                };
                /*$scope.status = {
                    isopen: false
                };
                $scope.toggleDropdown = function($event) {
                    $event.preventDefault();
                    $event.stopPropagation();
                    $scope.status.isopen = !$scope.status.isopen;
                };*/

                /*$scope.logout = function() {
                    loginService.logout().then(function(res) {
                        if (res.data.code == 0) {
                            $state.go("login");
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                };*/
            }
        }
    });