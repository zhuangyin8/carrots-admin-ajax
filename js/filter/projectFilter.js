angular.module("admin")
    .filter("statusShow", function (upOrDown) {
        return function (value) {
            return upOrDown[value]
        }
    })
    .filter("statusChange", function (downOrUp) {
        return function (value) {
            return downOrUp[value]
        }
    })
    .filter("typeShow", function (projectType) {
        return function (value) {
            return projectType[value]
        }
    })
    .filter("categoryShow", function (projectCategory) {
        return function (value) {
            return projectCategory[value]
        }
    })
