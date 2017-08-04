/**
 *
 */
angular.module('admin')
    .controller('RoleDetailCtrl', function ($state, $scope, $rootScope, commonUtil, roleService, managerService, moduleService) {
        var vm = $scope.vm = {};
        vm.id = $state.params.id;
        vm.moduleList = [];
        vm.permissionsSet = [];
        vm.mid_module = {};


        var selectedData = function () {
            var result = {};
            angular.forEach(vm.moduleList, function (data, index, array) {
                angular.forEach(data.nodes, function (data, index, array) {
                    if (data.use) {
                        var selectedAction = [];
                        if (data.create) {
                            selectedAction.push('create')
                        }
                        if (data.update) {
                            selectedAction.push('update')
                        }
                        if (data.delete) {
                            selectedAction.push('delete')
                        }
                        if (data.sort) {
                            selectedAction.push('sort')
                        }
                        result[data.id] = selectedAction;
                        if (commonUtil.arrayContains(result, data.parentID)) {

                        } else {
                            result[data.parentID] = [];
                        }
                    }
                });
            });
            return result;
        };


        // view
        //if (vm.id) {
        //    roleService.getRole(vm.id).then(function (res) {
        //        if (res.data.code == 0) {
        //            vm.name = res.data.data.role.name;
        //            console.log(vm.name)
        //        } else {
        //            commonUtil.showErrMsg(res);
        //        }
        //    });
        //}


        // 获取所有模块列表ID
        moduleService.getModuleList({size: 65535}).then(function (res) {
            if (res.data.code == 0) {
                // 根据模块列表ID，获取列表name和层级关系等信息
                moduleService.batchGetModule(res.data.data.ids).then(function (res) {
                    if (res.data.code == 0) {
                        // 拼出页面要展示的模块列表信息格式
                        vm.moduleList = commonUtil.buildTree(res.data.data.moduleList);
                        console.log(vm.moduleList);
                        if (vm.id) {
                            // 请求角色下的模块权限
                            roleService.getRole(vm.id).then(function (res) {
                                if (res.data.code == 0) {

                                    vm.name = res.data.data.role.name;
                                    vm.currentModuleList = res.data.data.role.permissionsSet;


                                    angular.forEach(vm.moduleList, function (items) {

                                        angular.forEach(items.nodes, function (item) {

                                            // 循环查找是否已选中并打上标记
                                            angular.forEach(vm.currentModuleList, function (value, key) {

                                                if (item.id == key) {
                                                    item.use = true;
                                                    item.create = value.in_array("create");
                                                    item.update = value.in_array("update");
                                                    item.delete = value.in_array("delete");
                                                    item.sort = value.in_array("sort");
                                                }
                                            })
                                        })
                                    });
                                }
                                else {

                                }
                            })
                        } else {
                            // create
                            console.log("create new role");
                        }
                    } else {
                        commonUtil.showErrMsg(res);
                    }
                })
            } else {
                commonUtil.showErrMsg(res);
            }
        });


        vm.changeAll = function () {
            var bool = vm.moduleList.$selected;

            angular.forEach(vm.moduleList, function (items) {
                items.$checked = bool;
                angular.forEach(items.nodes, function (item) {
                    item.use = bool;
                    item.create = bool;
                    item.update = bool;
                    item.delete = bool;
                    item.sort = bool;
                })
            })
        };

        vm.changeModule = function (index) {
            var bool = vm.moduleList[index].$checked;
            angular.forEach(vm.moduleList[index].nodes, function (item) {
                item.use = bool;
                item.create = bool;
                item.update = bool;
                item.delete = bool;
                item.sort = bool;
            })
        };

        vm.changeSubModule = function (pindex, index) {
            var bool = vm.moduleList[pindex].nodes[index].use;
            vm.moduleList[pindex].nodes[index].create = bool;
            vm.moduleList[pindex].nodes[index].update = bool;
            vm.moduleList[pindex].nodes[index].delete = bool;
            vm.moduleList[pindex].nodes[index].sort = bool;
        };


        vm.saveOrUpdate = function (roleId) {

            if (roleId) {
                vm.data = {
                    id: vm.id,
                    name: vm.name,
                    permissionsSet: selectedData()
                };
            }
            else {
                vm.data = {
                    name: vm.name,
                    permissionsSet: selectedData()
                };
            }
            sessionStorage.mineSide = '';
            roleService.saveOrUpdateRole(vm.id, vm.data, "field.role");
        }
    });