/**
 * AngularJS Filters
 * Filters can be added in AngularJS to format data.
 * 可以在AngularJS中添加过滤器来格式化数据。
 * Custom Filters 自定义过滤器
 * You can make your own filters by registering a new filter factory function with your module:
 * 您可以通过在模块中注册新的过滤器工厂功能来制作自己的过滤器：
 */

angular.module("admin")
/**
 * 状态
 */
    .filter("statusShow", function (upOrDown) {
        return function (value) {
            return upOrDown[value]
        }
    })
    /**
     *下线/上线
     */
    .filter("statusChange", function (downOrUp) {
        return function (value) {
            return downOrUp[value]
        }
    })
    /**
     * 类型
     */
    .filter("typeShow", function (projectType) {
        return function (value) {
            return projectType[value]
        }
    })
    /**
     *
     */
    .filter("categoryShow", function (projectCategory) {
        return function (value) {
            return projectCategory[value]
        }
    })
