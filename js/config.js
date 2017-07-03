/**
 * 作为angular的全局配置和初始化文件，并引入该文件
 */


angular.module('admin', ['oc.lazyLoad', 'ui.router', 'ngCookies', 'mgcrea.ngStrap', 'angularFileUpload', 'angular-loading-bar', 'ngMessages'])
    .factory('recordCookies', recordCookies)
    .config(httpConfig)
    .config(lazyLoadConfig)
    .config(projectRouteConfig)
    .config(loadingBar)
    .run(function ($rootScope, $templateCache, $modal, $cookies, $state, $location, managerService, roleService) {
        /**
         * 默认分页参数
         */
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            //默认页面数为1
            if (toParams.page != undefined) {
                toParams.page = toParams.page || 1;
            }
            //默认每一页显示数据为10
            if (toParams.size != undefined) {
                toParams.size = toParams.size || 10;
            }
        });
        /**
         * 判断是否登录
         * @returns {boolean}
         */
        $rootScope.isLogin = function () {
            return !!$cookies.login;
        };
        /**
         * on() 将一个或多个事件的事件处理函数附加到所选元素。
         * 当状态改变成功时.
         */
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            if (!$rootScope.isLogin() && $location.path() !== "/login") {
                $state.go("login");
                return false;
            }
            if ($rootScope.isLogin() && $location.path() === "/login") {
                $state.go("field.home");
                return false;
            }
        });


        // $rootScope.$on('$viewContentLoading', function (event) {
        //     console.log('视图开始加载');
        // });
        // $rootScope.$on('$viewContentLoaded', function (event) {
        //     console.log('视图渲染完毕');
        // });

        //alert confirm notify
        /**
         *  警告框
         */
        $rootScope.alert = function (content, okFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/ptteng-alert-0.0.1.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };

        /**
         * 确认框 confirm
         */
        $rootScope.confirm = function (content, okFn, cancelFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/ptteng-confirm-0.0.1.html',
                controller: function ($scope) {
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function ($scope) {
                        typeof cancelFn == 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };
        /**
         * 职业列表-删除确认
         */
        $rootScope.operationConfirm = function (title, content, okFn, cancelFn) {
            var modal = $modal({
                html: true,
                show: false,
                templateUrl: 'views/template/operationConfirm.html',
                controller: function ($scope) {
                    $scope.title = title;
                    $scope.content = content;
                    $scope.ok = function () {
                        typeof okFn == 'function' && okFn();
                        modal.$promise.then(modal.hide);
                    };
                    $scope.cancel = function ($scope) {
                        typeof cancelFn == 'function' && cancelFn();
                        modal.$promise.then(modal.hide);
                    };
                }
            });
            modal.$promise.then(modal.show);
        };

        /**
         *  换肤功能：从本地获取已经存储皮肤
         */
        if (localStorage.cssName) {
            var name = "css/skin/" + (localStorage.cssName || 'orange') + ".css";
            $("#skin").attr("href", name)
        }
    });


// Set lazy load module
function lazyLoadConfig($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        modules: [
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js'
                ]
            },
            {
                name: 'datepicker',
                files: [
                    'js/directives/datepicker/datepicker.css',
                    'js/directives/datepicker/datepicker.js'
                ]
            },
            {
                name: 'dndLists',
                files: [
                    'vendor/angular-drag-and-drop-lists/angular-drag-and-drop-lists.js'
                ]
            },
            {
                name: 'page',
                files: [
                    'js/directives/ptteng-pagination/pagination.js'
                ]
            },
            {
                name: 'area-selcet',
                files: [
                    "js/directives/area-select/areaConstant.js",
                    "js/directives/area-select/areaSelect.js"
                ]
            },

            //上传文件
            {
                name: 'angularFileUpload',
                files: [
                    'vendor/angular-file-upload/angular-file-upload.min.js',
                    'js/directives/ptteng-uploadThumb/ptteng-uploadThumb-0.0.1.js'
                ]
            },

            //富文本编辑器
            {
                name: 'metaUmeditor',
                files: [
                    'vendor/umeditor/themes/default/css/umeditor.css',
                    'vendor/umeditor/umeditor.config.js',
                    'vendor/umeditor/umeditor.js',
                    'vendor/umeditor/lang/zh-cn/zh-cn.js',
                    'vendor/umeditor/metaUmeditor.js'
                ]
            }
        ]
    });
}

// Loader
function loadingBar(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.latencyThreshold = 200;
    cfpLoadingBarProvider.includeSpinner = false;
}


function httpConfig($httpProvider) {
    // Set x-www-form-urlencoded Content-Type
    /**
     * 如无特殊标注，所有的Post和Put操作都以Application/json 的方式提交，这样适合于复杂的模型。 一些简单的操作应注明    “application/x-www-form-urlencoded”
     */
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';//charset=utf-8
    $httpProvider.defaults.headers.patch['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';


    // Set up global transformRequest function
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };


}

function recordCookies($cookies) {
    return function (params) {
        var cookie = $cookies.records || '{"managerID":"","moduleID":"","targetID":"","operate":""}';
        cookie = JSON.parse(cookie);

        if (params) {
            var setCookies = {
                managerID: params.managerID || cookie.managerID,
                moduleID: params.moduleID || cookie.moduleID,
                operate: params.operate || cookie.operate,
                roleID: params.roleID || cookie.roleID,
                targetID: +params.targetID || cookie.targetID
            };

            if (params.operate == "POST") {
                delete setCookies.targetID;
            }
            $cookies.records = JSON.stringify(setCookies);
        } else {
            return cookie;
        }
    }
}

