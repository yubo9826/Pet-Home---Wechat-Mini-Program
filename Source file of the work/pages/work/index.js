(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/work/index"], {
    "27e0": function (e, t, n) {
      "use strict";
      (function (e, t) {
        var i = n("47a9");
        n("28c4");
        i(n("3240"));
        var o = i(n("4d8e"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(o.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    "4d8e": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("87a4"),
        o = n("82fa");
      for (var r in o)["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(r);
      n("f224");
      var a = n("828b"),
        c = Object(a["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      t["default"] = c.exports
    },
    "82fa": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("a318"),
        o = n.n(i);
      for (var r in i)["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, (function () {
          return i[e]
        }))
      }(r);
      t["default"] = o.a
    },
    "87a4": function (e, t, n) {
      "use strict";
      n.d(t, "b", (function () {
        return o
      })), n.d(t, "c", (function () {
        return r
      })), n.d(t, "a", (function () {
        return i
      }));
      var i = {
          uniLoadMore: function () {
            return Promise.all([n.e("common/vendor"), n.e("uni_modules/uni-load-more/components/uni-load-more/uni-load-more")]).then(n.bind(null, "0a87"))
          }
        },
        o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c;
          e._isMounted || (e.e0 = function (t, n) {
            var i = arguments[arguments.length - 1].currentTarget.dataset,
              o = i.eventParams || i["event-params"];
            n = o.index;
            return e.switchTab(n)
          })
        },
        r = []
    },
    a318: function (e, t, n) {
      "use strict";
      (function (e) {
        var i = n("47a9");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var o = i(n("7eb4")),
          r = i(n("ee10")),
          a = {
            data: function () {
              return {
                currentTab: 0,
                isRefreshing: !1,
                loadMoreStatus: "more",
                serviceData: {
                  0: [{
                    name: "基础洗护套餐",
                    price: 128,
                    description: "包含洗澡、吹干、梳理、指甲修剪等基础护理服务",
                    image: "https://pic.quanjing.com/ah/rt/QJ6102439202.jpg?x-oss-process=style/view",
                    tags: ["60分钟", "赠送香波", "专业设备"]
                  }, {
                    name: "精致美容套餐",
                    price: 238,
                    description: "在基础洗护基础上增加造型修剪、局部修饰等专业美容服务",
                    image: "https://imgs.699pic.com/images/501/670/152.jpg!seo.v1",
                    tags: ["90分钟", "造型设计", "品牌用品"]
                  }, {
                    name: "SPA护理套餐",
                    price: 368,
                    description: "高级精油SPA按摩、皮肤护理、香薰理疗等享服务",
                    image: "https://img.mp.sohu.com/upload/20170329/8626c3e24cd14c209860d67e90d89faa_th.jpeg",
                    tags: ["120分钟", "进口精油", "专业SPA"]
                  }],
                  1: [{
                    name: "常规体检套餐",
                    price: 299,
                    description: "包含体温、心率、血常规、粪便检查等基础项目",
                    image: "https://img.freepik.com/free-photo/veterinarian-checking-cute-dog_23-2149143844.jpg",
                    tags: ["45分钟", "专业医师", "检测报告"]
                  }, {
                    name: "疫苗接种套餐",
                    price: 458,
                    description: "狂犬病疫苗、六联疫苗等常规疫苗接种服务",
                    image: "https://img.freepik.com/free-photo/close-up-veterinarian-taking-care-pet_23-2149143779.jpg",
                    tags: ["30分钟", "进口疫苗", "含观察"]
                  }],
                  2: [{
                    name: "日间托管",
                    price: 98,
                    description: "白天照看、喂食、玩耍、室内活动等服务",
                    image: "https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg",
                    tags: ["8小时", "专人照看", "实时监控"]
                  }, {
                    name: "高级寄养",
                    price: 168,
                    description: "24小时专业照看、独立房间、定时运动、洗护服务",
                    image: "https://img.freepik.com/free-photo/domestic-pet-composition_23-2148955131.jpg",
                    tags: ["24小时", "独立房间", "一对一"]
                  }]
                }
              }
            },
            computed: {
              currentList: function () {
                return this.serviceData[this.currentTab] || []
              }
            },
            methods: {
              switchTab: function (e) {
                this.currentTab = e
              },
              onRefresh: function () {
                var t = this;
                return (0, r.default)(o.default.mark((function n() {
                  return o.default.wrap((function (n) {
                    while (1) switch (n.prev = n.next) {
                      case 0:
                        return t.isRefreshing = !0, n.next = 3, new Promise((function (e) {
                          return setTimeout(e, 1e3)
                        }));
                      case 3:
                        t.isRefreshing = !1, e.showToast({
                          title: "刷新成功",
                          icon: "success"
                        });
                      case 5:
                      case "end":
                        return n.stop()
                    }
                  }), n)
                })))()
              },
              onLoadMore: function () {
                var e = this;
                this.loadMoreStatus = "loading", setTimeout((function () {
                  e.loadMoreStatus = "noMore"
                }), 1e3)
              },
              bookService: function (t) {
                e.showModal({
                  title: "预约提示",
                  content: "确定要预约".concat(t.name, "吗？"),
                  success: function (t) {
                    t.confirm && e.showToast({
                      title: "预约成功",
                      icon: "success"
                    })
                  }
                })
              }
            }
          };
        t.default = a
      }).call(this, n("df3c")["default"])
    },
    c4fb: function (e, t, n) {},
    f224: function (e, t, n) {
      "use strict";
      var i = n("c4fb"),
        o = n.n(i);
      o.a
    }
  },
  [
    ["27e0", "common/runtime", "common/vendor"]
  ]
]);