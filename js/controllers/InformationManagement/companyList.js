/**
 * 公司列表
 */
// 'use strict';
//严格模式
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
angular.module('admin')
    .controller('companyListCtrl', function ($rootScope, $scope, FileUploader, $state, uploadService, infoManagementService, commonUtil) {
        var vm = this;
        // 获取url参数
        vm.searchParams = $state.params;
        // 地址默认显示
        console.log($state.params.province);
        // 省市区数据转换
        vm.searchParams.address = commonUtil.areaDateTransform($state.params.province, $state.params.city, $state.params.county);

        // 获取公司列表
        console.log(vm.searchParams);
        infoManagementService.getCompanyList(vm.searchParams).then(function (res) {
            if (res.data.code === 0) {
                console.log(res.data.data);
                // 分页指令入参
                vm.total = res.data.total;
                vm.companyList = res.data.data;
            }
            if (vm.total === 0) {
                vm.warning = "没有符合此条件的数据";
            }
        });

        // 删除公司信息
        vm.delCompany = function (id, index) {
            $rootScope.operationConfirm("删除公司后该公司职位信息将被删除。", "你确定要执行删除操作吗？", function () {
                // 发送删除请求
                infoManagementService.delCompany(id).then(function (res) {
                    if (res.data.code === 0) {
                        vm.companyList.splice(index, 1);
                        $rootScope.alert("已成功删除", function () {
                        });
                    }
                    else {
                        $rootScope.alert(res.data.message);
                    }
                })
            })
        };

        // 冻结|解冻 公司
        vm.freezeCompany = function (id, type, status) {
            if (status === 0) {
                $rootScope.operationConfirm("冻结后该公司下的所有信息将不可用。", "是否执行冻结操作？", function () {
                    // 发送冻结请求
                    infoManagementService.changeCompanyStatus(id, type, 1).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("冻结成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
            else if (status === 1) {
                $rootScope.operationConfirm("解冻后该公司下的信息将可继续使用。", "是否执行解冻操作？", function () {
                    // 发送解冻请求
                    infoManagementService.changeCompanyStatus(id, type, 0).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("解冻成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
        };

        // 认证|解除 公司
        vm.approveCompany = function (id, type, status) {
            if (status === 0) {
                $rootScope.operationConfirm("认证后该公司将被标记为推荐公司。", "是否执行认证操作？", function () {
                    // 发送认证请求
                    infoManagementService.changeCompanyStatus(id, type, 1).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("认证成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
            else if (status === 1) {
                $rootScope.operationConfirm("解除认证后该公司将不再标记为推荐公司。", "是否执行解除操作？", function () {
                    // 发送解除认证请求
                    infoManagementService.changeCompanyStatus(id, type, 0).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {reload: true});
                            $rootScope.alert("解除成功", function () {
                            })
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
        }
    });