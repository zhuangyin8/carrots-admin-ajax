/**
 *  分页
 */

// angular.module('admin').directive('pagination', function ($state) {
//     return {
//         restrict: 'EA',
//         templateUrl: 'js/directives/ptteng-pagination/pagination.html',
//         replace: true,
//         scope: {
//             total: '@'
//         },
//         link: function (scope, element, attrs) {
//             //当前页
//             var activePage = parseInt($state.params.page);
//             //size
//             scope.size = $state.params.size ? parseInt($state.params.size) : 10;
//             //总页数
//             var totalPage = Math.ceil(parseInt(scope.total) / scope.size);
//
//             scope.activePage = activePage;//当前页面数
//             scope.totalPage = totalPage;//总页面数
//             scope.isHaveNextPage = isHaveNextPage;//上一页
//             scope.isHavePrePage = isHavePrePage;//下一页
//             scope.pageList = getPageList();//每一页面展示数据条数
//             scope.isDisabled = isDisabled;//按钮禁用
//             scope.isActive = isActive;//按钮可用
//
//             // 当当前页面数是总页面数,没有下一页;否则,显示下一页按钮
//             function isHaveNextPage() {
//                 // if (activePage === totalPage) {
//                 //     return false;
//                 // }
//                 // return true;
//                 return activePage !== totalPage;
//             }
//
//             // 当当前页面为1,没有上一页;否则,显示下一页按钮
//
//             function isHavePrePage() {
//                 // if (activePage !== 1) {
//                 //     return true;
//                 // }
//                 // return false;
//                 return activePage !== 1;
//             }
//
//             //获得pageList
//             function getPageList() {
//                 var pageList = [];
//
//                 //...在两边
//                 // if (isHavePreDot() && isHaveNextDot()) {
//                 //     for (var i = 0; i < 5; i++) {
//                 //         pageList.push(activePage + i);
//                 //     }
//                 //     pageList.unshift("...");
//                 //     pageList.push("...");
//                 // }
//                 //
//                 // //...在最前面
//                 // if (isHavePreDot() && !isHaveNextDot()) {
//                 //     for (var i = totalPage - 4; i <= totalPage; i++) {
//                 //         pageList.push(i);
//                 //     }
//                 //     pageList.unshift("...");
//                 // }
//                 //
//                 // //...在最后面
//                 // if (!isHavePreDot() && isHaveNextDot()) {
//                 //
//                 //     if (totalPage > 5) {
//                 //         for (var i = 0; i < 5; i++) {
//                 //             pageList.push(activePage + i);
//                 //         }
//                 //     } else {
//                 //         for (var i = 1; i < totalPage; i++) {
//                 //             pageList.push(i);
//                 //         }
//                 //     }
//                 //     pageList.push("...");
//                 // }
//                 //
//                 // //没有...
//                 // if (!isHavePreDot() && !isHaveNextDot()) {
//                 //
//                 //     for (var i = 1; i <= totalPage; i++) {
//                 //         pageList.push(i);
//                 //     }
//                 // }
//                 return pageList;
//             }
//
//             //是否有前面的 ...
//             // function isHavePreDot() {
//             //     if (activePage - 1 > 4) {
//             //         return true;
//             //     }
//             //     return false;
//             // }
//
//             //是否有后面的 ...
//             // function isHaveNextDot() {
//             //     if (activePage < totalPage - 4) {
//             //         return true;
//             //     }
//             //     return false;
//             // }
//
//             /**
//              * 禁用按钮
//              * @param page
//              * @returns {boolean}
//              */
//             function isDisabled(page) {
//                 // if (Number(page) === activePage || page === '...' || Number(page) > totalPage) {
//                 //     return true;
//                 // }
//                 // return false;
//                 return Number(page) === activePage || page === '...' || Number(page) > totalPage;
//             }
//
//             /**
//              * 按钮可用
//              * @param page
//              * @returns {boolean}
//              */
//             function isActive(page) {
//                 // if (page === activePage) {
//                 //     return true;
//                 // }
//                 // return false;
//                 return page === activePage;
//             }
//
//             /**
//              * 控制跳转到的页面数的合法性
//              */
//             scope.changeInput = function () {
//                 // scope.jumpPage = scope.jumpPage.replace(/[^0-9]/g, '');// 如果输入框里的输入的是非数字
//                 if (scope.jumpPage > totalPage) {
//                     scope.jumpPage = totalPage;
//                 }
//             };
//             /**
//              * 判断输入的是否是数字即数字的合法性
//              * 改变每页显示多少条数据
//              */
//             scope.changeSize = function () {
//                 // scope.size = scope.size.replace(/[^0-9]/g, '');// 如果输入框里的输入的是非数字
//                 if (parseInt(scope.size) === 0) {
//                     scope.size = 10;
//                 }
//             };
//
//             /**
//              * 数字输入框里输入数字,跳转到页面数之后刷新
//              * @param page
//              */
//             scope.goPage = function (page) {
//                 if (isDisabled(page)) return;
//                 $state.go($state.current, {page: page || 1, size: scope.size}, {reload: true});
//             };
//         }
//     }
// });

/**
 * 分页
 */


angular.module('admin')
    .directive('pagination', function ($state) {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/ptteng-pagination/pagination.html',
            replace: true,
            scope: {
                total: '@',
            },
            //在指令中加上scope:{},就能把它的作用域独立出来啦！每用一次指令都会有一个不同的作用域哟
            link: function (scope, element, attrs) {
                //当前页
                var activePage = parseInt($state.params.page);
                //每一页显示的列表数
                scope.size = $state.params.size ? parseInt($state.params.size) : 10;
                //总页数
                var totalPage = Math.ceil(parseInt(scope.total) / scope.size);

                scope.activePage = activePage;
                scope.totalPage = totalPage;
                scope.isHaveNextPage = isHaveNextPage;
                scope.isHavePrePage = isHavePrePage;
                scope.pageList = getPageList();
                scope.isDisabled = isDisabled;
                scope.isActive = isActive;

                //是否有下一页
                function isHaveNextPage() {
                    // if (activePage === totalPage) {
                    //     return false;
                    // }
                    // return true;
                    return !(activePage === totalPage);
                }

                //是否有上一页
                function isHavePrePage() {
                    //     if (activePage !== 1) {
                    //         return true;
                    //     }
                    //     return false;
                    return activePage !== 1;
                }

                //是否有前面的 ...
                function isHavePreDot() {
                    // if (activePage - 1 > 4) {
                    //     return true;
                    // }
                    // return false;
                    return activePage - 1 > 4;

                }

                //是否有后面的 ...
                function isHaveNextDot() {
                    // if (activePage < totalPage - 4) {
                    //     return true;
                    // }
                    // return false;
                    return activePage < totalPage - 4;
                }

                //获得pageList
                function getPageList() {
                    var pageList = [];

                    //...在两边
                    if (isHavePreDot() && isHaveNextDot()) {
                        for (var i = 0; i < 5; i++) {
                            pageList.push(activePage + i);
                        }
                        pageList.unshift('...');//在数组的开头增加一个或多个元素，并返回数组的新长度。
                        pageList.push('...');//在数组的末尾增加一个或多个元素，并返回数组的新长度。
                    }

                    //...在前面
                    if (isHavePreDot() && !isHaveNextDot()) {
                        for (var i = totalPage - 4; i <= totalPage; i++) {
                            pageList.push(i);
                        }
                        pageList.unshift('...');
                    }

                    //...在后面
                    if (!isHavePreDot() && isHaveNextDot()) {

                        if (totalPage > 5) {
                            for (var i = 0; i < 5; i++) {
                                pageList.push(activePage + i);
                            }
                        } else {
                            for (var i = 1; i < totalPage; i++) {
                                pageList.push(i);
                            }
                        }
                        pageList.push('...');
                    }

                    //没有...
                    if (!isHavePreDot() && !isHaveNextDot()) {

                        for (var i = 1; i <= totalPage; i++) {
                            pageList.push(i);
                        }
                    }

                    return pageList;
                }

                function isDisabled(page) {
                    // if (Number(page) === activePage || page === '...' || Number(page) > totalPage) {
                    //     return true;
                    // }
                    // return false;
                    return Number(page) === activePage || page === '...' || Number(page) >
                        totalPage;
                }

                function isActive(page) {
                    // if (page === activePage) {
                    //     return true;
                    // }
                    // return false;
                    return page === activePage;
                }

                scope.changeInput = function () {
                    // scope.jumpPage = scope.jumpPage.replace(/[^0-9]/g, '');
                    if (scope.jumpPage > totalPage) {
                        scope.jumpPage = totalPage;
                    }
                };

                scope.changeSize = function () {
                    // scope.size = scope.size.replace(/[^0-9]/g, '');
                    if (parseInt(scope.size) === 0) {
                        scope.size = 10;
                    }
                };

                //跳页
                scope.goPage = function (page) {
                    if (isDisabled(page)) return;
                    $state.go($state.current, {page: page || 1, size: scope.size},
                        {reload: true});
                };
            },
        };

    });