/*
 * 和citySelect的区别在于用的数据源不同，为了将就以前的数据源。。。。
 *
 * vm.selectArea为所选择内容
 * eg：1.使用本地默认数据：
 * <city-select select-result="vm.selectArea"></city-select>
 * 2. 使用自己另外加载的本地数据，vm.areaData为传入数据
 * vm.areaData = {}；
 * <city-select select-data="vm.areaData" select-result="vm.selectArea"></city-select>
 * 3. 使用http请求的数据：
 * vm.areaData = $http.get('xxxx');
 * <city-select select-data="vm.areaData" select-result="vm.selectArea"></city-select>
 * */
angular.module("admin")
    .directive('citySelect', function (areaData) {
        return {
            priority: 1,
            restrict: 'EA',
            replace: true,
            scope: {
                selectResult: '=',
                selectData: '='
            },
            template: '<div class="row">' +
            '<div class="col-md-4">' +
            '<select required name="province" class="form-control" ng-model="province" ng-options="province.ProID as province.ProName for province in provinces">' +
            '<option value="">请选择省份</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<select required name="city" class="form-control" ng-model="city" ng-options="city.CityID as city.CityName for city in filteredCities">' +
            '<option value="">请选择城市</option>' +
            '</select>' +
            '</div>' +
            '<div class="col-md-4">' +
            '<select required name="district" class="form-control" ng-model="district" ng-options="district.Id as district.countyName for district in filteredDistricts">' +
            '<option value="">请选择地区</option>' +
            '</select>' +
            '</div>' +
            '</div>',
            link: function (scope, elem, attrs) {


                if (attrs.selectData) { // 如果有selectData参数
                    if (scope.selectData.$$state == 0) { // 如果是请求的数据
                        scope.$watch('selectData', function (m) {
                            if (m && m.then) {
                                m.then(function (res) {
                                    fillData(res);
                                })
                            }
                        });
                    } else { // 如果是本地数据
                        fillData(scope.selectData);
                    }
                } else { // 如果根本没传入参数
                    fillData(areaData);
                }


                function fillData(res) {
                    var areaData = res;
                    if (!(scope.selectResult instanceof Object)) {
                        scope.selectResult = {};
                    }

                    scope.provinces = areaData.provinces;
                    if (scope.selectResult.province) {
                        scope.province = +scope.selectResult.province;
                    }

                    if (scope.selectResult.city) {
                        scope.city = +scope.selectResult.city;
                    }

                    if (scope.selectResult.district) {
                        scope.district = +scope.selectResult.district;
                    }

                    scope.filteredCities = [];
                    scope.filteredDistricts = [];


                    var updateResult = function () {
                        scope.selectResult = {
                            province: scope.province,
                            city: scope.city,
                            district: scope.district
                        };
                    };

                    scope.$watch('province', function (value, oldVal) {
                        scope.filteredDistricts.length = 0;
                        if (value) {
                            scope.filteredCities = areaData.cities.filter(function (city) {
                                return city.ProID === value;
                            });
                        } else {
                            scope.filteredCities.length = 0;
                        }
                        if (value != oldVal) {
                            scope.city = scope.district = null;
                            updateResult();
                        }
                    });

                    scope.$watch('city', function (value, oldVal) {
                        if (value) {
                            scope.filteredDistricts = areaData.districts.filter(function (district) {
                                return district.CityID === value;
                            });
                        } else {
                            scope.filteredDistricts.length = 0;
                        }
                        if (value != oldVal) {
                            scope.district = null;
                            updateResult();
                        }
                    });

                    scope.$watch('district', function (value, oldVal) {
                        if (value != oldVal) {
                            updateResult();
                        }
                    });
                }


            }
        }
    });