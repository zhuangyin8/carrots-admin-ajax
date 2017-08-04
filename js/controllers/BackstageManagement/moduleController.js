/**
 *
 */
angular.module('admin')
    .controller('ModuleCtrl', function ($state, $scope, $rootScope, $cookies, commonUtil, moduleService, roleService) {
        var vm = $scope.vm = {};


        moduleService.getModuleList().then(function (res) {
            if (res.data.code === 0) {
                vm.total = res.data.data.total;
                vm.size = 100;
                moduleService.batchGetModule(res.data.data.ids).then(function (res) {
                    $scope.vm.list = res.data.data.moduleList;
                })
            } else {

                commonUtil.showErrMsg(res);
            }
        });


        vm.delete = function (id) {
            $rootScope.confirm("您确定要删除吗？", function () {
                moduleService.deleteModule(id).then(function (res) {
                    commonUtil.showReturnMsg(res, "field.module");
                });
            });
        };
    });