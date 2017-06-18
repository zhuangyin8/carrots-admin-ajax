/**
 *
 */
angular.module('admin')
    .controller('positionDetailCtrl', function ($scope, $state, $rootScope, infoManagementService, commonUtil, categoryData) {
        var vm = this;
        vm.params = {};
        vm.params.companyName = $state.params.companyName;
        vm.params.companyId = $state.params.companyId;
        vm.positionTags = [];
        vm.categoryData = categoryData;
        console.log(vm.categoryData);

        // 通过ng-change获取选中id
        vm.subCategoryFn = function (id) {
            delete vm.params.subCategory;
            if (id !== "") {
                // 获取二级联动中二级的数据
                vm.subCategoryData = commonUtil.getSubCategoryFn(id);
                console.log(vm.subCategoryData);
            }
            else {
                delete vm.subCategoryData;
            }
        };

        //获取公司福利标签列表
        infoManagementService.getCompanyTags($state.params.companyId).then(function (res) {
            vm.Multiselect = commonUtil.companyTags(res.data.tags);
            console.log(vm.Multiselect);
            // 判断新增 or 编辑
            // 新增
            if ($state.params.id === undefined) {
                vm.save = function () {
                    infoManagementService.postPosition(vm.params, vm.positionTags).then(function (res) {
                            if (res.data.code === 0) {
                                $state.go("field.positionList", {
                                    companyId: vm.params.companyId,
                                    companyName: vm.params.companyName
                                }, {reload: true});
                            }
                            else {
                                $rootScope.alert(res.data.message)
                            }
                        }
                    )
                }
            }
            // 编辑
            else {
                infoManagementService.getPositionDetail($state.params.id).then(function (res) {
                    if (res.data.code === 0) {
                        console.log(res.data.data);
                        var record = res.data.data;
                        vm.params = res.data.data;
                        vm.params.id = $state.params.id;

                        // 获取二级联动中二级的数据
                        vm.subCategoryData = commonUtil.getSubCategoryFn(vm.params.category);

                        //匹配公司标签和职位标签，设置默认选中
                        vm.Multiselect = vm.Multiselect.map(function (item) {
                            if (record.tags.some(function (itemtext) {
                                    return (item.name === itemtext.tag)
                                })) {
                                item.check = true;
                                return item
                            } else {
                                return item
                            }
                        });

                        // 数据处理
                        vm.positionTags = record.tags.map(function (item) {
                            return item.tag
                        });

                        // 保存
                        vm.save = function () {
                            infoManagementService.putPosition(vm.params, vm.positionTags, vm.params.id).then(function (res) {
                                if (res.data.code === 0) {
                                    $state.go("field.positionList", {
                                        companyId: vm.params.companyId,
                                        companyName: vm.params.companyName
                                    }, {reload: true});
                                } else {
                                    $rootScope.alert(res.data.message);
                                }
                            })
                        }
                    }
                    else {
                        $rootScope.alert(res.data.message)
                    }
                })
            }
        });
        //标签点击取值
        vm.checkboxMulti = commonUtil.checkboxMulti;

    });