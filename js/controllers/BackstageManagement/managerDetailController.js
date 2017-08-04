/**
 *
 */
angular.module('admin')
    .controller('ManagerDetailCtrl', function ($state, $scope, $rootScope, commonUtil, managerService, roleService) {
        var vm = $scope.vm = {};
        vm.id = $state.params.id;


        var roleParam = {size: 65535};

        $scope.roleList = {};

        managerService.getManager(vm.id).then(function (res) {
            vm.data = res.data.data.manager;
        });

        roleService.getRoleList(roleParam).then(function (res) {
            if (res.data.code == 0) {
                roleService.batchGetRole(res.data.data.ids).then(function (res) {
                    if (res.data.code == 0) {
                        vm.roleList = res.data.data.roleList;
                        console.log(vm.roleList)
                    } else {
                        commonUtil.showErrMsg(res);
                    }
                });
            } else {
                commonUtil.showErrMsg(res);
            }
        });


        vm.saveOrUpdate = function () {
            managerService.saveOrUpdateManager(vm.id, vm.data, "field.manager");
        }
    });