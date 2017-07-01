/**
 *
 */
angular.module('admin')
    .factory('path', function (commonUtil) {
        return {
            //登录login       请求方式#地址：post # /a/login
            login: "/carrots-admin-ajax/a/login",
            //退出logout      请求方式#地址：post # /a/logout
            logout: "/carrots-admin-ajax/a/logout",

            /**
             * 用户管理
             */
            manager: function (mid) {
                if (mid == undefined || mid == "") {
                    // 用户列表
                    return "/carrots-admin-ajax/a/u/manager";
                } else {
                    // 根据ID查找用户 //修改用户 //删除用户
                    return "/carrots-admin-ajax/a/u/manager/" + mid;
                }

            },
            // 增加用户
            manager_list: "/carrots-admin-ajax/a/u/manager/",
            // 批量获取用户详细信息
            manager_multi_detail: function (params) {
                return "/carrots-admin-ajax/a/u/multi/manager" + commonUtil.concactArrayParam("ids", params);

            },
            // 修改密码
            changePwd: "/carrots-admin-ajax/a/u/pwd",
            /**
             * 角色管理
             * @param rid
             * @returns {*}
             */
            role: function (rid) {

                if (rid == undefined || rid == "") {
                    //增加角色
                    return "/carrots-admin-ajax/a/u/role";
                } else {
                    //修改角色 //删除角色
                    return "/carrots-admin-ajax/a/u/role/" + rid;
                }

            },
            //查找角色列表
            role_list: "/carrots-admin-ajax/a/u/role/",
            role_multi_detail: function (params) {
                //批量获取角色详细信息
                return "/carrots-admin-ajax/a/u/multi/role" + commonUtil.concactArrayParam("ids", params);

            },
            role_module: function (rid) {
                // 返回单个角色及权限
                return "/carrots-admin-ajax/a/u/role/" + rid + "/module"
            },
            role_manager: function (rid) {
                return "/carrots-admin-ajax/a/u/role/" + rid + "/manager"
            },
            /**
             * 模块管理
             * @param mid
             * @returns {*}
             */
            module: function (mid) {
                if (mid == undefined || mid == "") {
                    //增加模块
                    return "/carrots-admin-ajax/a/u/module";
                } else {
                    //根据ID查找模块 //修改模块 //删除模块
                    return "/carrots-admin-ajax/a/u/module/" + mid
                }
            },
            //查询模块列表
            module_list: "/carrots-admin-ajax/a/u/module/",
            //批量获取模块详细信息
            module_multi_detail: function (params) {
                return "/carrots-admin-ajax/a/u/multi/module" + commonUtil.concactArrayParam("ids", params);

            },

            /**
             * article管理
             * @param aid
             * @returns {*}
             */
            article: function (aid) {
                if (aid == undefined || aid == "") {
                    return "/carrots-admin-ajax/a/u/article";
                } else {
                    return "/carrots-admin-ajax/a/u/article/" + aid;
                }
            }
        }
    })

    /**
     *登录
     */
    // $ http服务是AngularJS应用程序中最常用的服务之一。该服务向服务器发出请求，并让您的应用程序处理响应。
    .factory('loginService', function ($http, path) {
        return {
            login: function (params) {
                return $http.post(path.login, params);
            },
            logout: function () {
                return $http.post(path.logout);
            },
            changePwd: function (params) {
                // params: id|password
                return $http.put(path.changePwd, params);
            }
        }
    })
    /**
     *修改密码
     */
    .factory('pwdService', function ($http, path, recordCookies) {
        return {

            changePwd: function (params) {
                // params: id|password
                return $http.put(path.changePwd, params);
            }


        }
    })
    /**
     * 后台管理
     */
    .factory('managerService', function ($http, path, commonUtil, recordCookies) {
        return {
            //根据ID查找用户
            getManager: function (mid) {
                return $http.get(path.manager(mid));
            },
            //增加用户
            addManager: function (params) {
                return $http.post(path.manager(), params);
            },
            //修改用户
            updateManager: function (mid, params) {
                recordCookies({targetID: mid});
                return $http.put(path.manager(mid), params);
            },
            ///删除用户
            deleteManager: function (mid) {
                recordCookies({targetID: mid});
                return $http.delete(path.manager(mid));
            },
            //用户列表
            getManagerList: function (params) {
                return $http.get(path.manager_list, commonUtil.process4Page(params)).then(function (res) {
                    return commonUtil.processPageResult(res);
                });
            },
            batchGetManager: function (params) {
                return $http.get(path.manager_multi_detail(params));
            },

            saveOrUpdateManager: function (mid, params, url) {
                recordCookies({targetID: mid});
                if (mid == undefined || mid == "") {
                    this.addManager(params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });
                } else {
                    this.updateManager(mid, params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });

                }

            },

            saveSelfDetail: function (manager) {
                localStorage["self"] = JSON.stringify(manager);

            },

            getSelfDetail: function () {

                if (localStorage["self"] === undefined) {

                    console.log("not get ptteng-pagination data ,relogin ");
                    return undefined;
                } else {

                    console.log();
                    // 将 localStorage 解析为 JSON
                    return JSON.parse(localStorage["self"]);
                }

            },
            clearSelfDetail: function () {
                localStorage["self"] = undefined;
            }


        }
    })
    /**
     * 角色管理
     */
    .factory('roleService', function ($http, path, moduleService, commonUtil, recordCookies) {
        return {
            //返回单个角色及权限
            getRole: function (rid) {
                return $http.get(path.role(rid));
            },
            //增加角色 Put  /a/u/role/{rid}
            addRole: function (params) {
                return $http({
                    url: path.role(),
                    method: "POST",
                    headers: {'Content-Type': 'application/json;charset=UTF-8'},
                    data: JSON.stringify(params),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }
                });
            },
            //修改角色 Put  /a/u/role/{rid}
            updateRole: function (rid, params) {
                recordCookies({targetID: rid});
                //return $http.put(path.role(rid), params);
                return $http({
                    url: path.role(rid),
                    method: "PUT",
                    headers: {'Content-Type': 'application/json;charset=UTF-8'},
                    data: JSON.stringify(params),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }
                });
            },
            ///删除角色 Delete  /a/u/role/{rid}
            deleteRole: function (rid) {
                recordCookies({targetID: rid});
                return $http.delete(path.role(rid));
            },
            //查找角色列表
            getRoleList: function (params) {
                return $http.get(path.role_list, commonUtil.process4Page(params)).then(function (res) {
                    return commonUtil.processPageResult(res);
                });
            },
            //返回单个角色及权限 Get  /a/u/role/{rid}/module
            getRoleModule: function (rid) {
                return $http.get(path.role_module(rid));
            },
            /**
             *
             * @param rid
             * @returns {*}
             */
            getRoleManager: function (rid) {
                return $http.get(path.role_manager(rid));
            },
            getRoleModuleDetail: function (rid) {
                var res = this.getRoleModule(rid);
                var moduleIDS = res.data;
                return moduleService.batchGetModule(moduleIDS);

            },
            batchGetRole: function (params) {
                return $http.get(path.role_multi_detail(params));
            },
            saveOrUpdateRole: function (mid, params, url) {
                recordCookies({targetID: mid});
                if (mid == undefined || mid == "") {
                    this.addRole(params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });
                } else {
                    this.updateRole(mid, params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });

                }

            }
        }
    })
    /**
     * 模块管理
     */
    .factory('moduleService', function ($http, path, commonUtil, recordCookies) {
        return {
            // 查询模块列表  请求地址：Get   /a/u/module/
            //根据ID查找模块  请求地址：Get  /a/u/module/{mid}
            getModule: function (mid) {
                return $http.get(path.module(mid));
            },
            //增加模块 请求地址：Post  /a/u/module
            addModule: function (params) {
                return $http.post(path.module(), params);
            },
            //修改模块 请求地址：Put  /a/u/module/{mid}
            updateModule: function (mid, params) {
                recordCookies({targetID: mid});
                return $http.put(path.module(mid), params);
            },
            //删除模块 请求地址：Delete  /a/u/module/{mid}
            deleteModule: function (mid) {
                recordCookies({targetID: mid});
                return $http.delete(path.module(mid));
            },
            //批量获取模块详细信息 请求地址：Get  /a/u/multi/module
            getModuleList: function (params) {
                return $http.get(path.module_list, commonUtil.process4Page(params)).then(function (res) {
                    return commonUtil.processPageResult(res);
                });
            },
            batchGetModule: function (params) {
                return $http.get(path.module_multi_detail(params));
            },

            saveOrUpdateModule: function (mid, params, url) {
                recordCookies({targetID: mid});
                if (mid == undefined || mid == "") {
                    this.addModule(params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });
                } else {
                    this.updateModule(mid, params).then(function (res) {
                        commonUtil.showReturnMsg(res, url);
                    });
                }
            }
        }
    });


