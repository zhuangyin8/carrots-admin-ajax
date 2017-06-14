/**
 * 用户可以通过改变列表排序控制前台banner图的播放顺序
 * 拖动排序，前台按顺序展示。
 */
angular.module('sortableApp', ['ui.sortable'])
    .controller('sortableController', function ($scope) {
        var vm = this;
        var tmpList = [];
        vm.articleList = tmpList;
    });
/**
 * Created by q on 2016/9/6.
 */
'use strict';
angular.module('admin')
//选择类别
    .controller('articleListCtrl', function ($scope, FileUploader, $state, ArticleManagementService, $rootScope) {
        var vm = this;
        vm.searchParams = $state.params;
        // 时间格式转换
        vm.searchParams.startAt = parseInt(vm.searchParams.startAt) || undefined;
        vm.searchParams.endAt = parseInt(vm.searchParams.endAt) || undefined;

        //获取列表
        ArticleManagementService.getArticleList(vm.searchParams).then(function (res) {
            if (res.data.code === 0) {
                vm.articleList = res.data.data.articleList;
                vm.total = res.data.data.total;
                // console.log(res);

            } else {
                $rootScope.alert(res.data.message);
            }
            /**
             * 当根据搜索条件没有符合的数据,显示提示或弹出警告框
             */
            if (vm.total === 0) {
                // $rootScope.alert("没有符合此条件的数据");
                vm.warning = "没有符合此条件的数据";
            }
        });

        // 删除
        vm.deleteArticle = function (id, index) {
            $rootScope.confirm("是否确认删除", function () {
                // 发送删除请求
                ArticleManagementService.deleteArticle(id).then(function (res) {
                    if (res.data.code === 0) {
                        vm.articleList.splice(index, 1);////从第index 位开始删除 1 个元素
                        /**
                         * splice() 方法通过删除现有元素和/或添加新元素来更改数组的内容。
                         * splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
                         * 返回值:由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
                         * 描述 :如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。
                         * 注意:splice() 方法与 slice() 方法的作用是不同的，splice() 方法会直接对数组进行修改。
                         *
                         * push / pop - 在数组末尾增/删元素；
                         * unshift / shift - 在数组首部增/删元素；
                         * concat - 把一个（或多个）数组和（或）值与原数组拼接，返回拼接后的数组。
                         */

                        $state.go($state.current, {}, {
                            reload: true
                        });
                    } else {
                        $rootScope.alert(res.data.message);
                    }
                });
            })
        };

        // // 改变状态
        // vm.changeArticleStatus = function (id, status) {
        //     // 上线
        //     if (status === 1) {
        //         $rootScope.operationConfirm("是否执行上线操作？", function () {//"上线后该图片将在轮播banner中展示。",
        //             // 发送上线请求
        //             ArticleManagementService.changeArticleStatus(id, 2).then(function (res) {
        //                 if (res.data.code === 0) {
        //                     $state.go($state.current, {}, {reload: true});
        //                     $rootScope.alert("上线成功", function () {
        //                     });
        //                 } else {
        //                     $rootScope.alert(res.data.message);
        //                 }
        //             });
        //         });
        //     }
        //     // 下线
        //     else if (status === 2) {
        //         $rootScope.operationConfirm("是否执行下线操作？", function () {//"下线后该图片将不展示站轮播banner中。",
        //             // 发送下线请求
        //             ArticleManagementService.changeArticleStatus(id, 1).then(function (res) {
        //                 if (res.data.code === 0) {
        //                     $state.go($state.current, {}, {reload: true});
        //                     $rootScope.alert("下线成功", function () {
        //                     });
        //                 } else {
        //                     $rootScope.alert(res.data.message);//弹出出错信息
        //                 }
        //             });
        //         });
        //     }
        // };

        // 改变状态
        vm.changeArticleStatus = function (id, status) {
            // 上线
            if (status === 1) {
                $rootScope.operationConfirm("", "是否执行上线操作？", function () {//上线后该图片将在轮播banner中展示。
                    // 发送上线请求
                    ArticleManagementService.changeArticleStatus(id, 2).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {
                                reload: true
                            });
                            $rootScope.alert("上线成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
            // 下线
            else if (status === 2) {
                $rootScope.operationConfirm("", "是否执行下线操作？", function () {//下线后该图片将不展示站轮播banner中。
                    // 发送下线请求
                    ArticleManagementService.changeArticleStatus(id, 1).then(function (res) {
                        if (res.data.code === 0) {
                            $state.go($state.current, {}, {
                                reload: true
                            });
                            $rootScope.alert("下线成功", function () {
                            });
                        } else {
                            $rootScope.alert(res.data.message);
                        }
                    });
                });
            }
        };
    });