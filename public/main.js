"use strict";

(function () {
  "use strict";

  function e(e, t) {
    for (var o = 0; o < t.length; o++) {
      var n = t[o];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  var t, o, n, a;
  new (function () {
    function t(e, o) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.hero = document.querySelector(e), this.cabecalho = document.querySelector(o);
    }

    var o, n;
    return o = t, (n = [{
      key: "mostrar",
      value: function value() {
        this.hero.getBoundingClientRect().top < 0 ? (this.hero.classList.add("ativo"), this.cabecalho.classList.add("ativo")) : (this.hero.classList.remove("ativo"), this.cabecalho.classList.remove("ativo")), console.log("nice");
      }
    }, {
      key: "init",
      value: function value() {
        var e = this;
        window.addEventListener("scroll", function () {
          console.log("nice"), e.mostrar();
        });
      }
    }]) && e(o.prototype, n), Object.defineProperty(o, "prototype", {
      writable: !1
    }), t;
  }())(".container", "header").init(), document.querySelector(".btn-menu").addEventListener("click", function (e) {
    e.preventDefault(), e.target.classList.toggle("ativo"), document.querySelector("[data-menu]").classList.toggle("ativo");
  }), function () {
    var e = document.querySelectorAll("[data-menu] a");

    function t(t) {
      t.preventDefault(), e.forEach(function (e) {
        e.classList.remove("underline");
      }), t.target.classList.add("underline");
      var o = t.target.getAttribute("href"),
          n = document.querySelector(o),
          a = document.querySelector("[data-menu]"),
          i = document.querySelector(".btn-menu");
      a.classList.contains("ativo") && (i.classList.remove("ativo"), a.classList.remove("ativo")), n.scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }

    e.forEach(function (e) {
      e.addEventListener("click", t);
    });
  }(), t = document.querySelectorAll('[data-anime="right"]'), o = document.querySelectorAll('[data-anime="left"]'), n = document.querySelectorAll('[data-anime="up"]'), a = .8 * window.innerHeight, window.addEventListener("scroll", function () {
    t.forEach(function (e) {
      e.getBoundingClientRect().top - a < 0 ? e.classList.add("ativo") : e.classList.remove("ativo");
    }), o.forEach(function (e) {
      e.getBoundingClientRect().top - a < 0 ? e.classList.add("ativo") : e.classList.remove("ativo");
    }), n.forEach(function (e) {
      e.getBoundingClientRect().top - a < 0 ? e.classList.add("ativo") : e.classList.remove("ativo");
    });
  });
})();