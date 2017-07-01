/**
 *
 */
angular.module('admin')
    .controller('positionListCtrl', function ($scope, $state, $rootScope, infoManagementService, commonUtil) {
        var vm = this;
        vm.searchParams = $state.params;

        //初始化转换日期
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        //获取数据

        infoManagementService.PositionList(vm.searchParams).then(function (res) {
            console.log(res);
            if (res.data.code === 0) {
                vm.total = res.data.total;
                vm.PositionList = res.data.data;
            } else {
                $rootScope.alert(res.data.message);
            }
            if (vm.total === 0) {
                vm.warning = "没有符合此条件的数据";
            }
        });
        //上下架
        vm.changeStatus = function (status, id) {
            switch (true) {
                case status === 1:
                    // 下架
                    $rootScope.operationConfirm("下架后该职位将不在前台展示。", "是否执行下架操作？", function () {
                        status = commonUtil.statusReversal(status);
                        // 发送下架请求
                        infoManagementService.putPositionstatus(status, id).then(function (res) {
                            if (res.data.code === 0) {
                                $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});
                                $rootScope.alert("已成功下架", function () {
                                })
                            } else {
                                $rootScope.alert(res.data.message)
                            }
                        })
                    });
                    break;
                case status === 0:
                    // 上架
                    $rootScope.operationConfirm("上架后该职位将在前台展示。", "是否执行上架操作？", function () {
                        status = commonUtil.statusReversal(status);
                        // 发送上架请求
                        infoManagementService.putPositionstatus(status, id).then(function (res) {
                            if (res.data.code === 0) {
                                $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});
                                $rootScope.alert("已成功上架", function () {
                                })
                            }
                            else {
                                if (res.data.code === -6511) {
                                    $rootScope.alert("如要上架职位.请先解冻职位所属公司")
                                }
                                else {
                                    $rootScope.alert(res.data.message)
                                }
                            }
                        })
                    })
            }
        };

        //删除
        vm.deletePosition = function (id, index) {
            $rootScope.operationConfirm("您确定删除这条数据?", "你确定要执行删除操作吗？", function () {
                // 发送删除请求
                infoManagementService.deletePosition(id).then(function (res) {
                    if (res.data.code === 0) {
                        vm.PositionList.splice(index, 1);
                        $rootScope.alert("已成功删除", function () {
                        })
                    }
                    else {
                        $rootScope.alert(res.data.message)
                    }
                })
            })
        }
    });