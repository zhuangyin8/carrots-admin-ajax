/**
 *
 */

angular.module('admin')
    .directive('sidebar', function () {
        return {
            templateUrl: 'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.html',
            restrict: 'E',
            replace: true,
            scope: {},
            //在指令中加上scope:{},就能把它的作用域独立出来啦！每用一次指令都会有一个不同的作用域哟
            controller: function ($http, $scope, $rootScope, $state, $location, roleService, managerService, moduleService, recordCookies, commonUtil) {

                var self = managerService.getSelfDetail();

                if (self == undefined) {
                    $rootScope.alert("您还未登录", function () {
                        $state.go("login");
                    });
                    return false;
                } else {
                    $rootScope.uid = self.role.id;
                }

                roleService.getRole(self.role.id).then(function (res) {
                    if (res.data.code == 0) {
                        var moduleIDs = Object.keys(res.data.data.role.permissionsSet);
                        // console.log("save permission set");

                        //将后台接口返回的数据转化为 JSON 字符串
                        // localStorage["permissionsSet"] = JSON.stringify(res.data.data.role.permissionsSet);
                        //将JSON 字符串转化为JSON
                        // $rootScope.permissionsSet = JSON.parse(localStorage["permissionsSet"]);

                        //深拷贝
                        $rootScope.permissionsSet = JSON.parse(JSON.stringify(res.data.data.role.permissionsSet))

                        if (sessionStorage.mineSide == '' || sessionStorage.mineSide == undefined) {
                            moduleService.batchGetModule(moduleIDs).then(function (res) {
                                if (res.data.code == 0) {
                                    $scope.sideList = commonUtil.buildTree(res.data.data.moduleList);
                                    // 刷新时的高亮标识
                                    //markLightFromUrl();
                                }
                            });
                        } else {
                            //将侧边栏数据存储在 sessionStorage中,转换为JSON 数据
                            //JSON.parse()  将一个字符串解析为JSON，可选地转换生成的值及其属性，并返回值。
                            $scope.sideList = JSON.parse(sessionStorage["mineSide"]);
                        }
                    }
                });

                //$scope.collapseVar = -1;
                //
                //$scope.getUrl = function (n) {
                //    recordCookies({moduleID: n.id});
                //    $scope.currentUrl = n.url;
                //    $rootScope.permissionSet = JSON.parse(localStorage["permissionsSet"]);
                //    var moduleId = n.id;
                //    var modulePermission = $rootScope.permissionSet[moduleId];
                //    console.log(n.id);
                //    $rootScope.globalPermission = {
                //        created: modulePermission.in_array("create"),
                //        updated: modulePermission.in_array("update"),
                //        deleted: modulePermission.in_array("delete"),
                //        sorted: modulePermission.in_array("sort")
                //    };
                //    console.log($rootScope.globalPermission);
                //
                //};
                //$scope.getUrl();
                //function markLightFromUrl() {
                //    console.log($scope.sideList);
                //    angular.forEach($scope.sideList, function(items, index) {
                //        angular.forEach(items.nodes, function(item, i) {
                //
                //
                //
                //            var stateName = $state.current.name;
                //            var itemParam = item.url.match(/\{[^\)]+\}/g);
                //
                //            //if (items.id == 103) {
                //            //    console.log($state.params,item.name,item.url.indexOf(stateName), itemParam);
                //            //}
                //
                //
                //            if (item.url.indexOf(stateName) > -1 && !itemParam && !($state.params.grade && $state.params.status)) {
                //
                //                // 展开项
                //                $scope.collapseVar = index;
                //                // 普通已选子菜单
                //                item.selected = true;
                //                recordCookies({moduleID: item.id});
                //                var modulePermission = $rootScope.permissionSet[item.id];
                //
                //                $rootScope.globalPermission = {
                //                    created :modulePermission.in_array("create"),
                //                    updated : modulePermission.in_array("update"),
                //                    deleted : modulePermission.in_array("delete"),
                //                    sorted  : modulePermission.in_array("sort")
                //                };
                //                console.log(item.id);
                //                console.log($rootScope.globalPermission);
                //
                //                return false;
                //
                //            } else if (item.url.indexOf(stateName) > -1 && !!itemParam) {
                //
                //                // 展开项
                //                $scope.collapseVar = index;
                //                // 特殊已选子菜单,老师和测验的路由状态一致，因此需要通过参数来进行对比判断
                //                // 安排课程也带有参数，因此也放入其中判断
                //                specialRules(item, itemParam);
                //                if (item.selected == true) {
                //                    //alert(123);
                //                    //alert(item.id);
                //                    recordCookies({moduleID: item.id});
                //                    var moduleId = item.id;
                //                    var modulePermission = $rootScope.permissionSet[moduleId];
                //                    //console.log(modulePermission.in_array("create"));
                //
                //                    $rootScope.globalPermission = {
                //                        created :modulePermission.in_array("create"),
                //                        updated : modulePermission.in_array("update"),
                //                        deleted : modulePermission.in_array("delete"),
                //                        sorted  : modulePermission.in_array("sort")
                //                    }
                //                    console.log(item.id);
                //                    console.log($rootScope.globalPermission);
                //                }
                //
                //                return false;
                //
                //            }
                //
                //
                //        })
                //    })
                //}


                /**
                 * 刷新后,自动选中刷新前的侧边栏
                 * @param id
                 */
                $scope.sideClick = function (id) {
                    var stopId = '';
                    angular.forEach($scope.sideList, function (items, index) {
                        angular.forEach(items.nodes, function (item) {
                            if (id == item.id) {
                                $scope.collapseVar = index;
                                item.selected = true;
                                items.se = true;
                                //stopid值是记录了之前展开的模块id
                                stopId = items.id;
                            } else if (stopId != items.id) {
                                item.selected = false;
                                items.se = false;
                            } else if (id != item.id && stopId == items.id) {
                                item.selected = false;
                            }
                        })
                    });
                    console.log($scope.sideList);
                    //JSON.stringify() 返回与指定值相对应的一个JSON字符串，可选地仅包含某些属性或以用户定义的方式替换属性值。
                    sessionStorage.mineSide = JSON.stringify($scope.sideList);
                };

                /**
                 * ?
                 * @param item
                 * @param itemParam
                 * @returns {boolean}
                 */
                // function specialRules(item, itemParam) {
                //
                //     var itemParamString = itemParam[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ');
                //     var itemParamJSON = JSON.parse(itemParamString);
                //
                //     if ($state.current.name == 'field.teacherList' && itemParamJSON.grade != undefined) {
                //
                //         if ($state.params.status == 0 && itemParamJSON.status == 0) {
                //             item.selected = true;
                //             return false;
                //         } else if ($state.params.status == 1 && itemParamJSON.status != 0 && $state.params.grade == itemParamJSON.grade) {
                //             item.selected = true;
                //             return false;
                //         }
                //
                //     } else if ($state.current.name == 'field.testList' && itemParamJSON.qtype != undefined) {
                //         if ($state.params.qtype == itemParamJSON.qtype) {
                //             item.selected = true;
                //             return false;
                //         }
                //     } else if ($state.current.name == 'field.lessonSchedule') {
                //         item.selected = true;
                //         return false;
                //     }
                // }
            }
        }
    });
