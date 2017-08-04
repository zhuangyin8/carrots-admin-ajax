/**
 *
 */
angular.module("admin")

// 公司行业
    .constant('industry', [
        {id: 0, name: '移动互联网'},
        {id: 1, name: '电子商务'},
        {id: 2, name: '企业服务'},
        {id: 3, name: 'O2O'},
        {id: 4, name: '教育'},
        {id: 5, name: '金融'},
        {id: 6, name: '游戏'}
    ])
    // 融资规模
    .constant('financing', [
        {id: 0, name: '无需融资'},
        {id: 1, name: '天使轮'},
        {id: 2, name: 'A轮'},
        {id: 3, name: 'B轮'},
        {id: 4, name: 'C轮'},
        {id: 5, name: 'D轮及以上'},
        {id: 6, name: '上市公司'}
    ])
    // 公司行业多选数据
    .constant('companyIndustryGroup', [
        {industry: 0, name: '移动互联网'},
        {industry: 1, name: '电子商务'},
        {industry: 2, name: '企业服务 '},
        {industry: 3, name: 'O2O'},
        {industry: 4, name: '教育'},
        {industry: 5, name: '金融'},
        {industry: 6, name: '游戏'}
    ])
    // 二级三级类目数据
    .constant('categoryData', [
        {
            id: 1,
            name: "产品",
            subCategory: [
                {
                    id: 1,
                    name: "助理"
                },
                {
                    id: 2,
                    name: "初级"
                },
                {
                    id: 3,
                    name: "中级"
                },
                {
                    id: 4,
                    name: "高级"
                },
                {
                    id: 5,
                    name: "总监"
                }
            ]
        },
        {
            id: 2,
            name: "UI",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                },
                {
                    id: 4,
                    name: "总监"
                }
            ]
        },
        {
            id: 3,
            name: "QA",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 2,
                    name: "高级"
                }
            ]
        },
        {
            id: 4,
            name: "Android",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 5,
            name: "IOS",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 6,
            name: "WEB",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 7,
            name: "OP",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 8,
            name: "JAVA",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                },
                {
                    id: 4,
                    name: "总监"
                }
            ]
        },
        {
            id: 9,
            name: "NLP",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 10,
            name: "DM",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        },
        {
            id: 11,
            name: "DL",
            subCategory: [
                {
                    id: 1,
                    name: "初级"
                },
                {
                    id: 2,
                    name: "中级"
                },
                {
                    id: 3,
                    name: "高级"
                }
            ]
        }
    ]);