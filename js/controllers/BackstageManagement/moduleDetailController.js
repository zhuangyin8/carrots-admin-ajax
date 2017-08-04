/**
 *
 */
angular.module('admin')
    .controller('ModuleDetailCtrl', function ($state, $scope, $rootScope, commonUtil, moduleService) {
        var vm = $scope.vm = {};
        vm.id = $state.params.id;

        if (vm.id) {
            moduleService.getModule(vm.id).then(function (res) {
                if (res.data.code == 0) {
                    vm.data = res.data.data.module;
                } else {
                    commonUtil.showErrMsg(res);
                }
            });
        }
        /**
         *
         */
        vm.saveOrUpdate = function () {
            //alert(typeof ($scope.vm.data.level));
            if (typeof ($scope.vm.data.level) == 'undefined') {
                $scope.vm.data.level = 0;
            }
            else {
                $scope.vm.data.level = $scope.vm.data.level;
            }
            console.log($scope.vm.data);
            moduleService.saveOrUpdateModule($state.params.id, $scope.vm.data, "field.module");
        }
    });