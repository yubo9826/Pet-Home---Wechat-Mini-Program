(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/pet/detail"], {
    "189a": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("cf07"),
        a = n("846a");
      for (var c in a)["default"].indexOf(c) < 0 && function (e) {
        n.d(t, e, (function () {
          return a[e]
        }))
      }(c);
      n("6918");
      var i = n("828b"),
        r = Object(i["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], void 0);
      t["default"] = r.exports
    },
    "223c": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = {
          data: function () {
            return {
              pet: {
                name: "小白",
                images: ["https://img.freepik.com/free-photo/cute-pet-collage-isolated_23-2150007407.jpg", "https://img.freepik.com/free-photo/group-portrait-adorable-puppies_53876-64778.jpg", "https://img.freepik.com/free-photo/domestic-pet-composition_23-2148955131.jpg"],
                breed: "金毛寻回犬",
                age: 2,
                gender: "公",
                weight: 25,
                vaccine: !0,
                description: "活泼可爱的金毛,非常喜欢和人互动,已经接种了所有必要的疫苗。性格温顺,特别适合家庭饲养。",
                healthRecords: [{
                  date: "2024-01-15",
                  description: "年度体检 - 一切正常"
                }, {
                  date: "2023-12-20",
                  description: "接种狂犬病疫苗"
                }]
              }
            }
          },
          methods: {
            contactOwner: function () {
              e.showModal({
                title: "联系方式",
                content: "电话: 123-4567-8900\n微信: pet_owner_123",
                showCancel: !1
              })
            }
          }
        };
        t.default = n
      }).call(this, n("df3c")["default"])
    },
    "33bb": function (e, t, n) {
      "use strict";
      (function (e, t) {
        var o = n("47a9");
        n("28c4");
        o(n("3240"));
        var a = o(n("189a"));
        e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
      }).call(this, n("3223")["default"], n("df3c")["createPage"])
    },
    6918: function (e, t, n) {
      "use strict";
      var o = n("a619"),
        a = n.n(o);
      a.a
    },
    "846a": function (e, t, n) {
      "use strict";
      n.r(t);
      var o = n("223c"),
        a = n.n(o);
      for (var c in o)["default"].indexOf(c) < 0 && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(c);
      t["default"] = a.a
    },
    a619: function (e, t, n) {},
    cf07: function (e, t, n) {
      "use strict";
      n.d(t, "b", (function () {
        return o
      })), n.d(t, "c", (function () {
        return a
      })), n.d(t, "a", (function () {}));
      var o = function () {
          var e = this.$createElement;
          this._self._c
        },
        a = []
    }
  },
  [
    ["33bb", "common/runtime", "common/vendor"]
  ]
]);