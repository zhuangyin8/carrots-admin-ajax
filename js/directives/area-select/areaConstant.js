angular.module("admin")
    .constant('areaData', {
        "provinces": [
            {"ProID": 1, "ProName": "北京市", "ProSort": 1, "ProRemark": "直辖市"},
            {"ProID": 2, "ProName": "天津市", "ProSort": 2, "ProRemark": "直辖市"},
            {"ProID": 3, "ProName": "河北省", "ProSort": 5, "ProRemark": "省份"}, {
                "ProID": 4,
                "ProName": "山西省",
                "ProSort": 6,
                "ProRemark": "省份"
            }, {"ProID": 5, "ProName": "内蒙古自治区", "ProSort": 32, "ProRemark": "自治区"}, {
                "ProID": 6,
                "ProName": "辽宁省",
                "ProSort": 8,
                "ProRemark": "省份"
            }, {"ProID": 7, "ProName": "吉林省", "ProSort": 9, "ProRemark": "省份"}, {
                "ProID": 8,
                "ProName": "黑龙江省",
                "ProSort": 10,
                "ProRemark": "省份"
            }, {"ProID": 9, "ProName": "上海市", "ProSort": 3, "ProRemark": "直辖市"}, {
                "ProID": 10,
                "ProName": "江苏省",
                "ProSort": 11,
                "ProRemark": "省份"
            }, {"ProID": 11, "ProName": "浙江省", "ProSort": 12, "ProRemark": "省份"}, {
                "ProID": 12,
                "ProName": "安徽省",
                "ProSort": 13,
                "ProRemark": "省份"
            }, {"ProID": 13, "ProName": "福建省", "ProSort": 14, "ProRemark": "省份"}, {
                "ProID": 14,
                "ProName": "江西省",
                "ProSort": 15,
                "ProRemark": "省份"
            }, {"ProID": 15, "ProName": "山东省", "ProSort": 16, "ProRemark": "省份"}, {
                "ProID": 16,
                "ProName": "河南省",
                "ProSort": 17,
                "ProRemark": "省份"
            }, {"ProID": 17, "ProName": "湖北省", "ProSort": 18, "ProRemark": "省份"}, {
                "ProID": 18,
                "ProName": "湖南省",
                "ProSort": 19,
                "ProRemark": "省份"
            }, {"ProID": 19, "ProName": "广东省", "ProSort": 20, "ProRemark": "省份"}, {
                "ProID": 20,
                "ProName": "海南省",
                "ProSort": 24,
                "ProRemark": "省份"
            }, {"ProID": 21, "ProName": "广西壮族自治区", "ProSort": 28, "ProRemark": "自治区"}, {
                "ProID": 22,
                "ProName": "甘肃省",
                "ProSort": 21,
                "ProRemark": "省份"
            }, {"ProID": 23, "ProName": "陕西省", "ProSort": 27, "ProRemark": "省份"}, {
                "ProID": 24,
                "ProName": "新疆维吾尔自治区",
                "ProSort": 31,
                "ProRemark": "自治区"
            }, {"ProID": 25, "ProName": "青海省", "ProSort": 26, "ProRemark": "省份"}, {
                "ProID": 26,
                "ProName": "宁夏回族自治区",
                "ProSort": 30,
                "ProRemark": "自治区"
            }, {"ProID": 27, "ProName": "重庆市", "ProSort": 4, "ProRemark": "直辖市"}, {
                "ProID": 28,
                "ProName": "四川省",
                "ProSort": 22,
                "ProRemark": "省份"
            }, {"ProID": 29, "ProName": "贵州省", "ProSort": 23, "ProRemark": "省份"}, {
                "ProID": 30,
                "ProName": "云南省",
                "ProSort": 25,
                "ProRemark": "省份"
            }, {"ProID": 31, "ProName": "西藏自治区", "ProSort": 29, "ProRemark": "自治区"}, {
                "ProID": 32,
                "ProName": "台湾省",
                "ProSort": 7,
                "ProRemark": "省份"
            }, {"ProID": 33, "ProName": "澳门特别行政区", "ProSort": 33, "ProRemark": "特别行政区"}, {
                "ProID": 34,
                "ProName": "香港特别行政区",
                "ProSort": 34,
                "ProRemark": "特别行政区"
            }],
        "cities": [
            {"CityID": 1, "CityName": "北京市", "ProID": 1, "CitySort": 1},
            {
                "CityID": 2,
                "CityName": "天津市",
                "ProID": 2,
                "CitySort": 2
            }, {"CityID": 3, "CityName": "上海市", "ProID": 9, "CitySort": 3}, {
                "CityID": 4,
                "CityName": "重庆市",
                "ProID": 27,
                "CitySort": 4
            }, {"CityID": 5, "CityName": "邯郸市", "ProID": 3, "CitySort": 5}, {
                "CityID": 6,
                "CityName": "石家庄市",
                "ProID": 3,
                "CitySort": 6
            }, {"CityID": 7, "CityName": "保定市", "ProID": 3, "CitySort": 7}, {
                "CityID": 8,
                "CityName": "张家口市",
                "ProID": 3,
                "CitySort": 8
            }, {"CityID": 9, "CityName": "承德市", "ProID": 3, "CitySort": 9}, {
                "CityID": 10,
                "CityName": "唐山市",
                "ProID": 3,
                "CitySort": 10
            }, {"CityID": 11, "CityName": "廊坊市", "ProID": 3, "CitySort": 11}, {
                "CityID": 12,
                "CityName": "沧州市",
                "ProID": 3,
                "CitySort": 12
            }, {"CityID": 13, "CityName": "衡水市", "ProID": 3, "CitySort": 13}, {
                "CityID": 14,
                "CityName": "邢台市",
                "ProID": 3,
                "CitySort": 14
            }, {"CityID": 16, "CityName": "朔州市", "ProID": 4, "CitySort": 16}, {
                "CityID": 17,
                "CityName": "忻州市",
                "ProID": 4,
                "CitySort": 17
            }, {"CityID": 18, "CityName": "太原市", "ProID": 4, "CitySort": 18}, {
                "CityID": 19,
                "CityName": "大同市",
                "ProID": 4,
                "CitySort": 19
            }, {"CityID": 20, "CityName": "阳泉市", "ProID": 4, "CitySort": 20}, {
                "CityID": 21,
                "CityName": "晋中市",
                "ProID": 4,
                "CitySort": 21
            }, {"CityID": 22, "CityName": "长治市", "ProID": 4, "CitySort": 22}, {
                "CityID": 23,
                "CityName": "晋城市",
                "ProID": 4,
                "CitySort": 23
            }, {"CityID": 24, "CityName": "临汾市", "ProID": 4, "CitySort": 24}, {
                "CityID": 25,
                "CityName": "吕梁市",
                "ProID": 4,
                "CitySort": 25
            }, {"CityID": 26, "CityName": "运城市", "ProID": 4, "CitySort": 26}, {
                "CityID": 27,
                "CityName": "沈阳市",
                "ProID": 6,
                "CitySort": 27
            }, {"CityID": 28, "CityName": "铁岭市", "ProID": 6, "CitySort": 28}, {
                "CityID": 29,
                "CityName": "大连市",
                "ProID": 6,
                "CitySort": 29
            }, {"CityID": 30, "CityName": "鞍山市", "ProID": 6, "CitySort": 30}, {
                "CityID": 31,
                "CityName": "抚顺市",
                "ProID": 6,
                "CitySort": 31
            }, {"CityID": 32, "CityName": "本溪市", "ProID": 6, "CitySort": 32}, {
                "CityID": 33,
                "CityName": "丹东市",
                "ProID": 6,
                "CitySort": 33
            }, {"CityID": 34, "CityName": "锦州市", "ProID": 6, "CitySort": 34}, {
                "CityID": 35,
                "CityName": "营口市",
                "ProID": 6,
                "CitySort": 35
            }, {"CityID": 36, "CityName": "阜新市", "ProID": 6, "CitySort": 36}, {
                "CityID": 37,
                "CityName": "辽阳市",
                "ProID": 6,
                "CitySort": 37
            }, {"CityID": 38, "CityName": "朝阳市", "ProID": 6, "CitySort": 38}, {
                "CityID": 39,
                "CityName": "盘锦市",
                "ProID": 6,
                "CitySort": 39
            }, {"CityID": 40, "CityName": "葫芦岛市", "ProID": 6, "CitySort": 40}, {
                "CityID": 41,
                "CityName": "长春市",
                "ProID": 7,
                "CitySort": 41
            }, {"CityID": 42, "CityName": "吉林市", "ProID": 7, "CitySort": 42}, {
                "CityID": 43,
                "CityName": "延边朝鲜族自治州",
                "ProID": 7,
                "CitySort": 43
            }, {"CityID": 44, "CityName": "四平市", "ProID": 7, "CitySort": 44}, {
                "CityID": 45,
                "CityName": "通化市",
                "ProID": 7,
                "CitySort": 45
            }, {"CityID": 46, "CityName": "白城市", "ProID": 7, "CitySort": 46}, {
                "CityID": 47,
                "CityName": "辽源市",
                "ProID": 7,
                "CitySort": 47
            }, {"CityID": 48, "CityName": "松原市", "ProID": 7, "CitySort": 48}, {
                "CityID": 49,
                "CityName": "白山市",
                "ProID": 7,
                "CitySort": 49
            }, {"CityID": 50, "CityName": "哈尔滨市", "ProID": 8, "CitySort": 50}, {
                "CityID": 51,
                "CityName": "齐齐哈尔市",
                "ProID": 8,
                "CitySort": 51
            }, {"CityID": 52, "CityName": "鸡西市", "ProID": 8, "CitySort": 52}, {
                "CityID": 53,
                "CityName": "牡丹江市",
                "ProID": 8,
                "CitySort": 53
            }, {"CityID": 54, "CityName": "七台河市", "ProID": 8, "CitySort": 54}, {
                "CityID": 55,
                "CityName": "佳木斯市",
                "ProID": 8,
                "CitySort": 55
            }, {"CityID": 56, "CityName": "鹤岗市", "ProID": 8, "CitySort": 56}, {
                "CityID": 57,
                "CityName": "双鸭山市",
                "ProID": 8,
                "CitySort": 57
            }, {"CityID": 58, "CityName": "绥化市", "ProID": 8, "CitySort": 58}, {
                "CityID": 59,
                "CityName": "黑河市",
                "ProID": 8,
                "CitySort": 59
            }, {"CityID": 60, "CityName": "大兴安岭地区", "ProID": 8, "CitySort": 60}, {
                "CityID": 61,
                "CityName": "伊春市",
                "ProID": 8,
                "CitySort": 61
            }, {"CityID": 62, "CityName": "大庆市", "ProID": 8, "CitySort": 62}, {
                "CityID": 63,
                "CityName": "南京市",
                "ProID": 10,
                "CitySort": 63
            }, {"CityID": 64, "CityName": "无锡市", "ProID": 10, "CitySort": 64}, {
                "CityID": 65,
                "CityName": "镇江市",
                "ProID": 10,
                "CitySort": 65
            }, {"CityID": 66, "CityName": "苏州市", "ProID": 10, "CitySort": 66}, {
                "CityID": 67,
                "CityName": "南通市",
                "ProID": 10,
                "CitySort": 67
            }, {"CityID": 68, "CityName": "扬州市", "ProID": 10, "CitySort": 68}, {
                "CityID": 69,
                "CityName": "盐城市",
                "ProID": 10,
                "CitySort": 69
            }, {"CityID": 70, "CityName": "徐州市", "ProID": 10, "CitySort": 70}, {
                "CityID": 71,
                "CityName": "淮安市",
                "ProID": 10,
                "CitySort": 71
            }, {"CityID": 72, "CityName": "连云港市", "ProID": 10, "CitySort": 72}, {
                "CityID": 73,
                "CityName": "常州市",
                "ProID": 10,
                "CitySort": 73
            }, {"CityID": 74, "CityName": "泰州市", "ProID": 10, "CitySort": 74}, {
                "CityID": 75,
                "CityName": "宿迁市",
                "ProID": 10,
                "CitySort": 75
            }, {"CityID": 76, "CityName": "舟山市", "ProID": 11, "CitySort": 76}, {
                "CityID": 77,
                "CityName": "衢州市",
                "ProID": 11,
                "CitySort": 77
            }, {"CityID": 78, "CityName": "杭州市", "ProID": 11, "CitySort": 78}, {
                "CityID": 79,
                "CityName": "湖州市",
                "ProID": 11,
                "CitySort": 79
            }, {"CityID": 80, "CityName": "嘉兴市", "ProID": 11, "CitySort": 80}, {
                "CityID": 81,
                "CityName": "宁波市",
                "ProID": 11,
                "CitySort": 81
            }, {"CityID": 82, "CityName": "绍兴市", "ProID": 11, "CitySort": 82}, {
                "CityID": 83,
                "CityName": "温州市",
                "ProID": 11,
                "CitySort": 83
            }, {"CityID": 84, "CityName": "丽水市", "ProID": 11, "CitySort": 84}, {
                "CityID": 85,
                "CityName": "金华市",
                "ProID": 11,
                "CitySort": 85
            }, {"CityID": 86, "CityName": "台州市", "ProID": 11, "CitySort": 86}, {
                "CityID": 87,
                "CityName": "合肥市",
                "ProID": 12,
                "CitySort": 87
            }, {"CityID": 88, "CityName": "芜湖市", "ProID": 12, "CitySort": 88}, {
                "CityID": 89,
                "CityName": "蚌埠市",
                "ProID": 12,
                "CitySort": 89
            }, {"CityID": 90, "CityName": "淮南市", "ProID": 12, "CitySort": 90}, {
                "CityID": 91,
                "CityName": "马鞍山市",
                "ProID": 12,
                "CitySort": 91
            }, {"CityID": 92, "CityName": "淮北市", "ProID": 12, "CitySort": 92}, {
                "CityID": 93,
                "CityName": "铜陵市",
                "ProID": 12,
                "CitySort": 93
            }, {"CityID": 94, "CityName": "安庆市", "ProID": 12, "CitySort": 94}, {
                "CityID": 95,
                "CityName": "黄山市",
                "ProID": 12,
                "CitySort": 95
            }, {"CityID": 96, "CityName": "滁州市", "ProID": 12, "CitySort": 96}, {
                "CityID": 97,
                "CityName": "阜阳市",
                "ProID": 12,
                "CitySort": 97
            }, {"CityID": 98, "CityName": "宿州市", "ProID": 12, "CitySort": 98}, {
                "CityID": 99,
                "CityName": "巢湖市",
                "ProID": 12,
                "CitySort": 99
            }, {"CityID": 100, "CityName": "六安市", "ProID": 12, "CitySort": 100}, {
                "CityID": 101,
                "CityName": "亳州市",
                "ProID": 12,
                "CitySort": 101
            }, {"CityID": 102, "CityName": "池州市", "ProID": 12, "CitySort": 102}, {
                "CityID": 103,
                "CityName": "宣城市",
                "ProID": 12,
                "CitySort": 103
            }, {"CityID": 104, "CityName": "福州市", "ProID": 13, "CitySort": 104}, {
                "CityID": 105,
                "CityName": "厦门市",
                "ProID": 13,
                "CitySort": 105
            }, {"CityID": 106, "CityName": "宁德市", "ProID": 13, "CitySort": 106}, {
                "CityID": 107,
                "CityName": "莆田市",
                "ProID": 13,
                "CitySort": 107
            }, {"CityID": 108, "CityName": "泉州市", "ProID": 13, "CitySort": 108}, {
                "CityID": 109,
                "CityName": "漳州市",
                "ProID": 13,
                "CitySort": 109
            }, {"CityID": 110, "CityName": "龙岩市", "ProID": 13, "CitySort": 110}, {
                "CityID": 111,
                "CityName": "三明市",
                "ProID": 13,
                "CitySort": 111
            }, {"CityID": 112, "CityName": "南平市", "ProID": 13, "CitySort": 112}, {
                "CityID": 113,
                "CityName": "鹰潭市",
                "ProID": 14,
                "CitySort": 113
            }, {"CityID": 114, "CityName": "新余市", "ProID": 14, "CitySort": 114}, {
                "CityID": 115,
                "CityName": "南昌市",
                "ProID": 14,
                "CitySort": 115
            }, {"CityID": 116, "CityName": "九江市", "ProID": 14, "CitySort": 116}, {
                "CityID": 117,
                "CityName": "上饶市",
                "ProID": 14,
                "CitySort": 117
            }, {"CityID": 118, "CityName": "抚州市", "ProID": 14, "CitySort": 118}, {
                "CityID": 119,
                "CityName": "宜春市",
                "ProID": 14,
                "CitySort": 119
            }, {"CityID": 120, "CityName": "吉安市", "ProID": 14, "CitySort": 120}, {
                "CityID": 121,
                "CityName": "赣州市",
                "ProID": 14,
                "CitySort": 121
            }, {"CityID": 122, "CityName": "景德镇市", "ProID": 14, "CitySort": 122}, {
                "CityID": 123,
                "CityName": "萍乡市",
                "ProID": 14,
                "CitySort": 123
            }, {"CityID": 124, "CityName": "菏泽市", "ProID": 15, "CitySort": 124}, {
                "CityID": 125,
                "CityName": "济南市",
                "ProID": 15,
                "CitySort": 125
            }, {"CityID": 126, "CityName": "青岛市", "ProID": 15, "CitySort": 126}, {
                "CityID": 127,
                "CityName": "淄博市",
                "ProID": 15,
                "CitySort": 127
            }, {"CityID": 128, "CityName": "德州市", "ProID": 15, "CitySort": 128}, {
                "CityID": 129,
                "CityName": "烟台市",
                "ProID": 15,
                "CitySort": 129
            }, {"CityID": 130, "CityName": "潍坊市", "ProID": 15, "CitySort": 130}, {
                "CityID": 131,
                "CityName": "济宁市",
                "ProID": 15,
                "CitySort": 131
            }, {"CityID": 132, "CityName": "泰安市", "ProID": 15, "CitySort": 132}, {
                "CityID": 133,
                "CityName": "临沂市",
                "ProID": 15,
                "CitySort": 133
            }, {"CityID": 134, "CityName": "滨州市", "ProID": 15, "CitySort": 134}, {
                "CityID": 135,
                "CityName": "东营市",
                "ProID": 15,
                "CitySort": 135
            }, {"CityID": 136, "CityName": "威海市", "ProID": 15, "CitySort": 136}, {
                "CityID": 137,
                "CityName": "枣庄市",
                "ProID": 15,
                "CitySort": 137
            }, {"CityID": 138, "CityName": "日照市", "ProID": 15, "CitySort": 138}, {
                "CityID": 139,
                "CityName": "莱芜市",
                "ProID": 15,
                "CitySort": 139
            }, {"CityID": 140, "CityName": "聊城市", "ProID": 15, "CitySort": 140}, {
                "CityID": 141,
                "CityName": "商丘市",
                "ProID": 16,
                "CitySort": 141
            }, {"CityID": 142, "CityName": "郑州市", "ProID": 16, "CitySort": 142}, {
                "CityID": 143,
                "CityName": "安阳市",
                "ProID": 16,
                "CitySort": 143
            }, {"CityID": 144, "CityName": "新乡市", "ProID": 16, "CitySort": 144}, {
                "CityID": 145,
                "CityName": "许昌市",
                "ProID": 16,
                "CitySort": 145
            }, {"CityID": 146, "CityName": "平顶山市", "ProID": 16, "CitySort": 146}, {
                "CityID": 147,
                "CityName": "信阳市",
                "ProID": 16,
                "CitySort": 147
            }, {"CityID": 148, "CityName": "南阳市", "ProID": 16, "CitySort": 148}, {
                "CityID": 149,
                "CityName": "开封市",
                "ProID": 16,
                "CitySort": 149
            }, {"CityID": 150, "CityName": "洛阳市", "ProID": 16, "CitySort": 150}, {
                "CityID": 151,
                "CityName": "济源市",
                "ProID": 16,
                "CitySort": 151
            }, {"CityID": 152, "CityName": "焦作市", "ProID": 16, "CitySort": 152}, {
                "CityID": 153,
                "CityName": "鹤壁市",
                "ProID": 16,
                "CitySort": 153
            }, {"CityID": 154, "CityName": "濮阳市", "ProID": 16, "CitySort": 154}, {
                "CityID": 155,
                "CityName": "周口市",
                "ProID": 16,
                "CitySort": 155
            }, {"CityID": 156, "CityName": "漯河市", "ProID": 16, "CitySort": 156}, {
                "CityID": 157,
                "CityName": "驻马店市",
                "ProID": 16,
                "CitySort": 157
            }, {"CityID": 158, "CityName": "三门峡市", "ProID": 16, "CitySort": 158}, {
                "CityID": 159,
                "CityName": "武汉市",
                "ProID": 17,
                "CitySort": 159
            }, {"CityID": 160, "CityName": "襄樊市", "ProID": 17, "CitySort": 160}, {
                "CityID": 161,
                "CityName": "鄂州市",
                "ProID": 17,
                "CitySort": 161
            }, {"CityID": 162, "CityName": "孝感市", "ProID": 17, "CitySort": 162}, {
                "CityID": 163,
                "CityName": "黄冈市",
                "ProID": 17,
                "CitySort": 163
            }, {"CityID": 164, "CityName": "黄石市", "ProID": 17, "CitySort": 164}, {
                "CityID": 165,
                "CityName": "咸宁市",
                "ProID": 17,
                "CitySort": 165
            }, {"CityID": 166, "CityName": "荆州市", "ProID": 17, "CitySort": 166}, {
                "CityID": 167,
                "CityName": "宜昌市",
                "ProID": 17,
                "CitySort": 167
            }, {"CityID": 168, "CityName": "恩施土家族苗族自治州", "ProID": 17, "CitySort": 168}, {
                "CityID": 169,
                "CityName": "神农架林区",
                "ProID": 17,
                "CitySort": 169
            }, {"CityID": 170, "CityName": "十堰市", "ProID": 17, "CitySort": 170}, {
                "CityID": 171,
                "CityName": "随州市",
                "ProID": 17,
                "CitySort": 171
            }, {"CityID": 172, "CityName": "荆门市", "ProID": 17, "CitySort": 172}, {
                "CityID": 173,
                "CityName": "仙桃市",
                "ProID": 17,
                "CitySort": 173
            }, {"CityID": 174, "CityName": "天门市", "ProID": 17, "CitySort": 174}, {
                "CityID": 175,
                "CityName": "潜江市",
                "ProID": 17,
                "CitySort": 175
            }, {"CityID": 176, "CityName": "岳阳市", "ProID": 18, "CitySort": 176}, {
                "CityID": 177,
                "CityName": "长沙市",
                "ProID": 18,
                "CitySort": 177
            }, {"CityID": 178, "CityName": "湘潭市", "ProID": 18, "CitySort": 178}, {
                "CityID": 179,
                "CityName": "株洲市",
                "ProID": 18,
                "CitySort": 179
            }, {"CityID": 180, "CityName": "衡阳市", "ProID": 18, "CitySort": 180}, {
                "CityID": 181,
                "CityName": "郴州市",
                "ProID": 18,
                "CitySort": 181
            }, {"CityID": 182, "CityName": "常德市", "ProID": 18, "CitySort": 182}, {
                "CityID": 183,
                "CityName": "益阳市",
                "ProID": 18,
                "CitySort": 183
            }, {"CityID": 184, "CityName": "娄底市", "ProID": 18, "CitySort": 184}, {
                "CityID": 185,
                "CityName": "邵阳市",
                "ProID": 18,
                "CitySort": 185
            }, {"CityID": 186, "CityName": "湘西土家族苗族自治州", "ProID": 18, "CitySort": 186}, {
                "CityID": 187,
                "CityName": "张家界市",
                "ProID": 18,
                "CitySort": 187
            }, {"CityID": 188, "CityName": "怀化市", "ProID": 18, "CitySort": 188}, {
                "CityID": 189,
                "CityName": "永州市",
                "ProID": 18,
                "CitySort": 189
            }, {"CityID": 190, "CityName": "广州市", "ProID": 19, "CitySort": 190}, {
                "CityID": 191,
                "CityName": "汕尾市",
                "ProID": 19,
                "CitySort": 191
            }, {"CityID": 192, "CityName": "阳江市", "ProID": 19, "CitySort": 192}, {
                "CityID": 193,
                "CityName": "揭阳市",
                "ProID": 19,
                "CitySort": 193
            }, {"CityID": 194, "CityName": "茂名市", "ProID": 19, "CitySort": 194}, {
                "CityID": 195,
                "CityName": "惠州市",
                "ProID": 19,
                "CitySort": 195
            }, {"CityID": 196, "CityName": "江门市", "ProID": 19, "CitySort": 196}, {
                "CityID": 197,
                "CityName": "韶关市",
                "ProID": 19,
                "CitySort": 197
            }, {"CityID": 198, "CityName": "梅州市", "ProID": 19, "CitySort": 198}, {
                "CityID": 199,
                "CityName": "汕头市",
                "ProID": 19,
                "CitySort": 199
            }, {"CityID": 200, "CityName": "深圳市", "ProID": 19, "CitySort": 200}, {
                "CityID": 201,
                "CityName": "珠海市",
                "ProID": 19,
                "CitySort": 201
            }, {"CityID": 202, "CityName": "佛山市", "ProID": 19, "CitySort": 202}, {
                "CityID": 203,
                "CityName": "肇庆市",
                "ProID": 19,
                "CitySort": 203
            }, {"CityID": 204, "CityName": "湛江市", "ProID": 19, "CitySort": 204}, {
                "CityID": 205,
                "CityName": "中山市",
                "ProID": 19,
                "CitySort": 205
            }, {"CityID": 206, "CityName": "河源市", "ProID": 19, "CitySort": 206}, {
                "CityID": 207,
                "CityName": "清远市",
                "ProID": 19,
                "CitySort": 207
            }, {"CityID": 208, "CityName": "云浮市", "ProID": 19, "CitySort": 208}, {
                "CityID": 209,
                "CityName": "潮州市",
                "ProID": 19,
                "CitySort": 209
            }, {"CityID": 210, "CityName": "东莞市", "ProID": 19, "CitySort": 210}, {
                "CityID": 211,
                "CityName": "兰州市",
                "ProID": 22,
                "CitySort": 211
            }, {"CityID": 212, "CityName": "金昌市", "ProID": 22, "CitySort": 212}, {
                "CityID": 213,
                "CityName": "白银市",
                "ProID": 22,
                "CitySort": 213
            }, {"CityID": 214, "CityName": "天水市", "ProID": 22, "CitySort": 214}, {
                "CityID": 215,
                "CityName": "嘉峪关市",
                "ProID": 22,
                "CitySort": 215
            }, {"CityID": 216, "CityName": "武威市", "ProID": 22, "CitySort": 216}, {
                "CityID": 217,
                "CityName": "张掖市",
                "ProID": 22,
                "CitySort": 217
            }, {"CityID": 218, "CityName": "平凉市", "ProID": 22, "CitySort": 218}, {
                "CityID": 219,
                "CityName": "酒泉市",
                "ProID": 22,
                "CitySort": 219
            }, {"CityID": 220, "CityName": "庆阳市", "ProID": 22, "CitySort": 220}, {
                "CityID": 221,
                "CityName": "定西市",
                "ProID": 22,
                "CitySort": 221
            }, {"CityID": 222, "CityName": "陇南市", "ProID": 22, "CitySort": 222}, {
                "CityID": 223,
                "CityName": "临夏回族自治州",
                "ProID": 22,
                "CitySort": 223
            }, {"CityID": 224, "CityName": "甘南藏族自治州", "ProID": 22, "CitySort": 224}, {
                "CityID": 225,
                "CityName": "成都市",
                "ProID": 28,
                "CitySort": 225
            }, {"CityID": 226, "CityName": "攀枝花市", "ProID": 28, "CitySort": 226}, {
                "CityID": 227,
                "CityName": "自贡市",
                "ProID": 28,
                "CitySort": 227
            }, {"CityID": 228, "CityName": "绵阳市", "ProID": 28, "CitySort": 228}, {
                "CityID": 229,
                "CityName": "南充市",
                "ProID": 28,
                "CitySort": 229
            }, {"CityID": 230, "CityName": "达州市", "ProID": 28, "CitySort": 230}, {
                "CityID": 231,
                "CityName": "遂宁市",
                "ProID": 28,
                "CitySort": 231
            }, {"CityID": 232, "CityName": "广安市", "ProID": 28, "CitySort": 232}, {
                "CityID": 233,
                "CityName": "巴中市",
                "ProID": 28,
                "CitySort": 233
            }, {"CityID": 234, "CityName": "泸州市", "ProID": 28, "CitySort": 234}, {
                "CityID": 235,
                "CityName": "宜宾市",
                "ProID": 28,
                "CitySort": 235
            }, {"CityID": 236, "CityName": "资阳市", "ProID": 28, "CitySort": 236}, {
                "CityID": 237,
                "CityName": "内江市",
                "ProID": 28,
                "CitySort": 237
            }, {"CityID": 238, "CityName": "乐山市", "ProID": 28, "CitySort": 238}, {
                "CityID": 239,
                "CityName": "眉山市",
                "ProID": 28,
                "CitySort": 239
            }, {"CityID": 240, "CityName": "凉山彝族自治州", "ProID": 28, "CitySort": 240}, {
                "CityID": 241,
                "CityName": "雅安市",
                "ProID": 28,
                "CitySort": 241
            }, {"CityID": 242, "CityName": "甘孜藏族自治州", "ProID": 28, "CitySort": 242}, {
                "CityID": 243,
                "CityName": "阿坝藏族羌族自治州",
                "ProID": 28,
                "CitySort": 243
            }, {"CityID": 244, "CityName": "德阳市", "ProID": 28, "CitySort": 244}, {
                "CityID": 245,
                "CityName": "广元市",
                "ProID": 28,
                "CitySort": 245
            }, {"CityID": 246, "CityName": "贵阳市", "ProID": 29, "CitySort": 246}, {
                "CityID": 247,
                "CityName": "遵义市",
                "ProID": 29,
                "CitySort": 247
            }, {"CityID": 248, "CityName": "安顺市", "ProID": 29, "CitySort": 248}, {
                "CityID": 249,
                "CityName": "黔南布依族苗族自治州",
                "ProID": 29,
                "CitySort": 249
            }, {"CityID": 250, "CityName": "黔东南苗族侗族自治州", "ProID": 29, "CitySort": 250}, {
                "CityID": 251,
                "CityName": "铜仁地区",
                "ProID": 29,
                "CitySort": 251
            }, {"CityID": 252, "CityName": "毕节地区", "ProID": 29, "CitySort": 252}, {
                "CityID": 253,
                "CityName": "六盘水市",
                "ProID": 29,
                "CitySort": 253
            }, {"CityID": 254, "CityName": "黔西南布依族苗族自治州", "ProID": 29, "CitySort": 254}, {
                "CityID": 255,
                "CityName": "海口市",
                "ProID": 20,
                "CitySort": 255
            }, {"CityID": 256, "CityName": "三亚市", "ProID": 20, "CitySort": 256}, {
                "CityID": 257,
                "CityName": "五指山市",
                "ProID": 20,
                "CitySort": 257
            }, {"CityID": 258, "CityName": "琼海市", "ProID": 20, "CitySort": 258}, {
                "CityID": 259,
                "CityName": "儋州市",
                "ProID": 20,
                "CitySort": 259
            }, {"CityID": 260, "CityName": "文昌市", "ProID": 20, "CitySort": 260}, {
                "CityID": 261,
                "CityName": "万宁市",
                "ProID": 20,
                "CitySort": 261
            }, {"CityID": 262, "CityName": "东方市", "ProID": 20, "CitySort": 262}, {
                "CityID": 263,
                "CityName": "澄迈县",
                "ProID": 20,
                "CitySort": 263
            }, {"CityID": 264, "CityName": "定安县", "ProID": 20, "CitySort": 264}, {
                "CityID": 265,
                "CityName": "屯昌县",
                "ProID": 20,
                "CitySort": 265
            }, {"CityID": 266, "CityName": "临高县", "ProID": 20, "CitySort": 266}, {
                "CityID": 267,
                "CityName": "白沙黎族自治县",
                "ProID": 20,
                "CitySort": 267
            }, {"CityID": 268, "CityName": "昌江黎族自治县", "ProID": 20, "CitySort": 268}, {
                "CityID": 269,
                "CityName": "乐东黎族自治县",
                "ProID": 20,
                "CitySort": 269
            }, {"CityID": 270, "CityName": "陵水黎族自治县", "ProID": 20, "CitySort": 270}, {
                "CityID": 271,
                "CityName": "保亭黎族苗族自治县",
                "ProID": 20,
                "CitySort": 271
            }, {"CityID": 272, "CityName": "琼中黎族苗族自治县", "ProID": 20, "CitySort": 272}, {
                "CityID": 273,
                "CityName": "西双版纳傣族自治州",
                "ProID": 30,
                "CitySort": 273
            }, {"CityID": 274, "CityName": "德宏傣族景颇族自治州", "ProID": 30, "CitySort": 274}, {
                "CityID": 275,
                "CityName": "昭通市",
                "ProID": 30,
                "CitySort": 275
            }, {"CityID": 276, "CityName": "昆明市", "ProID": 30, "CitySort": 276}, {
                "CityID": 277,
                "CityName": "大理白族自治州",
                "ProID": 30,
                "CitySort": 277
            }, {"CityID": 278, "CityName": "红河哈尼族彝族自治州", "ProID": 30, "CitySort": 278}, {
                "CityID": 279,
                "CityName": "曲靖市",
                "ProID": 30,
                "CitySort": 279
            }, {"CityID": 280, "CityName": "保山市", "ProID": 30, "CitySort": 280}, {
                "CityID": 281,
                "CityName": "文山壮族苗族自治州",
                "ProID": 30,
                "CitySort": 281
            }, {"CityID": 282, "CityName": "玉溪市", "ProID": 30, "CitySort": 282}, {
                "CityID": 283,
                "CityName": "楚雄彝族自治州",
                "ProID": 30,
                "CitySort": 283
            }, {"CityID": 284, "CityName": "普洱市", "ProID": 30, "CitySort": 284}, {
                "CityID": 285,
                "CityName": "临沧市",
                "ProID": 30,
                "CitySort": 285
            }, {"CityID": 286, "CityName": "怒江傈傈族自治州", "ProID": 30, "CitySort": 286}, {
                "CityID": 287,
                "CityName": "迪庆藏族自治州",
                "ProID": 30,
                "CitySort": 287
            }, {"CityID": 288, "CityName": "丽江市", "ProID": 30, "CitySort": 288}, {
                "CityID": 289,
                "CityName": "海北藏族自治州",
                "ProID": 25,
                "CitySort": 289
            }, {"CityID": 290, "CityName": "西宁市", "ProID": 25, "CitySort": 290}, {
                "CityID": 291,
                "CityName": "海东地区",
                "ProID": 25,
                "CitySort": 291
            }, {"CityID": 292, "CityName": "黄南藏族自治州", "ProID": 25, "CitySort": 292}, {
                "CityID": 293,
                "CityName": "海南藏族自治州",
                "ProID": 25,
                "CitySort": 293
            }, {"CityID": 294, "CityName": "果洛藏族自治州", "ProID": 25, "CitySort": 294}, {
                "CityID": 295,
                "CityName": "玉树藏族自治州",
                "ProID": 25,
                "CitySort": 295
            }, {"CityID": 296, "CityName": "海西蒙古族藏族自治州", "ProID": 25, "CitySort": 296}, {
                "CityID": 297,
                "CityName": "西安市",
                "ProID": 23,
                "CitySort": 297
            }, {"CityID": 298, "CityName": "咸阳市", "ProID": 23, "CitySort": 298}, {
                "CityID": 299,
                "CityName": "延安市",
                "ProID": 23,
                "CitySort": 299
            }, {"CityID": 300, "CityName": "榆林市", "ProID": 23, "CitySort": 300}, {
                "CityID": 301,
                "CityName": "渭南市",
                "ProID": 23,
                "CitySort": 301
            }, {"CityID": 302, "CityName": "商洛市", "ProID": 23, "CitySort": 302}, {
                "CityID": 303,
                "CityName": "安康市",
                "ProID": 23,
                "CitySort": 303
            }, {"CityID": 304, "CityName": "汉中市", "ProID": 23, "CitySort": 304}, {
                "CityID": 305,
                "CityName": "宝鸡市",
                "ProID": 23,
                "CitySort": 305
            }, {"CityID": 306, "CityName": "铜川市", "ProID": 23, "CitySort": 306}, {
                "CityID": 307,
                "CityName": "防城港市",
                "ProID": 21,
                "CitySort": 307
            }, {"CityID": 308, "CityName": "南宁市", "ProID": 21, "CitySort": 308}, {
                "CityID": 309,
                "CityName": "崇左市",
                "ProID": 21,
                "CitySort": 309
            }, {"CityID": 310, "CityName": "来宾市", "ProID": 21, "CitySort": 310}, {
                "CityID": 311,
                "CityName": "柳州市",
                "ProID": 21,
                "CitySort": 311
            }, {"CityID": 312, "CityName": "桂林市", "ProID": 21, "CitySort": 312}, {
                "CityID": 313,
                "CityName": "梧州市",
                "ProID": 21,
                "CitySort": 313
            }, {"CityID": 314, "CityName": "贺州市", "ProID": 21, "CitySort": 314}, {
                "CityID": 315,
                "CityName": "贵港市",
                "ProID": 21,
                "CitySort": 315
            }, {"CityID": 316, "CityName": "玉林市", "ProID": 21, "CitySort": 316}, {
                "CityID": 317,
                "CityName": "百色市",
                "ProID": 21,
                "CitySort": 317
            }, {"CityID": 318, "CityName": "钦州市", "ProID": 21, "CitySort": 318}, {
                "CityID": 319,
                "CityName": "河池市",
                "ProID": 21,
                "CitySort": 319
            }, {"CityID": 320, "CityName": "北海市", "ProID": 21, "CitySort": 320}, {
                "CityID": 321,
                "CityName": "拉萨市",
                "ProID": 31,
                "CitySort": 321
            }, {"CityID": 322, "CityName": "日喀则地区", "ProID": 31, "CitySort": 322}, {
                "CityID": 323,
                "CityName": "山南地区",
                "ProID": 31,
                "CitySort": 323
            }, {"CityID": 324, "CityName": "林芝地区", "ProID": 31, "CitySort": 324}, {
                "CityID": 325,
                "CityName": "昌都地区",
                "ProID": 31,
                "CitySort": 325
            }, {"CityID": 326, "CityName": "那曲地区", "ProID": 31, "CitySort": 326}, {
                "CityID": 327,
                "CityName": "阿里地区",
                "ProID": 31,
                "CitySort": 327
            }, {"CityID": 328, "CityName": "银川市", "ProID": 26, "CitySort": 328}, {
                "CityID": 329,
                "CityName": "石嘴山市",
                "ProID": 26,
                "CitySort": 329
            }, {"CityID": 330, "CityName": "吴忠市", "ProID": 26, "CitySort": 330}, {
                "CityID": 331,
                "CityName": "固原市",
                "ProID": 26,
                "CitySort": 331
            }, {"CityID": 332, "CityName": "中卫市", "ProID": 26, "CitySort": 332}, {
                "CityID": 333,
                "CityName": "塔城地区",
                "ProID": 24,
                "CitySort": 333
            }, {"CityID": 334, "CityName": "哈密地区", "ProID": 24, "CitySort": 334}, {
                "CityID": 335,
                "CityName": "和田地区",
                "ProID": 24,
                "CitySort": 335
            }, {"CityID": 336, "CityName": "阿勒泰地区", "ProID": 24, "CitySort": 336}, {
                "CityID": 337,
                "CityName": "克孜勒苏柯尔克孜自治州",
                "ProID": 24,
                "CitySort": 337
            }, {"CityID": 338, "CityName": "博尔塔拉蒙古自治州", "ProID": 24, "CitySort": 338}, {
                "CityID": 339,
                "CityName": "克拉玛依市",
                "ProID": 24,
                "CitySort": 339
            }, {"CityID": 340, "CityName": "乌鲁木齐市", "ProID": 24, "CitySort": 340}, {
                "CityID": 341,
                "CityName": "石河子市",
                "ProID": 24,
                "CitySort": 341
            }, {"CityID": 342, "CityName": "昌吉回族自治州", "ProID": 24, "CitySort": 342}, {
                "CityID": 343,
                "CityName": "五家渠市",
                "ProID": 24,
                "CitySort": 343
            }, {"CityID": 344, "CityName": "吐鲁番地区", "ProID": 24, "CitySort": 344}, {
                "CityID": 345,
                "CityName": "巴音郭楞蒙古自治州",
                "ProID": 24,
                "CitySort": 345
            }, {"CityID": 346, "CityName": "阿克苏地区", "ProID": 24, "CitySort": 346}, {
                "CityID": 347,
                "CityName": "阿拉尔市",
                "ProID": 24,
                "CitySort": 347
            }, {"CityID": 348, "CityName": "喀什地区", "ProID": 24, "CitySort": 348}, {
                "CityID": 349,
                "CityName": "图木舒克市",
                "ProID": 24,
                "CitySort": 349
            }, {"CityID": 350, "CityName": "伊犁哈萨克自治州", "ProID": 24, "CitySort": 350}, {
                "CityID": 351,
                "CityName": "呼伦贝尔市",
                "ProID": 5,
                "CitySort": 351
            }, {"CityID": 352, "CityName": "呼和浩特市", "ProID": 5, "CitySort": 352}, {
                "CityID": 353,
                "CityName": "包头市",
                "ProID": 5,
                "CitySort": 353
            }, {"CityID": 354, "CityName": "乌海市", "ProID": 5, "CitySort": 354}, {
                "CityID": 355,
                "CityName": "乌兰察布市",
                "ProID": 5,
                "CitySort": 355
            }, {"CityID": 356, "CityName": "通辽市", "ProID": 5, "CitySort": 356}, {
                "CityID": 357,
                "CityName": "赤峰市",
                "ProID": 5,
                "CitySort": 357
            }, {"CityID": 358, "CityName": "鄂尔多斯市", "ProID": 5, "CitySort": 358}, {
                "CityID": 359,
                "CityName": "巴彦淖尔市",
                "ProID": 5,
                "CitySort": 359
            }, {"CityID": 360, "CityName": "锡林郭勒盟", "ProID": 5, "CitySort": 360}, {
                "CityID": 361,
                "CityName": "兴安盟",
                "ProID": 5,
                "CitySort": 361
            }, {"CityID": 362, "CityName": "阿拉善盟", "ProID": 5, "CitySort": 362}, {
                "CityID": 363,
                "CityName": "台北市",
                "ProID": 32,
                "CitySort": 363
            }, {"CityID": 364, "CityName": "高雄市", "ProID": 32, "CitySort": 364}, {
                "CityID": 365,
                "CityName": "基隆市",
                "ProID": 32,
                "CitySort": 365
            }, {"CityID": 366, "CityName": "台中市", "ProID": 32, "CitySort": 366}, {
                "CityID": 367,
                "CityName": "台南市",
                "ProID": 32,
                "CitySort": 367
            }, {"CityID": 368, "CityName": "新竹市", "ProID": 32, "CitySort": 368}, {
                "CityID": 369,
                "CityName": "嘉义市",
                "ProID": 32,
                "CitySort": 369
            }, {"CityID": 370, "CityName": "澳门特别行政区", "ProID": 33, "CitySort": 370}, {
                "CityID": 371,
                "CityName": "香港特别行政区",
                "ProID": 34,
                "CitySort": 371
            }],
        "districts": [
            {"Id": 1, "countyName": "东城区", "CityID": 1, "DisSort": null}, {
                "Id": 2,
                "countyName": "西城区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 3, "countyName": "崇文区", "CityID": 1, "DisSort": null}, {
                "Id": 4,
                "countyName": "宣武区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 5, "countyName": "朝阳区", "CityID": 1, "DisSort": null}, {
                "Id": 6,
                "countyName": "丰台区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 7, "countyName": "石景山区", "CityID": 1, "DisSort": null}, {
                "Id": 8,
                "countyName": "海淀区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 9, "countyName": "门头沟区", "CityID": 1, "DisSort": null}, {
                "Id": 10,
                "countyName": "房山区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 11, "countyName": "通州区", "CityID": 1, "DisSort": null}, {
                "Id": 12,
                "countyName": "顺义区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 13, "countyName": "昌平区", "CityID": 1, "DisSort": null}, {
                "Id": 14,
                "countyName": "大兴区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 15, "countyName": "怀柔区", "CityID": 1, "DisSort": null}, {
                "Id": 16,
                "countyName": "平谷区",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 17, "countyName": "密云县", "CityID": 1, "DisSort": null}, {
                "Id": 18,
                "countyName": "延庆县",
                "CityID": 1,
                "DisSort": null
            }, {"Id": 19, "countyName": "和平区", "CityID": 2, "DisSort": null}, {
                "Id": 20,
                "countyName": "河东区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 21, "countyName": "河西区", "CityID": 2, "DisSort": null}, {
                "Id": 22,
                "countyName": "南开区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 23, "countyName": "河北区", "CityID": 2, "DisSort": null}, {
                "Id": 24,
                "countyName": "红桥区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 25, "countyName": "塘沽区", "CityID": 2, "DisSort": null}, {
                "Id": 26,
                "countyName": "汉沽区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 27, "countyName": "大港区", "CityID": 2, "DisSort": null}, {
                "Id": 28,
                "countyName": "东丽区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 29, "countyName": "西青区", "CityID": 2, "DisSort": null}, {
                "Id": 30,
                "countyName": "津南区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 31, "countyName": "北辰区", "CityID": 2, "DisSort": null}, {
                "Id": 32,
                "countyName": "武清区",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 33, "countyName": "宝坻区", "CityID": 2, "DisSort": null}, {
                "Id": 34,
                "countyName": "宁河县",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 35, "countyName": "静海县", "CityID": 2, "DisSort": null}, {
                "Id": 36,
                "countyName": "蓟县",
                "CityID": 2,
                "DisSort": null
            }, {"Id": 37, "countyName": "黄浦区", "CityID": 3, "DisSort": null}, {
                "Id": 38,
                "countyName": "卢湾区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 39, "countyName": "徐汇区", "CityID": 3, "DisSort": null}, {
                "Id": 40,
                "countyName": "长宁区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 41, "countyName": "静安区", "CityID": 3, "DisSort": null}, {
                "Id": 42,
                "countyName": "普陀区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 43, "countyName": "闸北区", "CityID": 3, "DisSort": null}, {
                "Id": 44,
                "countyName": "虹口区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 45, "countyName": "杨浦区", "CityID": 3, "DisSort": null}, {
                "Id": 46,
                "countyName": "闵行区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 47, "countyName": "宝山区", "CityID": 3, "DisSort": null}, {
                "Id": 48,
                "countyName": "嘉定区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 49, "countyName": "浦东新区", "CityID": 3, "DisSort": null}, {
                "Id": 50,
                "countyName": "金山区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 51, "countyName": "松江区", "CityID": 3, "DisSort": null}, {
                "Id": 52,
                "countyName": "青浦区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 53, "countyName": "南汇区", "CityID": 3, "DisSort": null}, {
                "Id": 54,
                "countyName": "奉贤区",
                "CityID": 3,
                "DisSort": null
            }, {"Id": 55, "countyName": "崇明县", "CityID": 3, "DisSort": null}, {
                "Id": 56,
                "countyName": "万州区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 57, "countyName": "涪陵区", "CityID": 4, "DisSort": null}, {
                "Id": 58,
                "countyName": "渝中区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 59, "countyName": "大渡口区", "CityID": 4, "DisSort": null}, {
                "Id": 60,
                "countyName": "江北区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 61, "countyName": "沙坪坝区", "CityID": 4, "DisSort": null}, {
                "Id": 62,
                "countyName": "九龙坡区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 63, "countyName": "南岸区", "CityID": 4, "DisSort": null}, {
                "Id": 64,
                "countyName": "北碚区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 65, "countyName": "万盛区", "CityID": 4, "DisSort": null}, {
                "Id": 66,
                "countyName": "双桥区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 67, "countyName": "渝北区", "CityID": 4, "DisSort": null}, {
                "Id": 68,
                "countyName": "巴南区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 69, "countyName": "黔江区", "CityID": 4, "DisSort": null}, {
                "Id": 70,
                "countyName": "长寿区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 71, "countyName": "江津区", "CityID": 4, "DisSort": null}, {
                "Id": 72,
                "countyName": "合川区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 73, "countyName": "永川区", "CityID": 4, "DisSort": null}, {
                "Id": 74,
                "countyName": "南川区",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 75, "countyName": "綦江县", "CityID": 4, "DisSort": null}, {
                "Id": 76,
                "countyName": "潼南县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 77, "countyName": "铜梁县", "CityID": 4, "DisSort": null}, {
                "Id": 78,
                "countyName": "大足县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 79, "countyName": "荣昌县", "CityID": 4, "DisSort": null}, {
                "Id": 80,
                "countyName": "璧山县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 81, "countyName": "梁平县", "CityID": 4, "DisSort": null}, {
                "Id": 82,
                "countyName": "城口县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 83, "countyName": "丰都县", "CityID": 4, "DisSort": null}, {
                "Id": 84,
                "countyName": "垫江县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 85, "countyName": "武隆县", "CityID": 4, "DisSort": null}, {
                "Id": 86,
                "countyName": "忠县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 87, "countyName": "开县", "CityID": 4, "DisSort": null}, {
                "Id": 88,
                "countyName": "云阳县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 89, "countyName": "奉节县", "CityID": 4, "DisSort": null}, {
                "Id": 90,
                "countyName": "巫山县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 91, "countyName": "巫溪县", "CityID": 4, "DisSort": null}, {
                "Id": 92,
                "countyName": "石柱土家族自治县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 93, "countyName": "秀山土家族苗族自治县", "CityID": 4, "DisSort": null}, {
                "Id": 94,
                "countyName": "酉阳土家族苗族自治县",
                "CityID": 4,
                "DisSort": null
            }, {"Id": 95, "countyName": "彭水苗族土家族自治县", "CityID": 4, "DisSort": null}, {
                "Id": 96,
                "countyName": "邯山区",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 97, "countyName": "丛台区", "CityID": 5, "DisSort": null}, {
                "Id": 98,
                "countyName": "复兴区",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 99, "countyName": "峰峰矿区", "CityID": 5, "DisSort": null}, {
                "Id": 100,
                "countyName": "邯郸县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 101, "countyName": "临漳县", "CityID": 5, "DisSort": null}, {
                "Id": 102,
                "countyName": "成安县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 103, "countyName": "大名县", "CityID": 5, "DisSort": null}, {
                "Id": 104,
                "countyName": "涉县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 105, "countyName": "磁县", "CityID": 5, "DisSort": null}, {
                "Id": 106,
                "countyName": "肥乡县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 107, "countyName": "永年县", "CityID": 5, "DisSort": null}, {
                "Id": 108,
                "countyName": "邱县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 109, "countyName": "鸡泽县", "CityID": 5, "DisSort": null}, {
                "Id": 110,
                "countyName": "广平县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 111, "countyName": "馆陶县", "CityID": 5, "DisSort": null}, {
                "Id": 112,
                "countyName": "魏县",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 113, "countyName": "曲周县", "CityID": 5, "DisSort": null}, {
                "Id": 114,
                "countyName": "武安市",
                "CityID": 5,
                "DisSort": null
            }, {"Id": 115, "countyName": "长安区", "CityID": 6, "DisSort": null}, {
                "Id": 116,
                "countyName": "桥东区",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 117, "countyName": "桥西区", "CityID": 6, "DisSort": null}, {
                "Id": 118,
                "countyName": "新华区",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 119, "countyName": "井陉矿区", "CityID": 6, "DisSort": null}, {
                "Id": 120,
                "countyName": "裕华区",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 121, "countyName": "井陉县", "CityID": 6, "DisSort": null}, {
                "Id": 122,
                "countyName": "正定县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 123, "countyName": "栾城县", "CityID": 6, "DisSort": null}, {
                "Id": 124,
                "countyName": "行唐县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 125, "countyName": "灵寿县", "CityID": 6, "DisSort": null}, {
                "Id": 126,
                "countyName": "高邑县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 127, "countyName": "深泽县", "CityID": 6, "DisSort": null}, {
                "Id": 128,
                "countyName": "赞皇县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 129, "countyName": "无极县", "CityID": 6, "DisSort": null}, {
                "Id": 130,
                "countyName": "平山县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 131, "countyName": "元氏县", "CityID": 6, "DisSort": null}, {
                "Id": 132,
                "countyName": "赵县",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 133, "countyName": "辛集市", "CityID": 6, "DisSort": null}, {
                "Id": 134,
                "countyName": "藁城市",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 135, "countyName": "晋州市", "CityID": 6, "DisSort": null}, {
                "Id": 136,
                "countyName": "新乐市",
                "CityID": 6,
                "DisSort": null
            }, {"Id": 137, "countyName": "鹿泉市", "CityID": 6, "DisSort": null}, {
                "Id": 138,
                "countyName": "新市区",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 139, "countyName": "北市区", "CityID": 7, "DisSort": null}, {
                "Id": 140,
                "countyName": "南市区",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 141, "countyName": "满城县", "CityID": 7, "DisSort": null}, {
                "Id": 142,
                "countyName": "清苑县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 143, "countyName": "涞水县", "CityID": 7, "DisSort": null}, {
                "Id": 144,
                "countyName": "阜平县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 145, "countyName": "徐水县", "CityID": 7, "DisSort": null}, {
                "Id": 146,
                "countyName": "定兴县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 147, "countyName": "唐县", "CityID": 7, "DisSort": null}, {
                "Id": 148,
                "countyName": "高阳县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 149, "countyName": "容城县", "CityID": 7, "DisSort": null}, {
                "Id": 150,
                "countyName": "涞源县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 151, "countyName": "望都县", "CityID": 7, "DisSort": null}, {
                "Id": 152,
                "countyName": "安新县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 153, "countyName": "易县", "CityID": 7, "DisSort": null}, {
                "Id": 154,
                "countyName": "曲阳县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 155, "countyName": "蠡县", "CityID": 7, "DisSort": null}, {
                "Id": 156,
                "countyName": "顺平县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 157, "countyName": "博野县", "CityID": 7, "DisSort": null}, {
                "Id": 158,
                "countyName": "雄县",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 159, "countyName": "涿州市", "CityID": 7, "DisSort": null}, {
                "Id": 160,
                "countyName": "定州市",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 161, "countyName": "安国市", "CityID": 7, "DisSort": null}, {
                "Id": 162,
                "countyName": "高碑店市",
                "CityID": 7,
                "DisSort": null
            }, {"Id": 163, "countyName": "桥东区", "CityID": 8, "DisSort": null}, {
                "Id": 164,
                "countyName": "桥西区",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 165, "countyName": "宣化区", "CityID": 8, "DisSort": null}, {
                "Id": 166,
                "countyName": "下花园区",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 167, "countyName": "宣化县", "CityID": 8, "DisSort": null}, {
                "Id": 168,
                "countyName": "张北县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 169, "countyName": "康保县", "CityID": 8, "DisSort": null}, {
                "Id": 170,
                "countyName": "沽源县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 171, "countyName": "尚义县", "CityID": 8, "DisSort": null}, {
                "Id": 172,
                "countyName": "蔚县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 173, "countyName": "阳原县", "CityID": 8, "DisSort": null}, {
                "Id": 174,
                "countyName": "怀安县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 175, "countyName": "万全县", "CityID": 8, "DisSort": null}, {
                "Id": 176,
                "countyName": "怀来县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 177, "countyName": "涿鹿县", "CityID": 8, "DisSort": null}, {
                "Id": 178,
                "countyName": "赤城县",
                "CityID": 8,
                "DisSort": null
            }, {"Id": 179, "countyName": "崇礼县", "CityID": 8, "DisSort": null}, {
                "Id": 180,
                "countyName": "双桥区",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 181, "countyName": "双滦区", "CityID": 9, "DisSort": null}, {
                "Id": 182,
                "countyName": "鹰手营子矿区",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 183, "countyName": "承德县", "CityID": 9, "DisSort": null}, {
                "Id": 184,
                "countyName": "兴隆县",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 185, "countyName": "平泉县", "CityID": 9, "DisSort": null}, {
                "Id": 186,
                "countyName": "滦平县",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 187, "countyName": "隆化县", "CityID": 9, "DisSort": null}, {
                "Id": 188,
                "countyName": "丰宁满族自治县",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 189, "countyName": "宽城满族自治县", "CityID": 9, "DisSort": null}, {
                "Id": 190,
                "countyName": "围场满族蒙古族自治县",
                "CityID": 9,
                "DisSort": null
            }, {"Id": 191, "countyName": "路南区", "CityID": 10, "DisSort": null}, {
                "Id": 192,
                "countyName": "路北区",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 193, "countyName": "古冶区", "CityID": 10, "DisSort": null}, {
                "Id": 194,
                "countyName": "开平区",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 195, "countyName": "丰南区", "CityID": 10, "DisSort": null}, {
                "Id": 196,
                "countyName": "丰润区",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 197, "countyName": "滦县", "CityID": 10, "DisSort": null}, {
                "Id": 198,
                "countyName": "滦南县",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 199, "countyName": "乐亭县", "CityID": 10, "DisSort": null}, {
                "Id": 200,
                "countyName": "迁西县",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 201, "countyName": "玉田县", "CityID": 10, "DisSort": null}, {
                "Id": 202,
                "countyName": "唐海县",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 203, "countyName": "遵化市", "CityID": 10, "DisSort": null}, {
                "Id": 204,
                "countyName": "迁安市",
                "CityID": 10,
                "DisSort": null
            }, {"Id": 205, "countyName": "安次区", "CityID": 11, "DisSort": null}, {
                "Id": 206,
                "countyName": "广阳区",
                "CityID": 11,
                "DisSort": null
            }, {"Id": 207, "countyName": "固安县", "CityID": 11, "DisSort": null}, {
                "Id": 208,
                "countyName": "永清县",
                "CityID": 11,
                "DisSort": null
            }, {"Id": 209, "countyName": "香河县", "CityID": 11, "DisSort": null}, {
                "Id": 210,
                "countyName": "大城县",
                "CityID": 11,
                "DisSort": null
            }, {"Id": 211, "countyName": "文安县", "CityID": 11, "DisSort": null}, {
                "Id": 212,
                "countyName": "大厂回族自治县",
                "CityID": 11,
                "DisSort": null
            }, {"Id": 213, "countyName": "霸州市", "CityID": 11, "DisSort": null}, {
                "Id": 214,
                "countyName": "三河市",
                "CityID": 11,
                "DisSort": null
            }, {"Id": 215, "countyName": "新华区", "CityID": 12, "DisSort": null}, {
                "Id": 216,
                "countyName": "运河区",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 217, "countyName": "沧县", "CityID": 12, "DisSort": null}, {
                "Id": 218,
                "countyName": "青县",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 219, "countyName": "东光县", "CityID": 12, "DisSort": null}, {
                "Id": 220,
                "countyName": "海兴县",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 221, "countyName": "盐山县", "CityID": 12, "DisSort": null}, {
                "Id": 222,
                "countyName": "肃宁县",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 223, "countyName": "南皮县", "CityID": 12, "DisSort": null}, {
                "Id": 224,
                "countyName": "吴桥县",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 225, "countyName": "献县", "CityID": 12, "DisSort": null}, {
                "Id": 226,
                "countyName": "孟村回族自治县",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 227, "countyName": "泊头市", "CityID": 12, "DisSort": null}, {
                "Id": 228,
                "countyName": "任丘市",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 229, "countyName": "黄骅市", "CityID": 12, "DisSort": null}, {
                "Id": 230,
                "countyName": "河间市",
                "CityID": 12,
                "DisSort": null
            }, {"Id": 231, "countyName": "桃城区", "CityID": 13, "DisSort": null}, {
                "Id": 232,
                "countyName": "枣强县",
                "CityID": 13,
                "DisSort": null
            }, {"Id": 233, "countyName": "武邑县", "CityID": 13, "DisSort": null}, {
                "Id": 234,
                "countyName": "武强县",
                "CityID": 13,
                "DisSort": null
            }, {"Id": 235, "countyName": "饶阳县", "CityID": 13, "DisSort": null}, {
                "Id": 236,
                "countyName": "安平县",
                "CityID": 13,
                "DisSort": null
            }, {"Id": 237, "countyName": "故城县", "CityID": 13, "DisSort": null}, {
                "Id": 238,
                "countyName": "景县",
                "CityID": 13,
                "DisSort": null
            }, {"Id": 239, "countyName": "阜城县", "CityID": 13, "DisSort": null}, {
                "Id": 240,
                "countyName": "冀州市",
                "CityID": 13,
                "DisSort": null
            }, {"Id": 241, "countyName": "深州市", "CityID": 13, "DisSort": null}, {
                "Id": 242,
                "countyName": "桥东区",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 243, "countyName": "桥西区", "CityID": 14, "DisSort": null}, {
                "Id": 244,
                "countyName": "邢台县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 245, "countyName": "临城县", "CityID": 14, "DisSort": null}, {
                "Id": 246,
                "countyName": "内丘县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 247, "countyName": "柏乡县", "CityID": 14, "DisSort": null}, {
                "Id": 248,
                "countyName": "隆尧县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 249, "countyName": "任县", "CityID": 14, "DisSort": null}, {
                "Id": 250,
                "countyName": "南和县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 251, "countyName": "宁晋县", "CityID": 14, "DisSort": null}, {
                "Id": 252,
                "countyName": "巨鹿县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 253, "countyName": "新河县", "CityID": 14, "DisSort": null}, {
                "Id": 254,
                "countyName": "广宗县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 255, "countyName": "平乡县", "CityID": 14, "DisSort": null}, {
                "Id": 256,
                "countyName": "威县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 257, "countyName": "清河县", "CityID": 14, "DisSort": null}, {
                "Id": 258,
                "countyName": "临西县",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 259, "countyName": "南宫市", "CityID": 14, "DisSort": null}, {
                "Id": 260,
                "countyName": "沙河市",
                "CityID": 14,
                "DisSort": null
            }, {"Id": 261, "countyName": "海港区", "CityID": 15, "DisSort": null}, {
                "Id": 262,
                "countyName": "山海关区",
                "CityID": 15,
                "DisSort": null
            }, {"Id": 263, "countyName": "北戴河区", "CityID": 15, "DisSort": null}, {
                "Id": 264,
                "countyName": "青龙满族自治县",
                "CityID": 15,
                "DisSort": null
            }, {"Id": 265, "countyName": "昌黎县", "CityID": 15, "DisSort": null}, {
                "Id": 266,
                "countyName": "抚宁县",
                "CityID": 15,
                "DisSort": null
            }, {"Id": 267, "countyName": "卢龙县", "CityID": 15, "DisSort": null}, {
                "Id": 268,
                "countyName": "朔城区",
                "CityID": 16,
                "DisSort": null
            }, {"Id": 269, "countyName": "平鲁区", "CityID": 16, "DisSort": null}, {
                "Id": 270,
                "countyName": "山阴县",
                "CityID": 16,
                "DisSort": null
            }, {"Id": 271, "countyName": "应县", "CityID": 16, "DisSort": null}, {
                "Id": 272,
                "countyName": "右玉县",
                "CityID": 16,
                "DisSort": null
            }, {"Id": 273, "countyName": "怀仁县", "CityID": 16, "DisSort": null}, {
                "Id": 274,
                "countyName": "忻府区",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 275, "countyName": "定襄县", "CityID": 17, "DisSort": null}, {
                "Id": 276,
                "countyName": "五台县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 277, "countyName": "代县", "CityID": 17, "DisSort": null}, {
                "Id": 278,
                "countyName": "繁峙县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 279, "countyName": "宁武县", "CityID": 17, "DisSort": null}, {
                "Id": 280,
                "countyName": "静乐县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 281, "countyName": "神池县", "CityID": 17, "DisSort": null}, {
                "Id": 282,
                "countyName": "五寨县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 283, "countyName": "岢岚县", "CityID": 17, "DisSort": null}, {
                "Id": 284,
                "countyName": "河曲县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 285, "countyName": "保德县", "CityID": 17, "DisSort": null}, {
                "Id": 286,
                "countyName": "偏关县",
                "CityID": 17,
                "DisSort": null
            }, {"Id": 287, "countyName": "原平市", "CityID": 17, "DisSort": null}, {
                "Id": 288,
                "countyName": "小店区",
                "CityID": 18,
                "DisSort": null
            }, {"Id": 289, "countyName": "迎泽区", "CityID": 18, "DisSort": null}, {
                "Id": 290,
                "countyName": "杏花岭区",
                "CityID": 18,
                "DisSort": null
            }, {"Id": 291, "countyName": "尖草坪区", "CityID": 18, "DisSort": null}, {
                "Id": 292,
                "countyName": "万柏林区",
                "CityID": 18,
                "DisSort": null
            }, {"Id": 293, "countyName": "晋源区", "CityID": 18, "DisSort": null}, {
                "Id": 294,
                "countyName": "清徐县",
                "CityID": 18,
                "DisSort": null
            }, {"Id": 295, "countyName": "阳曲县", "CityID": 18, "DisSort": null}, {
                "Id": 296,
                "countyName": "娄烦县",
                "CityID": 18,
                "DisSort": null
            }, {"Id": 297, "countyName": "古交市", "CityID": 18, "DisSort": null}, {
                "Id": 298,
                "countyName": "矿区",
                "CityID": 19,
                "DisSort": null
            }, {"Id": 299, "countyName": "南郊区", "CityID": 19, "DisSort": null}, {
                "Id": 300,
                "countyName": "新荣区",
                "CityID": 19,
                "DisSort": null
            }, {"Id": 301, "countyName": "阳高县", "CityID": 19, "DisSort": null}, {
                "Id": 302,
                "countyName": "天镇县",
                "CityID": 19,
                "DisSort": null
            }, {"Id": 303, "countyName": "广灵县", "CityID": 19, "DisSort": null}, {
                "Id": 304,
                "countyName": "灵丘县",
                "CityID": 19,
                "DisSort": null
            }, {"Id": 305, "countyName": "浑源县", "CityID": 19, "DisSort": null}, {
                "Id": 306,
                "countyName": "左云县",
                "CityID": 19,
                "DisSort": null
            }, {"Id": 307, "countyName": "大同县", "CityID": 19, "DisSort": null}, {
                "Id": 308,
                "countyName": "矿区",
                "CityID": 20,
                "DisSort": null
            }, {"Id": 309, "countyName": "平定县", "CityID": 20, "DisSort": null}, {
                "Id": 310,
                "countyName": "盂县",
                "CityID": 20,
                "DisSort": null
            }, {"Id": 311, "countyName": "榆次区", "CityID": 21, "DisSort": null}, {
                "Id": 312,
                "countyName": "榆社县",
                "CityID": 21,
                "DisSort": null
            }, {"Id": 313, "countyName": "左权县", "CityID": 21, "DisSort": null}, {
                "Id": 314,
                "countyName": "和顺县",
                "CityID": 21,
                "DisSort": null
            }, {"Id": 315, "countyName": "昔阳县", "CityID": 21, "DisSort": null}, {
                "Id": 316,
                "countyName": "寿阳县",
                "CityID": 21,
                "DisSort": null
            }, {"Id": 317, "countyName": "太谷县", "CityID": 21, "DisSort": null}, {
                "Id": 318,
                "countyName": "祁县",
                "CityID": 21,
                "DisSort": null
            }, {"Id": 319, "countyName": "平遥县", "CityID": 21, "DisSort": null}, {
                "Id": 320,
                "countyName": "灵石县",
                "CityID": 21,
                "DisSort": null
            }, {"Id": 321, "countyName": "介休市", "CityID": 21, "DisSort": null}, {
                "Id": 322,
                "countyName": "长治县",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 323, "countyName": "襄垣县", "CityID": 22, "DisSort": null}, {
                "Id": 324,
                "countyName": "屯留县",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 325, "countyName": "平顺县", "CityID": 22, "DisSort": null}, {
                "Id": 326,
                "countyName": "黎城县",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 327, "countyName": "壶关县", "CityID": 22, "DisSort": null}, {
                "Id": 328,
                "countyName": "长子县",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 329, "countyName": "武乡县", "CityID": 22, "DisSort": null}, {
                "Id": 330,
                "countyName": "沁县",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 331, "countyName": "沁源县", "CityID": 22, "DisSort": null}, {
                "Id": 332,
                "countyName": "潞城市",
                "CityID": 22,
                "DisSort": null
            }, {"Id": 333, "countyName": "沁水县", "CityID": 23, "DisSort": null}, {
                "Id": 334,
                "countyName": "阳城县",
                "CityID": 23,
                "DisSort": null
            }, {"Id": 335, "countyName": "陵川县", "CityID": 23, "DisSort": null}, {
                "Id": 336,
                "countyName": "泽州县",
                "CityID": 23,
                "DisSort": null
            }, {"Id": 337, "countyName": "高平市", "CityID": 23, "DisSort": null}, {
                "Id": 338,
                "countyName": "尧都区",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 339, "countyName": "曲沃县", "CityID": 24, "DisSort": null}, {
                "Id": 340,
                "countyName": "翼城县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 341, "countyName": "襄汾县", "CityID": 24, "DisSort": null}, {
                "Id": 342,
                "countyName": "洪洞县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 343, "countyName": "古县", "CityID": 24, "DisSort": null}, {
                "Id": 344,
                "countyName": "安泽县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 345, "countyName": "浮山县", "CityID": 24, "DisSort": null}, {
                "Id": 346,
                "countyName": "吉县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 347, "countyName": "乡宁县", "CityID": 24, "DisSort": null}, {
                "Id": 348,
                "countyName": "大宁县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 349, "countyName": "隰县", "CityID": 24, "DisSort": null}, {
                "Id": 350,
                "countyName": "永和县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 351, "countyName": "蒲县", "CityID": 24, "DisSort": null}, {
                "Id": 352,
                "countyName": "汾西县",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 353, "countyName": "侯马市", "CityID": 24, "DisSort": null}, {
                "Id": 354,
                "countyName": "霍州市",
                "CityID": 24,
                "DisSort": null
            }, {"Id": 355, "countyName": "离石区", "CityID": 25, "DisSort": null}, {
                "Id": 356,
                "countyName": "文水县",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 357, "countyName": "交城县", "CityID": 25, "DisSort": null}, {
                "Id": 358,
                "countyName": "兴县",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 359, "countyName": "临县", "CityID": 25, "DisSort": null}, {
                "Id": 360,
                "countyName": "柳林县",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 361, "countyName": "石楼县", "CityID": 25, "DisSort": null}, {
                "Id": 362,
                "countyName": "岚县",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 363, "countyName": "方山县", "CityID": 25, "DisSort": null}, {
                "Id": 364,
                "countyName": "中阳县",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 365, "countyName": "交口县", "CityID": 25, "DisSort": null}, {
                "Id": 366,
                "countyName": "孝义市",
                "CityID": 25,
                "DisSort": null
            }, {"Id": 367, "countyName": "汾阳市", "CityID": 25, "DisSort": null}, {
                "Id": 368,
                "countyName": "盐湖区",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 369, "countyName": "临猗县", "CityID": 26, "DisSort": null}, {
                "Id": 370,
                "countyName": "万荣县",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 371, "countyName": "闻喜县", "CityID": 26, "DisSort": null}, {
                "Id": 372,
                "countyName": "稷山县",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 373, "countyName": "新绛县", "CityID": 26, "DisSort": null}, {
                "Id": 374,
                "countyName": "绛县",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 375, "countyName": "垣曲县", "CityID": 26, "DisSort": null}, {
                "Id": 376,
                "countyName": "夏县",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 377, "countyName": "平陆县", "CityID": 26, "DisSort": null}, {
                "Id": 378,
                "countyName": "芮城县",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 379, "countyName": "永济市", "CityID": 26, "DisSort": null}, {
                "Id": 380,
                "countyName": "河津市",
                "CityID": 26,
                "DisSort": null
            }, {"Id": 381, "countyName": "和平区", "CityID": 27, "DisSort": null}, {
                "Id": 382,
                "countyName": "沈河区",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 383, "countyName": "大东区", "CityID": 27, "DisSort": null}, {
                "Id": 384,
                "countyName": "皇姑区",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 385, "countyName": "铁西区", "CityID": 27, "DisSort": null}, {
                "Id": 386,
                "countyName": "苏家屯区",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 387, "countyName": "东陵区", "CityID": 27, "DisSort": null}, {
                "Id": 388,
                "countyName": "沈北新区",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 389, "countyName": "于洪区", "CityID": 27, "DisSort": null}, {
                "Id": 390,
                "countyName": "辽中县",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 391, "countyName": "康平县", "CityID": 27, "DisSort": null}, {
                "Id": 392,
                "countyName": "法库县",
                "CityID": 27,
                "DisSort": null
            }, {"Id": 393, "countyName": "新民市", "CityID": 27, "DisSort": null}, {
                "Id": 394,
                "countyName": "银州区",
                "CityID": 28,
                "DisSort": null
            }, {"Id": 395, "countyName": "清河区", "CityID": 28, "DisSort": null}, {
                "Id": 396,
                "countyName": "铁岭县",
                "CityID": 28,
                "DisSort": null
            }, {"Id": 397, "countyName": "西丰县", "CityID": 28, "DisSort": null}, {
                "Id": 398,
                "countyName": "昌图县",
                "CityID": 28,
                "DisSort": null
            }, {"Id": 399, "countyName": "调兵山市", "CityID": 28, "DisSort": null}, {
                "Id": 400,
                "countyName": "开原市",
                "CityID": 28,
                "DisSort": null
            }, {"Id": 401, "countyName": "长海县", "CityID": 29, "DisSort": null}, {
                "Id": 402,
                "countyName": "旅顺口区",
                "CityID": 29,
                "DisSort": null
            }, {"Id": 403, "countyName": "中山区", "CityID": 29, "DisSort": null}, {
                "Id": 404,
                "countyName": "西岗区",
                "CityID": 29,
                "DisSort": null
            }, {"Id": 405, "countyName": "沙河口区", "CityID": 29, "DisSort": null}, {
                "Id": 406,
                "countyName": "甘井子区",
                "CityID": 29,
                "DisSort": null
            }, {"Id": 407, "countyName": "金州区", "CityID": 29, "DisSort": null}, {
                "Id": 408,
                "countyName": "普兰店市",
                "CityID": 29,
                "DisSort": null
            }, {"Id": 409, "countyName": "瓦房店市", "CityID": 29, "DisSort": null}, {
                "Id": 410,
                "countyName": "庄河市",
                "CityID": 29,
                "DisSort": null
            }, {"Id": 411, "countyName": "铁东区", "CityID": 30, "DisSort": null}, {
                "Id": 412,
                "countyName": "铁西区",
                "CityID": 30,
                "DisSort": null
            }, {"Id": 413, "countyName": "立山区", "CityID": 30, "DisSort": null}, {
                "Id": 414,
                "countyName": "千山区",
                "CityID": 30,
                "DisSort": null
            }, {"Id": 415, "countyName": "台安县", "CityID": 30, "DisSort": null}, {
                "Id": 416,
                "countyName": "岫岩满族自治县",
                "CityID": 30,
                "DisSort": null
            }, {"Id": 417, "countyName": "海城市", "CityID": 30, "DisSort": null}, {
                "Id": 418,
                "countyName": "新抚区",
                "CityID": 31,
                "DisSort": null
            }, {"Id": 419, "countyName": "东洲区", "CityID": 31, "DisSort": null}, {
                "Id": 420,
                "countyName": "望花区",
                "CityID": 31,
                "DisSort": null
            }, {"Id": 421, "countyName": "顺城区", "CityID": 31, "DisSort": null}, {
                "Id": 422,
                "countyName": "抚顺县",
                "CityID": 31,
                "DisSort": null
            }, {"Id": 423, "countyName": "新宾满族自治县", "CityID": 31, "DisSort": null}, {
                "Id": 424,
                "countyName": "清原满族自治县",
                "CityID": 31,
                "DisSort": null
            }, {"Id": 425, "countyName": "平山区", "CityID": 32, "DisSort": null}, {
                "Id": 426,
                "countyName": "溪湖区",
                "CityID": 32,
                "DisSort": null
            }, {"Id": 427, "countyName": "明山区", "CityID": 32, "DisSort": null}, {
                "Id": 428,
                "countyName": "南芬区",
                "CityID": 32,
                "DisSort": null
            }, {"Id": 429, "countyName": "本溪满族自治县", "CityID": 32, "DisSort": null}, {
                "Id": 430,
                "countyName": "桓仁满族自治县",
                "CityID": 32,
                "DisSort": null
            }, {"Id": 431, "countyName": "元宝区", "CityID": 33, "DisSort": null}, {
                "Id": 432,
                "countyName": "振兴区",
                "CityID": 33,
                "DisSort": null
            }, {"Id": 433, "countyName": "振安区", "CityID": 33, "DisSort": null}, {
                "Id": 434,
                "countyName": "宽甸满族自治县",
                "CityID": 33,
                "DisSort": null
            }, {"Id": 435, "countyName": "东港市", "CityID": 33, "DisSort": null}, {
                "Id": 436,
                "countyName": "凤城市",
                "CityID": 33,
                "DisSort": null
            }, {"Id": 437, "countyName": "古塔区", "CityID": 34, "DisSort": null}, {
                "Id": 438,
                "countyName": "凌河区",
                "CityID": 34,
                "DisSort": null
            }, {"Id": 439, "countyName": "太和区", "CityID": 34, "DisSort": null}, {
                "Id": 440,
                "countyName": "黑山县",
                "CityID": 34,
                "DisSort": null
            }, {"Id": 441, "countyName": "义县", "CityID": 34, "DisSort": null}, {
                "Id": 442,
                "countyName": "凌海市",
                "CityID": 34,
                "DisSort": null
            }, {"Id": 443, "countyName": "北镇市", "CityID": 34, "DisSort": null}, {
                "Id": 444,
                "countyName": "站前区",
                "CityID": 35,
                "DisSort": null
            }, {"Id": 445, "countyName": "西市区", "CityID": 35, "DisSort": null}, {
                "Id": 446,
                "countyName": "鮁鱼圈区",
                "CityID": 35,
                "DisSort": null
            }, {"Id": 447, "countyName": "老边区", "CityID": 35, "DisSort": null}, {
                "Id": 448,
                "countyName": "盖州市",
                "CityID": 35,
                "DisSort": null
            }, {"Id": 449, "countyName": "大石桥市", "CityID": 35, "DisSort": null}, {
                "Id": 450,
                "countyName": "海州区",
                "CityID": 36,
                "DisSort": null
            }, {"Id": 451, "countyName": "新邱区", "CityID": 36, "DisSort": null}, {
                "Id": 452,
                "countyName": "太平区",
                "CityID": 36,
                "DisSort": null
            }, {"Id": 453, "countyName": "清河门区", "CityID": 36, "DisSort": null}, {
                "Id": 454,
                "countyName": "细河区",
                "CityID": 36,
                "DisSort": null
            }, {"Id": 455, "countyName": "阜新蒙古族自治县", "CityID": 36, "DisSort": null}, {
                "Id": 456,
                "countyName": "彰武县",
                "CityID": 36,
                "DisSort": null
            }, {"Id": 457, "countyName": "白塔区", "CityID": 37, "DisSort": null}, {
                "Id": 458,
                "countyName": "文圣区",
                "CityID": 37,
                "DisSort": null
            }, {"Id": 459, "countyName": "宏伟区", "CityID": 37, "DisSort": null}, {
                "Id": 460,
                "countyName": "弓长岭区",
                "CityID": 37,
                "DisSort": null
            }, {"Id": 461, "countyName": "太子河区", "CityID": 37, "DisSort": null}, {
                "Id": 462,
                "countyName": "辽阳县",
                "CityID": 37,
                "DisSort": null
            }, {"Id": 463, "countyName": "灯塔市", "CityID": 37, "DisSort": null}, {
                "Id": 464,
                "countyName": "双塔区",
                "CityID": 38,
                "DisSort": null
            }, {"Id": 465, "countyName": "龙城区", "CityID": 38, "DisSort": null}, {
                "Id": 466,
                "countyName": "朝阳县",
                "CityID": 38,
                "DisSort": null
            }, {"Id": 467, "countyName": "建平县", "CityID": 38, "DisSort": null}, {
                "Id": 468,
                "countyName": "喀喇沁左翼蒙古族自治县",
                "CityID": 38,
                "DisSort": null
            }, {"Id": 469, "countyName": "北票市", "CityID": 38, "DisSort": null}, {
                "Id": 470,
                "countyName": "凌源市",
                "CityID": 38,
                "DisSort": null
            }, {"Id": 471, "countyName": "双台子区", "CityID": 39, "DisSort": null}, {
                "Id": 472,
                "countyName": "兴隆台区",
                "CityID": 39,
                "DisSort": null
            }, {"Id": 473, "countyName": "大洼县", "CityID": 39, "DisSort": null}, {
                "Id": 474,
                "countyName": "盘山县",
                "CityID": 39,
                "DisSort": null
            }, {"Id": 475, "countyName": "连山区", "CityID": 40, "DisSort": null}, {
                "Id": 476,
                "countyName": "龙港区",
                "CityID": 40,
                "DisSort": null
            }, {"Id": 477, "countyName": "南票区", "CityID": 40, "DisSort": null}, {
                "Id": 478,
                "countyName": "绥中县",
                "CityID": 40,
                "DisSort": null
            }, {"Id": 479, "countyName": "建昌县", "CityID": 40, "DisSort": null}, {
                "Id": 480,
                "countyName": "兴城市",
                "CityID": 40,
                "DisSort": null
            }, {"Id": 481, "countyName": "南关区", "CityID": 41, "DisSort": null}, {
                "Id": 482,
                "countyName": "宽城区",
                "CityID": 41,
                "DisSort": null
            }, {"Id": 483, "countyName": "朝阳区", "CityID": 41, "DisSort": null}, {
                "Id": 484,
                "countyName": "二道区",
                "CityID": 41,
                "DisSort": null
            }, {"Id": 485, "countyName": "绿园区", "CityID": 41, "DisSort": null}, {
                "Id": 486,
                "countyName": "双阳区",
                "CityID": 41,
                "DisSort": null
            }, {"Id": 487, "countyName": "农安县", "CityID": 41, "DisSort": null}, {
                "Id": 488,
                "countyName": "九台市",
                "CityID": 41,
                "DisSort": null
            }, {"Id": 489, "countyName": "榆树市", "CityID": 41, "DisSort": null}, {
                "Id": 490,
                "countyName": "德惠市",
                "CityID": 41,
                "DisSort": null
            }, {"Id": 491, "countyName": "昌邑区", "CityID": 42, "DisSort": null}, {
                "Id": 492,
                "countyName": "龙潭区",
                "CityID": 42,
                "DisSort": null
            }, {"Id": 493, "countyName": "船营区", "CityID": 42, "DisSort": null}, {
                "Id": 494,
                "countyName": "丰满区",
                "CityID": 42,
                "DisSort": null
            }, {"Id": 495, "countyName": "永吉县", "CityID": 42, "DisSort": null}, {
                "Id": 496,
                "countyName": "蛟河市",
                "CityID": 42,
                "DisSort": null
            }, {"Id": 497, "countyName": "桦甸市", "CityID": 42, "DisSort": null}, {
                "Id": 498,
                "countyName": "舒兰市",
                "CityID": 42,
                "DisSort": null
            }, {"Id": 499, "countyName": "磐石市", "CityID": 42, "DisSort": null}, {
                "Id": 500,
                "countyName": "延吉市",
                "CityID": 43,
                "DisSort": null
            }, {"Id": 501, "countyName": "图们市", "CityID": 43, "DisSort": null}, {
                "Id": 502,
                "countyName": "敦化市",
                "CityID": 43,
                "DisSort": null
            }, {"Id": 503, "countyName": "珲春市", "CityID": 43, "DisSort": null}, {
                "Id": 504,
                "countyName": "龙井市",
                "CityID": 43,
                "DisSort": null
            }, {"Id": 505, "countyName": "和龙市", "CityID": 43, "DisSort": null}, {
                "Id": 506,
                "countyName": "汪清县",
                "CityID": 43,
                "DisSort": null
            }, {"Id": 507, "countyName": "安图县", "CityID": 43, "DisSort": null}, {
                "Id": 508,
                "countyName": "铁西区",
                "CityID": 44,
                "DisSort": null
            }, {"Id": 509, "countyName": "铁东区", "CityID": 44, "DisSort": null}, {
                "Id": 510,
                "countyName": "梨树县",
                "CityID": 44,
                "DisSort": null
            }, {"Id": 511, "countyName": "伊通满族自治县", "CityID": 44, "DisSort": null}, {
                "Id": 512,
                "countyName": "公主岭市",
                "CityID": 44,
                "DisSort": null
            }, {"Id": 513, "countyName": "双辽市", "CityID": 44, "DisSort": null}, {
                "Id": 514,
                "countyName": "东昌区",
                "CityID": 45,
                "DisSort": null
            }, {"Id": 515, "countyName": "二道江区", "CityID": 45, "DisSort": null}, {
                "Id": 516,
                "countyName": "通化县",
                "CityID": 45,
                "DisSort": null
            }, {"Id": 517, "countyName": "辉南县", "CityID": 45, "DisSort": null}, {
                "Id": 518,
                "countyName": "柳河县",
                "CityID": 45,
                "DisSort": null
            }, {"Id": 519, "countyName": "梅河口市", "CityID": 45, "DisSort": null}, {
                "Id": 520,
                "countyName": "集安市",
                "CityID": 45,
                "DisSort": null
            }, {"Id": 521, "countyName": "洮北区", "CityID": 46, "DisSort": null}, {
                "Id": 522,
                "countyName": "镇赉县",
                "CityID": 46,
                "DisSort": null
            }, {"Id": 523, "countyName": "通榆县", "CityID": 46, "DisSort": null}, {
                "Id": 524,
                "countyName": "洮南市",
                "CityID": 46,
                "DisSort": null
            }, {"Id": 525, "countyName": "大安市", "CityID": 46, "DisSort": null}, {
                "Id": 526,
                "countyName": "龙山区",
                "CityID": 47,
                "DisSort": null
            }, {"Id": 527, "countyName": "西安区", "CityID": 47, "DisSort": null}, {
                "Id": 528,
                "countyName": "东丰县",
                "CityID": 47,
                "DisSort": null
            }, {"Id": 529, "countyName": "东辽县", "CityID": 47, "DisSort": null}, {
                "Id": 530,
                "countyName": "宁江区",
                "CityID": 48,
                "DisSort": null
            }, {"Id": 531, "countyName": "前郭尔罗斯蒙古族自治县", "CityID": 48, "DisSort": null}, {
                "Id": 532,
                "countyName": "长岭县",
                "CityID": 48,
                "DisSort": null
            }, {"Id": 533, "countyName": "乾安县", "CityID": 48, "DisSort": null}, {
                "Id": 534,
                "countyName": "扶余县",
                "CityID": 48,
                "DisSort": null
            }, {"Id": 535, "countyName": "八道江区", "CityID": 49, "DisSort": null}, {
                "Id": 536,
                "countyName": "江源区",
                "CityID": 49,
                "DisSort": null
            }, {"Id": 537, "countyName": "抚松县", "CityID": 49, "DisSort": null}, {
                "Id": 538,
                "countyName": "靖宇县",
                "CityID": 49,
                "DisSort": null
            }, {"Id": 539, "countyName": "长白朝鲜族自治县", "CityID": 49, "DisSort": null}, {
                "Id": 540,
                "countyName": "临江市",
                "CityID": 49,
                "DisSort": null
            }, {"Id": 541, "countyName": "道里区", "CityID": 50, "DisSort": null}, {
                "Id": 542,
                "countyName": "南岗区",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 543, "countyName": "道外区", "CityID": 50, "DisSort": null}, {
                "Id": 544,
                "countyName": "平房区",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 545, "countyName": "松北区", "CityID": 50, "DisSort": null}, {
                "Id": 546,
                "countyName": "香坊区",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 547, "countyName": "呼兰区", "CityID": 50, "DisSort": null}, {
                "Id": 548,
                "countyName": "阿城区",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 549, "countyName": "依兰县", "CityID": 50, "DisSort": null}, {
                "Id": 550,
                "countyName": "方正县",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 551, "countyName": "宾县", "CityID": 50, "DisSort": null}, {
                "Id": 552,
                "countyName": "巴彦县",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 553, "countyName": "木兰县", "CityID": 50, "DisSort": null}, {
                "Id": 554,
                "countyName": "通河县",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 555, "countyName": "延寿县", "CityID": 50, "DisSort": null}, {
                "Id": 556,
                "countyName": "双城市",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 557, "countyName": "尚志市", "CityID": 50, "DisSort": null}, {
                "Id": 558,
                "countyName": "五常市",
                "CityID": 50,
                "DisSort": null
            }, {"Id": 559, "countyName": "龙沙区", "CityID": 51, "DisSort": null}, {
                "Id": 560,
                "countyName": "建华区",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 561, "countyName": "铁锋区", "CityID": 51, "DisSort": null}, {
                "Id": 562,
                "countyName": "昂昂溪区",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 563, "countyName": "富拉尔基区", "CityID": 51, "DisSort": null}, {
                "Id": 564,
                "countyName": "碾子山区",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 565, "countyName": "梅里斯达翰尔族区", "CityID": 51, "DisSort": null}, {
                "Id": 566,
                "countyName": "龙江县",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 567, "countyName": "依安县", "CityID": 51, "DisSort": null}, {
                "Id": 568,
                "countyName": "泰来县",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 569, "countyName": "甘南县", "CityID": 51, "DisSort": null}, {
                "Id": 570,
                "countyName": "富裕县",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 571, "countyName": "克山县", "CityID": 51, "DisSort": null}, {
                "Id": 572,
                "countyName": "克东县",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 573, "countyName": "拜泉县", "CityID": 51, "DisSort": null}, {
                "Id": 574,
                "countyName": "讷河市",
                "CityID": 51,
                "DisSort": null
            }, {"Id": 575, "countyName": "鸡冠区", "CityID": 52, "DisSort": null}, {
                "Id": 576,
                "countyName": "恒山区",
                "CityID": 52,
                "DisSort": null
            }, {"Id": 577, "countyName": "滴道区", "CityID": 52, "DisSort": null}, {
                "Id": 578,
                "countyName": "梨树区",
                "CityID": 52,
                "DisSort": null
            }, {"Id": 579, "countyName": "城子河区", "CityID": 52, "DisSort": null}, {
                "Id": 580,
                "countyName": "麻山区",
                "CityID": 52,
                "DisSort": null
            }, {"Id": 581, "countyName": "鸡东县", "CityID": 52, "DisSort": null}, {
                "Id": 582,
                "countyName": "虎林市",
                "CityID": 52,
                "DisSort": null
            }, {"Id": 583, "countyName": "密山市", "CityID": 52, "DisSort": null}, {
                "Id": 584,
                "countyName": "东安区",
                "CityID": 53,
                "DisSort": null
            }, {"Id": 585, "countyName": "阳明区", "CityID": 53, "DisSort": null}, {
                "Id": 586,
                "countyName": "爱民区",
                "CityID": 53,
                "DisSort": null
            }, {"Id": 587, "countyName": "西安区", "CityID": 53, "DisSort": null}, {
                "Id": 588,
                "countyName": "东宁县",
                "CityID": 53,
                "DisSort": null
            }, {"Id": 589, "countyName": "林口县", "CityID": 53, "DisSort": null}, {
                "Id": 590,
                "countyName": "绥芬河市",
                "CityID": 53,
                "DisSort": null
            }, {"Id": 591, "countyName": "海林市", "CityID": 53, "DisSort": null}, {
                "Id": 592,
                "countyName": "宁安市",
                "CityID": 53,
                "DisSort": null
            }, {"Id": 593, "countyName": "穆棱市", "CityID": 53, "DisSort": null}, {
                "Id": 594,
                "countyName": "新兴区",
                "CityID": 54,
                "DisSort": null
            }, {"Id": 595, "countyName": "桃山区", "CityID": 54, "DisSort": null}, {
                "Id": 596,
                "countyName": "茄子河区",
                "CityID": 54,
                "DisSort": null
            }, {"Id": 597, "countyName": "勃利县", "CityID": 54, "DisSort": null}, {
                "Id": 598,
                "countyName": "向阳区",
                "CityID": 55,
                "DisSort": null
            }, {"Id": 599, "countyName": "前进区", "CityID": 55, "DisSort": null}, {
                "Id": 600,
                "countyName": "东风区",
                "CityID": 55,
                "DisSort": null
            }, {"Id": 601, "countyName": "桦南县", "CityID": 55, "DisSort": null}, {
                "Id": 602,
                "countyName": "桦川县",
                "CityID": 55,
                "DisSort": null
            }, {"Id": 603, "countyName": "汤原县", "CityID": 55, "DisSort": null}, {
                "Id": 604,
                "countyName": "抚远县",
                "CityID": 55,
                "DisSort": null
            }, {"Id": 605, "countyName": "同江市", "CityID": 55, "DisSort": null}, {
                "Id": 606,
                "countyName": "富锦市",
                "CityID": 55,
                "DisSort": null
            }, {"Id": 607, "countyName": "向阳区", "CityID": 56, "DisSort": null}, {
                "Id": 608,
                "countyName": "工农区",
                "CityID": 56,
                "DisSort": null
            }, {"Id": 609, "countyName": "南山区", "CityID": 56, "DisSort": null}, {
                "Id": 610,
                "countyName": "兴安区",
                "CityID": 56,
                "DisSort": null
            }, {"Id": 611, "countyName": "东山区", "CityID": 56, "DisSort": null}, {
                "Id": 612,
                "countyName": "兴山区",
                "CityID": 56,
                "DisSort": null
            }, {"Id": 613, "countyName": "萝北县", "CityID": 56, "DisSort": null}, {
                "Id": 614,
                "countyName": "绥滨县",
                "CityID": 56,
                "DisSort": null
            }, {"Id": 615, "countyName": "尖山区", "CityID": 57, "DisSort": null}, {
                "Id": 616,
                "countyName": "岭东区",
                "CityID": 57,
                "DisSort": null
            }, {"Id": 617, "countyName": "四方台区", "CityID": 57, "DisSort": null}, {
                "Id": 618,
                "countyName": "宝山区",
                "CityID": 57,
                "DisSort": null
            }, {"Id": 619, "countyName": "集贤县", "CityID": 57, "DisSort": null}, {
                "Id": 620,
                "countyName": "友谊县",
                "CityID": 57,
                "DisSort": null
            }, {"Id": 621, "countyName": "宝清县", "CityID": 57, "DisSort": null}, {
                "Id": 622,
                "countyName": "饶河县",
                "CityID": 57,
                "DisSort": null
            }, {"Id": 623, "countyName": "北林区", "CityID": 58, "DisSort": null}, {
                "Id": 624,
                "countyName": "望奎县",
                "CityID": 58,
                "DisSort": null
            }, {"Id": 625, "countyName": "兰西县", "CityID": 58, "DisSort": null}, {
                "Id": 626,
                "countyName": "青冈县",
                "CityID": 58,
                "DisSort": null
            }, {"Id": 627, "countyName": "庆安县", "CityID": 58, "DisSort": null}, {
                "Id": 628,
                "countyName": "明水县",
                "CityID": 58,
                "DisSort": null
            }, {"Id": 629, "countyName": "绥棱县", "CityID": 58, "DisSort": null}, {
                "Id": 630,
                "countyName": "安达市",
                "CityID": 58,
                "DisSort": null
            }, {"Id": 631, "countyName": "肇东市", "CityID": 58, "DisSort": null}, {
                "Id": 632,
                "countyName": "海伦市",
                "CityID": 58,
                "DisSort": null
            }, {"Id": 633, "countyName": "爱辉区", "CityID": 59, "DisSort": null}, {
                "Id": 634,
                "countyName": "嫩江县",
                "CityID": 59,
                "DisSort": null
            }, {"Id": 635, "countyName": "逊克县", "CityID": 59, "DisSort": null}, {
                "Id": 636,
                "countyName": "孙吴县",
                "CityID": 59,
                "DisSort": null
            }, {"Id": 637, "countyName": "北安市", "CityID": 59, "DisSort": null}, {
                "Id": 638,
                "countyName": "五大连池市",
                "CityID": 59,
                "DisSort": null
            }, {"Id": 639, "countyName": "呼玛县", "CityID": 60, "DisSort": null}, {
                "Id": 640,
                "countyName": "塔河县",
                "CityID": 60,
                "DisSort": null
            }, {"Id": 641, "countyName": "漠河县", "CityID": 60, "DisSort": null}, {
                "Id": 642,
                "countyName": "伊春区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 643, "countyName": "南岔区", "CityID": 61, "DisSort": null}, {
                "Id": 644,
                "countyName": "友好区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 645, "countyName": "西林区", "CityID": 61, "DisSort": null}, {
                "Id": 646,
                "countyName": "翠峦区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 647, "countyName": "新青区", "CityID": 61, "DisSort": null}, {
                "Id": 648,
                "countyName": "美溪区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 649, "countyName": "金山屯区", "CityID": 61, "DisSort": null}, {
                "Id": 650,
                "countyName": "五营区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 651, "countyName": "乌马河区", "CityID": 61, "DisSort": null}, {
                "Id": 652,
                "countyName": "汤旺河区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 653, "countyName": "带岭区", "CityID": 61, "DisSort": null}, {
                "Id": 654,
                "countyName": "乌伊岭区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 655, "countyName": "红星区", "CityID": 61, "DisSort": null}, {
                "Id": 656,
                "countyName": "上甘岭区",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 657, "countyName": "嘉荫县", "CityID": 61, "DisSort": null}, {
                "Id": 658,
                "countyName": "铁力市",
                "CityID": 61,
                "DisSort": null
            }, {"Id": 659, "countyName": "萨尔图区", "CityID": 62, "DisSort": null}, {
                "Id": 660,
                "countyName": "龙凤区",
                "CityID": 62,
                "DisSort": null
            }, {"Id": 661, "countyName": "让胡路区", "CityID": 62, "DisSort": null}, {
                "Id": 662,
                "countyName": "红岗区",
                "CityID": 62,
                "DisSort": null
            }, {"Id": 663, "countyName": "大同区", "CityID": 62, "DisSort": null}, {
                "Id": 664,
                "countyName": "肇州县",
                "CityID": 62,
                "DisSort": null
            }, {"Id": 665, "countyName": "肇源县", "CityID": 62, "DisSort": null}, {
                "Id": 666,
                "countyName": "林甸县",
                "CityID": 62,
                "DisSort": null
            }, {"Id": 667, "countyName": "杜尔伯特蒙古族自治县", "CityID": 62, "DisSort": null}, {
                "Id": 668,
                "countyName": "江宁区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 669, "countyName": "浦口区", "CityID": 63, "DisSort": null}, {
                "Id": 670,
                "countyName": "玄武区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 671, "countyName": "白下区", "CityID": 63, "DisSort": null}, {
                "Id": 672,
                "countyName": "秦淮区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 673, "countyName": "建邺区", "CityID": 63, "DisSort": null}, {
                "Id": 674,
                "countyName": "鼓楼区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 675, "countyName": "下关区", "CityID": 63, "DisSort": null}, {
                "Id": 676,
                "countyName": "栖霞区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 677, "countyName": "雨花台区", "CityID": 63, "DisSort": null}, {
                "Id": 678,
                "countyName": "六合区",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 679, "countyName": "溧水县", "CityID": 63, "DisSort": null}, {
                "Id": 680,
                "countyName": "高淳县",
                "CityID": 63,
                "DisSort": null
            }, {"Id": 681, "countyName": "崇安区", "CityID": 64, "DisSort": null}, {
                "Id": 682,
                "countyName": "南长区",
                "CityID": 64,
                "DisSort": null
            }, {"Id": 683, "countyName": "北塘区", "CityID": 64, "DisSort": null}, {
                "Id": 684,
                "countyName": "锡山区",
                "CityID": 64,
                "DisSort": null
            }, {"Id": 685, "countyName": "惠山区", "CityID": 64, "DisSort": null}, {
                "Id": 686,
                "countyName": "滨湖区",
                "CityID": 64,
                "DisSort": null
            }, {"Id": 687, "countyName": "江阴市", "CityID": 64, "DisSort": null}, {
                "Id": 688,
                "countyName": "宜兴市",
                "CityID": 64,
                "DisSort": null
            }, {"Id": 689, "countyName": "京口区", "CityID": 65, "DisSort": null}, {
                "Id": 690,
                "countyName": "润州区",
                "CityID": 65,
                "DisSort": null
            }, {"Id": 691, "countyName": "丹徒区", "CityID": 65, "DisSort": null}, {
                "Id": 692,
                "countyName": "丹阳市",
                "CityID": 65,
                "DisSort": null
            }, {"Id": 693, "countyName": "扬中市", "CityID": 65, "DisSort": null}, {
                "Id": 694,
                "countyName": "句容市",
                "CityID": 65,
                "DisSort": null
            }, {"Id": 695, "countyName": "沧浪区", "CityID": 66, "DisSort": null}, {
                "Id": 696,
                "countyName": "常熟市",
                "CityID": 66,
                "DisSort": null
            }, {"Id": 697, "countyName": "平江区", "CityID": 66, "DisSort": null}, {
                "Id": 698,
                "countyName": "金阊区",
                "CityID": 66,
                "DisSort": null
            }, {"Id": 699, "countyName": "虎丘区", "CityID": 66, "DisSort": null}, {
                "Id": 700,
                "countyName": "昆山市",
                "CityID": 66,
                "DisSort": null
            }, {"Id": 701, "countyName": "太仓市", "CityID": 66, "DisSort": null}, {
                "Id": 702,
                "countyName": "吴江市",
                "CityID": 66,
                "DisSort": null
            }, {"Id": 703, "countyName": "吴中区", "CityID": 66, "DisSort": null}, {
                "Id": 704,
                "countyName": "相城区",
                "CityID": 66,
                "DisSort": null
            }, {"Id": 705, "countyName": "张家港市", "CityID": 66, "DisSort": null}, {
                "Id": 706,
                "countyName": "崇川区",
                "CityID": 67,
                "DisSort": null
            }, {"Id": 707, "countyName": "港闸区", "CityID": 67, "DisSort": null}, {
                "Id": 708,
                "countyName": "海安县",
                "CityID": 67,
                "DisSort": null
            }, {"Id": 709, "countyName": "如东县", "CityID": 67, "DisSort": null}, {
                "Id": 710,
                "countyName": "启东市",
                "CityID": 67,
                "DisSort": null
            }, {"Id": 711, "countyName": "如皋市", "CityID": 67, "DisSort": null}, {
                "Id": 712,
                "countyName": "通州市",
                "CityID": 67,
                "DisSort": null
            }, {"Id": 713, "countyName": "海门市", "CityID": 67, "DisSort": null}, {
                "Id": 714,
                "countyName": "高邮市",
                "CityID": 68,
                "DisSort": null
            }, {"Id": 715, "countyName": "广陵区", "CityID": 68, "DisSort": null}, {
                "Id": 716,
                "countyName": "邗江区",
                "CityID": 68,
                "DisSort": null
            }, {"Id": 717, "countyName": "维扬区", "CityID": 68, "DisSort": null}, {
                "Id": 718,
                "countyName": "宝应县",
                "CityID": 68,
                "DisSort": null
            }, {"Id": 719, "countyName": "江都市", "CityID": 68, "DisSort": null}, {
                "Id": 720,
                "countyName": "仪征市",
                "CityID": 68,
                "DisSort": null
            }, {"Id": 721, "countyName": "亭湖区", "CityID": 69, "DisSort": null}, {
                "Id": 722,
                "countyName": "盐都区",
                "CityID": 69,
                "DisSort": null
            }, {"Id": 723, "countyName": "响水县", "CityID": 69, "DisSort": null}, {
                "Id": 724,
                "countyName": "滨海县",
                "CityID": 69,
                "DisSort": null
            }, {"Id": 725, "countyName": "阜宁县", "CityID": 69, "DisSort": null}, {
                "Id": 726,
                "countyName": "射阳县",
                "CityID": 69,
                "DisSort": null
            }, {"Id": 727, "countyName": "建湖县", "CityID": 69, "DisSort": null}, {
                "Id": 728,
                "countyName": "东台市",
                "CityID": 69,
                "DisSort": null
            }, {"Id": 729, "countyName": "大丰市", "CityID": 69, "DisSort": null}, {
                "Id": 730,
                "countyName": "鼓楼区",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 731, "countyName": "云龙区", "CityID": 70, "DisSort": null}, {
                "Id": 732,
                "countyName": "九里区",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 733, "countyName": "贾汪区", "CityID": 70, "DisSort": null}, {
                "Id": 734,
                "countyName": "泉山区",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 735, "countyName": "丰县", "CityID": 70, "DisSort": null}, {
                "Id": 736,
                "countyName": "沛县",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 737, "countyName": "铜山县", "CityID": 70, "DisSort": null}, {
                "Id": 738,
                "countyName": "睢宁县",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 739, "countyName": "新沂市", "CityID": 70, "DisSort": null}, {
                "Id": 740,
                "countyName": "邳州市",
                "CityID": 70,
                "DisSort": null
            }, {"Id": 741, "countyName": "清河区", "CityID": 71, "DisSort": null}, {
                "Id": 742,
                "countyName": "楚州区",
                "CityID": 71,
                "DisSort": null
            }, {"Id": 743, "countyName": "淮阴区", "CityID": 71, "DisSort": null}, {
                "Id": 744,
                "countyName": "清浦区",
                "CityID": 71,
                "DisSort": null
            }, {"Id": 745, "countyName": "涟水县", "CityID": 71, "DisSort": null}, {
                "Id": 746,
                "countyName": "洪泽县",
                "CityID": 71,
                "DisSort": null
            }, {"Id": 747, "countyName": "盱眙县", "CityID": 71, "DisSort": null}, {
                "Id": 748,
                "countyName": "金湖县",
                "CityID": 71,
                "DisSort": null
            }, {"Id": 749, "countyName": "连云区", "CityID": 72, "DisSort": null}, {
                "Id": 750,
                "countyName": "新浦区",
                "CityID": 72,
                "DisSort": null
            }, {"Id": 751, "countyName": "海州区", "CityID": 72, "DisSort": null}, {
                "Id": 752,
                "countyName": "赣榆县",
                "CityID": 72,
                "DisSort": null
            }, {"Id": 753, "countyName": "东海县", "CityID": 72, "DisSort": null}, {
                "Id": 754,
                "countyName": "灌云县",
                "CityID": 72,
                "DisSort": null
            }, {"Id": 755, "countyName": "灌南县", "CityID": 72, "DisSort": null}, {
                "Id": 756,
                "countyName": "天宁区",
                "CityID": 73,
                "DisSort": null
            }, {"Id": 757, "countyName": "钟楼区", "CityID": 73, "DisSort": null}, {
                "Id": 758,
                "countyName": "戚墅堰区",
                "CityID": 73,
                "DisSort": null
            }, {"Id": 759, "countyName": "新北区", "CityID": 73, "DisSort": null}, {
                "Id": 760,
                "countyName": "武进区",
                "CityID": 73,
                "DisSort": null
            }, {"Id": 761, "countyName": "溧阳市", "CityID": 73, "DisSort": null}, {
                "Id": 762,
                "countyName": "金坛市",
                "CityID": 73,
                "DisSort": null
            }, {"Id": 763, "countyName": "海陵区", "CityID": 74, "DisSort": null}, {
                "Id": 764,
                "countyName": "高港区",
                "CityID": 74,
                "DisSort": null
            }, {"Id": 765, "countyName": "兴化市", "CityID": 74, "DisSort": null}, {
                "Id": 766,
                "countyName": "靖江市",
                "CityID": 74,
                "DisSort": null
            }, {"Id": 767, "countyName": "泰兴市", "CityID": 74, "DisSort": null}, {
                "Id": 768,
                "countyName": "姜堰市",
                "CityID": 74,
                "DisSort": null
            }, {"Id": 769, "countyName": "宿城区", "CityID": 75, "DisSort": null}, {
                "Id": 770,
                "countyName": "宿豫区",
                "CityID": 75,
                "DisSort": null
            }, {"Id": 771, "countyName": "沭阳县", "CityID": 75, "DisSort": null}, {
                "Id": 772,
                "countyName": "泗阳县",
                "CityID": 75,
                "DisSort": null
            }, {"Id": 773, "countyName": "泗洪县", "CityID": 75, "DisSort": null}, {
                "Id": 774,
                "countyName": "定海区",
                "CityID": 76,
                "DisSort": null
            }, {"Id": 775, "countyName": "普陀区", "CityID": 76, "DisSort": null}, {
                "Id": 776,
                "countyName": "岱山县",
                "CityID": 76,
                "DisSort": null
            }, {"Id": 777, "countyName": "嵊泗县", "CityID": 76, "DisSort": null}, {
                "Id": 778,
                "countyName": "柯城区",
                "CityID": 77,
                "DisSort": null
            }, {"Id": 779, "countyName": "衢江区", "CityID": 77, "DisSort": null}, {
                "Id": 780,
                "countyName": "常山县",
                "CityID": 77,
                "DisSort": null
            }, {"Id": 781, "countyName": "开化县", "CityID": 77, "DisSort": null}, {
                "Id": 782,
                "countyName": "龙游县",
                "CityID": 77,
                "DisSort": null
            }, {"Id": 783, "countyName": "江山市", "CityID": 77, "DisSort": null}, {
                "Id": 784,
                "countyName": "上城区",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 785, "countyName": "下城区", "CityID": 78, "DisSort": null}, {
                "Id": 786,
                "countyName": "江干区",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 787, "countyName": "拱墅区", "CityID": 78, "DisSort": null}, {
                "Id": 788,
                "countyName": "西湖区",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 789, "countyName": "滨江区", "CityID": 78, "DisSort": null}, {
                "Id": 790,
                "countyName": "余杭区",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 791, "countyName": "桐庐县", "CityID": 78, "DisSort": null}, {
                "Id": 792,
                "countyName": "淳安县",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 793, "countyName": "建德市", "CityID": 78, "DisSort": null}, {
                "Id": 794,
                "countyName": "富阳市",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 795, "countyName": "临安市", "CityID": 78, "DisSort": null}, {
                "Id": 796,
                "countyName": "萧山区",
                "CityID": 78,
                "DisSort": null
            }, {"Id": 797, "countyName": "吴兴区", "CityID": 79, "DisSort": null}, {
                "Id": 798,
                "countyName": "南浔区",
                "CityID": 79,
                "DisSort": null
            }, {"Id": 799, "countyName": "德清县", "CityID": 79, "DisSort": null}, {
                "Id": 800,
                "countyName": "长兴县",
                "CityID": 79,
                "DisSort": null
            }, {"Id": 801, "countyName": "安吉县", "CityID": 79, "DisSort": null}, {
                "Id": 802,
                "countyName": " 南湖区",
                "CityID": 80,
                "DisSort": null
            }, {"Id": 803, "countyName": " 秀洲区", "CityID": 80, "DisSort": null}, {
                "Id": 804,
                "countyName": " 嘉善县",
                "CityID": 80,
                "DisSort": null
            }, {"Id": 805, "countyName": " 海盐县", "CityID": 80, "DisSort": null}, {
                "Id": 806,
                "countyName": " 海宁市",
                "CityID": 80,
                "DisSort": null
            }, {"Id": 807, "countyName": " 平湖市", "CityID": 80, "DisSort": null}, {
                "Id": 808,
                "countyName": " 桐乡市 ",
                "CityID": 80,
                "DisSort": null
            }, {"Id": 809, "countyName": "海曙区", "CityID": 81, "DisSort": null}, {
                "Id": 810,
                "countyName": "江东区",
                "CityID": 81,
                "DisSort": null
            }, {"Id": 811, "countyName": "江北区", "CityID": 81, "DisSort": null}, {
                "Id": 812,
                "countyName": "北仑区",
                "CityID": 81,
                "DisSort": null
            }, {"Id": 813, "countyName": "镇海区", "CityID": 81, "DisSort": null}, {
                "Id": 814,
                "countyName": "鄞州区",
                "CityID": 81,
                "DisSort": null
            }, {"Id": 815, "countyName": "象山县", "CityID": 81, "DisSort": null}, {
                "Id": 816,
                "countyName": "宁海县",
                "CityID": 81,
                "DisSort": null
            }, {"Id": 817, "countyName": "余姚市", "CityID": 81, "DisSort": null}, {
                "Id": 818,
                "countyName": "慈溪市",
                "CityID": 81,
                "DisSort": null
            }, {"Id": 819, "countyName": "奉化市", "CityID": 81, "DisSort": null}, {
                "Id": 820,
                "countyName": "越城区",
                "CityID": 82,
                "DisSort": null
            }, {"Id": 821, "countyName": "绍兴县", "CityID": 82, "DisSort": null}, {
                "Id": 822,
                "countyName": "新昌县",
                "CityID": 82,
                "DisSort": null
            }, {"Id": 823, "countyName": "诸暨市", "CityID": 82, "DisSort": null}, {
                "Id": 824,
                "countyName": "上虞市",
                "CityID": 82,
                "DisSort": null
            }, {"Id": 825, "countyName": "嵊州市", "CityID": 82, "DisSort": null}, {
                "Id": 826,
                "countyName": "鹿城区",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 827, "countyName": "龙湾区", "CityID": 83, "DisSort": null}, {
                "Id": 828,
                "countyName": "瓯海区",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 829, "countyName": "洞头县", "CityID": 83, "DisSort": null}, {
                "Id": 830,
                "countyName": "永嘉县",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 831, "countyName": "平阳县", "CityID": 83, "DisSort": null}, {
                "Id": 832,
                "countyName": "苍南县",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 833, "countyName": "文成县", "CityID": 83, "DisSort": null}, {
                "Id": 834,
                "countyName": "泰顺县",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 835, "countyName": "瑞安市", "CityID": 83, "DisSort": null}, {
                "Id": 836,
                "countyName": "乐清市",
                "CityID": 83,
                "DisSort": null
            }, {"Id": 837, "countyName": "莲都区", "CityID": 84, "DisSort": null}, {
                "Id": 838,
                "countyName": "青田县",
                "CityID": 84,
                "DisSort": null
            }, {"Id": 839, "countyName": "缙云县", "CityID": 84, "DisSort": null}, {
                "Id": 840,
                "countyName": "遂昌县",
                "CityID": 84,
                "DisSort": null
            }, {"Id": 841, "countyName": "松阳县", "CityID": 84, "DisSort": null}, {
                "Id": 842,
                "countyName": "云和县",
                "CityID": 84,
                "DisSort": null
            }, {"Id": 843, "countyName": "庆元县", "CityID": 84, "DisSort": null}, {
                "Id": 844,
                "countyName": "景宁畲族自治县",
                "CityID": 84,
                "DisSort": null
            }, {"Id": 845, "countyName": "龙泉市", "CityID": 84, "DisSort": null}, {
                "Id": 846,
                "countyName": "婺城区",
                "CityID": 85,
                "DisSort": null
            }, {"Id": 847, "countyName": "金东区", "CityID": 85, "DisSort": null}, {
                "Id": 848,
                "countyName": "武义县",
                "CityID": 85,
                "DisSort": null
            }, {"Id": 849, "countyName": "浦江县", "CityID": 85, "DisSort": null}, {
                "Id": 850,
                "countyName": "磐安县",
                "CityID": 85,
                "DisSort": null
            }, {"Id": 851, "countyName": "兰溪市", "CityID": 85, "DisSort": null}, {
                "Id": 852,
                "countyName": "义乌市",
                "CityID": 85,
                "DisSort": null
            }, {"Id": 853, "countyName": "东阳市", "CityID": 85, "DisSort": null}, {
                "Id": 854,
                "countyName": "永康市",
                "CityID": 85,
                "DisSort": null
            }, {"Id": 855, "countyName": "椒江区", "CityID": 86, "DisSort": null}, {
                "Id": 856,
                "countyName": "黄岩区",
                "CityID": 86,
                "DisSort": null
            }, {"Id": 857, "countyName": "路桥区", "CityID": 86, "DisSort": null}, {
                "Id": 858,
                "countyName": "玉环县",
                "CityID": 86,
                "DisSort": null
            }, {"Id": 859, "countyName": "三门县", "CityID": 86, "DisSort": null}, {
                "Id": 860,
                "countyName": "天台县",
                "CityID": 86,
                "DisSort": null
            }, {"Id": 861, "countyName": "仙居县", "CityID": 86, "DisSort": null}, {
                "Id": 862,
                "countyName": "温岭市",
                "CityID": 86,
                "DisSort": null
            }, {"Id": 863, "countyName": "临海市", "CityID": 86, "DisSort": null}, {
                "Id": 864,
                "countyName": "瑶海区",
                "CityID": 87,
                "DisSort": null
            }, {"Id": 865, "countyName": "庐阳区", "CityID": 87, "DisSort": null}, {
                "Id": 866,
                "countyName": "蜀山区",
                "CityID": 87,
                "DisSort": null
            }, {"Id": 867, "countyName": "包河区", "CityID": 87, "DisSort": null}, {
                "Id": 868,
                "countyName": "长丰县",
                "CityID": 87,
                "DisSort": null
            }, {"Id": 869, "countyName": "肥东县", "CityID": 87, "DisSort": null}, {
                "Id": 870,
                "countyName": "肥西县",
                "CityID": 87,
                "DisSort": null
            }, {"Id": 871, "countyName": "镜湖区", "CityID": 88, "DisSort": null}, {
                "Id": 872,
                "countyName": "弋江区",
                "CityID": 88,
                "DisSort": null
            }, {"Id": 873, "countyName": "鸠江区", "CityID": 88, "DisSort": null}, {
                "Id": 874,
                "countyName": "三山区",
                "CityID": 88,
                "DisSort": null
            }, {"Id": 875, "countyName": "芜湖县", "CityID": 88, "DisSort": null}, {
                "Id": 876,
                "countyName": "繁昌县",
                "CityID": 88,
                "DisSort": null
            }, {"Id": 877, "countyName": "南陵县", "CityID": 88, "DisSort": null}, {
                "Id": 878,
                "countyName": "龙子湖区",
                "CityID": 89,
                "DisSort": null
            }, {"Id": 879, "countyName": "蚌山区", "CityID": 89, "DisSort": null}, {
                "Id": 880,
                "countyName": "禹会区",
                "CityID": 89,
                "DisSort": null
            }, {"Id": 881, "countyName": "淮上区", "CityID": 89, "DisSort": null}, {
                "Id": 882,
                "countyName": "怀远县",
                "CityID": 89,
                "DisSort": null
            }, {"Id": 883, "countyName": "五河县", "CityID": 89, "DisSort": null}, {
                "Id": 884,
                "countyName": "固镇县",
                "CityID": 89,
                "DisSort": null
            }, {"Id": 885, "countyName": "大通区", "CityID": 90, "DisSort": null}, {
                "Id": 886,
                "countyName": "田家庵区",
                "CityID": 90,
                "DisSort": null
            }, {"Id": 887, "countyName": "谢家集区", "CityID": 90, "DisSort": null}, {
                "Id": 888,
                "countyName": "八公山区",
                "CityID": 90,
                "DisSort": null
            }, {"Id": 889, "countyName": "潘集区", "CityID": 90, "DisSort": null}, {
                "Id": 890,
                "countyName": "凤台县",
                "CityID": 90,
                "DisSort": null
            }, {"Id": 891, "countyName": "金家庄区", "CityID": 91, "DisSort": null}, {
                "Id": 892,
                "countyName": "花山区",
                "CityID": 91,
                "DisSort": null
            }, {"Id": 893, "countyName": "雨山区", "CityID": 91, "DisSort": null}, {
                "Id": 894,
                "countyName": "当涂县",
                "CityID": 91,
                "DisSort": null
            }, {"Id": 895, "countyName": "杜集区", "CityID": 92, "DisSort": null}, {
                "Id": 896,
                "countyName": "相山区",
                "CityID": 92,
                "DisSort": null
            }, {"Id": 897, "countyName": "烈山区", "CityID": 92, "DisSort": null}, {
                "Id": 898,
                "countyName": "濉溪县 ",
                "CityID": 92,
                "DisSort": null
            }, {"Id": 899, "countyName": "铜官山区", "CityID": 93, "DisSort": null}, {
                "Id": 900,
                "countyName": "狮子山区",
                "CityID": 93,
                "DisSort": null
            }, {"Id": 901, "countyName": "铜陵县", "CityID": 93, "DisSort": null}, {
                "Id": 902,
                "countyName": "迎江区",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 903, "countyName": "大观区", "CityID": 94, "DisSort": null}, {
                "Id": 904,
                "countyName": "宜秀区",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 905, "countyName": "怀宁县", "CityID": 94, "DisSort": null}, {
                "Id": 906,
                "countyName": "枞阳县",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 907, "countyName": "潜山县", "CityID": 94, "DisSort": null}, {
                "Id": 908,
                "countyName": "太湖县",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 909, "countyName": "宿松县", "CityID": 94, "DisSort": null}, {
                "Id": 910,
                "countyName": "望江县",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 911, "countyName": "岳西县", "CityID": 94, "DisSort": null}, {
                "Id": 912,
                "countyName": "桐城市",
                "CityID": 94,
                "DisSort": null
            }, {"Id": 913, "countyName": "屯溪区", "CityID": 95, "DisSort": null}, {
                "Id": 914,
                "countyName": "黄山区",
                "CityID": 95,
                "DisSort": null
            }, {"Id": 915, "countyName": "徽州区", "CityID": 95, "DisSort": null}, {
                "Id": 916,
                "countyName": "歙县",
                "CityID": 95,
                "DisSort": null
            }, {"Id": 917, "countyName": "休宁县", "CityID": 95, "DisSort": null}, {
                "Id": 918,
                "countyName": "黟县",
                "CityID": 95,
                "DisSort": null
            }, {"Id": 919, "countyName": "祁门县", "CityID": 95, "DisSort": null}, {
                "Id": 920,
                "countyName": "琅琊区",
                "CityID": 96,
                "DisSort": null
            }, {"Id": 921, "countyName": "南谯区", "CityID": 96, "DisSort": null}, {
                "Id": 922,
                "countyName": "来安县",
                "CityID": 96,
                "DisSort": null
            }, {"Id": 923, "countyName": "全椒县", "CityID": 96, "DisSort": null}, {
                "Id": 924,
                "countyName": "定远县",
                "CityID": 96,
                "DisSort": null
            }, {"Id": 925, "countyName": "凤阳县", "CityID": 96, "DisSort": null}, {
                "Id": 926,
                "countyName": "天长市",
                "CityID": 96,
                "DisSort": null
            }, {"Id": 927, "countyName": "明光市", "CityID": 96, "DisSort": null}, {
                "Id": 928,
                "countyName": "颍州区",
                "CityID": 97,
                "DisSort": null
            }, {"Id": 929, "countyName": "颍东区", "CityID": 97, "DisSort": null}, {
                "Id": 930,
                "countyName": "颍泉区",
                "CityID": 97,
                "DisSort": null
            }, {"Id": 931, "countyName": "临泉县", "CityID": 97, "DisSort": null}, {
                "Id": 932,
                "countyName": "太和县",
                "CityID": 97,
                "DisSort": null
            }, {"Id": 933, "countyName": "阜南县", "CityID": 97, "DisSort": null}, {
                "Id": 934,
                "countyName": "颍上县",
                "CityID": 97,
                "DisSort": null
            }, {"Id": 935, "countyName": "界首市", "CityID": 97, "DisSort": null}, {
                "Id": 936,
                "countyName": "埇桥区",
                "CityID": 98,
                "DisSort": null
            }, {"Id": 937, "countyName": "砀山县", "CityID": 98, "DisSort": null}, {
                "Id": 938,
                "countyName": "萧县",
                "CityID": 98,
                "DisSort": null
            }, {"Id": 939, "countyName": "灵璧县", "CityID": 98, "DisSort": null}, {
                "Id": 940,
                "countyName": "泗县 ",
                "CityID": 98,
                "DisSort": null
            }, {"Id": 941, "countyName": "居巢区", "CityID": 99, "DisSort": null}, {
                "Id": 942,
                "countyName": "庐江县",
                "CityID": 99,
                "DisSort": null
            }, {"Id": 943, "countyName": "无为县", "CityID": 99, "DisSort": null}, {
                "Id": 944,
                "countyName": "含山县",
                "CityID": 99,
                "DisSort": null
            }, {"Id": 945, "countyName": "和县 ", "CityID": 99, "DisSort": null}, {
                "Id": 946,
                "countyName": "金安区",
                "CityID": 100,
                "DisSort": null
            }, {"Id": 947, "countyName": "裕安区", "CityID": 100, "DisSort": null}, {
                "Id": 948,
                "countyName": "寿县",
                "CityID": 100,
                "DisSort": null
            }, {"Id": 949, "countyName": "霍邱县", "CityID": 100, "DisSort": null}, {
                "Id": 950,
                "countyName": "舒城县",
                "CityID": 100,
                "DisSort": null
            }, {"Id": 951, "countyName": "金寨县", "CityID": 100, "DisSort": null}, {
                "Id": 952,
                "countyName": "霍山县",
                "CityID": 100,
                "DisSort": null
            }, {"Id": 953, "countyName": "谯城区", "CityID": 101, "DisSort": null}, {
                "Id": 954,
                "countyName": "涡阳县",
                "CityID": 101,
                "DisSort": null
            }, {"Id": 955, "countyName": "蒙城县", "CityID": 101, "DisSort": null}, {
                "Id": 956,
                "countyName": "利辛县",
                "CityID": 101,
                "DisSort": null
            }, {"Id": 957, "countyName": "贵池区", "CityID": 102, "DisSort": null}, {
                "Id": 958,
                "countyName": "东至县",
                "CityID": 102,
                "DisSort": null
            }, {"Id": 959, "countyName": "石台县", "CityID": 102, "DisSort": null}, {
                "Id": 960,
                "countyName": "青阳县",
                "CityID": 102,
                "DisSort": null
            }, {"Id": 961, "countyName": "宣州区", "CityID": 103, "DisSort": null}, {
                "Id": 962,
                "countyName": "郎溪县",
                "CityID": 103,
                "DisSort": null
            }, {"Id": 963, "countyName": "广德县", "CityID": 103, "DisSort": null}, {
                "Id": 964,
                "countyName": "泾县",
                "CityID": 103,
                "DisSort": null
            }, {"Id": 965, "countyName": "绩溪县", "CityID": 103, "DisSort": null}, {
                "Id": 966,
                "countyName": "旌德县",
                "CityID": 103,
                "DisSort": null
            }, {"Id": 967, "countyName": "宁国市", "CityID": 103, "DisSort": null}, {
                "Id": 968,
                "countyName": "鼓楼区",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 969, "countyName": "台江区", "CityID": 104, "DisSort": null}, {
                "Id": 970,
                "countyName": "仓山区",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 971, "countyName": "马尾区", "CityID": 104, "DisSort": null}, {
                "Id": 972,
                "countyName": "晋安区",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 973, "countyName": "闽侯县", "CityID": 104, "DisSort": null}, {
                "Id": 974,
                "countyName": "连江县",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 975, "countyName": "罗源县", "CityID": 104, "DisSort": null}, {
                "Id": 976,
                "countyName": "闽清县",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 977, "countyName": "永泰县", "CityID": 104, "DisSort": null}, {
                "Id": 978,
                "countyName": "平潭县",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 979, "countyName": "福清市", "CityID": 104, "DisSort": null}, {
                "Id": 980,
                "countyName": "长乐市",
                "CityID": 104,
                "DisSort": null
            }, {"Id": 981, "countyName": "思明区", "CityID": 105, "DisSort": null}, {
                "Id": 982,
                "countyName": "海沧区",
                "CityID": 105,
                "DisSort": null
            }, {"Id": 983, "countyName": "湖里区", "CityID": 105, "DisSort": null}, {
                "Id": 984,
                "countyName": "集美区",
                "CityID": 105,
                "DisSort": null
            }, {"Id": 985, "countyName": "同安区", "CityID": 105, "DisSort": null}, {
                "Id": 986,
                "countyName": "翔安区",
                "CityID": 105,
                "DisSort": null
            }, {"Id": 987, "countyName": "蕉城区", "CityID": 106, "DisSort": null}, {
                "Id": 988,
                "countyName": "霞浦县",
                "CityID": 106,
                "DisSort": null
            }, {"Id": 989, "countyName": "古田县", "CityID": 106, "DisSort": null}, {
                "Id": 990,
                "countyName": "屏南县",
                "CityID": 106,
                "DisSort": null
            }, {"Id": 991, "countyName": "寿宁县", "CityID": 106, "DisSort": null}, {
                "Id": 992,
                "countyName": "周宁县",
                "CityID": 106,
                "DisSort": null
            }, {"Id": 993, "countyName": "柘荣县", "CityID": 106, "DisSort": null}, {
                "Id": 994,
                "countyName": "福安市",
                "CityID": 106,
                "DisSort": null
            }, {"Id": 995, "countyName": "福鼎市", "CityID": 106, "DisSort": null}, {
                "Id": 996,
                "countyName": "城厢区",
                "CityID": 107,
                "DisSort": null
            }, {"Id": 997, "countyName": "涵江区", "CityID": 107, "DisSort": null}, {
                "Id": 998,
                "countyName": "荔城区",
                "CityID": 107,
                "DisSort": null
            }, {"Id": 999, "countyName": "秀屿区", "CityID": 107, "DisSort": null}, {
                "Id": 1000,
                "countyName": "仙游县",
                "CityID": 107,
                "DisSort": null
            }, {"Id": 1001, "countyName": "鲤城区", "CityID": 108, "DisSort": null}, {
                "Id": 1002,
                "countyName": "丰泽区",
                "CityID": 108,
                "DisSort": null
            }, {"Id": 1003, "countyName": "洛江区", "CityID": 108, "DisSort": null}, {
                "Id": 1004,
                "countyName": "泉港区",
                "CityID": 108,
                "DisSort": null
            }, {"Id": 1005, "countyName": "惠安县", "CityID": 108, "DisSort": null}, {
                "Id": 1006,
                "countyName": "安溪县",
                "CityID": 108,
                "DisSort": null
            }, {"Id": 1007, "countyName": "永春县", "CityID": 108, "DisSort": null}, {
                "Id": 1008,
                "countyName": "德化县",
                "CityID": 108,
                "DisSort": null
            }, {"Id": 1009, "countyName": "石狮市", "CityID": 108, "DisSort": null}, {
                "Id": 1010,
                "countyName": "晋江市",
                "CityID": 108,
                "DisSort": null
            }, {"Id": 1011, "countyName": "南安市", "CityID": 108, "DisSort": null}, {
                "Id": 1012,
                "countyName": "芗城区",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1013, "countyName": "龙文区", "CityID": 109, "DisSort": null}, {
                "Id": 1014,
                "countyName": "云霄县",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1015, "countyName": "漳浦县", "CityID": 109, "DisSort": null}, {
                "Id": 1016,
                "countyName": "诏安县",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1017, "countyName": "长泰县", "CityID": 109, "DisSort": null}, {
                "Id": 1018,
                "countyName": "东山县",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1019, "countyName": "南靖县", "CityID": 109, "DisSort": null}, {
                "Id": 1020,
                "countyName": "平和县",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1021, "countyName": "华安县", "CityID": 109, "DisSort": null}, {
                "Id": 1022,
                "countyName": "龙海市",
                "CityID": 109,
                "DisSort": null
            }, {"Id": 1023, "countyName": "新罗区", "CityID": 110, "DisSort": null}, {
                "Id": 1024,
                "countyName": "长汀县",
                "CityID": 110,
                "DisSort": null
            }, {"Id": 1025, "countyName": "永定县", "CityID": 110, "DisSort": null}, {
                "Id": 1026,
                "countyName": "上杭县",
                "CityID": 110,
                "DisSort": null
            }, {"Id": 1027, "countyName": "武平县", "CityID": 110, "DisSort": null}, {
                "Id": 1028,
                "countyName": "连城县",
                "CityID": 110,
                "DisSort": null
            }, {"Id": 1029, "countyName": "漳平市", "CityID": 110, "DisSort": null}, {
                "Id": 1030,
                "countyName": "梅列区",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1031, "countyName": "三元区", "CityID": 111, "DisSort": null}, {
                "Id": 1032,
                "countyName": "明溪县",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1033, "countyName": "清流县", "CityID": 111, "DisSort": null}, {
                "Id": 1034,
                "countyName": "宁化县",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1035, "countyName": "大田县", "CityID": 111, "DisSort": null}, {
                "Id": 1036,
                "countyName": "尤溪县",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1037, "countyName": "沙县", "CityID": 111, "DisSort": null}, {
                "Id": 1038,
                "countyName": "将乐县",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1039, "countyName": "泰宁县", "CityID": 111, "DisSort": null}, {
                "Id": 1040,
                "countyName": "建宁县",
                "CityID": 111,
                "DisSort": null
            }, {"Id": 1041, "countyName": "永安市", "CityID": 111, "DisSort": null}, {
                "Id": 1042,
                "countyName": "延平区",
                "CityID": 112,
                "DisSort": null
            }, {"Id": 1043, "countyName": "顺昌县", "CityID": 112, "DisSort": null}, {
                "Id": 1044,
                "countyName": "浦城县",
                "CityID": 112,
                "DisSort": null
            }, {"Id": 1045, "countyName": "光泽县", "CityID": 112, "DisSort": null}, {
                "Id": 1046,
                "countyName": "松溪县",
                "CityID": 112,
                "DisSort": null
            }, {"Id": 1047, "countyName": "政和县", "CityID": 112, "DisSort": null}, {
                "Id": 1048,
                "countyName": "邵武市",
                "CityID": 112,
                "DisSort": null
            }, {"Id": 1049, "countyName": "武夷山市", "CityID": 112, "DisSort": null}, {
                "Id": 1050,
                "countyName": "建瓯市",
                "CityID": 112,
                "DisSort": null
            }, {"Id": 1051, "countyName": "建阳市", "CityID": 112, "DisSort": null}, {
                "Id": 1052,
                "countyName": "月湖区",
                "CityID": 113,
                "DisSort": null
            }, {"Id": 1053, "countyName": "余江县", "CityID": 113, "DisSort": null}, {
                "Id": 1054,
                "countyName": "贵溪市",
                "CityID": 113,
                "DisSort": null
            }, {"Id": 1055, "countyName": "渝水区", "CityID": 114, "DisSort": null}, {
                "Id": 1056,
                "countyName": "分宜县",
                "CityID": 114,
                "DisSort": null
            }, {"Id": 1057, "countyName": "东湖区", "CityID": 115, "DisSort": null}, {
                "Id": 1058,
                "countyName": "西湖区",
                "CityID": 115,
                "DisSort": null
            }, {"Id": 1059, "countyName": "青云谱区", "CityID": 115, "DisSort": null}, {
                "Id": 1060,
                "countyName": "湾里区",
                "CityID": 115,
                "DisSort": null
            }, {"Id": 1061, "countyName": "青山湖区", "CityID": 115, "DisSort": null}, {
                "Id": 1062,
                "countyName": "南昌县",
                "CityID": 115,
                "DisSort": null
            }, {"Id": 1063, "countyName": "新建县", "CityID": 115, "DisSort": null}, {
                "Id": 1064,
                "countyName": "安义县",
                "CityID": 115,
                "DisSort": null
            }, {"Id": 1065, "countyName": "进贤县", "CityID": 115, "DisSort": null}, {
                "Id": 1066,
                "countyName": "庐山区",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1067, "countyName": "浔阳区", "CityID": 116, "DisSort": null}, {
                "Id": 1068,
                "countyName": "九江县",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1069, "countyName": "武宁县", "CityID": 116, "DisSort": null}, {
                "Id": 1070,
                "countyName": "修水县",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1071, "countyName": "永修县", "CityID": 116, "DisSort": null}, {
                "Id": 1072,
                "countyName": "德安县",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1073, "countyName": "星子县", "CityID": 116, "DisSort": null}, {
                "Id": 1074,
                "countyName": "都昌县",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1075, "countyName": "湖口县", "CityID": 116, "DisSort": null}, {
                "Id": 1076,
                "countyName": "彭泽县",
                "CityID": 116,
                "DisSort": null
            }, {"Id": 1077, "countyName": "瑞昌市", "CityID": 116, "DisSort": null}, {
                "Id": 1078,
                "countyName": "信州区",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1079, "countyName": "上饶县", "CityID": 117, "DisSort": null}, {
                "Id": 1080,
                "countyName": "广丰县",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1081, "countyName": "玉山县", "CityID": 117, "DisSort": null}, {
                "Id": 1082,
                "countyName": "铅山县",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1083, "countyName": "横峰县", "CityID": 117, "DisSort": null}, {
                "Id": 1084,
                "countyName": "弋阳县",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1085, "countyName": "余干县", "CityID": 117, "DisSort": null}, {
                "Id": 1086,
                "countyName": "鄱阳县",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1087, "countyName": "万年县", "CityID": 117, "DisSort": null}, {
                "Id": 1088,
                "countyName": "婺源县",
                "CityID": 117,
                "DisSort": null
            }, {"Id": 1089, "countyName": "德兴市", "CityID": 117, "DisSort": null}, {
                "Id": 1090,
                "countyName": "临川区",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1091, "countyName": "南城县", "CityID": 118, "DisSort": null}, {
                "Id": 1092,
                "countyName": "黎川县",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1093, "countyName": "南丰县", "CityID": 118, "DisSort": null}, {
                "Id": 1094,
                "countyName": "崇仁县",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1095, "countyName": "乐安县", "CityID": 118, "DisSort": null}, {
                "Id": 1096,
                "countyName": "宜黄县",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1097, "countyName": "金溪县", "CityID": 118, "DisSort": null}, {
                "Id": 1098,
                "countyName": "资溪县",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1099, "countyName": "东乡县", "CityID": 118, "DisSort": null}, {
                "Id": 1100,
                "countyName": "广昌县",
                "CityID": 118,
                "DisSort": null
            }, {"Id": 1101, "countyName": "袁州区", "CityID": 119, "DisSort": null}, {
                "Id": 1102,
                "countyName": "奉新县",
                "CityID": 119,
                "DisSort": null
            }, {"Id": 1103, "countyName": "万载县", "CityID": 119, "DisSort": null}, {
                "Id": 1104,
                "countyName": "上高县",
                "CityID": 119,
                "DisSort": null
            }, {"Id": 1105, "countyName": "宜丰县", "CityID": 119, "DisSort": null}, {
                "Id": 1106,
                "countyName": "靖安县",
                "CityID": 119,
                "DisSort": null
            }, {"Id": 1107, "countyName": "铜鼓县", "CityID": 119, "DisSort": null}, {
                "Id": 1108,
                "countyName": "丰城市",
                "CityID": 119,
                "DisSort": null
            }, {"Id": 1109, "countyName": "樟树市", "CityID": 119, "DisSort": null}, {
                "Id": 1110,
                "countyName": "高安市",
                "CityID": 119,
                "DisSort": null
            }, {"Id": 1111, "countyName": "吉州区", "CityID": 120, "DisSort": null}, {
                "Id": 1112,
                "countyName": "青原区",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1113, "countyName": "吉安县", "CityID": 120, "DisSort": null}, {
                "Id": 1114,
                "countyName": "吉水县",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1115, "countyName": "峡江县", "CityID": 120, "DisSort": null}, {
                "Id": 1116,
                "countyName": "新干县",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1117, "countyName": "永丰县", "CityID": 120, "DisSort": null}, {
                "Id": 1118,
                "countyName": "泰和县",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1119, "countyName": "遂川县", "CityID": 120, "DisSort": null}, {
                "Id": 1120,
                "countyName": "万安县",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1121, "countyName": "安福县", "CityID": 120, "DisSort": null}, {
                "Id": 1122,
                "countyName": "永新县",
                "CityID": 120,
                "DisSort": null
            }, {"Id": 1123, "countyName": "井冈山市", "CityID": 120, "DisSort": null}, {
                "Id": 1124,
                "countyName": "章贡区",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1125, "countyName": "赣县", "CityID": 121, "DisSort": null}, {
                "Id": 1126,
                "countyName": "信丰县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1127, "countyName": "大余县", "CityID": 121, "DisSort": null}, {
                "Id": 1128,
                "countyName": "上犹县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1129, "countyName": "崇义县", "CityID": 121, "DisSort": null}, {
                "Id": 1130,
                "countyName": "安远县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1131, "countyName": "龙南县", "CityID": 121, "DisSort": null}, {
                "Id": 1132,
                "countyName": "定南县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1133, "countyName": "全南县", "CityID": 121, "DisSort": null}, {
                "Id": 1134,
                "countyName": "宁都县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1135, "countyName": "于都县", "CityID": 121, "DisSort": null}, {
                "Id": 1136,
                "countyName": "兴国县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1137, "countyName": "会昌县", "CityID": 121, "DisSort": null}, {
                "Id": 1138,
                "countyName": "寻乌县",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1139, "countyName": "石城县", "CityID": 121, "DisSort": null}, {
                "Id": 1140,
                "countyName": "瑞金市",
                "CityID": 121,
                "DisSort": null
            }, {"Id": 1141, "countyName": "南康市", "CityID": 121, "DisSort": null}, {
                "Id": 1142,
                "countyName": "昌江区",
                "CityID": 122,
                "DisSort": null
            }, {"Id": 1143, "countyName": "珠山区", "CityID": 122, "DisSort": null}, {
                "Id": 1144,
                "countyName": "浮梁县",
                "CityID": 122,
                "DisSort": null
            }, {"Id": 1145, "countyName": "乐平市", "CityID": 122, "DisSort": null}, {
                "Id": 1146,
                "countyName": "安源区",
                "CityID": 123,
                "DisSort": null
            }, {"Id": 1147, "countyName": "湘东区", "CityID": 123, "DisSort": null}, {
                "Id": 1148,
                "countyName": "莲花县",
                "CityID": 123,
                "DisSort": null
            }, {"Id": 1149, "countyName": "上栗县", "CityID": 123, "DisSort": null}, {
                "Id": 1150,
                "countyName": "芦溪县",
                "CityID": 123,
                "DisSort": null
            }, {"Id": 1151, "countyName": "牡丹区", "CityID": 124, "DisSort": null}, {
                "Id": 1152,
                "countyName": "曹县",
                "CityID": 124,
                "DisSort": null
            }, {"Id": 1153, "countyName": "单县", "CityID": 124, "DisSort": null}, {
                "Id": 1154,
                "countyName": "成武县",
                "CityID": 124,
                "DisSort": null
            }, {"Id": 1155, "countyName": "巨野县", "CityID": 124, "DisSort": null}, {
                "Id": 1156,
                "countyName": "郓城县",
                "CityID": 124,
                "DisSort": null
            }, {"Id": 1157, "countyName": "鄄城县", "CityID": 124, "DisSort": null}, {
                "Id": 1158,
                "countyName": "定陶县",
                "CityID": 124,
                "DisSort": null
            }, {"Id": 1159, "countyName": "东明县", "CityID": 124, "DisSort": null}, {
                "Id": 1160,
                "countyName": "历下区",
                "CityID": 125,
                "DisSort": null
            }, {"Id": 1161, "countyName": "市中区", "CityID": 125, "DisSort": null}, {
                "Id": 1162,
                "countyName": "槐荫区",
                "CityID": 125,
                "DisSort": null
            }, {"Id": 1163, "countyName": "天桥区", "CityID": 125, "DisSort": null}, {
                "Id": 1164,
                "countyName": "历城区",
                "CityID": 125,
                "DisSort": null
            }, {"Id": 1165, "countyName": "长清区", "CityID": 125, "DisSort": null}, {
                "Id": 1166,
                "countyName": "平阴县",
                "CityID": 125,
                "DisSort": null
            }, {"Id": 1167, "countyName": "济阳县", "CityID": 125, "DisSort": null}, {
                "Id": 1168,
                "countyName": "商河县",
                "CityID": 125,
                "DisSort": null
            }, {"Id": 1169, "countyName": "章丘市", "CityID": 125, "DisSort": null}, {
                "Id": 1170,
                "countyName": "市南区",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1171, "countyName": "市北区", "CityID": 126, "DisSort": null}, {
                "Id": 1172,
                "countyName": "四方区",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1173, "countyName": "黄岛区", "CityID": 126, "DisSort": null}, {
                "Id": 1174,
                "countyName": "崂山区",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1175, "countyName": "李沧区", "CityID": 126, "DisSort": null}, {
                "Id": 1176,
                "countyName": "城阳区",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1177, "countyName": "胶州市", "CityID": 126, "DisSort": null}, {
                "Id": 1178,
                "countyName": "即墨市",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1179, "countyName": "平度市", "CityID": 126, "DisSort": null}, {
                "Id": 1180,
                "countyName": "胶南市",
                "CityID": 126,
                "DisSort": null
            }, {"Id": 1181, "countyName": "莱西市", "CityID": 126, "DisSort": null}, {
                "Id": 1182,
                "countyName": "淄川区",
                "CityID": 127,
                "DisSort": null
            }, {"Id": 1183, "countyName": "张店区", "CityID": 127, "DisSort": null}, {
                "Id": 1184,
                "countyName": "博山区",
                "CityID": 127,
                "DisSort": null
            }, {"Id": 1185, "countyName": "临淄区", "CityID": 127, "DisSort": null}, {
                "Id": 1186,
                "countyName": "周村区",
                "CityID": 127,
                "DisSort": null
            }, {"Id": 1187, "countyName": "桓台县", "CityID": 127, "DisSort": null}, {
                "Id": 1188,
                "countyName": "高青县",
                "CityID": 127,
                "DisSort": null
            }, {"Id": 1189, "countyName": "沂源县", "CityID": 127, "DisSort": null}, {
                "Id": 1190,
                "countyName": "德城区",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1191, "countyName": "陵县", "CityID": 128, "DisSort": null}, {
                "Id": 1192,
                "countyName": "宁津县",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1193, "countyName": "庆云县", "CityID": 128, "DisSort": null}, {
                "Id": 1194,
                "countyName": "临邑县",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1195, "countyName": "齐河县", "CityID": 128, "DisSort": null}, {
                "Id": 1196,
                "countyName": "平原县",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1197, "countyName": "夏津县", "CityID": 128, "DisSort": null}, {
                "Id": 1198,
                "countyName": "武城县",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1199, "countyName": "乐陵市", "CityID": 128, "DisSort": null}, {
                "Id": 1200,
                "countyName": "禹城市",
                "CityID": 128,
                "DisSort": null
            }, {"Id": 1201, "countyName": "芝罘区", "CityID": 129, "DisSort": null}, {
                "Id": 1202,
                "countyName": "福山区",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1203, "countyName": "牟平区", "CityID": 129, "DisSort": null}, {
                "Id": 1204,
                "countyName": "莱山区",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1205, "countyName": "长岛县", "CityID": 129, "DisSort": null}, {
                "Id": 1206,
                "countyName": "龙口市",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1207, "countyName": "莱阳市", "CityID": 129, "DisSort": null}, {
                "Id": 1208,
                "countyName": "莱州市",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1209, "countyName": "蓬莱市", "CityID": 129, "DisSort": null}, {
                "Id": 1210,
                "countyName": "招远市",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1211, "countyName": "栖霞市", "CityID": 129, "DisSort": null}, {
                "Id": 1212,
                "countyName": "海阳市",
                "CityID": 129,
                "DisSort": null
            }, {"Id": 1213, "countyName": "潍城区", "CityID": 130, "DisSort": null}, {
                "Id": 1214,
                "countyName": "寒亭区",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1215, "countyName": "坊子区", "CityID": 130, "DisSort": null}, {
                "Id": 1216,
                "countyName": "奎文区",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1217, "countyName": "临朐县", "CityID": 130, "DisSort": null}, {
                "Id": 1218,
                "countyName": "昌乐县",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1219, "countyName": "青州市", "CityID": 130, "DisSort": null}, {
                "Id": 1220,
                "countyName": "诸城市",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1221, "countyName": "寿光市", "CityID": 130, "DisSort": null}, {
                "Id": 1222,
                "countyName": "安丘市",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1223, "countyName": "高密市", "CityID": 130, "DisSort": null}, {
                "Id": 1224,
                "countyName": "昌邑市",
                "CityID": 130,
                "DisSort": null
            }, {"Id": 1225, "countyName": "市中区", "CityID": 131, "DisSort": null}, {
                "Id": 1226,
                "countyName": "任城区",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1227, "countyName": "微山县", "CityID": 131, "DisSort": null}, {
                "Id": 1228,
                "countyName": "鱼台县",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1229, "countyName": "金乡县", "CityID": 131, "DisSort": null}, {
                "Id": 1230,
                "countyName": "嘉祥县",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1231, "countyName": "汶上县", "CityID": 131, "DisSort": null}, {
                "Id": 1232,
                "countyName": "泗水县",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1233, "countyName": "梁山县", "CityID": 131, "DisSort": null}, {
                "Id": 1234,
                "countyName": "曲阜市",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1235, "countyName": "兖州市", "CityID": 131, "DisSort": null}, {
                "Id": 1236,
                "countyName": "邹城市",
                "CityID": 131,
                "DisSort": null
            }, {"Id": 1237, "countyName": "泰山区", "CityID": 132, "DisSort": null}, {
                "Id": 1238,
                "countyName": "岱岳区",
                "CityID": 132,
                "DisSort": null
            }, {"Id": 1239, "countyName": "宁阳县", "CityID": 132, "DisSort": null}, {
                "Id": 1240,
                "countyName": "东平县",
                "CityID": 132,
                "DisSort": null
            }, {"Id": 1241, "countyName": "新泰市", "CityID": 132, "DisSort": null}, {
                "Id": 1242,
                "countyName": "肥城市",
                "CityID": 132,
                "DisSort": null
            }, {"Id": 1243, "countyName": "兰山区", "CityID": 133, "DisSort": null}, {
                "Id": 1244,
                "countyName": "罗庄区",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1245, "countyName": "河东区", "CityID": 133, "DisSort": null}, {
                "Id": 1246,
                "countyName": "沂南县",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1247, "countyName": "郯城县", "CityID": 133, "DisSort": null}, {
                "Id": 1248,
                "countyName": "沂水县",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1249, "countyName": "苍山县", "CityID": 133, "DisSort": null}, {
                "Id": 1250,
                "countyName": "费县",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1251, "countyName": "平邑县", "CityID": 133, "DisSort": null}, {
                "Id": 1252,
                "countyName": "莒南县",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1253, "countyName": "蒙阴县", "CityID": 133, "DisSort": null}, {
                "Id": 1254,
                "countyName": "临沭县",
                "CityID": 133,
                "DisSort": null
            }, {"Id": 1255, "countyName": "滨城区", "CityID": 134, "DisSort": null}, {
                "Id": 1256,
                "countyName": "惠民县",
                "CityID": 134,
                "DisSort": null
            }, {"Id": 1257, "countyName": "阳信县", "CityID": 134, "DisSort": null}, {
                "Id": 1258,
                "countyName": "无棣县",
                "CityID": 134,
                "DisSort": null
            }, {"Id": 1259, "countyName": "沾化县", "CityID": 134, "DisSort": null}, {
                "Id": 1260,
                "countyName": "博兴县",
                "CityID": 134,
                "DisSort": null
            }, {"Id": 1261, "countyName": "邹平县", "CityID": 134, "DisSort": null}, {
                "Id": 1262,
                "countyName": "东营区",
                "CityID": 135,
                "DisSort": null
            }, {"Id": 1263, "countyName": "河口区", "CityID": 135, "DisSort": null}, {
                "Id": 1264,
                "countyName": "垦利县",
                "CityID": 135,
                "DisSort": null
            }, {"Id": 1265, "countyName": "利津县", "CityID": 135, "DisSort": null}, {
                "Id": 1266,
                "countyName": "广饶县",
                "CityID": 135,
                "DisSort": null
            }, {"Id": 1267, "countyName": "环翠区", "CityID": 136, "DisSort": null}, {
                "Id": 1268,
                "countyName": "文登市",
                "CityID": 136,
                "DisSort": null
            }, {"Id": 1269, "countyName": "荣成市", "CityID": 136, "DisSort": null}, {
                "Id": 1270,
                "countyName": "乳山市",
                "CityID": 136,
                "DisSort": null
            }, {"Id": 1271, "countyName": "市中区", "CityID": 137, "DisSort": null}, {
                "Id": 1272,
                "countyName": "薛城区",
                "CityID": 137,
                "DisSort": null
            }, {"Id": 1273, "countyName": "峄城区", "CityID": 137, "DisSort": null}, {
                "Id": 1274,
                "countyName": "台儿庄区",
                "CityID": 137,
                "DisSort": null
            }, {"Id": 1275, "countyName": "山亭区", "CityID": 137, "DisSort": null}, {
                "Id": 1276,
                "countyName": "滕州市",
                "CityID": 137,
                "DisSort": null
            }, {"Id": 1277, "countyName": "东港区", "CityID": 138, "DisSort": null}, {
                "Id": 1278,
                "countyName": "岚山区",
                "CityID": 138,
                "DisSort": null
            }, {"Id": 1279, "countyName": "五莲县", "CityID": 138, "DisSort": null}, {
                "Id": 1280,
                "countyName": "莒县",
                "CityID": 138,
                "DisSort": null
            }, {"Id": 1281, "countyName": "莱城区", "CityID": 139, "DisSort": null}, {
                "Id": 1282,
                "countyName": "钢城区",
                "CityID": 139,
                "DisSort": null
            }, {"Id": 1283, "countyName": "东昌府区", "CityID": 140, "DisSort": null}, {
                "Id": 1284,
                "countyName": "阳谷县",
                "CityID": 140,
                "DisSort": null
            }, {"Id": 1285, "countyName": "莘县", "CityID": 140, "DisSort": null}, {
                "Id": 1286,
                "countyName": "茌平县",
                "CityID": 140,
                "DisSort": null
            }, {"Id": 1287, "countyName": "东阿县", "CityID": 140, "DisSort": null}, {
                "Id": 1288,
                "countyName": "冠县",
                "CityID": 140,
                "DisSort": null
            }, {"Id": 1289, "countyName": "高唐县", "CityID": 140, "DisSort": null}, {
                "Id": 1290,
                "countyName": "临清市",
                "CityID": 140,
                "DisSort": null
            }, {"Id": 1291, "countyName": "梁园区", "CityID": 141, "DisSort": null}, {
                "Id": 1292,
                "countyName": "睢阳区",
                "CityID": 141,
                "DisSort": null
            }, {"Id": 1293, "countyName": "民权县", "CityID": 141, "DisSort": null}, {
                "Id": 1294,
                "countyName": "睢县",
                "CityID": 141,
                "DisSort": null
            }, {"Id": 1295, "countyName": "宁陵县", "CityID": 141, "DisSort": null}, {
                "Id": 1296,
                "countyName": "柘城县",
                "CityID": 141,
                "DisSort": null
            }, {"Id": 1297, "countyName": "虞城县", "CityID": 141, "DisSort": null}, {
                "Id": 1298,
                "countyName": "夏邑县",
                "CityID": 141,
                "DisSort": null
            }, {"Id": 1299, "countyName": "永城市", "CityID": 141, "DisSort": null}, {
                "Id": 1300,
                "countyName": "中原区",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1301, "countyName": "二七区", "CityID": 142, "DisSort": null}, {
                "Id": 1302,
                "countyName": "管城回族区",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1303, "countyName": "金水区", "CityID": 142, "DisSort": null}, {
                "Id": 1304,
                "countyName": "上街区",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1305, "countyName": "惠济区", "CityID": 142, "DisSort": null}, {
                "Id": 1306,
                "countyName": "中牟县",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1307, "countyName": "巩义市", "CityID": 142, "DisSort": null}, {
                "Id": 1308,
                "countyName": "荥阳市",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1309, "countyName": "新密市", "CityID": 142, "DisSort": null}, {
                "Id": 1310,
                "countyName": "新郑市",
                "CityID": 142,
                "DisSort": null
            }, {"Id": 1311, "countyName": "登封市", "CityID": 142, "DisSort": null}, {
                "Id": 1312,
                "countyName": "文峰区",
                "CityID": 143,
                "DisSort": null
            }, {"Id": 1313, "countyName": "北关区", "CityID": 143, "DisSort": null}, {
                "Id": 1314,
                "countyName": "殷都区",
                "CityID": 143,
                "DisSort": null
            }, {"Id": 1315, "countyName": "龙安区", "CityID": 143, "DisSort": null}, {
                "Id": 1316,
                "countyName": "安阳县",
                "CityID": 143,
                "DisSort": null
            }, {"Id": 1317, "countyName": "汤阴县", "CityID": 143, "DisSort": null}, {
                "Id": 1318,
                "countyName": "滑县",
                "CityID": 143,
                "DisSort": null
            }, {"Id": 1319, "countyName": "内黄县", "CityID": 143, "DisSort": null}, {
                "Id": 1320,
                "countyName": "林州市",
                "CityID": 143,
                "DisSort": null
            }, {"Id": 1321, "countyName": "红旗区", "CityID": 144, "DisSort": null}, {
                "Id": 1322,
                "countyName": "卫滨区",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1323, "countyName": "凤泉区", "CityID": 144, "DisSort": null}, {
                "Id": 1324,
                "countyName": "牧野区",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1325, "countyName": "新乡县", "CityID": 144, "DisSort": null}, {
                "Id": 1326,
                "countyName": "获嘉县",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1327, "countyName": "原阳县", "CityID": 144, "DisSort": null}, {
                "Id": 1328,
                "countyName": "延津县",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1329, "countyName": "封丘县", "CityID": 144, "DisSort": null}, {
                "Id": 1330,
                "countyName": "长垣县",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1331, "countyName": "卫辉市", "CityID": 144, "DisSort": null}, {
                "Id": 1332,
                "countyName": "辉县市",
                "CityID": 144,
                "DisSort": null
            }, {"Id": 1333, "countyName": "魏都区", "CityID": 145, "DisSort": null}, {
                "Id": 1334,
                "countyName": "许昌县",
                "CityID": 145,
                "DisSort": null
            }, {"Id": 1335, "countyName": "鄢陵县", "CityID": 145, "DisSort": null}, {
                "Id": 1336,
                "countyName": "襄城县",
                "CityID": 145,
                "DisSort": null
            }, {"Id": 1337, "countyName": "禹州市", "CityID": 145, "DisSort": null}, {
                "Id": 1338,
                "countyName": "长葛市",
                "CityID": 145,
                "DisSort": null
            }, {"Id": 1339, "countyName": "新华区", "CityID": 146, "DisSort": null}, {
                "Id": 1340,
                "countyName": "卫东区",
                "CityID": 146,
                "DisSort": null
            }, {"Id": 1341, "countyName": "石龙区", "CityID": 146, "DisSort": null}, {
                "Id": 1342,
                "countyName": "湛河区",
                "CityID": 146,
                "DisSort": null
            }, {"Id": 1343, "countyName": "宝丰县", "CityID": 146, "DisSort": null}, {
                "Id": 1344,
                "countyName": "叶县",
                "CityID": 146,
                "DisSort": null
            }, {"Id": 1345, "countyName": "鲁山县", "CityID": 146, "DisSort": null}, {
                "Id": 1346,
                "countyName": "郏县",
                "CityID": 146,
                "DisSort": null
            }, {"Id": 1347, "countyName": "舞钢市", "CityID": 146, "DisSort": null}, {
                "Id": 1348,
                "countyName": "汝州市",
                "CityID": 146,
                "DisSort": null
            }, {"Id": 1349, "countyName": "浉河区", "CityID": 147, "DisSort": null}, {
                "Id": 1350,
                "countyName": "平桥区",
                "CityID": 147,
                "DisSort": null
            }, {"Id": 1351, "countyName": "罗山县", "CityID": 147, "DisSort": null}, {
                "Id": 1352,
                "countyName": "光山县",
                "CityID": 147,
                "DisSort": null
            }, {"Id": 1353, "countyName": "新县", "CityID": 147, "DisSort": null}, {
                "Id": 1354,
                "countyName": "商城县",
                "CityID": 147,
                "DisSort": null
            }, {"Id": 1355, "countyName": "固始县", "CityID": 147, "DisSort": null}, {
                "Id": 1356,
                "countyName": "潢川县",
                "CityID": 147,
                "DisSort": null
            }, {"Id": 1357, "countyName": "淮滨县", "CityID": 147, "DisSort": null}, {
                "Id": 1358,
                "countyName": "息县",
                "CityID": 147,
                "DisSort": null
            }, {"Id": 1359, "countyName": "宛城区", "CityID": 148, "DisSort": null}, {
                "Id": 1360,
                "countyName": "卧龙区",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1361, "countyName": "南召县", "CityID": 148, "DisSort": null}, {
                "Id": 1362,
                "countyName": "方城县",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1363, "countyName": "西峡县", "CityID": 148, "DisSort": null}, {
                "Id": 1364,
                "countyName": "镇平县",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1365, "countyName": "内乡县", "CityID": 148, "DisSort": null}, {
                "Id": 1366,
                "countyName": "淅川县",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1367, "countyName": "社旗县", "CityID": 148, "DisSort": null}, {
                "Id": 1368,
                "countyName": "唐河县",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1369, "countyName": "新野县", "CityID": 148, "DisSort": null}, {
                "Id": 1370,
                "countyName": "桐柏县",
                "CityID": 148,
                "DisSort": null
            }, {"Id": 1371, "countyName": "邓州市", "CityID": 148, "DisSort": null}, {
                "Id": 1372,
                "countyName": "龙亭区",
                "CityID": 149,
                "DisSort": null
            }, {"Id": 1373, "countyName": "顺河回族区", "CityID": 149, "DisSort": null}, {
                "Id": 1374,
                "countyName": "鼓楼区",
                "CityID": 149,
                "DisSort": null
            }, {"Id": 1375, "countyName": "禹王台区", "CityID": 149, "DisSort": null}, {
                "Id": 1376,
                "countyName": "金明区",
                "CityID": 149,
                "DisSort": null
            }, {"Id": 1377, "countyName": "杞县", "CityID": 149, "DisSort": null}, {
                "Id": 1378,
                "countyName": "通许县",
                "CityID": 149,
                "DisSort": null
            }, {"Id": 1379, "countyName": "尉氏县", "CityID": 149, "DisSort": null}, {
                "Id": 1380,
                "countyName": "开封县",
                "CityID": 149,
                "DisSort": null
            }, {"Id": 1381, "countyName": "兰考县", "CityID": 149, "DisSort": null}, {
                "Id": 1382,
                "countyName": "老城区",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1383, "countyName": "西工区", "CityID": 150, "DisSort": null}, {
                "Id": 1384,
                "countyName": "瀍河回族区",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1385, "countyName": "涧西区", "CityID": 150, "DisSort": null}, {
                "Id": 1386,
                "countyName": "吉利区",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1387, "countyName": "洛龙区", "CityID": 150, "DisSort": null}, {
                "Id": 1388,
                "countyName": "孟津县",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1389, "countyName": "新安县", "CityID": 150, "DisSort": null}, {
                "Id": 1390,
                "countyName": "栾川县",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1391, "countyName": "嵩县", "CityID": 150, "DisSort": null}, {
                "Id": 1392,
                "countyName": "汝阳县",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1393, "countyName": "宜阳县", "CityID": 150, "DisSort": null}, {
                "Id": 1394,
                "countyName": "洛宁县",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1395, "countyName": "伊川县", "CityID": 150, "DisSort": null}, {
                "Id": 1396,
                "countyName": "偃师市",
                "CityID": 150,
                "DisSort": null
            }, {"Id": 1397, "countyName": "解放区", "CityID": 152, "DisSort": null}, {
                "Id": 1398,
                "countyName": "中站区",
                "CityID": 152,
                "DisSort": null
            }, {"Id": 1399, "countyName": "马村区", "CityID": 152, "DisSort": null}, {
                "Id": 1400,
                "countyName": "山阳区",
                "CityID": 152,
                "DisSort": null
            }, {"Id": 1401, "countyName": "修武县", "CityID": 152, "DisSort": null}, {
                "Id": 1402,
                "countyName": "博爱县",
                "CityID": 152,
                "DisSort": null
            }, {"Id": 1403, "countyName": "武陟县", "CityID": 152, "DisSort": null}, {
                "Id": 1404,
                "countyName": "温县",
                "CityID": 152,
                "DisSort": null
            }, {"Id": 1405, "countyName": "沁阳市", "CityID": 152, "DisSort": null}, {
                "Id": 1406,
                "countyName": "孟州市",
                "CityID": 152,
                "DisSort": null
            }, {"Id": 1407, "countyName": "鹤山区", "CityID": 153, "DisSort": null}, {
                "Id": 1408,
                "countyName": "山城区",
                "CityID": 153,
                "DisSort": null
            }, {"Id": 1409, "countyName": "淇滨区", "CityID": 153, "DisSort": null}, {
                "Id": 1410,
                "countyName": "浚县",
                "CityID": 153,
                "DisSort": null
            }, {"Id": 1411, "countyName": "淇县", "CityID": 153, "DisSort": null}, {
                "Id": 1412,
                "countyName": "华龙区",
                "CityID": 154,
                "DisSort": null
            }, {"Id": 1413, "countyName": "清丰县", "CityID": 154, "DisSort": null}, {
                "Id": 1414,
                "countyName": "南乐县",
                "CityID": 154,
                "DisSort": null
            }, {"Id": 1415, "countyName": "范县", "CityID": 154, "DisSort": null}, {
                "Id": 1416,
                "countyName": "台前县",
                "CityID": 154,
                "DisSort": null
            }, {"Id": 1417, "countyName": "濮阳县", "CityID": 154, "DisSort": null}, {
                "Id": 1418,
                "countyName": "川汇区",
                "CityID": 155,
                "DisSort": null
            }, {"Id": 1419, "countyName": "扶沟县", "CityID": 155, "DisSort": null}, {
                "Id": 1420,
                "countyName": "西华县",
                "CityID": 155,
                "DisSort": null
            }, {"Id": 1421, "countyName": "商水县", "CityID": 155, "DisSort": null}, {
                "Id": 1422,
                "countyName": "沈丘县",
                "CityID": 155,
                "DisSort": null
            }, {"Id": 1423, "countyName": "郸城县", "CityID": 155, "DisSort": null}, {
                "Id": 1424,
                "countyName": "淮阳县",
                "CityID": 155,
                "DisSort": null
            }, {"Id": 1425, "countyName": "太康县", "CityID": 155, "DisSort": null}, {
                "Id": 1426,
                "countyName": "鹿邑县",
                "CityID": 155,
                "DisSort": null
            }, {"Id": 1427, "countyName": "项城市", "CityID": 155, "DisSort": null}, {
                "Id": 1428,
                "countyName": "源汇区",
                "CityID": 156,
                "DisSort": null
            }, {"Id": 1429, "countyName": "郾城区", "CityID": 156, "DisSort": null}, {
                "Id": 1430,
                "countyName": "召陵区",
                "CityID": 156,
                "DisSort": null
            }, {"Id": 1431, "countyName": "舞阳县", "CityID": 156, "DisSort": null}, {
                "Id": 1432,
                "countyName": "临颍县",
                "CityID": 156,
                "DisSort": null
            }, {"Id": 1433, "countyName": "驿城区", "CityID": 157, "DisSort": null}, {
                "Id": 1434,
                "countyName": "西平县",
                "CityID": 157,
                "DisSort": null
            }, {"Id": 1435, "countyName": "上蔡县", "CityID": 157, "DisSort": null}, {
                "Id": 1436,
                "countyName": "平舆县",
                "CityID": 157,
                "DisSort": null
            }, {"Id": 1437, "countyName": "正阳县", "CityID": 157, "DisSort": null}, {
                "Id": 1438,
                "countyName": "确山县",
                "CityID": 157,
                "DisSort": null
            }, {"Id": 1439, "countyName": "泌阳县", "CityID": 157, "DisSort": null}, {
                "Id": 1440,
                "countyName": "汝南县",
                "CityID": 157,
                "DisSort": null
            }, {"Id": 1441, "countyName": "遂平县", "CityID": 157, "DisSort": null}, {
                "Id": 1442,
                "countyName": "新蔡县",
                "CityID": 157,
                "DisSort": null
            }, {"Id": 1443, "countyName": "湖滨区", "CityID": 158, "DisSort": null}, {
                "Id": 1444,
                "countyName": "渑池县",
                "CityID": 158,
                "DisSort": null
            }, {"Id": 1445, "countyName": "陕县", "CityID": 158, "DisSort": null}, {
                "Id": 1446,
                "countyName": "卢氏县",
                "CityID": 158,
                "DisSort": null
            }, {"Id": 1447, "countyName": "义马市", "CityID": 158, "DisSort": null}, {
                "Id": 1448,
                "countyName": "灵宝市",
                "CityID": 158,
                "DisSort": null
            }, {"Id": 1449, "countyName": "江岸区", "CityID": 159, "DisSort": null}, {
                "Id": 1450,
                "countyName": "江汉区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1451, "countyName": "硚口区", "CityID": 159, "DisSort": null}, {
                "Id": 1452,
                "countyName": "汉阳区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1453, "countyName": "武昌区", "CityID": 159, "DisSort": null}, {
                "Id": 1454,
                "countyName": "青山区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1455, "countyName": "洪山区", "CityID": 159, "DisSort": null}, {
                "Id": 1456,
                "countyName": "东西湖区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1457, "countyName": "汉南区", "CityID": 159, "DisSort": null}, {
                "Id": 1458,
                "countyName": "蔡甸区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1459, "countyName": "江夏区", "CityID": 159, "DisSort": null}, {
                "Id": 1460,
                "countyName": "黄陂区",
                "CityID": 159,
                "DisSort": null
            }, {"Id": 1461, "countyName": "新洲区", "CityID": 159, "DisSort": null}, {
                "Id": 1462,
                "countyName": "襄城区",
                "CityID": 160,
                "DisSort": null
            }, {"Id": 1463, "countyName": "樊城区", "CityID": 160, "DisSort": null}, {
                "Id": 1464,
                "countyName": "襄阳区",
                "CityID": 160,
                "DisSort": null
            }, {"Id": 1465, "countyName": "南漳县", "CityID": 160, "DisSort": null}, {
                "Id": 1466,
                "countyName": "谷城县",
                "CityID": 160,
                "DisSort": null
            }, {"Id": 1467, "countyName": "保康县", "CityID": 160, "DisSort": null}, {
                "Id": 1468,
                "countyName": "老河口市",
                "CityID": 160,
                "DisSort": null
            }, {"Id": 1469, "countyName": "枣阳市", "CityID": 160, "DisSort": null}, {
                "Id": 1470,
                "countyName": "宜城市",
                "CityID": 160,
                "DisSort": null
            }, {"Id": 1471, "countyName": "梁子湖区", "CityID": 161, "DisSort": null}, {
                "Id": 1472,
                "countyName": "华容区",
                "CityID": 161,
                "DisSort": null
            }, {"Id": 1473, "countyName": "鄂城区", "CityID": 161, "DisSort": null}, {
                "Id": 1474,
                "countyName": "孝南区",
                "CityID": 162,
                "DisSort": null
            }, {"Id": 1475, "countyName": "孝昌县", "CityID": 162, "DisSort": null}, {
                "Id": 1476,
                "countyName": "大悟县",
                "CityID": 162,
                "DisSort": null
            }, {"Id": 1477, "countyName": "云梦县", "CityID": 162, "DisSort": null}, {
                "Id": 1478,
                "countyName": "应城市",
                "CityID": 162,
                "DisSort": null
            }, {"Id": 1479, "countyName": "安陆市", "CityID": 162, "DisSort": null}, {
                "Id": 1480,
                "countyName": "汉川市",
                "CityID": 162,
                "DisSort": null
            }, {"Id": 1481, "countyName": "黄州区", "CityID": 163, "DisSort": null}, {
                "Id": 1482,
                "countyName": "团风县",
                "CityID": 163,
                "DisSort": null
            }, {"Id": 1483, "countyName": "红安县", "CityID": 163, "DisSort": null}, {
                "Id": 1484,
                "countyName": "罗田县",
                "CityID": 163,
                "DisSort": null
            }, {"Id": 1485, "countyName": "英山县", "CityID": 163, "DisSort": null}, {
                "Id": 1486,
                "countyName": "浠水县",
                "CityID": 163,
                "DisSort": null
            }, {"Id": 1487, "countyName": "蕲春县", "CityID": 163, "DisSort": null}, {
                "Id": 1488,
                "countyName": "黄梅县",
                "CityID": 163,
                "DisSort": null
            }, {"Id": 1489, "countyName": "麻城市", "CityID": 163, "DisSort": null}, {
                "Id": 1490,
                "countyName": "武穴市",
                "CityID": 163,
                "DisSort": null
            }, {"Id": 1491, "countyName": "黄石港区", "CityID": 164, "DisSort": null}, {
                "Id": 1492,
                "countyName": "西塞山区",
                "CityID": 164,
                "DisSort": null
            }, {"Id": 1493, "countyName": "下陆区", "CityID": 164, "DisSort": null}, {
                "Id": 1494,
                "countyName": "铁山区",
                "CityID": 164,
                "DisSort": null
            }, {"Id": 1495, "countyName": "阳新县", "CityID": 164, "DisSort": null}, {
                "Id": 1496,
                "countyName": "大冶市",
                "CityID": 164,
                "DisSort": null
            }, {"Id": 1497, "countyName": "咸安区", "CityID": 165, "DisSort": null}, {
                "Id": 1498,
                "countyName": "嘉鱼县",
                "CityID": 165,
                "DisSort": null
            }, {"Id": 1499, "countyName": "通城县", "CityID": 165, "DisSort": null}, {
                "Id": 1500,
                "countyName": "崇阳县",
                "CityID": 165,
                "DisSort": null
            }, {"Id": 1501, "countyName": "通山县", "CityID": 165, "DisSort": null}, {
                "Id": 1502,
                "countyName": "赤壁市",
                "CityID": 165,
                "DisSort": null
            }, {"Id": 1503, "countyName": "沙市区", "CityID": 166, "DisSort": null}, {
                "Id": 1504,
                "countyName": "荆州区",
                "CityID": 166,
                "DisSort": null
            }, {"Id": 1505, "countyName": "公安县", "CityID": 166, "DisSort": null}, {
                "Id": 1506,
                "countyName": "监利县",
                "CityID": 166,
                "DisSort": null
            }, {"Id": 1507, "countyName": "江陵县", "CityID": 166, "DisSort": null}, {
                "Id": 1508,
                "countyName": "石首市",
                "CityID": 166,
                "DisSort": null
            }, {"Id": 1509, "countyName": "洪湖市", "CityID": 166, "DisSort": null}, {
                "Id": 1510,
                "countyName": "松滋市",
                "CityID": 166,
                "DisSort": null
            }, {"Id": 1511, "countyName": "西陵区", "CityID": 167, "DisSort": null}, {
                "Id": 1512,
                "countyName": "伍家岗区",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1513, "countyName": "点军区", "CityID": 167, "DisSort": null}, {
                "Id": 1514,
                "countyName": "猇亭区",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1515, "countyName": "夷陵区", "CityID": 167, "DisSort": null}, {
                "Id": 1516,
                "countyName": "远安县",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1517, "countyName": "兴山县", "CityID": 167, "DisSort": null}, {
                "Id": 1518,
                "countyName": "秭归县",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1519, "countyName": "长阳土家族自治县", "CityID": 167, "DisSort": null}, {
                "Id": 1520,
                "countyName": "五峰土家族自治县",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1521, "countyName": "宜都市", "CityID": 167, "DisSort": null}, {
                "Id": 1522,
                "countyName": "当阳市",
                "CityID": 167,
                "DisSort": null
            }, {"Id": 1523, "countyName": "枝江市", "CityID": 167, "DisSort": null}, {
                "Id": 1524,
                "countyName": "恩施市",
                "CityID": 168,
                "DisSort": null
            }, {"Id": 1525, "countyName": "利川市", "CityID": 168, "DisSort": null}, {
                "Id": 1526,
                "countyName": "建始县",
                "CityID": 168,
                "DisSort": null
            }, {"Id": 1527, "countyName": "巴东县", "CityID": 168, "DisSort": null}, {
                "Id": 1528,
                "countyName": "宣恩县",
                "CityID": 168,
                "DisSort": null
            }, {"Id": 1529, "countyName": "咸丰县", "CityID": 168, "DisSort": null}, {
                "Id": 1530,
                "countyName": "来凤县",
                "CityID": 168,
                "DisSort": null
            }, {"Id": 1531, "countyName": "鹤峰县", "CityID": 168, "DisSort": null}, {
                "Id": 1532,
                "countyName": "茅箭区",
                "CityID": 170,
                "DisSort": null
            }, {"Id": 1533, "countyName": "张湾区", "CityID": 170, "DisSort": null}, {
                "Id": 1534,
                "countyName": "郧县",
                "CityID": 170,
                "DisSort": null
            }, {"Id": 1535, "countyName": "郧西县", "CityID": 170, "DisSort": null}, {
                "Id": 1536,
                "countyName": "竹山县",
                "CityID": 170,
                "DisSort": null
            }, {"Id": 1537, "countyName": "竹溪县", "CityID": 170, "DisSort": null}, {
                "Id": 1538,
                "countyName": "房县",
                "CityID": 170,
                "DisSort": null
            }, {"Id": 1539, "countyName": "丹江口市", "CityID": 170, "DisSort": null}, {
                "Id": 1540,
                "countyName": "曾都区",
                "CityID": 171,
                "DisSort": null
            }, {"Id": 1541, "countyName": "广水市", "CityID": 171, "DisSort": null}, {
                "Id": 1542,
                "countyName": "东宝区",
                "CityID": 172,
                "DisSort": null
            }, {"Id": 1543, "countyName": "掇刀区", "CityID": 172, "DisSort": null}, {
                "Id": 1544,
                "countyName": "京山县",
                "CityID": 172,
                "DisSort": null
            }, {"Id": 1545, "countyName": "沙洋县", "CityID": 172, "DisSort": null}, {
                "Id": 1546,
                "countyName": "钟祥市",
                "CityID": 172,
                "DisSort": null
            }, {"Id": 1547, "countyName": "岳阳楼区", "CityID": 176, "DisSort": null}, {
                "Id": 1548,
                "countyName": "云溪区",
                "CityID": 176,
                "DisSort": null
            }, {"Id": 1549, "countyName": "君山区", "CityID": 176, "DisSort": null}, {
                "Id": 1550,
                "countyName": "岳阳县",
                "CityID": 176,
                "DisSort": null
            }, {"Id": 1551, "countyName": "华容县", "CityID": 176, "DisSort": null}, {
                "Id": 1552,
                "countyName": "湘阴县",
                "CityID": 176,
                "DisSort": null
            }, {"Id": 1553, "countyName": "平江县", "CityID": 176, "DisSort": null}, {
                "Id": 1554,
                "countyName": "汨罗市",
                "CityID": 176,
                "DisSort": null
            }, {"Id": 1555, "countyName": "临湘市", "CityID": 176, "DisSort": null}, {
                "Id": 1556,
                "countyName": "芙蓉区",
                "CityID": 177,
                "DisSort": null
            }, {"Id": 1557, "countyName": "天心区", "CityID": 177, "DisSort": null}, {
                "Id": 1558,
                "countyName": "岳麓区",
                "CityID": 177,
                "DisSort": null
            }, {"Id": 1559, "countyName": "开福区", "CityID": 177, "DisSort": null}, {
                "Id": 1560,
                "countyName": "雨花区",
                "CityID": 177,
                "DisSort": null
            }, {"Id": 1561, "countyName": "长沙县", "CityID": 177, "DisSort": null}, {
                "Id": 1562,
                "countyName": "望城县",
                "CityID": 177,
                "DisSort": null
            }, {"Id": 1563, "countyName": "宁乡县", "CityID": 177, "DisSort": null}, {
                "Id": 1564,
                "countyName": "浏阳市",
                "CityID": 177,
                "DisSort": null
            }, {"Id": 1565, "countyName": "雨湖区", "CityID": 178, "DisSort": null}, {
                "Id": 1566,
                "countyName": "岳塘区",
                "CityID": 178,
                "DisSort": null
            }, {"Id": 1567, "countyName": "湘潭县", "CityID": 178, "DisSort": null}, {
                "Id": 1568,
                "countyName": "湘乡市",
                "CityID": 178,
                "DisSort": null
            }, {"Id": 1569, "countyName": "韶山市", "CityID": 178, "DisSort": null}, {
                "Id": 1570,
                "countyName": "荷塘区",
                "CityID": 179,
                "DisSort": null
            }, {"Id": 1571, "countyName": "芦淞区", "CityID": 179, "DisSort": null}, {
                "Id": 1572,
                "countyName": "石峰区",
                "CityID": 179,
                "DisSort": null
            }, {"Id": 1573, "countyName": "天元区", "CityID": 179, "DisSort": null}, {
                "Id": 1574,
                "countyName": "株洲县",
                "CityID": 179,
                "DisSort": null
            }, {"Id": 1575, "countyName": "攸县", "CityID": 179, "DisSort": null}, {
                "Id": 1576,
                "countyName": "茶陵县",
                "CityID": 179,
                "DisSort": null
            }, {"Id": 1577, "countyName": "炎陵县", "CityID": 179, "DisSort": null}, {
                "Id": 1578,
                "countyName": "醴陵市",
                "CityID": 179,
                "DisSort": null
            }, {"Id": 1579, "countyName": "珠晖区", "CityID": 180, "DisSort": null}, {
                "Id": 1580,
                "countyName": "雁峰区",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1581, "countyName": "石鼓区", "CityID": 180, "DisSort": null}, {
                "Id": 1582,
                "countyName": "蒸湘区",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1583, "countyName": "南岳区", "CityID": 180, "DisSort": null}, {
                "Id": 1584,
                "countyName": "衡阳县",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1585, "countyName": "衡南县", "CityID": 180, "DisSort": null}, {
                "Id": 1586,
                "countyName": "衡山县",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1587, "countyName": "衡东县", "CityID": 180, "DisSort": null}, {
                "Id": 1588,
                "countyName": "祁东县",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1589, "countyName": "耒阳市", "CityID": 180, "DisSort": null}, {
                "Id": 1590,
                "countyName": "常宁市",
                "CityID": 180,
                "DisSort": null
            }, {"Id": 1591, "countyName": "北湖区", "CityID": 181, "DisSort": null}, {
                "Id": 1592,
                "countyName": "苏仙区",
                "CityID": 181,
                "DisSort": null
            }, {"Id": 1593, "countyName": "桂阳县", "CityID": 181, "DisSort": null}, {
                "Id": 1594,
                "countyName": "宜章县",
                "CityID": 181,
                "DisSort": null
            }, {"Id": 1595, "countyName": "永兴县", "CityID": 181, "DisSort": null}, {
                "Id": 1596,
                "countyName": "嘉禾县",
                "CityID": 181,
                "DisSort": null
            }, {"Id": 1597, "countyName": "临武县", "CityID": 181, "DisSort": null}, {
                "Id": 1598,
                "countyName": "汝城县",
                "CityID": 181,
                "DisSort": null
            }, {"Id": 1599, "countyName": "桂东县", "CityID": 181, "DisSort": null}, {
                "Id": 1600,
                "countyName": "安仁县",
                "CityID": 181,
                "DisSort": null
            }, {"Id": 1601, "countyName": "资兴市", "CityID": 181, "DisSort": null}, {
                "Id": 1602,
                "countyName": "武陵区",
                "CityID": 182,
                "DisSort": null
            }, {"Id": 1603, "countyName": "鼎城区", "CityID": 182, "DisSort": null}, {
                "Id": 1604,
                "countyName": "安乡县",
                "CityID": 182,
                "DisSort": null
            }, {"Id": 1605, "countyName": "汉寿县", "CityID": 182, "DisSort": null}, {
                "Id": 1606,
                "countyName": "澧县",
                "CityID": 182,
                "DisSort": null
            }, {"Id": 1607, "countyName": "临澧县", "CityID": 182, "DisSort": null}, {
                "Id": 1608,
                "countyName": "桃源县",
                "CityID": 182,
                "DisSort": null
            }, {"Id": 1609, "countyName": "石门县", "CityID": 182, "DisSort": null}, {
                "Id": 1610,
                "countyName": "津市市",
                "CityID": 182,
                "DisSort": null
            }, {"Id": 1611, "countyName": "资阳区", "CityID": 183, "DisSort": null}, {
                "Id": 1612,
                "countyName": "赫山区",
                "CityID": 183,
                "DisSort": null
            }, {"Id": 1613, "countyName": "南县", "CityID": 183, "DisSort": null}, {
                "Id": 1614,
                "countyName": "桃江县",
                "CityID": 183,
                "DisSort": null
            }, {"Id": 1615, "countyName": "安化县", "CityID": 183, "DisSort": null}, {
                "Id": 1616,
                "countyName": "沅江市",
                "CityID": 183,
                "DisSort": null
            }, {"Id": 1617, "countyName": "娄星区", "CityID": 184, "DisSort": null}, {
                "Id": 1618,
                "countyName": "双峰县",
                "CityID": 184,
                "DisSort": null
            }, {"Id": 1619, "countyName": "新化县", "CityID": 184, "DisSort": null}, {
                "Id": 1620,
                "countyName": "冷水江市",
                "CityID": 184,
                "DisSort": null
            }, {"Id": 1621, "countyName": "涟源市", "CityID": 184, "DisSort": null}, {
                "Id": 1622,
                "countyName": "双清区",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1623, "countyName": "大祥区", "CityID": 185, "DisSort": null}, {
                "Id": 1624,
                "countyName": "北塔区",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1625, "countyName": "邵东县", "CityID": 185, "DisSort": null}, {
                "Id": 1626,
                "countyName": "新邵县",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1627, "countyName": "邵阳县", "CityID": 185, "DisSort": null}, {
                "Id": 1628,
                "countyName": "隆回县",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1629, "countyName": "洞口县", "CityID": 185, "DisSort": null}, {
                "Id": 1630,
                "countyName": "绥宁县",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1631, "countyName": "新宁县", "CityID": 185, "DisSort": null}, {
                "Id": 1632,
                "countyName": "城步苗族自治县",
                "CityID": 185,
                "DisSort": null
            }, {"Id": 1633, "countyName": "武冈市", "CityID": 185, "DisSort": null}, {
                "Id": 1634,
                "countyName": "吉首市",
                "CityID": 186,
                "DisSort": null
            }, {"Id": 1635, "countyName": "泸溪县", "CityID": 186, "DisSort": null}, {
                "Id": 1636,
                "countyName": "凤凰县",
                "CityID": 186,
                "DisSort": null
            }, {"Id": 1637, "countyName": "花垣县", "CityID": 186, "DisSort": null}, {
                "Id": 1638,
                "countyName": "保靖县",
                "CityID": 186,
                "DisSort": null
            }, {"Id": 1639, "countyName": "古丈县", "CityID": 186, "DisSort": null}, {
                "Id": 1640,
                "countyName": "永顺县",
                "CityID": 186,
                "DisSort": null
            }, {"Id": 1641, "countyName": "龙山县", "CityID": 186, "DisSort": null}, {
                "Id": 1642,
                "countyName": "永定区",
                "CityID": 187,
                "DisSort": null
            }, {"Id": 1643, "countyName": "武陵源区", "CityID": 187, "DisSort": null}, {
                "Id": 1644,
                "countyName": "慈利县",
                "CityID": 187,
                "DisSort": null
            }, {"Id": 1645, "countyName": "桑植县", "CityID": 187, "DisSort": null}, {
                "Id": 1646,
                "countyName": "鹤城区",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1647, "countyName": "中方县", "CityID": 188, "DisSort": null}, {
                "Id": 1648,
                "countyName": "沅陵县",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1649, "countyName": "辰溪县", "CityID": 188, "DisSort": null}, {
                "Id": 1650,
                "countyName": "溆浦县",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1651, "countyName": "会同县", "CityID": 188, "DisSort": null}, {
                "Id": 1652,
                "countyName": "麻阳苗族自治县",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1653, "countyName": "新晃侗族自治县", "CityID": 188, "DisSort": null}, {
                "Id": 1654,
                "countyName": "芷江侗族自治县",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1655, "countyName": "靖州苗族侗族自治县", "CityID": 188, "DisSort": null}, {
                "Id": 1656,
                "countyName": "通道侗族自治县",
                "CityID": 188,
                "DisSort": null
            }, {"Id": 1657, "countyName": "洪江市", "CityID": 188, "DisSort": null}, {
                "Id": 1658,
                "countyName": "零陵区",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1659, "countyName": "冷水滩区", "CityID": 189, "DisSort": null}, {
                "Id": 1660,
                "countyName": "祁阳县",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1661, "countyName": "东安县", "CityID": 189, "DisSort": null}, {
                "Id": 1662,
                "countyName": "双牌县",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1663, "countyName": "道县", "CityID": 189, "DisSort": null}, {
                "Id": 1664,
                "countyName": "江永县",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1665, "countyName": "宁远县", "CityID": 189, "DisSort": null}, {
                "Id": 1666,
                "countyName": "蓝山县",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1667, "countyName": "新田县", "CityID": 189, "DisSort": null}, {
                "Id": 1668,
                "countyName": "江华瑶族自治县",
                "CityID": 189,
                "DisSort": null
            }, {"Id": 1669, "countyName": "从化市", "CityID": 190, "DisSort": null}, {
                "Id": 1670,
                "countyName": "荔湾区",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1671, "countyName": "越秀区", "CityID": 190, "DisSort": null}, {
                "Id": 1672,
                "countyName": "海珠区",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1673, "countyName": "天河区", "CityID": 190, "DisSort": null}, {
                "Id": 1674,
                "countyName": "白云区",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1675, "countyName": "花都区", "CityID": 190, "DisSort": null}, {
                "Id": 1676,
                "countyName": "黄埔区",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1677, "countyName": "萝岗区", "CityID": 190, "DisSort": null}, {
                "Id": 1678,
                "countyName": "南沙区",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1679, "countyName": "番禺区", "CityID": 190, "DisSort": null}, {
                "Id": 1680,
                "countyName": "增城市",
                "CityID": 190,
                "DisSort": null
            }, {"Id": 1681, "countyName": "海丰县", "CityID": 191, "DisSort": null}, {
                "Id": 1682,
                "countyName": "陆河县",
                "CityID": 191,
                "DisSort": null
            }, {"Id": 1683, "countyName": "陆丰市", "CityID": 191, "DisSort": null}, {
                "Id": 1684,
                "countyName": "江城区",
                "CityID": 192,
                "DisSort": null
            }, {"Id": 1685, "countyName": "阳西县", "CityID": 192, "DisSort": null}, {
                "Id": 1686,
                "countyName": "阳东县",
                "CityID": 192,
                "DisSort": null
            }, {"Id": 1687, "countyName": "阳春市", "CityID": 192, "DisSort": null}, {
                "Id": 1688,
                "countyName": "榕城区",
                "CityID": 193,
                "DisSort": null
            }, {"Id": 1689, "countyName": "揭东县", "CityID": 193, "DisSort": null}, {
                "Id": 1690,
                "countyName": "揭西县",
                "CityID": 193,
                "DisSort": null
            }, {"Id": 1691, "countyName": "惠来县", "CityID": 193, "DisSort": null}, {
                "Id": 1692,
                "countyName": "普宁市",
                "CityID": 193,
                "DisSort": null
            }, {"Id": 1693, "countyName": "茂南区", "CityID": 194, "DisSort": null}, {
                "Id": 1694,
                "countyName": "茂港区",
                "CityID": 194,
                "DisSort": null
            }, {"Id": 1695, "countyName": "电白县", "CityID": 194, "DisSort": null}, {
                "Id": 1696,
                "countyName": "高州市",
                "CityID": 194,
                "DisSort": null
            }, {"Id": 1697, "countyName": "化州市", "CityID": 194, "DisSort": null}, {
                "Id": 1698,
                "countyName": "信宜市",
                "CityID": 194,
                "DisSort": null
            }, {"Id": 1699, "countyName": "惠城区", "CityID": 195, "DisSort": null}, {
                "Id": 1700,
                "countyName": "惠阳区",
                "CityID": 195,
                "DisSort": null
            }, {"Id": 1701, "countyName": "博罗县", "CityID": 195, "DisSort": null}, {
                "Id": 1702,
                "countyName": "惠东县",
                "CityID": 195,
                "DisSort": null
            }, {"Id": 1703, "countyName": "龙门县", "CityID": 195, "DisSort": null}, {
                "Id": 1704,
                "countyName": "蓬江区",
                "CityID": 196,
                "DisSort": null
            }, {"Id": 1705, "countyName": "江海区", "CityID": 196, "DisSort": null}, {
                "Id": 1706,
                "countyName": "新会区",
                "CityID": 196,
                "DisSort": null
            }, {"Id": 1707, "countyName": "台山市", "CityID": 196, "DisSort": null}, {
                "Id": 1708,
                "countyName": "开平市",
                "CityID": 196,
                "DisSort": null
            }, {"Id": 1709, "countyName": "鹤山市", "CityID": 196, "DisSort": null}, {
                "Id": 1710,
                "countyName": "恩平市",
                "CityID": 196,
                "DisSort": null
            }, {"Id": 1711, "countyName": "武江区", "CityID": 197, "DisSort": null}, {
                "Id": 1712,
                "countyName": "浈江区",
                "CityID": 197,
                "DisSort": null
            }, {"Id": 1713, "countyName": "曲江区", "CityID": 197, "DisSort": null}, {
                "Id": 1714,
                "countyName": "始兴县",
                "CityID": 197,
                "DisSort": null
            }, {"Id": 1715, "countyName": "仁化县", "CityID": 197, "DisSort": null}, {
                "Id": 1716,
                "countyName": "翁源县",
                "CityID": 197,
                "DisSort": null
            }, {"Id": 1717, "countyName": "乳源瑶族自治县", "CityID": 197, "DisSort": null}, {
                "Id": 1718,
                "countyName": "新丰县",
                "CityID": 197,
                "DisSort": null
            }, {"Id": 1719, "countyName": "乐昌市", "CityID": 197, "DisSort": null}, {
                "Id": 1720,
                "countyName": "南雄市",
                "CityID": 197,
                "DisSort": null
            }, {"Id": 1721, "countyName": "梅江区", "CityID": 198, "DisSort": null}, {
                "Id": 1722,
                "countyName": "梅县",
                "CityID": 198,
                "DisSort": null
            }, {"Id": 1723, "countyName": "大埔县", "CityID": 198, "DisSort": null}, {
                "Id": 1724,
                "countyName": "丰顺县",
                "CityID": 198,
                "DisSort": null
            }, {"Id": 1725, "countyName": "五华县", "CityID": 198, "DisSort": null}, {
                "Id": 1726,
                "countyName": "平远县",
                "CityID": 198,
                "DisSort": null
            }, {"Id": 1727, "countyName": "蕉岭县", "CityID": 198, "DisSort": null}, {
                "Id": 1728,
                "countyName": "兴宁市",
                "CityID": 198,
                "DisSort": null
            }, {"Id": 1729, "countyName": "龙湖区", "CityID": 199, "DisSort": null}, {
                "Id": 1730,
                "countyName": "金平区",
                "CityID": 199,
                "DisSort": null
            }, {"Id": 1731, "countyName": "濠江区", "CityID": 199, "DisSort": null}, {
                "Id": 1732,
                "countyName": "潮阳区",
                "CityID": 199,
                "DisSort": null
            }, {"Id": 1733, "countyName": "潮南区", "CityID": 199, "DisSort": null}, {
                "Id": 1734,
                "countyName": "澄海区",
                "CityID": 199,
                "DisSort": null
            }, {"Id": 1735, "countyName": "南澳县", "CityID": 199, "DisSort": null}, {
                "Id": 1736,
                "countyName": "罗湖区",
                "CityID": 200,
                "DisSort": null
            }, {"Id": 1737, "countyName": "福田区", "CityID": 200, "DisSort": null}, {
                "Id": 1738,
                "countyName": "南山区",
                "CityID": 200,
                "DisSort": null
            }, {"Id": 1739, "countyName": "宝安区", "CityID": 200, "DisSort": null}, {
                "Id": 1740,
                "countyName": "龙岗区",
                "CityID": 200,
                "DisSort": null
            }, {"Id": 1741, "countyName": "盐田区", "CityID": 200, "DisSort": null}, {
                "Id": 1742,
                "countyName": "香洲区",
                "CityID": 201,
                "DisSort": null
            }, {"Id": 1743, "countyName": "斗门区", "CityID": 201, "DisSort": null}, {
                "Id": 1744,
                "countyName": "金湾区",
                "CityID": 201,
                "DisSort": null
            }, {"Id": 1745, "countyName": "禅城区", "CityID": 202, "DisSort": null}, {
                "Id": 1746,
                "countyName": "南海区",
                "CityID": 202,
                "DisSort": null
            }, {"Id": 1747, "countyName": "顺德区", "CityID": 202, "DisSort": null}, {
                "Id": 1748,
                "countyName": "三水区",
                "CityID": 202,
                "DisSort": null
            }, {"Id": 1749, "countyName": "高明区", "CityID": 202, "DisSort": null}, {
                "Id": 1750,
                "countyName": "端州区",
                "CityID": 203,
                "DisSort": null
            }, {"Id": 1751, "countyName": "鼎湖区", "CityID": 203, "DisSort": null}, {
                "Id": 1752,
                "countyName": "广宁县",
                "CityID": 203,
                "DisSort": null
            }, {"Id": 1753, "countyName": "怀集县", "CityID": 203, "DisSort": null}, {
                "Id": 1754,
                "countyName": "封开县",
                "CityID": 203,
                "DisSort": null
            }, {"Id": 1755, "countyName": "德庆县", "CityID": 203, "DisSort": null}, {
                "Id": 1756,
                "countyName": "高要市",
                "CityID": 203,
                "DisSort": null
            }, {"Id": 1757, "countyName": "四会市", "CityID": 203, "DisSort": null}, {
                "Id": 1758,
                "countyName": "赤坎区",
                "CityID": 204,
                "DisSort": null
            }, {"Id": 1759, "countyName": "霞山区", "CityID": 204, "DisSort": null}, {
                "Id": 1760,
                "countyName": "坡头区",
                "CityID": 204,
                "DisSort": null
            }, {"Id": 1761, "countyName": "麻章区", "CityID": 204, "DisSort": null}, {
                "Id": 1762,
                "countyName": "遂溪县",
                "CityID": 204,
                "DisSort": null
            }, {"Id": 1763, "countyName": "徐闻县", "CityID": 204, "DisSort": null}, {
                "Id": 1764,
                "countyName": "廉江市",
                "CityID": 204,
                "DisSort": null
            }, {"Id": 1765, "countyName": "雷州市", "CityID": 204, "DisSort": null}, {
                "Id": 1766,
                "countyName": "吴川市",
                "CityID": 204,
                "DisSort": null
            }, {"Id": 1767, "countyName": "源城区", "CityID": 206, "DisSort": null}, {
                "Id": 1768,
                "countyName": "紫金县",
                "CityID": 206,
                "DisSort": null
            }, {"Id": 1769, "countyName": "龙川县", "CityID": 206, "DisSort": null}, {
                "Id": 1770,
                "countyName": "连平县",
                "CityID": 206,
                "DisSort": null
            }, {"Id": 1771, "countyName": "和平县", "CityID": 206, "DisSort": null}, {
                "Id": 1772,
                "countyName": "东源县",
                "CityID": 206,
                "DisSort": null
            }, {"Id": 1773, "countyName": "清城区", "CityID": 207, "DisSort": null}, {
                "Id": 1774,
                "countyName": "佛冈县",
                "CityID": 207,
                "DisSort": null
            }, {"Id": 1775, "countyName": "阳山县", "CityID": 207, "DisSort": null}, {
                "Id": 1776,
                "countyName": "连山壮族瑶族自治县",
                "CityID": 207,
                "DisSort": null
            }, {"Id": 1777, "countyName": "连南瑶族自治县", "CityID": 207, "DisSort": null}, {
                "Id": 1778,
                "countyName": "清新县",
                "CityID": 207,
                "DisSort": null
            }, {"Id": 1779, "countyName": "英德市", "CityID": 207, "DisSort": null}, {
                "Id": 1780,
                "countyName": "连州市",
                "CityID": 207,
                "DisSort": null
            }, {"Id": 1781, "countyName": "云城区", "CityID": 208, "DisSort": null}, {
                "Id": 1782,
                "countyName": "新兴县",
                "CityID": 208,
                "DisSort": null
            }, {"Id": 1783, "countyName": "郁南县", "CityID": 208, "DisSort": null}, {
                "Id": 1784,
                "countyName": "云安县",
                "CityID": 208,
                "DisSort": null
            }, {"Id": 1785, "countyName": "罗定市", "CityID": 208, "DisSort": null}, {
                "Id": 1786,
                "countyName": "湘桥区",
                "CityID": 209,
                "DisSort": null
            }, {"Id": 1787, "countyName": "潮安县", "CityID": 209, "DisSort": null}, {
                "Id": 1788,
                "countyName": "饶平县",
                "CityID": 209,
                "DisSort": null
            }, {"Id": 1789, "countyName": "城关区", "CityID": 211, "DisSort": null}, {
                "Id": 1790,
                "countyName": "七里河区",
                "CityID": 211,
                "DisSort": null
            }, {"Id": 1791, "countyName": "西固区", "CityID": 211, "DisSort": null}, {
                "Id": 1792,
                "countyName": "安宁区",
                "CityID": 211,
                "DisSort": null
            }, {"Id": 1793, "countyName": "红古区", "CityID": 211, "DisSort": null}, {
                "Id": 1794,
                "countyName": "永登县",
                "CityID": 211,
                "DisSort": null
            }, {"Id": 1795, "countyName": "皋兰县", "CityID": 211, "DisSort": null}, {
                "Id": 1796,
                "countyName": "榆中县",
                "CityID": 211,
                "DisSort": null
            }, {"Id": 1797, "countyName": "金川区", "CityID": 212, "DisSort": null}, {
                "Id": 1798,
                "countyName": "永昌县",
                "CityID": 212,
                "DisSort": null
            }, {"Id": 1799, "countyName": "白银区", "CityID": 213, "DisSort": null}, {
                "Id": 1800,
                "countyName": "平川区",
                "CityID": 213,
                "DisSort": null
            }, {"Id": 1801, "countyName": "靖远县", "CityID": 213, "DisSort": null}, {
                "Id": 1802,
                "countyName": "会宁县",
                "CityID": 213,
                "DisSort": null
            }, {"Id": 1803, "countyName": "景泰县", "CityID": 213, "DisSort": null}, {
                "Id": 1804,
                "countyName": "秦州区",
                "CityID": 214,
                "DisSort": null
            }, {"Id": 1805, "countyName": "麦积区", "CityID": 214, "DisSort": null}, {
                "Id": 1806,
                "countyName": "清水县",
                "CityID": 214,
                "DisSort": null
            }, {"Id": 1807, "countyName": "秦安县", "CityID": 214, "DisSort": null}, {
                "Id": 1808,
                "countyName": "甘谷县",
                "CityID": 214,
                "DisSort": null
            }, {"Id": 1809, "countyName": "武山县", "CityID": 214, "DisSort": null}, {
                "Id": 1810,
                "countyName": "张家川回族自治县",
                "CityID": 214,
                "DisSort": null
            }, {"Id": 1811, "countyName": "凉州区", "CityID": 216, "DisSort": null}, {
                "Id": 1812,
                "countyName": "民勤县",
                "CityID": 216,
                "DisSort": null
            }, {"Id": 1813, "countyName": "古浪县", "CityID": 216, "DisSort": null}, {
                "Id": 1814,
                "countyName": "天祝藏族自治县",
                "CityID": 216,
                "DisSort": null
            }, {"Id": 1815, "countyName": "甘州区", "CityID": 217, "DisSort": null}, {
                "Id": 1816,
                "countyName": "肃南裕固族自治县",
                "CityID": 217,
                "DisSort": null
            }, {"Id": 1817, "countyName": "民乐县", "CityID": 217, "DisSort": null}, {
                "Id": 1818,
                "countyName": "临泽县",
                "CityID": 217,
                "DisSort": null
            }, {"Id": 1819, "countyName": "高台县", "CityID": 217, "DisSort": null}, {
                "Id": 1820,
                "countyName": "山丹县",
                "CityID": 217,
                "DisSort": null
            }, {"Id": 1821, "countyName": "崆峒区", "CityID": 218, "DisSort": null}, {
                "Id": 1822,
                "countyName": "泾川县",
                "CityID": 218,
                "DisSort": null
            }, {"Id": 1823, "countyName": "灵台县", "CityID": 218, "DisSort": null}, {
                "Id": 1824,
                "countyName": "崇信县",
                "CityID": 218,
                "DisSort": null
            }, {"Id": 1825, "countyName": "华亭县", "CityID": 218, "DisSort": null}, {
                "Id": 1826,
                "countyName": "庄浪县",
                "CityID": 218,
                "DisSort": null
            }, {"Id": 1827, "countyName": "静宁县", "CityID": 218, "DisSort": null}, {
                "Id": 1828,
                "countyName": "肃州区",
                "CityID": 219,
                "DisSort": null
            }, {"Id": 1829, "countyName": "金塔县", "CityID": 219, "DisSort": null}, {
                "Id": 1830,
                "countyName": "瓜州县",
                "CityID": 219,
                "DisSort": null
            }, {"Id": 1831, "countyName": "肃北蒙古族自治县", "CityID": 219, "DisSort": null}, {
                "Id": 1832,
                "countyName": "阿克塞哈萨克族自治县",
                "CityID": 219,
                "DisSort": null
            }, {"Id": 1833, "countyName": "玉门市", "CityID": 219, "DisSort": null}, {
                "Id": 1834,
                "countyName": "敦煌市",
                "CityID": 219,
                "DisSort": null
            }, {"Id": 1835, "countyName": "西峰区", "CityID": 220, "DisSort": null}, {
                "Id": 1836,
                "countyName": "庆城县",
                "CityID": 220,
                "DisSort": null
            }, {"Id": 1837, "countyName": "环县", "CityID": 220, "DisSort": null}, {
                "Id": 1838,
                "countyName": "华池县",
                "CityID": 220,
                "DisSort": null
            }, {"Id": 1839, "countyName": "合水县", "CityID": 220, "DisSort": null}, {
                "Id": 1840,
                "countyName": "正宁县",
                "CityID": 220,
                "DisSort": null
            }, {"Id": 1841, "countyName": "宁县", "CityID": 220, "DisSort": null}, {
                "Id": 1842,
                "countyName": "镇原县",
                "CityID": 220,
                "DisSort": null
            }, {"Id": 1843, "countyName": "安定区", "CityID": 221, "DisSort": null}, {
                "Id": 1844,
                "countyName": "通渭县",
                "CityID": 221,
                "DisSort": null
            }, {"Id": 1845, "countyName": "陇西县", "CityID": 221, "DisSort": null}, {
                "Id": 1846,
                "countyName": "渭源县",
                "CityID": 221,
                "DisSort": null
            }, {"Id": 1847, "countyName": "临洮县", "CityID": 221, "DisSort": null}, {
                "Id": 1848,
                "countyName": "漳县",
                "CityID": 221,
                "DisSort": null
            }, {"Id": 1849, "countyName": "岷县", "CityID": 221, "DisSort": null}, {
                "Id": 1850,
                "countyName": "武都区",
                "CityID": 222,
                "DisSort": null
            }, {"Id": 1851, "countyName": "成县", "CityID": 222, "DisSort": null}, {
                "Id": 1852,
                "countyName": "文县",
                "CityID": 222,
                "DisSort": null
            }, {"Id": 1853, "countyName": "宕昌县", "CityID": 222, "DisSort": null}, {
                "Id": 1854,
                "countyName": "康县",
                "CityID": 222,
                "DisSort": null
            }, {"Id": 1855, "countyName": "西和县", "CityID": 222, "DisSort": null}, {
                "Id": 1856,
                "countyName": "礼县",
                "CityID": 222,
                "DisSort": null
            }, {"Id": 1857, "countyName": "徽县", "CityID": 222, "DisSort": null}, {
                "Id": 1858,
                "countyName": "两当县",
                "CityID": 222,
                "DisSort": null
            }, {"Id": 1859, "countyName": "临夏市", "CityID": 223, "DisSort": null}, {
                "Id": 1860,
                "countyName": "临夏县",
                "CityID": 223,
                "DisSort": null
            }, {"Id": 1861, "countyName": "康乐县", "CityID": 223, "DisSort": null}, {
                "Id": 1862,
                "countyName": "永靖县",
                "CityID": 223,
                "DisSort": null
            }, {"Id": 1863, "countyName": "广河县", "CityID": 223, "DisSort": null}, {
                "Id": 1864,
                "countyName": "和政县",
                "CityID": 223,
                "DisSort": null
            }, {"Id": 1865, "countyName": "东乡族自治县", "CityID": 223, "DisSort": null}, {
                "Id": 1866,
                "countyName": "积石山保安族东乡族撒拉族自治县",
                "CityID": 223,
                "DisSort": null
            }, {"Id": 1867, "countyName": "合作市", "CityID": 224, "DisSort": null}, {
                "Id": 1868,
                "countyName": "临潭县",
                "CityID": 224,
                "DisSort": null
            }, {"Id": 1869, "countyName": "卓尼县", "CityID": 224, "DisSort": null}, {
                "Id": 1870,
                "countyName": "舟曲县",
                "CityID": 224,
                "DisSort": null
            }, {"Id": 1871, "countyName": "迭部县", "CityID": 224, "DisSort": null}, {
                "Id": 1872,
                "countyName": "玛曲县",
                "CityID": 224,
                "DisSort": null
            }, {"Id": 1873, "countyName": "碌曲县", "CityID": 224, "DisSort": null}, {
                "Id": 1874,
                "countyName": "夏河县",
                "CityID": 224,
                "DisSort": null
            }, {"Id": 1875, "countyName": "锦江区", "CityID": 225, "DisSort": null}, {
                "Id": 1876,
                "countyName": "青羊区",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1877, "countyName": "金牛区", "CityID": 225, "DisSort": null}, {
                "Id": 1878,
                "countyName": "武侯区",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1879, "countyName": "成华区", "CityID": 225, "DisSort": null}, {
                "Id": 1880,
                "countyName": "龙泉驿区",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1881, "countyName": "青白江区", "CityID": 225, "DisSort": null}, {
                "Id": 1882,
                "countyName": "新都区",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1883, "countyName": "温江区", "CityID": 225, "DisSort": null}, {
                "Id": 1884,
                "countyName": "金堂县",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1885, "countyName": "双流县", "CityID": 225, "DisSort": null}, {
                "Id": 1886,
                "countyName": "郫县",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1887, "countyName": "大邑县", "CityID": 225, "DisSort": null}, {
                "Id": 1888,
                "countyName": "蒲江县",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1889, "countyName": "新津县", "CityID": 225, "DisSort": null}, {
                "Id": 1890,
                "countyName": "都江堰市",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1891, "countyName": "彭州市", "CityID": 225, "DisSort": null}, {
                "Id": 1892,
                "countyName": "邛崃市",
                "CityID": 225,
                "DisSort": null
            }, {"Id": 1893, "countyName": "崇州市", "CityID": 225, "DisSort": null}, {
                "Id": 1894,
                "countyName": "东区",
                "CityID": 226,
                "DisSort": null
            }, {"Id": 1895, "countyName": "西区", "CityID": 226, "DisSort": null}, {
                "Id": 1896,
                "countyName": "仁和区",
                "CityID": 226,
                "DisSort": null
            }, {"Id": 1897, "countyName": "米易县", "CityID": 226, "DisSort": null}, {
                "Id": 1898,
                "countyName": "盐边县",
                "CityID": 226,
                "DisSort": null
            }, {"Id": 1899, "countyName": "自流井区", "CityID": 227, "DisSort": null}, {
                "Id": 1900,
                "countyName": "贡井区",
                "CityID": 227,
                "DisSort": null
            }, {"Id": 1901, "countyName": "大安区", "CityID": 227, "DisSort": null}, {
                "Id": 1902,
                "countyName": "沿滩区",
                "CityID": 227,
                "DisSort": null
            }, {"Id": 1903, "countyName": "荣县", "CityID": 227, "DisSort": null}, {
                "Id": 1904,
                "countyName": "富顺县",
                "CityID": 227,
                "DisSort": null
            }, {"Id": 1905, "countyName": "涪城区", "CityID": 228, "DisSort": null}, {
                "Id": 1906,
                "countyName": "游仙区",
                "CityID": 228,
                "DisSort": null
            }, {"Id": 1907, "countyName": "三台县", "CityID": 228, "DisSort": null}, {
                "Id": 1908,
                "countyName": "盐亭县",
                "CityID": 228,
                "DisSort": null
            }, {"Id": 1909, "countyName": "安县", "CityID": 228, "DisSort": null}, {
                "Id": 1910,
                "countyName": "梓潼县",
                "CityID": 228,
                "DisSort": null
            }, {"Id": 1911, "countyName": "北川羌族自治县", "CityID": 228, "DisSort": null}, {
                "Id": 1912,
                "countyName": "平武县",
                "CityID": 228,
                "DisSort": null
            }, {"Id": 1913, "countyName": "江油市", "CityID": 228, "DisSort": null}, {
                "Id": 1914,
                "countyName": "顺庆区",
                "CityID": 229,
                "DisSort": null
            }, {"Id": 1915, "countyName": "高坪区", "CityID": 229, "DisSort": null}, {
                "Id": 1916,
                "countyName": "嘉陵区",
                "CityID": 229,
                "DisSort": null
            }, {"Id": 1917, "countyName": "南部县", "CityID": 229, "DisSort": null}, {
                "Id": 1918,
                "countyName": "营山县",
                "CityID": 229,
                "DisSort": null
            }, {"Id": 1919, "countyName": "蓬安县", "CityID": 229, "DisSort": null}, {
                "Id": 1920,
                "countyName": "仪陇县",
                "CityID": 229,
                "DisSort": null
            }, {"Id": 1921, "countyName": "西充县", "CityID": 229, "DisSort": null}, {
                "Id": 1922,
                "countyName": "阆中市",
                "CityID": 229,
                "DisSort": null
            }, {"Id": 1923, "countyName": "通川区", "CityID": 230, "DisSort": null}, {
                "Id": 1924,
                "countyName": "达县",
                "CityID": 230,
                "DisSort": null
            }, {"Id": 1925, "countyName": "宣汉县", "CityID": 230, "DisSort": null}, {
                "Id": 1926,
                "countyName": "开江县",
                "CityID": 230,
                "DisSort": null
            }, {"Id": 1927, "countyName": "大竹县", "CityID": 230, "DisSort": null}, {
                "Id": 1928,
                "countyName": "渠县",
                "CityID": 230,
                "DisSort": null
            }, {"Id": 1929, "countyName": "万源市", "CityID": 230, "DisSort": null}, {
                "Id": 1930,
                "countyName": "船山区",
                "CityID": 231,
                "DisSort": null
            }, {"Id": 1931, "countyName": "安居区", "CityID": 231, "DisSort": null}, {
                "Id": 1932,
                "countyName": "蓬溪县",
                "CityID": 231,
                "DisSort": null
            }, {"Id": 1933, "countyName": "射洪县", "CityID": 231, "DisSort": null}, {
                "Id": 1934,
                "countyName": "大英县",
                "CityID": 231,
                "DisSort": null
            }, {"Id": 1935, "countyName": "广安区", "CityID": 232, "DisSort": null}, {
                "Id": 1936,
                "countyName": "岳池县",
                "CityID": 232,
                "DisSort": null
            }, {"Id": 1937, "countyName": "武胜县", "CityID": 232, "DisSort": null}, {
                "Id": 1938,
                "countyName": "邻水县",
                "CityID": 232,
                "DisSort": null
            }, {"Id": 1939, "countyName": "华蓥市", "CityID": 232, "DisSort": null}, {
                "Id": 1940,
                "countyName": "巴州区",
                "CityID": 233,
                "DisSort": null
            }, {"Id": 1941, "countyName": "通江县", "CityID": 233, "DisSort": null}, {
                "Id": 1942,
                "countyName": "南江县",
                "CityID": 233,
                "DisSort": null
            }, {"Id": 1943, "countyName": "平昌县", "CityID": 233, "DisSort": null}, {
                "Id": 1944,
                "countyName": "江阳区",
                "CityID": 234,
                "DisSort": null
            }, {"Id": 1945, "countyName": "纳溪区", "CityID": 234, "DisSort": null}, {
                "Id": 1946,
                "countyName": "龙马潭区",
                "CityID": 234,
                "DisSort": null
            }, {"Id": 1947, "countyName": "泸县", "CityID": 234, "DisSort": null}, {
                "Id": 1948,
                "countyName": "合江县",
                "CityID": 234,
                "DisSort": null
            }, {"Id": 1949, "countyName": "叙永县", "CityID": 234, "DisSort": null}, {
                "Id": 1950,
                "countyName": "古蔺县",
                "CityID": 234,
                "DisSort": null
            }, {"Id": 1951, "countyName": "翠屏区", "CityID": 235, "DisSort": null}, {
                "Id": 1952,
                "countyName": "宜宾县",
                "CityID": 235,
                "DisSort": null
            }, {"Id": 1953, "countyName": "南溪县", "CityID": 235, "DisSort": null}, {
                "Id": 1954,
                "countyName": "江安县",
                "CityID": 235,
                "DisSort": null
            }, {"Id": 1955, "countyName": "长宁县", "CityID": 235, "DisSort": null}, {
                "Id": 1956,
                "countyName": "高县",
                "CityID": 235,
                "DisSort": null
            }, {"Id": 1957, "countyName": "珙县", "CityID": 235, "DisSort": null}, {
                "Id": 1958,
                "countyName": "筠连县",
                "CityID": 235,
                "DisSort": null
            }, {"Id": 1959, "countyName": "兴文县", "CityID": 235, "DisSort": null}, {
                "Id": 1960,
                "countyName": "屏山县",
                "CityID": 235,
                "DisSort": null
            }, {"Id": 1961, "countyName": "雁江区", "CityID": 236, "DisSort": null}, {
                "Id": 1962,
                "countyName": "安岳县",
                "CityID": 236,
                "DisSort": null
            }, {"Id": 1963, "countyName": "乐至县", "CityID": 236, "DisSort": null}, {
                "Id": 1964,
                "countyName": "简阳市",
                "CityID": 236,
                "DisSort": null
            }, {"Id": 1965, "countyName": "市中区", "CityID": 237, "DisSort": null}, {
                "Id": 1966,
                "countyName": "东兴区",
                "CityID": 237,
                "DisSort": null
            }, {"Id": 1967, "countyName": "威远县", "CityID": 237, "DisSort": null}, {
                "Id": 1968,
                "countyName": "资中县",
                "CityID": 237,
                "DisSort": null
            }, {"Id": 1969, "countyName": "隆昌县", "CityID": 237, "DisSort": null}, {
                "Id": 1970,
                "countyName": "市中区",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1971, "countyName": "沙湾区", "CityID": 238, "DisSort": null}, {
                "Id": 1972,
                "countyName": "五通桥区",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1973, "countyName": "金口河区", "CityID": 238, "DisSort": null}, {
                "Id": 1974,
                "countyName": "犍为县",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1975, "countyName": "井研县", "CityID": 238, "DisSort": null}, {
                "Id": 1976,
                "countyName": "夹江县",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1977, "countyName": "沐川县", "CityID": 238, "DisSort": null}, {
                "Id": 1978,
                "countyName": "峨边彝族自治县",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1979, "countyName": "马边彝族自治县", "CityID": 238, "DisSort": null}, {
                "Id": 1980,
                "countyName": "峨眉山市",
                "CityID": 238,
                "DisSort": null
            }, {"Id": 1981, "countyName": "东坡区", "CityID": 239, "DisSort": null}, {
                "Id": 1982,
                "countyName": "仁寿县",
                "CityID": 239,
                "DisSort": null
            }, {"Id": 1983, "countyName": "彭山县", "CityID": 239, "DisSort": null}, {
                "Id": 1984,
                "countyName": "洪雅县",
                "CityID": 239,
                "DisSort": null
            }, {"Id": 1985, "countyName": "丹棱县", "CityID": 239, "DisSort": null}, {
                "Id": 1986,
                "countyName": "青神县",
                "CityID": 239,
                "DisSort": null
            }, {"Id": 1987, "countyName": "西昌市", "CityID": 240, "DisSort": null}, {
                "Id": 1988,
                "countyName": "木里藏族自治县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1989, "countyName": "盐源县", "CityID": 240, "DisSort": null}, {
                "Id": 1990,
                "countyName": "德昌县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1991, "countyName": "会理县", "CityID": 240, "DisSort": null}, {
                "Id": 1992,
                "countyName": "会东县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1993, "countyName": "宁南县", "CityID": 240, "DisSort": null}, {
                "Id": 1994,
                "countyName": "普格县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1995, "countyName": "布拖县", "CityID": 240, "DisSort": null}, {
                "Id": 1996,
                "countyName": "金阳县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1997, "countyName": "昭觉县", "CityID": 240, "DisSort": null}, {
                "Id": 1998,
                "countyName": "喜德县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 1999, "countyName": "冕宁县", "CityID": 240, "DisSort": null}, {
                "Id": 2000,
                "countyName": "越西县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 2001, "countyName": "甘洛县", "CityID": 240, "DisSort": null}, {
                "Id": 2002,
                "countyName": "美姑县",
                "CityID": 240,
                "DisSort": null
            }, {"Id": 2003, "countyName": "雷波县", "CityID": 240, "DisSort": null}, {
                "Id": 2004,
                "countyName": "雨城区",
                "CityID": 241,
                "DisSort": null
            }, {"Id": 2005, "countyName": "名山县", "CityID": 241, "DisSort": null}, {
                "Id": 2006,
                "countyName": "荥经县",
                "CityID": 241,
                "DisSort": null
            }, {"Id": 2007, "countyName": "汉源县", "CityID": 241, "DisSort": null}, {
                "Id": 2008,
                "countyName": "石棉县",
                "CityID": 241,
                "DisSort": null
            }, {"Id": 2009, "countyName": "天全县", "CityID": 241, "DisSort": null}, {
                "Id": 2010,
                "countyName": "芦山县",
                "CityID": 241,
                "DisSort": null
            }, {"Id": 2011, "countyName": "宝兴县", "CityID": 241, "DisSort": null}, {
                "Id": 2012,
                "countyName": "康定县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2013, "countyName": "泸定县", "CityID": 242, "DisSort": null}, {
                "Id": 2014,
                "countyName": "丹巴县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2015, "countyName": "九龙县", "CityID": 242, "DisSort": null}, {
                "Id": 2016,
                "countyName": "雅江县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2017, "countyName": "道孚县", "CityID": 242, "DisSort": null}, {
                "Id": 2018,
                "countyName": "炉霍县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2019, "countyName": "甘孜县", "CityID": 242, "DisSort": null}, {
                "Id": 2020,
                "countyName": "新龙县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2021, "countyName": "德格县", "CityID": 242, "DisSort": null}, {
                "Id": 2022,
                "countyName": "白玉县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2023, "countyName": "石渠县", "CityID": 242, "DisSort": null}, {
                "Id": 2024,
                "countyName": "色达县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2025, "countyName": "理塘县", "CityID": 242, "DisSort": null}, {
                "Id": 2026,
                "countyName": "巴塘县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2027, "countyName": "乡城县", "CityID": 242, "DisSort": null}, {
                "Id": 2028,
                "countyName": "稻城县",
                "CityID": 242,
                "DisSort": null
            }, {"Id": 2029, "countyName": "得荣县", "CityID": 242, "DisSort": null}, {
                "Id": 2030,
                "countyName": "汶川县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2031, "countyName": "理县", "CityID": 243, "DisSort": null}, {
                "Id": 2032,
                "countyName": "茂县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2033, "countyName": "松潘县", "CityID": 243, "DisSort": null}, {
                "Id": 2034,
                "countyName": "九寨沟县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2035, "countyName": "金川县", "CityID": 243, "DisSort": null}, {
                "Id": 2036,
                "countyName": "小金县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2037, "countyName": "黑水县", "CityID": 243, "DisSort": null}, {
                "Id": 2038,
                "countyName": "马尔康县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2039, "countyName": "壤塘县", "CityID": 243, "DisSort": null}, {
                "Id": 2040,
                "countyName": "阿坝县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2041, "countyName": "若尔盖县", "CityID": 243, "DisSort": null}, {
                "Id": 2042,
                "countyName": "红原县",
                "CityID": 243,
                "DisSort": null
            }, {"Id": 2043, "countyName": "旌阳区", "CityID": 244, "DisSort": null}, {
                "Id": 2044,
                "countyName": "中江县",
                "CityID": 244,
                "DisSort": null
            }, {"Id": 2045, "countyName": "罗江县", "CityID": 244, "DisSort": null}, {
                "Id": 2046,
                "countyName": "广汉市",
                "CityID": 244,
                "DisSort": null
            }, {"Id": 2047, "countyName": "什邡市", "CityID": 244, "DisSort": null}, {
                "Id": 2048,
                "countyName": "绵竹市",
                "CityID": 244,
                "DisSort": null
            }, {"Id": 2049, "countyName": "市中区", "CityID": 245, "DisSort": null}, {
                "Id": 2050,
                "countyName": "元坝区",
                "CityID": 245,
                "DisSort": null
            }, {"Id": 2051, "countyName": "朝天区", "CityID": 245, "DisSort": null}, {
                "Id": 2052,
                "countyName": "旺苍县",
                "CityID": 245,
                "DisSort": null
            }, {"Id": 2053, "countyName": "青川县", "CityID": 245, "DisSort": null}, {
                "Id": 2054,
                "countyName": "剑阁县",
                "CityID": 245,
                "DisSort": null
            }, {"Id": 2055, "countyName": "苍溪县", "CityID": 245, "DisSort": null}, {
                "Id": 2056,
                "countyName": "南明区",
                "CityID": 246,
                "DisSort": null
            }, {"Id": 2057, "countyName": "云岩区", "CityID": 246, "DisSort": null}, {
                "Id": 2058,
                "countyName": "花溪区",
                "CityID": 246,
                "DisSort": null
            }, {"Id": 2059, "countyName": "乌当区", "CityID": 246, "DisSort": null}, {
                "Id": 2060,
                "countyName": "白云区",
                "CityID": 246,
                "DisSort": null
            }, {"Id": 2061, "countyName": "小河区", "CityID": 246, "DisSort": null}, {
                "Id": 2062,
                "countyName": "开阳县",
                "CityID": 246,
                "DisSort": null
            }, {"Id": 2063, "countyName": "息烽县", "CityID": 246, "DisSort": null}, {
                "Id": 2064,
                "countyName": "修文县",
                "CityID": 246,
                "DisSort": null
            }, {"Id": 2065, "countyName": "清镇市", "CityID": 246, "DisSort": null}, {
                "Id": 2066,
                "countyName": "红花岗区",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2067, "countyName": "汇川区", "CityID": 247, "DisSort": null}, {
                "Id": 2068,
                "countyName": "遵义县",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2069, "countyName": "桐梓县", "CityID": 247, "DisSort": null}, {
                "Id": 2070,
                "countyName": "绥阳县",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2071, "countyName": "正安县", "CityID": 247, "DisSort": null}, {
                "Id": 2072,
                "countyName": "道真仡佬族苗族自治县",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2073, "countyName": "务川仡佬族苗族自治县", "CityID": 247, "DisSort": null}, {
                "Id": 2074,
                "countyName": "凤冈县",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2075, "countyName": "湄潭县", "CityID": 247, "DisSort": null}, {
                "Id": 2076,
                "countyName": "余庆县",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2077, "countyName": "习水县", "CityID": 247, "DisSort": null}, {
                "Id": 2078,
                "countyName": "赤水市",
                "CityID": 247,
                "DisSort": null
            }, {"Id": 2079, "countyName": "仁怀市", "CityID": 247, "DisSort": null}, {
                "Id": 2080,
                "countyName": "西秀区",
                "CityID": 248,
                "DisSort": null
            }, {"Id": 2081, "countyName": "平坝县", "CityID": 248, "DisSort": null}, {
                "Id": 2082,
                "countyName": "普定县",
                "CityID": 248,
                "DisSort": null
            }, {"Id": 2083, "countyName": "镇宁布依族苗族自治县", "CityID": 248, "DisSort": null}, {
                "Id": 2084,
                "countyName": "关岭布依族苗族自治县",
                "CityID": 248,
                "DisSort": null
            }, {"Id": 2085, "countyName": "紫云苗族布依族自治县", "CityID": 248, "DisSort": null}, {
                "Id": 2086,
                "countyName": "都匀市",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2087, "countyName": "福泉市", "CityID": 249, "DisSort": null}, {
                "Id": 2088,
                "countyName": "荔波县",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2089, "countyName": "贵定县", "CityID": 249, "DisSort": null}, {
                "Id": 2090,
                "countyName": "瓮安县",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2091, "countyName": "独山县", "CityID": 249, "DisSort": null}, {
                "Id": 2092,
                "countyName": "平塘县",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2093, "countyName": "罗甸县", "CityID": 249, "DisSort": null}, {
                "Id": 2094,
                "countyName": "长顺县",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2095, "countyName": "龙里县", "CityID": 249, "DisSort": null}, {
                "Id": 2096,
                "countyName": "惠水县",
                "CityID": 249,
                "DisSort": null
            }, {"Id": 2097, "countyName": "三都水族自治县", "CityID": 249, "DisSort": null}, {
                "Id": 2098,
                "countyName": "凯里市",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2099, "countyName": "黄平县", "CityID": 250, "DisSort": null}, {
                "Id": 2100,
                "countyName": "施秉县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2101, "countyName": "三穗县", "CityID": 250, "DisSort": null}, {
                "Id": 2102,
                "countyName": "镇远县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2103, "countyName": "岑巩县", "CityID": 250, "DisSort": null}, {
                "Id": 2104,
                "countyName": "天柱县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2105, "countyName": "锦屏县", "CityID": 250, "DisSort": null}, {
                "Id": 2106,
                "countyName": "剑河县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2107, "countyName": "台江县", "CityID": 250, "DisSort": null}, {
                "Id": 2108,
                "countyName": "黎平县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2109, "countyName": "榕江县", "CityID": 250, "DisSort": null}, {
                "Id": 2110,
                "countyName": "从江县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2111, "countyName": "雷山县", "CityID": 250, "DisSort": null}, {
                "Id": 2112,
                "countyName": "麻江县",
                "CityID": 250,
                "DisSort": null
            }, {"Id": 2113, "countyName": "丹寨县", "CityID": 250, "DisSort": null}, {
                "Id": 2114,
                "countyName": "铜仁市",
                "CityID": 251,
                "DisSort": null
            }, {"Id": 2115, "countyName": "江口县", "CityID": 251, "DisSort": null}, {
                "Id": 2116,
                "countyName": "玉屏侗族自治县",
                "CityID": 251,
                "DisSort": null
            }, {"Id": 2117, "countyName": "石阡县", "CityID": 251, "DisSort": null}, {
                "Id": 2118,
                "countyName": "思南县",
                "CityID": 251,
                "DisSort": null
            }, {"Id": 2119, "countyName": "印江土家族苗族自治县", "CityID": 251, "DisSort": null}, {
                "Id": 2120,
                "countyName": "德江县",
                "CityID": 251,
                "DisSort": null
            }, {"Id": 2121, "countyName": "沿河土家族自治县", "CityID": 251, "DisSort": null}, {
                "Id": 2122,
                "countyName": "松桃苗族自治县",
                "CityID": 251,
                "DisSort": null
            }, {"Id": 2123, "countyName": "万山特区", "CityID": 251, "DisSort": null}, {
                "Id": 2124,
                "countyName": "毕节市",
                "CityID": 252,
                "DisSort": null
            }, {"Id": 2125, "countyName": "大方县", "CityID": 252, "DisSort": null}, {
                "Id": 2126,
                "countyName": "黔西县",
                "CityID": 252,
                "DisSort": null
            }, {"Id": 2127, "countyName": "金沙县", "CityID": 252, "DisSort": null}, {
                "Id": 2128,
                "countyName": "织金县",
                "CityID": 252,
                "DisSort": null
            }, {"Id": 2129, "countyName": "纳雍县", "CityID": 252, "DisSort": null}, {
                "Id": 2130,
                "countyName": "威宁彝族回族苗族自治县",
                "CityID": 252,
                "DisSort": null
            }, {"Id": 2131, "countyName": "赫章县", "CityID": 252, "DisSort": null}, {
                "Id": 2132,
                "countyName": "钟山区",
                "CityID": 253,
                "DisSort": null
            }, {"Id": 2133, "countyName": "六枝特区", "CityID": 253, "DisSort": null}, {
                "Id": 2134,
                "countyName": "水城县",
                "CityID": 253,
                "DisSort": null
            }, {"Id": 2135, "countyName": "盘县", "CityID": 253, "DisSort": null}, {
                "Id": 2136,
                "countyName": "兴义市",
                "CityID": 254,
                "DisSort": null
            }, {"Id": 2137, "countyName": "兴仁县", "CityID": 254, "DisSort": null}, {
                "Id": 2138,
                "countyName": "普安县",
                "CityID": 254,
                "DisSort": null
            }, {"Id": 2139, "countyName": "晴隆县", "CityID": 254, "DisSort": null}, {
                "Id": 2140,
                "countyName": "贞丰县",
                "CityID": 254,
                "DisSort": null
            }, {"Id": 2141, "countyName": "望谟县", "CityID": 254, "DisSort": null}, {
                "Id": 2142,
                "countyName": "册亨县",
                "CityID": 254,
                "DisSort": null
            }, {"Id": 2143, "countyName": "安龙县", "CityID": 254, "DisSort": null}, {
                "Id": 2144,
                "countyName": "秀英区",
                "CityID": 255,
                "DisSort": null
            }, {"Id": 2145, "countyName": "龙华区", "CityID": 255, "DisSort": null}, {
                "Id": 2146,
                "countyName": "琼山区",
                "CityID": 255,
                "DisSort": null
            }, {"Id": 2147, "countyName": "美兰区", "CityID": 255, "DisSort": null}, {
                "Id": 2148,
                "countyName": "景洪市",
                "CityID": 273,
                "DisSort": null
            }, {"Id": 2149, "countyName": "勐海县", "CityID": 273, "DisSort": null}, {
                "Id": 2150,
                "countyName": "勐腊县",
                "CityID": 273,
                "DisSort": null
            }, {"Id": 2151, "countyName": "瑞丽市", "CityID": 274, "DisSort": null}, {
                "Id": 2152,
                "countyName": "潞西市",
                "CityID": 274,
                "DisSort": null
            }, {"Id": 2153, "countyName": "梁河县", "CityID": 274, "DisSort": null}, {
                "Id": 2154,
                "countyName": "盈江县",
                "CityID": 274,
                "DisSort": null
            }, {"Id": 2155, "countyName": "陇川县", "CityID": 274, "DisSort": null}, {
                "Id": 2156,
                "countyName": "昭阳区",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2157, "countyName": "鲁甸县", "CityID": 275, "DisSort": null}, {
                "Id": 2158,
                "countyName": "巧家县",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2159, "countyName": "盐津县", "CityID": 275, "DisSort": null}, {
                "Id": 2160,
                "countyName": "大关县",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2161, "countyName": "永善县", "CityID": 275, "DisSort": null}, {
                "Id": 2162,
                "countyName": "绥江县",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2163, "countyName": "镇雄县", "CityID": 275, "DisSort": null}, {
                "Id": 2164,
                "countyName": "彝良县",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2165, "countyName": "威信县", "CityID": 275, "DisSort": null}, {
                "Id": 2166,
                "countyName": "水富县",
                "CityID": 275,
                "DisSort": null
            }, {"Id": 2167, "countyName": "五华区", "CityID": 276, "DisSort": null}, {
                "Id": 2168,
                "countyName": "盘龙区",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2169, "countyName": "官渡区", "CityID": 276, "DisSort": null}, {
                "Id": 2170,
                "countyName": "西山区",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2171, "countyName": "东川区", "CityID": 276, "DisSort": null}, {
                "Id": 2172,
                "countyName": "呈贡县",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2173, "countyName": "晋宁县", "CityID": 276, "DisSort": null}, {
                "Id": 2174,
                "countyName": "富民县",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2175, "countyName": "宜良县", "CityID": 276, "DisSort": null}, {
                "Id": 2176,
                "countyName": "石林彝族自治县",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2177, "countyName": "嵩明县", "CityID": 276, "DisSort": null}, {
                "Id": 2178,
                "countyName": "禄劝彝族苗族自治县",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2179, "countyName": "寻甸回族彝族自治县", "CityID": 276, "DisSort": null}, {
                "Id": 2180,
                "countyName": "安宁市",
                "CityID": 276,
                "DisSort": null
            }, {"Id": 2181, "countyName": "大理市", "CityID": 277, "DisSort": null}, {
                "Id": 2182,
                "countyName": "漾濞彝族自治县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2183, "countyName": "祥云县", "CityID": 277, "DisSort": null}, {
                "Id": 2184,
                "countyName": "宾川县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2185, "countyName": "弥渡县", "CityID": 277, "DisSort": null}, {
                "Id": 2186,
                "countyName": "南涧彝族自治县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2187, "countyName": "巍山彝族回族自治县", "CityID": 277, "DisSort": null}, {
                "Id": 2188,
                "countyName": "永平县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2189, "countyName": "云龙县", "CityID": 277, "DisSort": null}, {
                "Id": 2190,
                "countyName": "洱源县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2191, "countyName": "剑川县", "CityID": 277, "DisSort": null}, {
                "Id": 2192,
                "countyName": "鹤庆县",
                "CityID": 277,
                "DisSort": null
            }, {"Id": 2193, "countyName": "个旧市", "CityID": 278, "DisSort": null}, {
                "Id": 2194,
                "countyName": "开远市",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2195, "countyName": "蒙自县", "CityID": 278, "DisSort": null}, {
                "Id": 2196,
                "countyName": "屏边苗族自治县",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2197, "countyName": "建水县", "CityID": 278, "DisSort": null}, {
                "Id": 2198,
                "countyName": "石屏县",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2199, "countyName": "弥勒县", "CityID": 278, "DisSort": null}, {
                "Id": 2200,
                "countyName": "泸西县",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2201, "countyName": "元阳县", "CityID": 278, "DisSort": null}, {
                "Id": 2202,
                "countyName": "红河县",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2203, "countyName": "金平苗族瑶族傣族自治县", "CityID": 278, "DisSort": null}, {
                "Id": 2204,
                "countyName": "绿春县",
                "CityID": 278,
                "DisSort": null
            }, {"Id": 2205, "countyName": "河口瑶族自治县", "CityID": 278, "DisSort": null}, {
                "Id": 2206,
                "countyName": "麒麟区",
                "CityID": 279,
                "DisSort": null
            }, {"Id": 2207, "countyName": "马龙县", "CityID": 279, "DisSort": null}, {
                "Id": 2208,
                "countyName": "陆良县",
                "CityID": 279,
                "DisSort": null
            }, {"Id": 2209, "countyName": "师宗县", "CityID": 279, "DisSort": null}, {
                "Id": 2210,
                "countyName": "罗平县",
                "CityID": 279,
                "DisSort": null
            }, {"Id": 2211, "countyName": "富源县", "CityID": 279, "DisSort": null}, {
                "Id": 2212,
                "countyName": "会泽县",
                "CityID": 279,
                "DisSort": null
            }, {"Id": 2213, "countyName": "沾益县", "CityID": 279, "DisSort": null}, {
                "Id": 2214,
                "countyName": "宣威市",
                "CityID": 279,
                "DisSort": null
            }, {"Id": 2215, "countyName": "隆阳区", "CityID": 280, "DisSort": null}, {
                "Id": 2216,
                "countyName": "施甸县",
                "CityID": 280,
                "DisSort": null
            }, {"Id": 2217, "countyName": "腾冲县", "CityID": 280, "DisSort": null}, {
                "Id": 2218,
                "countyName": "龙陵县",
                "CityID": 280,
                "DisSort": null
            }, {"Id": 2219, "countyName": "昌宁县", "CityID": 280, "DisSort": null}, {
                "Id": 2220,
                "countyName": "文山县",
                "CityID": 281,
                "DisSort": null
            }, {"Id": 2221, "countyName": "砚山县", "CityID": 281, "DisSort": null}, {
                "Id": 2222,
                "countyName": "西畴县",
                "CityID": 281,
                "DisSort": null
            }, {"Id": 2223, "countyName": "麻栗坡县", "CityID": 281, "DisSort": null}, {
                "Id": 2224,
                "countyName": "马关县",
                "CityID": 281,
                "DisSort": null
            }, {"Id": 2225, "countyName": "丘北县", "CityID": 281, "DisSort": null}, {
                "Id": 2226,
                "countyName": "广南县",
                "CityID": 281,
                "DisSort": null
            }, {"Id": 2227, "countyName": "富宁县", "CityID": 281, "DisSort": null}, {
                "Id": 2228,
                "countyName": "红塔区",
                "CityID": 282,
                "DisSort": null
            }, {"Id": 2229, "countyName": "江川县", "CityID": 282, "DisSort": null}, {
                "Id": 2230,
                "countyName": "澄江县",
                "CityID": 282,
                "DisSort": null
            }, {"Id": 2231, "countyName": "通海县", "CityID": 282, "DisSort": null}, {
                "Id": 2232,
                "countyName": "华宁县",
                "CityID": 282,
                "DisSort": null
            }, {"Id": 2233, "countyName": "易门县", "CityID": 282, "DisSort": null}, {
                "Id": 2234,
                "countyName": "峨山彝族自治县",
                "CityID": 282,
                "DisSort": null
            }, {"Id": 2235, "countyName": "新平彝族傣族自治县", "CityID": 282, "DisSort": null}, {
                "Id": 2236,
                "countyName": "元江哈尼族彝族傣族自治县",
                "CityID": 282,
                "DisSort": null
            }, {"Id": 2237, "countyName": "楚雄市", "CityID": 283, "DisSort": null}, {
                "Id": 2238,
                "countyName": "双柏县",
                "CityID": 283,
                "DisSort": null
            }, {"Id": 2239, "countyName": "牟定县", "CityID": 283, "DisSort": null}, {
                "Id": 2240,
                "countyName": "南华县",
                "CityID": 283,
                "DisSort": null
            }, {"Id": 2241, "countyName": "姚安县", "CityID": 283, "DisSort": null}, {
                "Id": 2242,
                "countyName": "大姚县",
                "CityID": 283,
                "DisSort": null
            }, {"Id": 2243, "countyName": "永仁县", "CityID": 283, "DisSort": null}, {
                "Id": 2244,
                "countyName": "元谋县",
                "CityID": 283,
                "DisSort": null
            }, {"Id": 2245, "countyName": "武定县", "CityID": 283, "DisSort": null}, {
                "Id": 2246,
                "countyName": "禄丰县",
                "CityID": 283,
                "DisSort": null
            }, {"Id": 2247, "countyName": "思茅区", "CityID": 284, "DisSort": null}, {
                "Id": 2248,
                "countyName": "宁洱哈尼族彝族自治县",
                "CityID": 284,
                "DisSort": null
            }, {"Id": 2249, "countyName": "墨江哈尼族自治县", "CityID": 284, "DisSort": null}, {
                "Id": 2250,
                "countyName": "景东彝族自治县",
                "CityID": 284,
                "DisSort": null
            }, {"Id": 2251, "countyName": "景谷傣族彝族自治县", "CityID": 284, "DisSort": null}, {
                "Id": 2252,
                "countyName": "镇沅彝族哈尼族拉祜族自治县",
                "CityID": 284,
                "DisSort": null
            }, {"Id": 2253, "countyName": "江城哈尼族彝族自治县", "CityID": 284, "DisSort": null}, {
                "Id": 2254,
                "countyName": "孟连傣族拉祜族佤族自治县",
                "CityID": 284,
                "DisSort": null
            }, {"Id": 2255, "countyName": "澜沧拉祜族自治县", "CityID": 284, "DisSort": null}, {
                "Id": 2256,
                "countyName": "西盟佤族自治县",
                "CityID": 284,
                "DisSort": null
            }, {"Id": 2257, "countyName": "临翔区", "CityID": 285, "DisSort": null}, {
                "Id": 2258,
                "countyName": "凤庆县",
                "CityID": 285,
                "DisSort": null
            }, {"Id": 2259, "countyName": "云县", "CityID": 285, "DisSort": null}, {
                "Id": 2260,
                "countyName": "永德县",
                "CityID": 285,
                "DisSort": null
            }, {"Id": 2261, "countyName": "镇康县", "CityID": 285, "DisSort": null}, {
                "Id": 2262,
                "countyName": "双江拉祜族佤族布朗族傣族自治县",
                "CityID": 285,
                "DisSort": null
            }, {"Id": 2263, "countyName": "耿马傣族佤族自治县", "CityID": 285, "DisSort": null}, {
                "Id": 2264,
                "countyName": "沧源佤族自治县",
                "CityID": 285,
                "DisSort": null
            }, {"Id": 2265, "countyName": "泸水县", "CityID": 286, "DisSort": null}, {
                "Id": 2266,
                "countyName": "福贡县",
                "CityID": 286,
                "DisSort": null
            }, {"Id": 2267, "countyName": "贡山独龙族怒族自治县", "CityID": 286, "DisSort": null}, {
                "Id": 2268,
                "countyName": "兰坪白族普米族自治县",
                "CityID": 286,
                "DisSort": null
            }, {"Id": 2269, "countyName": "香格里拉县", "CityID": 287, "DisSort": null}, {
                "Id": 2270,
                "countyName": "德钦县",
                "CityID": 287,
                "DisSort": null
            }, {"Id": 2271, "countyName": "维西傈僳族自治县", "CityID": 287, "DisSort": null}, {
                "Id": 2272,
                "countyName": "古城区",
                "CityID": 288,
                "DisSort": null
            }, {"Id": 2273, "countyName": "玉龙纳西族自治县", "CityID": 288, "DisSort": null}, {
                "Id": 2274,
                "countyName": "永胜县",
                "CityID": 288,
                "DisSort": null
            }, {"Id": 2275, "countyName": "华坪县", "CityID": 288, "DisSort": null}, {
                "Id": 2276,
                "countyName": "宁蒗彝族自治县",
                "CityID": 288,
                "DisSort": null
            }, {"Id": 2277, "countyName": "门源回族自治县", "CityID": 289, "DisSort": null}, {
                "Id": 2278,
                "countyName": "祁连县",
                "CityID": 289,
                "DisSort": null
            }, {"Id": 2279, "countyName": "海晏县", "CityID": 289, "DisSort": null}, {
                "Id": 2280,
                "countyName": "刚察县",
                "CityID": 289,
                "DisSort": null
            }, {"Id": 2281, "countyName": "城东区", "CityID": 290, "DisSort": null}, {
                "Id": 2282,
                "countyName": "城中区",
                "CityID": 290,
                "DisSort": null
            }, {"Id": 2283, "countyName": "城西区", "CityID": 290, "DisSort": null}, {
                "Id": 2284,
                "countyName": "城北区",
                "CityID": 290,
                "DisSort": null
            }, {"Id": 2285, "countyName": "大通回族土族自治县", "CityID": 290, "DisSort": null}, {
                "Id": 2286,
                "countyName": "湟中县",
                "CityID": 290,
                "DisSort": null
            }, {"Id": 2287, "countyName": "湟源县", "CityID": 290, "DisSort": null}, {
                "Id": 2288,
                "countyName": "平安县",
                "CityID": 291,
                "DisSort": null
            }, {"Id": 2289, "countyName": "民和回族土族自治县", "CityID": 291, "DisSort": null}, {
                "Id": 2290,
                "countyName": "乐都县",
                "CityID": 291,
                "DisSort": null
            }, {"Id": 2291, "countyName": "互助土族自治县", "CityID": 291, "DisSort": null}, {
                "Id": 2292,
                "countyName": "化隆回族自治县",
                "CityID": 291,
                "DisSort": null
            }, {"Id": 2293, "countyName": "循化撒拉族自治县", "CityID": 291, "DisSort": null}, {
                "Id": 2294,
                "countyName": "同仁县",
                "CityID": 292,
                "DisSort": null
            }, {"Id": 2295, "countyName": "尖扎县", "CityID": 292, "DisSort": null}, {
                "Id": 2296,
                "countyName": "泽库县",
                "CityID": 292,
                "DisSort": null
            }, {"Id": 2297, "countyName": "河南蒙古族自治县", "CityID": 292, "DisSort": null}, {
                "Id": 2298,
                "countyName": "共和县",
                "CityID": 293,
                "DisSort": null
            }, {"Id": 2299, "countyName": "同德县", "CityID": 293, "DisSort": null}, {
                "Id": 2300,
                "countyName": "贵德县",
                "CityID": 293,
                "DisSort": null
            }, {"Id": 2301, "countyName": "兴海县", "CityID": 293, "DisSort": null}, {
                "Id": 2302,
                "countyName": "贵南县",
                "CityID": 293,
                "DisSort": null
            }, {"Id": 2303, "countyName": "玛沁县", "CityID": 294, "DisSort": null}, {
                "Id": 2304,
                "countyName": "班玛县",
                "CityID": 294,
                "DisSort": null
            }, {"Id": 2305, "countyName": "甘德县", "CityID": 294, "DisSort": null}, {
                "Id": 2306,
                "countyName": "达日县",
                "CityID": 294,
                "DisSort": null
            }, {"Id": 2307, "countyName": "久治县", "CityID": 294, "DisSort": null}, {
                "Id": 2308,
                "countyName": "玛多县",
                "CityID": 294,
                "DisSort": null
            }, {"Id": 2309, "countyName": "玉树县", "CityID": 295, "DisSort": null}, {
                "Id": 2310,
                "countyName": "杂多县",
                "CityID": 295,
                "DisSort": null
            }, {"Id": 2311, "countyName": "称多县", "CityID": 295, "DisSort": null}, {
                "Id": 2312,
                "countyName": "治多县",
                "CityID": 295,
                "DisSort": null
            }, {"Id": 2313, "countyName": "囊谦县", "CityID": 295, "DisSort": null}, {
                "Id": 2314,
                "countyName": "曲麻莱县",
                "CityID": 295,
                "DisSort": null
            }, {"Id": 2315, "countyName": "格尔木市", "CityID": 296, "DisSort": null}, {
                "Id": 2316,
                "countyName": "德令哈市",
                "CityID": 296,
                "DisSort": null
            }, {"Id": 2317, "countyName": "乌兰县", "CityID": 296, "DisSort": null}, {
                "Id": 2318,
                "countyName": "都兰县",
                "CityID": 296,
                "DisSort": null
            }, {"Id": 2319, "countyName": "天峻县", "CityID": 296, "DisSort": null}, {
                "Id": 2320,
                "countyName": "新城区",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2321, "countyName": "碑林区", "CityID": 297, "DisSort": null}, {
                "Id": 2322,
                "countyName": "莲湖区",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2323, "countyName": "灞桥区", "CityID": 297, "DisSort": null}, {
                "Id": 2324,
                "countyName": "未央区",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2325, "countyName": "雁塔区", "CityID": 297, "DisSort": null}, {
                "Id": 2326,
                "countyName": "阎良区",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2327, "countyName": "临潼区", "CityID": 297, "DisSort": null}, {
                "Id": 2328,
                "countyName": "长安区",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2329, "countyName": "蓝田县", "CityID": 297, "DisSort": null}, {
                "Id": 2330,
                "countyName": "周至县",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2331, "countyName": "户县", "CityID": 297, "DisSort": null}, {
                "Id": 2332,
                "countyName": "高陵县",
                "CityID": 297,
                "DisSort": null
            }, {"Id": 2333, "countyName": "秦都区", "CityID": 298, "DisSort": null}, {
                "Id": 2334,
                "countyName": "杨陵区",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2335, "countyName": "渭城区", "CityID": 298, "DisSort": null}, {
                "Id": 2336,
                "countyName": "三原县",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2337, "countyName": "泾阳县", "CityID": 298, "DisSort": null}, {
                "Id": 2338,
                "countyName": "乾县",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2339, "countyName": "礼泉县", "CityID": 298, "DisSort": null}, {
                "Id": 2340,
                "countyName": "永寿县",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2341, "countyName": "彬县", "CityID": 298, "DisSort": null}, {
                "Id": 2342,
                "countyName": "长武县",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2343, "countyName": "旬邑县", "CityID": 298, "DisSort": null}, {
                "Id": 2344,
                "countyName": "淳化县",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2345, "countyName": "武功县", "CityID": 298, "DisSort": null}, {
                "Id": 2346,
                "countyName": "兴平市",
                "CityID": 298,
                "DisSort": null
            }, {"Id": 2347, "countyName": "宝塔区", "CityID": 299, "DisSort": null}, {
                "Id": 2348,
                "countyName": "延长县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2349, "countyName": "延川县", "CityID": 299, "DisSort": null}, {
                "Id": 2350,
                "countyName": "子长县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2351, "countyName": "安塞县", "CityID": 299, "DisSort": null}, {
                "Id": 2352,
                "countyName": "志丹县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2353, "countyName": "吴起县", "CityID": 299, "DisSort": null}, {
                "Id": 2354,
                "countyName": "甘泉县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2355, "countyName": "富县", "CityID": 299, "DisSort": null}, {
                "Id": 2356,
                "countyName": "洛川县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2357, "countyName": "宜川县", "CityID": 299, "DisSort": null}, {
                "Id": 2358,
                "countyName": "黄龙县",
                "CityID": 299,
                "DisSort": null
            }, {"Id": 2359, "countyName": "黄陵县", "CityID": 299, "DisSort": null}, {
                "Id": 2360,
                "countyName": "榆阳区",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2361, "countyName": "神木县", "CityID": 300, "DisSort": null}, {
                "Id": 2362,
                "countyName": "府谷县",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2363, "countyName": "横山县", "CityID": 300, "DisSort": null}, {
                "Id": 2364,
                "countyName": "靖边县",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2365, "countyName": "定边县", "CityID": 300, "DisSort": null}, {
                "Id": 2366,
                "countyName": "绥德县",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2367, "countyName": "米脂县", "CityID": 300, "DisSort": null}, {
                "Id": 2368,
                "countyName": "佳县",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2369, "countyName": "吴堡县", "CityID": 300, "DisSort": null}, {
                "Id": 2370,
                "countyName": "清涧县",
                "CityID": 300,
                "DisSort": null
            }, {"Id": 2371, "countyName": "子洲县", "CityID": 300, "DisSort": null}, {
                "Id": 2372,
                "countyName": "临渭区",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2373, "countyName": "华县", "CityID": 301, "DisSort": null}, {
                "Id": 2374,
                "countyName": "潼关县",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2375, "countyName": "大荔县", "CityID": 301, "DisSort": null}, {
                "Id": 2376,
                "countyName": "合阳县",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2377, "countyName": "澄城县", "CityID": 301, "DisSort": null}, {
                "Id": 2378,
                "countyName": "蒲城县",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2379, "countyName": "白水县", "CityID": 301, "DisSort": null}, {
                "Id": 2380,
                "countyName": "富平县",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2381, "countyName": "韩城市", "CityID": 301, "DisSort": null}, {
                "Id": 2382,
                "countyName": "华阴市",
                "CityID": 301,
                "DisSort": null
            }, {"Id": 2383, "countyName": "商州区", "CityID": 302, "DisSort": null}, {
                "Id": 2384,
                "countyName": "洛南县",
                "CityID": 302,
                "DisSort": null
            }, {"Id": 2385, "countyName": "丹凤县", "CityID": 302, "DisSort": null}, {
                "Id": 2386,
                "countyName": "商南县",
                "CityID": 302,
                "DisSort": null
            }, {"Id": 2387, "countyName": "山阳县", "CityID": 302, "DisSort": null}, {
                "Id": 2388,
                "countyName": "镇安县",
                "CityID": 302,
                "DisSort": null
            }, {"Id": 2389, "countyName": "柞水县", "CityID": 302, "DisSort": null}, {
                "Id": 2390,
                "countyName": "汉滨区",
                "CityID": 303,
                "DisSort": null
            }, {"Id": 2391, "countyName": "汉阴县", "CityID": 303, "DisSort": null}, {
                "Id": 2392,
                "countyName": "石泉县",
                "CityID": 303,
                "DisSort": null
            }, {"Id": 2393, "countyName": "宁陕县", "CityID": 303, "DisSort": null}, {
                "Id": 2394,
                "countyName": "紫阳县",
                "CityID": 303,
                "DisSort": null
            }, {"Id": 2395, "countyName": "岚皋县", "CityID": 303, "DisSort": null}, {
                "Id": 2396,
                "countyName": "平利县",
                "CityID": 303,
                "DisSort": null
            }, {"Id": 2397, "countyName": "镇坪县", "CityID": 303, "DisSort": null}, {
                "Id": 2398,
                "countyName": "旬阳县",
                "CityID": 303,
                "DisSort": null
            }, {"Id": 2399, "countyName": "白河县", "CityID": 303, "DisSort": null}, {
                "Id": 2400,
                "countyName": "汉台区",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2401, "countyName": "南郑县", "CityID": 304, "DisSort": null}, {
                "Id": 2402,
                "countyName": "城固县",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2403, "countyName": "洋县", "CityID": 304, "DisSort": null}, {
                "Id": 2404,
                "countyName": "西乡县",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2405, "countyName": "勉县", "CityID": 304, "DisSort": null}, {
                "Id": 2406,
                "countyName": "宁强县",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2407, "countyName": "略阳县", "CityID": 304, "DisSort": null}, {
                "Id": 2408,
                "countyName": "镇巴县",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2409, "countyName": "留坝县", "CityID": 304, "DisSort": null}, {
                "Id": 2410,
                "countyName": "佛坪县",
                "CityID": 304,
                "DisSort": null
            }, {"Id": 2411, "countyName": "渭滨区", "CityID": 305, "DisSort": null}, {
                "Id": 2412,
                "countyName": "金台区",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2413, "countyName": "陈仓区", "CityID": 305, "DisSort": null}, {
                "Id": 2414,
                "countyName": "凤翔县",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2415, "countyName": "岐山县", "CityID": 305, "DisSort": null}, {
                "Id": 2416,
                "countyName": "扶风县",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2417, "countyName": "眉县", "CityID": 305, "DisSort": null}, {
                "Id": 2418,
                "countyName": "陇县",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2419, "countyName": "千阳县", "CityID": 305, "DisSort": null}, {
                "Id": 2420,
                "countyName": "麟游县",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2421, "countyName": "凤县", "CityID": 305, "DisSort": null}, {
                "Id": 2422,
                "countyName": "太白县",
                "CityID": 305,
                "DisSort": null
            }, {"Id": 2423, "countyName": "王益区", "CityID": 306, "DisSort": null}, {
                "Id": 2424,
                "countyName": "印台区",
                "CityID": 306,
                "DisSort": null
            }, {"Id": 2425, "countyName": "耀州区", "CityID": 306, "DisSort": null}, {
                "Id": 2426,
                "countyName": "宜君县",
                "CityID": 306,
                "DisSort": null
            }, {"Id": 2427, "countyName": "港口区", "CityID": 307, "DisSort": null}, {
                "Id": 2428,
                "countyName": "防城区",
                "CityID": 307,
                "DisSort": null
            }, {"Id": 2429, "countyName": "上思县", "CityID": 307, "DisSort": null}, {
                "Id": 2430,
                "countyName": "东兴市",
                "CityID": 307,
                "DisSort": null
            }, {"Id": 2431, "countyName": "兴宁区", "CityID": 308, "DisSort": null}, {
                "Id": 2432,
                "countyName": "青秀区",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2433, "countyName": "江南区", "CityID": 308, "DisSort": null}, {
                "Id": 2434,
                "countyName": "西乡塘区",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2435, "countyName": "良庆区", "CityID": 308, "DisSort": null}, {
                "Id": 2436,
                "countyName": "邕宁区",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2437, "countyName": "武鸣县", "CityID": 308, "DisSort": null}, {
                "Id": 2438,
                "countyName": "隆安县",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2439, "countyName": "马山县", "CityID": 308, "DisSort": null}, {
                "Id": 2440,
                "countyName": "上林县",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2441, "countyName": "宾阳县", "CityID": 308, "DisSort": null}, {
                "Id": 2442,
                "countyName": "横县",
                "CityID": 308,
                "DisSort": null
            }, {"Id": 2443, "countyName": "江洲区", "CityID": 309, "DisSort": null}, {
                "Id": 2444,
                "countyName": "扶绥县",
                "CityID": 309,
                "DisSort": null
            }, {"Id": 2445, "countyName": "宁明县", "CityID": 309, "DisSort": null}, {
                "Id": 2446,
                "countyName": "龙州县",
                "CityID": 309,
                "DisSort": null
            }, {"Id": 2447, "countyName": "大新县", "CityID": 309, "DisSort": null}, {
                "Id": 2448,
                "countyName": "天等县",
                "CityID": 309,
                "DisSort": null
            }, {"Id": 2449, "countyName": "凭祥市", "CityID": 309, "DisSort": null}, {
                "Id": 2450,
                "countyName": "兴宾区",
                "CityID": 310,
                "DisSort": null
            }, {"Id": 2451, "countyName": "忻城县", "CityID": 310, "DisSort": null}, {
                "Id": 2452,
                "countyName": "象州县",
                "CityID": 310,
                "DisSort": null
            }, {"Id": 2453, "countyName": "武宣县", "CityID": 310, "DisSort": null}, {
                "Id": 2454,
                "countyName": "金秀瑶族自治县",
                "CityID": 310,
                "DisSort": null
            }, {"Id": 2455, "countyName": "合山市", "CityID": 310, "DisSort": null}, {
                "Id": 2456,
                "countyName": "城中区",
                "CityID": 311,
                "DisSort": null
            }, {"Id": 2457, "countyName": "鱼峰区", "CityID": 311, "DisSort": null}, {
                "Id": 2458,
                "countyName": "柳南区",
                "CityID": 311,
                "DisSort": null
            }, {"Id": 2459, "countyName": "柳北区", "CityID": 311, "DisSort": null}, {
                "Id": 2460,
                "countyName": "柳江县",
                "CityID": 311,
                "DisSort": null
            }, {"Id": 2461, "countyName": "柳城县", "CityID": 311, "DisSort": null}, {
                "Id": 2462,
                "countyName": "鹿寨县",
                "CityID": 311,
                "DisSort": null
            }, {"Id": 2463, "countyName": "融安县", "CityID": 311, "DisSort": null}, {
                "Id": 2464,
                "countyName": "融水苗族自治县",
                "CityID": 311,
                "DisSort": null
            }, {"Id": 2465, "countyName": "三江侗族自治县", "CityID": 311, "DisSort": null}, {
                "Id": 2466,
                "countyName": "秀峰区",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2467, "countyName": "叠彩区", "CityID": 312, "DisSort": null}, {
                "Id": 2468,
                "countyName": "象山区",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2469, "countyName": "七星区", "CityID": 312, "DisSort": null}, {
                "Id": 2470,
                "countyName": "雁山区",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2471, "countyName": "阳朔县", "CityID": 312, "DisSort": null}, {
                "Id": 2472,
                "countyName": "临桂县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2473, "countyName": "灵川县", "CityID": 312, "DisSort": null}, {
                "Id": 2474,
                "countyName": "全州县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2475, "countyName": "兴安县", "CityID": 312, "DisSort": null}, {
                "Id": 2476,
                "countyName": "永福县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2477, "countyName": "灌阳县", "CityID": 312, "DisSort": null}, {
                "Id": 2478,
                "countyName": "龙胜各族自治县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2479, "countyName": "资源县", "CityID": 312, "DisSort": null}, {
                "Id": 2480,
                "countyName": "平乐县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2481, "countyName": "荔浦县", "CityID": 312, "DisSort": null}, {
                "Id": 2482,
                "countyName": "恭城瑶族自治县",
                "CityID": 312,
                "DisSort": null
            }, {"Id": 2483, "countyName": "万秀区", "CityID": 313, "DisSort": null}, {
                "Id": 2484,
                "countyName": "碟山区",
                "CityID": 313,
                "DisSort": null
            }, {"Id": 2485, "countyName": "长洲区", "CityID": 313, "DisSort": null}, {
                "Id": 2486,
                "countyName": "苍梧县",
                "CityID": 313,
                "DisSort": null
            }, {"Id": 2487, "countyName": "藤县", "CityID": 313, "DisSort": null}, {
                "Id": 2488,
                "countyName": "蒙山县",
                "CityID": 313,
                "DisSort": null
            }, {"Id": 2489, "countyName": "岑溪市", "CityID": 313, "DisSort": null}, {
                "Id": 2490,
                "countyName": "八步区",
                "CityID": 314,
                "DisSort": null
            }, {"Id": 2491, "countyName": "昭平县", "CityID": 314, "DisSort": null}, {
                "Id": 2492,
                "countyName": "钟山县",
                "CityID": 314,
                "DisSort": null
            }, {"Id": 2493, "countyName": "富川瑶族自治县", "CityID": 314, "DisSort": null}, {
                "Id": 2494,
                "countyName": "港北区",
                "CityID": 315,
                "DisSort": null
            }, {"Id": 2495, "countyName": "港南区", "CityID": 315, "DisSort": null}, {
                "Id": 2496,
                "countyName": "覃塘区",
                "CityID": 315,
                "DisSort": null
            }, {"Id": 2497, "countyName": "平南县", "CityID": 315, "DisSort": null}, {
                "Id": 2498,
                "countyName": "桂平市",
                "CityID": 315,
                "DisSort": null
            }, {"Id": 2499, "countyName": "玉州区", "CityID": 316, "DisSort": null}, {
                "Id": 2500,
                "countyName": "容县",
                "CityID": 316,
                "DisSort": null
            }, {"Id": 2501, "countyName": "陆川县", "CityID": 316, "DisSort": null}, {
                "Id": 2502,
                "countyName": "博白县",
                "CityID": 316,
                "DisSort": null
            }, {"Id": 2503, "countyName": "兴业县", "CityID": 316, "DisSort": null}, {
                "Id": 2504,
                "countyName": "北流市",
                "CityID": 316,
                "DisSort": null
            }, {"Id": 2505, "countyName": "右江区", "CityID": 317, "DisSort": null}, {
                "Id": 2506,
                "countyName": "田阳县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2507, "countyName": "田东县", "CityID": 317, "DisSort": null}, {
                "Id": 2508,
                "countyName": "平果县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2509, "countyName": "德保县", "CityID": 317, "DisSort": null}, {
                "Id": 2510,
                "countyName": "靖西县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2511, "countyName": "那坡县", "CityID": 317, "DisSort": null}, {
                "Id": 2512,
                "countyName": "凌云县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2513, "countyName": "乐业县", "CityID": 317, "DisSort": null}, {
                "Id": 2514,
                "countyName": "田林县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2515, "countyName": "西林县", "CityID": 317, "DisSort": null}, {
                "Id": 2516,
                "countyName": "隆林各族自治县",
                "CityID": 317,
                "DisSort": null
            }, {"Id": 2517, "countyName": "钦南区", "CityID": 318, "DisSort": null}, {
                "Id": 2518,
                "countyName": "钦北区",
                "CityID": 318,
                "DisSort": null
            }, {"Id": 2519, "countyName": "灵山县", "CityID": 318, "DisSort": null}, {
                "Id": 2520,
                "countyName": "浦北县",
                "CityID": 318,
                "DisSort": null
            }, {"Id": 2521, "countyName": "金城江区", "CityID": 319, "DisSort": null}, {
                "Id": 2522,
                "countyName": "南丹县",
                "CityID": 319,
                "DisSort": null
            }, {"Id": 2523, "countyName": "天峨县", "CityID": 319, "DisSort": null}, {
                "Id": 2524,
                "countyName": "凤山县",
                "CityID": 319,
                "DisSort": null
            }, {"Id": 2525, "countyName": "东兰县", "CityID": 319, "DisSort": null}, {
                "Id": 2526,
                "countyName": "罗城仫佬族自治县",
                "CityID": 319,
                "DisSort": null
            }, {"Id": 2527, "countyName": "环江毛南族自治县", "CityID": 319, "DisSort": null}, {
                "Id": 2528,
                "countyName": "巴马瑶族自治县",
                "CityID": 319,
                "DisSort": null
            }, {"Id": 2529, "countyName": "都安瑶族自治县", "CityID": 319, "DisSort": null}, {
                "Id": 2530,
                "countyName": "大化瑶族自治县",
                "CityID": 319,
                "DisSort": null
            }, {"Id": 2531, "countyName": "宜州市", "CityID": 319, "DisSort": null}, {
                "Id": 2532,
                "countyName": "海城区",
                "CityID": 320,
                "DisSort": null
            }, {"Id": 2533, "countyName": "银海区", "CityID": 320, "DisSort": null}, {
                "Id": 2534,
                "countyName": "铁山港区",
                "CityID": 320,
                "DisSort": null
            }, {"Id": 2535, "countyName": "合浦县", "CityID": 320, "DisSort": null}, {
                "Id": 2536,
                "countyName": "城关区",
                "CityID": 321,
                "DisSort": null
            }, {"Id": 2537, "countyName": "林周县", "CityID": 321, "DisSort": null}, {
                "Id": 2538,
                "countyName": "当雄县",
                "CityID": 321,
                "DisSort": null
            }, {"Id": 2539, "countyName": "尼木县", "CityID": 321, "DisSort": null}, {
                "Id": 2540,
                "countyName": "曲水县",
                "CityID": 321,
                "DisSort": null
            }, {"Id": 2541, "countyName": "堆龙德庆县", "CityID": 321, "DisSort": null}, {
                "Id": 2542,
                "countyName": "达孜县",
                "CityID": 321,
                "DisSort": null
            }, {"Id": 2543, "countyName": "墨竹工卡县", "CityID": 321, "DisSort": null}, {
                "Id": 2544,
                "countyName": "日喀则市",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2545, "countyName": "南木林县", "CityID": 322, "DisSort": null}, {
                "Id": 2546,
                "countyName": "江孜县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2547, "countyName": "定日县", "CityID": 322, "DisSort": null}, {
                "Id": 2548,
                "countyName": "萨迦县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2549, "countyName": "拉孜县", "CityID": 322, "DisSort": null}, {
                "Id": 2550,
                "countyName": "昂仁县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2551, "countyName": "谢通门县", "CityID": 322, "DisSort": null}, {
                "Id": 2552,
                "countyName": "白朗县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2553, "countyName": "仁布县", "CityID": 322, "DisSort": null}, {
                "Id": 2554,
                "countyName": "康马县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2555, "countyName": "定结县", "CityID": 322, "DisSort": null}, {
                "Id": 2556,
                "countyName": "仲巴县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2557, "countyName": "亚东县", "CityID": 322, "DisSort": null}, {
                "Id": 2558,
                "countyName": "吉隆县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2559, "countyName": "聂拉木县", "CityID": 322, "DisSort": null}, {
                "Id": 2560,
                "countyName": "萨嘎县",
                "CityID": 322,
                "DisSort": null
            }, {"Id": 2561, "countyName": "岗巴县", "CityID": 322, "DisSort": null}, {
                "Id": 2562,
                "countyName": "乃东县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2563, "countyName": "扎囊县", "CityID": 323, "DisSort": null}, {
                "Id": 2564,
                "countyName": "贡嘎县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2565, "countyName": "桑日县", "CityID": 323, "DisSort": null}, {
                "Id": 2566,
                "countyName": "琼结县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2567, "countyName": "曲松县", "CityID": 323, "DisSort": null}, {
                "Id": 2568,
                "countyName": "措美县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2569, "countyName": "洛扎县", "CityID": 323, "DisSort": null}, {
                "Id": 2570,
                "countyName": "加查县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2571, "countyName": "隆子县", "CityID": 323, "DisSort": null}, {
                "Id": 2572,
                "countyName": "错那县",
                "CityID": 323,
                "DisSort": null
            }, {"Id": 2573, "countyName": "浪卡子县", "CityID": 323, "DisSort": null}, {
                "Id": 2574,
                "countyName": "林芝县",
                "CityID": 324,
                "DisSort": null
            }, {"Id": 2575, "countyName": "工布江达县", "CityID": 324, "DisSort": null}, {
                "Id": 2576,
                "countyName": "米林县",
                "CityID": 324,
                "DisSort": null
            }, {"Id": 2577, "countyName": "墨脱县", "CityID": 324, "DisSort": null}, {
                "Id": 2578,
                "countyName": "波密县",
                "CityID": 324,
                "DisSort": null
            }, {"Id": 2579, "countyName": "察隅县", "CityID": 324, "DisSort": null}, {
                "Id": 2580,
                "countyName": "朗县",
                "CityID": 324,
                "DisSort": null
            }, {"Id": 2581, "countyName": "昌都县", "CityID": 325, "DisSort": null}, {
                "Id": 2582,
                "countyName": "江达县",
                "CityID": 325,
                "DisSort": null
            }, {"Id": 2583, "countyName": "贡觉县", "CityID": 325, "DisSort": null}, {
                "Id": 2584,
                "countyName": "类乌齐县",
                "CityID": 325,
                "DisSort": null
            }, {"Id": 2585, "countyName": "丁青县", "CityID": 325, "DisSort": null}, {
                "Id": 2586,
                "countyName": "察雅县",
                "CityID": 325,
                "DisSort": null
            }, {"Id": 2587, "countyName": "八宿县", "CityID": 325, "DisSort": null}, {
                "Id": 2588,
                "countyName": "左贡县",
                "CityID": 325,
                "DisSort": null
            }, {"Id": 2589, "countyName": "芒康县", "CityID": 325, "DisSort": null}, {
                "Id": 2590,
                "countyName": "洛隆县",
                "CityID": 325,
                "DisSort": null
            }, {"Id": 2591, "countyName": "边坝县", "CityID": 325, "DisSort": null}, {
                "Id": 2592,
                "countyName": "那曲县",
                "CityID": 326,
                "DisSort": null
            }, {"Id": 2593, "countyName": "嘉黎县", "CityID": 326, "DisSort": null}, {
                "Id": 2594,
                "countyName": "比如县",
                "CityID": 326,
                "DisSort": null
            }, {"Id": 2595, "countyName": "聂荣县", "CityID": 326, "DisSort": null}, {
                "Id": 2596,
                "countyName": "安多县",
                "CityID": 326,
                "DisSort": null
            }, {"Id": 2597, "countyName": "申扎县", "CityID": 326, "DisSort": null}, {
                "Id": 2598,
                "countyName": "索县",
                "CityID": 326,
                "DisSort": null
            }, {"Id": 2599, "countyName": "班戈县", "CityID": 326, "DisSort": null}, {
                "Id": 2600,
                "countyName": "巴青县",
                "CityID": 326,
                "DisSort": null
            }, {"Id": 2601, "countyName": "尼玛县", "CityID": 326, "DisSort": null}, {
                "Id": 2602,
                "countyName": "普兰县",
                "CityID": 327,
                "DisSort": null
            }, {"Id": 2603, "countyName": "札达县", "CityID": 327, "DisSort": null}, {
                "Id": 2604,
                "countyName": "噶尔县",
                "CityID": 327,
                "DisSort": null
            }, {"Id": 2605, "countyName": "日土县", "CityID": 327, "DisSort": null}, {
                "Id": 2606,
                "countyName": "革吉县",
                "CityID": 327,
                "DisSort": null
            }, {"Id": 2607, "countyName": "改则县", "CityID": 327, "DisSort": null}, {
                "Id": 2608,
                "countyName": "措勤县",
                "CityID": 327,
                "DisSort": null
            }, {"Id": 2609, "countyName": "兴庆区", "CityID": 328, "DisSort": null}, {
                "Id": 2610,
                "countyName": "西夏区",
                "CityID": 328,
                "DisSort": null
            }, {"Id": 2611, "countyName": "金凤区", "CityID": 328, "DisSort": null}, {
                "Id": 2612,
                "countyName": "永宁县",
                "CityID": 328,
                "DisSort": null
            }, {"Id": 2613, "countyName": "贺兰县", "CityID": 328, "DisSort": null}, {
                "Id": 2614,
                "countyName": "灵武市",
                "CityID": 328,
                "DisSort": null
            }, {"Id": 2615, "countyName": "大武口区", "CityID": 329, "DisSort": null}, {
                "Id": 2616,
                "countyName": "惠农区",
                "CityID": 329,
                "DisSort": null
            }, {"Id": 2617, "countyName": "平罗县", "CityID": 329, "DisSort": null}, {
                "Id": 2618,
                "countyName": "利通区",
                "CityID": 330,
                "DisSort": null
            }, {"Id": 2619, "countyName": "盐池县", "CityID": 330, "DisSort": null}, {
                "Id": 2620,
                "countyName": "同心县",
                "CityID": 330,
                "DisSort": null
            }, {"Id": 2621, "countyName": "青铜峡市", "CityID": 330, "DisSort": null}, {
                "Id": 2622,
                "countyName": "原州区",
                "CityID": 331,
                "DisSort": null
            }, {"Id": 2623, "countyName": "西吉县", "CityID": 331, "DisSort": null}, {
                "Id": 2624,
                "countyName": "隆德县",
                "CityID": 331,
                "DisSort": null
            }, {"Id": 2625, "countyName": "泾源县", "CityID": 331, "DisSort": null}, {
                "Id": 2626,
                "countyName": "彭阳县",
                "CityID": 331,
                "DisSort": null
            }, {"Id": 2627, "countyName": "沙坡头区", "CityID": 332, "DisSort": null}, {
                "Id": 2628,
                "countyName": "中宁县",
                "CityID": 332,
                "DisSort": null
            }, {"Id": 2629, "countyName": "海原县", "CityID": 332, "DisSort": null}, {
                "Id": 2630,
                "countyName": "塔城市",
                "CityID": 333,
                "DisSort": null
            }, {"Id": 2631, "countyName": "乌苏市", "CityID": 333, "DisSort": null}, {
                "Id": 2632,
                "countyName": "额敏县",
                "CityID": 333,
                "DisSort": null
            }, {"Id": 2633, "countyName": "沙湾县", "CityID": 333, "DisSort": null}, {
                "Id": 2634,
                "countyName": "托里县",
                "CityID": 333,
                "DisSort": null
            }, {"Id": 2635, "countyName": "裕民县", "CityID": 333, "DisSort": null}, {
                "Id": 2636,
                "countyName": "和布克赛尔蒙古自治县",
                "CityID": 333,
                "DisSort": null
            }, {"Id": 2637, "countyName": "哈密市", "CityID": 334, "DisSort": null}, {
                "Id": 2638,
                "countyName": "巴里坤哈萨克自治县",
                "CityID": 334,
                "DisSort": null
            }, {"Id": 2639, "countyName": "伊吾县", "CityID": 334, "DisSort": null}, {
                "Id": 2640,
                "countyName": "和田市",
                "CityID": 335,
                "DisSort": null
            }, {"Id": 2641, "countyName": "和田县", "CityID": 335, "DisSort": null}, {
                "Id": 2642,
                "countyName": "墨玉县",
                "CityID": 335,
                "DisSort": null
            }, {"Id": 2643, "countyName": "皮山县", "CityID": 335, "DisSort": null}, {
                "Id": 2644,
                "countyName": "洛浦县",
                "CityID": 335,
                "DisSort": null
            }, {"Id": 2645, "countyName": "策勒县", "CityID": 335, "DisSort": null}, {
                "Id": 2646,
                "countyName": "于田县",
                "CityID": 335,
                "DisSort": null
            }, {"Id": 2647, "countyName": "民丰县", "CityID": 335, "DisSort": null}, {
                "Id": 2648,
                "countyName": "阿勒泰市",
                "CityID": 336,
                "DisSort": null
            }, {"Id": 2649, "countyName": "布尔津县", "CityID": 336, "DisSort": null}, {
                "Id": 2650,
                "countyName": "富蕴县",
                "CityID": 336,
                "DisSort": null
            }, {"Id": 2651, "countyName": "福海县", "CityID": 336, "DisSort": null}, {
                "Id": 2652,
                "countyName": "哈巴河县",
                "CityID": 336,
                "DisSort": null
            }, {"Id": 2653, "countyName": "青河县", "CityID": 336, "DisSort": null}, {
                "Id": 2654,
                "countyName": "吉木乃县",
                "CityID": 336,
                "DisSort": null
            }, {"Id": 2655, "countyName": "阿图什市", "CityID": 337, "DisSort": null}, {
                "Id": 2656,
                "countyName": "阿克陶县",
                "CityID": 337,
                "DisSort": null
            }, {"Id": 2657, "countyName": "阿合奇县", "CityID": 337, "DisSort": null}, {
                "Id": 2658,
                "countyName": "乌恰县",
                "CityID": 337,
                "DisSort": null
            }, {"Id": 2659, "countyName": "博乐市", "CityID": 338, "DisSort": null}, {
                "Id": 2660,
                "countyName": "精河县",
                "CityID": 338,
                "DisSort": null
            }, {"Id": 2661, "countyName": "温泉县", "CityID": 338, "DisSort": null}, {
                "Id": 2662,
                "countyName": "独山子区",
                "CityID": 339,
                "DisSort": null
            }, {"Id": 2663, "countyName": "克拉玛依区", "CityID": 339, "DisSort": null}, {
                "Id": 2664,
                "countyName": "白碱滩区",
                "CityID": 339,
                "DisSort": null
            }, {"Id": 2665, "countyName": "乌尔禾区", "CityID": 339, "DisSort": null}, {
                "Id": 2666,
                "countyName": "天山区",
                "CityID": 340,
                "DisSort": null
            }, {"Id": 2667, "countyName": "沙依巴克区", "CityID": 340, "DisSort": null}, {
                "Id": 2668,
                "countyName": "新市区",
                "CityID": 340,
                "DisSort": null
            }, {"Id": 2669, "countyName": "水磨沟区", "CityID": 340, "DisSort": null}, {
                "Id": 2670,
                "countyName": "头屯河区",
                "CityID": 340,
                "DisSort": null
            }, {"Id": 2671, "countyName": "达坂城区", "CityID": 340, "DisSort": null}, {
                "Id": 2672,
                "countyName": "米东区",
                "CityID": 340,
                "DisSort": null
            }, {"Id": 2673, "countyName": "乌鲁木齐县", "CityID": 340, "DisSort": null}, {
                "Id": 2674,
                "countyName": "昌吉市",
                "CityID": 342,
                "DisSort": null
            }, {"Id": 2675, "countyName": "阜康市", "CityID": 342, "DisSort": null}, {
                "Id": 2676,
                "countyName": "呼图壁县",
                "CityID": 342,
                "DisSort": null
            }, {"Id": 2677, "countyName": "玛纳斯县", "CityID": 342, "DisSort": null}, {
                "Id": 2678,
                "countyName": "奇台县",
                "CityID": 342,
                "DisSort": null
            }, {"Id": 2679, "countyName": "吉木萨尔县", "CityID": 342, "DisSort": null}, {
                "Id": 2680,
                "countyName": "木垒哈萨克自治县",
                "CityID": 342,
                "DisSort": null
            }, {"Id": 2681, "countyName": "吐鲁番市", "CityID": 344, "DisSort": null}, {
                "Id": 2682,
                "countyName": "鄯善县",
                "CityID": 344,
                "DisSort": null
            }, {"Id": 2683, "countyName": "托克逊县", "CityID": 344, "DisSort": null}, {
                "Id": 2684,
                "countyName": "库尔勒市",
                "CityID": 345,
                "DisSort": null
            }, {"Id": 2685, "countyName": "轮台县", "CityID": 345, "DisSort": null}, {
                "Id": 2686,
                "countyName": "尉犁县",
                "CityID": 345,
                "DisSort": null
            }, {"Id": 2687, "countyName": "若羌县", "CityID": 345, "DisSort": null}, {
                "Id": 2688,
                "countyName": "且末县",
                "CityID": 345,
                "DisSort": null
            }, {"Id": 2689, "countyName": "焉耆回族自治县", "CityID": 345, "DisSort": null}, {
                "Id": 2690,
                "countyName": "和静县",
                "CityID": 345,
                "DisSort": null
            }, {"Id": 2691, "countyName": "和硕县", "CityID": 345, "DisSort": null}, {
                "Id": 2692,
                "countyName": "博湖县",
                "CityID": 345,
                "DisSort": null
            }, {"Id": 2693, "countyName": "阿克苏市", "CityID": 346, "DisSort": null}, {
                "Id": 2694,
                "countyName": "温宿县",
                "CityID": 346,
                "DisSort": null
            }, {"Id": 2695, "countyName": "库车县", "CityID": 346, "DisSort": null}, {
                "Id": 2696,
                "countyName": "沙雅县",
                "CityID": 346,
                "DisSort": null
            }, {"Id": 2697, "countyName": "新和县", "CityID": 346, "DisSort": null}, {
                "Id": 2698,
                "countyName": "拜城县",
                "CityID": 346,
                "DisSort": null
            }, {"Id": 2699, "countyName": "乌什县", "CityID": 346, "DisSort": null}, {
                "Id": 2700,
                "countyName": "阿瓦提县",
                "CityID": 346,
                "DisSort": null
            }, {"Id": 2701, "countyName": "柯坪县", "CityID": 346, "DisSort": null}, {
                "Id": 2702,
                "countyName": "喀什市",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2703, "countyName": "疏附县", "CityID": 348, "DisSort": null}, {
                "Id": 2704,
                "countyName": "疏勒县",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2705, "countyName": "英吉沙县", "CityID": 348, "DisSort": null}, {
                "Id": 2706,
                "countyName": "泽普县",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2707, "countyName": "莎车县", "CityID": 348, "DisSort": null}, {
                "Id": 2708,
                "countyName": "叶城县",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2709, "countyName": "麦盖提县", "CityID": 348, "DisSort": null}, {
                "Id": 2710,
                "countyName": "岳普湖县",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2711, "countyName": "伽师县", "CityID": 348, "DisSort": null}, {
                "Id": 2712,
                "countyName": "巴楚县",
                "CityID": 348,
                "DisSort": null
            }, {"Id": 2713, "countyName": "塔什库尔干塔吉克自治县", "CityID": 348, "DisSort": null}, {
                "Id": 2714,
                "countyName": "伊宁市",
                "CityID": 350,
                "DisSort": null
            }, {"Id": 2715, "countyName": "奎屯市", "CityID": 350, "DisSort": null}, {
                "Id": 2716,
                "countyName": "伊宁县",
                "CityID": 350,
                "DisSort": null
            }, {"Id": 2717, "countyName": "察布查尔锡伯自治县", "CityID": 350, "DisSort": null}, {
                "Id": 2718,
                "countyName": "霍城县",
                "CityID": 350,
                "DisSort": null
            }, {"Id": 2719, "countyName": "巩留县", "CityID": 350, "DisSort": null}, {
                "Id": 2720,
                "countyName": "新源县",
                "CityID": 350,
                "DisSort": null
            }, {"Id": 2721, "countyName": "昭苏县", "CityID": 350, "DisSort": null}, {
                "Id": 2722,
                "countyName": "特克斯县",
                "CityID": 350,
                "DisSort": null
            }, {"Id": 2723, "countyName": "尼勒克县", "CityID": 350, "DisSort": null}, {
                "Id": 2724,
                "countyName": "海拉尔区",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2725, "countyName": "阿荣旗", "CityID": 351, "DisSort": null}, {
                "Id": 2726,
                "countyName": "莫力达瓦达斡尔族自治旗",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2727, "countyName": "鄂伦春自治旗", "CityID": 351, "DisSort": null}, {
                "Id": 2728,
                "countyName": "鄂温克族自治旗",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2729, "countyName": "陈巴尔虎旗", "CityID": 351, "DisSort": null}, {
                "Id": 2730,
                "countyName": "新巴尔虎左旗",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2731, "countyName": "新巴尔虎右旗", "CityID": 351, "DisSort": null}, {
                "Id": 2732,
                "countyName": "满洲里市",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2733, "countyName": "牙克石市", "CityID": 351, "DisSort": null}, {
                "Id": 2734,
                "countyName": "扎兰屯市",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2735, "countyName": "额尔古纳市", "CityID": 351, "DisSort": null}, {
                "Id": 2736,
                "countyName": "根河市",
                "CityID": 351,
                "DisSort": null
            }, {"Id": 2737, "countyName": "新城区", "CityID": 352, "DisSort": null}, {
                "Id": 2738,
                "countyName": "回民区",
                "CityID": 352,
                "DisSort": null
            }, {"Id": 2739, "countyName": "玉泉区", "CityID": 352, "DisSort": null}, {
                "Id": 2740,
                "countyName": "赛罕区",
                "CityID": 352,
                "DisSort": null
            }, {"Id": 2741, "countyName": "土默特左旗", "CityID": 352, "DisSort": null}, {
                "Id": 2742,
                "countyName": "托克托县",
                "CityID": 352,
                "DisSort": null
            }, {"Id": 2743, "countyName": "和林格尔县", "CityID": 352, "DisSort": null}, {
                "Id": 2744,
                "countyName": "清水河县",
                "CityID": 352,
                "DisSort": null
            }, {"Id": 2745, "countyName": "武川县", "CityID": 352, "DisSort": null}, {
                "Id": 2746,
                "countyName": "东河区",
                "CityID": 353,
                "DisSort": null
            }, {"Id": 2747, "countyName": "昆都仑区", "CityID": 353, "DisSort": null}, {
                "Id": 2748,
                "countyName": "青山区",
                "CityID": 353,
                "DisSort": null
            }, {"Id": 2749, "countyName": "石拐区", "CityID": 353, "DisSort": null}, {
                "Id": 2750,
                "countyName": "白云鄂博矿区",
                "CityID": 353,
                "DisSort": null
            }, {"Id": 2751, "countyName": "九原区", "CityID": 353, "DisSort": null}, {
                "Id": 2752,
                "countyName": "土默特右旗",
                "CityID": 353,
                "DisSort": null
            }, {"Id": 2753, "countyName": "固阳县", "CityID": 353, "DisSort": null}, {
                "Id": 2754,
                "countyName": "达尔罕茂明安联合旗",
                "CityID": 353,
                "DisSort": null
            }, {"Id": 2755, "countyName": "海勃湾区", "CityID": 354, "DisSort": null}, {
                "Id": 2756,
                "countyName": "海南区",
                "CityID": 354,
                "DisSort": null
            }, {"Id": 2757, "countyName": "乌达区", "CityID": 354, "DisSort": null}, {
                "Id": 2758,
                "countyName": "集宁区",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2759, "countyName": "卓资县", "CityID": 355, "DisSort": null}, {
                "Id": 2760,
                "countyName": "化德县",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2761, "countyName": "商都县", "CityID": 355, "DisSort": null}, {
                "Id": 2762,
                "countyName": "兴和县",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2763, "countyName": "凉城县", "CityID": 355, "DisSort": null}, {
                "Id": 2764,
                "countyName": "察哈尔右翼前旗",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2765, "countyName": "察哈尔右翼中旗", "CityID": 355, "DisSort": null}, {
                "Id": 2766,
                "countyName": "察哈尔右翼后旗",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2767, "countyName": "四子王旗", "CityID": 355, "DisSort": null}, {
                "Id": 2768,
                "countyName": "丰镇市",
                "CityID": 355,
                "DisSort": null
            }, {"Id": 2769, "countyName": "科尔沁区", "CityID": 356, "DisSort": null}, {
                "Id": 2770,
                "countyName": "科尔沁左翼中旗",
                "CityID": 356,
                "DisSort": null
            }, {"Id": 2771, "countyName": "科尔沁左翼后旗", "CityID": 356, "DisSort": null}, {
                "Id": 2772,
                "countyName": "开鲁县",
                "CityID": 356,
                "DisSort": null
            }, {"Id": 2773, "countyName": "库伦旗", "CityID": 356, "DisSort": null}, {
                "Id": 2774,
                "countyName": "奈曼旗",
                "CityID": 356,
                "DisSort": null
            }, {"Id": 2775, "countyName": "扎鲁特旗", "CityID": 356, "DisSort": null}, {
                "Id": 2776,
                "countyName": "霍林郭勒市",
                "CityID": 356,
                "DisSort": null
            }, {"Id": 2777, "countyName": "红山区", "CityID": 357, "DisSort": null}, {
                "Id": 2778,
                "countyName": "元宝山区",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2779, "countyName": "松山区", "CityID": 357, "DisSort": null}, {
                "Id": 2780,
                "countyName": "阿鲁科尔沁旗",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2781, "countyName": "巴林左旗", "CityID": 357, "DisSort": null}, {
                "Id": 2782,
                "countyName": "巴林右旗",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2783, "countyName": "林西县", "CityID": 357, "DisSort": null}, {
                "Id": 2784,
                "countyName": "克什克腾旗",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2785, "countyName": "翁牛特旗", "CityID": 357, "DisSort": null}, {
                "Id": 2786,
                "countyName": "喀喇沁旗",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2787, "countyName": "宁城县", "CityID": 357, "DisSort": null}, {
                "Id": 2788,
                "countyName": "敖汉旗",
                "CityID": 357,
                "DisSort": null
            }, {"Id": 2789, "countyName": "东胜区", "CityID": 358, "DisSort": null}, {
                "Id": 2790,
                "countyName": "达拉特旗",
                "CityID": 358,
                "DisSort": null
            }, {"Id": 2791, "countyName": "准格尔旗", "CityID": 358, "DisSort": null}, {
                "Id": 2792,
                "countyName": "鄂托克前旗",
                "CityID": 358,
                "DisSort": null
            }, {"Id": 2793, "countyName": "鄂托克旗", "CityID": 358, "DisSort": null}, {
                "Id": 2794,
                "countyName": "杭锦旗",
                "CityID": 358,
                "DisSort": null
            }, {"Id": 2795, "countyName": "乌审旗", "CityID": 358, "DisSort": null}, {
                "Id": 2796,
                "countyName": "伊金霍洛旗",
                "CityID": 358,
                "DisSort": null
            }, {"Id": 2797, "countyName": "临河区", "CityID": 359, "DisSort": null}, {
                "Id": 2798,
                "countyName": "五原县",
                "CityID": 359,
                "DisSort": null
            }, {"Id": 2799, "countyName": "磴口县", "CityID": 359, "DisSort": null}, {
                "Id": 2800,
                "countyName": "乌拉特前旗",
                "CityID": 359,
                "DisSort": null
            }, {"Id": 2801, "countyName": "乌拉特中旗", "CityID": 359, "DisSort": null}, {
                "Id": 2802,
                "countyName": "乌拉特后旗",
                "CityID": 359,
                "DisSort": null
            }, {"Id": 2803, "countyName": "杭锦后旗", "CityID": 359, "DisSort": null}, {
                "Id": 2804,
                "countyName": "二连浩特市",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2805, "countyName": "锡林浩特市", "CityID": 360, "DisSort": null}, {
                "Id": 2806,
                "countyName": "阿巴嘎旗",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2807, "countyName": "苏尼特左旗", "CityID": 360, "DisSort": null}, {
                "Id": 2808,
                "countyName": "苏尼特右旗",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2809, "countyName": "东乌珠穆沁旗", "CityID": 360, "DisSort": null}, {
                "Id": 2810,
                "countyName": "西乌珠穆沁旗",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2811, "countyName": "太仆寺旗", "CityID": 360, "DisSort": null}, {
                "Id": 2812,
                "countyName": "镶黄旗",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2813, "countyName": "正镶白旗", "CityID": 360, "DisSort": null}, {
                "Id": 2814,
                "countyName": "正蓝旗",
                "CityID": 360,
                "DisSort": null
            }, {"Id": 2815, "countyName": "多伦县", "CityID": 360, "DisSort": null}, {
                "Id": 2816,
                "countyName": "乌兰浩特市",
                "CityID": 361,
                "DisSort": null
            }, {"Id": 2817, "countyName": "阿尔山市", "CityID": 361, "DisSort": null}, {
                "Id": 2818,
                "countyName": "科尔沁右翼前旗",
                "CityID": 361,
                "DisSort": null
            }, {"Id": 2819, "countyName": "科尔沁右翼中旗", "CityID": 361, "DisSort": null}, {
                "Id": 2820,
                "countyName": "扎赉特旗",
                "CityID": 361,
                "DisSort": null
            }, {"Id": 2821, "countyName": "突泉县", "CityID": 361, "DisSort": null}, {
                "Id": 2822,
                "countyName": "阿拉善左旗",
                "CityID": 362,
                "DisSort": null
            }, {"Id": 2823, "countyName": "阿拉善右旗", "CityID": 362, "DisSort": null}, {
                "Id": 2824,
                "countyName": "额济纳旗",
                "CityID": 362,
                "DisSort": null
            }]
    });