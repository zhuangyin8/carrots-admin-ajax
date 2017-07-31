'use strict';

angular.module('admin')
    .directive('user',function(){
        return {
            templateUrl:'js/directives/ptteng-user/ptteng-user-0.0.1.html',
            restrict: 'E',
            replace: true,
            scope: {},
            controller: function($scope, $state, $cookies, loginService, managerService) {
                $scope.user=managerService.getSelfDetail();
                $scope.logout = function() {
                    loginService.logout().then(function(res) {
                        if (res.data.code == 0) {
                            delete $cookies["login"];
                            delete $cookies["record"];
                            sessionStorage.mineSide='';
                            managerService.clearSelfDetail();
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