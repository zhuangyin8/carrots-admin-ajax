'use strict';
angular.module('admin')
    .factory('path', function (commonUtil) {
        return {
            //登录login       请求方式#地址：post # /a/login
            login: "/carrots-admin-ajax/a/login",
            //退出logout      请求方式#地址：ost # /a/logout
            logout: "/carrots-admin-ajax/a/logout",


            //manager
            manager: function (mid) {
                if (mid == undefined || mid == "") {
                    return "/carrots-admin-ajax/a/u/manager";
                } else {
                    return "/carrots-admin-ajax/a/u/manager/" + mid;
                }

            },
            manager_list: "/carrots-admin-ajax/a/u/manager/",
            manager_multi_detail: function (params) {
                return "/carrots-admin-ajax/a/u/multi/manager" + commonUtil.concactArrayParam("ids", params);

            },
            //pwd
            changePwd: "/carrots-admin-ajax/a/u/pwd",
            //role
            role: function (rid) {

                if (rid == undefined || rid == "") {
                    return "/carrots-admin-ajax/a/u/role";
                } else {
                    return "/carrots-admin-ajax/a/u/role/" + rid;
                }

            },
            role_list: "/carrots-admin-ajax/a/u/role/",
            role_multi_detail: function (params) {
                return "/carrots-admin-ajax/a/u/multi/role" + commonUtil.concactArrayParam("ids", params);

            },
            role_module: function (rid) {
                return "/carrots-admin-ajax/a/u/role/" + rid + "/module"
            },
            role_manager: function (rid) {
                return "/carrots-admin-ajax/a/u/role/" + rid + "/manager"
            },
            //module
            module: function (mid) {
                if (mid == undefined || mid == "") {
                    return "/carrots-admin-ajax/a/u/module";
                } else {
                    return "/carrots-admin-ajax/a/u/module/" + mid
                }
            },
            module_list: "/carrots-admin-ajax/a/u/module/",
            module_multi_detail: function (params) {
                return "/carrots-admin-ajax/a/u/multi/module" + commonUtil.concactArrayParam("ids", params);

            },

            /**
             * article
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
     *
     */
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
     *
     */
    .factory('pwdService', function ($http, path, recordCookies) {
        return {

            changePwd: function (params) {
                // params: id|password
                return $http.put(path.changePwd, params);
            }


        }
    })
    .factory('managerService', function ($http, path, commonUtil, recordCookies) {
        return {

            getManager: function (mid) {
                return $http.get(path.manager(mid));
            },
            addManager: function (params) {
                return $http.post(path.manager(), params);
            },
            updateManager: function (mid, params) {
                recordCookies({targetID: mid});
                return $http.put(path.manager(mid), params);
            },
            deleteManager: function (mid) {
                recordCookies({targetID: mid});
                return $http.delete(path.manager(mid));
            },
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
                    return JSON.parse(localStorage["self"]);
                }

            },
            clearSelfDetail: function () {
                localStorage["self"] = undefined;
            }


        }
    })
    .factory('roleService', function ($http, path, moduleService, commonUtil, recordCookies) {
        return {
            getRole: function (rid) {
                return $http.get(path.role(rid));
            },
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
            deleteRole: function (rid) {
                recordCookies({targetID: rid});
                return $http.delete(path.role(rid));
            },
            getRoleList: function (params) {

                return $http.get(path.role_list, commonUtil.process4Page(params)).then(function (res) {
                    return commonUtil.processPageResult(res);
                });
            },
            getRoleModule: function (rid) {
                return $http.get(path.role_module(rid));
            },
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
    .factory('moduleService', function ($http, path, commonUtil, recordCookies) {
        return {
            getModule: function (mid) {
                return $http.get(path.module(mid));
            },
            addModule: function (params) {
                return $http.post(path.module(), params);
            },
            updateModule: function (mid, params) {
                recordCookies({targetID: mid});
                return $http.put(path.module(mid), params);
            },
            deleteModule: function (mid) {
                recordCookies({targetID: mid});
                return $http.delete(path.module(mid));
            },
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


