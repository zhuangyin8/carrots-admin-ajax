/**
 * 将搜索和清空功能独立成指令,通过传递不同的参数的来实现不同的功能
 */
angular.module("admin")
// 自定义指令 search
    .directive('search', function () {
        return {
            restrict: 'EA',
            templateUrl: 'js/directives/searchParams/search-params.html',
            replace: true,
            scope: {
                params: '='
            },
            controller: function ($state, commonUtil, $scope) {
                /**
                 *  为搜索按钮添加事件，在点击后根据搜索框中的条件进行搜索并展示结果
                 */
                $scope.search = function () {

                    //strat :没有地址选择器时可以删除 将获取的对象拆开传到url里
                    console.log($scope.params.address);
                    if ($scope.params.address) {
                        $scope.params.province = $scope.params.address.province;
                        $scope.params.city = $scope.params.address.city;
                        $scope.params.county = $scope.params.address.district;
                    }
                    //end :没有地址选择器时可以删除 将获取的对象拆开传到url里

                    $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});
                };

                /**
                 * 清空
                 */
                $scope.clean = function () {
                    console.log($scope.params.address);
                    angular.forEach($scope.params, function (data, index) {
                        if (index !== 'size') {
                            $scope.params[index] = '';
                        }
                    });
                    $state.go($state.current, commonUtil.querySearchParams($scope.params), {reload: true});

                }
            }
        }
    });