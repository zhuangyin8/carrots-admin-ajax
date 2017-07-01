/**
 *
 */
angular.module('admin')
    .controller('PwdCtrl', function ($state, $scope, $rootScope, commonUtil, pwdService, recordCookies) {
        var vm = $scope.vm = {};

        vm.save = function () {

            if (vm.data.newPwd == vm.data.newPwdAgain) {
                pwdService.changePwd(vm.data).then(function (res) {

                    //commonUtil.showReturnMsg(res,"field.home");
                    if (res.data.code == 0) {
                        $rootScope.alert("修改成功", function () {
                            vm.data = {
                                oldPwd: "",
                                newPwd: "",
                                newPwdAgain: ""
                            };
                        });
                    } else {
                        $rootScope.alert(res.data.message)
                    }
                })
            } else {
                var res = {};
                res.data = {};
                res.data.message = "密码不一致";
                commonUtil.showErrMsg(res);
            }
        };
    });