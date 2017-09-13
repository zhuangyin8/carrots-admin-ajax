/**
 *
 * 配置项目的路由，使之可以在多个页面中做单页面跳转(配置路由)
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @param $ocLazyLoadProvider
 * @param $locationProvider
 */

function projectRouteConfig(
    $stateProvider, $urlRouterProvider, $ocLazyLoadProvider,
    $locationProvider) {
    var _lazyLoad = function(loaded) {
        return function($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {
                serie: true,
            });
        };
    };
    //按需加载
    $ocLazyLoadProvider.config({
        debug: false,
        //debug: $ocLazyLoad returns a promise that will be rejected when there is an error but if you set debug to true, $ocLazyLoad will also log all errors to the console.

        //debug：$ ocLazyLoad 返回一个 promise对象，当有错误时将拒绝，但是如果将debug设置为true，$ ocLazyLoad也会将所有错误记录到控制台。
        events: true,
        //events: $ocLazyLoad can broadcast an event when you load a module, a component or a file (js/css/template).
        // It is disabled by default, set events to true to activate it. The events are  ocLazyLoad.moduleLoaded,
        // ocLazyLoad.moduleReloaded, ocLazyLoad.componentLoaded, ocLazyLoad.fileLoaded.

        //事件：$ ocLazyLoad可以在加载模块，组件或文件（js / css / template）时广播事件。默认情况下禁用，将事件设置为true以将其激活。事件是
        // ocLazyLoad.moduleLoaded, ocLazyLoad.moduleReloaded, ocLazyLoad.componentLoaded, ocLazyLoad.fileLoaded.

        // modules: predefine the configuration of your modules for a later use. You will have to specify the name of the module here so that we can find the reference later.
        // 模块：预先定义模块的配置以备以后使用。您必须在此处指定模块的名称，以便稍后找到该参考。
    });

    //更改url格式配置为html5，去掉#号
    // $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/dashboard');
    // $urlRouterProvider.otherwise('/login');
    //在浏览器地址栏输入的路径没有匹配的路由的时候，跳转(重定向)到一个默认的路径,用来配置非 $state 的额外的默认路由

    //$state.go 函数可以将状态位置强行切换
    $stateProvider.state('field', {
        url: '',
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        //在$stateProvider 中对应的state里面配置controller，当这种state被激活，就会调用对应的函数了
        abstract: true,
        // true 表明此状态不能被显性激活，只能被子状态隐性激活
        resolve: {
            loadMyFile: _lazyLoad([
                'js/controllers/admin/mainController.js',
                'js/directives/ptteng-sidebar/ptteng-sidebar-0.0.1.js',//侧边栏
                'js/directives/searchParams/search-params.js',//搜索和清空
                'js/directives/ptteng-user/ptteng-user-0.0.1.js',//用户信息
                'page',//分页
                'js/directives/numberic/numberic.js'//@
            ]),
        },
    })
    /**
     * 后台
     */.state('field.dashboard', {
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
    })

    /**
     * 登录
     */.state('login', {
        url: '/login',
        templateUrl: 'views/admin/login.html',
        controller: 'LoginController',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad('js/controllers/admin/loginController.js'),
        },
    })

    /**
     * 用户管理
     */.state('field.manager', {
        url: '/manager?page',
        templateUrl: 'views/BackstageManagement/manager.html',
        controller: 'ManagerCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/managerController.js'),
        },
    })
    /**
     * 用户新增
     */.state('field.managerDetail', {
        url: '/managerDetail/:id',
        templateUrl: 'views/BackstageManagement/managerDetail.html',
        controller: 'ManagerDetailCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/managerDetailController.js'),
        },
    })
    /**
     * 角色列表
     */.state('field.role', {
        url: '/role/:page',
        templateUrl: 'views/BackstageManagement/role.html',
        controller: 'RoleCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/roleController.js'),
        },
    })
    /**
     * 角色新增
     */.state('field.roleDetail', {
        url: '/roleDetail/:id',
        templateUrl: 'views/BackstageManagement/roleDetail.html',
        controller: 'RoleDetailCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/roleDetailController.js'),
        },
    })
    /**
     * 模块管理
     */.state('field.module', {
        url: '/module?page&size',
        templateUrl: 'views/BackstageManagement/module.html',
        controller: 'ModuleCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/moduleController.js'),
        },
    })
    /**
     * 模块新增/编辑
     */.state('field.moduleDetail', {
        url: '/moduleDetail/:id',
        templateUrl: 'views/BackstageManagement/moduleDetail.html',
        controller: 'ModuleDetailCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/moduleDetailController.js'),
        },
    })
    /**
     * 密码修改
     */.state('field.pwd', {
        url: '/pwd',
        templateUrl: 'views/BackstageManagement/pwdSetting.html',
        controller: 'PwdCtrl',
        resolve: {
            loadMyFile: _lazyLoad(
                'js/controllers/BackstageManagement/pwdController.js'),
        },
    })
    /**
     * 新添操作记录
     */
    .state('field.operatingRecord', {
        url: '/operatingRecord/:operateStart/:operateEnd/:managerName/:operate/:roleID',
        templateUrl: 'views/admin/operatingRecord.html',
        controller: 'operatingRecordCtrl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad('js/controllers/admin/operatingRecordCtrl.js')
        }
    })
    /**
     * 操作记录详情
     */
    .state('field.recordDetail', {
        url: '/recordDetail/:id',
        templateUrl: 'views/admin/recordDetail.html',
        controller: 'recordDetailCtrl',
        controllerAs: 'vm',
        resolve: {
            loadMyFile: _lazyLoad('js/controllers/admin/recordDetailCtrl.js')
        }
    })

    /**
     * 信息管理
     */
    // 公司列表
        .state('field.companyList', {
            url: '/companyList/:page/:size?name&product&province&city&county&financing&freezed&approved&industry',
            templateUrl: 'views/InformationManagement/companyList.html',
            controller: 'companyListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'area-selcet',
                    'js/constant/areaConstant.js',
                    'js/controllers/InformationManagement/companyList.js']),
            },
        })
        // 公司详情
        .state('field.companyDetail', {
            url: '/companyDetail?companyId&province&county&city',
            templateUrl: 'views/InformationManagement/companyDetail.html',
            controller: 'companyListDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/InformationManagement/companyDetail.js',
                    'area-selcet',
                    'js/directives/isteven-multi-select/isteven-multi-select.js',
                    'js/directives/isteven-multi-select/isteven-multi-select.css']),
            },
        })
        // 职位列表
        .state('field.positionList', {
            url: '/positionList/:page/:size?companyId&companyName&name&experience&startAt&endAt&education&compensation&status&subCategory&category',
            templateUrl: 'views/InformationManagement/positionList.html',
            controller: 'positionListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    ['js/controllers/InformationManagement/positionList.js']),
            },
        })
        // 职位详情
        .state('field.positionDetails', {
            url: '/positionDetails?id&companyId&companyName',
            templateUrl: 'views/InformationManagement/positionDetails.html',
            controller: 'positionDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad(
                    'js/controllers/InformationManagement/positionDetail.js'),
            },
        })

        /**
         * Article 管理
         */
        //Article列表
        .state('field.articleList', {
            url: '/articleList/:page/:size?category&name&createBy&startAt&endAt&type&status',
            templateUrl: 'views/ContentManagement/articleList.html',
            controller: 'articleListCtrl',
            controllerAs: 'vm',
            resolve: {
                loadMyFile: _lazyLoad([
                    'js/controllers/ContentManagement/articleList.js',
                ]),
            },
        })
        //根据传递过来的参数是否带有 id 判断 --> article新增|编辑
        .state('field.articleDetail', {
            url: '/articleDetail?id',
            templateUrl: 'views/ContentManagement/articleDetail.html',
            controller: 'articleDetailCtrl',
            controllerAs: 'vm',
            resolve: {
                //懒加载多个文件 要加中括号
                loadMyFile: _lazyLoad([
                    'js/controllers/ContentManagement/articleDetail.js',
                    'metaUmeditor',
                ]),
            },
        });
}


