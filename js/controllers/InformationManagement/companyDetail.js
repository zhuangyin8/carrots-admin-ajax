/**
 *
 */

angular.module('admin')
    .controller('companyListDetailCtrl', function (commonUtil, companyIndustryGroup, $scope, uploadService, FileUploader, $state, $rootScope, infoManagementService) {
        var vm = this;
        vm.data = {};
        vm.area = {};
        vm.data.company = {};
        vm.data.productList = [];

        // 公司行业多选数据
        vm.companyIndustryGroup = companyIndustryGroup;
        // 从url中获取值
        vm.companyId = $state.params.companyId;

        // 能否重复上传同一张图片，默认为false，可以如此覆盖 true|false
        FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
            return true;
        };

        //图片上传1
        vm.uploader1 = uploadService.uploadFile(FileUploader);
        vm.uploader1.onSuccessItem = function (fileItem, response, status, headers) {
            if (status === 200) {
                vm.data.company.logo = response.data.url;
            }
        };
        //图片上传2
        vm.uploader2 = uploadService.uploadFile(FileUploader);
        vm.uploader2.onSuccessItem = function (fileItem, response, status, headers) {
            if (status === 200) {
                vm.data.productList[0].logo = response.data.url;
            }
        };
        //图片上传3
        vm.uploader3 = uploadService.uploadFile(FileUploader);
        vm.uploader3.onSuccessItem = function (fileItem, response, status, headers) {
            if (status === 200) {
                vm.data.company.map = response.data.url;
            }
        };

        //显示编辑页面
        if (vm.companyId) {
            // 请求数据
            infoManagementService.getCompanyDetail(vm.companyId).then(function (res) {
                if (res.data.code === 0) {
                    vm.data = res.data.data;
                    // 省市区数据转换
                    commonUtil.areaTransform(vm.area, vm.data.company, 0);
                    // 公司行业数据转换为下拉多选数据
                    commonUtil.companyIndustryTransform(companyIndustryGroup, vm.data.industryList);
                }
            });
        }
        // 显示新增页面
        else if (!vm.companyId) {
        }

        // 新增/编辑 操作
        vm.newCompany = function () {
            // 新增操作
            if (!vm.companyId) {
                // 省市区数据转换
                commonUtil.areaTransform(vm.data.company, vm.area, 1);
                // 下拉多选数据 转换为 公司行业数据
                vm.data.industryList = commonUtil.selectIndustryListTransform(vm.data.industryList, vm.selectedIndustryGroup);
                // 新增公司详情
                infoManagementService.addCompany(vm.data).then(function (res) {
                    if (res.data.code === 0) {
                        $state.go("field.companyList", {}, {reload: true});
                    } else {
                        $rootScope.alert(res.data.message)
                    }
                });
            }
            // 编辑操作
            else if (vm.companyId) {
                // 省市区数据转换
                commonUtil.areaTransform(vm.data.company, vm.area, 1);
                // 下拉多选数据 转换为 公司行业数据
                vm.data.industryList = commonUtil.selectIndustryListTransform(vm.data.industryList, vm.selectedIndustryGroup);
                infoManagementService.editCompany(vm.companyId, vm.data).then(function (res) {
                    if (res.data.code === 0) {
                        $state.go("field.companyList", {}, {reload: true});
                    } else {
                        $rootScope.alert(res.data.message)
                    }
                });
            }
        };

        // 新增标签
        vm.isTagValid = true;
        vm.addTag = function () {
            var tagObj = {"tag": vm.tag};
            vm.data.tagList = vm.data.tagList || [];
            // 判断新增标签是否为空，是否有重复
            if (!commonUtil.isNone(vm.tag) && commonUtil.isRepeat(tagObj, vm.data.tagList)) {
                // 新增标签
                vm.data.tagList.push(tagObj);
                vm.isTagValid = true;
            }
            else {
                // 报错
                vm.isTagValid = false
            }
        };

        // 删除标签
        vm.delTag = function (index) {
            vm.data.tagList.splice(index, 1);
        };
    });