/**
 *
 */
angular.module('admin')
    .controller('articleDetailCtrl', function ($scope, FileUploader, $state, uploadService, ArticleManagementService, $rootScope) {
        var vm = this;
        vm.params = $state.params;
        console.log(vm.params);
        //上传图片
        // 能否重复上传同一张图片，默认为false，可以如此覆盖 true|false
        FileUploader.FileSelect.prototype.isEmptyAfterSelection = function () {
            return true;
        };
        //图片上传1
        vm.uploader1 = uploadService.uploadFile(FileUploader);
        vm.uploader1.onSuccessItem = function (fileItem, response, status, headers) {
            if (status === 200) {
                vm.params.img = response.data.url;
            }
        };

        vm.clearImg = function () {
            vm.params.img = '';
            // $scope.uploader.queue = [];
        };


        // 编辑
        if (vm.params.id) {
            //查询article  ID
            ArticleManagementService.getArticle(vm.params.id).then(function (res) {
                console.log(res);
                vm.params = res.data.data.article;
            });
            //立即上线
            vm.publishArticle = function () {
                vm.params.status = 2;
                ArticleManagementService.editArticle(vm.params.id, vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('编辑成功');
                        $state.go('field.articleList');
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            };
            //存入草稿
            vm.saveArticle = function () {
                vm.params.status = 1;
                ArticleManagementService.editArticle(vm.params.id, vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('编辑成功');
                        $state.go('field.articleList');
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            };
        }
        // 新增
        else {
            //立即上线
            vm.publishArticle = function () {
                vm.params.status = 2;
                ArticleManagementService.addArticle(vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('新增成功');
                        $state.go('field.articleList');
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            };
            //存入草稿
            vm.saveArticle = function () {
                vm.params.status = 1;
                ArticleManagementService.addArticle(vm.params).then(function (res) {
                    if (res.data.code === 0) {
                        $rootScope.alert('新增成功');
                        $state.go('field.articleList');
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            };
        }
    });