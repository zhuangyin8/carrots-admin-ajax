/**
 *
 */
angular.module('admin')
    .controller('RoleCtrl', function ($state, $scope, $rootScope, $cookies, commonUtil, roleService) {
        var vm = $scope.vm = {};
        roleService.getRoleList().then(function (res) {
            if (res.data.code == 0) {
                vm.page = {
                    next: res.data.data.next || 0,
                    size: res.data.data.size || 0,
                    page: res.data.data.page || 0,
                    total: res.data.data.total || 0
                };

                roleService.batchGetRole(res.data.data.ids).then(function (res) {
                    if (res.data.code == 0) {

                        $scope.vm.list = res.data.data.roleList;
                    } else {
                        commonUtil.showErrMsg(res);
                    }
                });
            } else {
                commonUtil.showErrMsg(res);
            }
        });


        vm.delete = function (id) {
            $rootScope.confirm("您确定要删除吗？", function () {
                roleService.deleteRole(id).then(function (res) {
                    commonUtil.showReturnMsg(res, "field.role");
                });
            });
        };
    });