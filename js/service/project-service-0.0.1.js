angular.module('admin')
/**
 * 上传文件
 */
    .factory('uploadService', function (pathProject) {
        return {
            uploadFile: function (FileUploader, alias) {
                var param = {url: pathProject.upload_url()};
                if (alias) {
                    angular.extend(param, {alias: alias});
                }
                return new FileUploader(param);
            }
        }
    })
    /**
     * 信息管理
     */
    .factory('infoManagementService', function ($http, pathProject) {
        return {
            // 获取公司列表
            getCompanyList: function (params) {
                return $http.get(pathProject.getCompanyList_url, {params: params})
            },
            // 删除公司信息
            delCompany: function (id) {
                return $http.delete(pathProject.delCompany_url(id))
            },
            // 认证/冻结公司状态接口
            changeCompanyStatus: function (id, type, status) {
                return $http.put(pathProject.changeCompanyStatus_url(id, type, status))
            },
            // 获取公司详情
            getCompanyDetail: function (id) {
                return $http.get(pathProject.getCompanyDetail_url(id))
            },

            // 新增公司详情
            addCompany: function (data) {
                return $http({
                    url: pathProject.addCompany_url,
                    method: "POST",
                    headers: {'Content-Type': 'Application/json'},
                    //将data 转换为JSON 字符串
                    data: JSON.stringify(data),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }

                });
            },

            // 编辑公司详情
            editCompany: function (id, data) {
                return $http({
                    url: pathProject.editCompany_url(id),
                    method: "PUT",
                    headers: {'Content-Type': 'Application/json'},
                    data: JSON.stringify(data),
                    transformRequest: function (data, headersGetter) {
                        return data;
                    }
                });
            },

            // 获取职业列表
            PositionList: function (params) {
                return $http.get(pathProject.PositionList_url, {params: params})
            },

            //职业上下架修改
            putPositionstatus: function (params, id) {
                console.log(pathProject.putPositionstatus_url(params, id));
                return $http.put(pathProject.putPositionstatus_url(params, id))

            },
            //职业删除
            deletePosition: function (id) {
                return $http.delete(pathProject.deletePosition_url(id))
            },
            // 获取职业详细信息
            getPositionDetail: function (id) {
                return $http.get(pathProject.getPosition_url(id))
            },
            //职业添加
            postPosition: function (params, tag, id) {
                var data = {};
                data.profession = params;
                data.tags = tag.map(function (item) {
                    var obj = {};
                    obj.tag = item;
                    return obj
                });
                console.log(data);
                return $http({
                    url: pathProject.postPosition_url,
                    method: "post",
                    headers: {'Content-type': 'Application/json'},
                    transformRequest: function (data, headersGetter) {
                        return data
                    },
                    data: JSON.stringify(data)
                })
            },
            // 获取公司福利标签
            getCompanyTags: function (id) {
                return $http.get(pathProject.getCompanyTags_url(id))
            },
            //职业编辑
            putPosition: function (params, tag, id) {
                delete params.tags;
                var data = {};
                data.profession = params;
                data.tags = tag.map(function (item) {
                    var obj = {};
                    obj.tag = item;
                    return obj
                });
                return $http({
                    url: pathProject.putPosition_url(id),
                    method: "PUT",
                    headers: {'Content-type': 'Application/json'},
                    transformRequest: function (data, headersGetter) {
                        return data
                    },
                    data: JSON.stringify(data)
                })
            }
        }
    })
    /**
     * Article 管理
     */
    .factory('ArticleManagementService', function ($http, pathProject) {
        return {
            //获取单个
            getArticle: function (id) {
                return $http.get(pathProject.getArticle_url(id));
            },
            //获取多个
            getArticleList: function (params) {
                return $http.get(pathProject.getArticlelist_url, {params: params});
            },

            //新增
            addArticle: function (params) {
                return $http.post(pathProject.addArticle_url, params);
            },

            //删除
            deleteArticle: function (id) {
                return $http.delete(pathProject.deleteArticle_url(id));
            },


            //编辑
            editArticle: function (id, params) {
                return $http.put(pathProject.editArticle_url(id), params);
            },
            //修改article的上架/下架
            changeArticleStatus: function (id, status) {
                return $http.put(pathProject.changeArticleStatus_url(id, status));
            }
        }
    });
















