'use strict';
angular.module('admin')
    .controller('ManagerCtrl', function ($state, $scope, $rootScope, $cookies, commonUtil, managerService, roleService) {
        var vm = $scope.vm = {};
        $scope.rid_role = {};
        vm.roleList = [];
        var roleParam = {size: 65535};


        function getRoleList(rids) {
            //批量获取角色详细信息
            roleService.batchGetRole(rids).then(function (res) {
                angular.forEach(res.data.data.roleList, function (data, index, array) {
                    $scope.rid_role[data.id] = data;
                });
                angular.forEach(vm.list, function (data, index, array) {
                    data.role = $scope.rid_role[data.roleID];
                });
            });
        }

        function getManagerList() {
            managerService.getManagerList().then(function (res) {
                if (res.data.code == 0) {
                    vm.page = {
                        next: res.data.data.next || 0,
                        size: res.data.data.size || 0,
                        page: res.data.data.page || 0,
                        total: res.data.data.total || 0
                    };
                    managerService.batchGetManager(res.data.data.ids).then(function (res) {
                        if (res.data.code == 0) {
                            vm.list = res.data.data.managerList;
                            var rids = [];

                            angular.forEach(res.data.data.managerList, function (data, index, array) {
                                rids.push(data.roleID);
                            });
                            getRoleList(rids);
                        } else {
                            commonUtil.showErrMsg(res);
                        }
                    });

                } else {
                    commonUtil.showErrMsg(res);
                }
            });
        }

        getManagerList();

        vm.delete = function (id) {
            $rootScope.confirm("您确定要删除吗？", function () {
                managerService.deleteManager(id).then(function (res) {
                    commonUtil.showReturnMsg(res, "field.manager");
                });
            });
        };


        roleService.getRoleList(roleParam).then(function (res) {
            if (res.data.code == 0) {
                roleService.batchGetRole(res.data.data.ids).then(function (res) {
                    if (res.data.code == 0) {
                        vm.roleList = res.data.data.roleList;
                        vm.total = res.data.data.total;
                        vm.roleList.push({id: -1, name: "全部角色"});
                        console.log(vm.roleList)
                    } else {
                        commonUtil.showErrMsg(res);
                    }
                    // if (vm.total === 0) {
                    //     // $rootScope.alert("没有符合此条件的数据");//弹出警告框
                    //     vm.warning = "没有符合此条件的数据";
                    // }
                });
            } else {
                commonUtil.showErrMsg(res);
            }
        });

        // search
        vm.rid = {};
        vm.search = function () {
            if (vm.rid < 0) {
                getManagerList();
            } else {
                searchManager(vm.rid);
            }
        };

        // init
        function searchManager(param) {
            roleService.getRoleManager(param).then(function (res) {
                if (res.data.code == 0) {
                    managerService.batchGetManager(res.data.data.ids).then(function (res) {
                        if (res.data.code == 0) {
                            vm.list = res.data.data.managerList;
                            getRoleList([param]);
                        } else {
                            commonUtil.showErrMsg(res);
                        }
                    })
                } else {
                    commonUtil.showErrMsg(res);
                }
            });
        }
    });