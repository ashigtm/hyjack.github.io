/*!
 * Bootstrap v3.3.4 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if ((b[0] < 2 && b[1] < 9) || (1 == b[0] && 9 == b[1] && b[2] < 1))
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
})(jQuery),
  +(function (a) {
    "use strict";
    function b() {
      var a = document.createElement("bootstrap"),
        b = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var c in b) if (void 0 !== a.style[c]) return { end: b[c] };
      return !1;
    }
    (a.fn.emulateTransitionEnd = function (b) {
      var c = !1,
        d = this;
      a(this).one("bsTransitionEnd", function () {
        c = !0;
      });
      var e = function () {
        c || a(d).trigger(a.support.transition.end);
      };
      return setTimeout(e, b), this;
    }),
      a(function () {
        (a.support.transition = b()),
          a.support.transition &&
            (a.event.special.bsTransitionEnd = {
              bindType: a.support.transition.end,
              delegateType: a.support.transition.end,
              handle: function (b) {
                return a(b.target).is(this)
                  ? b.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.alert");
        e || c.data("bs.alert", (e = new d(this))),
          "string" == typeof b && e[b].call(c);
      });
    }
    var c = '[data-dismiss="alert"]',
      d = function (b) {
        a(b).on("click", c, this.close);
      };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 150),
      (d.prototype.close = function (b) {
        function c() {
          g.detach().trigger("closed.bs.alert").remove();
        }
        var e = a(this),
          f = e.attr("data-target");
        f || ((f = e.attr("href")), (f = f && f.replace(/.*(?=#[^\s]*$)/, "")));
        var g = a(f);
        b && b.preventDefault(),
          g.length || (g = e.closest(".alert")),
          g.trigger((b = a.Event("close.bs.alert"))),
          b.isDefaultPrevented() ||
            (g.removeClass("in"),
            a.support.transition && g.hasClass("fade")
              ? g
                  .one("bsTransitionEnd", c)
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : c());
      });
    var e = a.fn.alert;
    (a.fn.alert = b),
      (a.fn.alert.Constructor = d),
      (a.fn.alert.noConflict = function () {
        return (a.fn.alert = e), this;
      }),
      a(document).on("click.bs.alert.data-api", c, d.prototype.close);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.button"),
          f = "object" == typeof b && b;
        e || d.data("bs.button", (e = new c(this, f))),
          "toggle" == b ? e.toggle() : b && e.setState(b);
      });
    }
    var c = function (b, d) {
      (this.$element = a(b)),
        (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.isLoading = !1);
    };
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = { loadingText: "loading..." }),
      (c.prototype.setState = function (b) {
        var c = "disabled",
          d = this.$element,
          e = d.is("input") ? "val" : "html",
          f = d.data();
        (b += "Text"),
          null == f.resetText && d.data("resetText", d[e]()),
          setTimeout(
            a.proxy(function () {
              d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b
                  ? ((this.isLoading = !0), d.addClass(c).attr(c, c))
                  : this.isLoading &&
                    ((this.isLoading = !1), d.removeClass(c).removeAttr(c));
            }, this),
            0
          );
      }),
      (c.prototype.toggle = function () {
        var a = !0,
          b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
          var c = this.$element.find("input");
          "radio" == c.prop("type") &&
            (c.prop("checked") && this.$element.hasClass("active")
              ? (a = !1)
              : b.find(".active").removeClass("active")),
            a &&
              c
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        a && this.$element.toggleClass("active");
      });
    var d = a.fn.button;
    (a.fn.button = b),
      (a.fn.button.Constructor = c),
      (a.fn.button.noConflict = function () {
        return (a.fn.button = d), this;
      }),
      a(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (c) {
            var d = a(c.target);
            d.hasClass("btn") || (d = d.closest(".btn")),
              b.call(d, "toggle"),
              c.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (b) {
            a(b.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(b.type));
          }
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
          g = "string" == typeof b ? b : f.slide;
        e || d.data("bs.carousel", (e = new c(this, f))),
          "number" == typeof b
            ? e.to(b)
            : g
            ? e[g]()
            : f.interval && e.pause().cycle();
      });
    }
    var c = function (b, c) {
      (this.$element = a(b)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = c),
        (this.paused = null),
        (this.sliding = null),
        (this.interval = null),
        (this.$active = null),
        (this.$items = null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", a.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 600),
      (c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
      (c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
          switch (a.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          a.preventDefault();
        }
      }),
      (c.prototype.cycle = function (b) {
        return (
          b || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              a.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (c.prototype.getItemIndex = function (a) {
        return (
          (this.$items = a.parent().children(".item")),
          this.$items.index(a || this.$active)
        );
      }),
      (c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
          d =
            ("prev" == a && 0 === c) ||
            ("next" == a && c == this.$items.length - 1);
        if (d && !this.options.wrap) return b;
        var e = "prev" == a ? -1 : 1,
          f = (c + e) % this.$items.length;
        return this.$items.eq(f);
      }),
      (c.prototype.to = function (a) {
        var b = this,
          c = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return a > this.$items.length - 1 || 0 > a
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              b.to(a);
            })
          : c == a
          ? this.pause().cycle()
          : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
      }),
      (c.prototype.pause = function (b) {
        return (
          b || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            a.support.transition &&
            (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
          f = d || this.getItemForDirection(b, e),
          g = this.interval,
          h = "next" == b ? "left" : "right",
          i = this;
        if (f.hasClass("active")) return (this.sliding = !1);
        var j = f[0],
          k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });
        if ((this.$element.trigger(k), !k.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), g && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var l = a(this.$indicators.children()[this.getItemIndex(f)]);
            l && l.addClass("active");
          }
          var m = a.Event("slid.bs.carousel", {
            relatedTarget: j,
            direction: h,
          });
          return (
            a.support.transition && this.$element.hasClass("slide")
              ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e
                  .one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                      e.removeClass(["active", h].join(" ")),
                      (i.sliding = !1),
                      setTimeout(function () {
                        i.$element.trigger(m);
                      }, 0);
                  })
                  .emulateTransitionEnd(c.TRANSITION_DURATION))
              : (e.removeClass("active"),
                f.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(m)),
            g && this.cycle(),
            this
          );
        }
      });
    var d = a.fn.carousel;
    (a.fn.carousel = b),
      (a.fn.carousel.Constructor = c),
      (a.fn.carousel.noConflict = function () {
        return (a.fn.carousel = d), this;
      });
    var e = function (c) {
      var d,
        e = a(this),
        f = a(
          e.attr("data-target") ||
            ((d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (f.hasClass("carousel")) {
        var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
        h && (g.interval = !1),
          b.call(f, g),
          h && f.data("bs.carousel").to(h),
          c.preventDefault();
      }
    };
    a(document)
      .on("click.bs.carousel.data-api", "[data-slide]", e)
      .on("click.bs.carousel.data-api", "[data-slide-to]", e),
      a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
          var c = a(this);
          b.call(c, c.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      var c,
        d =
          b.attr("data-target") ||
          ((c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""));
      return a(d);
    }
    function c(b) {
      return this.each(function () {
        var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
        !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
          e || c.data("bs.collapse", (e = new d(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var d = function (b, c) {
      (this.$element = a(b)),
        (this.options = a.extend({}, d.DEFAULTS, c)),
        (this.$trigger = a(
          '[data-toggle="collapse"][href="#' +
            b.id +
            '"],[data-toggle="collapse"][data-target="#' +
            b.id +
            '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (d.VERSION = "3.3.4"),
      (d.TRANSITION_DURATION = 350),
      (d.DEFAULTS = { toggle: !0 }),
      (d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
      }),
      (d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var b,
            e =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
          if (
            !(
              e &&
              e.length &&
              ((b = e.data("bs.collapse")), b && b.transitioning)
            )
          ) {
            var f = a.Event("show.bs.collapse");
            if ((this.$element.trigger(f), !f.isDefaultPrevented())) {
              e &&
                e.length &&
                (c.call(e, "hide"), b || e.data("bs.collapse", null));
              var g = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [g](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var h = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [g](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!a.support.transition) return h.call(this);
              var i = a.camelCase(["scroll", g].join("-"));
              this.$element
                .one("bsTransitionEnd", a.proxy(h, this))
                .emulateTransitionEnd(d.TRANSITION_DURATION)
                [g](this.$element[0][i]);
            }
          }
        }
      }),
      (d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var b = a.Event("hide.bs.collapse");
          if ((this.$element.trigger(b), !b.isDefaultPrevented())) {
            var c = this.dimension();
            this.$element[c](this.$element[c]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var e = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return a.support.transition
              ? void this.$element[c](0)
                  .one("bsTransitionEnd", a.proxy(e, this))
                  .emulateTransitionEnd(d.TRANSITION_DURATION)
              : e.call(this);
          }
        }
      }),
      (d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (d.prototype.getParent = function () {
        return a(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            a.proxy(function (c, d) {
              var e = a(d);
              this.addAriaAndCollapsedClass(b(e), e);
            }, this)
          )
          .end();
      }),
      (d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c),
          b.toggleClass("collapsed", !c).attr("aria-expanded", c);
      });
    var e = a.fn.collapse;
    (a.fn.collapse = c),
      (a.fn.collapse.Constructor = d),
      (a.fn.collapse.noConflict = function () {
        return (a.fn.collapse = e), this;
      }),
      a(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (d) {
          var e = a(this);
          e.attr("data-target") || d.preventDefault();
          var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
          c.call(f, h);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      (b && 3 === b.which) ||
        (a(e).remove(),
        a(f).each(function () {
          var d = a(this),
            e = c(d),
            f = { relatedTarget: this };
          e.hasClass("open") &&
            (e.trigger((b = a.Event("hide.bs.dropdown", f))),
            b.isDefaultPrevented() ||
              (d.attr("aria-expanded", "false"),
              e.removeClass("open").trigger("hidden.bs.dropdown", f)));
        }));
    }
    function c(b) {
      var c = b.attr("data-target");
      c ||
        ((c = b.attr("href")),
        (c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")));
      var d = c && a(c);
      return d && d.length ? d : b.parent();
    }
    function d(b) {
      return this.each(function () {
        var c = a(this),
          d = c.data("bs.dropdown");
        d || c.data("bs.dropdown", (d = new g(this))),
          "string" == typeof b && d[b].call(c);
      });
    }
    var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle);
      };
    (g.VERSION = "3.3.4"),
      (g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
          var f = c(e),
            g = f.hasClass("open");
          if ((b(), !g)) {
            "ontouchstart" in document.documentElement &&
              !f.closest(".navbar-nav").length &&
              a('<div class="dropdown-backdrop"/>')
                .insertAfter(a(this))
                .on("click", b);
            var h = { relatedTarget: this };
            if (
              (f.trigger((d = a.Event("show.bs.dropdown", h))),
              d.isDefaultPrevented())
            )
              return;
            e.trigger("focus").attr("aria-expanded", "true"),
              f.toggleClass("open").trigger("shown.bs.dropdown", h);
          }
          return !1;
        }
      }),
      (g.prototype.keydown = function (b) {
        if (
          /(38|40|27|32)/.test(b.which) &&
          !/input|textarea/i.test(b.target.tagName)
        ) {
          var d = a(this);
          if (
            (b.preventDefault(),
            b.stopPropagation(),
            !d.is(".disabled, :disabled"))
          ) {
            var e = c(d),
              g = e.hasClass("open");
            if ((!g && 27 != b.which) || (g && 27 == b.which))
              return (
                27 == b.which && e.find(f).trigger("focus"), d.trigger("click")
              );
            var h = " li:not(.disabled):visible a",
              i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
            if (i.length) {
              var j = i.index(b.target);
              38 == b.which && j > 0 && j--,
                40 == b.which && j < i.length - 1 && j++,
                ~j || (j = 0),
                i.eq(j).trigger("focus");
            }
          }
        }
      });
    var h = a.fn.dropdown;
    (a.fn.dropdown = d),
      (a.fn.dropdown.Constructor = g),
      (a.fn.dropdown.noConflict = function () {
        return (a.fn.dropdown = h), this;
      }),
      a(document)
        .on("click.bs.dropdown.data-api", b)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
          a.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", f, g.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", f, g.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          g.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          g.prototype.keydown
        );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b, d) {
      return this.each(function () {
        var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
        f || e.data("bs.modal", (f = new c(this, g))),
          "string" == typeof b ? f[b](d) : g.show && f.show(d);
      });
    }
    var c = function (b, c) {
      (this.options = c),
        (this.$body = a(document.body)),
        (this.$element = a(b)),
        (this.$dialog = this.$element.find(".modal-dialog")),
        (this.$backdrop = null),
        (this.isShown = null),
        (this.originalBodyPad = null),
        (this.scrollbarWidth = 0),
        (this.ignoreBackdropClick = !1),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            a.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 300),
      (c.BACKDROP_TRANSITION_DURATION = 150),
      (c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
      }),
      (c.prototype.show = function (b) {
        var d = this,
          e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e),
          this.isShown ||
            e.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              a.proxy(this.hide, this)
            ),
            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
              d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
              });
            }),
            this.backdrop(function () {
              var e = a.support.transition && d.$element.hasClass("fade");
              d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in").attr("aria-hidden", !1),
                d.enforceFocus();
              var f = a.Event("shown.bs.modal", { relatedTarget: b });
              e
                ? d.$dialog
                    .one("bsTransitionEnd", function () {
                      d.$element.trigger("focus").trigger(f);
                    })
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d.$element.trigger("focus").trigger(f);
            }));
      }),
      (c.prototype.hide = function (b) {
        b && b.preventDefault(),
          (b = a.Event("hide.bs.modal")),
          this.$element.trigger(b),
          this.isShown &&
            !b.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal")
              .off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", a.proxy(this.hideModal, this))
                  .emulateTransitionEnd(c.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (c.prototype.enforceFocus = function () {
        a(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            a.proxy(function (a) {
              this.$element[0] === a.target ||
                this.$element.has(a.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (c.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              a.proxy(function (a) {
                27 == a.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (c.prototype.resize = function () {
        this.isShown
          ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
          : a(window).off("resize.bs.modal");
      }),
      (c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(),
          this.backdrop(function () {
            a.$body.removeClass("modal-open"),
              a.resetAdjustments(),
              a.resetScrollbar(),
              a.$element.trigger("hidden.bs.modal");
          });
      }),
      (c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (c.prototype.backdrop = function (b) {
        var d = this,
          e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var f = a.support.transition && e;
          if (
            ((this.$backdrop = a(
              '<div class="modal-backdrop ' + e + '" />'
            ).appendTo(this.$body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              a.proxy(function (a) {
                return this.ignoreBackdropClick
                  ? void (this.ignoreBackdropClick = !1)
                  : void (
                      a.target === a.currentTarget &&
                      ("static" == this.options.backdrop
                        ? this.$element[0].focus()
                        : this.hide())
                    );
              }, this)
            ),
            f && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !b)
          )
            return;
          f
            ? this.$backdrop
                .one("bsTransitionEnd", b)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : b();
        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass("in");
          var g = function () {
            d.removeBackdrop(), b && b();
          };
          a.support.transition && this.$element.hasClass("fade")
            ? this.$backdrop
                .one("bsTransitionEnd", g)
                .emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
            : g();
        } else b && b();
      }),
      (c.prototype.handleUpdate = function () {
        this.adjustDialog();
      }),
      (c.prototype.adjustDialog = function () {
        var a =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "",
        });
      }),
      (c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
          var b = document.documentElement.getBoundingClientRect();
          a = b.right - Math.abs(b.left);
        }
        (this.bodyIsOverflowing = document.body.clientWidth < a),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        (this.originalBodyPad = document.body.style.paddingRight || ""),
          this.bodyIsOverflowing &&
            this.$body.css("padding-right", a + this.scrollbarWidth);
      }),
      (c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
      }),
      (c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        (a.className = "modal-scrollbar-measure"), this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b;
      });
    var d = a.fn.modal;
    (a.fn.modal = b),
      (a.fn.modal.Constructor = c),
      (a.fn.modal.noConflict = function () {
        return (a.fn.modal = d), this;
      }),
      a(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (c) {
          var d = a(this),
            e = d.attr("href"),
            f = a(
              d.attr("data-target") || (e && e.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            g = f.data("bs.modal")
              ? "toggle"
              : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
          d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function (a) {
              a.isDefaultPrevented() ||
                f.one("hidden.bs.modal", function () {
                  d.is(":visible") && d.trigger("focus");
                });
            }),
            b.call(f, g, this);
        }
      );
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.tooltip", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      (this.type = null),
        (this.options = null),
        (this.enabled = null),
        (this.timeout = null),
        (this.hoverState = null),
        (this.$element = null),
        this.init("tooltip", a, b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (c.prototype.init = function (b, c, d) {
        if (
          ((this.enabled = !0),
          (this.type = b),
          (this.$element = a(c)),
          (this.options = this.getOptions(d)),
          (this.$viewport =
            this.options.viewport &&
            a(this.options.viewport.selector || this.options.viewport)),
          this.$element[0] instanceof document.constructor &&
            !this.options.selector)
        )
          throw new Error(
            "`selector` option must be specified when initializing " +
              this.type +
              " on the window.document object!"
          );
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
          var g = e[f];
          if ("click" == g)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              a.proxy(this.toggle, this)
            );
          else if ("manual" != g) {
            var h = "hover" == g ? "mouseenter" : "focusin",
              i = "hover" == g ? "mouseleave" : "focusout";
            this.$element.on(
              h + "." + this.type,
              this.options.selector,
              a.proxy(this.enter, this)
            ),
              this.$element.on(
                i + "." + this.type,
                this.options.selector,
                a.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = a.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.getOptions = function (b) {
        return (
          (b = a.extend({}, this.getDefaults(), this.$element.data(), b)),
          b.delay &&
            "number" == typeof b.delay &&
            (b.delay = { show: b.delay, hide: b.delay }),
          b
        );
      }),
      (c.prototype.getDelegateOptions = function () {
        var b = {},
          c = this.getDefaults();
        return (
          this._options &&
            a.each(this._options, function (a, d) {
              c[a] != d && (b[a] = d);
            }),
          b
        );
      }),
      (c.prototype.enter = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return c && c.$tip && c.$tip.is(":visible")
          ? void (c.hoverState = "in")
          : (c ||
              ((c = new this.constructor(
                b.currentTarget,
                this.getDelegateOptions()
              )),
              a(b.currentTarget).data("bs." + this.type, c)),
            clearTimeout(c.timeout),
            (c.hoverState = "in"),
            c.options.delay && c.options.delay.show
              ? void (c.timeout = setTimeout(function () {
                  "in" == c.hoverState && c.show();
                }, c.options.delay.show))
              : c.show());
      }),
      (c.prototype.leave = function (b) {
        var c =
          b instanceof this.constructor
            ? b
            : a(b.currentTarget).data("bs." + this.type);
        return (
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c)),
          clearTimeout(c.timeout),
          (c.hoverState = "out"),
          c.options.delay && c.options.delay.hide
            ? void (c.timeout = setTimeout(function () {
                "out" == c.hoverState && c.hide();
              }, c.options.delay.hide))
            : c.hide()
        );
      }),
      (c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(b);
          var d = a.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (b.isDefaultPrevented() || !d) return;
          var e = this,
            f = this.tip(),
            g = this.getUID(this.type);
          this.setContent(),
            f.attr("id", g),
            this.$element.attr("aria-describedby", g),
            this.options.animation && f.addClass("fade");
          var h =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, f[0], this.$element[0])
                : this.options.placement,
            i = /\s?auto?\s?/i,
            j = i.test(h);
          j && (h = h.replace(i, "") || "top"),
            f
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(h)
              .data("bs." + this.type, this),
            this.options.container
              ? f.appendTo(this.options.container)
              : f.insertAfter(this.$element);
          var k = this.getPosition(),
            l = f[0].offsetWidth,
            m = f[0].offsetHeight;
          if (j) {
            var n = h,
              o = this.options.container
                ? a(this.options.container)
                : this.$element.parent(),
              p = this.getPosition(o);
            (h =
              "bottom" == h && k.bottom + m > p.bottom
                ? "top"
                : "top" == h && k.top - m < p.top
                ? "bottom"
                : "right" == h && k.right + l > p.width
                ? "left"
                : "left" == h && k.left - l < p.left
                ? "right"
                : h),
              f.removeClass(n).addClass(h);
          }
          var q = this.getCalculatedOffset(h, k, l, m);
          this.applyPlacement(q, h);
          var r = function () {
            var a = e.hoverState;
            e.$element.trigger("shown.bs." + e.type),
              (e.hoverState = null),
              "out" == a && e.leave(e);
          };
          a.support.transition && this.$tip.hasClass("fade")
            ? f
                .one("bsTransitionEnd", r)
                .emulateTransitionEnd(c.TRANSITION_DURATION)
            : r();
        }
      }),
      (c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
          e = d[0].offsetWidth,
          f = d[0].offsetHeight,
          g = parseInt(d.css("margin-top"), 10),
          h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0),
          isNaN(h) && (h = 0),
          (b.top = b.top + g),
          (b.left = b.left + h),
          a.offset.setOffset(
            d[0],
            a.extend(
              {
                using: function (a) {
                  d.css({ top: Math.round(a.top), left: Math.round(a.left) });
                },
              },
              b
            ),
            0
          ),
          d.addClass("in");
        var i = d[0].offsetWidth,
          j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? (b.left += k.left) : (b.top += k.top);
        var l = /top|bottom/.test(c),
          m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
          n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l);
      }),
      (c.prototype.replaceArrow = function (a, b, c) {
        this.arrow()
          .css(c ? "left" : "top", 50 * (1 - a / b) + "%")
          .css(c ? "top" : "left", "");
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
          a.removeClass("fade in top bottom left right");
      }),
      (c.prototype.hide = function (b) {
        function d() {
          "in" != e.hoverState && f.detach(),
            e.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + e.type),
            b && b();
        }
        var e = this,
          f = a(this.$tip),
          g = a.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(g),
          g.isDefaultPrevented()
            ? void 0
            : (f.removeClass("in"),
              a.support.transition && f.hasClass("fade")
                ? f
                    .one("bsTransitionEnd", d)
                    .emulateTransitionEnd(c.TRANSITION_DURATION)
                : d(),
              (this.hoverState = null),
              this)
        );
      }),
      (c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) &&
          a
            .attr("data-original-title", a.attr("title") || "")
            .attr("title", "");
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
          d = "BODY" == c.tagName,
          e = c.getBoundingClientRect();
        null == e.width &&
          (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top,
          }));
        var f = d ? { top: 0, left: 0 } : b.offset(),
          g = {
            scroll: d
              ? document.documentElement.scrollTop || document.body.scrollTop
              : b.scrollTop(),
          },
          h = d
            ? { width: a(window).width(), height: a(window).height() }
            : null;
        return a.extend({}, e, g, h, f);
      }),
      (c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a
          ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 }
          : "top" == a
          ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 }
          : "left" == a
          ? { top: b.top + b.height / 2 - d / 2, left: b.left - c }
          : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
      }),
      (c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };
        if (!this.$viewport) return e;
        var f = (this.options.viewport && this.options.viewport.padding) || 0,
          g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
          var h = b.top - f - g.scroll,
            i = b.top + f - g.scroll + d;
          h < g.top
            ? (e.top = g.top - h)
            : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
          var j = b.left - f,
            k = b.left + f + c;
          j < g.left
            ? (e.left = g.left - j)
            : k > g.width && (e.left = g.left + g.width - k);
        }
        return e;
      }),
      (c.prototype.getTitle = function () {
        var a,
          b = this.$element,
          c = this.options;
        return (a =
          b.attr("data-original-title") ||
          ("function" == typeof c.title ? c.title.call(b[0]) : c.title));
      }),
      (c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random());
        while (document.getElementById(a));
        return a;
      }),
      (c.prototype.tip = function () {
        return (this.$tip = this.$tip || a(this.options.template));
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (c.prototype.enable = function () {
        this.enabled = !0;
      }),
      (c.prototype.disable = function () {
        this.enabled = !1;
      }),
      (c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (c.prototype.toggle = function (b) {
        var c = this;
        b &&
          ((c = a(b.currentTarget).data("bs." + this.type)),
          c ||
            ((c = new this.constructor(
              b.currentTarget,
              this.getDelegateOptions()
            )),
            a(b.currentTarget).data("bs." + this.type, c))),
          c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
      }),
      (c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type);
          });
      });
    var d = a.fn.tooltip;
    (a.fn.tooltip = b),
      (a.fn.tooltip.Constructor = c),
      (a.fn.tooltip.noConflict = function () {
        return (a.fn.tooltip = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == typeof b && b;
        (e || !/destroy|hide/.test(b)) &&
          (e || d.data("bs.popover", (e = new c(this, f))),
          "string" == typeof b && e[b]());
      });
    }
    var c = function (a, b) {
      this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (c.VERSION = "3.3.4"),
      (c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)),
      (c.prototype.constructor = c),
      (c.prototype.getDefaults = function () {
        return c.DEFAULTS;
      }),
      (c.prototype.setContent = function () {
        var a = this.tip(),
          b = this.getTitle(),
          c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b),
          a
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof c
                  ? "html"
                  : "append"
                : "text"
            ](c),
          a.removeClass("fade top bottom left right in"),
          a.find(".popover-title").html() || a.find(".popover-title").hide();
      }),
      (c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (c.prototype.getContent = function () {
        var a = this.$element,
          b = this.options;
        return (
          a.attr("data-content") ||
          ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        );
      }),
      (c.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      });
    var d = a.fn.popover;
    (a.fn.popover = b),
      (a.fn.popover.Constructor = c),
      (a.fn.popover.noConflict = function () {
        return (a.fn.popover = d), this;
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(c, d) {
      (this.$body = a(document.body)),
        (this.$scrollElement = a(a(c).is(document.body) ? window : c)),
        (this.options = a.extend({}, b.DEFAULTS, d)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on(
          "scroll.bs.scrollspy",
          a.proxy(this.process, this)
        ),
        this.refresh(),
        this.process();
    }
    function c(c) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == typeof c && c;
        e || d.data("bs.scrollspy", (e = new b(this, f))),
          "string" == typeof c && e[c]();
      });
    }
    (b.VERSION = "3.3.4"),
      (b.DEFAULTS = { offset: 10 }),
      (b.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (b.prototype.refresh = function () {
        var b = this,
          c = "offset",
          d = 0;
        (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight()),
          a.isWindow(this.$scrollElement[0]) ||
            ((c = "position"), (d = this.$scrollElement.scrollTop())),
          this.$body
            .find(this.selector)
            .map(function () {
              var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);
              return (
                (f && f.length && f.is(":visible") && [[f[c]().top + d, e]]) ||
                null
              );
            })
            .sort(function (a, b) {
              return a[0] - b[0];
            })
            .each(function () {
              b.offsets.push(this[0]), b.targets.push(this[1]);
            });
      }),
      (b.prototype.process = function () {
        var a,
          b = this.$scrollElement.scrollTop() + this.options.offset,
          c = this.getScrollHeight(),
          d = this.options.offset + c - this.$scrollElement.height(),
          e = this.offsets,
          f = this.targets,
          g = this.activeTarget;
        if ((this.scrollHeight != c && this.refresh(), b >= d))
          return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0]) return (this.activeTarget = null), this.clear();
        for (a = e.length; a--; )
          g != f[a] &&
            b >= e[a] &&
            (void 0 === e[a + 1] || b < e[a + 1]) &&
            this.activate(f[a]);
      }),
      (b.prototype.activate = function (b) {
        (this.activeTarget = b), this.clear();
        var c =
            this.selector +
            '[data-target="' +
            b +
            '"],' +
            this.selector +
            '[href="' +
            b +
            '"]',
          d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length &&
          (d = d.closest("li.dropdown").addClass("active")),
          d.trigger("activate.bs.scrollspy");
      }),
      (b.prototype.clear = function () {
        a(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var d = a.fn.scrollspy;
    (a.fn.scrollspy = c),
      (a.fn.scrollspy.Constructor = b),
      (a.fn.scrollspy.noConflict = function () {
        return (a.fn.scrollspy = d), this;
      }),
      a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
          var b = a(this);
          c.call(b, b.data());
        });
      });
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.tab");
        e || d.data("bs.tab", (e = new c(this))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b) {
      this.element = a(b);
    };
    (c.VERSION = "3.3.4"),
      (c.TRANSITION_DURATION = 150),
      (c.prototype.show = function () {
        var b = this.element,
          c = b.closest("ul:not(.dropdown-menu)"),
          d = b.data("target");
        if (
          (d ||
            ((d = b.attr("href")), (d = d && d.replace(/.*(?=#[^\s]*$)/, ""))),
          !b.parent("li").hasClass("active"))
        ) {
          var e = c.find(".active:last a"),
            f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
            g = a.Event("show.bs.tab", { relatedTarget: e[0] });
          if (
            (e.trigger(f),
            b.trigger(g),
            !g.isDefaultPrevented() && !f.isDefaultPrevented())
          ) {
            var h = a(d);
            this.activate(b.closest("li"), c),
              this.activate(h, h.parent(), function () {
                e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }),
                  b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
              });
          }
        }
      }),
      (c.prototype.activate = function (b, d, e) {
        function f() {
          g
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            b
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"),
            b.parent(".dropdown-menu").length &&
              b
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            e && e();
        }
        var g = d.find("> .active"),
          h =
            e &&
            a.support.transition &&
            ((g.length && g.hasClass("fade")) || !!d.find("> .fade").length);
        g.length && h
          ? g
              .one("bsTransitionEnd", f)
              .emulateTransitionEnd(c.TRANSITION_DURATION)
          : f(),
          g.removeClass("in");
      });
    var d = a.fn.tab;
    (a.fn.tab = b),
      (a.fn.tab.Constructor = c),
      (a.fn.tab.noConflict = function () {
        return (a.fn.tab = d), this;
      });
    var e = function (c) {
      c.preventDefault(), b.call(a(this), "show");
    };
    a(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', e)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
  })(jQuery),
  +(function (a) {
    "use strict";
    function b(b) {
      return this.each(function () {
        var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == typeof b && b;
        e || d.data("bs.affix", (e = new c(this, f))),
          "string" == typeof b && e[b]();
      });
    }
    var c = function (b, d) {
      (this.options = a.extend({}, c.DEFAULTS, d)),
        (this.$target = a(this.options.target)
          .on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            a.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = a(b)),
        (this.affixed = null),
        (this.unpin = null),
        (this.pinnedOffset = null),
        this.checkPosition();
    };
    (c.VERSION = "3.3.4"),
      (c.RESET = "affix affix-top affix-bottom"),
      (c.DEFAULTS = { offset: 0, target: window }),
      (c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
          f = this.$element.offset(),
          g = this.$target.height();
        if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
        if ("bottom" == this.affixed)
          return null != c
            ? e + this.unpin <= f.top
              ? !1
              : "bottom"
            : a - d >= e + g
            ? !1
            : "bottom";
        var h = null == this.affixed,
          i = h ? e : f.top,
          j = h ? g : b;
        return null != c && c >= e
          ? "top"
          : null != d && i + j >= a - d
          ? "bottom"
          : !1;
      }),
      (c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(),
          b = this.$element.offset();
        return (this.pinnedOffset = b.top - a);
      }),
      (c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
      }),
      (c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var b = this.$element.height(),
            d = this.options.offset,
            e = d.top,
            f = d.bottom,
            g = a(document.body).height();
          "object" != typeof d && (f = e = d),
            "function" == typeof e && (e = d.top(this.$element)),
            "function" == typeof f && (f = d.bottom(this.$element));
          var h = this.getState(g, b, e, f);
          if (this.affixed != h) {
            null != this.unpin && this.$element.css("top", "");
            var i = "affix" + (h ? "-" + h : ""),
              j = a.Event(i + ".bs.affix");
            if ((this.$element.trigger(j), j.isDefaultPrevented())) return;
            (this.affixed = h),
              (this.unpin = "bottom" == h ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(c.RESET)
                .addClass(i)
                .trigger(i.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == h && this.$element.offset({ top: g - b - f });
        }
      });
    var d = a.fn.affix;
    (a.fn.affix = b),
      (a.fn.affix.Constructor = c),
      (a.fn.affix.noConflict = function () {
        return (a.fn.affix = d), this;
      }),
      a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
          var c = a(this),
            d = c.data();
          (d.offset = d.offset || {}),
            null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
            null != d.offsetTop && (d.offset.top = d.offsetTop),
            b.call(c, d);
        });
      });
  })(
    jQuery
  ); /*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (a, b, c) {
    function d(c) {
      var d = b.console;
      f[c] ||
        ((f[c] = !0),
        a.migrateWarnings.push(c),
        d &&
          d.warn &&
          !a.migrateMute &&
          (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
    }
    function e(b, c, e, f) {
      if (Object.defineProperty)
        try {
          return void Object.defineProperty(b, c, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return d(f), e;
            },
            set: function (a) {
              d(f), (e = a);
            },
          });
        } catch (g) {}
      (a._definePropertyBroken = !0), (b[c] = e);
    }
    a.migrateVersion = "1.4.1";
    var f = {};
    (a.migrateWarnings = []),
      b.console &&
        b.console.log &&
        b.console.log(
          "JQMIGRATE: Migrate is installed" +
            (a.migrateMute ? "" : " with logging active") +
            ", version " +
            a.migrateVersion
        ),
      a.migrateTrace === c && (a.migrateTrace = !0),
      (a.migrateReset = function () {
        (f = {}), (a.migrateWarnings.length = 0);
      }),
      "BackCompat" === document.compatMode &&
        d("jQuery is not compatible with Quirks Mode");
    var g = a("<input/>", { size: 1 }).attr("size") && a.attrFn,
      h = a.attr,
      i =
        (a.attrHooks.value && a.attrHooks.value.get) ||
        function () {
          return null;
        },
      j =
        (a.attrHooks.value && a.attrHooks.value.set) ||
        function () {
          return c;
        },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;
    e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"),
      (a.attr = function (b, e, f, i) {
        var j = e.toLowerCase(),
          o = b && b.nodeType;
        return i &&
          (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"),
          b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e])))
          ? a(b)[e](f)
          : ("type" === e &&
              f !== c &&
              k.test(b.nodeName) &&
              b.parentNode &&
              d("Can't change the 'type' of an input or button in IE 6/7/8"),
            !a.attrHooks[j] &&
              m.test(j) &&
              ((a.attrHooks[j] = {
                get: function (b, d) {
                  var e,
                    f = a.prop(b, d);
                  return f === !0 ||
                    ("boolean" != typeof f &&
                      (e = b.getAttributeNode(d)) &&
                      e.nodeValue !== !1)
                    ? d.toLowerCase()
                    : c;
                },
                set: function (b, c, d) {
                  var e;
                  return (
                    c === !1
                      ? a.removeAttr(b, d)
                      : ((e = a.propFix[d] || d),
                        e in b && (b[e] = !0),
                        b.setAttribute(d, d.toLowerCase())),
                    d
                  );
                },
              }),
              n.test(j) &&
                d(
                  "jQuery.fn.attr('" +
                    j +
                    "') might use property instead of attribute"
                )),
            h.call(a, b, e, f));
      }),
      (a.attrHooks.value = {
        get: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? i.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value') no longer gets properties"),
              b in a ? a.value : null);
        },
        set: function (a, b) {
          var c = (a.nodeName || "").toLowerCase();
          return "button" === c
            ? j.apply(this, arguments)
            : ("input" !== c &&
                "option" !== c &&
                d("jQuery.fn.attr('value', val) no longer sets properties"),
              void (a.value = b));
        },
      });
    var o,
      p,
      q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    (a.fn.init = function (b, e, f) {
      var g, h;
      return b &&
        "string" == typeof b &&
        !a.isPlainObject(e) &&
        (g = w.exec(a.trim(b))) &&
        g[0] &&
        (t.test(b) || d("$(html) HTML strings must start with '<' character"),
        g[3] && d("$(html) HTML text after last tag is ignored"),
        "#" === g[0].charAt(0) &&
          (d("HTML string cannot start with a '#' character"),
          a.error("JQMIGRATE: Invalid selector string (XSS)")),
        e && e.context && e.context.nodeType && (e = e.context),
        a.parseHTML)
        ? q.call(
            this,
            a.parseHTML(g[2], (e && e.ownerDocument) || e || document, !0),
            e,
            f
          )
        : ((h = q.apply(this, arguments)),
          b && b.selector !== c
            ? ((h.selector = b.selector), (h.context = b.context))
            : ((h.selector = "string" == typeof b ? b : ""),
              b && (h.context = b.nodeType ? b : e || document)),
          h);
    }),
      (a.fn.init.prototype = a.fn),
      (a.find = function (a) {
        var b = Array.prototype.slice.call(arguments);
        if ("string" == typeof a && u.test(a))
          try {
            document.querySelector(a);
          } catch (c) {
            a = a.replace(v, function (a, b, c, d) {
              return "[" + b + c + '"' + d + '"]';
            });
            try {
              document.querySelector(a),
                d("Attribute selector with '#' must be quoted: " + b[0]),
                (b[0] = a);
            } catch (e) {
              d("Attribute selector with '#' was not fixed: " + b[0]);
            }
          }
        return r.apply(this, b);
      });
    var x;
    for (x in r)
      Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
    (a.parseJSON = function (a) {
      return a
        ? s.apply(this, arguments)
        : (d("jQuery.parseJSON requires a valid JSON string"), null);
    }),
      (a.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
      a.browser ||
        ((o = a.uaMatch(navigator.userAgent)),
        (p = {}),
        o.browser && ((p[o.browser] = !0), (p.version = o.version)),
        p.chrome ? (p.webkit = !0) : p.webkit && (p.safari = !0),
        (a.browser = p)),
      e(a, "browser", a.browser, "jQuery.browser is deprecated"),
      (a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode),
      e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"),
      e(
        a.support,
        "boxModel",
        a.support.boxModel,
        "jQuery.support.boxModel is deprecated"
      ),
      (a.sub = function () {
        function b(a, c) {
          return new b.fn.init(a, c);
        }
        a.extend(!0, b, this),
          (b.superclass = this),
          (b.fn = b.prototype = this()),
          (b.fn.constructor = b),
          (b.sub = this.sub),
          (b.fn.init = function (d, e) {
            var f = a.fn.init.call(this, d, e, c);
            return f instanceof b ? f : b(f);
          }),
          (b.fn.init.prototype = b.fn);
        var c = b(document);
        return d("jQuery.sub() is deprecated"), b;
      }),
      (a.fn.size = function () {
        return (
          d("jQuery.fn.size() is deprecated; use the .length property"),
          this.length
        );
      });
    var y = !1;
    a.swap &&
      a.each(["height", "width", "reliableMarginRight"], function (b, c) {
        var d = a.cssHooks[c] && a.cssHooks[c].get;
        d &&
          (a.cssHooks[c].get = function () {
            var a;
            return (y = !0), (a = d.apply(this, arguments)), (y = !1), a;
          });
      }),
      (a.swap = function (a, b, c, e) {
        var f,
          g,
          h = {};
        y || d("jQuery.swap() is undocumented and deprecated");
        for (g in b) (h[g] = a.style[g]), (a.style[g] = b[g]);
        f = c.apply(a, e || []);
        for (g in b) a.style[g] = h[g];
        return f;
      }),
      a.ajaxSetup({ converters: { "text json": a.parseJSON } });
    var z = a.fn.data;
    a.fn.data = function (b) {
      var e,
        f,
        g = this[0];
      return !g ||
        "events" !== b ||
        1 !== arguments.length ||
        ((e = a.data(g, b)),
        (f = a._data(g, b)),
        (e !== c && e !== f) || f === c)
        ? z.apply(this, arguments)
        : (d("Use of jQuery.fn.data('events') is deprecated"), f);
    };
    var A = /\/(java|ecma)script/i;
    a.clean ||
      (a.clean = function (b, c, e, f) {
        (c = c || document),
          (c = (!c.nodeType && c[0]) || c),
          (c = c.ownerDocument || c),
          d("jQuery.clean() is deprecated");
        var g,
          h,
          i,
          j,
          k = [];
        if ((a.merge(k, a.buildFragment(b, c).childNodes), e))
          for (
            i = function (a) {
              return !a.type || A.test(a.type)
                ? f
                  ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                  : e.appendChild(a)
                : void 0;
            },
              g = 0;
            null != (h = k[g]);
            g++
          )
            (a.nodeName(h, "script") && i(h)) ||
              (e.appendChild(h),
              "undefined" != typeof h.getElementsByTagName &&
                ((j = a.grep(a.merge([], h.getElementsByTagName("script")), i)),
                k.splice.apply(k, [g + 1, 0].concat(j)),
                (g += j.length)));
        return k;
      });
    var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function (b) {
        return "string" != typeof b || a.event.special.hover
          ? b
          : (K.test(b) &&
              d(
                "'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"
              ),
            b && b.replace(K, "mouseenter$1 mouseleave$1"));
      };
    a.event.props &&
      "attrChange" !== a.event.props[0] &&
      a.event.props.unshift(
        "attrChange",
        "attrName",
        "relatedNode",
        "srcElement"
      ),
      a.event.dispatch &&
        e(
          a.event,
          "handle",
          a.event.dispatch,
          "jQuery.event.handle is undocumented and deprecated"
        ),
      (a.event.add = function (a, b, c, e, f) {
        a !== document &&
          J.test(b) &&
          d("AJAX events should be attached to document: " + b),
          B.call(this, a, L(b || ""), c, e, f);
      }),
      (a.event.remove = function (a, b, c, d, e) {
        C.call(this, a, L(b) || "", c, d, e);
      }),
      a.each(["load", "unload", "error"], function (b, c) {
        a.fn[c] = function () {
          var a = Array.prototype.slice.call(arguments, 0);
          return "load" === c && "string" == typeof a[0]
            ? H.apply(this, a)
            : (d("jQuery.fn." + c + "() is deprecated"),
              a.splice(0, 0, c),
              arguments.length
                ? this.bind.apply(this, a)
                : (this.triggerHandler.apply(this, a), this));
        };
      }),
      (a.fn.toggle = function (b, c) {
        if (!a.isFunction(b) || !a.isFunction(c))
          return E.apply(this, arguments);
        d("jQuery.fn.toggle(handler, handler...) is deprecated");
        var e = arguments,
          f = b.guid || a.guid++,
          g = 0,
          h = function (c) {
            var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
            return (
              a._data(this, "lastToggle" + b.guid, d + 1),
              c.preventDefault(),
              e[d].apply(this, arguments) || !1
            );
          };
        for (h.guid = f; g < e.length; ) e[g++].guid = f;
        return this.click(h);
      }),
      (a.fn.live = function (b, c, e) {
        return (
          d("jQuery.fn.live() is deprecated"),
          F
            ? F.apply(this, arguments)
            : (a(this.context).on(b, this.selector, c, e), this)
        );
      }),
      (a.fn.die = function (b, c) {
        return (
          d("jQuery.fn.die() is deprecated"),
          G
            ? G.apply(this, arguments)
            : (a(this.context).off(b, this.selector || "**", c), this)
        );
      }),
      (a.event.trigger = function (a, b, c, e) {
        return (
          c || J.test(a) || d("Global events are undocumented and deprecated"),
          D.call(this, a, b, c || document, e)
        );
      }),
      a.each(I.split("|"), function (b, c) {
        a.event.special[c] = {
          setup: function () {
            var b = this;
            return (
              b !== document &&
                (a.event.add(document, c + "." + a.guid, function () {
                  a.event.trigger(
                    c,
                    Array.prototype.slice.call(arguments, 1),
                    b,
                    !0
                  );
                }),
                a._data(this, c, a.guid++)),
              !1
            );
          },
          teardown: function () {
            return (
              this !== document &&
                a.event.remove(document, c + "." + a._data(this, c)),
              !1
            );
          },
        };
      }),
      (a.event.special.ready = {
        setup: function () {
          this === document && d("'ready' event is deprecated");
        },
      });
    var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;
    if (
      ((a.fn.andSelf = function () {
        return (
          d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),
          M.apply(this, arguments)
        );
      }),
      (a.fn.find = function (a) {
        var b = N.apply(this, arguments);
        return (
          (b.context = this.context),
          (b.selector = this.selector ? this.selector + " " + a : a),
          b
        );
      }),
      a.Callbacks)
    ) {
      var O = a.Deferred,
        P = [
          [
            "resolve",
            "done",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "resolved",
          ],
          [
            "reject",
            "fail",
            a.Callbacks("once memory"),
            a.Callbacks("once memory"),
            "rejected",
          ],
          ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")],
        ];
      a.Deferred = function (b) {
        var c = O(),
          e = c.promise();
        return (
          (c.pipe = e.pipe =
            function () {
              var b = arguments;
              return (
                d("deferred.pipe() is deprecated"),
                a
                  .Deferred(function (d) {
                    a.each(P, function (f, g) {
                      var h = a.isFunction(b[f]) && b[f];
                      c[g[1]](function () {
                        var b = h && h.apply(this, arguments);
                        b && a.isFunction(b.promise)
                          ? b
                              .promise()
                              .done(d.resolve)
                              .fail(d.reject)
                              .progress(d.notify)
                          : d[g[0] + "With"](
                              this === e ? d.promise() : this,
                              h ? [b] : arguments
                            );
                      });
                    }),
                      (b = null);
                  })
                  .promise()
              );
            }),
          (c.isResolved = function () {
            return (
              d("deferred.isResolved is deprecated"), "resolved" === c.state()
            );
          }),
          (c.isRejected = function () {
            return (
              d("deferred.isRejected is deprecated"), "rejected" === c.state()
            );
          }),
          b && b.call(c, c),
          c
        );
      };
    }
  })(jQuery, window);
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-touchevents-video-webgl-websockets-websqldatabase-webworkers-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!(function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }
  function a() {
    var e, t, n, a, o, i, s;
    for (var c in x)
      if (x.hasOwnProperty(c)) {
        if (
          ((e = []),
          (t = x[c]),
          t.name &&
            (e.push(t.name.toLowerCase()),
            t.options && t.options.aliases && t.options.aliases.length))
        )
          for (n = 0; n < t.options.aliases.length; n++)
            e.push(t.options.aliases[n].toLowerCase());
        for (a = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++)
          (i = e[o]),
            (s = i.split(".")),
            1 === s.length
              ? (Modernizr[s[0]] = a)
              : (!Modernizr[s[0]] ||
                  Modernizr[s[0]] instanceof Boolean ||
                  (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                (Modernizr[s[0]][s[1]] = a)),
            b.push((a ? "" : "no-") + s.join("-"));
      }
  }
  function o(e) {
    var t = E.className,
      n = Modernizr._config.classPrefix || "";
    if ((k && (t = t.baseVal), Modernizr._config.enableJSClass)) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses &&
      ((t += " " + n + e.join(" " + n)),
      k ? (E.className.baseVal = t) : (E.className = t));
  }
  function i(e, t) {
    if ("object" == typeof e) for (var n in e) z(e, n) && i(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        a = Modernizr[r[0]];
      if ((2 == r.length && (a = a[r[1]]), "undefined" != typeof a))
        return Modernizr;
      (t = "function" == typeof t ? t() : t),
        1 == r.length
          ? (Modernizr[r[0]] = t)
          : (!Modernizr[r[0]] ||
              Modernizr[r[0]] instanceof Boolean ||
              (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
            (Modernizr[r[0]][r[1]] = t)),
        o([(t && 0 != t ? "" : "no-") + r.join("-")]),
        Modernizr._trigger(e, t);
    }
    return Modernizr;
  }
  function s() {
    return "function" != typeof t.createElement
      ? t.createElement(arguments[0])
      : k
      ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
      : t.createElement.apply(t, arguments);
  }
  function c(e) {
    return e
      .replace(/([a-z])-([a-z])/g, function (e, t, n) {
        return t + n.toUpperCase();
      })
      .replace(/^-/, "");
  }
  function l(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function d() {
    var e = t.body;
    return e || ((e = s(k ? "svg" : "body")), (e.fake = !0)), e;
  }
  function u(e, n, r, a) {
    var o,
      i,
      c,
      l,
      u = "modernizr",
      f = s("div"),
      p = d();
    if (parseInt(r, 10))
      for (; r--; )
        (c = s("div")), (c.id = a ? a[r] : u + (r + 1)), f.appendChild(c);
    return (
      (o = s("style")),
      (o.type = "text/css"),
      (o.id = "s" + u),
      (p.fake ? p : f).appendChild(o),
      p.appendChild(f),
      o.styleSheet
        ? (o.styleSheet.cssText = e)
        : o.appendChild(t.createTextNode(e)),
      (f.id = u),
      p.fake &&
        ((p.style.background = ""),
        (p.style.overflow = "hidden"),
        (l = E.style.overflow),
        (E.style.overflow = "hidden"),
        E.appendChild(p)),
      (i = n(f, e)),
      p.fake
        ? (p.parentNode.removeChild(p), (E.style.overflow = l), E.offsetHeight)
        : f.parentNode.removeChild(f),
      !!i
    );
  }
  function f(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function p(e, t, n) {
    var a;
    for (var o in e)
      if (e[o] in t)
        return n === !1
          ? e[o]
          : ((a = t[e[o]]), r(a, "function") ? f(a, n || t) : a);
    return !1;
  }
  function m(e) {
    return e
      .replace(/([A-Z])/g, function (e, t) {
        return "-" + t.toLowerCase();
      })
      .replace(/^ms-/, "-ms-");
  }
  function h(t, r) {
    var a = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; a--; ) if (e.CSS.supports(m(t[a]), r)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in e) {
      for (var o = []; a--; ) o.push("(" + m(t[a]) + ":" + r + ")");
      return (
        (o = o.join(" or ")),
        u(
          "@supports (" + o + ") { #modernizr { position: absolute; } }",
          function (e) {
            return "absolute" == getComputedStyle(e, null).position;
          }
        )
      );
    }
    return n;
  }
  function g(e, t, a, o) {
    function i() {
      u && (delete H.style, delete H.modElem);
    }
    if (((o = r(o, "undefined") ? !1 : o), !r(a, "undefined"))) {
      var d = h(e, a);
      if (!r(d, "undefined")) return d;
    }
    for (
      var u, f, p, m, g, v = ["modernizr", "tspan", "samp"];
      !H.style && v.length;

    )
      (u = !0), (H.modElem = s(v.shift())), (H.style = H.modElem.style);
    for (p = e.length, f = 0; p > f; f++)
      if (
        ((m = e[f]),
        (g = H.style[m]),
        l(m, "-") && (m = c(m)),
        H.style[m] !== n)
      ) {
        if (o || r(a, "undefined")) return i(), "pfx" == t ? m : !0;
        try {
          H.style[m] = a;
        } catch (y) {}
        if (H.style[m] != g) return i(), "pfx" == t ? m : !0;
      }
    return i(), !1;
  }
  function v(e, t, n, a, o) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + W.join(i + " ") + i).split(" ");
    return r(t, "string") || r(t, "undefined")
      ? g(s, t, a, o)
      : ((s = (e + " " + P.join(i + " ") + i).split(" ")), p(s, t, n));
  }
  function y(e, t, r) {
    return v(e, n, n, t, r);
  }
  var b = [],
    x = [],
    T = {
      _version: "3.3.1",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0,
      },
      _q: [],
      on: function (e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function (e, t, n) {
        x.push({ name: e, fn: t, options: n });
      },
      addAsyncTest: function (e) {
        x.push({ name: null, fn: e });
      },
    },
    Modernizr = function () {};
  (Modernizr.prototype = T),
    (Modernizr = new Modernizr()),
    Modernizr.addTest("applicationcache", "applicationCache" in e),
    Modernizr.addTest("geolocation", "geolocation" in navigator),
    Modernizr.addTest("history", function () {
      var t = navigator.userAgent;
      return (-1 === t.indexOf("Android 2.") &&
        -1 === t.indexOf("Android 4.0")) ||
        -1 === t.indexOf("Mobile Safari") ||
        -1 !== t.indexOf("Chrome") ||
        -1 !== t.indexOf("Windows Phone")
        ? e.history && "pushState" in e.history
        : !1;
    }),
    Modernizr.addTest("postmessage", "postMessage" in e),
    Modernizr.addTest(
      "svg",
      !!t.createElementNS &&
        !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
    );
  var w = !1;
  try {
    w = "WebSocket" in e && 2 === e.WebSocket.CLOSING;
  } catch (S) {}
  Modernizr.addTest("websockets", w),
    Modernizr.addTest("localstorage", function () {
      var e = "modernizr";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    }),
    Modernizr.addTest("sessionstorage", function () {
      var e = "modernizr";
      try {
        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0;
      } catch (t) {
        return !1;
      }
    }),
    Modernizr.addTest("websqldatabase", "openDatabase" in e),
    Modernizr.addTest("webworkers", "Worker" in e);
  var C = T._config.usePrefixes
    ? " -webkit- -moz- -o- -ms- ".split(" ")
    : ["", ""];
  T._prefixes = C;
  var E = t.documentElement,
    k = "svg" === E.nodeName.toLowerCase();
  k ||
    !(function (e, t) {
      function n(e, t) {
        var n = e.createElement("p"),
          r = e.getElementsByTagName("head")[0] || e.documentElement;
        return (
          (n.innerHTML = "x<style>" + t + "</style>"),
          r.insertBefore(n.lastChild, r.firstChild)
        );
      }
      function r() {
        var e = b.elements;
        return "string" == typeof e ? e.split(" ") : e;
      }
      function a(e, t) {
        var n = b.elements;
        "string" != typeof n && (n = n.join(" ")),
          "string" != typeof e && (e = e.join(" ")),
          (b.elements = n + " " + e),
          l(t);
      }
      function o(e) {
        var t = y[e[g]];
        return t || ((t = {}), v++, (e[g] = v), (y[v] = t)), t;
      }
      function i(e, n, r) {
        if ((n || (n = t), u)) return n.createElement(e);
        r || (r = o(n));
        var a;
        return (
          (a = r.cache[e]
            ? r.cache[e].cloneNode()
            : h.test(e)
            ? (r.cache[e] = r.createElem(e)).cloneNode()
            : r.createElem(e)),
          !a.canHaveChildren || m.test(e) || a.tagUrn
            ? a
            : r.frag.appendChild(a)
        );
      }
      function s(e, n) {
        if ((e || (e = t), u)) return e.createDocumentFragment();
        n = n || o(e);
        for (
          var a = n.frag.cloneNode(), i = 0, s = r(), c = s.length;
          c > i;
          i++
        )
          a.createElement(s[i]);
        return a;
      }
      function c(e, t) {
        t.cache ||
          ((t.cache = {}),
          (t.createElem = e.createElement),
          (t.createFrag = e.createDocumentFragment),
          (t.frag = t.createFrag())),
          (e.createElement = function (n) {
            return b.shivMethods ? i(n, e, t) : t.createElem(n);
          }),
          (e.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              r()
                .join()
                .replace(/[\w\-:]+/g, function (e) {
                  return (
                    t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                  );
                }) +
              ");return n}"
          )(b, t.frag));
      }
      function l(e) {
        e || (e = t);
        var r = o(e);
        return (
          !b.shivCSS ||
            d ||
            r.hasCSS ||
            (r.hasCSS = !!n(
              e,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          u || c(e, r),
          e
        );
      }
      var d,
        u,
        f = "3.7.3",
        p = e.html5 || {},
        m =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g = "_html5shiv",
        v = 0,
        y = {};
      !(function () {
        try {
          var e = t.createElement("a");
          (e.innerHTML = "<xyz></xyz>"),
            (d = "hidden" in e),
            (u =
              1 == e.childNodes.length ||
              (function () {
                t.createElement("a");
                var e = t.createDocumentFragment();
                return (
                  "undefined" == typeof e.cloneNode ||
                  "undefined" == typeof e.createDocumentFragment ||
                  "undefined" == typeof e.createElement
                );
              })());
        } catch (n) {
          (d = !0), (u = !0);
        }
      })();
      var b = {
        elements:
          p.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
        version: f,
        shivCSS: p.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: p.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: i,
        createDocumentFragment: s,
        addElements: a,
      };
      (e.html5 = b),
        l(t),
        "object" == typeof module && module.exports && (module.exports = b);
    })("undefined" != typeof e ? e : this, t);
  var _ = "Moz O ms Webkit",
    P = T._config.usePrefixes ? _.toLowerCase().split(" ") : [];
  T._domPrefixes = P;
  var z;
  !(function () {
    var e = {}.hasOwnProperty;
    z =
      r(e, "undefined") || r(e.call, "undefined")
        ? function (e, t) {
            return t in e && r(e.constructor.prototype[t], "undefined");
          }
        : function (t, n) {
            return e.call(t, n);
          };
  })(),
    (T._l = {}),
    (T.on = function (e, t) {
      this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) &&
          setTimeout(function () {
            Modernizr._trigger(e, Modernizr[e]);
          }, 0);
    }),
    (T._trigger = function (e, t) {
      if (this._l[e]) {
        var n = this._l[e];
        setTimeout(function () {
          var e, r;
          for (e = 0; e < n.length; e++) (r = n[e])(t);
        }, 0),
          delete this._l[e];
      }
    }),
    Modernizr._q.push(function () {
      T.addTest = i;
    });
  var N = (function () {
    function e(e, t) {
      var a;
      return e
        ? ((t && "string" != typeof t) || (t = s(t || "div")),
          (e = "on" + e),
          (a = e in t),
          !a &&
            r &&
            (t.setAttribute || (t = s("div")),
            t.setAttribute(e, ""),
            (a = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          a)
        : !1;
    }
    var r = !("onblur" in t.documentElement);
    return e;
  })();
  (T.hasEvent = N),
    Modernizr.addTest("hashchange", function () {
      return N("hashchange", e) === !1
        ? !1
        : t.documentMode === n || t.documentMode > 7;
    }),
    Modernizr.addTest("audio", function () {
      var e = s("audio"),
        t = !1;
      try {
        (t = !!e.canPlayType) &&
          ((t = new Boolean(t)),
          (t.ogg = e
            .canPlayType('audio/ogg; codecs="vorbis"')
            .replace(/^no$/, "")),
          (t.mp3 = e
            .canPlayType('audio/mpeg; codecs="mp3"')
            .replace(/^no$/, "")),
          (t.opus =
            e.canPlayType('audio/ogg; codecs="opus"') ||
            e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
          (t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, "")),
          (t.m4a = (
            e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
          ).replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest("canvas", function () {
      var e = s("canvas");
      return !(!e.getContext || !e.getContext("2d"));
    }),
    Modernizr.addTest("canvastext", function () {
      return Modernizr.canvas === !1
        ? !1
        : "function" == typeof s("canvas").getContext("2d").fillText;
    }),
    Modernizr.addTest("video", function () {
      var e = s("video"),
        t = !1;
      try {
        (t = !!e.canPlayType) &&
          ((t = new Boolean(t)),
          (t.ogg = e
            .canPlayType('video/ogg; codecs="theora"')
            .replace(/^no$/, "")),
          (t.h264 = e
            .canPlayType('video/mp4; codecs="avc1.42E01E"')
            .replace(/^no$/, "")),
          (t.webm = e
            .canPlayType('video/webm; codecs="vp8, vorbis"')
            .replace(/^no$/, "")),
          (t.vp9 = e
            .canPlayType('video/webm; codecs="vp9"')
            .replace(/^no$/, "")),
          (t.hls = e
            .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
            .replace(/^no$/, "")));
      } catch (n) {}
      return t;
    }),
    Modernizr.addTest("webgl", function () {
      var t = s("canvas"),
        n =
          "probablySupportsContext" in t
            ? "probablySupportsContext"
            : "supportsContext";
      return n in t
        ? t[n]("webgl") || t[n]("experimental-webgl")
        : "WebGLRenderingContext" in e;
    }),
    Modernizr.addTest("cssgradients", function () {
      for (
        var e,
          t = "background-image:",
          n = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
          r = "",
          a = 0,
          o = C.length - 1;
        o > a;
        a++
      )
        (e = 0 === a ? "to " : ""),
          (r += t + C[a] + "linear-gradient(" + e + "left top, #9f9, white);");
      Modernizr._config.usePrefixes && (r += t + "-webkit-" + n);
      var i = s("a"),
        c = i.style;
      return (c.cssText = r), ("" + c.backgroundImage).indexOf("gradient") > -1;
    }),
    Modernizr.addTest("multiplebgs", function () {
      var e = s("a").style;
      return (
        (e.cssText =
          "background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(e.background)
      );
    }),
    Modernizr.addTest("opacity", function () {
      var e = s("a").style;
      return (e.cssText = C.join("opacity:.55;")), /^0.55$/.test(e.opacity);
    }),
    Modernizr.addTest("rgba", function () {
      var e = s("a").style;
      return (
        (e.cssText = "background-color:rgba(150,255,150,.5)"),
        ("" + e.backgroundColor).indexOf("rgba") > -1
      );
    }),
    Modernizr.addTest("inlinesvg", function () {
      var e = s("div");
      return (
        (e.innerHTML = "<svg/>"),
        "http://www.w3.org/2000/svg" ==
          ("undefined" != typeof SVGRect &&
            e.firstChild &&
            e.firstChild.namespaceURI)
      );
    });
  var R = s("input"),
    $ =
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      ),
    A = {};
  Modernizr.input = (function (t) {
    for (var n = 0, r = t.length; r > n; n++) A[t[n]] = !!(t[n] in R);
    return A.list && (A.list = !(!s("datalist") || !e.HTMLDataListElement)), A;
  })($);
  var O =
      "search tel url email datetime date month week time datetime-local number range color".split(
        " "
      ),
    j = {};
  (Modernizr.inputtypes = (function (e) {
    for (var r, a, o, i = e.length, s = "1)", c = 0; i > c; c++)
      R.setAttribute("type", (r = e[c])),
        (o = "text" !== R.type && "style" in R),
        o &&
          ((R.value = s),
          (R.style.cssText = "position:absolute;visibility:hidden;"),
          /^range$/.test(r) && R.style.WebkitAppearance !== n
            ? (E.appendChild(R),
              (a = t.defaultView),
              (o =
                a.getComputedStyle &&
                "textfield" !== a.getComputedStyle(R, null).WebkitAppearance &&
                0 !== R.offsetHeight),
              E.removeChild(R))
            : /^(search|tel)$/.test(r) ||
              (o = /^(url|email)$/.test(r)
                ? R.checkValidity && R.checkValidity() === !1
                : R.value != s)),
        (j[e[c]] = !!o);
    return j;
  })(O)),
    Modernizr.addTest("hsla", function () {
      var e = s("a").style;
      return (
        (e.cssText = "background-color:hsla(120,40%,100%,.5)"),
        l(e.backgroundColor, "rgba") || l(e.backgroundColor, "hsla")
      );
    });
  var L = "CSS" in e && "supports" in e.CSS,
    M = "supportsCSS" in e;
  Modernizr.addTest("supports", L || M);
  var B = {}.toString;
  Modernizr.addTest("svgclippaths", function () {
    return (
      !!t.createElementNS &&
      /SVGClipPath/.test(
        B.call(t.createElementNS("http://www.w3.org/2000/svg", "clipPath"))
      )
    );
  }),
    Modernizr.addTest("smil", function () {
      return (
        !!t.createElementNS &&
        /SVGAnimate/.test(
          B.call(t.createElementNS("http://www.w3.org/2000/svg", "animate"))
        )
      );
    });
  var F = (function () {
    var t = e.matchMedia || e.msMatchMedia;
    return t
      ? function (e) {
          var n = t(e);
          return (n && n.matches) || !1;
        }
      : function (t) {
          var n = !1;
          return (
            u(
              "@media " + t + " { #modernizr { position: absolute; } }",
              function (t) {
                n =
                  "absolute" ==
                  (e.getComputedStyle
                    ? e.getComputedStyle(t, null)
                    : t.currentStyle
                  ).position;
              }
            ),
            n
          );
        };
  })();
  T.mq = F;
  var D = (T.testStyles = u);
  Modernizr.addTest("touchevents", function () {
    var n;
    if ("ontouchstart" in e || (e.DocumentTouch && t instanceof DocumentTouch))
      n = !0;
    else {
      var r = [
        "@media (",
        C.join("touch-enabled),("),
        "heartz",
        ")",
        "{#modernizr{top:9px;position:absolute}}",
      ].join("");
      D(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }
    return n;
  });
  var I = (function () {
    var e = navigator.userAgent,
      t = e.match(/applewebkit\/([0-9]+)/gi) && parseFloat(RegExp.$1),
      n = e.match(/w(eb)?osbrowser/gi),
      r =
        e.match(/windows phone/gi) &&
        e.match(/iemobile\/([0-9])+/gi) &&
        parseFloat(RegExp.$1) >= 9,
      a = 533 > t && e.match(/android/gi);
    return n || a || r;
  })();
  I
    ? Modernizr.addTest("fontface", !1)
    : D('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
        var r = t.getElementById("smodernizr"),
          a = r.sheet || r.styleSheet,
          o = a
            ? a.cssRules && a.cssRules[0]
              ? a.cssRules[0].cssText
              : a.cssText || ""
            : "",
          i = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);
        Modernizr.addTest("fontface", i);
      }),
    D(
      '#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',
      function (e) {
        Modernizr.addTest("generatedcontent", e.offsetHeight >= 7);
      }
    );
  var W = T._config.usePrefixes ? _.split(" ") : [];
  T._cssomPrefixes = W;
  var q = function (t) {
    var r,
      a = C.length,
      o = e.CSSRule;
    if ("undefined" == typeof o) return n;
    if (!t) return !1;
    if (
      ((t = t.replace(/^@/, "")),
      (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
      r in o)
    )
      return "@" + t;
    for (var i = 0; a > i; i++) {
      var s = C[i],
        c = s.toUpperCase() + "_" + r;
      if (c in o) return "@-" + s.toLowerCase() + "-" + t;
    }
    return !1;
  };
  T.atRule = q;
  var V = { elem: s("modernizr") };
  Modernizr._q.push(function () {
    delete V.elem;
  });
  var H = { style: V.elem.style };
  Modernizr._q.unshift(function () {
    delete H.style;
  });
  var U = (T.testProp = function (e, t, r) {
    return g([e], n, t, r);
  });
  Modernizr.addTest("textshadow", U("textShadow", "1px 1px")),
    (T.testAllProps = v);
  var G,
    J = (T.prefixed = function (e, t, n) {
      return 0 === e.indexOf("@")
        ? q(e)
        : (-1 != e.indexOf("-") && (e = c(e)), t ? v(e, t, n) : v(e, "pfx"));
    });
  try {
    G = J("indexedDB", e);
  } catch (S) {}
  Modernizr.addTest("indexeddb", !!G),
    G && Modernizr.addTest("indexeddb.deletedatabase", "deleteDatabase" in G),
    (T.testAllProps = y),
    Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
    Modernizr.addTest("backgroundsize", y("backgroundSize", "100%", !0)),
    Modernizr.addTest("borderimage", y("borderImage", "url() 1", !0)),
    Modernizr.addTest("borderradius", y("borderRadius", "0px", !0)),
    Modernizr.addTest("boxshadow", y("boxShadow", "1px 1px", !0)),
    (function () {
      Modernizr.addTest("csscolumns", function () {
        var e = !1,
          t = y("columnCount");
        try {
          (e = !!t) && (e = new Boolean(e));
        } catch (n) {}
        return e;
      });
      for (
        var e,
          t,
          n = [
            "Width",
            "Span",
            "Fill",
            "Gap",
            "Rule",
            "RuleColor",
            "RuleStyle",
            "RuleWidth",
            "BreakBefore",
            "BreakAfter",
            "BreakInside",
          ],
          r = 0;
        r < n.length;
        r++
      )
        (e = n[r].toLowerCase()),
          (t = y("column" + n[r])),
          ("breakbefore" === e || "breakafter" === e || "breakinside" == e) &&
            (t = t || y(n[r])),
          Modernizr.addTest("csscolumns." + e, t);
    })(),
    Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)),
    Modernizr.addTest("cssreflections", y("boxReflect", "above", !0)),
    Modernizr.addTest("csstransforms", function () {
      return (
        -1 === navigator.userAgent.indexOf("Android 2.") &&
        y("transform", "scale(1)", !0)
      );
    }),
    Modernizr.addTest("csstransforms3d", function () {
      var e = !!y("perspective", "1px", !0),
        t = Modernizr._config.usePrefixes;
      if (e && (!t || "webkitPerspective" in E.style)) {
        var n,
          r = "#modernizr{width:0;height:0}";
        Modernizr.supports
          ? (n = "@supports (perspective: 1px)")
          : ((n = "@media (transform-3d)"),
            t && (n += ",(-webkit-transform-3d)")),
          (n +=
            "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),
          D(r + n, function (t) {
            e = 7 === t.offsetWidth && 18 === t.offsetHeight;
          });
      }
      return e;
    }),
    Modernizr.addTest("csstransitions", y("transition", "all", !0)),
    a(),
    o(b),
    delete T.addTest,
    delete T.addAsyncTest;
  for (var Z = 0; Z < Modernizr._q.length; Z++) Modernizr._q[Z]();
  e.Modernizr = Modernizr;
})(window, document);
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (a, b, c) {
      var d = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        e = function (a, b, c) {
          var d,
            e,
            f = a.cycle;
          for (d in f)
            (e = f[d]),
              (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
          delete a.cycle;
        },
        f = function (a, b, d) {
          c.call(this, a, b, d),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = f.prototype.render);
        },
        g = 1e-10,
        h = c._internals,
        i = h.isSelector,
        j = h.isArray,
        k = (f.prototype = c.to({}, 0.1, {})),
        l = [];
      (f.version = "1.19.1"),
        (k.constructor = f),
        (k.kill()._gc = !1),
        (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
        (f.getTweensOf = c.getTweensOf),
        (f.lagSmoothing = c.lagSmoothing),
        (f.ticker = c.ticker),
        (f.render = c.render),
        (k.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            c.prototype.invalidate.call(this)
          );
        }),
        (k.updateTo = function (a, b) {
          var d,
            e = this.ratio,
            f = this.vars.immediateRender || a.immediateRender;
          b &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (d in a) this.vars[d] = a[d];
          if (this._initted || f)
            if (b) (this._initted = !1), f && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                c._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var g = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(g, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || f)
            )
              for (var h, i = 1 / (1 - e), j = this._firstPT; j; )
                (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
          return this;
        }),
        (k.render = function (a, b, c) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var d,
            e,
            f,
            i,
            j,
            k,
            l,
            m,
            n = this._dirty ? this.totalDuration() : this._totalDuration,
            o = this._time,
            p = this._totalTime,
            q = this._cycle,
            r = this._duration,
            s = this._rawPrevTime;
          if (
            (a >= n - 1e-7 && a >= 0
              ? ((this._totalTime = n),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = r),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((d = !0),
                  (e = "onComplete"),
                  (c = c || this._timeline.autoRemoveChildren)),
                0 === r &&
                  (this._initted || !this.vars.lazy || c) &&
                  (this._startTime === this._timeline._duration && (a = 0),
                  (0 > s ||
                    (0 >= a && a >= -1e-7) ||
                    (s === g && "isPause" !== this.data)) &&
                    s !== a &&
                    ((c = !0), s > g && (e = "onReverseComplete")),
                  (this._rawPrevTime = m = !b || a || s === a ? a : g)))
              : 1e-7 > a
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== p || (0 === r && s > 0)) &&
                  ((e = "onReverseComplete"), (d = this._reversed)),
                0 > a &&
                  ((this._active = !1),
                  0 === r &&
                    (this._initted || !this.vars.lazy || c) &&
                    (s >= 0 && (c = !0),
                    (this._rawPrevTime = m = !b || a || s === a ? a : g))),
                this._initted || (c = !0))
              : ((this._totalTime = this._time = a),
                0 !== this._repeat &&
                  ((i = r + this._repeatDelay),
                  (this._cycle = (this._totalTime / i) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / i &&
                    a >= p &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * i),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = r - this._time),
                  this._time > r
                    ? (this._time = r)
                    : this._time < 0 && (this._time = 0)),
                this._easeType
                  ? ((j = this._time / r),
                    (k = this._easeType),
                    (l = this._easePower),
                    (1 === k || (3 === k && j >= 0.5)) && (j = 1 - j),
                    3 === k && (j *= 2),
                    1 === l
                      ? (j *= j)
                      : 2 === l
                      ? (j *= j * j)
                      : 3 === l
                      ? (j *= j * j * j)
                      : 4 === l && (j *= j * j * j * j),
                    1 === k
                      ? (this.ratio = 1 - j)
                      : 2 === k
                      ? (this.ratio = j)
                      : this._time / r < 0.5
                      ? (this.ratio = j / 2)
                      : (this.ratio = 1 - j / 2))
                  : (this.ratio = this._ease.getRatio(this._time / r))),
            o === this._time && !c && q === this._cycle)
          )
            return void (
              p !== this._totalTime &&
              this._onUpdate &&
              (b || this._callback("onUpdate"))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !c &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = o),
                (this._totalTime = p),
                (this._rawPrevTime = s),
                (this._cycle = q),
                h.lazyTweens.push(this),
                void (this._lazy = [a, b])
              );
            this._time && !d
              ? (this.ratio = this._ease.getRatio(this._time / r))
              : d &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== o &&
                  a >= 0 &&
                  (this._active = !0)),
              0 === p &&
                (2 === this._initted && a > 0 && this._init(),
                this._startAt &&
                  (a >= 0
                    ? this._startAt.render(a, b, c)
                    : e || (e = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === r) &&
                  (b || this._callback("onStart"))),
              f = this._firstPT;
            f;

          )
            f.f
              ? f.t[f.p](f.c * this.ratio + f.s)
              : (f.t[f.p] = f.c * this.ratio + f.s),
              (f = f._next);
          this._onUpdate &&
            (0 > a &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(a, b, c),
            b || ((this._totalTime !== p || e) && this._callback("onUpdate"))),
            this._cycle !== q &&
              (b ||
                this._gc ||
                (this.vars.onRepeat && this._callback("onRepeat"))),
            e &&
              (!this._gc || c) &&
              (0 > a &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(a, b, c),
              d &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !b && this.vars[e] && this._callback(e),
              0 === r &&
                this._rawPrevTime === g &&
                m !== g &&
                (this._rawPrevTime = 0));
        }),
        (f.to = function (a, b, c) {
          return new f(a, b, c);
        }),
        (f.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new f(a, b, c)
          );
        }),
        (f.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new f(a, b, d)
          );
        }),
        (f.staggerTo = f.allTo =
          function (a, b, g, h, k, m, n) {
            h = h || 0;
            var o,
              p,
              q,
              r,
              s = 0,
              t = [],
              u = function () {
                g.onComplete &&
                  g.onComplete.apply(g.onCompleteScope || this, arguments),
                  k.apply(n || g.callbackScope || this, m || l);
              },
              v = g.cycle,
              w = g.startAt && g.startAt.cycle;
            for (
              j(a) ||
                ("string" == typeof a && (a = c.selector(a) || a),
                i(a) && (a = d(a))),
                a = a || [],
                0 > h && ((a = d(a)), a.reverse(), (h *= -1)),
                o = a.length - 1,
                q = 0;
              o >= q;
              q++
            ) {
              p = {};
              for (r in g) p[r] = g[r];
              if (
                (v &&
                  (e(p, a, q),
                  null != p.duration && ((b = p.duration), delete p.duration)),
                w)
              ) {
                w = p.startAt = {};
                for (r in g.startAt) w[r] = g.startAt[r];
                e(p.startAt, a, q);
              }
              (p.delay = s + (p.delay || 0)),
                q === o && k && (p.onComplete = u),
                (t[q] = new f(a[q], b, p)),
                (s += h);
            }
            return t;
          }),
        (f.staggerFrom = f.allFrom =
          function (a, b, c, d, e, g, h) {
            return (
              (c.runBackwards = !0),
              (c.immediateRender = 0 != c.immediateRender),
              f.staggerTo(a, b, c, d, e, g, h)
            );
          }),
        (f.staggerFromTo = f.allFromTo =
          function (a, b, c, d, e, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              f.staggerTo(a, b, d, e, g, h, i)
            );
          }),
        (f.delayedCall = function (a, b, c, d, e) {
          return new f(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (f.set = function (a, b) {
          return new f(a, 0, b);
        }),
        (f.isTweening = function (a) {
          return c.getTweensOf(a, !0).length > 0;
        });
      var m = function (a, b) {
          for (var d = [], e = 0, f = a._first; f; )
            f instanceof c
              ? (d[e++] = f)
              : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)),
              (f = f._next);
          return d;
        },
        n = (f.getAllTweens = function (b) {
          return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
        });
      (f.killAll = function (a, c, d, e) {
        null == c && (c = !0), null == d && (d = !0);
        var f,
          g,
          h,
          i = n(0 != e),
          j = i.length,
          k = c && d && e;
        for (h = 0; j > h; h++)
          (g = i[h]),
            (k ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              (a
                ? g.totalTime(g._reversed ? 0 : g.totalDuration())
                : g._enabled(!1, !1));
      }),
        (f.killChildTweensOf = function (a, b) {
          if (null != a) {
            var e,
              g,
              k,
              l,
              m,
              n = h.tweenLookup;
            if (
              ("string" == typeof a && (a = c.selector(a) || a),
              i(a) && (a = d(a)),
              j(a))
            )
              for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
            else {
              e = [];
              for (k in n)
                for (g = n[k].target.parentNode; g; )
                  g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
              for (m = e.length, l = 0; m > l; l++)
                b && e[l].totalTime(e[l].totalDuration()),
                  e[l]._enabled(!1, !1);
            }
          }
        });
      var o = function (a, c, d, e) {
        (c = c !== !1), (d = d !== !1), (e = e !== !1);
        for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; )
          (g = h[j]),
            (i ||
              g instanceof b ||
              ((f = g.target === g.vars.onComplete) && d) ||
              (c && !f)) &&
              g.paused(a);
      };
      return (
        (f.pauseAll = function (a, b, c) {
          o(!0, a, b, c);
        }),
        (f.resumeAll = function (a, b, c) {
          o(!1, a, b, c);
        }),
        (f.globalTimeScale = function (b) {
          var d = a._rootTimeline,
            e = c.ticker.time;
          return arguments.length
            ? ((b = b || g),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d = a._rootFramesTimeline),
              (e = c.ticker.frame),
              (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
              (d._timeScale = a._rootTimeline._timeScale = b),
              b)
            : d._timeScale;
        }),
        (k.progress = function (a, b) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                  this._cycle * (this._duration + this._repeatDelay),
                b
              )
            : this._time / this.duration();
        }),
        (k.totalProgress = function (a, b) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * a, b)
            : this._totalTime / this.totalDuration();
        }),
        (k.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              a > this._duration && (a = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (a =
                    this._duration -
                    a +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (a += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(a, b))
            : this._time;
        }),
        (k.duration = function (b) {
          return arguments.length
            ? a.prototype.duration.call(this, b)
            : this._duration;
        }),
        (k.totalDuration = function (a) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (a - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (k.repeat = function (a) {
          return arguments.length
            ? ((this._repeat = a), this._uncache(!0))
            : this._repeat;
        }),
        (k.repeatDelay = function (a) {
          return arguments.length
            ? ((this._repeatDelay = a), this._uncache(!0))
            : this._repeatDelay;
        }),
        (k.yoyo = function (a) {
          return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
        }),
        f
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (a, b, c) {
        var d = function (a) {
            b.call(this, a),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var c,
              d,
              e = this.vars;
            for (d in e)
              (c = e[d]),
                i(c) &&
                  -1 !== c.join("").indexOf("{self}") &&
                  (e[d] = this._swapSelfInParams(c));
            i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
          },
          e = 1e-10,
          f = c._internals,
          g = (d._internals = {}),
          h = f.isSelector,
          i = f.isArray,
          j = f.lazyTweens,
          k = f.lazyRender,
          l = _gsScope._gsDefine.globals,
          m = function (a) {
            var b,
              c = {};
            for (b in a) c[b] = a[b];
            return c;
          },
          n = function (a, b, c) {
            var d,
              e,
              f = a.cycle;
            for (d in f)
              (e = f[d]),
                (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
            delete a.cycle;
          },
          o = (g.pauseCallback = function () {}),
          p = function (a) {
            var b,
              c = [],
              d = a.length;
            for (b = 0; b !== d; c.push(a[b++]));
            return c;
          },
          q = (d.prototype = new b());
        return (
          (d.version = "1.19.1"),
          (q.constructor = d),
          (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
          (q.to = function (a, b, d, e) {
            var f = (d.repeat && l.TweenMax) || c;
            return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
          }),
          (q.from = function (a, b, d, e) {
            return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
          }),
          (q.fromTo = function (a, b, d, e, f) {
            var g = (e.repeat && l.TweenMax) || c;
            return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
          }),
          (q.staggerTo = function (a, b, e, f, g, i, j, k) {
            var l,
              o,
              q = new d({
                onComplete: i,
                onCompleteParams: j,
                callbackScope: k,
                smoothChildTiming: this.smoothChildTiming,
              }),
              r = e.cycle;
            for (
              "string" == typeof a && (a = c.selector(a) || a),
                a = a || [],
                h(a) && (a = p(a)),
                f = f || 0,
                0 > f && ((a = p(a)), a.reverse(), (f *= -1)),
                o = 0;
              o < a.length;
              o++
            )
              (l = m(e)),
                l.startAt &&
                  ((l.startAt = m(l.startAt)),
                  l.startAt.cycle && n(l.startAt, a, o)),
                r &&
                  (n(l, a, o),
                  null != l.duration && ((b = l.duration), delete l.duration)),
                q.to(a[o], b, l, o * f);
            return this.add(q, g);
          }),
          (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
            return (
              (c.immediateRender = 0 != c.immediateRender),
              (c.runBackwards = !0),
              this.staggerTo(a, b, c, d, e, f, g, h)
            );
          }),
          (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
            return (
              (d.startAt = c),
              (d.immediateRender =
                0 != d.immediateRender && 0 != c.immediateRender),
              this.staggerTo(a, b, d, e, f, g, h, i)
            );
          }),
          (q.call = function (a, b, d, e) {
            return this.add(c.delayedCall(0, a, b, d), e);
          }),
          (q.set = function (a, b, d) {
            return (
              (d = this._parseTimeOrLabel(d, 0, !0)),
              null == b.immediateRender &&
                (b.immediateRender = d === this._time && !this._paused),
              this.add(new c(a, 0, b), d)
            );
          }),
          (d.exportRoot = function (a, b) {
            (a = a || {}),
              null == a.smoothChildTiming && (a.smoothChildTiming = !0);
            var e,
              f,
              g = new d(a),
              h = g._timeline;
            for (
              null == b && (b = !0),
                h._remove(g, !0),
                g._startTime = 0,
                g._rawPrevTime = g._time = g._totalTime = h._time,
                e = h._first;
              e;

            )
              (f = e._next),
                (b && e instanceof c && e.target === e.vars.onComplete) ||
                  g.add(e, e._startTime - e._delay),
                (e = f);
            return h.add(g, 0), g;
          }),
          (q.add = function (e, f, g, h) {
            var j, k, l, m, n, o;
            if (
              ("number" != typeof f &&
                (f = this._parseTimeOrLabel(f, 0, !0, e)),
              !(e instanceof a))
            ) {
              if (e instanceof Array || (e && e.push && i(e))) {
                for (
                  g = g || "normal", h = h || 0, j = f, k = e.length, l = 0;
                  k > l;
                  l++
                )
                  i((m = e[l])) && (m = new d({ tweens: m })),
                    this.add(m, j),
                    "string" != typeof m &&
                      "function" != typeof m &&
                      ("sequence" === g
                        ? (j = m._startTime + m.totalDuration() / m._timeScale)
                        : "start" === g && (m._startTime -= m.delay())),
                    (j += h);
                return this._uncache(!0);
              }
              if ("string" == typeof e) return this.addLabel(e, f);
              if ("function" != typeof e)
                throw (
                  "Cannot add " +
                  e +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              e = c.delayedCall(0, e);
            }
            if (
              (b.prototype.add.call(this, e, f),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (n = this, o = n.rawTime() > e._startTime; n._timeline; )
                o && n._timeline.smoothChildTiming
                  ? n.totalTime(n._totalTime, !0)
                  : n._gc && n._enabled(!0, !1),
                  (n = n._timeline);
            return this;
          }),
          (q.remove = function (b) {
            if (b instanceof a) {
              this._remove(b, !1);
              var c = (b._timeline = b.vars.useFrames
                ? a._rootFramesTimeline
                : a._rootTimeline);
              return (
                (b._startTime =
                  (b._paused ? b._pauseTime : c._time) -
                  (b._reversed
                    ? b.totalDuration() - b._totalTime
                    : b._totalTime) /
                    b._timeScale),
                this
              );
            }
            if (b instanceof Array || (b && b.push && i(b))) {
              for (var d = b.length; --d > -1; ) this.remove(b[d]);
              return this;
            }
            return "string" == typeof b
              ? this.removeLabel(b)
              : this.kill(null, b);
          }),
          (q._remove = function (a, c) {
            b.prototype._remove.call(this, a, c);
            var d = this._last;
            return (
              d
                ? this._time > this.duration() &&
                  ((this._time = this._duration),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (q.append = function (a, b) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
          }),
          (q.insert = q.insertMultiple =
            function (a, b, c, d) {
              return this.add(a, b || 0, c, d);
            }),
          (q.appendMultiple = function (a, b, c, d) {
            return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
          }),
          (q.addLabel = function (a, b) {
            return (this._labels[a] = this._parseTimeOrLabel(b)), this;
          }),
          (q.addPause = function (a, b, d, e) {
            var f = c.delayedCall(0, o, d, e || this);
            return (
              (f.vars.onComplete = f.vars.onReverseComplete = b),
              (f.data = "isPause"),
              (this._hasPause = !0),
              this.add(f, a)
            );
          }),
          (q.removeLabel = function (a) {
            return delete this._labels[a], this;
          }),
          (q.getLabelTime = function (a) {
            return null != this._labels[a] ? this._labels[a] : -1;
          }),
          (q._parseTimeOrLabel = function (b, c, d, e) {
            var f;
            if (e instanceof a && e.timeline === this) this.remove(e);
            else if (e && (e instanceof Array || (e.push && i(e))))
              for (f = e.length; --f > -1; )
                e[f] instanceof a &&
                  e[f].timeline === this &&
                  this.remove(e[f]);
            if ("string" == typeof c)
              return this._parseTimeOrLabel(
                c,
                d && "number" == typeof b && null == this._labels[c]
                  ? b - this.duration()
                  : 0,
                d
              );
            if (
              ((c = c || 0),
              "string" != typeof b || (!isNaN(b) && null == this._labels[b]))
            )
              null == b && (b = this.duration());
            else {
              if (((f = b.indexOf("=")), -1 === f))
                return null == this._labels[b]
                  ? d
                    ? (this._labels[b] = this.duration() + c)
                    : c
                  : this._labels[b] + c;
              (c =
                parseInt(b.charAt(f - 1) + "1", 10) * Number(b.substr(f + 1))),
                (b =
                  f > 1
                    ? this._parseTimeOrLabel(b.substr(0, f - 1), 0, d)
                    : this.duration());
            }
            return Number(b) + c;
          }),
          (q.seek = function (a, b) {
            return this.totalTime(
              "number" == typeof a ? a : this._parseTimeOrLabel(a),
              b !== !1
            );
          }),
          (q.stop = function () {
            return this.paused(!0);
          }),
          (q.gotoAndPlay = function (a, b) {
            return this.play(a, b);
          }),
          (q.gotoAndStop = function (a, b) {
            return this.pause(a, b);
          }),
          (q.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              g,
              h,
              i,
              l,
              m,
              n = this._dirty ? this.totalDuration() : this._totalDuration,
              o = this._time,
              p = this._startTime,
              q = this._timeScale,
              r = this._paused;
            if (a >= n - 1e-7 && a >= 0)
              (this._totalTime = this._time = n),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (h = "onComplete"),
                  (i = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === e) &&
                    this._rawPrevTime !== a &&
                    this._first &&
                    ((i = !0),
                    this._rawPrevTime > e && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                (a = n + 1e-4);
            else if (1e-7 > a)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== o ||
                  (0 === this._duration &&
                    this._rawPrevTime !== e &&
                    (this._rawPrevTime > 0 ||
                      (0 > a && this._rawPrevTime >= 0)))) &&
                  ((h = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((i = f = !0), (h = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (i = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !b || a || this._rawPrevTime === a
                      ? a
                      : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (i = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !b) {
                if (a >= o)
                  for (d = this._first; d && d._startTime <= a && !l; )
                    d._duration ||
                      "isPause" !== d.data ||
                      d.ratio ||
                      (0 === d._startTime && 0 === this._rawPrevTime) ||
                      (l = d),
                      (d = d._next);
                else
                  for (d = this._last; d && d._startTime >= a && !l; )
                    d._duration ||
                      ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)),
                      (d = d._prev);
                l &&
                  ((this._time = a = l._startTime),
                  (this._totalTime =
                    a +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = a;
            }
            if ((this._time !== o && this._first) || c || i || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== o &&
                    a > 0 &&
                    (this._active = !0)),
                0 === o &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    b ||
                    this._callback("onStart")),
                (m = this._time),
                m >= o)
              )
                for (
                  d = this._first;
                  d &&
                  ((g = d._next), m === this._time && (!this._paused || r));

                )
                  (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                    (l === d && this.pause(),
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c)),
                    (d = g);
              else
                for (
                  d = this._last;
                  d &&
                  ((g = d._prev), m === this._time && (!this._paused || r));

                ) {
                  if (
                    d._active ||
                    (d._startTime <= o && !d._paused && !d._gc)
                  ) {
                    if (l === d) {
                      for (l = d._prev; l && l.endTime() > this._time; )
                        l.render(
                          l._reversed
                            ? l.totalDuration() -
                                (a - l._startTime) * l._timeScale
                            : (a - l._startTime) * l._timeScale,
                          b,
                          c
                        ),
                          (l = l._prev);
                      (l = null), this.pause();
                    }
                    d._reversed
                      ? d.render(
                          (d._dirty ? d.totalDuration() : d._totalDuration) -
                            (a - d._startTime) * d._timeScale,
                          b,
                          c
                        )
                      : d.render((a - d._startTime) * d._timeScale, b, c);
                  }
                  d = g;
                }
              this._onUpdate &&
                (b || (j.length && k(), this._callback("onUpdate"))),
                h &&
                  (this._gc ||
                    ((p === this._startTime || q !== this._timeScale) &&
                      (0 === this._time || n >= this.totalDuration()) &&
                      (f &&
                        (j.length && k(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !b && this.vars[h] && this._callback(h))));
            }
          }),
          (q._hasPausedChild = function () {
            for (var a = this._first; a; ) {
              if (a._paused || (a instanceof d && a._hasPausedChild()))
                return !0;
              a = a._next;
            }
            return !1;
          }),
          (q.getChildren = function (a, b, d, e) {
            e = e || -9999999999;
            for (var f = [], g = this._first, h = 0; g; )
              g._startTime < e ||
                (g instanceof c
                  ? b !== !1 && (f[h++] = g)
                  : (d !== !1 && (f[h++] = g),
                    a !== !1 &&
                      ((f = f.concat(g.getChildren(!0, b, d))),
                      (h = f.length)))),
                (g = g._next);
            return f;
          }),
          (q.getTweensOf = function (a, b) {
            var d,
              e,
              f = this._gc,
              g = [],
              h = 0;
            for (
              f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length;
              --e > -1;

            )
              (d[e].timeline === this || (b && this._contains(d[e]))) &&
                (g[h++] = d[e]);
            return f && this._enabled(!1, !0), g;
          }),
          (q.recent = function () {
            return this._recent;
          }),
          (q._contains = function (a) {
            for (var b = a.timeline; b; ) {
              if (b === this) return !0;
              b = b.timeline;
            }
            return !1;
          }),
          (q.shiftChildren = function (a, b, c) {
            c = c || 0;
            for (var d, e = this._first, f = this._labels; e; )
              e._startTime >= c && (e._startTime += a), (e = e._next);
            if (b) for (d in f) f[d] >= c && (f[d] += a);
            return this._uncache(!0);
          }),
          (q._kill = function (a, b) {
            if (!a && !b) return this._enabled(!1, !1);
            for (
              var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1),
                d = c.length,
                e = !1;
              --d > -1;

            )
              c[d]._kill(a, b) && (e = !0);
            return e;
          }),
          (q.clear = function (a) {
            var b = this.getChildren(!1, !0, !0),
              c = b.length;
            for (this._time = this._totalTime = 0; --c > -1; )
              b[c]._enabled(!1, !1);
            return a !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (q.invalidate = function () {
            for (var b = this._first; b; ) b.invalidate(), (b = b._next);
            return a.prototype.invalidate.call(this);
          }),
          (q._enabled = function (a, c) {
            if (a === this._gc)
              for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
            return b.prototype._enabled.call(this, a, c);
          }),
          (q.totalTime = function (b, c, d) {
            this._forcingPlayhead = !0;
            var e = a.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (q.duration = function (a) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== a &&
                  this.timeScale(this._duration / a),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (q.totalDuration = function (a) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                  (b = e._prev),
                    e._dirty && e.totalDuration(),
                    e._startTime > f && this._sortChildren && !e._paused
                      ? this.add(e, e._startTime - e._delay)
                      : (f = e._startTime),
                    e._startTime < 0 &&
                      !e._paused &&
                      ((d -= e._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += e._startTime / this._timeScale),
                      this.shiftChildren(-e._startTime, !1, -9999999999),
                      (f = 0)),
                    (c = e._startTime + e._totalDuration / e._timeScale),
                    c > d && (d = c),
                    (e = b);
                (this._duration = this._totalDuration = d), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return a && this.totalDuration()
              ? this.timeScale(this._totalDuration / a)
              : this;
          }),
          (q.paused = function (b) {
            if (!b)
              for (var c = this._first, d = this._time; c; )
                c._startTime === d &&
                  "isPause" === c.data &&
                  (c._rawPrevTime = 0),
                  (c = c._next);
            return a.prototype.paused.apply(this, arguments);
          }),
          (q.usesFrames = function () {
            for (var b = this._timeline; b._timeline; ) b = b._timeline;
            return b === a._rootFramesTimeline;
          }),
          (q.rawTime = function (a) {
            return a &&
              (this._paused ||
                (this._repeat && this.time() > 0 && this.totalProgress() < 1))
              ? this._totalTime % (this._duration + this._repeatDelay)
              : this._paused
              ? this._totalTime
              : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
          }),
          d
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (a, b, c) {
        var d = function (b) {
            a.call(this, b),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          e = 1e-10,
          f = b._internals,
          g = f.lazyTweens,
          h = f.lazyRender,
          i = _gsScope._gsDefine.globals,
          j = new c(null, null, 1, 0),
          k = (d.prototype = new a());
        return (
          (k.constructor = d),
          (k.kill()._gc = !1),
          (d.version = "1.19.1"),
          (k.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              a.prototype.invalidate.call(this)
            );
          }),
          (k.addCallback = function (a, c, d, e) {
            return this.add(b.delayedCall(0, a, d, e), c);
          }),
          (k.removeCallback = function (a, b) {
            if (a)
              if (null == b) this._kill(null, a);
              else
                for (
                  var c = this.getTweensOf(a, !1),
                    d = c.length,
                    e = this._parseTimeOrLabel(b);
                  --d > -1;

                )
                  c[d]._startTime === e && c[d]._enabled(!1, !1);
            return this;
          }),
          (k.removePause = function (b) {
            return this.removeCallback(a._internals.pauseCallback, b);
          }),
          (k.tweenTo = function (a, c) {
            c = c || {};
            var d,
              e,
              f,
              g = {
                ease: j,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              },
              h = (c.repeat && i.TweenMax) || b;
            for (e in c) g[e] = c[e];
            return (
              (g.time = this._parseTimeOrLabel(a)),
              (d =
                Math.abs(Number(g.time) - this._time) / this._timeScale ||
                0.001),
              (f = new h(this, d, g)),
              (g.onStart = function () {
                f.target.paused(!0),
                  f.vars.time !== f.target.time() &&
                    d === f.duration() &&
                    f.duration(
                      Math.abs(f.vars.time - f.target.time()) /
                        f.target._timeScale
                    ),
                  c.onStart &&
                    c.onStart.apply(
                      c.onStartScope || c.callbackScope || f,
                      c.onStartParams || []
                    );
              }),
              f
            );
          }),
          (k.tweenFromTo = function (a, b, c) {
            (c = c || {}),
              (a = this._parseTimeOrLabel(a)),
              (c.startAt = {
                onComplete: this.seek,
                onCompleteParams: [a],
                callbackScope: this,
              }),
              (c.immediateRender = c.immediateRender !== !1);
            var d = this.tweenTo(b, c);
            return d.duration(
              Math.abs(d.vars.time - a) / this._timeScale || 0.001
            );
          }),
          (k.render = function (a, b, c) {
            this._gc && this._enabled(!0, !1);
            var d,
              f,
              i,
              j,
              k,
              l,
              m,
              n,
              o = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._duration,
              q = this._time,
              r = this._totalTime,
              s = this._startTime,
              t = this._timeScale,
              u = this._rawPrevTime,
              v = this._paused,
              w = this._cycle;
            if (a >= o - 1e-7 && a >= 0)
              this._locked ||
                ((this._totalTime = o), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((f = !0),
                  (j = "onComplete"),
                  (k = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= a && a >= -1e-7) || 0 > u || u === e) &&
                    u !== a &&
                    this._first &&
                    ((k = !0), u > e && (j = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !b || a || this._rawPrevTime === a ? a : e),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = a = 0)
                  : ((this._time = p), (a = p + 1e-4));
            else if (1e-7 > a)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== q ||
                  (0 === p &&
                    u !== e &&
                    (u > 0 || (0 > a && u >= 0)) &&
                    !this._locked)) &&
                  ((j = "onReverseComplete"), (f = this._reversed)),
                0 > a)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((k = f = !0), (j = "onReverseComplete"))
                    : u >= 0 && this._first && (k = !0),
                  (this._rawPrevTime = a);
              else {
                if (
                  ((this._rawPrevTime =
                    p || !b || a || this._rawPrevTime === a ? a : e),
                  0 === a && f)
                )
                  for (d = this._first; d && 0 === d._startTime; )
                    d._duration || (f = !1), (d = d._next);
                (a = 0), this._initted || (k = !0);
              }
            else if (
              (0 === p && 0 > u && (k = !0),
              (this._time = this._rawPrevTime = a),
              this._locked ||
                ((this._totalTime = a),
                0 !== this._repeat &&
                  ((l = p + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    a >= r &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = p - this._time),
                  this._time > p
                    ? ((this._time = p), (a = p + 1e-4))
                    : this._time < 0
                    ? (this._time = a = 0)
                    : (a = this._time))),
              this._hasPause && !this._forcingPlayhead && !b && p > a)
            ) {
              if (
                ((a = this._time),
                a >= q || (this._repeat && w !== this._cycle))
              )
                for (d = this._first; d && d._startTime <= a && !m; )
                  d._duration ||
                    "isPause" !== d.data ||
                    d.ratio ||
                    (0 === d._startTime && 0 === this._rawPrevTime) ||
                    (m = d),
                    (d = d._next);
              else
                for (d = this._last; d && d._startTime >= a && !m; )
                  d._duration ||
                    ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)),
                    (d = d._prev);
              m &&
                ((this._time = a = m._startTime),
                (this._totalTime =
                  a + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== w && !this._locked) {
              var x = this._yoyo && 0 !== (1 & w),
                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                z = this._totalTime,
                A = this._cycle,
                B = this._rawPrevTime,
                C = this._time;
              if (
                ((this._totalTime = w * p),
                this._cycle < w ? (x = !x) : (this._totalTime += p),
                (this._time = q),
                (this._rawPrevTime = 0 === p ? u - 1e-4 : u),
                (this._cycle = w),
                (this._locked = !0),
                (q = x ? 0 : p),
                this.render(q, b, 0 === p),
                b ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    ((this._cycle = A),
                    (this._locked = !1),
                    this._callback("onRepeat"))),
                q !== this._time)
              )
                return;
              if (
                (y &&
                  ((this._cycle = w),
                  (this._locked = !0),
                  (q = x ? p + 1e-4 : -1e-4),
                  this.render(q, !0, !1)),
                (this._locked = !1),
                this._paused && !v)
              )
                return;
              (this._time = C),
                (this._totalTime = z),
                (this._cycle = A),
                (this._rawPrevTime = B);
            }
            if (!((this._time !== q && this._first) || c || k || m))
              return void (
                r !== this._totalTime &&
                this._onUpdate &&
                (b || this._callback("onUpdate"))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== r &&
                  a > 0 &&
                  (this._active = !0)),
              0 === r &&
                this.vars.onStart &&
                ((0 === this._totalTime && this._totalDuration) ||
                  b ||
                  this._callback("onStart")),
              (n = this._time),
              n >= q)
            )
              for (
                d = this._first;
                d && ((i = d._next), n === this._time && (!this._paused || v));

              )
                (d._active ||
                  (d._startTime <= this._time && !d._paused && !d._gc)) &&
                  (m === d && this.pause(),
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c)),
                  (d = i);
            else
              for (
                d = this._last;
                d && ((i = d._prev), n === this._time && (!this._paused || v));

              ) {
                if (d._active || (d._startTime <= q && !d._paused && !d._gc)) {
                  if (m === d) {
                    for (m = d._prev; m && m.endTime() > this._time; )
                      m.render(
                        m._reversed
                          ? m.totalDuration() -
                              (a - m._startTime) * m._timeScale
                          : (a - m._startTime) * m._timeScale,
                        b,
                        c
                      ),
                        (m = m._prev);
                    (m = null), this.pause();
                  }
                  d._reversed
                    ? d.render(
                        (d._dirty ? d.totalDuration() : d._totalDuration) -
                          (a - d._startTime) * d._timeScale,
                        b,
                        c
                      )
                    : d.render((a - d._startTime) * d._timeScale, b, c);
                }
                d = i;
              }
            this._onUpdate &&
              (b || (g.length && h(), this._callback("onUpdate"))),
              j &&
                (this._locked ||
                  this._gc ||
                  ((s === this._startTime || t !== this._timeScale) &&
                    (0 === this._time || o >= this.totalDuration()) &&
                    (f &&
                      (g.length && h(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !b && this.vars[j] && this._callback(j))));
          }),
          (k.getActive = function (a, b, c) {
            null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
            var d,
              e,
              f = [],
              g = this.getChildren(a, b, c),
              h = 0,
              i = g.length;
            for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
            return f;
          }),
          (k.getLabelAfter = function (a) {
            a || (0 !== a && (a = this._time));
            var b,
              c = this.getLabelsArray(),
              d = c.length;
            for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
            return null;
          }),
          (k.getLabelBefore = function (a) {
            null == a && (a = this._time);
            for (var b = this.getLabelsArray(), c = b.length; --c > -1; )
              if (b[c].time < a) return b[c].name;
            return null;
          }),
          (k.getLabelsArray = function () {
            var a,
              b = [],
              c = 0;
            for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
            return (
              b.sort(function (a, b) {
                return a.time - b.time;
              }),
              b
            );
          }),
          (k.invalidate = function () {
            return (this._locked = !1), a.prototype.invalidate.call(this);
          }),
          (k.progress = function (a, b) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) +
                    this._cycle * (this._duration + this._repeatDelay),
                  b
                )
              : this._time / this.duration();
          }),
          (k.totalProgress = function (a, b) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * a, b)
              : this._totalTime / this.totalDuration();
          }),
          (k.totalDuration = function (b) {
            return arguments.length
              ? -1 !== this._repeat && b
                ? this.timeScale(this.totalDuration() / b)
                : this
              : (this._dirty &&
                  (a.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (k.time = function (a, b) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                a > this._duration && (a = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (a =
                      this._duration -
                      a +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (a += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(a, b))
              : this._time;
          }),
          (k.repeat = function (a) {
            return arguments.length
              ? ((this._repeat = a), this._uncache(!0))
              : this._repeat;
          }),
          (k.repeatDelay = function (a) {
            return arguments.length
              ? ((this._repeatDelay = a), this._uncache(!0))
              : this._repeatDelay;
          }),
          (k.yoyo = function (a) {
            return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
          }),
          (k.currentLabel = function (a) {
            return arguments.length
              ? this.seek(a, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          d
        );
      },
      !0
    ),
    (function () {
      var a = 180 / Math.PI,
        b = [],
        c = [],
        d = [],
        e = {},
        f = _gsScope._gsDefine.globals,
        g = function (a, b, c, d) {
          c === d && (c = d - (d - b) / 1e6),
            a === b && (b = a + (c - a) / 1e6),
            (this.a = a),
            (this.b = b),
            (this.c = c),
            (this.d = d),
            (this.da = d - a),
            (this.ca = c - a),
            (this.ba = b - a);
        },
        h =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        i = function (a, b, c, d) {
          var e = { a: a },
            f = {},
            g = {},
            h = { c: d },
            i = (a + b) / 2,
            j = (b + c) / 2,
            k = (c + d) / 2,
            l = (i + j) / 2,
            m = (j + k) / 2,
            n = (m - l) / 8;
          return (
            (e.b = i + (a - i) / 4),
            (f.b = l + n),
            (e.c = f.a = (e.b + f.b) / 2),
            (f.c = g.a = (l + m) / 2),
            (g.b = m - n),
            (h.b = k + (d - k) / 4),
            (g.c = h.a = (g.b + h.b) / 2),
            [e, f, g, h]
          );
        },
        j = function (a, e, f, g, h) {
          var j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w = a.length - 1,
            x = 0,
            y = a[0].a;
          for (j = 0; w > j; j++)
            (n = a[x]),
              (k = n.a),
              (l = n.d),
              (m = a[x + 1].d),
              h
                ? ((t = b[j]),
                  (u = c[j]),
                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                  (q =
                    l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                : ((o = l - (l - k) * e * 0.5),
                  (p = l + (m - l) * e * 0.5),
                  (q = l - (o + p) / 2)),
              (o += q),
              (p += q),
              (n.c = r = o),
              0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
              (n.da = l - k),
              (n.ca = r - k),
              (n.ba = y - k),
              f
                ? ((s = i(k, y, r, l)),
                  a.splice(x, 1, s[0], s[1], s[2], s[3]),
                  (x += 4))
                : x++,
              (y = p);
          (n = a[x]),
            (n.b = y),
            (n.c = y + 0.4 * (n.d - y)),
            (n.da = n.d - n.a),
            (n.ca = n.c - n.a),
            (n.ba = y - n.a),
            f &&
              ((s = i(n.a, y, n.c, n.d)),
              a.splice(x, 1, s[0], s[1], s[2], s[3]));
        },
        k = function (a, d, e, f) {
          var h,
            i,
            j,
            k,
            l,
            m,
            n = [];
          if (f)
            for (a = [f].concat(a), i = a.length; --i > -1; )
              "string" == typeof (m = a[i][d]) &&
                "=" === m.charAt(1) &&
                (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
          if (((h = a.length - 2), 0 > h))
            return (n[0] = new g(a[0][d], 0, 0, a[-1 > h ? 0 : 1][d])), n;
          for (i = 0; h > i; i++)
            (j = a[i][d]),
              (k = a[i + 1][d]),
              (n[i] = new g(j, 0, 0, k)),
              e &&
                ((l = a[i + 2][d]),
                (b[i] = (b[i] || 0) + (k - j) * (k - j)),
                (c[i] = (c[i] || 0) + (l - k) * (l - k)));
          return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
        },
        l = function (a, f, g, i, l, m) {
          var n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v = {},
            w = [],
            x = m || a[0];
          (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
          for (o in a[0]) w.push(o);
          if (a.length > 1) {
            for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
              if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                t = !1;
                break;
              }
            t &&
              ((a = a.concat()),
              m && a.unshift(m),
              a.push(a[1]),
              (m = a[a.length - 3]));
          }
          for (b.length = c.length = d.length = 0, n = w.length; --n > -1; )
            (o = w[n]),
              (e[o] = -1 !== l.indexOf("," + o + ",")),
              (v[o] = k(a, o, e[o], m));
          for (n = b.length; --n > -1; )
            (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
          if (!i) {
            for (n = w.length; --n > -1; )
              if (e[o])
                for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++)
                  (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0),
                    (d[q] = (d[q] || 0) + r * r);
            for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
          }
          for (n = w.length, q = g ? 4 : 1; --n > -1; )
            (o = w[n]),
              (p = v[o]),
              j(p, f, g, i, e[o]),
              t && (p.splice(0, q), p.splice(p.length - q, q));
          return v;
        },
        m = function (a, b, c) {
          b = b || "soft";
          var d,
            e,
            f,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p = {},
            q = "cubic" === b ? 3 : 2,
            r = "soft" === b,
            s = [];
          if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1))
            throw "invalid Bezier data";
          for (m in a[0]) s.push(m);
          for (j = s.length; --j > -1; ) {
            for (
              m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0;
              l > k;
              k++
            )
              (d =
                null == c
                  ? a[k][m]
                  : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1)
                  ? c[m] + Number(o.charAt(0) + o.substr(2))
                  : Number(o)),
                r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2),
                (i[n++] = d);
            for (l = n - q + 1, n = 0, k = 0; l > k; k += q)
              (d = i[k]),
                (e = i[k + 1]),
                (f = i[k + 2]),
                (h = 2 === q ? 0 : i[k + 3]),
                (i[n++] = o =
                  3 === q
                    ? new g(d, e, f, h)
                    : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
            i.length = n;
          }
          return p;
        },
        n = function (a, b, c) {
          for (
            var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length;
            --p > -1;

          )
            for (
              m = a[p],
                f = m.a,
                g = m.d - f,
                h = m.c - f,
                i = m.b - f,
                d = e = 0,
                k = 1;
              c >= k;
              k++
            )
              (j = o * k),
                (l = 1 - j),
                (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)),
                (n = p * c + k - 1),
                (b[n] = (b[n] || 0) + d * d);
        },
        o = function (a, b) {
          b = b >> 0 || 6;
          var c,
            d,
            e,
            f,
            g = [],
            h = [],
            i = 0,
            j = 0,
            k = b - 1,
            l = [],
            m = [];
          for (c in a) n(a[c], g, b);
          for (e = g.length, d = 0; e > d; d++)
            (i += Math.sqrt(g[d])),
              (f = d % b),
              (m[f] = i),
              f === k &&
                ((j += i),
                (f = (d / b) >> 0),
                (l[f] = m),
                (h[f] = j),
                (i = 0),
                (m = []));
          return { length: j, lengths: h, segments: l };
        },
        p = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.7",
          API: 2,
          global: !0,
          init: function (a, b, c) {
            (this._target = a),
              b instanceof Array && (b = { values: b }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
            var d,
              e,
              f,
              g,
              h,
              i = b.values || [],
              j = {},
              k = i[0],
              n = b.autoRotate || c.vars.orientToBezier;
            this._autoRotate = n
              ? n instanceof Array
                ? n
                : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]
              : null;
            for (d in k) this._props.push(d);
            for (f = this._props.length; --f > -1; )
              (d = this._props[f]),
                this._overwriteProps.push(d),
                (e = this._func[d] = "function" == typeof a[d]),
                (j[d] = e
                  ? a[
                      d.indexOf("set") ||
                      "function" != typeof a["get" + d.substr(3)]
                        ? d
                        : "get" + d.substr(3)
                    ]()
                  : parseFloat(a[d])),
                h || (j[d] !== i[0][d] && (h = j));
            if (
              ((this._beziers =
                "cubic" !== b.type &&
                "quadratic" !== b.type &&
                "soft" !== b.type
                  ? l(
                      i,
                      isNaN(b.curviness) ? 1 : b.curviness,
                      !1,
                      "thruBasic" === b.type,
                      b.correlate,
                      h
                    )
                  : m(i, b.type, j)),
              (this._segCount = this._beziers[d].length),
              this._timeRes)
            ) {
              var p = o(this._beziers, this._timeRes);
              (this._length = p.length),
                (this._lengths = p.lengths),
                (this._segments = p.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((n = this._autoRotate))
              for (
                this._initialRotations = [],
                  n[0] instanceof Array || (this._autoRotate = n = [n]),
                  f = n.length;
                --f > -1;

              ) {
                for (g = 0; 3 > g; g++)
                  (d = n[f][g]),
                    (this._func[d] =
                      "function" == typeof a[d]
                        ? a[
                            d.indexOf("set") ||
                            "function" != typeof a["get" + d.substr(3)]
                              ? d
                              : "get" + d.substr(3)
                          ]
                        : !1);
                (d = n[f][2]),
                  (this._initialRotations[f] =
                    (this._func[d]
                      ? this._func[d].call(this._target)
                      : this._target[d]) || 0),
                  this._overwriteProps.push(d);
              }
            return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i,
              j,
              k,
              l,
              m = this._segCount,
              n = this._func,
              o = this._target,
              p = b !== this._startRatio;
            if (this._timeRes) {
              if (
                ((k = this._lengths),
                (l = this._curSeg),
                (b *= this._length),
                (e = this._li),
                b > this._l2 && m - 1 > e)
              ) {
                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                (this._l1 = k[e - 1]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s2 = l[(this._s1 = this._si = 0)]);
              } else if (b < this._l1 && e > 0) {
                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                0 === e && b < this._l1 ? (this._l1 = 0) : e++,
                  (this._l2 = k[e]),
                  (this._li = e),
                  (this._curSeg = l = this._segments[e]),
                  (this._s1 = l[(this._si = l.length - 1) - 1] || 0),
                  (this._s2 = l[this._si]);
              }
              if (
                ((c = e),
                (b -= this._l1),
                (e = this._si),
                b > this._s2 && e < l.length - 1)
              ) {
                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                (this._s1 = l[e - 1]), (this._si = e);
              } else if (b < this._s1 && e > 0) {
                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                0 === e && b < this._s1 ? (this._s1 = 0) : e++,
                  (this._s2 = l[e]),
                  (this._si = e);
              }
              h =
                (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0),
                (h = (b - c * (1 / m)) * m);
            for (d = 1 - h, e = this._props.length; --e > -1; )
              (f = this._props[e]),
                (g = this._beziers[f][c]),
                (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a),
                this._mod[f] && (i = this._mod[f](i, o)),
                n[f] ? o[f](i) : (o[f] = i);
            if (this._autoRotate) {
              var q,
                r,
                s,
                t,
                u,
                v,
                w,
                x = this._autoRotate;
              for (e = x.length; --e > -1; )
                (f = x[e][2]),
                  (v = x[e][3] || 0),
                  (w = x[e][4] === !0 ? 1 : a),
                  (g = this._beziers[x[e][0]]),
                  (q = this._beziers[x[e][1]]),
                  g &&
                    q &&
                    ((g = g[c]),
                    (q = q[c]),
                    (r = g.a + (g.b - g.a) * h),
                    (t = g.b + (g.c - g.b) * h),
                    (r += (t - r) * h),
                    (t += (g.c + (g.d - g.c) * h - t) * h),
                    (s = q.a + (q.b - q.a) * h),
                    (u = q.b + (q.c - q.b) * h),
                    (s += (u - s) * h),
                    (u += (q.c + (q.d - q.c) * h - u) * h),
                    (i = p
                      ? Math.atan2(u - s, t - r) * w + v
                      : this._initialRotations[e]),
                    this._mod[f] && (i = this._mod[f](i, o)),
                    n[f] ? o[f](i) : (o[f] = i));
            }
          },
        }),
        q = p.prototype;
      (p.bezierThrough = l),
        (p.cubicToQuadratic = i),
        (p._autoCSS = !0),
        (p.quadraticToCubic = function (a, b, c) {
          return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        }),
        (p._cssRegister = function () {
          var a = f.CSSPlugin;
          if (a) {
            var b = a._internals,
              c = b._parseToProxy,
              d = b._setPluginRatio,
              e = b.CSSPropTween;
            b._registerComplexSpecialProp("bezier", {
              parser: function (a, b, f, g, h, i) {
                b instanceof Array && (b = { values: b }), (i = new p());
                var j,
                  k,
                  l,
                  m = b.values,
                  n = m.length - 1,
                  o = [],
                  q = {};
                if (0 > n) return h;
                for (j = 0; n >= j; j++)
                  (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                for (k in b) q[k] = b[k];
                return (
                  (q.values = o),
                  (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                  (h.data = l),
                  (h.plugin = i),
                  (h.setRatio = d),
                  0 === q.autoRotate && (q.autoRotate = !0),
                  !q.autoRotate ||
                    q.autoRotate instanceof Array ||
                    ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)),
                    (q.autoRotate =
                      null != l.end.left
                        ? [["left", "top", "rotation", j, !1]]
                        : null != l.end.x
                        ? [["x", "y", "rotation", j, !1]]
                        : !1)),
                  q.autoRotate &&
                    (g._transform || g._enableTransforms(!1),
                    (l.autoRotate = g._target._gsTransform),
                    (l.proxy.rotation = l.autoRotate.rotation || 0),
                    g._overwriteProps.push("rotation")),
                  i._onInitTween(l.proxy, q, g._tween),
                  h
                );
              },
            });
          }
        }),
        (q._mod = function (a) {
          for (var b, c = this._overwriteProps, d = c.length; --d > -1; )
            (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
        }),
        (q._kill = function (a) {
          var b,
            c,
            d = this._props;
          for (b in this._beziers)
            if (b in a)
              for (
                delete this._beziers[b], delete this._func[b], c = d.length;
                --c > -1;

              )
                d[c] === b && d.splice(c, 1);
          if ((d = this._autoRotate))
            for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
          return this._super._kill.call(this, a);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (a, b) {
        var c,
          d,
          e,
          f,
          g = function () {
            a.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = g.prototype.setRatio);
          },
          h = _gsScope._gsDefine.globals,
          i = {},
          j = (g.prototype = new a("css"));
        (j.constructor = g),
          (g.version = "1.19.1"),
          (g.API = 2),
          (g.defaultTransformPerspective = 0),
          (g.defaultSkewType = "compensated"),
          (g.defaultSmoothOrigin = !0),
          (j = "px"),
          (g.suffixMap = {
            top: j,
            right: j,
            bottom: j,
            left: j,
            width: j,
            height: j,
            fontSize: j,
            padding: j,
            margin: j,
            perspective: j,
            lineHeight: "",
          });
        var k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          w = /(?:\d|\-|\+|=|#|\.)*/g,
          x = /opacity *= *([^)]*)/i,
          y = /opacity:([^;]*)/i,
          z = /alpha\(opacity *=.+?\)/i,
          A = /^(rgb|hsl)/,
          B = /([A-Z])/g,
          C = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          E = function (a, b) {
            return b.toUpperCase();
          },
          F = /(?:Left|Right|Width)/i,
          G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          I = /,(?=[^\)]*(?:\(|$))/gi,
          J = /[\s,\(]/i,
          K = Math.PI / 180,
          L = 180 / Math.PI,
          M = {},
          N = { style: {} },
          O = _gsScope.document || {
            createElement: function () {
              return N;
            },
          },
          P = function (a, b) {
            return O.createElementNS
              ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
              : O.createElement(a);
          },
          Q = P("div"),
          R = P("img"),
          S = (g._internals = { _specialProps: i }),
          T = (_gsScope.navigator || {}).userAgent || "",
          U = (function () {
            var a = T.indexOf("Android"),
              b = P("a");
            return (
              (m =
                -1 !== T.indexOf("Safari") &&
                -1 === T.indexOf("Chrome") &&
                (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
              (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
              (n = -1 !== T.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) &&
                (p = parseFloat(RegExp.$1)),
              b
                ? ((b.style.cssText = "top:1px;opacity:.55;"),
                  /^0.55/.test(b.style.opacity))
                : !1
            );
          })(),
          V = function (a) {
            return x.test(
              "string" == typeof a
                ? a
                : (a.currentStyle ? a.currentStyle.filter : a.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          W = function (a) {
            _gsScope.console && console.log(a);
          },
          X = "",
          Y = "",
          Z = function (a, b) {
            b = b || Q;
            var c,
              d,
              e = b.style;
            if (void 0 !== e[a]) return a;
            for (
              a = a.charAt(0).toUpperCase() + a.substr(1),
                c = ["O", "Moz", "ms", "Ms", "Webkit"],
                d = 5;
              --d > -1 && void 0 === e[c[d] + a];

            );
            return d >= 0
              ? ((Y = 3 === d ? "ms" : c[d]),
                (X = "-" + Y.toLowerCase() + "-"),
                Y + a)
              : null;
          },
          $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
          _ = (g.getStyle = function (a, b, c, d, e) {
            var f;
            return U || "opacity" !== b
              ? (!d && a.style[b]
                  ? (f = a.style[b])
                  : (c = c || $(a))
                  ? (f =
                      c[b] ||
                      c.getPropertyValue(b) ||
                      c.getPropertyValue(b.replace(B, "-$1").toLowerCase()))
                  : a.currentStyle && (f = a.currentStyle[b]),
                null == e ||
                (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                  ? f
                  : e)
              : V(a);
          }),
          aa = (S.convertToPixels = function (a, c, d, e, f) {
            if ("px" === e || !e) return d;
            if ("auto" === e || !d) return 0;
            var h,
              i,
              j,
              k = F.test(c),
              l = a,
              m = Q.style,
              n = 0 > d,
              o = 1 === d;
            if (
              (n && (d = -d),
              o && (d *= 100),
              "%" === e && -1 !== c.indexOf("border"))
            )
              h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
            else {
              if (
                ((m.cssText =
                  "border:0 solid red;position:" +
                  _(a, "position") +
                  ";line-height:0;"),
                "%" !== e &&
                  l.appendChild &&
                  "v" !== e.charAt(0) &&
                  "rem" !== e)
              )
                m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
              else {
                if (
                  ((l = a.parentNode || O.body),
                  (i = l._gsCache),
                  (j = b.ticker.frame),
                  i && k && i.time === j)
                )
                  return (i.width * d) / 100;
                m[k ? "width" : "height"] = d + e;
              }
              l.appendChild(Q),
                (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                l.removeChild(Q),
                k &&
                  "%" === e &&
                  g.cacheWidths !== !1 &&
                  ((i = l._gsCache = l._gsCache || {}),
                  (i.time = j),
                  (i.width = (h / d) * 100)),
                0 !== h || f || (h = aa(a, c, d, e, !0));
            }
            return o && (h /= 100), n ? -h : h;
          }),
          ba = (S.calculateOffset = function (a, b, c) {
            if ("absolute" !== _(a, "position", c)) return 0;
            var d = "left" === b ? "Left" : "Top",
              e = _(a, "margin" + d, c);
            return (
              a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0)
            );
          }),
          ca = function (a, b) {
            var c,
              d,
              e,
              f = {};
            if ((b = b || $(a, null)))
              if ((c = b.length))
                for (; --c > -1; )
                  (e = b[c]),
                    (-1 === e.indexOf("-transform") || Da === e) &&
                      (f[e.replace(C, E)] = b.getPropertyValue(e));
              else
                for (c in b)
                  (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
            else if ((b = a.currentStyle || a.style))
              for (c in b)
                "string" == typeof c &&
                  void 0 === f[c] &&
                  (f[c.replace(C, E)] = b[c]);
            return (
              U || (f.opacity = V(a)),
              (d = Ra(a, b, !1)),
              (f.rotation = d.rotation),
              (f.skewX = d.skewX),
              (f.scaleX = d.scaleX),
              (f.scaleY = d.scaleY),
              (f.x = d.x),
              (f.y = d.y),
              Fa &&
                ((f.z = d.z),
                (f.rotationX = d.rotationX),
                (f.rotationY = d.rotationY),
                (f.scaleZ = d.scaleZ)),
              f.filters && delete f.filters,
              f
            );
          },
          da = function (a, b, c, d, e) {
            var f,
              g,
              h,
              i = {},
              j = a.style;
            for (g in c)
              "cssText" !== g &&
                "length" !== g &&
                isNaN(g) &&
                (b[g] !== (f = c[g]) || (e && e[g])) &&
                -1 === g.indexOf("Origin") &&
                ("number" == typeof f || "string" == typeof f) &&
                ((i[g] =
                  "auto" !== f || ("left" !== g && "top" !== g)
                    ? ("" !== f && "auto" !== f && "none" !== f) ||
                      "string" != typeof b[g] ||
                      "" === b[g].replace(v, "")
                      ? f
                      : 0
                    : ba(a, g)),
                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
            if (d) for (g in d) "className" !== g && (i[g] = d[g]);
            return { difs: i, firstMPT: h };
          },
          ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ga = function (a, b, c) {
            if ("svg" === (a.nodeName + "").toLowerCase())
              return (c || $(a))[b] || 0;
            if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
            var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
              e = ea[b],
              f = e.length;
            for (c = c || $(a, null); --f > -1; )
              (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0),
                (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
            return d;
          },
          ha = function (a, b) {
            if ("contain" === a || "auto" === a || "auto auto" === a)
              return a + " ";
            (null == a || "" === a) && (a = "0 0");
            var c,
              d = a.split(" "),
              e =
                -1 !== a.indexOf("left")
                  ? "0%"
                  : -1 !== a.indexOf("right")
                  ? "100%"
                  : d[0],
              f =
                -1 !== a.indexOf("top")
                  ? "0%"
                  : -1 !== a.indexOf("bottom")
                  ? "100%"
                  : d[1];
            if (d.length > 3 && !b) {
              for (
                d = a.split(", ").join(",").split(","), a = [], c = 0;
                c < d.length;
                c++
              )
                a.push(ha(d[c]));
              return a.join(",");
            }
            return (
              null == f
                ? (f = "center" === e ? "50%" : "0")
                : "center" === f && (f = "50%"),
              ("center" === e ||
                (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
                (e = "50%"),
              (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
              b &&
                ((b.oxp = -1 !== e.indexOf("%")),
                (b.oyp = -1 !== f.indexOf("%")),
                (b.oxr = "=" === e.charAt(1)),
                (b.oyr = "=" === f.charAt(1)),
                (b.ox = parseFloat(e.replace(v, ""))),
                (b.oy = parseFloat(f.replace(v, ""))),
                (b.v = a)),
              b || a
            );
          },
          ia = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
                : parseFloat(a) - parseFloat(b) || 0
            );
          },
          ja = function (a, b) {
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? b
                : "string" == typeof a && "=" === a.charAt(1)
                ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
                : parseFloat(a) || 0
            );
          },
          ka = function (a, b, c, d) {
            var e,
              f,
              g,
              h,
              i,
              j = 1e-6;
            return (
              "function" == typeof a && (a = a(r, q)),
              null == a
                ? (h = b)
                : "number" == typeof a
                ? (h = a)
                : ((e = 360),
                  (f = a.split("_")),
                  (i = "=" === a.charAt(1)),
                  (g =
                    (i
                      ? parseInt(a.charAt(0) + "1", 10) *
                        parseFloat(f[0].substr(2))
                      : parseFloat(f[0])) *
                      (-1 === a.indexOf("rad") ? 1 : L) -
                    (i ? 0 : b)),
                  f.length &&
                    (d && (d[c] = b + g),
                    -1 !== a.indexOf("short") &&
                      ((g %= e),
                      g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                    -1 !== a.indexOf("_cw") && 0 > g
                      ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                      : -1 !== a.indexOf("ccw") &&
                        g > 0 &&
                        (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                  (h = b + g)),
              j > h && h > -j && (h = 0),
              h
            );
          },
          la = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ma = function (a, b, c) {
            return (
              (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
              (255 *
                (1 > 6 * a
                  ? b + (c - b) * a * 6
                  : 0.5 > a
                  ? c
                  : 2 > 3 * a
                  ? b + (c - b) * (2 / 3 - a) * 6
                  : b) +
                0.5) |
                0
            );
          },
          na = (g.parseColor = function (a, b) {
            var c, d, e, f, g, h, i, j, k, l, m;
            if (a)
              if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
              else {
                if (
                  ("," === a.charAt(a.length - 1) &&
                    (a = a.substr(0, a.length - 1)),
                  la[a])
                )
                  c = la[a];
                else if ("#" === a.charAt(0))
                  4 === a.length &&
                    ((d = a.charAt(1)),
                    (e = a.charAt(2)),
                    (f = a.charAt(3)),
                    (a = "#" + d + d + e + e + f + f)),
                    (a = parseInt(a.substr(1), 16)),
                    (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                else if ("hsl" === a.substr(0, 3))
                  if (((c = m = a.match(s)), b)) {
                    if (-1 !== a.indexOf("=")) return a.match(t);
                  } else
                    (g = (Number(c[0]) % 360) / 360),
                      (h = Number(c[1]) / 100),
                      (i = Number(c[2]) / 100),
                      (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                      (d = 2 * i - e),
                      c.length > 3 && (c[3] = Number(a[3])),
                      (c[0] = ma(g + 1 / 3, d, e)),
                      (c[1] = ma(g, d, e)),
                      (c[2] = ma(g - 1 / 3, d, e));
                else c = a.match(s) || la.transparent;
                (c[0] = Number(c[0])),
                  (c[1] = Number(c[1])),
                  (c[2] = Number(c[2])),
                  c.length > 3 && (c[3] = Number(c[3]));
              }
            else c = la.black;
            return (
              b &&
                !m &&
                ((d = c[0] / 255),
                (e = c[1] / 255),
                (f = c[2] / 255),
                (j = Math.max(d, e, f)),
                (k = Math.min(d, e, f)),
                (i = (j + k) / 2),
                j === k
                  ? (g = h = 0)
                  : ((l = j - k),
                    (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                    (g =
                      j === d
                        ? (e - f) / l + (f > e ? 6 : 0)
                        : j === e
                        ? (f - d) / l + 2
                        : (d - e) / l + 4),
                    (g *= 60)),
                (c[0] = (g + 0.5) | 0),
                (c[1] = (100 * h + 0.5) | 0),
                (c[2] = (100 * i + 0.5) | 0)),
              c
            );
          }),
          oa = function (a, b) {
            var c,
              d,
              e,
              f = a.match(pa) || [],
              g = 0,
              h = f.length ? "" : a;
            for (c = 0; c < f.length; c++)
              (d = f[c]),
                (e = a.substr(g, a.indexOf(d, g) - g)),
                (g += e.length + d.length),
                (d = na(d, b)),
                3 === d.length && d.push(1),
                (h +=
                  e +
                  (b
                    ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                    : "rgba(" + d.join(",")) +
                  ")");
            return h + a.substr(g);
          },
          pa =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (j in la) pa += "|" + j + "\\b";
        (pa = new RegExp(pa + ")", "gi")),
          (g.colorStringFilter = function (a) {
            var b,
              c = a[0] + a[1];
            pa.test(c) &&
              ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
              (a[0] = oa(a[0], b)),
              (a[1] = oa(a[1], b))),
              (pa.lastIndex = 0);
          }),
          b.defaultStringFilter ||
            (b.defaultStringFilter = g.colorStringFilter);
        var qa = function (a, b, c, d) {
            if (null == a)
              return function (a) {
                return a;
              };
            var e,
              f = b ? (a.match(pa) || [""])[0] : "",
              g = a.split(f).join("").match(u) || [],
              h = a.substr(0, a.indexOf(g[0])),
              i = ")" === a.charAt(a.length - 1) ? ")" : "",
              j = -1 !== a.indexOf(" ") ? " " : ",",
              k = g.length,
              l = k > 0 ? g[0].replace(s, "") : "";
            return k
              ? (e = b
                  ? function (a) {
                      var b, m, n, o;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          o = a.replace(I, "|").split("|"), n = 0;
                          n < o.length;
                          n++
                        )
                          o[n] = e(o[n]);
                        return o.join(",");
                      }
                      if (
                        ((b = (a.match(pa) || [f])[0]),
                        (m = a.split(b).join("").match(u) || []),
                        (n = m.length),
                        k > n--)
                      )
                        for (; ++n < k; )
                          m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                      return (
                        h +
                        m.join(j) +
                        j +
                        b +
                        i +
                        (-1 !== a.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (a) {
                      var b, f, m;
                      if ("number" == typeof a) a += l;
                      else if (d && I.test(a)) {
                        for (
                          f = a.replace(I, "|").split("|"), m = 0;
                          m < f.length;
                          m++
                        )
                          f[m] = e(f[m]);
                        return f.join(",");
                      }
                      if (((b = a.match(u) || []), (m = b.length), k > m--))
                        for (; ++m < k; )
                          b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                      return h + b.join(j) + i;
                    })
              : function (a) {
                  return a;
                };
          },
          ra = function (a) {
            return (
              (a = a.split(",")),
              function (b, c, d, e, f, g, h) {
                var i,
                  j = (c + "").split(" ");
                for (h = {}, i = 0; 4 > i; i++)
                  h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                return e.parse(b, h, f, g);
              }
            );
          },
          sa =
            ((S._setPluginRatio = function (a) {
              this.plugin.setRatio(a);
              for (
                var b,
                  c,
                  d,
                  e,
                  f,
                  g = this.data,
                  h = g.proxy,
                  i = g.firstMPT,
                  j = 1e-6;
                i;

              )
                (b = h[i.v]),
                  i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0),
                  (i.t[i.p] = b),
                  (i = i._next);
              if (
                (g.autoRotate &&
                  (g.autoRotate.rotation = g.mod
                    ? g.mod(h.rotation, this.t)
                    : h.rotation),
                1 === a || 0 === a)
              )
                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                  if (((c = i.t), c.type)) {
                    if (1 === c.type) {
                      for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                        e += c["xn" + d] + c["xs" + (d + 1)];
                      c[f] = e;
                    }
                  } else c[f] = c.s + c.xs0;
                  i = i._next;
                }
            }),
            function (a, b, c, d, e) {
              (this.t = a),
                (this.p = b),
                (this.v = c),
                (this.r = e),
                d && ((d._prev = this), (this._next = d));
            }),
          ta =
            ((S._parseToProxy = function (a, b, c, d, e, f) {
              var g,
                h,
                i,
                j,
                k,
                l = d,
                m = {},
                n = {},
                o = c._transform,
                p = M;
              for (
                c._transform = null,
                  M = b,
                  d = k = c.parse(a, b, d, e),
                  M = p,
                  f &&
                    ((c._transform = o),
                    l && ((l._prev = null), l._prev && (l._prev._next = null)));
                d && d !== l;

              ) {
                if (
                  d.type <= 1 &&
                  ((h = d.p),
                  (n[h] = d.s + d.c),
                  (m[h] = d.s),
                  f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)),
                  1 === d.type)
                )
                  for (g = d.l; --g > 0; )
                    (i = "xn" + g),
                      (h = d.p + "_" + i),
                      (n[h] = d.data[i]),
                      (m[h] = d[i]),
                      f || (j = new sa(d, i, h, j, d.rxp[i]));
                d = d._next;
              }
              return { proxy: m, end: n, firstMPT: j, pt: k };
            }),
            (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
              (this.t = a),
                (this.p = b),
                (this.s = d),
                (this.c = e),
                (this.n = i || b),
                a instanceof ta || f.push(this.n),
                (this.r = j),
                (this.type = h || 0),
                k && ((this.pr = k), (c = !0)),
                (this.b = void 0 === l ? d : l),
                (this.e = void 0 === m ? d + e : m),
                g && ((this._next = g), (g._prev = this));
            })),
          ua = function (a, b, c, d, e, f) {
            var g = new ta(a, b, c, d - c, e, -1, f);
            return (g.b = c), (g.e = g.xs0 = d), g;
          },
          va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
            (c = c || f || ""),
              "function" == typeof d && (d = d(r, q)),
              (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
              (d += ""),
              e &&
                pa.test(d + c) &&
                ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
            var m,
              n,
              o,
              p,
              u,
              v,
              w,
              x,
              y,
              z,
              A,
              B,
              C,
              D = c.split(", ").join(",").split(" "),
              E = d.split(", ").join(",").split(" "),
              F = D.length,
              G = k !== !1;
            for (
              (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                ((D = D.join(" ").replace(I, ", ").split(" ")),
                (E = E.join(" ").replace(I, ", ").split(" ")),
                (F = D.length)),
                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                h.plugin = j,
                h.setRatio = l,
                pa.lastIndex = 0,
                m = 0;
              F > m;
              m++
            )
              if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x))
                h.appendXtra(
                  "",
                  x,
                  ia(u, x),
                  u.replace(t, ""),
                  G && -1 !== u.indexOf("px"),
                  !0
                );
              else if (e && pa.test(p))
                (B = u.indexOf(")") + 1),
                  (B = ")" + (B ? u.substr(B) : "")),
                  (C = -1 !== u.indexOf("hsl") && U),
                  (p = na(p, C)),
                  (u = na(u, C)),
                  (y = p.length + u.length > 6),
                  y && !U && 0 === u[3]
                    ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                      (h.e = h.e.split(E[m]).join("transparent")))
                    : (U || (y = !1),
                      C
                        ? h
                            .appendXtra(
                              y ? "hsla(" : "hsl(",
                              p[0],
                              ia(u[0], p[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                            .appendXtra(
                              "",
                              p[2],
                              ia(u[2], p[2]),
                              y ? "%," : "%" + B,
                              !1
                            )
                        : h
                            .appendXtra(
                              y ? "rgba(" : "rgb(",
                              p[0],
                              u[0] - p[0],
                              ",",
                              !0,
                              !0
                            )
                            .appendXtra("", p[1], u[1] - p[1], ",", !0)
                            .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                      y &&
                        ((p = p.length < 4 ? 1 : p[3]),
                        h.appendXtra(
                          "",
                          p,
                          (u.length < 4 ? 1 : u[3]) - p,
                          B,
                          !1
                        ))),
                  (pa.lastIndex = 0);
              else if ((v = p.match(s))) {
                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                for (o = 0, n = 0; n < v.length; n++)
                  (A = v[n]),
                    (z = p.indexOf(A, o)),
                    h.appendXtra(
                      p.substr(o, z - o),
                      Number(A),
                      ia(w[n], A),
                      "",
                      G && "px" === p.substr(z + A.length, 2),
                      0 === n
                    ),
                    (o = z + A.length);
                h["xs" + h.l] += p.substr(o);
              } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
            if (-1 !== d.indexOf("=") && h.data) {
              for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
                B += h["xs" + m] + h.data["xn" + m];
              h.e = B + h["xs" + m];
            }
            return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
          }),
          wa = 9;
        for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; )
          (j["xn" + wa] = 0), (j["xs" + wa] = "");
        (j.xs0 = ""),
          (j._next =
            j._prev =
            j.xfirst =
            j.data =
            j.plugin =
            j.setRatio =
            j.rxp =
              null),
          (j.appendXtra = function (a, b, c, d, e, f) {
            var g = this,
              h = g.l;
            return (
              (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
              c || 0 === h || g.plugin
                ? (g.l++,
                  (g.type = g.setRatio ? 2 : 1),
                  (g["xs" + g.l] = d || ""),
                  h > 0
                    ? ((g.data["xn" + h] = b + c),
                      (g.rxp["xn" + h] = e),
                      (g["xn" + h] = b),
                      g.plugin ||
                        ((g.xfirst = new ta(
                          g,
                          "xn" + h,
                          b,
                          c,
                          g.xfirst || g,
                          0,
                          g.n,
                          e,
                          g.pr
                        )),
                        (g.xfirst.xs0 = 0)),
                      g)
                    : ((g.data = { s: b + c }),
                      (g.rxp = {}),
                      (g.s = b),
                      (g.c = c),
                      (g.r = e),
                      g))
                : ((g["xs" + h] += b + (d || "")), g)
            );
          });
        var xa = function (a, b) {
            (b = b || {}),
              (this.p = b.prefix ? Z(a) || a : a),
              (i[a] = i[this.p] = this),
              (this.format =
                b.formatter ||
                qa(b.defaultValue, b.color, b.collapsible, b.multi)),
              b.parser && (this.parse = b.parser),
              (this.clrs = b.color),
              (this.multi = b.multi),
              (this.keyword = b.keyword),
              (this.dflt = b.defaultValue),
              (this.pr = b.priority || 0);
          },
          ya = (S._registerComplexSpecialProp = function (a, b, c) {
            "object" != typeof b && (b = { parser: c });
            var d,
              e,
              f = a.split(","),
              g = b.defaultValue;
            for (c = c || [g], d = 0; d < f.length; d++)
              (b.prefix = 0 === d && b.prefix),
                (b.defaultValue = c[d] || g),
                (e = new xa(f[d], b));
          }),
          za = (S._registerPluginProp = function (a) {
            if (!i[a]) {
              var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
              ya(a, {
                parser: function (a, c, d, e, f, g, j) {
                  var k = h.com.greensock.plugins[b];
                  return k
                    ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                    : (W("Error: " + b + " js file not loaded."), f);
                },
              });
            }
          });
        (j = xa.prototype),
          (j.parseComplex = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l,
              m = this.keyword;
            if (
              (this.multi &&
                (I.test(c) || I.test(b)
                  ? ((h = b.replace(I, "|").split("|")),
                    (i = c.replace(I, "|").split("|")))
                  : m && ((h = [b]), (i = [c]))),
              i)
            ) {
              for (
                j = i.length > h.length ? i.length : h.length, g = 0;
                j > g;
                g++
              )
                (b = h[g] = h[g] || this.dflt),
                  (c = i[g] = i[g] || this.dflt),
                  m &&
                    ((k = b.indexOf(m)),
                    (l = c.indexOf(m)),
                    k !== l &&
                      (-1 === l
                        ? (h[g] = h[g].split(m).join(""))
                        : -1 === k && (h[g] += " " + m)));
              (b = h.join(", ")), (c = i.join(", "));
            }
            return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
          }),
          (j.parse = function (a, b, c, d, f, g, h) {
            return this.parseComplex(
              a.style,
              this.format(_(a, this.p, e, !1, this.dflt)),
              this.format(b),
              f,
              g
            );
          }),
          (g.registerSpecialProp = function (a, b, c) {
            ya(a, {
              parser: function (a, d, e, f, g, h, i) {
                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
              },
              priority: c,
            });
          }),
          (g.useSVGTransformAttr = !0);
        var Aa,
          Ba =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          Ca = Z("transform"),
          Da = X + "transform",
          Ea = Z("transformOrigin"),
          Fa = null !== Z("perspective"),
          Ga = (S.Transform = function () {
            (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
              (this.force3D =
                g.defaultForce3D !== !1 && Fa
                  ? g.defaultForce3D || "auto"
                  : !1);
          }),
          Ha = _gsScope.SVGElement,
          Ia = function (a, b, c) {
            var d,
              e = O.createElementNS("http://www.w3.org/2000/svg", a),
              f = /([a-z])([A-Z])/g;
            for (d in c)
              e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
            return b.appendChild(e), e;
          },
          Ja = O.documentElement || {},
          Ka = (function () {
            var a,
              b,
              c,
              d = p || (/Android/i.test(T) && !_gsScope.chrome);
            return (
              O.createElementNS &&
                !d &&
                ((a = Ia("svg", Ja)),
                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                (c = b.getBoundingClientRect().width),
                (b.style[Ea] = "50% 50%"),
                (b.style[Ca] = "scaleX(0.5)"),
                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                Ja.removeChild(a)),
              d
            );
          })(),
          La = function (a, b, c, d, e, f) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n,
              o,
              p,
              q,
              r,
              s,
              t,
              u,
              v = a._gsTransform,
              w = Qa(a, !0);
            v && ((t = v.xOrigin), (u = v.yOrigin)),
              (!d || (h = d.split(" ")).length < 2) &&
                ((n = a.getBBox()),
                0 === n.x &&
                  0 === n.y &&
                  n.width + n.height === 0 &&
                  (n = {
                    x:
                      parseFloat(
                        a.hasAttribute("x")
                          ? a.getAttribute("x")
                          : a.hasAttribute("cx")
                          ? a.getAttribute("cx")
                          : 0
                      ) || 0,
                    y:
                      parseFloat(
                        a.hasAttribute("y")
                          ? a.getAttribute("y")
                          : a.hasAttribute("cy")
                          ? a.getAttribute("cy")
                          : 0
                      ) || 0,
                    width: 0,
                    height: 0,
                  }),
                (b = ha(b).split(" ")),
                (h = [
                  (-1 !== b[0].indexOf("%")
                    ? (parseFloat(b[0]) / 100) * n.width
                    : parseFloat(b[0])) + n.x,
                  (-1 !== b[1].indexOf("%")
                    ? (parseFloat(b[1]) / 100) * n.height
                    : parseFloat(b[1])) + n.y,
                ])),
              (c.xOrigin = k = parseFloat(h[0])),
              (c.yOrigin = l = parseFloat(h[1])),
              d &&
                w !== Pa &&
                ((m = w[0]),
                (n = w[1]),
                (o = w[2]),
                (p = w[3]),
                (q = w[4]),
                (r = w[5]),
                (s = m * p - n * o),
                s &&
                  ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                  (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                  (k = c.xOrigin = h[0] = i),
                  (l = c.yOrigin = h[1] = j))),
              v &&
                (f &&
                  ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                  ? ((i = k - t),
                    (j = l - u),
                    (v.xOffset += i * w[0] + j * w[2] - i),
                    (v.yOffset += i * w[1] + j * w[3] - j))
                  : (v.xOffset = v.yOffset = 0)),
              f || a.setAttribute("data-svg-origin", h.join(" "));
          },
          Ma = function (a) {
            var b,
              c = P(
                "svg",
                this.ownerSVGElement.getAttribute("xmlns") ||
                  "http://www.w3.org/2000/svg"
              ),
              d = this.parentNode,
              e = this.nextSibling,
              f = this.style.cssText;
            if (
              (Ja.appendChild(c),
              c.appendChild(this),
              (this.style.display = "block"),
              a)
            )
              try {
                (b = this.getBBox()),
                  (this._originalGetBBox = this.getBBox),
                  (this.getBBox = Ma);
              } catch (g) {}
            else this._originalGetBBox && (b = this._originalGetBBox());
            return (
              e ? d.insertBefore(this, e) : d.appendChild(this),
              Ja.removeChild(c),
              (this.style.cssText = f),
              b
            );
          },
          Na = function (a) {
            try {
              return a.getBBox();
            } catch (b) {
              return Ma.call(a, !0);
            }
          },
          Oa = function (a) {
            return !(
              !(Ha && a.getCTM && Na(a)) ||
              (a.parentNode && !a.ownerSVGElement)
            );
          },
          Pa = [1, 0, 0, 1, 0, 0],
          Qa = function (a, b) {
            var c,
              d,
              e,
              f,
              g,
              h,
              i = a._gsTransform || new Ga(),
              j = 1e5,
              k = a.style;
            if (
              (Ca
                ? (d = _(a, Da, null, !0))
                : a.currentStyle &&
                  ((d = a.currentStyle.filter.match(G)),
                  (d =
                    d && 4 === d.length
                      ? [
                          d[0].substr(4),
                          Number(d[2].substr(4)),
                          Number(d[1].substr(4)),
                          d[3].substr(4),
                          i.x || 0,
                          i.y || 0,
                        ].join(",")
                      : "")),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              c &&
                Ca &&
                ((h = "none" === $(a).display) || !a.parentNode) &&
                (h && ((f = k.display), (k.display = "block")),
                a.parentNode || ((g = 1), Ja.appendChild(a)),
                (d = _(a, Da, null, !0)),
                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                f ? (k.display = f) : h && Va(k, "display"),
                g && Ja.removeChild(a)),
              (i.svg || (a.getCTM && Oa(a))) &&
                (c &&
                  -1 !== (k[Ca] + "").indexOf("matrix") &&
                  ((d = k[Ca]), (c = 0)),
                (e = a.getAttribute("transform")),
                c &&
                  e &&
                  (-1 !== e.indexOf("matrix")
                    ? ((d = e), (c = 0))
                    : -1 !== e.indexOf("translate") &&
                      ((d =
                        "matrix(1,0,0,1," +
                        e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                        ")"),
                      (c = 0)))),
              c)
            )
              return Pa;
            for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; )
              (f = Number(e[wa])),
                (e[wa] = (g = f - (f |= 0))
                  ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f
                  : f);
            return b && e.length > 6
              ? [e[0], e[1], e[4], e[5], e[12], e[13]]
              : e;
          },
          Ra = (S.getTransform = function (a, c, d, e) {
            if (a._gsTransform && d && !e) return a._gsTransform;
            var f,
              h,
              i,
              j,
              k,
              l,
              m = d ? a._gsTransform || new Ga() : new Ga(),
              n = m.scaleX < 0,
              o = 2e-5,
              p = 1e5,
              q = Fa
                ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) ||
                  m.zOrigin ||
                  0
                : 0,
              r = parseFloat(g.defaultTransformPerspective) || 0;
            if (
              ((m.svg = !(!a.getCTM || !Oa(a))),
              m.svg &&
                (La(
                  a,
                  _(a, Ea, c, !1, "50% 50%") + "",
                  m,
                  a.getAttribute("data-svg-origin")
                ),
                (Aa = g.useSVGTransformAttr || Ka)),
              (f = Qa(a)),
              f !== Pa)
            ) {
              if (16 === f.length) {
                var s,
                  t,
                  u,
                  v,
                  w,
                  x = f[0],
                  y = f[1],
                  z = f[2],
                  A = f[3],
                  B = f[4],
                  C = f[5],
                  D = f[6],
                  E = f[7],
                  F = f[8],
                  G = f[9],
                  H = f[10],
                  I = f[12],
                  J = f[13],
                  K = f[14],
                  M = f[11],
                  N = Math.atan2(D, H);
                m.zOrigin &&
                  ((K = -m.zOrigin),
                  (I = F * K - f[12]),
                  (J = G * K - f[13]),
                  (K = H * K + m.zOrigin - f[14])),
                  (m.rotationX = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = B * v + F * w),
                    (t = C * v + G * w),
                    (u = D * v + H * w),
                    (F = B * -w + F * v),
                    (G = C * -w + G * v),
                    (H = D * -w + H * v),
                    (M = E * -w + M * v),
                    (B = s),
                    (C = t),
                    (D = u)),
                  (N = Math.atan2(-z, H)),
                  (m.rotationY = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (s = x * v - F * w),
                    (t = y * v - G * w),
                    (u = z * v - H * w),
                    (G = y * w + G * v),
                    (H = z * w + H * v),
                    (M = A * w + M * v),
                    (x = s),
                    (y = t),
                    (z = u)),
                  (N = Math.atan2(y, x)),
                  (m.rotation = N * L),
                  N &&
                    ((v = Math.cos(-N)),
                    (w = Math.sin(-N)),
                    (x = x * v + B * w),
                    (t = y * v + C * w),
                    (C = y * -w + C * v),
                    (D = z * -w + D * v),
                    (y = t)),
                  m.rotationX &&
                    Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                    ((m.rotationX = m.rotation = 0),
                    (m.rotationY = 180 - m.rotationY)),
                  (m.scaleX = ((Math.sqrt(x * x + y * y) * p + 0.5) | 0) / p),
                  (m.scaleY = ((Math.sqrt(C * C + G * G) * p + 0.5) | 0) / p),
                  (m.scaleZ = ((Math.sqrt(D * D + H * H) * p + 0.5) | 0) / p),
                  m.rotationX || m.rotationY
                    ? (m.skewX = 0)
                    : ((m.skewX =
                        B || C
                          ? Math.atan2(B, C) * L + m.rotation
                          : m.skewX || 0),
                      Math.abs(m.skewX) > 90 &&
                        Math.abs(m.skewX) < 270 &&
                        (n
                          ? ((m.scaleX *= -1),
                            (m.skewX += m.rotation <= 0 ? 180 : -180),
                            (m.rotation += m.rotation <= 0 ? 180 : -180))
                          : ((m.scaleY *= -1),
                            (m.skewX += m.skewX <= 0 ? 180 : -180)))),
                  (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                  (m.x = I),
                  (m.y = J),
                  (m.z = K),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                    (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
              } else if (
                !Fa ||
                e ||
                !f.length ||
                m.x !== f[4] ||
                m.y !== f[5] ||
                (!m.rotationX && !m.rotationY)
              ) {
                var O = f.length >= 6,
                  P = O ? f[0] : 1,
                  Q = f[1] || 0,
                  R = f[2] || 0,
                  S = O ? f[3] : 1;
                (m.x = f[4] || 0),
                  (m.y = f[5] || 0),
                  (i = Math.sqrt(P * P + Q * Q)),
                  (j = Math.sqrt(S * S + R * R)),
                  (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                  (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                  Math.abs(l) > 90 &&
                    Math.abs(l) < 270 &&
                    (n
                      ? ((i *= -1),
                        (l += 0 >= k ? 180 : -180),
                        (k += 0 >= k ? 180 : -180))
                      : ((j *= -1), (l += 0 >= l ? 180 : -180))),
                  (m.scaleX = i),
                  (m.scaleY = j),
                  (m.rotation = k),
                  (m.skewX = l),
                  Fa &&
                    ((m.rotationX = m.rotationY = m.z = 0),
                    (m.perspective = r),
                    (m.scaleZ = 1)),
                  m.svg &&
                    ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                    (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
              }
              m.zOrigin = q;
              for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
            }
            return (
              d &&
                ((a._gsTransform = m),
                m.svg &&
                  (Aa && a.style[Ca]
                    ? b.delayedCall(0.001, function () {
                        Va(a.style, Ca);
                      })
                    : !Aa &&
                      a.getAttribute("transform") &&
                      b.delayedCall(0.001, function () {
                        a.removeAttribute("transform");
                      }))),
              m
            );
          }),
          Sa = function (a) {
            var b,
              c,
              d = this.data,
              e = -d.rotation * K,
              f = e + d.skewX * K,
              g = 1e5,
              h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
              i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
              j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
              k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
              l = this.t.style,
              m = this.t.currentStyle;
            if (m) {
              (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
              var n,
                o,
                q = this.t.offsetWidth,
                r = this.t.offsetHeight,
                s = "absolute" !== m.position,
                t =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  h +
                  ", M12=" +
                  i +
                  ", M21=" +
                  j +
                  ", M22=" +
                  k,
                u = d.x + (q * d.xPercent) / 100,
                v = d.y + (r * d.yPercent) / 100;
              if (
                (null != d.ox &&
                  ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                  (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                  (u += n - (n * h + o * i)),
                  (v += o - (n * j + o * k))),
                s
                  ? ((n = q / 2),
                    (o = r / 2),
                    (t +=
                      ", Dx=" +
                      (n - (n * h + o * i) + u) +
                      ", Dy=" +
                      (o - (n * j + o * k) + v) +
                      ")"))
                  : (t += ", sizingMethod='auto expand')"),
                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (l.filter = b.replace(H, t))
                  : (l.filter = t + " " + b),
                (0 === a || 1 === a) &&
                  1 === h &&
                  0 === i &&
                  0 === j &&
                  1 === k &&
                  ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                    (x.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === b.indexOf(b.indexOf("Alpha")) &&
                      l.removeAttribute("filter"))),
                !s)
              ) {
                var y,
                  z,
                  A,
                  B = 8 > p ? 1 : -1;
                for (
                  n = d.ieOffsetX || 0,
                    o = d.ieOffsetY || 0,
                    d.ieOffsetX = Math.round(
                      (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 +
                        u
                    ),
                    d.ieOffsetY = Math.round(
                      (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 +
                        v
                    ),
                    wa = 0;
                  4 > wa;
                  wa++
                )
                  (z = fa[wa]),
                    (y = m[z]),
                    (c =
                      -1 !== y.indexOf("px")
                        ? parseFloat(y)
                        : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                    (A =
                      c !== d[z]
                        ? 2 > wa
                          ? -d.ieOffsetX
                          : -d.ieOffsetY
                        : 2 > wa
                        ? n - d.ieOffsetX
                        : o - d.ieOffsetY),
                    (l[z] =
                      (d[z] = Math.round(
                        c - A * (0 === wa || 2 === wa ? 1 : B)
                      )) + "px");
              }
            }
          },
          Ta =
            (S.set3DTransformRatio =
            S.setTransformRatio =
              function (a) {
                var b,
                  c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  o,
                  p,
                  q,
                  r,
                  s,
                  t,
                  u,
                  v,
                  w,
                  x,
                  y,
                  z = this.data,
                  A = this.t.style,
                  B = z.rotation,
                  C = z.rotationX,
                  D = z.rotationY,
                  E = z.scaleX,
                  F = z.scaleY,
                  G = z.scaleZ,
                  H = z.x,
                  I = z.y,
                  J = z.z,
                  L = z.svg,
                  M = z.perspective,
                  N = z.force3D,
                  O = z.skewY,
                  P = z.skewX;
                if (
                  (O && ((P += O), (B += O)),
                  ((((1 === a || 0 === a) &&
                    "auto" === N &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !N) &&
                    !J &&
                    !M &&
                    !D &&
                    !C &&
                    1 === G) ||
                    (Aa && L) ||
                    !Fa)
                )
                  return void (B || P || L
                    ? ((B *= K),
                      (x = P * K),
                      (y = 1e5),
                      (c = Math.cos(B) * E),
                      (f = Math.sin(B) * E),
                      (d = Math.sin(B - x) * -F),
                      (g = Math.cos(B - x) * F),
                      x &&
                        "simple" === z.skewType &&
                        ((b = Math.tan(x - O * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (d *= b),
                        (g *= b),
                        O &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b))),
                      L &&
                        ((H +=
                          z.xOrigin -
                          (z.xOrigin * c + z.yOrigin * d) +
                          z.xOffset),
                        (I +=
                          z.yOrigin -
                          (z.xOrigin * f + z.yOrigin * g) +
                          z.yOffset),
                        Aa &&
                          (z.xPercent || z.yPercent) &&
                          ((q = this.t.getBBox()),
                          (H += 0.01 * z.xPercent * q.width),
                          (I += 0.01 * z.yPercent * q.height)),
                        (q = 1e-6),
                        q > H && H > -q && (H = 0),
                        q > I && I > -q && (I = 0)),
                      (u =
                        ((c * y) | 0) / y +
                        "," +
                        ((f * y) | 0) / y +
                        "," +
                        ((d * y) | 0) / y +
                        "," +
                        ((g * y) | 0) / y +
                        "," +
                        H +
                        "," +
                        I +
                        ")"),
                      L && Aa
                        ? this.t.setAttribute("transform", "matrix(" + u)
                        : (A[Ca] =
                            (z.xPercent || z.yPercent
                              ? "translate(" +
                                z.xPercent +
                                "%," +
                                z.yPercent +
                                "%) matrix("
                              : "matrix(") + u))
                    : (A[Ca] =
                        (z.xPercent || z.yPercent
                          ? "translate(" +
                            z.xPercent +
                            "%," +
                            z.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        E +
                        ",0,0," +
                        F +
                        "," +
                        H +
                        "," +
                        I +
                        ")"));
                if (
                  (n &&
                    ((q = 1e-4),
                    q > E && E > -q && (E = G = 2e-5),
                    q > F && F > -q && (F = G = 2e-5),
                    !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                  B || P)
                )
                  (B *= K),
                    (r = c = Math.cos(B)),
                    (s = f = Math.sin(B)),
                    P &&
                      ((B -= P * K),
                      (r = Math.cos(B)),
                      (s = Math.sin(B)),
                      "simple" === z.skewType &&
                        ((b = Math.tan((P - O) * K)),
                        (b = Math.sqrt(1 + b * b)),
                        (r *= b),
                        (s *= b),
                        z.skewY &&
                          ((b = Math.tan(O * K)),
                          (b = Math.sqrt(1 + b * b)),
                          (c *= b),
                          (f *= b)))),
                    (d = -s),
                    (g = r);
                else {
                  if (!(D || C || 1 !== G || M || L))
                    return void (A[Ca] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      H +
                      "px," +
                      I +
                      "px," +
                      J +
                      "px)" +
                      (1 !== E || 1 !== F
                        ? " scale(" + E + "," + F + ")"
                        : ""));
                  (c = g = 1), (d = f = 0);
                }
                (k = 1),
                  (e = h = i = j = l = m = 0),
                  (o = M ? -1 / M : 0),
                  (p = z.zOrigin),
                  (q = 1e-6),
                  (v = ","),
                  (w = "0"),
                  (B = D * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (i = -s),
                    (l = o * -s),
                    (e = c * s),
                    (h = f * s),
                    (k = r),
                    (o *= r),
                    (c *= r),
                    (f *= r)),
                  (B = C * K),
                  B &&
                    ((r = Math.cos(B)),
                    (s = Math.sin(B)),
                    (b = d * r + e * s),
                    (t = g * r + h * s),
                    (j = k * s),
                    (m = o * s),
                    (e = d * -s + e * r),
                    (h = g * -s + h * r),
                    (k *= r),
                    (o *= r),
                    (d = b),
                    (g = t)),
                  1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                  1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                  1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                  (p || L) &&
                    (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                    L &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset)),
                    q > H && H > -q && (H = w),
                    q > I && I > -q && (I = w),
                    q > J && J > -q && (J = 0)),
                  (u =
                    z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (u +=
                    (q > c && c > -q ? w : c) +
                    v +
                    (q > f && f > -q ? w : f) +
                    v +
                    (q > i && i > -q ? w : i)),
                  (u +=
                    v +
                    (q > l && l > -q ? w : l) +
                    v +
                    (q > d && d > -q ? w : d) +
                    v +
                    (q > g && g > -q ? w : g)),
                  C || D || 1 !== G
                    ? ((u +=
                        v +
                        (q > j && j > -q ? w : j) +
                        v +
                        (q > m && m > -q ? w : m) +
                        v +
                        (q > e && e > -q ? w : e)),
                      (u +=
                        v +
                        (q > h && h > -q ? w : h) +
                        v +
                        (q > k && k > -q ? w : k) +
                        v +
                        (q > o && o > -q ? w : o) +
                        v))
                    : (u += ",0,0,0,0,1,0,"),
                  (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                  (A[Ca] = u);
              });
        (j = Ga.prototype),
          (j.x =
            j.y =
            j.z =
            j.skewX =
            j.skewY =
            j.rotation =
            j.rotationX =
            j.rotationY =
            j.zOrigin =
            j.xPercent =
            j.yPercent =
            j.xOffset =
            j.yOffset =
              0),
          (j.scaleX = j.scaleY = j.scaleZ = 1),
          ya(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (a, b, c, d, f, h, i) {
                if (d._lastParsedTransform === i) return f;
                d._lastParsedTransform = i;
                var j,
                  k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)),
                  k && (i.scale = k(r, a));
                var l,
                  m,
                  n,
                  o,
                  p,
                  s,
                  t,
                  u,
                  v,
                  w = a._gsTransform,
                  x = a.style,
                  y = 1e-6,
                  z = Ba.length,
                  A = i,
                  B = {},
                  C = "transformOrigin",
                  D = Ra(a, e, !0, A.parseTransform),
                  E =
                    A.transform &&
                    ("function" == typeof A.transform
                      ? A.transform(r, q)
                      : A.transform);
                if (((d._transform = D), E && "string" == typeof E && Ca))
                  (m = Q.style),
                    (m[Ca] = E),
                    (m.display = "block"),
                    (m.position = "absolute"),
                    O.body.appendChild(Q),
                    (l = Ra(Q, null, !1)),
                    D.svg &&
                      ((s = D.xOrigin),
                      (t = D.yOrigin),
                      (l.x -= D.xOffset),
                      (l.y -= D.yOffset),
                      (A.transformOrigin || A.svgOrigin) &&
                        ((E = {}),
                        La(
                          a,
                          ha(A.transformOrigin),
                          E,
                          A.svgOrigin,
                          A.smoothOrigin,
                          !0
                        ),
                        (s = E.xOrigin),
                        (t = E.yOrigin),
                        (l.x -= E.xOffset - D.xOffset),
                        (l.y -= E.yOffset - D.yOffset)),
                      (s || t) &&
                        ((u = Qa(Q, !0)),
                        (l.x -= s - (s * u[0] + t * u[2])),
                        (l.y -= t - (s * u[1] + t * u[3])))),
                    O.body.removeChild(Q),
                    l.perspective || (l.perspective = D.perspective),
                    null != A.xPercent &&
                      (l.xPercent = ja(A.xPercent, D.xPercent)),
                    null != A.yPercent &&
                      (l.yPercent = ja(A.yPercent, D.yPercent));
                else if ("object" == typeof A) {
                  if (
                    ((l = {
                      scaleX: ja(
                        null != A.scaleX ? A.scaleX : A.scale,
                        D.scaleX
                      ),
                      scaleY: ja(
                        null != A.scaleY ? A.scaleY : A.scale,
                        D.scaleY
                      ),
                      scaleZ: ja(A.scaleZ, D.scaleZ),
                      x: ja(A.x, D.x),
                      y: ja(A.y, D.y),
                      z: ja(A.z, D.z),
                      xPercent: ja(A.xPercent, D.xPercent),
                      yPercent: ja(A.yPercent, D.yPercent),
                      perspective: ja(A.transformPerspective, D.perspective),
                    }),
                    (p = A.directionalRotation),
                    null != p)
                  )
                    if ("object" == typeof p) for (m in p) A[m] = p[m];
                    else A.rotation = p;
                  "string" == typeof A.x &&
                    -1 !== A.x.indexOf("%") &&
                    ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                    "string" == typeof A.y &&
                      -1 !== A.y.indexOf("%") &&
                      ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                    (l.rotation = ka(
                      "rotation" in A
                        ? A.rotation
                        : "shortRotation" in A
                        ? A.shortRotation + "_short"
                        : "rotationZ" in A
                        ? A.rotationZ
                        : D.rotation,
                      D.rotation,
                      "rotation",
                      B
                    )),
                    Fa &&
                      ((l.rotationX = ka(
                        "rotationX" in A
                          ? A.rotationX
                          : "shortRotationX" in A
                          ? A.shortRotationX + "_short"
                          : D.rotationX || 0,
                        D.rotationX,
                        "rotationX",
                        B
                      )),
                      (l.rotationY = ka(
                        "rotationY" in A
                          ? A.rotationY
                          : "shortRotationY" in A
                          ? A.shortRotationY + "_short"
                          : D.rotationY || 0,
                        D.rotationY,
                        "rotationY",
                        B
                      ))),
                    (l.skewX = ka(A.skewX, D.skewX)),
                    (l.skewY = ka(A.skewY, D.skewY));
                }
                for (
                  Fa &&
                    null != A.force3D &&
                    ((D.force3D = A.force3D), (o = !0)),
                    D.skewType = A.skewType || D.skewType || g.defaultSkewType,
                    n =
                      D.force3D ||
                      D.z ||
                      D.rotationX ||
                      D.rotationY ||
                      l.z ||
                      l.rotationX ||
                      l.rotationY ||
                      l.perspective,
                    n || null == A.scale || (l.scaleZ = 1);
                  --z > -1;

                )
                  (v = Ba[z]),
                    (E = l[v] - D[v]),
                    (E > y || -y > E || null != A[v] || null != M[v]) &&
                      ((o = !0),
                      (f = new ta(D, v, D[v], E, f)),
                      v in B && (f.e = B[v]),
                      (f.xs0 = 0),
                      (f.plugin = h),
                      d._overwriteProps.push(f.n));
                return (
                  (E = A.transformOrigin),
                  D.svg &&
                    (E || A.svgOrigin) &&
                    ((s = D.xOffset),
                    (t = D.yOffset),
                    La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                    (f = ua(
                      D,
                      "xOrigin",
                      (w ? D : l).xOrigin,
                      l.xOrigin,
                      f,
                      C
                    )),
                    (f = ua(
                      D,
                      "yOrigin",
                      (w ? D : l).yOrigin,
                      l.yOrigin,
                      f,
                      C
                    )),
                    (s !== D.xOffset || t !== D.yOffset) &&
                      ((f = ua(
                        D,
                        "xOffset",
                        w ? s : D.xOffset,
                        D.xOffset,
                        f,
                        C
                      )),
                      (f = ua(
                        D,
                        "yOffset",
                        w ? t : D.yOffset,
                        D.yOffset,
                        f,
                        C
                      ))),
                    (E = "0px 0px")),
                  (E || (Fa && n && D.zOrigin)) &&
                    (Ca
                      ? ((o = !0),
                        (v = Ea),
                        (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                        (f = new ta(x, v, 0, 0, f, -1, C)),
                        (f.b = x[v]),
                        (f.plugin = h),
                        Fa
                          ? ((m = D.zOrigin),
                            (E = E.split(" ")),
                            (D.zOrigin =
                              (E.length > 2 && (0 === m || "0px" !== E[2])
                                ? parseFloat(E[2])
                                : m) || 0),
                            (f.xs0 = f.e =
                              E[0] + " " + (E[1] || "50%") + " 0px"),
                            (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                            (f.b = m),
                            (f.xs0 = f.e = D.zOrigin))
                          : (f.xs0 = f.e = E))
                      : ha(E + "", D)),
                  o &&
                    (d._transformType =
                      (D.svg && Aa) || (!n && 3 !== this._transformType)
                        ? 2
                        : 3),
                  j && (i[c] = j),
                  k && (i.scale = k),
                  f
                );
              },
              prefix: !0,
            }
          ),
          ya("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          ya("borderRadius", {
            defaultValue: "0px",
            parser: function (a, b, c, f, g, h) {
              b = this.format(b);
              var i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                z = a.style;
              for (
                q = parseFloat(a.offsetWidth),
                  r = parseFloat(a.offsetHeight),
                  i = b.split(" "),
                  j = 0;
                j < y.length;
                j++
              )
                this.p.indexOf("border") && (y[j] = Z(y[j])),
                  (m = l = _(a, y[j], e, !1, "0px")),
                  -1 !== m.indexOf(" ") &&
                    ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                  (n = k = i[j]),
                  (o = parseFloat(m)),
                  (t = m.substr((o + "").length)),
                  (u = "=" === n.charAt(1)),
                  u
                    ? ((p = parseInt(n.charAt(0) + "1", 10)),
                      (n = n.substr(2)),
                      (p *= parseFloat(n)),
                      (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                    : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                  "" === s && (s = d[c] || t),
                  s !== t &&
                    ((v = aa(a, "borderLeft", o, t)),
                    (w = aa(a, "borderTop", o, t)),
                    "%" === s
                      ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                      : "em" === s
                      ? ((x = aa(a, "borderLeft", 1, "em")),
                        (m = v / x + "em"),
                        (l = w / x + "em"))
                      : ((m = v + "px"), (l = w + "px")),
                    u &&
                      ((n = parseFloat(m) + p + s),
                      (k = parseFloat(l) + p + s))),
                  (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
              return g;
            },
            prefix: !0,
            formatter: qa("0px 0px 0px 0px", !1, !0),
          }),
          ya(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (a, b, c, d, f, g) {
                return va(
                  a.style,
                  c,
                  this.format(_(a, c, e, !1, "0px 0px")),
                  this.format(b),
                  !1,
                  "0px",
                  f
                );
              },
              prefix: !0,
              formatter: qa("0px 0px", !1, !0),
            }
          ),
          ya("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (a, b, c, d, f, g) {
              var h,
                i,
                j,
                k,
                l,
                m,
                n = "background-position",
                o = e || $(a, null),
                q = this.format(
                  (o
                    ? p
                      ? o.getPropertyValue(n + "-x") +
                        " " +
                        o.getPropertyValue(n + "-y")
                      : o.getPropertyValue(n)
                    : a.currentStyle.backgroundPositionX +
                      " " +
                      a.currentStyle.backgroundPositionY) || "0 0"
                ),
                r = this.format(b);
              if (
                (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
                r.split(",").length < 2 &&
                ((m = _(a, "backgroundImage").replace(D, "")),
                m && "none" !== m)
              ) {
                for (
                  h = q.split(" "),
                    i = r.split(" "),
                    R.setAttribute("src", m),
                    j = 2;
                  --j > -1;

                )
                  (q = h[j]),
                    (k = -1 !== q.indexOf("%")),
                    k !== (-1 !== i[j].indexOf("%")) &&
                      ((l =
                        0 === j
                          ? a.offsetWidth - R.width
                          : a.offsetHeight - R.height),
                      (h[j] = k
                        ? (parseFloat(q) / 100) * l + "px"
                        : (parseFloat(q) / l) * 100 + "%"));
                q = h.join(" ");
              }
              return this.parseComplex(a.style, q, r, f, g);
            },
            formatter: ha,
          }),
          ya("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (a) {
              return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
            },
          }),
          ya("perspective", { defaultValue: "0px", prefix: !0 }),
          ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          ya("transformStyle", { prefix: !0 }),
          ya("backfaceVisibility", { prefix: !0 }),
          ya("userSelect", { prefix: !0 }),
          ya("margin", {
            parser: ra("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          ya("padding", {
            parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          ya("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (a, b, c, d, f, g) {
              var h, i, j;
              return (
                9 > p
                  ? ((i = a.currentStyle),
                    (j = 8 > p ? " " : ","),
                    (h =
                      "rect(" +
                      i.clipTop +
                      j +
                      i.clipRight +
                      j +
                      i.clipBottom +
                      j +
                      i.clipLeft +
                      ")"),
                    (b = this.format(b).split(",").join(j)))
                  : ((h = this.format(_(a, this.p, e, !1, this.dflt))),
                    (b = this.format(b))),
                this.parseComplex(a.style, h, b, f, g)
              );
            },
          }),
          ya("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          ya("autoRound,strictUnits", {
            parser: function (a, b, c, d, e) {
              return e;
            },
          }),
          ya("border", {
            defaultValue: "0px solid #000",
            parser: function (a, b, c, d, f, g) {
              var h = _(a, "borderTopWidth", e, !1, "0px"),
                i = this.format(b).split(" "),
                j = i[0].replace(w, "");
              return (
                "px" !== j &&
                  (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                this.parseComplex(
                  a.style,
                  this.format(
                    h +
                      " " +
                      _(a, "borderTopStyle", e, !1, "solid") +
                      " " +
                      _(a, "borderTopColor", e, !1, "#000")
                  ),
                  i.join(" "),
                  f,
                  g
                )
              );
            },
            color: !0,
            formatter: function (a) {
              var b = a.split(" ");
              return (
                b[0] +
                " " +
                (b[1] || "solid") +
                " " +
                (a.match(pa) || ["#000"])[0]
              );
            },
          }),
          ya("borderWidth", {
            parser: ra(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          ya("float,cssFloat,styleFloat", {
            parser: function (a, b, c, d, e, f) {
              var g = a.style,
                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
              return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
            },
          });
        var Ua = function (a) {
          var b,
            c = this.t,
            d = c.filter || _(this.data, "filter") || "",
            e = (this.s + this.c * a) | 0;
          100 === e &&
            (-1 === d.indexOf("atrix(") &&
            -1 === d.indexOf("radient(") &&
            -1 === d.indexOf("oader(")
              ? (c.removeAttribute("filter"), (b = !_(this.data, "filter")))
              : ((c.filter = d.replace(z, "")), (b = !0))),
            b ||
              (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
              -1 === d.indexOf("pacity")
                ? (0 === e && this.xn1) ||
                  (c.filter = d + " alpha(opacity=" + e + ")")
                : (c.filter = d.replace(x, "opacity=" + e)));
        };
        ya("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (a, b, c, d, f, g) {
            var h = parseFloat(_(a, "opacity", e, !1, "1")),
              i = a.style,
              j = "autoAlpha" === c;
            return (
              "string" == typeof b &&
                "=" === b.charAt(1) &&
                (b =
                  ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
              j &&
                1 === h &&
                "hidden" === _(a, "visibility", e) &&
                0 !== b &&
                (h = 0),
              U
                ? (f = new ta(i, "opacity", h, b - h, f))
                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                  (f.xn1 = j ? 1 : 0),
                  (i.zoom = 1),
                  (f.type = 2),
                  (f.b = "alpha(opacity=" + f.s + ")"),
                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                  (f.data = a),
                  (f.plugin = g),
                  (f.setRatio = Ua)),
              j &&
                ((f = new ta(
                  i,
                  "visibility",
                  0,
                  0,
                  f,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== h ? "inherit" : "hidden",
                  0 === b ? "hidden" : "inherit"
                )),
                (f.xs0 = "inherit"),
                d._overwriteProps.push(f.n),
                d._overwriteProps.push(c)),
              f
            );
          },
        });
        var Va = function (a, b) {
            b &&
              (a.removeProperty
                ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                    (b = "-" + b),
                  a.removeProperty(b.replace(B, "-$1").toLowerCase()))
                : a.removeAttribute(b));
          },
          Wa = function (a) {
            if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
              this.t.setAttribute("class", 0 === a ? this.b : this.e);
              for (var b = this.data, c = this.t.style; b; )
                b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
              1 === a &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        ya("className", {
          parser: function (a, b, d, f, g, h, i) {
            var j,
              k,
              l,
              m,
              n,
              o = a.getAttribute("class") || "",
              p = a.style.cssText;
            if (
              ((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)),
              (g.setRatio = Wa),
              (g.pr = -11),
              (c = !0),
              (g.b = o),
              (k = ca(a, e)),
              (l = a._gsClassPT))
            ) {
              for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
              l.setRatio(1);
            }
            return (
              (a._gsClassPT = g),
              (g.e =
                "=" !== b.charAt(1)
                  ? b
                  : o.replace(
                      new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
              a.setAttribute("class", g.e),
              (j = da(a, k, ca(a), i, m)),
              a.setAttribute("class", o),
              (g.data = j.firstMPT),
              (a.style.cssText = p),
              (g = g.xfirst = f.parse(a, j.difs, g, h))
            );
          },
        });
        var Xa = function (a) {
          if (
            (1 === a || 0 === a) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var b,
              c,
              d,
              e,
              f,
              g = this.t.style,
              h = i.transform.parse;
            if ("all" === this.e) (g.cssText = ""), (e = !0);
            else
              for (
                b = this.e.split(" ").join("").split(","), d = b.length;
                --d > -1;

              )
                (c = b[d]),
                  i[c] &&
                    (i[c].parse === h
                      ? (e = !0)
                      : (c = "transformOrigin" === c ? Ea : i[c].p)),
                  Va(g, c);
            e &&
              (Va(g, Ca),
              (f = this.t._gsTransform),
              f &&
                (f.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          ya("clearProps", {
            parser: function (a, b, d, e, f) {
              return (
                (f = new ta(a, d, 0, 0, f, 2)),
                (f.setRatio = Xa),
                (f.e = b),
                (f.pr = -10),
                (f.data = e._tween),
                (c = !0),
                f
              );
            },
          }),
            j = "bezier,throwProps,physicsProps,physics2D".split(","),
            wa = j.length;
          wa--;

        )
          za(j[wa]);
        (j = g.prototype),
          (j._firstPT = j._lastParsedTransform = j._transform = null),
          (j._onInitTween = function (a, b, h, j) {
            if (!a.nodeType) return !1;
            (this._target = q = a),
              (this._tween = h),
              (this._vars = b),
              (r = j),
              (k = b.autoRound),
              (c = !1),
              (d = b.suffixMap || g.suffixMap),
              (e = $(a, "")),
              (f = this._overwriteProps);
            var n,
              p,
              s,
              t,
              u,
              v,
              w,
              x,
              z,
              A = a.style;
            if (
              (l &&
                "" === A.zIndex &&
                ((n = _(a, "zIndex", e)),
                ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
              "string" == typeof b &&
                ((t = A.cssText),
                (n = ca(a, e)),
                (A.cssText = t + ";" + b),
                (n = da(a, n, ca(a)).difs),
                !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)),
                (b = n),
                (A.cssText = t)),
              b.className
                ? (this._firstPT = p =
                    i.className.parse(
                      a,
                      b.className,
                      "className",
                      this,
                      null,
                      null,
                      b
                    ))
                : (this._firstPT = p = this.parse(a, b, null)),
              this._transformType)
            ) {
              for (
                z = 3 === this._transformType,
                  Ca
                    ? m &&
                      ((l = !0),
                      "" === A.zIndex &&
                        ((w = _(a, "zIndex", e)),
                        ("auto" === w || "" === w) &&
                          this._addLazySet(A, "zIndex", 0)),
                      o &&
                        this._addLazySet(
                          A,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (z ? "visible" : "hidden")
                        ))
                    : (A.zoom = 1),
                  s = p;
                s && s._next;

              )
                s = s._next;
              (x = new ta(a, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, s),
                (x.setRatio = Ca ? Ta : Sa),
                (x.data = this._transform || Ra(a, e, !0)),
                (x.tween = h),
                (x.pr = -1),
                f.pop();
            }
            if (c) {
              for (; p; ) {
                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                  (p._next = s) ? (s._prev = p) : (u = p),
                  (p = v);
              }
              this._firstPT = t;
            }
            return !0;
          }),
          (j.parse = function (a, b, c, f) {
            var g,
              h,
              j,
              l,
              m,
              n,
              o,
              p,
              s,
              t,
              u = a.style;
            for (g in b)
              (n = b[g]),
                "function" == typeof n && (n = n(r, q)),
                (h = i[g]),
                h
                  ? (c = h.parse(a, n, g, this, c, f, b))
                  : ((m = _(a, g, e) + ""),
                    (s = "string" == typeof n),
                    "color" === g ||
                    "fill" === g ||
                    "stroke" === g ||
                    -1 !== g.indexOf("Color") ||
                    (s && A.test(n))
                      ? (s ||
                          ((n = na(n)),
                          (n =
                            (n.length > 3 ? "rgba(" : "rgb(") +
                            n.join(",") +
                            ")")),
                        (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                      : s && J.test(n)
                      ? (c = va(u, g, m, n, !0, null, c, 0, f))
                      : ((j = parseFloat(m)),
                        (o = j || 0 === j ? m.substr((j + "").length) : ""),
                        ("" === m || "auto" === m) &&
                          ("width" === g || "height" === g
                            ? ((j = ga(a, g, e)), (o = "px"))
                            : "left" === g || "top" === g
                            ? ((j = ba(a, g, e)), (o = "px"))
                            : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                        (t = s && "=" === n.charAt(1)),
                        t
                          ? ((l = parseInt(n.charAt(0) + "1", 10)),
                            (n = n.substr(2)),
                            (l *= parseFloat(n)),
                            (p = n.replace(w, "")))
                          : ((l = parseFloat(n)),
                            (p = s ? n.replace(w, "") : "")),
                        "" === p && (p = g in d ? d[g] : o),
                        (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                        o !== p &&
                          "" !== p &&
                          (l || 0 === l) &&
                          j &&
                          ((j = aa(a, g, j, o)),
                          "%" === p
                            ? ((j /= aa(a, g, 100, "%") / 100),
                              b.strictUnits !== !0 && (m = j + "%"))
                            : "em" === p ||
                              "rem" === p ||
                              "vw" === p ||
                              "vh" === p
                            ? (j /= aa(a, g, 1, p))
                            : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                          t && (l || 0 === l) && (n = l + j + p)),
                        t && (l += j),
                        (!j && 0 !== j) || (!l && 0 !== l)
                          ? void 0 !== u[g] &&
                            (n || (n + "" != "NaN" && null != n))
                            ? ((c = new ta(
                                u,
                                g,
                                l || j || 0,
                                0,
                                c,
                                -1,
                                g,
                                !1,
                                0,
                                m,
                                n
                              )),
                              (c.xs0 =
                                "none" !== n ||
                                ("display" !== g && -1 === g.indexOf("Style"))
                                  ? n
                                  : m))
                            : W("invalid " + g + " tween value: " + b[g])
                          : ((c = new ta(
                              u,
                              g,
                              j,
                              l - j,
                              c,
                              0,
                              g,
                              k !== !1 && ("px" === p || "zIndex" === g),
                              0,
                              m,
                              n
                            )),
                            (c.xs0 = p)))),
                f && c && !c.plugin && (c.plugin = f);
            return c;
          }),
          (j.setRatio = function (a) {
            var b,
              c,
              d,
              e = this._firstPT,
              f = 1e-6;
            if (
              1 !== a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                a ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; e; ) {
                  if (
                    ((b = e.c * a + e.s),
                    e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0),
                    e.type)
                  )
                    if (1 === e.type)
                      if (((d = e.l), 2 === d))
                        e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                      else if (3 === d)
                        e.t[e.p] =
                          e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                      else if (4 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4;
                      else if (5 === d)
                        e.t[e.p] =
                          e.xs0 +
                          b +
                          e.xs1 +
                          e.xn1 +
                          e.xs2 +
                          e.xn2 +
                          e.xs3 +
                          e.xn3 +
                          e.xs4 +
                          e.xn4 +
                          e.xs5;
                      else {
                        for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    else
                      -1 === e.type
                        ? (e.t[e.p] = e.xs0)
                        : e.setRatio && e.setRatio(a);
                  else e.t[e.p] = b + e.xs0;
                  e = e._next;
                }
              else
                for (; e; )
                  2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a),
                    (e = e._next);
            else
              for (; e; ) {
                if (2 !== e.type)
                  if (e.r && -1 !== e.type)
                    if (((b = Math.round(e.s + e.c)), e.type)) {
                      if (1 === e.type) {
                        for (
                          d = e.l, c = e.xs0 + b + e.xs1, d = 1;
                          d < e.l;
                          d++
                        )
                          c += e["xn" + d] + e["xs" + (d + 1)];
                        e.t[e.p] = c;
                      }
                    } else e.t[e.p] = b + e.xs0;
                  else e.t[e.p] = e.e;
                else e.setRatio(a);
                e = e._next;
              }
          }),
          (j._enableTransforms = function (a) {
            (this._transform = this._transform || Ra(this._target, e, !0)),
              (this._transformType =
                (this._transform.svg && Aa) || (!a && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ya = function (a) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (j._addLazySet = function (a, b, c) {
          var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
          (d.e = c), (d.setRatio = Ya), (d.data = this);
        }),
          (j._linkCSSP = function (a, b, c, d) {
            return (
              a &&
                (b && (b._prev = a),
                a._next && (a._next._prev = a._prev),
                a._prev
                  ? (a._prev._next = a._next)
                  : this._firstPT === a &&
                    ((this._firstPT = a._next), (d = !0)),
                c
                  ? (c._next = a)
                  : d || null !== this._firstPT || (this._firstPT = a),
                (a._next = b),
                (a._prev = c)),
              a
            );
          }),
          (j._mod = function (a) {
            for (var b = this._firstPT; b; )
              "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1),
                (b = b._next);
          }),
          (j._kill = function (b) {
            var c,
              d,
              e,
              f = b;
            if (b.autoAlpha || b.alpha) {
              f = {};
              for (d in b) f[d] = b[d];
              (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
            }
            for (
              b.className &&
                (c = this._classNamePT) &&
                ((e = c.xfirst),
                e && e._prev
                  ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                  : e === this._firstPT && (this._firstPT = c._next),
                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                (this._classNamePT = null)),
                c = this._firstPT;
              c;

            )
              c.plugin &&
                c.plugin !== d &&
                c.plugin._kill &&
                (c.plugin._kill(b), (d = c.plugin)),
                (c = c._next);
            return a.prototype._kill.call(this, f);
          });
        var Za = function (a, b, c) {
          var d, e, f, g;
          if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
          else
            for (d = a.childNodes, e = d.length; --e > -1; )
              (f = d[e]),
                (g = f.type),
                f.style && (b.push(ca(f)), c && c.push(f)),
                (1 !== g && 9 !== g && 11 !== g) ||
                  !f.childNodes.length ||
                  Za(f, b, c);
        };
        return (
          (g.cascadeTo = function (a, c, d) {
            var e,
              f,
              g,
              h,
              i = b.to(a, c, d),
              j = [i],
              k = [],
              l = [],
              m = [],
              n = b._internals.reservedProps;
            for (
              a = i._targets || i.target,
                Za(a, k, m),
                i.render(c, !0, !0),
                Za(a, l),
                i.render(0, !0, !0),
                i._enabled(!0),
                e = m.length;
              --e > -1;

            )
              if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                f = f.difs;
                for (g in d) n[g] && (f[g] = d[g]);
                h = {};
                for (g in f) h[g] = k[e][g];
                j.push(b.fromTo(m[e], c, h, f));
              }
            return j;
          }),
          a.activate([g]),
          g
        );
      },
      !0
    ),
    (function () {
      var a = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function (a, b, c) {
            return (this._tween = c), !0;
          },
        }),
        b = function (a) {
          for (; a; ) a.f || a.blob || (a.m = Math.round), (a = a._next);
        },
        c = a.prototype;
      (c._onInitAllProps = function () {
        for (
          var a,
            c,
            d,
            e = this._tween,
            f = e.vars.roundProps.join
              ? e.vars.roundProps
              : e.vars.roundProps.split(","),
            g = f.length,
            h = {},
            i = e._propLookup.roundProps;
          --g > -1;

        )
          h[f[g]] = Math.round;
        for (g = f.length; --g > -1; )
          for (a = f[g], c = e._firstPT; c; )
            (d = c._next),
              c.pg
                ? c.t._mod(h)
                : c.n === a &&
                  (2 === c.f && c.t
                    ? b(c.t._firstPT)
                    : (this._add(c.t, a, c.s, c.c),
                      d && (d._prev = c._prev),
                      c._prev
                        ? (c._prev._next = d)
                        : e._firstPT === c && (e._firstPT = d),
                      (c._next = c._prev = null),
                      (e._propLookup[a] = i))),
              (c = d);
        return !1;
      }),
        (c._add = function (a, b, c, d) {
          this._addTween(a, b, c, c + d, b, Math.round),
            this._overwriteProps.push(b);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function (a, b, c, d) {
          var e, f;
          if ("function" != typeof a.setAttribute) return !1;
          for (e in b)
            (f = b[e]),
              "function" == typeof f && (f = f(d, a)),
              this._addTween(
                a,
                "setAttribute",
                a.getAttribute(e) + "",
                f + "",
                e,
                !1,
                e
              ),
              this._overwriteProps.push(e);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.0",
      API: 2,
      init: function (a, b, c, d) {
        "object" != typeof b && (b = { rotation: b }), (this.finals = {});
        var e,
          f,
          g,
          h,
          i,
          j,
          k = b.useRadians === !0 ? 2 * Math.PI : 360,
          l = 1e-6;
        for (e in b)
          "useRadians" !== e &&
            ((h = b[e]),
            "function" == typeof h && (h = h(d, a)),
            (j = (h + "").split("_")),
            (f = j[0]),
            (g = parseFloat(
              "function" != typeof a[e]
                ? a[e]
                : a[
                    e.indexOf("set") ||
                    "function" != typeof a["get" + e.substr(3)]
                      ? e
                      : "get" + e.substr(3)
                  ]()
            )),
            (h = this.finals[e] =
              "string" == typeof f && "=" === f.charAt(1)
                ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2))
                : Number(f) || 0),
            (i = h - g),
            j.length &&
              ((f = j.join("_")),
              -1 !== f.indexOf("short") &&
                ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
              -1 !== f.indexOf("_cw") && 0 > i
                ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k)
                : -1 !== f.indexOf("ccw") &&
                  i > 0 &&
                  (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
            (i > l || -l > i) &&
              (this._addTween(a, e, g, g + i, e),
              this._overwriteProps.push(e)));
        return !0;
      },
      set: function (a) {
        var b;
        if (1 !== a) this._super.setRatio.call(this, a);
        else
          for (b = this._firstPT; b; )
            b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]),
              (b = b._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (a) {
        var b,
          c,
          d,
          e = _gsScope.GreenSockGlobals || _gsScope,
          f = e.com.greensock,
          g = 2 * Math.PI,
          h = Math.PI / 2,
          i = f._class,
          j = function (b, c) {
            var d = i("easing." + b, function () {}, !0),
              e = (d.prototype = new a());
            return (e.constructor = d), (e.getRatio = c), d;
          },
          k = a.register || function () {},
          l = function (a, b, c, d, e) {
            var f = i(
              "easing." + a,
              { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
              !0
            );
            return k(f, a), f;
          },
          m = function (a, b, c) {
            (this.t = a),
              (this.v = b),
              c &&
                ((this.next = c),
                (c.prev = this),
                (this.c = c.v - b),
                (this.gap = c.t - a));
          },
          n = function (b, c) {
            var d = i(
                "easing." + b,
                function (a) {
                  (this._p1 = a || 0 === a ? a : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              e = (d.prototype = new a());
            return (
              (e.constructor = d),
              (e.getRatio = c),
              (e.config = function (a) {
                return new d(a);
              }),
              d
            );
          },
          o = l(
            "Back",
            n("BackOut", function (a) {
              return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
            }),
            n("BackIn", function (a) {
              return a * a * ((this._p1 + 1) * a - this._p1);
            }),
            n("BackInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
                : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
            })
          ),
          p = i(
            "easing.SlowMo",
            function (a, b, c) {
              (b = b || 0 === b ? b : 0.7),
                null == a ? (a = 0.7) : a > 1 && (a = 1),
                (this._p = 1 !== a ? b : 0),
                (this._p1 = (1 - a) / 2),
                (this._p2 = a),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = c === !0);
            },
            !0
          ),
          q = (p.prototype = new a());
        return (
          (q.constructor = p),
          (q.getRatio = function (a) {
            var b = a + (0.5 - a) * this._p;
            return a < this._p1
              ? this._calcEnd
                ? 1 - (a = 1 - a / this._p1) * a
                : b - (a = 1 - a / this._p1) * a * a * a * b
              : a > this._p3
              ? this._calcEnd
                ? 1 - (a = (a - this._p3) / this._p1) * a
                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
              : this._calcEnd
              ? 1
              : b;
          }),
          (p.ease = new p(0.7, 0.7)),
          (q.config = p.config =
            function (a, b, c) {
              return new p(a, b, c);
            }),
          (b = i(
            "easing.SteppedEase",
            function (a) {
              (a = a || 1), (this._p1 = 1 / a), (this._p2 = a + 1);
            },
            !0
          )),
          (q = b.prototype = new a()),
          (q.constructor = b),
          (q.getRatio = function (a) {
            return (
              0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
              ((this._p2 * a) >> 0) * this._p1
            );
          }),
          (q.config = b.config =
            function (a) {
              return new b(a);
            }),
          (c = i(
            "easing.RoughEase",
            function (b) {
              b = b || {};
              for (
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i = b.taper || "none",
                  j = [],
                  k = 0,
                  l = 0 | (b.points || 20),
                  n = l,
                  o = b.randomize !== !1,
                  p = b.clamp === !0,
                  q = b.template instanceof a ? b.template : null,
                  r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                --n > -1;

              )
                (c = o ? Math.random() : (1 / l) * n),
                  (d = q ? q.getRatio(c) : c),
                  "none" === i
                    ? (e = r)
                    : "out" === i
                    ? ((f = 1 - c), (e = f * f * r))
                    : "in" === i
                    ? (e = c * c * r)
                    : 0.5 > c
                    ? ((f = 2 * c), (e = f * f * 0.5 * r))
                    : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                  o
                    ? (d += Math.random() * e - 0.5 * e)
                    : n % 2
                    ? (d += 0.5 * e)
                    : (d -= 0.5 * e),
                  p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                  (j[k++] = { x: c, y: d });
              for (
                j.sort(function (a, b) {
                  return a.x - b.x;
                }),
                  h = new m(1, 1, null),
                  n = l;
                --n > -1;

              )
                (g = j[n]), (h = new m(g.x, g.y, h));
              this._prev = new m(0, 0, 0 !== h.t ? h : h.next);
            },
            !0
          )),
          (q = c.prototype = new a()),
          (q.constructor = c),
          (q.getRatio = function (a) {
            var b = this._prev;
            if (a > b.t) {
              for (; b.next && a >= b.t; ) b = b.next;
              b = b.prev;
            } else for (; b.prev && a <= b.t; ) b = b.prev;
            return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
          }),
          (q.config = function (a) {
            return new c(a);
          }),
          (c.ease = new c()),
          l(
            "Bounce",
            j("BounceOut", function (a) {
              return 1 / 2.75 > a
                ? 7.5625 * a * a
                : 2 / 2.75 > a
                ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                : 2.5 / 2.75 > a
                ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
            }),
            j("BounceIn", function (a) {
              return (a = 1 - a) < 1 / 2.75
                ? 1 - 7.5625 * a * a
                : 2 / 2.75 > a
                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                : 2.5 / 2.75 > a
                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
            }),
            j("BounceInOut", function (a) {
              var b = 0.5 > a;
              return (
                (a = b ? 1 - 2 * a : 2 * a - 1),
                (a =
                  1 / 2.75 > a
                    ? 7.5625 * a * a
                    : 2 / 2.75 > a
                    ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                    : 2.5 / 2.75 > a
                    ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                    : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
              );
            })
          ),
          l(
            "Circ",
            j("CircOut", function (a) {
              return Math.sqrt(1 - (a -= 1) * a);
            }),
            j("CircIn", function (a) {
              return -(Math.sqrt(1 - a * a) - 1);
            }),
            j("CircInOut", function (a) {
              return (a *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - a * a) - 1)
                : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
            })
          ),
          (d = function (b, c, d) {
            var e = i(
                "easing." + b,
                function (a, b) {
                  (this._p1 = a >= 1 ? a : 1),
                    (this._p2 = (b || d) / (1 > a ? a : 1)),
                    (this._p3 =
                      (this._p2 / g) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = g / this._p2);
                },
                !0
              ),
              f = (e.prototype = new a());
            return (
              (f.constructor = e),
              (f.getRatio = c),
              (f.config = function (a, b) {
                return new e(a, b);
              }),
              e
            );
          }),
          l(
            "Elastic",
            d(
              "ElasticOut",
              function (a) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * a) *
                    Math.sin((a - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            d(
              "ElasticIn",
              function (a) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (a -= 1)) *
                  Math.sin((a - this._p3) * this._p2)
                );
              },
              0.3
            ),
            d(
              "ElasticInOut",
              function (a) {
                return (a *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (a -= 1)) *
                        Math.sin((a - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          l(
            "Expo",
            j("ExpoOut", function (a) {
              return 1 - Math.pow(2, -10 * a);
            }),
            j("ExpoIn", function (a) {
              return Math.pow(2, 10 * (a - 1)) - 0.001;
            }),
            j("ExpoInOut", function (a) {
              return (a *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (a - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
            })
          ),
          l(
            "Sine",
            j("SineOut", function (a) {
              return Math.sin(a * h);
            }),
            j("SineIn", function (a) {
              return -Math.cos(a * h) + 1;
            }),
            j("SineInOut", function (a) {
              return -0.5 * (Math.cos(Math.PI * a) - 1);
            })
          ),
          i(
            "easing.EaseLookup",
            {
              find: function (b) {
                return a.map[b];
              },
            },
            !0
          ),
          k(e.SlowMo, "SlowMo", "ease,"),
          k(c, "RoughEase", "ease,"),
          k(b, "SteppedEase", "ease,"),
          o
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a, b) {
    "use strict";
    var c = {},
      d = a.document,
      e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
    if (!e.TweenLite) {
      var f,
        g,
        h,
        i,
        j,
        k = function (a) {
          var b,
            c = a.split("."),
            d = e;
          for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
          return d;
        },
        l = k("com.greensock"),
        m = 1e-10,
        n = function (a) {
          var b,
            c = [],
            d = a.length;
          for (b = 0; b !== d; c.push(a[b++]));
          return c;
        },
        o = function () {},
        p = (function () {
          var a = Object.prototype.toString,
            b = a.call([]);
          return function (c) {
            return (
              null != c &&
              (c instanceof Array ||
                ("object" == typeof c && !!c.push && a.call(c) === b))
            );
          };
        })(),
        q = {},
        r = function (d, f, g, h) {
          (this.sc = q[d] ? q[d].sc : []),
            (q[d] = this),
            (this.gsClass = null),
            (this.func = g);
          var i = [];
          (this.check = function (j) {
            for (var l, m, n, o, p, s = f.length, t = s; --s > -1; )
              (l = q[f[s]] || new r(f[s], [])).gsClass
                ? ((i[s] = l.gsClass), t--)
                : j && l.sc.push(this);
            if (0 === t && g) {
              if (
                ((m = ("com.greensock." + d).split(".")),
                (n = m.pop()),
                (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)),
                h)
              )
                if (
                  ((e[n] = c[n] = o),
                  (p = "undefined" != typeof module && module.exports),
                  !p && "function" == typeof define && define.amd)
                )
                  define(
                    (a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") +
                      d.split(".").pop(),
                    [],
                    function () {
                      return o;
                    }
                  );
                else if (p)
                  if (d === b) {
                    module.exports = c[b] = o;
                    for (s in c) o[s] = c[s];
                  } else c[b] && (c[b][n] = o);
              for (s = 0; s < this.sc.length; s++) this.sc[s].check();
            }
          }),
            this.check(!0);
        },
        s = (a._gsDefine = function (a, b, c, d) {
          return new r(a, b, c, d);
        }),
        t = (l._class = function (a, b, c) {
          return (
            (b = b || function () {}),
            s(
              a,
              [],
              function () {
                return b;
              },
              c
            ),
            b
          );
        });
      s.globals = e;
      var u = [0, 0, 1, 1],
        v = t(
          "easing.Ease",
          function (a, b, c, d) {
            (this._func = a),
              (this._type = c || 0),
              (this._power = d || 0),
              (this._params = b ? u.concat(b) : u);
          },
          !0
        ),
        w = (v.map = {}),
        x = (v.register = function (a, b, c, d) {
          for (
            var e,
              f,
              g,
              h,
              i = b.split(","),
              j = i.length,
              k = (c || "easeIn,easeOut,easeInOut").split(",");
            --j > -1;

          )
            for (
              f = i[j],
                e = d ? t("easing." + f, null, !0) : l.easing[f] || {},
                g = k.length;
              --g > -1;

            )
              (h = k[g]),
                (w[f + "." + h] =
                  w[h + f] =
                  e[h] =
                    a.getRatio ? a : a[h] || new a());
        });
      for (
        h = v.prototype,
          h._calcEnd = !1,
          h.getRatio = function (a) {
            if (this._func)
              return (
                (this._params[0] = a), this._func.apply(null, this._params)
              );
            var b = this._type,
              c = this._power,
              d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
            return (
              1 === c
                ? (d *= d)
                : 2 === c
                ? (d *= d * d)
                : 3 === c
                ? (d *= d * d * d)
                : 4 === c && (d *= d * d * d * d),
              1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2
            );
          },
          f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          g = f.length;
        --g > -1;

      )
        (h = f[g] + ",Power" + g),
          x(new v(null, null, 1, g), h, "easeOut", !0),
          x(
            new v(null, null, 2, g),
            h,
            "easeIn" + (0 === g ? ",easeNone" : "")
          ),
          x(new v(null, null, 3, g), h, "easeInOut");
      (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
      var y = t("events.EventDispatcher", function (a) {
        (this._listeners = {}), (this._eventTarget = a || this);
      });
      (h = y.prototype),
        (h.addEventListener = function (a, b, c, d, e) {
          e = e || 0;
          var f,
            g,
            h = this._listeners[a],
            k = 0;
          for (
            this !== i || j || i.wake(),
              null == h && (this._listeners[a] = h = []),
              g = h.length;
            --g > -1;

          )
            (f = h[g]),
              f.c === b && f.s === c
                ? h.splice(g, 1)
                : 0 === k && f.pr < e && (k = g + 1);
          h.splice(k, 0, { c: b, s: c, up: d, pr: e });
        }),
        (h.removeEventListener = function (a, b) {
          var c,
            d = this._listeners[a];
          if (d)
            for (c = d.length; --c > -1; )
              if (d[c].c === b) return void d.splice(c, 1);
        }),
        (h.dispatchEvent = function (a) {
          var b,
            c,
            d,
            e = this._listeners[a];
          if (e)
            for (
              b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget;
              --b > -1;

            )
              (d = e[b]),
                d &&
                  (d.up
                    ? d.c.call(d.s || c, { type: a, target: c })
                    : d.c.call(d.s || c));
        });
      var z = a.requestAnimationFrame,
        A = a.cancelAnimationFrame,
        B =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        C = B();
      for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z; )
        (z = a[f[g] + "RequestAnimationFrame"]),
          (A =
            a[f[g] + "CancelAnimationFrame"] ||
            a[f[g] + "CancelRequestAnimationFrame"]);
      t("Ticker", function (a, b) {
        var c,
          e,
          f,
          g,
          h,
          k = this,
          l = B(),
          n = b !== !1 && z ? "auto" : !1,
          p = 500,
          q = 33,
          r = "tick",
          s = function (a) {
            var b,
              d,
              i = B() - C;
            i > p && (l += i - q),
              (C += i),
              (k.time = (C - l) / 1e3),
              (b = k.time - h),
              (!c || b > 0 || a === !0) &&
                (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)),
              a !== !0 && (f = e(s)),
              d && k.dispatchEvent(r);
          };
        y.call(k),
          (k.time = k.frame = 0),
          (k.tick = function () {
            s(!0);
          }),
          (k.lagSmoothing = function (a, b) {
            (p = a || 1 / m), (q = Math.min(b, p, 0));
          }),
          (k.sleep = function () {
            null != f &&
              (n && A ? A(f) : clearTimeout(f),
              (e = o),
              (f = null),
              k === i && (j = !1));
          }),
          (k.wake = function (a) {
            null !== f
              ? k.sleep()
              : a
              ? (l += -C + (C = B()))
              : k.frame > 10 && (C = B() - p + 5),
              (e =
                0 === c
                  ? o
                  : n && z
                  ? z
                  : function (a) {
                      return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                    }),
              k === i && (j = !0),
              s(2);
          }),
          (k.fps = function (a) {
            return arguments.length
              ? ((c = a),
                (g = 1 / (c || 60)),
                (h = this.time + g),
                void k.wake())
              : c;
          }),
          (k.useRAF = function (a) {
            return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
          }),
          k.fps(a),
          setTimeout(function () {
            "auto" === n &&
              k.frame < 5 &&
              "hidden" !== d.visibilityState &&
              k.useRAF(!1);
          }, 1500);
      }),
        (h = l.Ticker.prototype = new l.events.EventDispatcher()),
        (h.constructor = l.Ticker);
      var D = t("core.Animation", function (a, b) {
        if (
          ((this.vars = b = b || {}),
          (this._duration = this._totalDuration = a || 0),
          (this._delay = Number(b.delay) || 0),
          (this._timeScale = 1),
          (this._active = b.immediateRender === !0),
          (this.data = b.data),
          (this._reversed = b.reversed === !0),
          W)
        ) {
          j || i.wake();
          var c = this.vars.useFrames ? V : W;
          c.add(this, c._time), this.vars.paused && this.paused(!0);
        }
      });
      (i = D.ticker = new l.Ticker()),
        (h = D.prototype),
        (h._dirty = h._gc = h._initted = h._paused = !1),
        (h._totalTime = h._time = 0),
        (h._rawPrevTime = -1),
        (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
        (h._paused = !1);
      var E = function () {
        j && B() - C > 2e3 && i.wake(), setTimeout(E, 2e3);
      };
      E(),
        (h.play = function (a, b) {
          return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
        }),
        (h.pause = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!0);
        }),
        (h.resume = function (a, b) {
          return null != a && this.seek(a, b), this.paused(!1);
        }),
        (h.seek = function (a, b) {
          return this.totalTime(Number(a), b !== !1);
        }),
        (h.restart = function (a, b) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(a ? -this._delay : 0, b !== !1, !0);
        }),
        (h.reverse = function (a, b) {
          return (
            null != a && this.seek(a || this.totalDuration(), b),
            this.reversed(!0).paused(!1)
          );
        }),
        (h.render = function (a, b, c) {}),
        (h.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (h.isActive = function () {
          var a,
            b = this._timeline,
            c = this._startTime;
          return (
            !b ||
            (!this._gc &&
              !this._paused &&
              b.isActive() &&
              (a = b.rawTime(!0)) >= c &&
              a < c + this.totalDuration() / this._timeScale)
          );
        }),
        (h._enabled = function (a, b) {
          return (
            j || i.wake(),
            (this._gc = !a),
            (this._active = this.isActive()),
            b !== !0 &&
              (a && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !a && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (h._kill = function (a, b) {
          return this._enabled(!1, !1);
        }),
        (h.kill = function (a, b) {
          return this._kill(a, b), this;
        }),
        (h._uncache = function (a) {
          for (var b = a ? this : this.timeline; b; )
            (b._dirty = !0), (b = b.timeline);
          return this;
        }),
        (h._swapSelfInParams = function (a) {
          for (var b = a.length, c = a.concat(); --b > -1; )
            "{self}" === a[b] && (c[b] = this);
          return c;
        }),
        (h._callback = function (a) {
          var b = this.vars,
            c = b[a],
            d = b[a + "Params"],
            e = b[a + "Scope"] || b.callbackScope || this,
            f = d ? d.length : 0;
          switch (f) {
            case 0:
              c.call(e);
              break;
            case 1:
              c.call(e, d[0]);
              break;
            case 2:
              c.call(e, d[0], d[1]);
              break;
            default:
              c.apply(e, d);
          }
        }),
        (h.eventCallback = function (a, b, c, d) {
          if ("on" === (a || "").substr(0, 2)) {
            var e = this.vars;
            if (1 === arguments.length) return e[a];
            null == b
              ? delete e[a]
              : ((e[a] = b),
                (e[a + "Params"] =
                  p(c) && -1 !== c.join("").indexOf("{self}")
                    ? this._swapSelfInParams(c)
                    : c),
                (e[a + "Scope"] = d)),
              "onUpdate" === a && (this._onUpdate = b);
          }
          return this;
        }),
        (h.delay = function (a) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + a - this._delay),
              (this._delay = a),
              this)
            : this._delay;
        }),
        (h.duration = function (a) {
          return arguments.length
            ? ((this._duration = this._totalDuration = a),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== a &&
                this.totalTime(this._totalTime * (a / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (h.totalDuration = function (a) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(a) : this._totalDuration
          );
        }),
        (h.time = function (a, b) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(a > this._duration ? this._duration : a, b))
            : this._time;
        }),
        (h.totalTime = function (a, b, c) {
          if ((j || i.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > a && !c && (a += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var d = this._totalDuration,
                e = this._timeline;
              if (
                (a > d && !c && (a = d),
                (this._startTime =
                  (this._paused ? this._pauseTime : e._time) -
                  (this._reversed ? d - a : a) / this._timeScale),
                e._dirty || this._uncache(!1),
                e._timeline)
              )
                for (; e._timeline; )
                  e._timeline._time !==
                    (e._startTime + e._totalTime) / e._timeScale &&
                    e.totalTime(e._totalTime, !0),
                    (e = e._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== a || 0 === this._duration) &&
                (J.length && Y(), this.render(a, b, !1), J.length && Y());
          }
          return this;
        }),
        (h.progress = h.totalProgress =
          function (a, b) {
            var c = this.duration();
            return arguments.length
              ? this.totalTime(c * a, b)
              : c
              ? this._time / c
              : this.ratio;
          }),
        (h.startTime = function (a) {
          return arguments.length
            ? (a !== this._startTime &&
                ((this._startTime = a),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, a - this._delay)),
              this)
            : this._startTime;
        }),
        (h.endTime = function (a) {
          return (
            this._startTime +
            (0 != a ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (h.timeScale = function (a) {
          if (!arguments.length) return this._timeScale;
          if (
            ((a = a || m), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var b = this._pauseTime,
              c = b || 0 === b ? b : this._timeline.totalTime();
            this._startTime = c - ((c - this._startTime) * this._timeScale) / a;
          }
          return (this._timeScale = a), this._uncache(!1);
        }),
        (h.reversed = function (a) {
          return arguments.length
            ? (a != this._reversed &&
                ((this._reversed = a),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (h.paused = function (a) {
          if (!arguments.length) return this._paused;
          var b,
            c,
            d = this._timeline;
          return (
            a != this._paused &&
              d &&
              (j || a || i.wake(),
              (b = d.rawTime()),
              (c = b - this._pauseTime),
              !a &&
                d.smoothChildTiming &&
                ((this._startTime += c), this._uncache(!1)),
              (this._pauseTime = a ? b : null),
              (this._paused = a),
              (this._active = this.isActive()),
              !a &&
                0 !== c &&
                this._initted &&
                this.duration() &&
                ((b = d.smoothChildTiming
                  ? this._totalTime
                  : (b - this._startTime) / this._timeScale),
                this.render(b, b === this._totalTime, !0))),
            this._gc && !a && this._enabled(!0, !1),
            this
          );
        });
      var F = t("core.SimpleTimeline", function (a) {
        D.call(this, 0, a),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (h = F.prototype = new D()),
        (h.constructor = F),
        (h.kill()._gc = !1),
        (h._first = h._last = h._recent = null),
        (h._sortChildren = !1),
        (h.add = h.insert =
          function (a, b, c, d) {
            var e, f;
            if (
              ((a._startTime = Number(b || 0) + a._delay),
              a._paused &&
                this !== a._timeline &&
                (a._pauseTime =
                  a._startTime +
                  (this.rawTime() - a._startTime) / a._timeScale),
              a.timeline && a.timeline._remove(a, !0),
              (a.timeline = a._timeline = this),
              a._gc && a._enabled(!0, !0),
              (e = this._last),
              this._sortChildren)
            )
              for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
            return (
              e
                ? ((a._next = e._next), (e._next = a))
                : ((a._next = this._first), (this._first = a)),
              a._next ? (a._next._prev = a) : (this._last = a),
              (a._prev = e),
              (this._recent = a),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (h._remove = function (a, b) {
          return (
            a.timeline === this &&
              (b || a._enabled(!1, !0),
              a._prev
                ? (a._prev._next = a._next)
                : this._first === a && (this._first = a._next),
              a._next
                ? (a._next._prev = a._prev)
                : this._last === a && (this._last = a._prev),
              (a._next = a._prev = a.timeline = null),
              a === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (h.render = function (a, b, c) {
          var d,
            e = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = a; e; )
            (d = e._next),
              (e._active || (a >= e._startTime && !e._paused)) &&
                (e._reversed
                  ? e.render(
                      (e._dirty ? e.totalDuration() : e._totalDuration) -
                        (a - e._startTime) * e._timeScale,
                      b,
                      c
                    )
                  : e.render((a - e._startTime) * e._timeScale, b, c)),
              (e = d);
        }),
        (h.rawTime = function () {
          return j || i.wake(), this._totalTime;
        });
      var G = t(
          "TweenLite",
          function (b, c, d) {
            if (
              (D.call(this, c, d),
              (this.render = G.prototype.render),
              null == b)
            )
              throw "Cannot tween a null target.";
            this.target = b = "string" != typeof b ? b : G.selector(b) || b;
            var e,
              f,
              g,
              h =
                b.jquery ||
                (b.length &&
                  b !== a &&
                  b[0] &&
                  (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
              i = this.vars.overwrite;
            if (
              ((this._overwrite = i =
                null == i
                  ? U[G.defaultOverwrite]
                  : "number" == typeof i
                  ? i >> 0
                  : U[i]),
              (h || b instanceof Array || (b.push && p(b))) &&
                "number" != typeof b[0])
            )
              for (
                this._targets = g = n(b),
                  this._propLookup = [],
                  this._siblings = [],
                  e = 0;
                e < g.length;
                e++
              )
                (f = g[e]),
                  f
                    ? "string" != typeof f
                      ? f.length &&
                        f !== a &&
                        f[0] &&
                        (f[0] === a ||
                          (f[0].nodeType && f[0].style && !f.nodeType))
                        ? (g.splice(e--, 1),
                          (this._targets = g = g.concat(n(f))))
                        : ((this._siblings[e] = Z(f, this, !1)),
                          1 === i &&
                            this._siblings[e].length > 1 &&
                            _(f, this, null, 1, this._siblings[e]))
                      : ((f = g[e--] = G.selector(f)),
                        "string" == typeof f && g.splice(e + 1, 1))
                    : g.splice(e--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = Z(b, this, !1)),
                1 === i &&
                  this._siblings.length > 1 &&
                  _(b, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === c &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -m), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        H = function (b) {
          return (
            b &&
            b.length &&
            b !== a &&
            b[0] &&
            (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))
          );
        },
        I = function (a, b) {
          var c,
            d = {};
          for (c in a)
            T[c] ||
              (c in b &&
                "transform" !== c &&
                "x" !== c &&
                "y" !== c &&
                "width" !== c &&
                "height" !== c &&
                "className" !== c &&
                "border" !== c) ||
              !(!Q[c] || (Q[c] && Q[c]._autoCSS)) ||
              ((d[c] = a[c]), delete a[c]);
          a.css = d;
        };
      (h = G.prototype = new D()),
        (h.constructor = G),
        (h.kill()._gc = !1),
        (h.ratio = 0),
        (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
        (h._notifyPluginsOfEnabled = h._lazy = !1),
        (G.version = "1.19.1"),
        (G.defaultEase = h._ease = new v(null, null, 1, 1)),
        (G.defaultOverwrite = "auto"),
        (G.ticker = i),
        (G.autoSleep = 120),
        (G.lagSmoothing = function (a, b) {
          i.lagSmoothing(a, b);
        }),
        (G.selector =
          a.$ ||
          a.jQuery ||
          function (b) {
            var c = a.$ || a.jQuery;
            return c
              ? ((G.selector = c), c(b))
              : "undefined" == typeof d
              ? b
              : d.querySelectorAll
              ? d.querySelectorAll(b)
              : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
          });
      var J = [],
        K = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        M = function (a) {
          for (var b, c = this._firstPT, d = 1e-6; c; )
            (b = c.blob
              ? 1 === a
                ? this.end
                : a
                ? this.join("")
                : this.start
              : c.c * a + c.s),
              c.m
                ? (b = c.m(b, this._target || c.t))
                : d > b && b > -d && !c.blob && (b = 0),
              c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
              (c = c._next);
        },
        N = function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = [],
            m = 0,
            n = "",
            o = 0;
          for (
            l.start = a,
              l.end = b,
              a = l[0] = a + "",
              b = l[1] = b + "",
              c && (c(l), (a = l[0]), (b = l[1])),
              l.length = 0,
              e = a.match(L) || [],
              f = b.match(L) || [],
              d &&
                ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
              i = f.length,
              h = 0;
            i > h;
            h++
          )
            (k = f[h]),
              (j = b.substr(m, b.indexOf(k, m) - m)),
              (n += j || !h ? j : ","),
              (m += j.length),
              o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
              k === e[h] || e.length <= h
                ? (n += k)
                : (n && (l.push(n), (n = "")),
                  (g = parseFloat(e[h])),
                  l.push(g),
                  (l._firstPT = {
                    _next: l._firstPT,
                    t: l,
                    p: l.length - 1,
                    s: g,
                    c:
                      ("=" === k.charAt(1)
                        ? parseInt(k.charAt(0) + "1", 10) *
                          parseFloat(k.substr(2))
                        : parseFloat(k) - g) || 0,
                    f: 0,
                    m: o && 4 > o ? Math.round : 0,
                  })),
              (m += k.length);
          return (n += b.substr(m)), n && l.push(n), (l.setRatio = M), l;
        },
        O = function (a, b, c, d, e, f, g, h, i) {
          "function" == typeof d && (d = d(i || 0, a));
          var j,
            k = typeof a[b],
            l =
              "function" !== k
                ? ""
                : b.indexOf("set") ||
                  "function" != typeof a["get" + b.substr(3)]
                ? b
                : "get" + b.substr(3),
            m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
            n = "string" == typeof d && "=" === d.charAt(1),
            o = {
              t: a,
              p: b,
              s: m,
              f: "function" === k,
              pg: 0,
              n: e || b,
              m: f ? ("function" == typeof f ? f : Math.round) : 0,
              pr: 0,
              c: n
                ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2))
                : parseFloat(d) - m || 0,
            };
          return (
            ("number" != typeof m || ("number" != typeof d && !n)) &&
              (g ||
              isNaN(m) ||
              (!n && isNaN(d)) ||
              "boolean" == typeof m ||
              "boolean" == typeof d
                ? ((o.fp = g),
                  (j = N(m, n ? o.s + o.c : d, h || G.defaultStringFilter, o)),
                  (o = {
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: e || b,
                    pr: 0,
                    m: 0,
                  }))
                : ((o.s = parseFloat(m)),
                  n || (o.c = parseFloat(d) - o.s || 0))),
            o.c
              ? ((o._next = this._firstPT) && (o._next._prev = o),
                (this._firstPT = o),
                o)
              : void 0
          );
        },
        P = (G._internals = {
          isArray: p,
          isSelector: H,
          lazyTweens: J,
          blobDif: N,
        }),
        Q = (G._plugins = {}),
        R = (P.tweenLookup = {}),
        S = 0,
        T = (P.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        U = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        V = (D._rootFramesTimeline = new F()),
        W = (D._rootTimeline = new F()),
        X = 30,
        Y = (P.lazyRender = function () {
          var a,
            b = J.length;
          for (K = {}; --b > -1; )
            (a = J[b]),
              a &&
                a._lazy !== !1 &&
                (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
          J.length = 0;
        });
      (W._startTime = i.time),
        (V._startTime = i.frame),
        (W._active = V._active = !0),
        setTimeout(Y, 1),
        (D._updateRoot = G.render =
          function () {
            var a, b, c;
            if (
              (J.length && Y(),
              W.render((i.time - W._startTime) * W._timeScale, !1, !1),
              V.render((i.frame - V._startTime) * V._timeScale, !1, !1),
              J.length && Y(),
              i.frame >= X)
            ) {
              X = i.frame + (parseInt(G.autoSleep, 10) || 120);
              for (c in R) {
                for (b = R[c].tweens, a = b.length; --a > -1; )
                  b[a]._gc && b.splice(a, 1);
                0 === b.length && delete R[c];
              }
              if (
                ((c = W._first),
                (!c || c._paused) &&
                  G.autoSleep &&
                  !V._first &&
                  1 === i._listeners.tick.length)
              ) {
                for (; c && c._paused; ) c = c._next;
                c || i.sleep();
              }
            }
          }),
        i.addEventListener("tick", D._updateRoot);
      var Z = function (a, b, c) {
          var d,
            e,
            f = a._gsTweenID;
          if (
            (R[f || (a._gsTweenID = f = "t" + S++)] ||
              (R[f] = { target: a, tweens: [] }),
            b && ((d = R[f].tweens), (d[(e = d.length)] = b), c))
          )
            for (; --e > -1; ) d[e] === b && d.splice(e, 1);
          return R[f].tweens;
        },
        $ = function (a, b, c, d) {
          var e,
            f,
            g = a.vars.onOverwrite;
          return (
            g && (e = g(a, b, c, d)),
            (g = G.onOverwrite),
            g && (f = g(a, b, c, d)),
            e !== !1 && f !== !1
          );
        },
        _ = function (a, b, c, d, e) {
          var f, g, h, i;
          if (1 === d || d >= 4) {
            for (i = e.length, f = 0; i > f; f++)
              if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
              else if (5 === d) break;
            return g;
          }
          var j,
            k = b._startTime + m,
            l = [],
            n = 0,
            o = 0 === b._duration;
          for (f = e.length; --f > -1; )
            (h = e[f]) === b ||
              h._gc ||
              h._paused ||
              (h._timeline !== b._timeline
                ? ((j = j || aa(b, 0, o)), 0 === aa(h, j, o) && (l[n++] = h))
                : h._startTime <= k &&
                  h._startTime + h.totalDuration() / h._timeScale > k &&
                  (((o || !h._initted) && k - h._startTime <= 2e-10) ||
                    (l[n++] = h)));
          for (f = n; --f > -1; )
            if (
              ((h = l[f]),
              2 === d && h._kill(c, a, b) && (g = !0),
              2 !== d || (!h._firstPT && h._initted))
            ) {
              if (2 !== d && !$(h, b)) continue;
              h._enabled(!1, !1) && (g = !0);
            }
          return g;
        },
        aa = function (a, b, c) {
          for (
            var d = a._timeline, e = d._timeScale, f = a._startTime;
            d._timeline;

          ) {
            if (((f += d._startTime), (e *= d._timeScale), d._paused))
              return -100;
            d = d._timeline;
          }
          return (
            (f /= e),
            f > b
              ? f - b
              : (c && f === b) || (!a._initted && 2 * m > f - b)
              ? m
              : (f += a.totalDuration() / a._timeScale / e) > b + m
              ? 0
              : f - b - m
          );
        };
      (h._init = function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = this.vars,
          h = this._overwrittenProps,
          i = this._duration,
          j = !!g.immediateRender,
          k = g.ease;
        if (g.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (e = {});
          for (d in g.startAt) e[d] = g.startAt[d];
          if (
            ((e.overwrite = !1),
            (e.immediateRender = !0),
            (e.lazy = j && g.lazy !== !1),
            (e.startAt = e.delay = null),
            (this._startAt = G.to(this.target, 0, e)),
            j)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== i) return;
        } else if (g.runBackwards && 0 !== i)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (j = !1), (c = {});
            for (d in g) (T[d] && "autoCSS" !== d) || (c[d] = g[d]);
            if (
              ((c.overwrite = 0),
              (c.data = "isFromStart"),
              (c.lazy = j && g.lazy !== !1),
              (c.immediateRender = j),
              (this._startAt = G.to(this.target, 0, c)),
              j)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = k =
            k
              ? k instanceof v
                ? k
                : "function" == typeof k
                ? new v(k, g.easeParams)
                : w[k] || G.defaultEase
              : G.defaultEase),
          g.easeParams instanceof Array &&
            k.config &&
            (this._ease = k.config.apply(k, g.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (f = this._targets.length, a = 0; f > a; a++)
            this._initProps(
              this._targets[a],
              (this._propLookup[a] = {}),
              this._siblings[a],
              h ? h[a] : null,
              a
            ) && (b = !0);
        else
          b = this._initProps(
            this.target,
            this._propLookup,
            this._siblings,
            h,
            0
          );
        if (
          (b && G._onPluginEvent("_onInitAllProps", this),
          h &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          g.runBackwards)
        )
          for (c = this._firstPT; c; )
            (c.s += c.c), (c.c = -c.c), (c = c._next);
        (this._onUpdate = g.onUpdate), (this._initted = !0);
      }),
        (h._initProps = function (b, c, d, e, f) {
          var g, h, i, j, k, l;
          if (null == b) return !1;
          K[b._gsTweenID] && Y(),
            this.vars.css ||
              (b.style &&
                b !== a &&
                b.nodeType &&
                Q.css &&
                this.vars.autoCSS !== !1 &&
                I(this.vars, b));
          for (g in this.vars)
            if (((l = this.vars[g]), T[g]))
              l &&
                (l instanceof Array || (l.push && p(l))) &&
                -1 !== l.join("").indexOf("{self}") &&
                (this.vars[g] = l = this._swapSelfInParams(l, this));
            else if (
              Q[g] &&
              (j = new Q[g]())._onInitTween(b, this.vars[g], this, f)
            ) {
              for (
                this._firstPT = k =
                  {
                    _next: this._firstPT,
                    t: j,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: g,
                    pg: 1,
                    pr: j._priority,
                    m: 0,
                  },
                  h = j._overwriteProps.length;
                --h > -1;

              )
                c[j._overwriteProps[h]] = this._firstPT;
              (j._priority || j._onInitAllProps) && (i = !0),
                (j._onDisable || j._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                k._next && (k._next._prev = k);
            } else
              c[g] = O.call(
                this,
                b,
                g,
                "get",
                l,
                g,
                0,
                null,
                this.vars.stringFilter,
                f
              );
          return e && this._kill(e, b)
            ? this._initProps(b, c, d, e, f)
            : this._overwrite > 1 &&
              this._firstPT &&
              d.length > 1 &&
              _(b, this, c, this._overwrite, d)
            ? (this._kill(c, b), this._initProps(b, c, d, e, f))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (K[b._gsTweenID] = !0),
              i);
        }),
        (h.render = function (a, b, c) {
          var d,
            e,
            f,
            g,
            h = this._time,
            i = this._duration,
            j = this._rawPrevTime;
          if (a >= i - 1e-7 && a >= 0)
            (this._totalTime = this._time = i),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((d = !0),
                (e = "onComplete"),
                (c = c || this._timeline.autoRemoveChildren)),
              0 === i &&
                (this._initted || !this.vars.lazy || c) &&
                (this._startTime === this._timeline._duration && (a = 0),
                (0 > j ||
                  (0 >= a && a >= -1e-7) ||
                  (j === m && "isPause" !== this.data)) &&
                  j !== a &&
                  ((c = !0), j > m && (e = "onReverseComplete")),
                (this._rawPrevTime = g = !b || a || j === a ? a : m));
          else if (1e-7 > a)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== h || (0 === i && j > 0)) &&
                ((e = "onReverseComplete"), (d = this._reversed)),
              0 > a &&
                ((this._active = !1),
                0 === i &&
                  (this._initted || !this.vars.lazy || c) &&
                  (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0),
                  (this._rawPrevTime = g = !b || a || j === a ? a : m))),
              this._initted || (c = !0);
          else if (((this._totalTime = this._time = a), this._easeType)) {
            var k = a / i,
              l = this._easeType,
              n = this._easePower;
            (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
              3 === l && (k *= 2),
              1 === n
                ? (k *= k)
                : 2 === n
                ? (k *= k * k)
                : 3 === n
                ? (k *= k * k * k)
                : 4 === n && (k *= k * k * k * k),
              1 === l
                ? (this.ratio = 1 - k)
                : 2 === l
                ? (this.ratio = k)
                : 0.5 > a / i
                ? (this.ratio = k / 2)
                : (this.ratio = 1 - k / 2);
          } else this.ratio = this._ease.getRatio(a / i);
          if (this._time !== h || c) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !c &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = h),
                  (this._rawPrevTime = j),
                  J.push(this),
                  void (this._lazy = [a, b])
                );
              this._time && !d
                ? (this.ratio = this._ease.getRatio(this._time / i))
                : d &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== h &&
                    a >= 0 &&
                    (this._active = !0)),
                0 === h &&
                  (this._startAt &&
                    (a >= 0
                      ? this._startAt.render(a, b, c)
                      : e || (e = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === i) &&
                    (b || this._callback("onStart"))),
                f = this._firstPT;
              f;

            )
              f.f
                ? f.t[f.p](f.c * this.ratio + f.s)
                : (f.t[f.p] = f.c * this.ratio + f.s),
                (f = f._next);
            this._onUpdate &&
              (0 > a &&
                this._startAt &&
                a !== -1e-4 &&
                this._startAt.render(a, b, c),
              b ||
                ((this._time !== h || d || c) && this._callback("onUpdate"))),
              e &&
                (!this._gc || c) &&
                (0 > a &&
                  this._startAt &&
                  !this._onUpdate &&
                  a !== -1e-4 &&
                  this._startAt.render(a, b, c),
                d &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !b && this.vars[e] && this._callback(e),
                0 === i &&
                  this._rawPrevTime === m &&
                  g !== m &&
                  (this._rawPrevTime = 0));
          }
        }),
        (h._kill = function (a, b, c) {
          if (
            ("all" === a && (a = null),
            null == a && (null == b || b === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          b =
            "string" != typeof b
              ? b || this._targets || this.target
              : G.selector(b) || b;
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m =
              c &&
              this._time &&
              c._startTime === this._startTime &&
              this._timeline === c._timeline;
          if ((p(b) || H(b)) && "number" != typeof b[0])
            for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
          else {
            if (this._targets) {
              for (d = this._targets.length; --d > -1; )
                if (b === this._targets[d]) {
                  (h = this._propLookup[d] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (e = this._overwrittenProps[d] =
                      a ? this._overwrittenProps[d] || {} : "all");
                  break;
                }
            } else {
              if (b !== this.target) return !1;
              (h = this._propLookup),
                (e = this._overwrittenProps =
                  a ? this._overwrittenProps || {} : "all");
            }
            if (h) {
              if (
                ((j = a || h),
                (k =
                  a !== e &&
                  "all" !== e &&
                  a !== h &&
                  ("object" != typeof a || !a._tempKill)),
                c && (G.onOverwrite || this.vars.onOverwrite))
              ) {
                for (f in j) h[f] && (l || (l = []), l.push(f));
                if ((l || !a) && !$(this, c, b, l)) return !1;
              }
              for (f in j)
                (g = h[f]) &&
                  (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                  g.pg && g.t._kill(j) && (i = !0),
                  (g.pg && 0 !== g.t._overwriteProps.length) ||
                    (g._prev
                      ? (g._prev._next = g._next)
                      : g === this._firstPT && (this._firstPT = g._next),
                    g._next && (g._next._prev = g._prev),
                    (g._next = g._prev = null)),
                  delete h[f]),
                  k && (e[f] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return i;
        }),
        (h.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              G._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            D.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -m), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (h._enabled = function (a, b) {
          if ((j || i.wake(), a && this._gc)) {
            var c,
              d = this._targets;
            if (d)
              for (c = d.length; --c > -1; )
                this._siblings[c] = Z(d[c], this, !0);
            else this._siblings = Z(this.target, this, !0);
          }
          return (
            D.prototype._enabled.call(this, a, b),
            this._notifyPluginsOfEnabled && this._firstPT
              ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this)
              : !1
          );
        }),
        (G.to = function (a, b, c) {
          return new G(a, b, c);
        }),
        (G.from = function (a, b, c) {
          return (
            (c.runBackwards = !0),
            (c.immediateRender = 0 != c.immediateRender),
            new G(a, b, c)
          );
        }),
        (G.fromTo = function (a, b, c, d) {
          return (
            (d.startAt = c),
            (d.immediateRender =
              0 != d.immediateRender && 0 != c.immediateRender),
            new G(a, b, d)
          );
        }),
        (G.delayedCall = function (a, b, c, d, e) {
          return new G(b, 0, {
            delay: a,
            onComplete: b,
            onCompleteParams: c,
            callbackScope: d,
            onReverseComplete: b,
            onReverseCompleteParams: c,
            immediateRender: !1,
            lazy: !1,
            useFrames: e,
            overwrite: 0,
          });
        }),
        (G.set = function (a, b) {
          return new G(a, 0, b);
        }),
        (G.getTweensOf = function (a, b) {
          if (null == a) return [];
          a = "string" != typeof a ? a : G.selector(a) || a;
          var c, d, e, f;
          if ((p(a) || H(a)) && "number" != typeof a[0]) {
            for (c = a.length, d = []; --c > -1; )
              d = d.concat(G.getTweensOf(a[c], b));
            for (c = d.length; --c > -1; )
              for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
          } else
            for (d = Z(a).concat(), c = d.length; --c > -1; )
              (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
          return d;
        }),
        (G.killTweensOf = G.killDelayedCallsTo =
          function (a, b, c) {
            "object" == typeof b && ((c = b), (b = !1));
            for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; )
              d[e]._kill(c, a);
          });
      var ba = t(
        "plugins.TweenPlugin",
        function (a, b) {
          (this._overwriteProps = (a || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = b || 0),
            (this._super = ba.prototype);
        },
        !0
      );
      if (
        ((h = ba.prototype),
        (ba.version = "1.19.0"),
        (ba.API = 2),
        (h._firstPT = null),
        (h._addTween = O),
        (h.setRatio = M),
        (h._kill = function (a) {
          var b,
            c = this._overwriteProps,
            d = this._firstPT;
          if (null != a[this._propName]) this._overwriteProps = [];
          else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
          for (; d; )
            null != a[d.n] &&
              (d._next && (d._next._prev = d._prev),
              d._prev
                ? ((d._prev._next = d._next), (d._prev = null))
                : this._firstPT === d && (this._firstPT = d._next)),
              (d = d._next);
          return !1;
        }),
        (h._mod = h._roundProps =
          function (a) {
            for (var b, c = this._firstPT; c; )
              (b =
                a[this._propName] ||
                (null != c.n && a[c.n.split(this._propName + "_").join("")])),
                b &&
                  "function" == typeof b &&
                  (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)),
                (c = c._next);
          }),
        (G._onPluginEvent = function (a, b) {
          var c,
            d,
            e,
            f,
            g,
            h = b._firstPT;
          if ("_onInitAllProps" === a) {
            for (; h; ) {
              for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
              (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h),
                (h._next = d) ? (d._prev = h) : (f = h),
                (h = g);
            }
            h = b._firstPT = e;
          }
          for (; h; )
            h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0),
              (h = h._next);
          return c;
        }),
        (ba.activate = function (a) {
          for (var b = a.length; --b > -1; )
            a[b].API === ba.API && (Q[new a[b]()._propName] = a[b]);
          return !0;
        }),
        (s.plugin = function (a) {
          if (!(a && a.propName && a.init && a.API))
            throw "illegal plugin definition.";
          var b,
            c = a.propName,
            d = a.priority || 0,
            e = a.overwriteProps,
            f = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps",
            },
            g = t(
              "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
              function () {
                ba.call(this, c, d), (this._overwriteProps = e || []);
              },
              a.global === !0
            ),
            h = (g.prototype = new ba(c));
          (h.constructor = g), (g.API = a.API);
          for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
          return (g.version = a.version), ba.activate([g]), g;
        }),
        (f = a._gsQueue))
      ) {
        for (g = 0; g < f.length; g++) f[g]();
        for (h in q)
          q[h].func ||
            a.console.log("GSAP encountered missing dependency: " + h);
      }
      j = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );
/*!
 * VERSION: 1.8.1
 * DATE: 2017-01-02
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var a = document.documentElement,
    b = _gsScope,
    c = function (c, d) {
      var e = "x" === d ? "Width" : "Height",
        f = "scroll" + e,
        g = "client" + e,
        h = document.body;
      return c === b || c === a || c === h
        ? Math.max(a[f], h[f]) - (b["inner" + e] || a[g] || h[g])
        : c[f] - c["offset" + e];
    },
    d = function (a) {
      return (
        "string" == typeof a && (a = TweenLite.selector(a)),
        a.length && a !== b && a[0] && a[0].style && !a.nodeType && (a = a[0]),
        a === b || (a.nodeType && a.style) ? a : null
      );
    },
    e = function (c, d) {
      var e = "scroll" + ("x" === d ? "Left" : "Top");
      return (
        c === b &&
          (null != c.pageXOffset
            ? (e = "page" + d.toUpperCase() + "Offset")
            : (c = null != a[e] ? a : document.body)),
        function () {
          return c[e];
        }
      );
    },
    f = function (c, f) {
      var g = d(c).getBoundingClientRect(),
        h = !f || f === b || f === document.body,
        i = (h ? a : f).getBoundingClientRect(),
        j = { x: g.left - i.left, y: g.top - i.top };
      return !h && f && ((j.x += e(f, "x")()), (j.y += e(f, "y")())), j;
    },
    g = function (a, b, d) {
      var e = typeof a;
      return "number" === e || ("string" === e && "=" === a.charAt(1))
        ? a
        : "max" === a
        ? c(b, d)
        : Math.min(c(b, d), f(a, b)[d]);
    },
    h = _gsScope._gsDefine.plugin({
      propName: "scrollTo",
      API: 2,
      global: !0,
      version: "1.8.1",
      init: function (a, c, d) {
        return (
          (this._wdw = a === b),
          (this._target = a),
          (this._tween = d),
          "object" != typeof c
            ? ((c = { y: c }),
              "string" == typeof c.y &&
                "max" !== c.y &&
                "=" !== c.y.charAt(1) &&
                (c.x = c.y))
            : c.nodeType && (c = { y: c, x: c }),
          (this.vars = c),
          (this._autoKill = c.autoKill !== !1),
          (this.getX = e(a, "x")),
          (this.getY = e(a, "y")),
          (this.x = this.xPrev = this.getX()),
          (this.y = this.yPrev = this.getY()),
          null != c.x
            ? (this._addTween(
                this,
                "x",
                this.x,
                g(c.x, a, "x") - (c.offsetX || 0),
                "scrollTo_x",
                !0
              ),
              this._overwriteProps.push("scrollTo_x"))
            : (this.skipX = !0),
          null != c.y
            ? (this._addTween(
                this,
                "y",
                this.y,
                g(c.y, a, "y") - (c.offsetY || 0),
                "scrollTo_y",
                !0
              ),
              this._overwriteProps.push("scrollTo_y"))
            : (this.skipY = !0),
          !0
        );
      },
      set: function (a) {
        this._super.setRatio.call(this, a);
        var d = this._wdw || !this.skipX ? this.getX() : this.xPrev,
          e = this._wdw || !this.skipY ? this.getY() : this.yPrev,
          f = e - this.yPrev,
          g = d - this.xPrev,
          i = h.autoKillThreshold;
        this.x < 0 && (this.x = 0),
          this.y < 0 && (this.y = 0),
          this._autoKill &&
            (!this.skipX &&
              (g > i || -i > g) &&
              d < c(this._target, "x") &&
              (this.skipX = !0),
            !this.skipY &&
              (f > i || -i > f) &&
              e < c(this._target, "y") &&
              (this.skipY = !0),
            this.skipX &&
              this.skipY &&
              (this._tween.kill(),
              this.vars.onAutoKill &&
                this.vars.onAutoKill.apply(
                  this.vars.onAutoKillScope || this._tween,
                  this.vars.onAutoKillParams || []
                ))),
          this._wdw
            ? b.scrollTo(this.skipX ? d : this.x, this.skipY ? e : this.y)
            : (this.skipY || (this._target.scrollTop = this.y),
              this.skipX || (this._target.scrollLeft = this.x)),
          (this.xPrev = this.x),
          (this.yPrev = this.y);
      },
    }),
    i = h.prototype;
  (h.max = c),
    (h.getOffset = f),
    (h.autoKillThreshold = 7),
    (i._kill = function (a) {
      return (
        a.scrollTo_x && (this.skipX = !0),
        a.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, a)
      );
    });
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], b)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.min.js"), (module.exports = b()));
  })("ScrollToPlugin");
(function ($) {
  "use strict";

  if (typeof wpcf7 === "undefined" || wpcf7 === null) {
    return;
  }

  wpcf7 = $.extend(
    {
      cached: 0,
      inputs: [],
    },
    wpcf7
  );

  $(function () {
    wpcf7.supportHtml5 = (function () {
      var features = {};
      var input = document.createElement("input");

      features.placeholder = "placeholder" in input;

      var inputTypes = ["email", "url", "tel", "number", "range", "date"];

      $.each(inputTypes, function (index, value) {
        input.setAttribute("type", value);
        features[value] = input.type !== "text";
      });

      return features;
    })();

    $("div.wpcf7 > form").each(function () {
      var $form = $(this);
      wpcf7.initForm($form);

      if (wpcf7.cached) {
        wpcf7.refill($form);
      }
    });
  });

  wpcf7.getId = function (form) {
    return parseInt($('input[name="_wpcf7"]', form).val(), 10);
  };

  wpcf7.initForm = function (form) {
    var $form = $(form);

    $form.submit(function (event) {
      if (!wpcf7.supportHtml5.placeholder) {
        $("[placeholder].placeheld", $form).each(function (i, n) {
          $(n).val("").removeClass("placeheld");
        });
      }

      if (typeof window.FormData === "function") {
        wpcf7.submit($form);
        event.preventDefault();
      }
    });

    $(".wpcf7-submit", $form).after('<span class="ajax-loader"></span>');

    wpcf7.toggleSubmit($form);

    $form.on("click", ".wpcf7-acceptance", function () {
      wpcf7.toggleSubmit($form);
    });

    // Exclusive Checkbox
    $(".wpcf7-exclusive-checkbox", $form).on(
      "click",
      "input:checkbox",
      function () {
        var name = $(this).attr("name");
        $form
          .find('input:checkbox[name="' + name + '"]')
          .not(this)
          .prop("checked", false);
      }
    );

    // Free Text Option for Checkboxes and Radio Buttons
    $(".wpcf7-list-item.has-free-text", $form).each(function () {
      var $freetext = $(":input.wpcf7-free-text", this);
      var $wrap = $(this).closest(".wpcf7-form-control");

      if ($(":checkbox, :radio", this).is(":checked")) {
        $freetext.prop("disabled", false);
      } else {
        $freetext.prop("disabled", true);
      }

      $wrap.on("change", ":checkbox, :radio", function () {
        var $cb = $(".has-free-text", $wrap).find(":checkbox, :radio");

        if ($cb.is(":checked")) {
          $freetext.prop("disabled", false).focus();
        } else {
          $freetext.prop("disabled", true);
        }
      });
    });

    // Placeholder Fallback
    if (!wpcf7.supportHtml5.placeholder) {
      $("[placeholder]", $form).each(function () {
        $(this).val($(this).attr("placeholder"));
        $(this).addClass("placeheld");

        $(this).focus(function () {
          if ($(this).hasClass("placeheld")) {
            $(this).val("").removeClass("placeheld");
          }
        });

        $(this).blur(function () {
          if ("" === $(this).val()) {
            $(this).val($(this).attr("placeholder"));
            $(this).addClass("placeheld");
          }
        });
      });
    }

    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.date) {
      $form.find('input.wpcf7-date[type="date"]').each(function () {
        $(this).datepicker({
          dateFormat: "yy-mm-dd",
          minDate: new Date($(this).attr("min")),
          maxDate: new Date($(this).attr("max")),
        });
      });
    }

    if (wpcf7.jqueryUi && !wpcf7.supportHtml5.number) {
      $form.find('input.wpcf7-number[type="number"]').each(function () {
        $(this).spinner({
          min: $(this).attr("min"),
          max: $(this).attr("max"),
          step: $(this).attr("step"),
        });
      });
    }

    // Character Count
    $(".wpcf7-character-count", $form).each(function () {
      var $count = $(this);
      var name = $count.attr("data-target-name");
      var down = $count.hasClass("down");
      var starting = parseInt($count.attr("data-starting-value"), 10);
      var maximum = parseInt($count.attr("data-maximum-value"), 10);
      var minimum = parseInt($count.attr("data-minimum-value"), 10);

      var updateCount = function (target) {
        var $target = $(target);
        var length = $target.val().length;
        var count = down ? starting - length : length;
        $count.attr("data-current-value", count);
        $count.text(count);

        if (maximum && maximum < length) {
          $count.addClass("too-long");
        } else {
          $count.removeClass("too-long");
        }

        if (minimum && length < minimum) {
          $count.addClass("too-short");
        } else {
          $count.removeClass("too-short");
        }
      };

      $(':input[name="' + name + '"]', $form).each(function () {
        updateCount(this);

        $(this).keyup(function () {
          updateCount(this);
        });
      });
    });

    // URL Input Correction
    $form.on("change", ".wpcf7-validates-as-url", function () {
      var val = $.trim($(this).val());

      if (
        val &&
        !val.match(/^[a-z][a-z0-9.+-]*:/i) &&
        -1 !== val.indexOf(".")
      ) {
        val = val.replace(/^\/+/, "");
        val = "http://" + val;
      }

      $(this).val(val);
    });
  };

  wpcf7.submit = function (form) {
    if (typeof window.FormData !== "function") {
      return;
    }

    var $form = $(form);

    $(".ajax-loader", $form).addClass("is-active");

    wpcf7.clearResponse($form);

    var formData = new FormData($form.get(0));

    var detail = {
      id: $form.closest("div.wpcf7").attr("id"),
      status: "init",
      inputs: [],
      formData: formData,
    };

    $.each($form.serializeArray(), function (i, field) {
      if ("_wpcf7" == field.name) {
        detail.contactFormId = field.value;
      } else if ("_wpcf7_version" == field.name) {
        detail.pluginVersion = field.value;
      } else if ("_wpcf7_locale" == field.name) {
        detail.contactFormLocale = field.value;
      } else if ("_wpcf7_unit_tag" == field.name) {
        detail.unitTag = field.value;
      } else if ("_wpcf7_container_post" == field.name) {
        detail.containerPostId = field.value;
      } else if (field.name.match(/^_wpcf7_\w+_free_text_/)) {
        var owner = field.name.replace(/^_wpcf7_\w+_free_text_/, "");
        detail.inputs.push({
          name: owner + "-free-text",
          value: field.value,
        });
      } else if (field.name.match(/^_/)) {
        // do nothing
      } else {
        detail.inputs.push(field);
      }
    });

    wpcf7.triggerEvent($form.closest("div.wpcf7"), "beforesubmit", detail);

    var ajaxSuccess = function (data, status, xhr, $form) {
      detail.id = $(data.into).attr("id");
      detail.status = data.status;
      detail.apiResponse = data;

      var $message = $(".wpcf7-response-output", $form);

      switch (data.status) {
        case "validation_failed":
          $.each(data.invalidFields, function (i, n) {
            $(n.into, $form).each(function () {
              wpcf7.notValidTip(this, n.message);
              $(".wpcf7-form-control", this).addClass("wpcf7-not-valid");
              $("[aria-invalid]", this).attr("aria-invalid", "true");
            });
          });

          $message.addClass("wpcf7-validation-errors");
          $form.addClass("invalid");

          wpcf7.triggerEvent(data.into, "invalid", detail);
          break;
        case "acceptance_missing":
          $message.addClass("wpcf7-acceptance-missing");
          $form.addClass("unaccepted");

          wpcf7.triggerEvent(data.into, "unaccepted", detail);
          break;
        case "spam":
          $message.addClass("wpcf7-spam-blocked");
          $form.addClass("spam");

          wpcf7.triggerEvent(data.into, "spam", detail);
          break;
        case "aborted":
          $message.addClass("wpcf7-aborted");
          $form.addClass("aborted");

          wpcf7.triggerEvent(data.into, "aborted", detail);
          break;
        case "mail_sent":
          $message.addClass("wpcf7-mail-sent-ok");
          $form.addClass("sent");

          wpcf7.triggerEvent(data.into, "mailsent", detail);
          break;
        case "mail_failed":
          $message.addClass("wpcf7-mail-sent-ng");
          $form.addClass("failed");

          wpcf7.triggerEvent(data.into, "mailfailed", detail);
          break;
        default:
          var customStatusClass =
            "custom-" + data.status.replace(/[^0-9a-z]+/i, "-");
          $message.addClass("wpcf7-" + customStatusClass);
          $form.addClass(customStatusClass);
      }

      wpcf7.refill($form, data);

      wpcf7.triggerEvent(data.into, "submit", detail);

      if ("mail_sent" == data.status) {
        $form.each(function () {
          this.reset();
        });

        wpcf7.toggleSubmit($form);
      }

      if (!wpcf7.supportHtml5.placeholder) {
        $form.find("[placeholder].placeheld").each(function (i, n) {
          $(n).val($(n).attr("placeholder"));
        });
      }

      $message.html("").append(data.message).slideDown("fast");
      $message.attr("role", "alert");

      $(".screen-reader-response", $form.closest(".wpcf7")).each(function () {
        var $response = $(this);
        $response.html("").attr("role", "").append(data.message);

        if (data.invalidFields) {
          var $invalids = $("<ul></ul>");

          $.each(data.invalidFields, function (i, n) {
            if (n.idref) {
              var $li = $("<li></li>").append(
                $("<a></a>")
                  .attr("href", "#" + n.idref)
                  .append(n.message)
              );
            } else {
              var $li = $("<li></li>").append(n.message);
            }

            $invalids.append($li);
          });

          $response.append($invalids);
        }

        $response.attr("role", "alert").focus();
      });
    };

    $.ajax({
      type: "POST",
      url: wpcf7.apiSettings.getRoute(
        "/contact-forms/" + wpcf7.getId($form) + "/feedback"
      ),
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false,
    })
      .done(function (data, status, xhr) {
        ajaxSuccess(data, status, xhr, $form);
        $(".ajax-loader", $form).removeClass("is-active");
      })
      .fail(function (xhr, status, error) {
        var $e = $('<div class="ajax-error"></div>').text(error.message);
        $form.after($e);
      });
  };

  wpcf7.triggerEvent = function (target, name, detail) {
    var $target = $(target);

    /* DOM event */
    var event = new CustomEvent("wpcf7" + name, {
      bubbles: true,
      detail: detail,
    });

    $target.get(0).dispatchEvent(event);

    /* jQuery event */
    $target.trigger("wpcf7:" + name, detail);
    $target.trigger(name + ".wpcf7", detail); // deprecated
  };

  wpcf7.toggleSubmit = function (form, state) {
    var $form = $(form);
    var $submit = $("input:submit", $form);

    if (typeof state !== "undefined") {
      $submit.prop("disabled", !state);
      return;
    }

    if ($form.hasClass("wpcf7-acceptance-as-validation")) {
      return;
    }

    $submit.prop("disabled", false);

    $(".wpcf7-acceptance", $form).each(function () {
      var $span = $(this);
      var $input = $("input:checkbox", $span);

      if (!$span.hasClass("optional")) {
        if (
          ($span.hasClass("invert") && $input.is(":checked")) ||
          (!$span.hasClass("invert") && !$input.is(":checked"))
        ) {
          $submit.prop("disabled", true);
          return false;
        }
      }
    });
  };

  wpcf7.notValidTip = function (target, message) {
    var $target = $(target);
    $(".wpcf7-not-valid-tip", $target).remove();
    $('<span role="alert" class="wpcf7-not-valid-tip"></span>')
      .text(message)
      .appendTo($target);

    if ($target.is(".use-floating-validation-tip *")) {
      var fadeOut = function (target) {
        $(target)
          .not(":hidden")
          .animate(
            {
              opacity: 0,
            },
            "fast",
            function () {
              $(this).css({ "z-index": -100 });
            }
          );
      };

      $target.on("mouseover", ".wpcf7-not-valid-tip", function () {
        fadeOut(this);
      });

      $target.on("focus", ":input", function () {
        fadeOut($(".wpcf7-not-valid-tip", $target));
      });
    }
  };

  wpcf7.refill = function (form, data) {
    var $form = $(form);

    var refillCaptcha = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form.find("img.wpcf7-captcha-" + i).attr("src", n);
        var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
        $form
          .find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]')
          .attr("value", match[1]);
      });
    };

    var refillQuiz = function ($form, items) {
      $.each(items, function (i, n) {
        $form.find(':input[name="' + i + '"]').val("");
        $form
          .find(':input[name="' + i + '"]')
          .siblings("span.wpcf7-quiz-label")
          .text(n[0]);
        $form
          .find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]')
          .attr("value", n[1]);
      });
    };

    if (typeof data === "undefined") {
      $.ajax({
        type: "GET",
        url: wpcf7.apiSettings.getRoute(
          "/contact-forms/" + wpcf7.getId($form) + "/refill"
        ),
        beforeSend: function (xhr) {
          var nonce = $form.find(':input[name="_wpnonce"]').val();

          if (nonce) {
            xhr.setRequestHeader("X-WP-Nonce", nonce);
          }
        },
        dataType: "json",
      }).done(function (data, status, xhr) {
        if (data.captcha) {
          refillCaptcha($form, data.captcha);
        }

        if (data.quiz) {
          refillQuiz($form, data.quiz);
        }
      });
    } else {
      if (data.captcha) {
        refillCaptcha($form, data.captcha);
      }

      if (data.quiz) {
        refillQuiz($form, data.quiz);
      }
    }
  };

  wpcf7.clearResponse = function (form) {
    var $form = $(form);
    $form.removeClass("invalid spam sent failed");
    $form.siblings(".screen-reader-response").html("").attr("role", "");

    $(".wpcf7-not-valid-tip", $form).remove();
    $("[aria-invalid]", $form).attr("aria-invalid", "false");
    $(".wpcf7-form-control", $form).removeClass("wpcf7-not-valid");

    $(".wpcf7-response-output", $form)
      .hide()
      .empty()
      .removeAttr("role")
      .removeClass(
        "wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked"
      );
  };

  wpcf7.apiSettings.getRoute = function (path) {
    var url = wpcf7.apiSettings.root;

    url = url.replace(
      wpcf7.apiSettings.namespace,
      wpcf7.apiSettings.namespace + path
    );

    return url;
  };
})(jQuery);

/*
 * Polyfill for Internet Explorer
 * See https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
 */
(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();
jQuery(document).ready(function () {
  //enable carousel slider styling and set title animation
  jQuery(".ewd-slider-section .slider").each(function () {
    var sliderThisAgain = jQuery(this);
    if (sliderThisAgain.find(".carouselSlider").length != 0) {
      jQuery(".ewd-slider-section .slider").addClass("carouselArrows");
    }

    if (
      ewd_us_php_data.title_animate == "SlideFromLeft" ||
      ewd_us_php_data.title_animate == "SlideFromRight"
    ) {
      sliderThisAgain.find(".ewd-slide .slideText .slideTitle").hide();
    }
    if (ewd_us_php_data.title_animate == "FadeIn") {
      sliderThisAgain.find(".ewd-slide .slideText .slideTitle").fadeTo(50, 0.1);
    }
    if (ewd_us_php_data.title_animate == "ScrollDown") {
      sliderThisAgain.find(".ewd-slide .slideText .slideTitle").slideUp(10);
    }
    if (ewd_us_php_data.title_animate == "SlideFromLeft") {
      sliderThisAgain
        .find(".ewd-slide .slideText .slideTitle")
        .delay(400)
        .show("slide", { direction: "left" }, 1000);
    }
    if (ewd_us_php_data.title_animate == "SlideFromRight") {
      sliderThisAgain
        .find(".ewd-slide .slideText .slideTitle")
        .delay(400)
        .show("slide", { direction: "right" }, 1000);
    }
    if (ewd_us_php_data.title_animate == "FadeIn") {
      sliderThisAgain
        .find(".ewd-slide .slideText .slideTitle")
        .delay(500)
        .fadeTo(1500, 1);
    }
    if (ewd_us_php_data.title_animate == "ScrollDown") {
      sliderThisAgain
        .find(".ewd-slide .slideText .slideTitle")
        .delay(500)
        .slideDown(1200);
    }
  });
  //enable carousel slider styling and set title animation

  jQuery(".ewd-slide").each(function (index, el) {
    jQuery(this).removeClass("ewd-us-hidden");
  });

  jQuery(".ewd-us-meta-menu-item").on("click", function () {
    var ID = jQuery(this).attr("id");
    var ID_Base = ID.substring(5);

    jQuery(".ewd-us-meta-body").each(function () {
      jQuery(this).addClass("ewd-us-hidden");
    });
    jQuery("#Body_" + ID_Base).removeClass("ewd-us-hidden");

    jQuery(".ewd-us-meta-menu-item").each(function () {
      jQuery(this).removeClass("meta-menu-tab-active");
    });
    jQuery(this).addClass("meta-menu-tab-active");
  });

  /////////////////////////////
  /////////TIMER BAR///////////
  /////////////////////////////
  jQuery(".ewd-slider-section").each(function () {
    var sliderThisAgainAgain = jQuery(this);
    var delayTime = ewd_us_php_data.autoplay_delay * 1000;
    var intervalTime = ewd_us_php_data.autoplay_interval * 1000;
    var firstLoopTime = delayTime + intervalTime;
    var terminate;

    if (ewd_us_php_data.timer_bar == "Off") {
      sliderThisAgainAgain.find("#timerBar").css("height", "0");
    }

    function firstLoop() {
      if (terminate) {
        return;
      }
      sliderThisAgainAgain.find("#innerTimerBar").css("width", "0%");
      sliderThisAgainAgain.find("#innerTimerBar").animate(
        {
          width: "+=100%",
        },
        firstLoopTime,
        "linear",
        function () {
          loop();
        }
      );
    }

    function loop() {
      if (terminate) {
        return;
      }
      sliderThisAgainAgain.find("#innerTimerBar").css("width", "0%");
      sliderThisAgainAgain.find("#innerTimerBar").animate(
        {
          width: "+=100%",
        },
        intervalTime,
        "linear",
        function () {
          loop();
        }
      );
    }

    firstLoop();

    sliderThisAgainAgain.find(".nav-arrow").click(function () {
      terminate = true;
      sliderThisAgainAgain.find("#timerBar").css("height", "0");
    });
    sliderThisAgainAgain
      .find(".ewd-slider-control-thumbnail")
      .click(function () {
        terminate = true;
        sliderThisAgainAgain.find("#timerBar").css("height", "0");
      });
    sliderThisAgainAgain.find(".ewd-slider-control-button").click(function () {
      terminate = true;
      sliderThisAgainAgain.find("#timerBar").css("height", "0");
    });
  }); //END EACH SLIDER

  //Thumbnail IMG clicks
  jQuery(".ewd-slider-control-thumbnail").on("click", function () {
    clearInterval(ewd_slider.interval);
    SlideTransition(jQuery(this).data("slidenumber"), true);
  });

  //Stop slider on video play
  jQuery(".ewd-us-video").iframeTracker({
    blurCallback: function () {
      clearInterval(ewd_slider.interval);
    },
  });

  if (ewd_us_php_data.lightbox == "Yes") {
    /*jQuery('.slider-window').lightGallery({
			thumbnail:true
		});*/

    jQuery(".slideTitle a, .slideExcerpt a, .ewd-us-slide-button").click(
      function (e) {
        e.stopPropagation();
      }
    );
  }

  // center lightbox image on click
  jQuery(".ewd-slide").click(function () {
    jQuery(".lg-img-wrap").each(function () {
      var thisLightbox = jQuery(this);
      var lightboxWidth = thisLightbox.width();
      var lightboxImageWidth = thisLightbox.find("img").width();
      var lightboxImageMargin = (lightboxWidth - lightboxImageWidth) / 2;
      thisLightbox.find("img").css("margin-left", lightboxImageMargin + "px");
    });
  });
  jQuery(".lg-thumb-item").click(function () {
    jQuery(".lg-img-wrap").each(function () {
      var thisLightboxTwo = jQuery(this);
      var lightboxWidthTwo = thisLightboxTwo.width();
      var lightboxImageWidthTwo = thisLightboxTwo.find("img").width();
      var lightboxImageMarginTwo =
        (lightboxWidthTwo - lightboxImageWidthTwo) / 2;
      thisLightboxTwo
        .find("img")
        .css("margin-left", lightboxImageMarginTwo + "px");
    });
  });
}); //END DOCUMENT READY

jQuery(document).ready(function () {
  SetButtonDeleteHandlers();
  SetButtonDisableHandlers();

  jQuery(".ewd-us-add-button-list-item").on("click", function (event) {
    var ID = jQuery(this).data("nextid");

    var HTML = "<tr id='ewd-us-button-list-item-" + ID + "'>";
    HTML +=
      "<td><a class='ewd-us-delete-button-list-item' data-buttonid='" +
      ID +
      "'>Delete</a></td>";
    HTML += "<td><input type='text' name='Button_List_" + ID + "_Text'></td>";
    HTML +=
      "<td><select name='Button_List_" +
      ID +
      "_Post_ID' class='ewd-us-post-select' id='ewd-us-post-select-" +
      ID +
      "'><option value='0'>Custom Link</option></select></td>";
    HTML +=
      "<td><input type='text' name='Button_List_" +
      ID +
      "_Custom_Link' id='ewd-us-post-link-" +
      ID +
      "'></td>";
    HTML += "</tr>";

    //jQuery('table > tr#ewd-uasp-add-reminder').before(HTML);
    jQuery("#ewd-us-buttons-list-table tr:last").before(HTML);

    AJAXPostIDs("#ewd-us-post-select-" + ID);

    ID++;
    jQuery(this).data("nextid", ID); //updates but doesn't show in DOM

    SetButtonDeleteHandlers();
    SetButtonDisableHandlers();

    event.preventDefault();
  });
});

function SetButtonDeleteHandlers() {
  jQuery(".ewd-us-delete-button-list-item").on("click", function (event) {
    var ID = jQuery(this).data("buttonid");
    var tr = jQuery("#ewd-us-button-list-item-" + ID);

    tr.fadeOut(400, function () {
      tr.remove();
    });

    event.preventDefault();
  });
}

function SetButtonDisableHandlers() {
  jQuery(".ewd-us-post-select").on("change", function () {
    var Full_ID = jQuery(this).attr("id");
    var ID = Full_ID.substring(19);

    if (jQuery(this).val() != 0) {
      jQuery("#ewd-us-post-link-" + ID).prop("disabled", true);
    } else {
      jQuery("#ewd-us-post-link-" + ID).prop("disabled", false);
    }
  });
}

function AJAXPostIDs(selectID) {
  var data = "&action=ewd_us_get_post_ids";
  jQuery.post(ajaxurl, data, function (response) {
    response = response.substring(0, response.length - 1);
    var posts_array = jQuery.parseJSON(response);
    jQuery(posts_array).each(function (index, post) {
      //console.log('post', post);
      jQuery(selectID).append(
        "<option value='" + post.ID + "'>" + post.Name + "</option>"
      );
    });
  });
}

// MAIN FUNCTION CALLS
jQuery(document).ready(function () {
  onResizeSliderText();
  slideMain(
    ewd_us_php_data.slide_transition_effect,
    ewd_us_php_data.autoplay_delay,
    ewd_us_php_data.autoplay_interval,
    ewd_us_php_data.transition_time
  );

  jQuery(window).bind("resize", onResizeSliderText);
  jQuery(window).bind("resize", slideResize);
});

var ewd_slider = {
  slide: "1",
  slidecount: "0",
  transitionType: "slide",
  interval: "",
  fadeTime: "800",
  transitionTime: "",
};

function slideMain(transitionType, delay, autoplayInterval, transitionTime) {
  ewd_slider.slide = 0;
  jQuery(
    ".ewd-slider-section .slider ul.slider-window li.ewd-slide:nth-child(1)"
  ).addClass("ewd-slider-main");
  ewd_slider.transitionType = transitionType;

  if (transitionType != "slide") {
    jQuery("li.ewd-slide").css("float", "none");
    jQuery("li.ewd-slide").css("position", "absolute");
  }

  if (transitionTime != "" && transitionTime > 0) {
    jQuery(".ewd-slide").css({
      "animation-duration": transitionTime + "s",
      "-webkit-animation-duration": transitionTime + "s",
    });
    ewd_slider.transitionTime = transitionTime;
    ewd_slider.fadeTime = transitionTime * 100;
  }

  slideResize();
  initSlideButtons();
  if (ewd_us_php_data.autoplay_slideshow == "Yes") {
    slideAutoPlay(delay * 1000, autoplayInterval * 1000);
  }
}

function slideAutoPlay(delay, interval) {
  setTimeout(function () {
    ewd_slider.interval = setInterval(function () {
      Slide(1);
    }, interval);
  }, delay);
}

function initSlideButtons() {
  //Init Buttons
  for (i = 0; i < ewd_slider.slidecount; i++) {
    jQuery(".ewd-slider-control-button-list").append(
      "<div class='ewd-slider-control-button ewd-slider-control-button-" +
        i +
        "'><span class='ewd-slider-control-click' onclick='clearInterval(ewd_slider.interval); SlideTransition(" +
        i +
        ",true)'></span></div>"
    );
  }
  jQuery(".ewd-slider-control-button-0 span").addClass(
    "ewd-slide-button-active"
  );
  jQuery("#left").click(function () {
    clearInterval(ewd_slider.interval);
    Slide("-1");
  });
  jQuery("#right").click(function () {
    clearInterval(ewd_slider.interval);
    Slide("1");
  });
}

function slideResize() {
  jQuery(".ewd-slider-section").each(function () {
    var sliderThisFive = jQuery(this);
    var sliderWidthFive = sliderThisFive.width();
    var numberOfThumbs = sliderThisFive.find(
      ".ewd-slider-control-thumbnail"
    ).length;
    var thumbsWidth = numberOfThumbs * 100 + (numberOfThumbs - 1) * 8;
    var thumbsMargin = (sliderWidthFive - thumbsWidth) / 2;
    sliderThisFive
      .find(".ewd-slider-control-thumbnail")
      .first()
      .css("margin-left", thumbsMargin + "px");
  });
  jQuery(".ewd-slider-section .slider").each(function () {
    var sliderThisFour = jQuery(this);
    var SliderWidth = sliderThisFour.width();
    var SlideCount = sliderThisFour.find(".ewd-slide").length;
    sliderThisFour.find(".ewd-slide").css("width", SliderWidth + "px");
    sliderThisFour
      .find(".ewd-slide")
      .css("height", sliderThisFour.height() + "px");
    if (sliderThisFour.find(".carouselSlider").length != 0) {
      if (ewd_us_php_data.carousel_columns == "2") {
        sliderThisFour
          .find(".ewd-slide.carouselSlider")
          .css("width", SliderWidth * 0.48 + "px");
        if (ewd_us_php_data.carousel_advance == "Full") {
          SlideCount = Math.ceil(SlideCount / 2);
        } else {
          SlideCount = SlideCount - 1;
        }
      }
      if (ewd_us_php_data.carousel_columns == "3") {
        sliderThisFour
          .find(".ewd-slide.carouselSlider")
          .css("width", SliderWidth * 0.313 + "px");
        if (ewd_us_php_data.carousel_advance == "Full") {
          SlideCount = Math.ceil(SlideCount / 3);
        } else {
          SlideCount = SlideCount - 2;
        }
      }
      if (ewd_us_php_data.carousel_columns == "4") {
        sliderThisFour
          .find(".ewd-slide.carouselSlider")
          .css("width", SliderWidth * 0.23 + "px");
        if (ewd_us_php_data.carousel_advance == "Full") {
          SlideCount = Math.ceil(SlideCount / 4);
        } else {
          SlideCount = SlideCount - 3;
        }
      }
    }
    sliderThisFour
      .find(".ewd-slide.carouselSlider")
      .css(
        "height",
        sliderThisFour.find(".ewd-slide.carouselSlider").width() *
          EWD_US_Get_Aspect_Ratio() +
          "px"
      );
    sliderThisFour
      .find(".ewd-slide.carouselSlider")
      .css("margin", "0 " + SliderWidth / 100 + "px");

    if (ewd_slider.transitionType == "slide") {
      var SlideWidth = SlideCount * SliderWidth;
      sliderThisFour.find("ul.slider-window").css("width", SlideWidth + "px");
    }

    if (ewd_slider.transitionType == "slide") {
      var $sliderwidth = sliderThisFour.width();
      var $margin = $sliderwidth * ewd_slider.slide;
      sliderThisFour
        .find("ul.slider-window")
        .css("transform", "translate3d(-" + $margin + "px,0px,0px)");
      sliderThisFour.find("ul.slider-window").css({
        transform: "translate3d(-" + $margin + "px,0px,0px)",
        "-webkit-transform": "translate3d(-" + $margin + "px,0px,0px)",
        "-moz-transform": "translate3d(-" + $margin + "px,0px,0px)",
        "-ms-transform": "translate3d(-" + $margin + "px,0px,0px)",
        "-o-transform": "translate3d(-" + $margin + "px,0px,0px)",
      });
    }

    ewd_slider.slidecount = SlideCount;
  }); //each slider
}

function EWD_US_Get_Aspect_Ratio() {
  if (jQuery(window).width() >= 568) {
    var aspect_ratio = ewd_us_php_data.aspect_ratio;
  } else {
    var aspect_ratio = ewd_us_php_data.mobile_aspect_ratio;
  }

  return aspect_ratio;
}

function onResizeSliderText() {
  // center lightbox image
  jQuery(".lg-img-wrap").each(function () {
    var thisLightbox = jQuery(this);
    var lightboxWidth = thisLightbox.width();
    var lightboxImageWidth = thisLightbox.find("img").width();
    var lightboxImageMargin = (lightboxWidth - lightboxImageWidth) / 2;
    thisLightbox.find("img").css("margin-left", lightboxImageMargin + "px");
  });

  // rest of slider on resize
  jQuery(".ewd-slider-section .slider").each(function () {
    var sliderThis = jQuery(this);
    var sliderWidth = sliderThis.width();
    var sliderHeight = sliderWidth * EWD_US_Get_Aspect_Ratio();
    sliderThis.find(".ewd-slide").each(function () {
      var slideThis = jQuery(this);
      if (
        slideThis.hasClass("ewd-us-video") ||
        slideThis.hasClass("ewd-us-hiddenewd-us-video")
      ) {
        var sliderTextMargin = 24;
        var sliderTextMarginMobile = 24;
      } else {
        var sliderTextMargin = sliderHeight / 3;
        var sliderTextMarginMobile = sliderHeight / 4;
      }
      if (sliderWidth < 900) {
        slideThis
          .find(".slideText")
          .css("margin-top", sliderTextMarginMobile + "px");
      } else {
        slideThis.find(".slideText").css("margin-top", sliderTextMargin + "px");
      }
    });
    var sliderArrowHeight = sliderThis.find(".ewd-us-arrow-div ").outerHeight();
    if (sliderThis.find(".carouselSlider").length != 0) {
      if (ewd_us_php_data.carousel_columns == "2") {
        var sliderArrowMargin = (sliderHeight * 0.48 - sliderArrowHeight) / 2;
      }
      if (ewd_us_php_data.carousel_columns == "3") {
        var sliderArrowMargin = (sliderHeight * 0.313 - sliderArrowHeight) / 2;
      }
      if (ewd_us_php_data.carousel_columns == "4") {
        var sliderArrowMargin = (sliderHeight * 0.23 - sliderArrowHeight) / 2;
      }
    } else {
      var sliderArrowMargin = (sliderHeight - sliderArrowHeight) / 2;
    }
    if (sliderThis.find(".carouselSlider").length != 0) {
      if (ewd_us_php_data.carousel_columns == "2") {
        sliderThis.css("height", sliderHeight * 0.48 + "px");
      }
      if (ewd_us_php_data.carousel_columns == "3") {
        sliderThis.css("height", sliderHeight * 0.313 + "px");
      }
      if (ewd_us_php_data.carousel_columns == "4") {
        sliderThis.css("height", sliderHeight * 0.23 + "px");
      }
    } else {
      sliderThis.css("height", sliderHeight + "px");
    }
    sliderThis
      .find(".ewd-us-arrow-div")
      .css("margin-top", sliderArrowMargin + "px");
    if (sliderWidth <= 959) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "2.5rem");
      //sliderThis.find('.ewd-slide .slideText .slideExcerpt').hide();
    }
    if (sliderWidth <= 768) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "2rem");
    }
    if (sliderWidth <= 568) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "1.5rem");
      //sliderThis.find('.ewd-slide .slideText ul.slideButtons').hide();
    }
    if (sliderWidth > 568) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "2rem");
      //sliderThis.find('.ewd-slide .slideText ul.slideButtons').show();
    }
    if (sliderWidth > 768) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "2.5rem");
    }
    if (sliderWidth > 959) {
      sliderThis
        .find(".ewd-slide .slideText .slideTitle")
        .css("font-size", "3.5rem");
      //sliderThis.find('.ewd-slide .slideText .slideExcerpt').show();
    }
  });
  jQuery(".ewd-slider-section .slider .nav-arrow").css(
    "height",
    jQuery(".ewd-slider-section .slider").height()
  );
}

function Slide(direction) {
  if (direction == "-1") {
    var target = ewd_slider.slide - 1;
  }
  if (direction == "1") {
    var target = ewd_slider.slide + 1;
  }

  if (target == -1) {
    SlideTransition(ewd_slider.slidecount - 1, true);
  } else if (target == ewd_slider.slidecount) {
    SlideTransition(0, true);
  } else {
    SlideTransition(target, true);
  }
}

function SlideTransition(target, ease) {
  //no easing on window resize
  if (ease) {
    jQuery(".ewd-slider-section .slider ul.slider-window").addClass(
      "slider-ease-transition"
    );
    jQuery(".ewd-slider-section .slider ul.slider-window").css({
      transition: "transform " + (ewd_slider.transitionTime + "s"),
      "-webkit-transition": "transform " + (ewd_slider.transitionTime + "s"),
      "-moz-transition": "transform " + (ewd_slider.transitionTime + "s"),
      "-o-transition": "transform " + (ewd_slider.transitionTime + "s"),
    });
    jQuery(".ewd-slider-section .slider ul.slider-window").on(
      "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
      function () {
        jQuery(this).removeClass("slider-ease-transition");
        jQuery(this).css({
          transition: "",
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
        });
      }
    );
  }

  //apply transition if target is different than current slide
  if (ewd_slider.slide != target) {
    var nextSlide = target + 1;
    if (ewd_slider.transitionType == "slide") {
      var $sliderwidth = jQuery(".ewd-slider-section .slider").width();
      var $margin = $sliderwidth * target;
      jQuery(
        ".ewd-slider-section .slider ul.slider-window li.ewd-slide:nth-child(" +
          nextSlide +
          ")"
      ).addClass("ewd-slider-main");
      if (
        jQuery(".carouselSlider").length == 0 ||
        ewd_us_php_data.carousel_advance == "Full"
      ) {
        if (
          jQuery(".slideTitle.ewd-us-mobile-hide").length == 0 ||
          jQuery(window).width() >= 568
        ) {
          if (
            ewd_us_php_data.title_animate == "SlideFromLeft" ||
            ewd_us_php_data.title_animate == "SlideFromRight"
          ) {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            ).hide();
          }
          if (ewd_us_php_data.title_animate == "FadeIn") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            ).fadeTo(50, 0.1);
          }
          if (ewd_us_php_data.title_animate == "ScrollDown") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            ).slideUp(10);
          }
          jQuery(".ewd-slider-section .slider ul.slider-window").css(
            "transform",
            "translate3d(-" + $margin + "px,0px,0px)"
          );
          jQuery(".ewd-slider-section .slider ul.slider-window").css({
            transform: "translate3d(-" + $margin + "px,0px,0px)",
            "-webkit-transform": "translate3d(-" + $margin + "px,0px,0px)",
            "-moz-transform": "translate3d(-" + $margin + "px,0px,0px)",
            "-ms-transform": "translate3d(-" + $margin + "px,0px,0px)",
            "-o-transform": "translate3d(-" + $margin + "px,0px,0px)",
          });
          if (ewd_us_php_data.title_animate == "SlideFromLeft") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            )
              .delay(400)
              .show("slide", { direction: "left" }, 1000);
          }
          if (ewd_us_php_data.title_animate == "SlideFromRight") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            )
              .delay(400)
              .show("slide", { direction: "right" }, 1000);
          }
          if (ewd_us_php_data.title_animate == "FadeIn") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            )
              .delay(500)
              .fadeTo(1500, 1);
          }
          if (ewd_us_php_data.title_animate == "ScrollDown") {
            jQuery(
              ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
            )
              .delay(500)
              .slideDown(1200);
          }
        } else {
          jQuery(
            ".ewd-slider-section .slider .ewd-slide .slideText .slideTitle"
          ).hide();
        }
      } else {
        if (ewd_us_php_data.carousel_columns == "2") {
          var $margin2col = $margin / 2;
          jQuery(".carouselArrows ul.slider-window").css(
            "transform",
            "translate3d(-" + $margin2col + "px,0px,0px)"
          );
          jQuery(".carouselArrows ul.slider-window").css({
            transform: "translate3d(-" + $margin2col + "px,0px,0px)",
            "-webkit-transform": "translate3d(-" + $margin2col + "px,0px,0px)",
            "-moz-transform": "translate3d(-" + $margin2col + "px,0px,0px)",
            "-ms-transform": "translate3d(-" + $margin2col + "px,0px,0px)",
            "-o-transform": "translate3d(-" + $margin2col + "px,0px,0px)",
          });
        }
        if (ewd_us_php_data.carousel_columns == "3") {
          var $margin3col = $margin / 3;
          jQuery(".carouselArrows ul.slider-window").css(
            "transform",
            "translate3d(-" + $margin3col + "px,0px,0px)"
          );
          jQuery(".carouselArrows ul.slider-window").css({
            transform: "translate3d(-" + $margin3col + "px,0px,0px)",
            "-webkit-transform": "translate3d(-" + $margin3col + "px,0px,0px)",
            "-moz-transform": "translate3d(-" + $margin3col + "px,0px,0px)",
            "-ms-transform": "translate3d(-" + $margin3col + "px,0px,0px)",
            "-o-transform": "translate3d(-" + $margin3col + "px,0px,0px)",
          });
        }
        if (ewd_us_php_data.carousel_columns == "4") {
          var $margin4col = $margin / 4;
          jQuery(".carouselArrows ul.slider-window").css(
            "transform",
            "translate3d(-" + $margin4col + "px,0px,0px)"
          );
          jQuery(".carouselArrows ul.slider-window").css({
            transform: "translate3d(-" + $margin4col + "px,0px,0px)",
            "-webkit-transform": "translate3d(-" + $margin4col + "px,0px,0px)",
            "-moz-transform": "translate3d(-" + $margin4col + "px,0px,0px)",
            "-ms-transform": "translate3d(-" + $margin4col + "px,0px,0px)",
            "-o-transform": "translate3d(-" + $margin4col + "px,0px,0px)",
          });
        }
      } //else
    } else if (ewd_slider.transitionType == "fade") {
      jQuery(".ewd-slider-main")
        .removeClass("ewd-slider-main")
        .siblings()
        .hide();
      jQuery(
        ".ewd-slider-section .slider ul.slider-window li.ewd-slide:nth-child(" +
          nextSlide +
          ")"
      )
        .addClass("ewd-slider-main")
        .fadeIn(ewd_slider.fadeTime, "swing");
    } else {
      jQuery(".ewd-slider-main")
        .removeClass("ewd-slider-" + ewd_slider.transitionType)
        .removeClass("ewd-slider-main")
        .siblings()
        .hide();
      jQuery(
        ".ewd-slider-section .slider ul.slider-window li.ewd-slide:nth-child(" +
          nextSlide +
          ")"
      )
        .show()
        .addClass("ewd-slider-main");
      jQuery(
        ".ewd-slider-section .slider ul.slider-window li.ewd-slide:nth-child(" +
          nextSlide +
          ")"
      )
        .show()
        .addClass("ewd-slider-" + ewd_slider.transitionType);
    }
  }
  //update control button active
  jQuery(".ewd-slider-control-button span").removeClass(
    "ewd-slide-button-active"
  );
  jQuery(".ewd-slider-control-button-" + target + " span").addClass(
    "ewd-slide-button-active"
  );

  ewd_slider.slide = target;
}
/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
  var initializing = false,
    fnTest = /xyz/.test(function () {
      xyz;
    })
      ? /\b_super\b/
      : /.*/;

  // The base Class implementation (does nothing)
  this.Class = function () {};

  // Create a new Class that inherits from this class
  Class.extend = function (prop) {
    var _super = this.prototype;

    // Instantiate a base class (but only create the instance,
    // don’t run the init constructor)
    initializing = true;
    var prototype = new this();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we’re overwriting an existing function
      prototype[name] =
        typeof prop[name] == "function" &&
        typeof _super[name] == "function" &&
        fnTest.test(prop[name])
          ? (function (name, fn) {
              return function () {
                var tmp = this._super;

                // Add a new ._super() method that is the same method
                // but on the super-class
                this._super = _super[name];

                // The method only need to be bound temporarily, so we
                // remove it when we’re done executing
                var ret = fn.apply(this, arguments);
                this._super = tmp;

                return ret;
              };
            })(name, prop[name])
          : prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if (!initializing && this.init) this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = Class;

    // And make this class extendable
    Class.extend = arguments.callee;

    return Class;
  };
})();

var lightbox;

var defaults = {
  custom_css: "",

  transition_class: "ewd-ulb-horizontal-slide",

  speed: 600,
  height: "100%",
  width: "100%",

  closable: true,
  loop: true,
  keyboard_controls: true,

  show_thumbnails: "bottom",

  hideElements: ["description", "thumbnails"],

  autoplay: false,
  autoplayInterval: 4000,

  zoomLevel: 0,
  fullsize: false,

  ulb_arrow: "a",
  ulb_icon_set: "X",

  controls: {
    top_right_controls: ["exit"],
    top_left_controls: [
      "autoplay",
      "zoom",
      "zoom_out",
      "download",
      "fullscreen",
    ],
    bottom_right_controls: ["slide_counter"],
    bottom_left_controls: [],
  },
};

var EWD_ULB_LightboxSlide = Class.extend({
  init: function (element, length) {
    this.element = element;
    this.source = jQuery(element).data("ulbsource");
    this.title = jQuery(element).data("ulbtitle");
    this.description = jQuery(element).data("ulbdescription");
    this.gallery = jQuery(element).data("ulbGallery");

    if (this.source) {
      var youtube = this.source.match(
        /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
      );
      if (youtube) {
        this.video = "youtube";
        this.source = this.source.replace("watch?v=", "v/");
      } else {
        this.video = false;
      }
    } else {
      this.video = false;
    }

    if (jQuery(element).data("ulbheight")) {
      this.height = jQuery(element).data("ulbheight");
    } else {
      this.height = 315;
    }
    if (jQuery(element).data("ulbwidth")) {
      this.width = jQuery(element).data("ulbwidth");
    } else {
      this.width = 560;
    }
  },
});

var UltimateLightbox = Class.extend({
  init: function (options) {
    this.settings = jQuery.extend({}, defaults, options);

    this.displaying = false;

    var elements = [];
    jQuery(".ewd-ulb-lightbox, .ewd-ulb-lightbox-noclick-image").each(function (
      index,
      value
    ) {
      var Slide = new EWD_ULB_LightboxSlide(this, elements.length);
      jQuery(this).data("slideIndex", elements.length);
      elements.push(Slide);
    });
    this.elements = elements;

    this.currentSlide = 0;

    this.maxSlide = this.elements.length - 1;

    this.setMobileClasses();
  },

  setMobileClasses: function () {
    if (jQuery.inArray("description", this.settings.hideElements) !== -1) {
      this.settings.descriptionClass = "ewd-ulb-mobile-hide";
    } else {
      this.settings.descriptionClass = "";
    }
    if (jQuery.inArray("title", this.settings.hideElements) !== -1) {
      this.settings.titleClass = "ewd-ulb-mobile-hide";
    } else {
      this.settings.titleClass = "";
    }
    if (jQuery.inArray("thumbnails", this.settings.hideElements) !== -1) {
      this.settings.thumbnailsClass = "ewd-ulb-mobile-hide";
    } else {
      this.settings.thumbnailsClass = "";
    }

    if (
      this.settings.descriptionClass == "ewd-ulb-mobile-hide" &&
      this.settings.titleClass == "ewd-ulb-mobile-hide"
    ) {
      this.settings.overlayClass = "ewd-ulb-mobile-hide";
    } else {
      this.settings.overlayClass = "";
    }
  },

  setCurrentSlide: function (targetElement) {
    jQuery(this.elements).each(function (index, element) {
      if (element.source == jQuery(targetElement).data("ulbsource")) {
        lightbox.currentSlide = index;
      }
    });
  },

  toggle: function () {
    if (this.displaying) {
      this.closeLightbox();
    } else {
      this.openLightbox();
    }
  },

  closeLightbox: function () {
    this.displaying = false;
    jQuery(".ewd-ulb-background").css("display", "none");
    jQuery(".ewd-ulb-lightbox-container").css("display", "none");
    this.switchSlide();
    jQuery(".ewd-ulb-active-slide").removeClass("ewd-ulb-active-slide");
    jQuery(".ewd-ulb-active-thumbnail").removeClass("ewd-ulb-active-thumbnail");
  },

  openLightbox: function () {
    this.displaying = true;
    jQuery(".ewd-ulb-background").css("display", "inline");
    jQuery(".ewd-ulb-lightbox-container").css("display", "inline");
    if (this.settings.autoplay == "true") {
      this.startAutoplay();
    }
    this.switchSlide();
    this.selectThumbnails();
    lightbox.noZoom();
  },

  nextSlide: function () {
    var oldSlide = this.currentSlide;
    do {
      if (this.currentSlide == this.maxSlide) {
        this.currentSlide = 0;
      } else {
        this.currentSlide = this.currentSlide + 1;
      }
    } while (
      this.elements[oldSlide].gallery !=
      this.elements[this.currentSlide].gallery
    );
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-transition-next");
    this.switchSlide(oldSlide);
  },

  previousSlide: function () {
    var oldSlide = this.currentSlide;
    do {
      if (this.currentSlide == 0) {
        this.currentSlide = this.maxSlide;
      } else {
        this.currentSlide = this.currentSlide - 1;
      }
    } while (
      this.elements[oldSlide].gallery !=
      this.elements[this.currentSlide].gallery
    );
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-transition-previous");
    this.switchSlide(oldSlide);
  },

  goToSlide: function (slideIndex) {
    var oldSlide = this.currentSlide;
    this.currentSlide = slideIndex;
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-transition-next");
    this.switchSlide(oldSlide);
  },

  switchSlide: function (oldSlide) {
    if (typeof oldSlide !== "undefined") {
      jQuery(
        ".ewd-ulb-slide-thumbnail[data-slideindex='" + oldSlide + "']"
      ).removeClass("ewd-ulb-active-thumbnail");
      jQuery(".ewd-ulb-slide[data-slideindex='" + oldSlide + "']").removeClass(
        "ewd-ulb-image-displaying"
      );
      jQuery(".ewd-ulb-slide[data-slideindex='" + oldSlide + "']").addClass(
        "ewd-ulb-old-active-slide"
      );
      setTimeout(function () {
        jQuery(
          ".ewd-ulb-slide[data-slideindex='" + oldSlide + "']"
        ).removeClass("ewd-ulb-active-slide ewd-ulb-old-active-slide");
      }, 500);
    }
    jQuery(
      ".ewd-ulb-slide-thumbnail[data-slideindex='" + this.currentSlide + "']"
    ).addClass("ewd-ulb-active-thumbnail");
    jQuery(
      ".ewd-ulb-slide[data-slideindex='" + this.currentSlide + "']"
    ).addClass("ewd-ulb-active-slide ewd-ulb-image-displaying");
    var slideNumber = this.currentSlide + 1;
    jQuery(".ewd-ulb-current-count-indicator").each(function () {
      jQuery(this).html(slideNumber);
    });

    setTimeout(function () {
      jQuery(".ewd-ulb-slide").removeClass(
        "ewd-ulb-transition-next ewd-ulb-transition-previous"
      );
    }, 500);

    lightbox.resizeOverlay();
    lightbox.setDownloadLinks();
  },

  selectThumbnails: function () {
    var gallery = this.getCurrentGallery();

    jQuery(".ewd-ulb-slide-thumbnail").addClass("ewd-ulb-thumbnail-hidden");
    jQuery(
      '.ewd-ulb-slide-thumbnail[data-ulbGallery="' + gallery + '"]'
    ).removeClass("ewd-ulb-thumbnail-hidden");
  },

  getCurrentGallery: function () {
    var gallery = "";
    var currentSlide = this.currentSlide;
    jQuery(this.elements).each(function (index, element) {
      if (index == currentSlide) {
        gallery = element.gallery;
      }
    });

    return gallery;
  },

  resizeOverlay: function () {
    var imgWidth = jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying img")
      .first()
      .width();
    console.log("Image width: " + imgWidth);
    var containerWidth = jQuery(
      ".ewd-ulb-active-slide.ewd-ulb-image-displaying"
    )
      .first()
      .width();
    console.log("Container width: " + containerWidth);
    var marginWidth = (containerWidth - imgWidth) / 2;
    jQuery(".ewd-ulb-slide-overlay").css(
      "width",
      jQuery(".ewd-ulb-active-slide.ewd-ulb-image-displaying img")
        .first()
        .width()
    );
    jQuery(".ewd-ulb-slide-overlay").css("margin", "0px " + marginWidth + "px");
  },

  toggleAutoplay: function () {
    if (this.settings.autoplay) {
      this.stopAutoplay();
    } else {
      this.startAutoplay();
    }
  },

  startAutoplay: function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.settings.autoplay = true;
    this.interval = setInterval(function () {
      lightbox.nextSlide();
    }, this.settings.autoplayInterval);
  },

  stopAutoplay: function () {
    this.settings.autoplay = false;
    clearInterval(this.interval);
  },

  ZoomOut: function () {
    if (this.settings.zoomLevel == 2) {
      this.zoomOne();
    } else if (this.settings.zoomLevel == 1) {
      this.noZoom();
    }

    this.removeFullSize();
  },

  toggleZoom: function () {
    if (this.settings.zoomLevel == 0) {
      this.zoomOne();
    } else if (this.settings.zoomLevel == 1) {
      this.zoomTwo();
    } else {
      this.noZoom();
    }

    this.removeFullSize();
  },

  zoomOne: function () {
    this.settings.zoomLevel = 1;
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-zoom-one");
    jQuery(".ewd-ulb-slide").removeClass("ewd-ulb-zoom-two");
  },

  zoomTwo: function () {
    this.settings.zoomLevel = 2;
    jQuery(".ewd-ulb-slide").removeClass("ewd-ulb-zoom-one");
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-zoom-two");
  },

  noZoom: function () {
    this.settings.zoomLevel = 0;
    jQuery(".ewd-ulb-slide").removeClass("ewd-ulb-zoom-one");
    jQuery(".ewd-ulb-slide").removeClass("ewd-ulb-zoom-two");
  },

  fullscreen: function () {
    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      jQuery("ewd-ulb-fullscreen").addClass("ewd-ulb-regular_screen");
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        );
      }
    } else {
      jQuery("ewd-ulb-fullscreen").removeClass("ewd-ulb-regular_screen");
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  },

  toggleFullSize: function () {
    this.noZoom();
    if (this.settings.fullsize) {
      this.removeFullSize();
    } else {
      this.goFullSize();
    }
  },

  goFullSize: function () {
    jQuery(".ewd-ulb-slide").addClass("ewd-ulb-fullsize-image");
    this.settings.fullsize = true;
  },

  removeFullSize: function () {
    jQuery(".ewd-ulb-slide").removeClass("ewd-ulb-fullsize-image");
    this.settings.fullsize = false;
  },

  setDownloadLinks: function () {
    jQuery(".ewd-ulb-download-link").attr(
      "href",
      jQuery(".ewd-ulb-active-slide div img").attr("src")
    );
  },
});

jQuery(document).ready(function () {
  if (typeof ewd_ulb_php_data == "undefined") {
    ewd_ulb_php_data = [];
  }
  lightbox = new UltimateLightbox(ewd_ulb_php_data);

  jQuery(".ewd-ulb-lightbox, .ewd-ulb-open-lightbox").on(
    "click",
    function (event) {
      if (jQuery(event.currentTarget).hasClass("ewd-ulb-lightbox")) {
        lightbox.currentSlide = jQuery(event.currentTarget).data("slideIndex");
      } else {
        lightbox.setCurrentSlide(event.currentTarget);
      }
      lightbox.toggle();
      event.preventDefault();
    }
  );

  if (jQuery(".ewd-ulb-lightbox, .ewd-ulb-lightbox-noclick-image").length) {
    EWD_ULB_Add_Lightbox_HTML(lightbox);

    jQuery(".ewd-ulb-slide-container").on("click.background", function (event) {
      if (
        jQuery(event.target).is("img") ||
        ewd_ulb_php_data.background_close == "false"
      ) {
        return;
      }
      lightbox.toggle();
    });

    jQuery(".ewd-ulb-slide-control-next").on("click.next", function () {
      lightbox.noZoom();
      lightbox.stopAutoplay();
      lightbox.nextSlide();
    });
    jQuery(".ewd-ulb-slide-control-previous").on("click.prev", function () {
      lightbox.noZoom();
      lightbox.stopAutoplay();
      lightbox.previousSlide();
    });

    jQuery(".ewd-ulb-slide-thumbnail").on("click.thumbnail", function () {
      var slideIndex = jQuery(this).data("slideindex");
      lightbox.noZoom();
      lightbox.stopAutoplay();
      lightbox.goToSlide(slideIndex);
    });

    jQuery(window).on("resize", function () {
      lightbox.resizeOverlay();
    });

    jQuery(".ewd-ulb-exit").on("click.exit", function () {
      lightbox.toggle();
    });
    jQuery(".ewd-ulb-autoplay").on("click.autoplay", function () {
      lightbox.toggleAutoplay();
    });
    jQuery(".ewd-ulb-zoom").on("click.zoom", function () {
      lightbox.toggleZoom();
    });
    jQuery(".ewd-ulb-zoom_out").on("click.zoom_out", function () {
      lightbox.ZoomOut();
    });
    jQuery(".ewd-ulb-fullsize").on("click.fullsize", function () {
      lightbox.toggleFullSize();
    });
    jQuery(".ewd-ulb-fullscreen").on("click.zoom_out", function () {
      lightbox.fullscreen();
    });
    jQuery(".ewd-ulb-download").wrap(
      '<a class="ewd-ulb-download-link" href="empty.png" download></a>'
    );

    if (lightbox.settings.keyboard_controls) {
      jQuery(document).on("keyup", function (e) {
        if (e.which == 27) {
          lightbox.closeLightbox();
        }
        if (e.which == 37) {
          lightbox.noZoom();
          lightbox.stopAutoplay();
          lightbox.previousSlide();
        }
        if (e.which == 39) {
          lightbox.noZoom();
          lightbox.stopAutoplay();
          lightbox.nextSlide();
        }
      });
    }
  }
});

function EWD_ULB_Add_Lightbox_HTML(lightbox) {
  var Custom_CSS = "<style>";
  Custom_CSS += lightbox.settings.custom_css;
  Custom_CSS += "</style>";
  Custom_CSS += lightbox.settings.styling_options;

  var Top_Toolbar_HTML = '<div class="ewd-ulb-top-toolbar">';
  Top_Toolbar_HTML +=
    '<div class="ewd-ulb-left-top-toolbar">' +
    EWD_ULB_Add_Controls(
      lightbox.settings.controls.top_left_controls,
      lightbox.maxSlide
    ) +
    "</div>";
  Top_Toolbar_HTML +=
    '<div class="ewd-ulb-right-top-toolbar">' +
    EWD_ULB_Add_Controls(
      lightbox.settings.controls.top_right_controls,
      lightbox.maxSlide
    ) +
    "</div>";
  Top_Toolbar_HTML += "</div>";

  var Top_Thumbnail_Bar_HTML =
    '<div class="ewd-ulb-top-thumbnail-bar ' +
    lightbox.settings.thumbnailsClass +
    '">';
  Top_Thumbnail_Bar_HTML +=
    '<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-left">a</div>';
  Top_Thumbnail_Bar_HTML +=
    '<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-right">b</div>';
  Top_Thumbnail_Bar_HTML += '<div class="ewd-ulb-top-thumbnails">';
  if (lightbox.settings.show_thumbnails == "top") {
    Top_Thumbnail_Bar_HTML += EWD_ULB_Thumbnails_HTML(lightbox.elements);
  }
  Top_Thumbnail_Bar_HTML += "</div>";
  Top_Thumbnail_Bar_HTML += "</div>";

  var Slide_Area_HTML = '<div class="ewd-ulb-slide-area">';
  Slide_Area_HTML +=
    '<div class="ewd-ulb-slide-control ewd-ulb-slide-control-previous ewd-ulb-arrow">' +
    lightbox.settings.ulb_arrow +
    "</div>";
  Slide_Area_HTML += '<div class="ewd-ulb-slide-container">';
  jQuery(lightbox.elements).each(function (index, value) {
    Slide_Area_HTML +=
      '<div class="ewd-ulb-slide ' +
      lightbox.settings.transition_class +
      '" data-slideindex="' +
      index +
      '">';
    Slide_Area_HTML += '<div class="ewd-ulb-slide-img">';
    if (this.video == "youtube") {
      Slide_Area_HTML +=
        '<iframe width="' +
        this.width +
        '" height="' +
        this.height +
        '" src="' +
        this.source +
        '" frameborder="0" allowfullscreen></iframe>';
    } else {
      Slide_Area_HTML += '<img src="' + this.source + '" />';
    }
    Slide_Area_HTML += "</div>";
    if (
      (this.title != undefined && this.title != "") ||
      (this.description != undefined && this.description != "")
    ) {
      Slide_Area_HTML +=
        '<div class="ewd-ulb-slide-overlay ' +
        lightbox.settings.overlayClass +
        '">';
      if (this.title != undefined && this.title != "") {
        Slide_Area_HTML +=
          '<div class="ewd-ulb-slide-title ' +
          lightbox.settings.titleClass +
          '">' +
          this.title +
          "</div>";
      }
      if (this.description != undefined && this.description != "") {
        Slide_Area_HTML +=
          '<div class="ewd-ulb-slide-description ' +
          lightbox.settings.descriptionClass +
          '">' +
          this.description +
          "</div>";
      }
      Slide_Area_HTML += "</div>";
    }
    Slide_Area_HTML += "</div>";
  });
  Slide_Area_HTML += "</div>";
  Slide_Area_HTML +=
    '<div class="ewd-ulb-slide-control ewd-ulb-slide-control-next ewd-ulb-arrow">' +
    String.fromCharCode(
      lightbox.settings.ulb_arrow.charCodeAt(
        lightbox.settings.ulb_arrow.length - 1
      ) + 1
    ) +
    "</div>";
  Slide_Area_HTML += "</div>";

  var Botton_Thumbnail_Bar_HTML =
    '<div class="ewd-ulb-bottom-thumbnail-bar ' +
    lightbox.settings.thumbnailsClass +
    '">';
  Botton_Thumbnail_Bar_HTML +=
    '<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-left">a</div>';
  Botton_Thumbnail_Bar_HTML +=
    '<div class="ewd-thumbnail-scroll-button ewd-thumbnail-scroll-button-right">b</div>';
  Botton_Thumbnail_Bar_HTML +=
    '<div class="ewd-ulb-bottom-thumbnails"><div class="ewd-ulb-thumbnails-inside">';
  if (lightbox.settings.show_thumbnails == "bottom") {
    Botton_Thumbnail_Bar_HTML += EWD_ULB_Thumbnails_HTML(lightbox.elements);
  }
  Botton_Thumbnail_Bar_HTML += "</div></div>";
  Botton_Thumbnail_Bar_HTML += "</div>";

  var Bottom_Toolbar_HTML = '<div class="ewd-ulb-bottom-toolbar">';
  Bottom_Toolbar_HTML +=
    '<div class="ewd-ulb-left-bottom-toolbar">' +
    EWD_ULB_Add_Controls(
      lightbox.settings.controls.bottom_left_controls,
      lightbox.maxSlide
    ) +
    "</div>";
  Bottom_Toolbar_HTML +=
    '<div class="ewd-ulb-right-bottom-toolbar">' +
    EWD_ULB_Add_Controls(
      lightbox.settings.controls.bottom_right_controls,
      lightbox.maxSlide
    ) +
    "</div>";
  Bottom_Toolbar_HTML += "</div>";

  var HTML =
    '<div class="ewd-ulb-background" style="display:none;width:' +
    lightbox.settings.width +
    ";height:" +
    lightbox.settings.height +
    '"></div>';
  HTML +=
    '<div class="ewd-ulb-lightbox-container ewd-ulb-thumbnails-' +
    lightbox.settings.show_thumbnails +
    '" style="display:none;">';
  HTML += Custom_CSS;
  HTML += Top_Toolbar_HTML;
  HTML += Top_Thumbnail_Bar_HTML;
  HTML += Slide_Area_HTML;
  HTML += Botton_Thumbnail_Bar_HTML;
  HTML += Bottom_Toolbar_HTML;
  HTML += "</div>";

  jQuery("body").append(HTML);
}

function EWD_ULB_Thumbnails_HTML(slides) {
  var Slide_HTML = "";
  jQuery(slides).each(function (index, value) {
    Slide_HTML +=
      '<div class="ewd-ulb-slide-thumbnail" data-slideindex="' +
      index +
      '" data-ulbGallery="' +
      this.gallery +
      '">';
    if (this.video == "youtube") {
      Slide_HTML +=
        '<img src="http://img.youtube.com/vi/' +
        /[^/]*$/.exec(this.source)[0] +
        '/default.jpg" />';
    } else {
      Slide_HTML += '<img src="' + this.source + '" />';
    }
    Slide_HTML += "</div>";
  });

  return Slide_HTML;
}

function EWD_ULB_Add_Controls(controls, maxSlide) {
  var Controls_HTML = "";
  jQuery(controls).each(function () {
    if (this == "slide_counter") {
      Controls_HTML +=
        '<div class="ewd-ulb-control ewd-ulb-slide-counter"><span class="ewd-ulb-current-count-indicator">1</span>/<span class="ewd-ulb-max-count-indicator">' +
        (maxSlide + 1) +
        "</span></div>";
    } else {
      Controls_HTML +=
        '<div class="ewd-ulb-control ewd-ulb-' +
        this +
        '">' +
        lightbox.settings.ulb_icon_set +
        "</div>";
    }
  });

  return Controls_HTML;
}

/****************************************
THUMBNAIL SCROLLING
****************************************/
jQuery(document).ready(function ($) {
  $(".ewd-ulb-bottom-thumbnail-bar").each(function () {
    var thisThumbBar = $(this);
    var numberOfThumbs = thisThumbBar.find(".ewd-ulb-slide-thumbnail").length;
    var widthOfThumbsInside = numberOfThumbs * 144;
    thisThumbBar
      .find(".ewd-ulb-thumbnails-inside")
      .css("width", widthOfThumbsInside + "px");
    thisThumbBar.find(".ewd-thumbnail-scroll-button-right").click(function () {
      var widthOfThumbs = thisThumbBar
        .find(".ewd-ulb-bottom-thumbnails")
        .width();
      if (widthOfThumbs >= widthOfThumbsInside) {
        var rightClickStop = 0;
      } else {
        var rightClickStop = widthOfThumbs - 576;
      }
      var thumbsInsideLeft = thisThumbBar
        .find(".ewd-ulb-thumbnails-inside")
        .position().left;
      if (thumbsInsideLeft != rightClickStop) {
        thisThumbBar.find(".ewd-ulb-thumbnails-inside").css("left", "-=144");
      }
    });
    thisThumbBar.find(".ewd-thumbnail-scroll-button-left").click(function () {
      var leftClickStop = 0;
      var thumbsInsideLeft = thisThumbBar
        .find(".ewd-ulb-thumbnails-inside")
        .position().left;
      if (thumbsInsideLeft != leftClickStop) {
        thisThumbBar.find(".ewd-ulb-thumbnails-inside").css("left", "+=144");
      }
    });
  });
  $(".ewd-ulb-top-thumbnail-bar").each(function () {
    var thisThumbBar = $(this);
    var numberOfThumbs = thisThumbBar.find(".ewd-ulb-slide-thumbnail").length;
    var widthOfThumbsInside = numberOfThumbs * 144;
    thisThumbBar
      .find(".ewd-ulb-thumbnails-inside")
      .css("width", widthOfThumbsInside + "px");
    thisThumbBar.find(".ewd-thumbnail-scroll-button-right").click(function () {
      var widthOfThumbs = thisThumbBar.find(".ewd-ulb-top-thumbnails").width();
      if (widthOfThumbs >= widthOfThumbsInside) {
        var rightClickStop = 0;
      } else {
        var rightClickStop = widthOfThumbs - 576;
      }
      var thumbsInsideLeft = thisThumbBar
        .find(".ewd-ulb-thumbnails-inside")
        .position().left;
      if (thumbsInsideLeft != rightClickStop) {
        thisThumbBar.find(".ewd-ulb-thumbnails-inside").css("left", "-=144");
      }
    });
    thisThumbBar.find(".ewd-thumbnail-scroll-button-left").click(function () {
      var leftClickStop = 0;
      var thumbsInsideLeft = thisThumbBar
        .find(".ewd-ulb-thumbnails-inside")
        .position().left;
      if (thumbsInsideLeft != leftClickStop) {
        thisThumbBar.find(".ewd-ulb-thumbnails-inside").css("left", "+=144");
      }
    });
  });
});

//////////////////////////////////////
/////MARGIN OF VIDEOS IN LIGHTBOX/////
//////////////////////////////////////
jQuery(document).ready(function ($) {
  $(".ewd-ulb-slide-img").each(function () {
    var thisSlideImg = $(this);
    if (thisSlideImg.find("iframe").length > 0) {
      var thisSlideIframeHalfHeight =
        (thisSlideImg.find("iframe").height() / 2) * -1;
      thisSlideImg
        .find("iframe")
        .css("margin-top", thisSlideIframeHalfHeight + "px");
    }
  });
}); /* --- $DEBOUNCES RESIZE --- */

/* debouncedresize: special jQuery event that happens once after a window resize
 * https://github.com/louisremi/jquery-smartresize
 * Copyright 2012 @louis_remi
 * MIT License
 */
(function ($) {
  var $event = $.event,
    $special,
    resizeTimeout;
  $special = $event.special.debouncedresize = {
    setup: function () {
      $(this).on("resize", $special.handler);
    },
    teardown: function () {
      $(this).off("resize", $special.handler);
    },
    handler: function (event, execAsap) {
      var context = this,
        args = arguments,
        dispatch = function () {
          event.type = "debouncedresize";
          $event.dispatch.apply(context, args);
        };
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      execAsap
        ? dispatch()
        : (resizeTimeout = setTimeout(dispatch, $special.threshold));
    },
    threshold: 150,
  };
})(jQuery);

/* --- $HOVERINTENT --- */

/* hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license.
 * Copyright 2007, 2013 Brian Cherne
 */
(function (e) {
  e.fn.hoverIntent = function (t, n, r) {
    var i = { interval: 100, sensitivity: 7, timeout: 0 };
    if (typeof t === "object") {
      i = e.extend(i, t);
    } else if (e.isFunction(n)) {
      i = e.extend(i, { over: t, out: n, selector: r });
    } else {
      i = e.extend(i, { over: t, out: t, selector: n });
    }
    var s, o, u, a;
    var f = function (e) {
      s = e.pageX;
      o = e.pageY;
    };
    var l = function (t, n) {
      n.hoverIntent_t = clearTimeout(n.hoverIntent_t);
      if (Math.abs(u - s) + Math.abs(a - o) < i.sensitivity) {
        e(n).off("mousemove.hoverIntent", f);
        n.hoverIntent_s = 1;
        return i.over.apply(n, [t]);
      } else {
        u = s;
        a = o;
        n.hoverIntent_t = setTimeout(function () {
          l(t, n);
        }, i.interval);
      }
    };
    var c = function (e, t) {
      t.hoverIntent_t = clearTimeout(t.hoverIntent_t);
      t.hoverIntent_s = 0;
      return i.out.apply(t, [e]);
    };
    var h = function (t) {
      var n = jQuery.extend({}, t);
      var r = this;
      if (r.hoverIntent_t) {
        r.hoverIntent_t = clearTimeout(r.hoverIntent_t);
      }
      if (t.type == "mouseenter") {
        u = n.pageX;
        a = n.pageY;
        e(r).on("mousemove.hoverIntent", f);
        if (r.hoverIntent_s != 1) {
          r.hoverIntent_t = setTimeout(function () {
            l(n, r);
          }, i.interval);
        }
      } else {
        e(r).off("mousemove.hoverIntent", f);
        if (r.hoverIntent_s == 1) {
          r.hoverIntent_t = setTimeout(function () {
            c(n, r);
          }, i.timeout);
        }
      }
    };
    return this.on(
      { "mouseenter.hoverIntent": h, "mouseleave.hoverIntent": h },
      i.selector
    );
  };
})(jQuery);

/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
  function e() {}

  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n;
    return -1;
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }

  var i = e.prototype,
    r = this,
    o = r.EventEmitter;
  (i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents();
    if ("object" == typeof e) {
      t = {};
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
    } else t = i[e] || (i[e] = []);
    return t;
  }),
    (i.flattenListeners = function (e) {
      var t,
        n = [];
      for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
      return n;
    }),
    (i.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e);
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
    }),
    (i.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = "object" == typeof n;
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(o ? n : { listener: n, once: !1 });
      return this;
    }),
    (i.on = n("addListener")),
    (i.addOnceListener = function (e, t) {
      return this.addListener(e, { listener: t, once: !0 });
    }),
    (i.once = n("addOnceListener")),
    (i.defineEvent = function (e) {
      return this.getListeners(e), this;
    }),
    (i.defineEvents = function (e) {
      for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
      return this;
    }),
    (i.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e);
      for (r in o)
        o.hasOwnProperty(r) &&
          ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
      return this;
    }),
    (i.off = n("removeListener")),
    (i.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t);
    }),
    (i.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t);
    }),
    (i.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners;
      if ("object" != typeof t || t instanceof RegExp)
        for (i = n.length; i--; ) o.call(this, t, n[i]);
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
      return this;
    }),
    (i.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents();
      if ("string" === n) delete i[e];
      else if ("object" === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
      else delete this._events;
      return this;
    }),
    (i.removeAllListeners = n("removeEvent")),
    (i.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e);
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--; )
            (n = s[r][i]),
              n.once === !0 && this.removeListener(e, n.listener),
              (o = n.listener.apply(this, t || [])),
              o === this._getOnceReturnValue() &&
                this.removeListener(e, n.listener);
      return this;
    }),
    (i.trigger = n("emitEvent")),
    (i.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(e, t);
    }),
    (i.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this;
    }),
    (i._getOnceReturnValue = function () {
      return this.hasOwnProperty("_onceReturnValue")
        ? this._onceReturnValue
        : !0;
    }),
    (i._getEvents = function () {
      return this._events || (this._events = {});
    }),
    (e.noConflict = function () {
      return (r.EventEmitter = o), e;
    }),
    "function" == typeof define && define.amd
      ? define("eventEmitter/EventEmitter", [], function () {
          return e;
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e)
      : (this.EventEmitter = e);
}).call(this),
  (function (e) {
    function t(t) {
      var n = e.event;
      return (n.target = n.target || n.srcElement || t), n;
    }

    var n = document.documentElement,
      i = function () {};
    n.addEventListener
      ? (i = function (e, t, n) {
          e.addEventListener(t, n, !1);
        })
      : n.attachEvent &&
        (i = function (e, n, i) {
          (e[n + i] = i.handleEvent
            ? function () {
                var n = t(e);
                i.handleEvent.call(i, n);
              }
            : function () {
                var n = t(e);
                i.call(e, n);
              }),
            e.attachEvent("on" + n, e[n + i]);
        });
    var r = function () {};
    n.removeEventListener
      ? (r = function (e, t, n) {
          e.removeEventListener(t, n, !1);
        })
      : n.detachEvent &&
        (r = function (e, t, n) {
          e.detachEvent("on" + t, e[t + n]);
          try {
            delete e[t + n];
          } catch (i) {
            e[t + n] = void 0;
          }
        });
    var o = { bind: i, unbind: r };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", o)
      : (e.eventie = o);
  })(this),
  (function (e, t) {
    "function" == typeof define && define.amd
      ? define(
          ["eventEmitter/EventEmitter", "eventie/eventie"],
          function (n, i) {
            return t(e, n, i);
          }
        )
      : "object" == typeof exports
      ? (module.exports = t(e, require("eventEmitter"), require("eventie")))
      : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
  })(this, function (e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n];
      return e;
    }

    function r(e) {
      return "[object Array]" === d.call(e);
    }

    function o(e) {
      var t = [];
      if (r(e)) t = e;
      else if ("number" == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
      else t.push(e);
      return t;
    }

    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t);
      "string" == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = i({}, this.options)),
        "function" == typeof t ? (n = t) : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        a && (this.jqDeferred = new a.Deferred());
      var r = this;
      setTimeout(function () {
        r.check();
      });
    }

    function c(e) {
      this.img = e;
    }

    function f(e) {
      (this.src = e), (v[e] = this);
    }

    var a = e.jQuery,
      u = e.console,
      h = u !== void 0,
      d = Object.prototype.toString;
    (s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e];
          "IMG" === n.nodeName && this.addImage(n);
          for (
            var i = n.querySelectorAll("img"), r = 0, o = i.length;
            o > r;
            r++
          ) {
            var s = i[r];
            this.addImage(s);
          }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new c(e);
        this.images.push(t);
      }),
      (s.prototype.check = function () {
        function e(e, r) {
          return (
            t.options.debug && h && u.log("confirm", e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
          );
        }

        var t = this,
          n = 0,
          i = this.images.length;
        if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
          var o = this.images[r];
          o.on("confirm", e), o.check();
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
          t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
        });
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
          if ((t.emit(e, t), t.emit("always", t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? "reject" : "resolve";
            t.jqDeferred[n](t);
          }
        });
      }),
      a &&
        (a.fn.imagesLoaded = function (e, t) {
          var n = new s(this, e, t);
          return n.jqDeferred.promise(a(this));
        }),
      (c.prototype = new t()),
      (c.prototype.check = function () {
        var e = v[this.img.src] || new f(this.img.src);
        if (e.isConfirmed)
          return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return (
            this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0
          );
        var t = this;
        e.on("confirm", function (e, n) {
          return t.confirm(e.isLoaded, n), !0;
        }),
          e.check();
      }),
      (c.prototype.confirm = function (e, t) {
        (this.isLoaded = e), this.emit("confirm", this, t);
      });
    var v = {};
    return (
      (f.prototype = new t()),
      (f.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image();
          n.bind(e, "load", this),
            n.bind(e, "error", this),
            (e.src = this.src),
            (this.isChecked = !0);
        }
      }),
      (f.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e);
      }),
      (f.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e);
      }),
      (f.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e);
      }),
      (f.prototype.confirm = function (e, t) {
        (this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit("confirm", this, t);
      }),
      (f.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this);
      }),
      s
    );
  });
/*!
 * jQuery Bully Plugin v0.1.4
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2016 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
(function ($, window, document, undefined) {
  var $window = $(window),
    windowHeight = $window.height(),
    elements = [],
    $bully,
    $current,
    lastScrollY =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0),
    current = 0,
    inversed = false,
    frameRendered = true;

  $bully = $('<div class="c-bully">').appendTo("body");
  $current = $(
    '<div class="c-bully__bullet c-bully__bullet--active">'
  ).appendTo($bully);

  function update() {
    if (frameRendered !== true) {
      var count = 0,
        inverse = false;

      $.each(elements, function (i, element) {
        if (lastScrollY >= element.offset.top - windowHeight / 2) {
          count = count + 1;
          inverse =
            lastScrollY <
            element.offset.top + element.height - windowHeight / 2;
        }
      });

      if (inversed !== inverse) {
        inversed = inverse;
        $bully.toggleClass("c-bully--inversed", inversed);
      }

      if (count !== current) {
        var offset =
          $bully
            .children(".c-bully__bullet")
            .not(".c-bully__bullet--active")
            .first()
            .outerHeight(true) *
          (count - 1);
        $current.removeClass("c-bully__bullet--squash");
        setTimeout(function () {
          $current.addClass("c-bully__bullet--squash");
        });
        $current.css("top", offset);
        current = count;
      }
    }

    window.requestAnimationFrame(update);
    frameRendered = true;
  }

  update();

  function reloadAll() {
    $.each(elements, function (i, element) {
      element._reloadElement();
    });
  }

  function staggerClass($elements, classname, timeout) {
    $.each($elements, function (i, obj) {
      var stagger = i * timeout;

      setTimeout(function () {
        obj.$bullet.addClass(classname);
      }, stagger);
    });
  }

  $window.on("load", function (e) {
    staggerClass(elements, "c-bully__bullet--pop", 400);
    frameRendered = false;
  });

  $window.on("scroll", function (e) {
    if (frameRendered === true) {
      lastScrollY =
        (window.pageYOffset || document.documentElement.scrollTop) -
        (document.documentElement.clientTop || 0);
    }
    frameRendered = false;
  });

  $window.on("load resize", function () {
    reloadAll();
  });

  function Bully(element, options) {
    this.element = element;
    this.options = $.extend({}, $.fn.bully.defaults, options);

    var self = this,
      $bullet = $('<div class="c-bully__bullet">');

    $bullet.data("bully-data", self).appendTo($bully);
    $bullet.on("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      self.onClick();
    });

    this.$bullet = $bullet;

    self._reloadElement();
    elements.push(self);
    current = 0;
  }

  Bully.prototype.constructor = Bully;

  Bully.prototype._reloadElement = function () {
    // for some strange reason Customizer reload makes jQuery's .offset() to fail
    var self = this,
      box = {
        top: 0,
        left: 0,
      };

    // quickfix: replicate .offset() logic here
    if (typeof self.element.getBoundingClientRect !== "undefined") {
      box = self.element.getBoundingClientRect();
    }

    self.offset = {
      top:
        box.top +
        (window.pageYOffset || self.element.scrollTop) -
        (self.element.clientTop || 0),
      left:
        box.left +
        (window.pageXOffset || self.element.scrollLeft) -
        (self.element.clientLeft || 0),
    };
    self.height = $(self.element).outerHeight();
  };

  Bully.prototype.onClick = function () {
    var self = this,
      $target = $("html, body");

    if (self.options.scrollDuration == 0) {
      $target.scrollTop(self.offset.top);
      return;
    }

    if (self.options.scrollDuration === "auto") {
      var duration =
        Math.abs(lastScrollY - self.offset.top) /
        (self.options.scrollPerSecond / 1000);
      $target.animate({ scrollTop: self.offset.top }, duration);
      return;
    }

    $target.animate(
      { scrollTop: self.offset.top },
      self.options.scrollDuration
    );
  };

  $.fn.bully = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + Bully)) {
        $.data(this, "plugin_" + Bully, new Bully(this, options));
      }
    });
  };

  $.fn.bully.defaults = {
    scrollDuration: "auto",
    scrollPerSecond: 4000,
  };

  $window.on("rellax rellax:restart load", reloadAll);
})(jQuery, window, document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS
    factory(require("jquery"));
  } else {
    // Browser globals
    factory(window.jQuery || window.Zepto);
  }
})(function ($) {
  /*>>core*/
  /**
   *
   * Magnific Popup Core JS file
   *
   */

  /**
   * Private static constants
   */
  var CLOSE_EVENT = "Close",
    BEFORE_CLOSE_EVENT = "BeforeClose",
    AFTER_CLOSE_EVENT = "AfterClose",
    BEFORE_APPEND_EVENT = "BeforeAppend",
    MARKUP_PARSE_EVENT = "MarkupParse",
    OPEN_EVENT = "Open",
    CHANGE_EVENT = "Change",
    NS = "mfp",
    EVENT_NS = "." + NS,
    READY_CLASS = "mfp-ready",
    REMOVING_CLASS = "mfp-removing",
    PREVENT_CLOSE_CLASS = "mfp-prevent-close";

  /**
   * Private vars
   */
  /*jshint -W079 */
  var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
    MagnificPopup = function () {},
    _isJQ = !!window.jQuery,
    _prevStatus,
    _window = $(window),
    _document,
    _prevContentType,
    _wrapClasses,
    _currPopupType;

  /**
   * Private functions
   */
  var _mfpOn = function (name, f) {
      mfp.ev.on(NS + name + EVENT_NS, f);
    },
    _getEl = function (className, appendTo, html, raw) {
      var el = document.createElement("div");
      el.className = "mfp-" + className;
      if (html) {
        el.innerHTML = html;
      }
      if (!raw) {
        el = $(el);
        if (appendTo) {
          el.appendTo(appendTo);
        }
      } else if (appendTo) {
        appendTo.appendChild(el);
      }
      return el;
    },
    _mfpTrigger = function (e, data) {
      mfp.ev.triggerHandler(NS + e, data);

      if (mfp.st.callbacks) {
        // converts "mfpEventName" to "eventName" callback and triggers it if it's present
        e = e.charAt(0).toLowerCase() + e.slice(1);
        if (mfp.st.callbacks[e]) {
          mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
        }
      }
    },
    _getCloseBtn = function (type) {
      if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
        mfp.currTemplate.closeBtn = $(
          mfp.st.closeMarkup.replace("%title%", mfp.st.tClose)
        );
        _currPopupType = type;
      }
      return mfp.currTemplate.closeBtn;
    },
    // Initialize Magnific Popup only when called at least once
    _checkInstance = function () {
      if (!$.magnificPopup.instance) {
        /*jshint -W020 */
        mfp = new MagnificPopup();
        mfp.init();
        $.magnificPopup.instance = mfp;
      }
    },
    // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
    supportsTransitions = function () {
      var s = document.createElement("p").style, // 's' for style. better to create an element if body yet to exist
        v = ["ms", "O", "Moz", "Webkit"]; // 'v' for vendor

      if (s["transition"] !== undefined) {
        return true;
      }

      while (v.length) {
        if (v.pop() + "Transition" in s) {
          return true;
        }
      }

      return false;
    };

  /**
   * Public functions
   */
  MagnificPopup.prototype = {
    constructor: MagnificPopup,

    /**
     * Initializes Magnific Popup plugin.
     * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
     */
    init: function () {
      var appVersion = navigator.appVersion;
      mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
      mfp.isAndroid = /android/gi.test(appVersion);
      mfp.isIOS = /iphone|ipad|ipod/gi.test(appVersion);
      mfp.supportsTransition = supportsTransitions();

      // We disable fixed positioned lightbox on devices that don't handle it nicely.
      // If you know a better way of detecting this - let me know.
      mfp.probablyMobile =
        mfp.isAndroid ||
        mfp.isIOS ||
        /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
          navigator.userAgent
        );
      _document = $(document);

      mfp.popupsCache = {};
    },

    /**
     * Opens popup
     * @param  data [description]
     */
    open: function (data) {
      var i;

      if (data.isObj === false) {
        // convert jQuery collection to array to avoid conflicts later
        mfp.items = data.items.toArray();

        mfp.index = 0;
        var items = data.items,
          item;
        for (i = 0; i < items.length; i++) {
          item = items[i];
          if (item.parsed) {
            item = item.el[0];
          }
          if (item === data.el[0]) {
            mfp.index = i;
            break;
          }
        }
      } else {
        mfp.items = $.isArray(data.items) ? data.items : [data.items];
        mfp.index = data.index || 0;
      }

      // if popup is already opened - we just update the content
      if (mfp.isOpen) {
        mfp.updateItemHTML();
        return;
      }

      mfp.types = [];
      _wrapClasses = "";
      if (data.mainEl && data.mainEl.length) {
        mfp.ev = data.mainEl.eq(0);
      } else {
        mfp.ev = _document;
      }

      if (data.key) {
        if (!mfp.popupsCache[data.key]) {
          mfp.popupsCache[data.key] = {};
        }
        mfp.currTemplate = mfp.popupsCache[data.key];
      } else {
        mfp.currTemplate = {};
      }

      mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
      mfp.fixedContentPos =
        mfp.st.fixedContentPos === "auto"
          ? !mfp.probablyMobile
          : mfp.st.fixedContentPos;

      if (mfp.st.modal) {
        mfp.st.closeOnContentClick = false;
        mfp.st.closeOnBgClick = false;
        mfp.st.showCloseBtn = false;
        mfp.st.enableEscapeKey = false;
      }

      // Building markup
      // main containers are created only once
      if (!mfp.bgOverlay) {
        // Dark overlay
        mfp.bgOverlay = _getEl("bg").on("click" + EVENT_NS, function () {
          mfp.close();
        });

        mfp.wrap = _getEl("wrap")
          .attr("tabindex", -1)
          .on("click" + EVENT_NS, function (e) {
            if (mfp._checkIfClose(e.target)) {
              mfp.close();
            }
          });

        mfp.container = _getEl("container", mfp.wrap);
      }

      mfp.contentContainer = _getEl("content");
      if (mfp.st.preloader) {
        mfp.preloader = _getEl("preloader", mfp.container, mfp.st.tLoading);
      }

      // Initializing modules
      var modules = $.magnificPopup.modules;
      for (i = 0; i < modules.length; i++) {
        var n = modules[i];
        n = n.charAt(0).toUpperCase() + n.slice(1);
        mfp["init" + n].call(mfp);
      }
      _mfpTrigger("BeforeOpen");

      if (mfp.st.showCloseBtn) {
        // Close button
        if (!mfp.st.closeBtnInside) {
          mfp.wrap.append(_getCloseBtn());
        } else {
          _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
            values.close_replaceWith = _getCloseBtn(item.type);
          });
          _wrapClasses += " mfp-close-btn-in";
        }
      }

      if (mfp.st.alignTop) {
        _wrapClasses += " mfp-align-top";
      }

      if (mfp.fixedContentPos) {
        mfp.wrap.css({
          overflow: mfp.st.overflowY,
          overflowX: "hidden",
          overflowY: mfp.st.overflowY,
        });
      } else {
        mfp.wrap.css({
          top: _window.scrollTop(),
          position: "absolute",
        });
      }
      if (
        mfp.st.fixedBgPos === false ||
        (mfp.st.fixedBgPos === "auto" && !mfp.fixedContentPos)
      ) {
        mfp.bgOverlay.css({
          height: _document.height(),
          position: "absolute",
        });
      }

      if (mfp.st.enableEscapeKey) {
        // Close on ESC key
        _document.on("keyup" + EVENT_NS, function (e) {
          if (e.keyCode === 27) {
            mfp.close();
          }
        });
      }

      _window.on("resize" + EVENT_NS, function () {
        mfp.updateSize();
      });

      if (!mfp.st.closeOnContentClick) {
        _wrapClasses += " mfp-auto-cursor";
      }

      if (_wrapClasses) mfp.wrap.addClass(_wrapClasses);

      // this triggers recalculation of layout, so we get it once to not to trigger twice
      var windowHeight = (mfp.wH = _window.height());

      var windowStyles = {};

      if (mfp.fixedContentPos) {
        if (mfp._hasScrollBar(windowHeight)) {
          var s = mfp._getScrollbarSize();
          if (s) {
            windowStyles.marginRight = s;
          }
        }
      }

      if (mfp.fixedContentPos) {
        if (!mfp.isIE7) {
          windowStyles.overflow = "hidden";
        } else {
          // ie7 double-scroll bug
          $("body, html").css("overflow", "hidden");
        }
      }

      var classesToadd = mfp.st.mainClass;
      if (mfp.isIE7) {
        classesToadd += " mfp-ie7";
      }
      if (classesToadd) {
        mfp._addClassToMFP(classesToadd);
      }

      // add content
      mfp.updateItemHTML();

      _mfpTrigger("BuildControls");

      // remove scrollbar, add margin e.t.c
      $("html").css(windowStyles);

      // add everything to DOM
      mfp.bgOverlay
        .add(mfp.wrap)
        .prependTo(mfp.st.prependTo || $(document.body));

      // Save last focused element
      mfp._lastFocusedEl = document.activeElement;

      // Wait for next cycle to allow CSS transition
      setTimeout(function () {
        if (mfp.content) {
          mfp._addClassToMFP(READY_CLASS);
          mfp._setFocus();
        } else {
          // if content is not defined (not loaded e.t.c) we add class only for BG
          mfp.bgOverlay.addClass(READY_CLASS);
        }

        // Trap the focus in popup
        _document.on("focusin" + EVENT_NS, mfp._onFocusIn);
      }, 16);

      mfp.isOpen = true;
      mfp.updateSize(windowHeight);
      _mfpTrigger(OPEN_EVENT);

      return data;
    },

    /**
     * Closes the popup
     */
    close: function () {
      if (!mfp.isOpen) return;
      _mfpTrigger(BEFORE_CLOSE_EVENT);

      mfp.isOpen = false;
      // for CSS3 animation
      if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
        mfp._addClassToMFP(REMOVING_CLASS);
        setTimeout(function () {
          mfp._close();
        }, mfp.st.removalDelay);
      } else {
        mfp._close();
      }
    },

    /**
     * Helper for close() function
     */
    _close: function () {
      _mfpTrigger(CLOSE_EVENT);

      var classesToRemove = REMOVING_CLASS + " " + READY_CLASS + " ";

      mfp.bgOverlay.detach();
      mfp.wrap.detach();
      mfp.container.empty();

      if (mfp.st.mainClass) {
        classesToRemove += mfp.st.mainClass + " ";
      }

      mfp._removeClassFromMFP(classesToRemove);

      if (mfp.fixedContentPos) {
        var windowStyles = { marginRight: "" };
        if (mfp.isIE7) {
          $("body, html").css("overflow", "");
        } else {
          windowStyles.overflow = "";
        }
        $("html").css(windowStyles);
      }

      _document.off("keyup" + EVENT_NS + " focusin" + EVENT_NS);
      mfp.ev.off(EVENT_NS);

      // clean up DOM elements that aren't removed
      mfp.wrap.attr("class", "mfp-wrap").removeAttr("style");
      mfp.bgOverlay.attr("class", "mfp-bg");
      mfp.container.attr("class", "mfp-container");

      // remove close button from target element
      if (
        mfp.st.showCloseBtn &&
        (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)
      ) {
        if (mfp.currTemplate.closeBtn) mfp.currTemplate.closeBtn.detach();
      }

      if (mfp.st.autoFocusLast && mfp._lastFocusedEl) {
        $(mfp._lastFocusedEl).focus(); // put tab focus back
      }
      mfp.currItem = null;
      mfp.content = null;
      mfp.currTemplate = null;
      mfp.prevHeight = 0;

      _mfpTrigger(AFTER_CLOSE_EVENT);
    },

    updateSize: function (winHeight) {
      if (mfp.isIOS) {
        // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
        var zoomLevel =
          document.documentElement.clientWidth / window.innerWidth;
        var height = window.innerHeight * zoomLevel;
        mfp.wrap.css("height", height);
        mfp.wH = height;
      } else {
        mfp.wH = winHeight || _window.height();
      }
      // Fixes #84: popup incorrectly positioned with position:relative on body
      if (!mfp.fixedContentPos) {
        mfp.wrap.css("height", mfp.wH);
      }

      _mfpTrigger("Resize");
    },

    /**
     * Set content of popup based on current index
     */
    updateItemHTML: function () {
      var item = mfp.items[mfp.index];

      // Detach and perform modifications
      mfp.contentContainer.detach();

      if (mfp.content) mfp.content.detach();

      if (!item.parsed) {
        item = mfp.parseEl(mfp.index);
      }

      var type = item.type;

      _mfpTrigger("BeforeChange", [
        mfp.currItem ? mfp.currItem.type : "",
        type,
      ]);
      // BeforeChange event works like so:
      // _mfpOn('BeforeChange', function(e, prevType, newType) { });

      mfp.currItem = item;

      if (!mfp.currTemplate[type]) {
        var markup = mfp.st[type] ? mfp.st[type].markup : false;

        // allows to modify markup
        _mfpTrigger("FirstMarkupParse", markup);

        if (markup) {
          mfp.currTemplate[type] = $(markup);
        } else {
          // if there is no markup found we just define that template is parsed
          mfp.currTemplate[type] = true;
        }
      }

      if (_prevContentType && _prevContentType !== item.type) {
        mfp.container.removeClass("mfp-" + _prevContentType + "-holder");
      }

      var newContent = mfp[
        "get" + type.charAt(0).toUpperCase() + type.slice(1)
      ](item, mfp.currTemplate[type]);
      mfp.appendContent(newContent, type);

      item.preloaded = true;

      _mfpTrigger(CHANGE_EVENT, item);
      _prevContentType = item.type;

      // Append container back after its content changed
      mfp.container.prepend(mfp.contentContainer);

      _mfpTrigger("AfterChange");
    },

    /**
     * Set HTML content of popup
     */
    appendContent: function (newContent, type) {
      mfp.content = newContent;

      if (newContent) {
        if (
          mfp.st.showCloseBtn &&
          mfp.st.closeBtnInside &&
          mfp.currTemplate[type] === true
        ) {
          // if there is no markup, we just append close button element inside
          if (!mfp.content.find(".mfp-close").length) {
            mfp.content.append(_getCloseBtn());
          }
        } else {
          mfp.content = newContent;
        }
      } else {
        mfp.content = "";
      }

      _mfpTrigger(BEFORE_APPEND_EVENT);
      mfp.container.addClass("mfp-" + type + "-holder");

      mfp.contentContainer.append(mfp.content);
    },

    /**
     * Creates Magnific Popup data object based on given data
     * @param  {int} index Index of item to parse
     */
    parseEl: function (index) {
      var item = mfp.items[index],
        type;

      if (item.tagName) {
        item = { el: $(item) };
      } else {
        type = item.type;
        item = { data: item, src: item.src };
      }

      if (item.el) {
        var types = mfp.types;

        // check for 'mfp-TYPE' class
        for (var i = 0; i < types.length; i++) {
          if (item.el.hasClass("mfp-" + types[i])) {
            type = types[i];
            break;
          }
        }

        item.src = item.el.attr("data-mfp-src");
        if (!item.src) {
          item.src = item.el.attr("href");
        }
      }

      item.type = type || mfp.st.type || "inline";
      item.index = index;
      item.parsed = true;
      mfp.items[index] = item;
      _mfpTrigger("ElementParse", item);

      return mfp.items[index];
    },

    /**
     * Initializes single popup or a group of popups
     */
    addGroup: function (el, options) {
      var eHandler = function (e) {
        e.mfpEl = this;
        mfp._openClick(e, el, options);
      };

      if (!options) {
        options = {};
      }

      var eName = "click.magnificPopup";
      options.mainEl = el;

      if (options.items) {
        options.isObj = true;
        el.off(eName).on(eName, eHandler);
      } else {
        options.isObj = false;
        if (options.delegate) {
          el.off(eName).on(eName, options.delegate, eHandler);
        } else {
          options.items = el;
          el.off(eName).on(eName, eHandler);
        }
      }
    },
    _openClick: function (e, el, options) {
      var midClick =
        options.midClick !== undefined
          ? options.midClick
          : $.magnificPopup.defaults.midClick;

      if (
        !midClick &&
        (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)
      ) {
        return;
      }

      var disableOn =
        options.disableOn !== undefined
          ? options.disableOn
          : $.magnificPopup.defaults.disableOn;

      if (disableOn) {
        if ($.isFunction(disableOn)) {
          if (!disableOn.call(mfp)) {
            return true;
          }
        } else {
          // else it's number
          if (_window.width() < disableOn) {
            return true;
          }
        }
      }

      if (e.type) {
        e.preventDefault();

        // This will prevent popup from closing if element is inside and popup is already opened
        if (mfp.isOpen) {
          e.stopPropagation();
        }
      }

      options.el = $(e.mfpEl);
      if (options.delegate) {
        options.items = el.find(options.delegate);
      }
      mfp.open(options);
    },

    /**
     * Updates text on preloader
     */
    updateStatus: function (status, text) {
      if (mfp.preloader) {
        if (_prevStatus !== status) {
          mfp.container.removeClass("mfp-s-" + _prevStatus);
        }

        if (!text && status === "loading") {
          text = mfp.st.tLoading;
        }

        var data = {
          status: status,
          text: text,
        };
        // allows to modify status
        _mfpTrigger("UpdateStatus", data);

        status = data.status;
        text = data.text;

        mfp.preloader.html(text);

        mfp.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        });

        mfp.container.addClass("mfp-s-" + status);
        _prevStatus = status;
      }
    },

    /*
		 "Private" helpers that aren't private at all
		 */
    // Check to close popup or not
    // "target" is an element that was clicked
    _checkIfClose: function (target) {
      if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
        return;
      }

      var closeOnContent = mfp.st.closeOnContentClick;
      var closeOnBg = mfp.st.closeOnBgClick;

      if (closeOnContent && closeOnBg) {
        return true;
      } else {
        // We close the popup if click is on close button or on preloader. Or if there is no content.
        if (
          !mfp.content ||
          $(target).hasClass("mfp-close") ||
          (mfp.preloader && target === mfp.preloader[0])
        ) {
          return true;
        }

        // if click is outside the content
        if (target !== mfp.content[0] && !$.contains(mfp.content[0], target)) {
          if (closeOnBg) {
            // last check, if the clicked element is in DOM, (in case it's removed onclick)
            if ($.contains(document, target)) {
              return true;
            }
          }
        } else if (closeOnContent) {
          return true;
        }
      }
      return false;
    },
    _addClassToMFP: function (cName) {
      mfp.bgOverlay.addClass(cName);
      mfp.wrap.addClass(cName);
    },
    _removeClassFromMFP: function (cName) {
      this.bgOverlay.removeClass(cName);
      mfp.wrap.removeClass(cName);
    },
    _hasScrollBar: function (winHeight) {
      return (
        (mfp.isIE7 ? _document.height() : document.body.scrollHeight) >
        (winHeight || _window.height())
      );
    },
    _setFocus: function () {
      (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    },
    _onFocusIn: function (e) {
      if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
        mfp._setFocus();
        return false;
      }
    },
    _parseMarkup: function (template, values, item) {
      var arr;
      if (item.data) {
        values = $.extend(item.data, values);
      }
      _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

      $.each(values, function (key, value) {
        if (value === undefined || value === false) {
          return true;
        }
        arr = key.split("_");
        if (arr.length > 1) {
          var el = template.find(EVENT_NS + "-" + arr[0]);

          if (el.length > 0) {
            var attr = arr[1];
            if (attr === "replaceWith") {
              if (el[0] !== value[0]) {
                el.replaceWith(value);
              }
            } else if (attr === "img") {
              if (el.is("img")) {
                el.attr("src", value);
              } else {
                el.replaceWith(
                  $("<img>").attr("src", value).attr("class", el.attr("class"))
                );
              }
            } else {
              el.attr(arr[1], value);
            }
          }
        } else {
          template.find(EVENT_NS + "-" + key).html(value);
        }
      });
    },

    _getScrollbarSize: function () {
      // thx David
      if (mfp.scrollbarSize === undefined) {
        var scrollDiv = document.createElement("div");
        scrollDiv.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;";
        document.body.appendChild(scrollDiv);
        mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
      }
      return mfp.scrollbarSize;
    },
  }; /* MagnificPopup core prototype end */

  /**
   * Public static functions
   */
  $.magnificPopup = {
    instance: null,
    proto: MagnificPopup.prototype,
    modules: [],

    open: function (options, index) {
      _checkInstance();

      if (!options) {
        options = {};
      } else {
        options = $.extend(true, {}, options);
      }

      options.isObj = true;
      options.index = index || 0;
      return this.instance.open(options);
    },

    close: function () {
      return $.magnificPopup.instance && $.magnificPopup.instance.close();
    },

    registerModule: function (name, module) {
      if (module.options) {
        $.magnificPopup.defaults[name] = module.options;
      }
      $.extend(this.proto, module.proto);
      this.modules.push(name);
    },

    defaults: {
      // Info about options is in docs:
      // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

      disableOn: 0,

      key: null,

      midClick: false,

      mainClass: "",

      preloader: true,

      focus: "", // CSS selector of input to focus after popup is opened

      closeOnContentClick: false,

      closeOnBgClick: true,

      closeBtnInside: true,

      showCloseBtn: true,

      enableEscapeKey: true,

      modal: false,

      alignTop: false,

      removalDelay: 0,

      prependTo: null,

      fixedContentPos: "auto",

      fixedBgPos: "auto",

      overflowY: "auto",

      closeMarkup:
        '<button title="%title%" type="button" class="mfp-close">&#215;</button>',

      tClose: "Close (Esc)",

      tLoading: "Loading...",

      autoFocusLast: true,
    },
  };

  $.fn.magnificPopup = function (options) {
    _checkInstance();

    var jqEl = $(this);

    // We call some API method of first param is a string
    if (typeof options === "string") {
      if (options === "open") {
        var items,
          itemOpts = _isJQ ? jqEl.data("magnificPopup") : jqEl[0].magnificPopup,
          index = parseInt(arguments[1], 10) || 0;

        if (itemOpts.items) {
          items = itemOpts.items[index];
        } else {
          items = jqEl;
          if (itemOpts.delegate) {
            items = items.find(itemOpts.delegate);
          }
          items = items.eq(index);
        }
        mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
      } else {
        if (mfp.isOpen)
          mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
      }
    } else {
      // clone options obj
      options = $.extend(true, {}, options);

      /*
       * As Zepto doesn't support .data() method for objects
       * and it works only in normal browsers
       * we assign "options" object directly to the DOM element. FTW!
       */
      if (_isJQ) {
        jqEl.data("magnificPopup", options);
      } else {
        jqEl[0].magnificPopup = options;
      }

      mfp.addGroup(jqEl, options);
    }
    return jqEl;
  };

  /*>>core*/

  /*>>inline*/

  var INLINE_NS = "inline",
    _hiddenClass,
    _inlinePlaceholder,
    _lastInlineElement,
    _putInlineElementsBack = function () {
      if (_lastInlineElement) {
        _inlinePlaceholder
          .after(_lastInlineElement.addClass(_hiddenClass))
          .detach();
        _lastInlineElement = null;
      }
    };

  $.magnificPopup.registerModule(INLINE_NS, {
    options: {
      hiddenClass: "hide", // will be appended with `mfp-` prefix
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        mfp.types.push(INLINE_NS);

        _mfpOn(CLOSE_EVENT + "." + INLINE_NS, function () {
          _putInlineElementsBack();
        });
      },

      getInline: function (item, template) {
        _putInlineElementsBack();

        if (item.src) {
          var inlineSt = mfp.st.inline,
            el = $(item.src);

          if (el.length) {
            // If target element has parent - we replace it with placeholder and put it back after popup is closed
            var parent = el[0].parentNode;
            if (parent && parent.tagName) {
              if (!_inlinePlaceholder) {
                _hiddenClass = inlineSt.hiddenClass;
                _inlinePlaceholder = _getEl(_hiddenClass);
                _hiddenClass = "mfp-" + _hiddenClass;
              }
              // replace target inline element with placeholder
              _lastInlineElement = el
                .after(_inlinePlaceholder)
                .detach()
                .removeClass(_hiddenClass);
            }

            mfp.updateStatus("ready");
          } else {
            mfp.updateStatus("error", inlineSt.tNotFound);
            el = $("<div>");
          }

          item.inlineElement = el;
          return el;
        }

        mfp.updateStatus("ready");
        mfp._parseMarkup(template, {}, item);
        return template;
      },
    },
  });

  /*>>inline*/

  /*>>ajax*/
  var AJAX_NS = "ajax",
    _ajaxCur,
    _removeAjaxCursor = function () {
      if (_ajaxCur) {
        $(document.body).removeClass(_ajaxCur);
      }
    },
    _destroyAjaxRequest = function () {
      _removeAjaxCursor();
      if (mfp.req) {
        mfp.req.abort();
      }
    };

  $.magnificPopup.registerModule(AJAX_NS, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },

    proto: {
      initAjax: function () {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;

        _mfpOn(CLOSE_EVENT + "." + AJAX_NS, _destroyAjaxRequest);
        _mfpOn("BeforeChange." + AJAX_NS, _destroyAjaxRequest);
      },
      getAjax: function (item) {
        if (_ajaxCur) {
          $(document.body).addClass(_ajaxCur);
        }

        mfp.updateStatus("loading");

        var opts = $.extend(
          {
            url: item.src,
            success: function (data, textStatus, jqXHR) {
              var temp = {
                data: data,
                xhr: jqXHR,
              };

              _mfpTrigger("ParseAjax", temp);

              mfp.appendContent($(temp.data), AJAX_NS);

              item.finished = true;

              _removeAjaxCursor();

              mfp._setFocus();

              setTimeout(function () {
                mfp.wrap.addClass(READY_CLASS);
              }, 16);

              mfp.updateStatus("ready");

              _mfpTrigger("AjaxContentAdded");
            },
            error: function () {
              _removeAjaxCursor();
              item.finished = item.loadError = true;
              mfp.updateStatus(
                "error",
                mfp.st.ajax.tError.replace("%url%", item.src)
              );
            },
          },
          mfp.st.ajax.settings
        );

        mfp.req = $.ajax(opts);

        return "";
      },
    },
  });

  /*>>ajax*/

  /*>>image*/
  var _imgInterval,
    _getTitle = function (item) {
      if (item.data && item.data.title !== undefined) return item.data.title;

      var src = mfp.st.image.titleSrc;

      if (src) {
        if ($.isFunction(src)) {
          return src.call(mfp, item);
        } else if (item.el) {
          return item.el.attr(src) || "";
        }
      }
      return "";
    };

  $.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure">' +
        '<div class="mfp-close"></div>' +
        "<figure>" +
        '<div class="mfp-img"></div>' +
        "<figcaption>" +
        '<div class="mfp-bottom-bar">' +
        '<div class="mfp-title"></div>' +
        '<div class="mfp-counter"></div>' +
        "</div>" +
        "</figcaption>" +
        "</figure>" +
        "</div>",
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: true,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },

    proto: {
      initImage: function () {
        var imgSt = mfp.st.image,
          ns = ".image";

        mfp.types.push("image");

        _mfpOn(OPEN_EVENT + ns, function () {
          if (mfp.currItem.type === "image" && imgSt.cursor) {
            $(document.body).addClass(imgSt.cursor);
          }
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (imgSt.cursor) {
            $(document.body).removeClass(imgSt.cursor);
          }
          _window.off("resize" + EVENT_NS);
        });

        _mfpOn("Resize" + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
          _mfpOn("AfterChange", mfp.resizeImage);
        }
      },
      resizeImage: function () {
        var item = mfp.currItem;
        if (!item || !item.img) return;

        if (mfp.st.image.verticalFit) {
          var decr = 0;
          // fix box-sizing in ie7/8
          if (mfp.isLowIE) {
            decr =
              parseInt(item.img.css("padding-top"), 10) +
              parseInt(item.img.css("padding-bottom"), 10);
          }
          item.img.css("max-height", mfp.wH - decr);
        }
      },
      _onImageHasSize: function (item) {
        if (item.img) {
          item.hasSize = true;

          if (_imgInterval) {
            clearInterval(_imgInterval);
          }

          item.isCheckingImgSize = false;

          _mfpTrigger("ImageHasSize", item);

          if (item.imgHidden) {
            if (mfp.content) mfp.content.removeClass("mfp-loading");

            item.imgHidden = false;
          }
        }
      },

      /**
       * Function that loops until the image has size to display elements that rely on it asap
       */
      findImageSize: function (item) {
        var counter = 0,
          img = item.img[0],
          mfpSetInterval = function (delay) {
            if (_imgInterval) {
              clearInterval(_imgInterval);
            }
            // decelerating interval that checks for size of an image
            _imgInterval = setInterval(function () {
              if (img.naturalWidth > 0) {
                mfp._onImageHasSize(item);
                return;
              }

              if (counter > 200) {
                clearInterval(_imgInterval);
              }

              counter++;
              if (counter === 3) {
                mfpSetInterval(10);
              } else if (counter === 40) {
                mfpSetInterval(50);
              } else if (counter === 100) {
                mfpSetInterval(500);
              }
            }, delay);
          };

        mfpSetInterval(1);
      },

      getImage: function (item, template) {
        var guard = 0,
          // image load complete handler
          onLoadComplete = function () {
            if (item) {
              if (item.img[0].complete) {
                item.img.off(".mfploader");

                if (item === mfp.currItem) {
                  mfp._onImageHasSize(item);

                  mfp.updateStatus("ready");
                }

                item.hasSize = true;
                item.loaded = true;

                _mfpTrigger("ImageLoadComplete");
              } else {
                // if image complete check fails 200 times (20 sec), we assume that there was an error.
                guard++;
                if (guard < 200) {
                  setTimeout(onLoadComplete, 100);
                } else {
                  onLoadError();
                }
              }
            }
          },
          // image error handler
          onLoadError = function () {
            if (item) {
              item.img.off(".mfploader");
              if (item === mfp.currItem) {
                mfp._onImageHasSize(item);
                mfp.updateStatus(
                  "error",
                  imgSt.tError.replace("%url%", item.src)
                );
              }

              item.hasSize = true;
              item.loaded = true;
              item.loadError = true;
            }
          },
          imgSt = mfp.st.image;

        var el = template.find(".mfp-img");
        if (el.length) {
          var img = document.createElement("img");
          img.className = "mfp-img";
          if (item.el && item.el.find("img").length) {
            img.alt = item.el.find("img").attr("alt");
          }
          item.img = $(img)
            .on("load.mfploader", onLoadComplete)
            .on("error.mfploader", onLoadError);
          img.src = item.src;

          // without clone() "error" event is not firing when IMG is replaced by new IMG
          // TODO: find a way to avoid such cloning
          if (el.is("img")) {
            item.img = item.img.clone();
          }

          img = item.img[0];
          if (img.naturalWidth > 0) {
            item.hasSize = true;
          } else if (!img.width) {
            item.hasSize = false;
          }
        }

        mfp._parseMarkup(
          template,
          {
            title: _getTitle(item),
            img_replaceWith: item.img,
          },
          item
        );

        mfp.resizeImage();

        if (item.hasSize) {
          if (_imgInterval) clearInterval(_imgInterval);

          if (item.loadError) {
            template.addClass("mfp-loading");
            mfp.updateStatus("error", imgSt.tError.replace("%url%", item.src));
          } else {
            template.removeClass("mfp-loading");
            mfp.updateStatus("ready");
          }
          return template;
        }

        mfp.updateStatus("loading");
        item.loading = true;

        if (!item.hasSize) {
          item.imgHidden = true;
          template.addClass("mfp-loading");
          mfp.findImageSize(item);
        }

        return template;
      },
    },
  });

  /*>>image*/

  /*>>zoom*/
  var hasMozTransform,
    getHasMozTransform = function () {
      if (hasMozTransform === undefined) {
        hasMozTransform =
          document.createElement("p").style.MozTransform !== undefined;
      }
      return hasMozTransform;
    };

  $.magnificPopup.registerModule("zoom", {
    options: {
      enabled: false,
      easing: "ease-in-out",
      duration: 300,
      opener: function (element) {
        return element.is("img") ? element : element.find("img");
      },
    },

    proto: {
      initZoom: function () {
        var zoomSt = mfp.st.zoom,
          ns = ".zoom",
          image;

        if (!zoomSt.enabled || !mfp.supportsTransition) {
          return;
        }

        var duration = zoomSt.duration,
          getElToAnimate = function (image) {
            var newImg = image
                .clone()
                .removeAttr("style")
                .removeAttr("class")
                .addClass("mfp-animated-image"),
              transition =
                "all " + zoomSt.duration / 1000 + "s " + zoomSt.easing,
              cssObj = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden",
              },
              t = "transition";

            cssObj["-webkit-" + t] =
              cssObj["-moz-" + t] =
              cssObj["-o-" + t] =
              cssObj[t] =
                transition;

            newImg.css(cssObj);
            return newImg;
          },
          showMainContent = function () {
            mfp.content.css("visibility", "visible");
          },
          openTimeout,
          animatedImg;

        _mfpOn("BuildControls" + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);
            mfp.content.css("visibility", "hidden");

            // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

            image = mfp._getItemToZoom();

            if (!image) {
              showMainContent();
              return;
            }

            animatedImg = getElToAnimate(image);

            animatedImg.css(mfp._getOffset());

            mfp.wrap.append(animatedImg);

            openTimeout = setTimeout(function () {
              animatedImg.css(mfp._getOffset(true));
              openTimeout = setTimeout(function () {
                showMainContent();

                setTimeout(function () {
                  animatedImg.remove();
                  image = animatedImg = null;
                  _mfpTrigger("ZoomAnimationEnded");
                }, 16); // avoid blink when switching images
              }, duration); // this timeout equals animation duration
            }, 16); // by adding this timeout we avoid short glitch at the beginning of animation

            // Lots of timeouts...
          }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            clearTimeout(openTimeout);

            mfp.st.removalDelay = duration;

            if (!image) {
              image = mfp._getItemToZoom();
              if (!image) {
                return;
              }
              animatedImg = getElToAnimate(image);
            }

            animatedImg.css(mfp._getOffset(true));
            mfp.wrap.append(animatedImg);
            mfp.content.css("visibility", "hidden");

            setTimeout(function () {
              animatedImg.css(mfp._getOffset());
            }, 16);
          }
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          if (mfp._allowZoom()) {
            showMainContent();
            if (animatedImg) {
              animatedImg.remove();
            }
            image = null;
          }
        });
      },

      _allowZoom: function () {
        return mfp.currItem.type === "image";
      },

      _getItemToZoom: function () {
        if (mfp.currItem.hasSize) {
          return mfp.currItem.img;
        } else {
          return false;
        }
      },

      // Get element postion relative to viewport
      _getOffset: function (isLarge) {
        var el;
        if (isLarge) {
          el = mfp.currItem.img;
        } else {
          el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }

        var offset = el.offset();
        var paddingTop = parseInt(el.css("padding-top"), 10);
        var paddingBottom = parseInt(el.css("padding-bottom"), 10);
        offset.top -= $(window).scrollTop() - paddingTop;

        /*

				 Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

				 */
        var obj = {
          width: el.width(),
          // fix Zepto height+padding issue
          height:
            (_isJQ ? el.innerHeight() : el[0].offsetHeight) -
            paddingBottom -
            paddingTop,
        };

        // I hate to do this, but there is no another option
        if (getHasMozTransform()) {
          obj["-moz-transform"] = obj["transform"] =
            "translate(" + offset.left + "px," + offset.top + "px)";
        } else {
          obj.left = offset.left;
          obj.top = offset.top;
        }
        return obj;
      },
    },
  });

  /*>>zoom*/

  /*>>iframe*/

  var IFRAME_NS = "iframe",
    _emptyPage = "//about:blank",
    _fixIframeBugs = function (isShowing) {
      if (mfp.currTemplate[IFRAME_NS]) {
        var el = mfp.currTemplate[IFRAME_NS].find("iframe");
        if (el.length) {
          // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
          if (!isShowing) {
            el[0].src = _emptyPage;
          }

          // IE8 black screen bug fix
          if (mfp.isIE8) {
            el.css("display", isShowing ? "block" : "none");
          }
        }
      }
    };

  $.magnificPopup.registerModule(IFRAME_NS, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
        "</div>",

      srcAction: "iframe_src",

      // we don't care and support only one default type of URL by default
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed",
        },
      },
    },

    proto: {
      initIframe: function () {
        mfp.types.push(IFRAME_NS);

        _mfpOn("BeforeChange", function (e, prevType, newType) {
          if (prevType !== newType) {
            if (prevType === IFRAME_NS) {
              _fixIframeBugs(); // iframe if removed
            } else if (newType === IFRAME_NS) {
              _fixIframeBugs(true); // iframe is showing
            }
          } // else {
          // iframe source is switched, don't do anything
          //}
        });

        _mfpOn(CLOSE_EVENT + "." + IFRAME_NS, function () {
          _fixIframeBugs();
        });
      },

      getIframe: function (item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;

        $.each(iframeSt.patterns, function () {
          if (embedSrc.indexOf(this.index) > -1) {
            if (this.id) {
              if (typeof this.id === "string") {
                embedSrc = embedSrc.substr(
                  embedSrc.lastIndexOf(this.id) + this.id.length,
                  embedSrc.length
                );
              } else {
                embedSrc = this.id.call(this, embedSrc);
              }
            }
            embedSrc = this.src.replace("%id%", embedSrc);
            return false; // break;
          }
        });

        var dataObj = {};
        if (iframeSt.srcAction) {
          dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);

        mfp.updateStatus("ready");

        return template;
      },
    },
  });

  /*>>iframe*/

  /*>>gallery*/
  /**
   * Get looped index depending on number of slides
   */
  var _getLoopedId = function (index) {
      var numSlides = mfp.items.length;
      if (index > numSlides - 1) {
        return index - numSlides;
      } else if (index < 0) {
        return numSlides + index;
      }
      return index;
    },
    _replaceCurrTotal = function (text, curr, total) {
      return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };

  $.magnificPopup.registerModule("gallery", {
    options: {
      enabled: false,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: true,
      arrows: true,

      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },

    proto: {
      initGallery: function () {
        var gSt = mfp.st.gallery,
          ns = ".mfp-gallery";

        mfp.direction = true; // true - next, false - prev

        if (!gSt || !gSt.enabled) return false;

        _wrapClasses += " mfp-gallery";

        _mfpOn(OPEN_EVENT + ns, function () {
          if (gSt.navigateByImgClick) {
            mfp.wrap.on("click" + ns, ".mfp-img", function () {
              if (mfp.items.length > 1) {
                mfp.next();
                return false;
              }
            });
          }

          _document.on("keydown" + ns, function (e) {
            if (e.keyCode === 37) {
              mfp.prev();
            } else if (e.keyCode === 39) {
              mfp.next();
            }
          });
        });

        _mfpOn("UpdateStatus" + ns, function (e, data) {
          if (data.text) {
            data.text = _replaceCurrTotal(
              data.text,
              mfp.currItem.index,
              mfp.items.length
            );
          }
        });

        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
          var l = mfp.items.length;
          values.counter =
            l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : "";
        });

        _mfpOn("BuildControls" + ns, function () {
          if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
            var markup = gSt.arrowMarkup,
              arrowLeft = (mfp.arrowLeft = $(
                markup
                  .replace(/%title%/gi, gSt.tPrev)
                  .replace(/%dir%/gi, "left")
              ).addClass(PREVENT_CLOSE_CLASS)),
              arrowRight = (mfp.arrowRight = $(
                markup
                  .replace(/%title%/gi, gSt.tNext)
                  .replace(/%dir%/gi, "right")
              ).addClass(PREVENT_CLOSE_CLASS));

            arrowLeft.click(function () {
              mfp.prev();
            });
            arrowRight.click(function () {
              mfp.next();
            });

            mfp.container.append(arrowLeft.add(arrowRight));
          }
        });

        _mfpOn(CHANGE_EVENT + ns, function () {
          if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

          mfp._preloadTimeout = setTimeout(function () {
            mfp.preloadNearbyImages();
            mfp._preloadTimeout = null;
          }, 16);
        });

        _mfpOn(CLOSE_EVENT + ns, function () {
          _document.off(ns);
          mfp.wrap.off("click" + ns);
          mfp.arrowRight = mfp.arrowLeft = null;
        });
      },
      next: function () {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
      },
      prev: function () {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
      },
      goTo: function (newIndex) {
        mfp.direction = newIndex >= mfp.index;
        mfp.index = newIndex;
        mfp.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var p = mfp.st.gallery.preload,
          preloadBefore = Math.min(p[0], mfp.items.length),
          preloadAfter = Math.min(p[1], mfp.items.length),
          i;

        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
          mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
          mfp._preloadItem(mfp.index - i);
        }
      },
      _preloadItem: function (index) {
        index = _getLoopedId(index);

        if (mfp.items[index].preloaded) {
          return;
        }

        var item = mfp.items[index];
        if (!item.parsed) {
          item = mfp.parseEl(index);
        }

        _mfpTrigger("LazyLoad", item);

        if (item.type === "image") {
          item.img = $('<img class="mfp-img" />')
            .on("load.mfploader", function () {
              item.hasSize = true;
            })
            .on("error.mfploader", function () {
              item.hasSize = true;
              item.loadError = true;
              _mfpTrigger("LazyLoadError", item);
            })
            .attr("src", item.src);
        }

        item.preloaded = true;
      },
    },
  });

  /*>>gallery*/

  /*>>retina*/

  var RETINA_NS = "retina";

  $.magnificPopup.registerModule(RETINA_NS, {
    options: {
      replaceSrc: function (item) {
        return item.src.replace(/\.\w+$/, function (m) {
          return "@2x" + m;
        });
      },
      ratio: 1, // Function or number.  Set to 1 to disable.
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var st = mfp.st.retina,
            ratio = st.ratio;

          ratio = !isNaN(ratio) ? ratio : ratio();

          if (ratio > 1) {
            _mfpOn("ImageHasSize" + "." + RETINA_NS, function (e, item) {
              item.img.css({
                "max-width": item.img[0].naturalWidth / ratio,
                width: "100%",
              });
            });
            _mfpOn("ElementParse" + "." + RETINA_NS, function (e, item) {
              item.src = st.replaceSrc(item, ratio);
            });
          }
        }
      },
    },
  });

  /*>>retina*/
  _checkInstance();
});
//! moment.js
//! version : 2.13.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : (a.moment = b());
})(this, function () {
  "use strict";
  function a() {
    return fd.apply(null, arguments);
  }
  function b(a) {
    fd = a;
  }
  function c(a) {
    return (
      a instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(a)
    );
  }
  function d(a) {
    return (
      a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    );
  }
  function e(a, b) {
    var c,
      d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d;
  }
  function f(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function g(a, b) {
    for (var c in b) f(b, c) && (a[c] = b[c]);
    return (
      f(b, "toString") && (a.toString = b.toString),
      f(b, "valueOf") && (a.valueOf = b.valueOf),
      a
    );
  }
  function h(a, b, c, d) {
    return Ja(a, b, c, d, !0).utc();
  }
  function i() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
    };
  }
  function j(a) {
    return null == a._pf && (a._pf = i()), a._pf;
  }
  function k(a) {
    if (null == a._isValid) {
      var b = j(a),
        c = gd.call(b.parsedDateParts, function (a) {
          return null != a;
        });
      (a._isValid =
        !isNaN(a._d.getTime()) &&
        b.overflow < 0 &&
        !b.empty &&
        !b.invalidMonth &&
        !b.invalidWeekday &&
        !b.nullInput &&
        !b.invalidFormat &&
        !b.userInvalidated &&
        (!b.meridiem || (b.meridiem && c))),
        a._strict &&
          (a._isValid =
            a._isValid &&
            0 === b.charsLeftOver &&
            0 === b.unusedTokens.length &&
            void 0 === b.bigHour);
    }
    return a._isValid;
  }
  function l(a) {
    var b = h(NaN);
    return null != a ? g(j(b), a) : (j(b).userInvalidated = !0), b;
  }
  function m(a) {
    return void 0 === a;
  }
  function n(a, b) {
    var c, d, e;
    if (
      (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
      m(b._i) || (a._i = b._i),
      m(b._f) || (a._f = b._f),
      m(b._l) || (a._l = b._l),
      m(b._strict) || (a._strict = b._strict),
      m(b._tzm) || (a._tzm = b._tzm),
      m(b._isUTC) || (a._isUTC = b._isUTC),
      m(b._offset) || (a._offset = b._offset),
      m(b._pf) || (a._pf = j(b)),
      m(b._locale) || (a._locale = b._locale),
      hd.length > 0)
    )
      for (c in hd) (d = hd[c]), (e = b[d]), m(e) || (a[d] = e);
    return a;
  }
  function o(b) {
    n(this, b),
      (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
      id === !1 && ((id = !0), a.updateOffset(this), (id = !1));
  }
  function p(a) {
    return a instanceof o || (null != a && null != a._isAMomentObject);
  }
  function q(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a);
  }
  function r(a) {
    var b = +a,
      c = 0;
    return 0 !== b && isFinite(b) && (c = q(b)), c;
  }
  function s(a, b, c) {
    var d,
      e = Math.min(a.length, b.length),
      f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; e > d; d++)
      ((c && a[d] !== b[d]) || (!c && r(a[d]) !== r(b[d]))) && g++;
    return g + f;
  }
  function t(b) {
    a.suppressDeprecationWarnings === !1 &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + b);
  }
  function u(b, c) {
    var d = !0;
    return g(function () {
      return (
        null != a.deprecationHandler && a.deprecationHandler(null, b),
        d &&
          (t(
            b +
              "\nArguments: " +
              Array.prototype.slice.call(arguments).join(", ") +
              "\n" +
              new Error().stack
          ),
          (d = !1)),
        c.apply(this, arguments)
      );
    }, c);
  }
  function v(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c),
      jd[b] || (t(c), (jd[b] = !0));
  }
  function w(a) {
    return (
      a instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(a)
    );
  }
  function x(a) {
    return "[object Object]" === Object.prototype.toString.call(a);
  }
  function y(a) {
    var b, c;
    for (c in a) (b = a[c]), w(b) ? (this[c] = b) : (this["_" + c] = b);
    (this._config = a),
      (this._ordinalParseLenient = new RegExp(
        this._ordinalParse.source + "|" + /\d{1,2}/.source
      ));
  }
  function z(a, b) {
    var c,
      d = g({}, a);
    for (c in b)
      f(b, c) &&
        (x(a[c]) && x(b[c])
          ? ((d[c] = {}), g(d[c], a[c]), g(d[c], b[c]))
          : null != b[c]
          ? (d[c] = b[c])
          : delete d[c]);
    return d;
  }
  function A(a) {
    null != a && this.set(a);
  }
  function B(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }
  function C(a) {
    for (var b, c, d, e, f = 0; f < a.length; ) {
      for (
        e = B(a[f]).split("-"),
          b = e.length,
          c = B(a[f + 1]),
          c = c ? c.split("-") : null;
        b > 0;

      ) {
        if ((d = D(e.slice(0, b).join("-")))) return d;
        if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
        b--;
      }
      f++;
    }
    return null;
  }
  function D(a) {
    var b = null;
    if (!nd[a] && "undefined" != typeof module && module && module.exports)
      try {
        (b = ld._abbr), require("./locale/" + a), E(b);
      } catch (c) {}
    return nd[a];
  }
  function E(a, b) {
    var c;
    return a && ((c = m(b) ? H(a) : F(a, b)), c && (ld = c)), ld._abbr;
  }
  function F(a, b) {
    return null !== b
      ? ((b.abbr = a),
        null != nd[a]
          ? (v(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"
            ),
            (b = z(nd[a]._config, b)))
          : null != b.parentLocale &&
            (null != nd[b.parentLocale]
              ? (b = z(nd[b.parentLocale]._config, b))
              : v(
                  "parentLocaleUndefined",
                  "specified parentLocale is not defined yet"
                )),
        (nd[a] = new A(b)),
        E(a),
        nd[a])
      : (delete nd[a], null);
  }
  function G(a, b) {
    if (null != b) {
      var c;
      null != nd[a] && (b = z(nd[a]._config, b)),
        (c = new A(b)),
        (c.parentLocale = nd[a]),
        (nd[a] = c),
        E(a);
    } else null != nd[a] && (null != nd[a].parentLocale ? (nd[a] = nd[a].parentLocale) : null != nd[a] && delete nd[a]);
    return nd[a];
  }
  function H(a) {
    var b;
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return ld;
    if (!c(a)) {
      if ((b = D(a))) return b;
      a = [a];
    }
    return C(a);
  }
  function I() {
    return kd(nd);
  }
  function J(a, b) {
    var c = a.toLowerCase();
    od[c] = od[c + "s"] = od[b] = a;
  }
  function K(a) {
    return "string" == typeof a ? od[a] || od[a.toLowerCase()] : void 0;
  }
  function L(a) {
    var b,
      c,
      d = {};
    for (c in a) f(a, c) && ((b = K(c)), b && (d[b] = a[c]));
    return d;
  }
  function M(b, c) {
    return function (d) {
      return null != d
        ? (O(this, b, d), a.updateOffset(this, c), this)
        : N(this, b);
    };
  }
  function N(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }
  function O(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }
  function P(a, b) {
    var c;
    if ("object" == typeof a) for (c in a) this.set(c, a[c]);
    else if (((a = K(a)), w(this[a]))) return this[a](b);
    return this;
  }
  function Q(a, b, c) {
    var d = "" + Math.abs(a),
      e = b - d.length,
      f = a >= 0;
    return (
      (f ? (c ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, e)).toString().substr(1) +
      d
    );
  }
  function R(a, b, c, d) {
    var e = d;
    "string" == typeof d &&
      (e = function () {
        return this[d]();
      }),
      a && (sd[a] = e),
      b &&
        (sd[b[0]] = function () {
          return Q(e.apply(this, arguments), b[1], b[2]);
        }),
      c &&
        (sd[c] = function () {
          return this.localeData().ordinal(e.apply(this, arguments), a);
        });
  }
  function S(a) {
    return a.match(/\[[\s\S]/)
      ? a.replace(/^\[|\]$/g, "")
      : a.replace(/\\/g, "");
  }
  function T(a) {
    var b,
      c,
      d = a.match(pd);
    for (b = 0, c = d.length; c > b; b++)
      sd[d[b]] ? (d[b] = sd[d[b]]) : (d[b] = S(d[b]));
    return function (b) {
      var e,
        f = "";
      for (e = 0; c > e; e++)
        f += d[e] instanceof Function ? d[e].call(b, a) : d[e];
      return f;
    };
  }
  function U(a, b) {
    return a.isValid()
      ? ((b = V(b, a.localeData())), (rd[b] = rd[b] || T(b)), rd[b](a))
      : a.localeData().invalidDate();
  }
  function V(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }
    var d = 5;
    for (qd.lastIndex = 0; d >= 0 && qd.test(a); )
      (a = a.replace(qd, c)), (qd.lastIndex = 0), (d -= 1);
    return a;
  }
  function W(a, b, c) {
    Kd[a] = w(b)
      ? b
      : function (a, d) {
          return a && c ? c : b;
        };
  }
  function X(a, b) {
    return f(Kd, a) ? Kd[a](b._strict, b._locale) : new RegExp(Y(a));
  }
  function Y(a) {
    return Z(
      a
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (a, b, c, d, e) {
            return b || c || d || e;
          }
        )
    );
  }
  function Z(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function $(a, b) {
    var c,
      d = b;
    for (
      "string" == typeof a && (a = [a]),
        "number" == typeof b &&
          (d = function (a, c) {
            c[b] = r(a);
          }),
        c = 0;
      c < a.length;
      c++
    )
      Ld[a[c]] = d;
  }
  function _(a, b) {
    $(a, function (a, c, d, e) {
      (d._w = d._w || {}), b(a, d._w, d, e);
    });
  }
  function aa(a, b, c) {
    null != b && f(Ld, a) && Ld[a](b, c._a, c, a);
  }
  function ba(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }
  function ca(a, b) {
    return c(this._months)
      ? this._months[a.month()]
      : this._months[Vd.test(b) ? "format" : "standalone"][a.month()];
  }
  function da(a, b) {
    return c(this._monthsShort)
      ? this._monthsShort[a.month()]
      : this._monthsShort[Vd.test(b) ? "format" : "standalone"][a.month()];
  }
  function ea(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          d = 0;
        12 > d;
        ++d
      )
        (f = h([2e3, d])),
          (this._shortMonthsParse[d] = this.monthsShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase());
    return c
      ? "MMM" === b
        ? ((e = md.call(this._shortMonthsParse, g)), -1 !== e ? e : null)
        : ((e = md.call(this._longMonthsParse, g)), -1 !== e ? e : null)
      : "MMM" === b
      ? ((e = md.call(this._shortMonthsParse, g)),
        -1 !== e
          ? e
          : ((e = md.call(this._longMonthsParse, g)), -1 !== e ? e : null))
      : ((e = md.call(this._longMonthsParse, g)),
        -1 !== e
          ? e
          : ((e = md.call(this._shortMonthsParse, g)), -1 !== e ? e : null));
  }
  function fa(a, b, c) {
    var d, e, f;
    if (this._monthsParseExact) return ea.call(this, a, b, c);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        d = 0;
      12 > d;
      d++
    ) {
      if (
        ((e = h([2e3, d])),
        c &&
          !this._longMonthsParse[d] &&
          ((this._longMonthsParse[d] = new RegExp(
            "^" + this.months(e, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[d] = new RegExp(
            "^" + this.monthsShort(e, "").replace(".", "") + "$",
            "i"
          ))),
        c ||
          this._monthsParse[d] ||
          ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")),
          (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "MMMM" === b && this._longMonthsParse[d].test(a))
      )
        return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d;
    }
  }
  function ga(a, b) {
    var c;
    if (!a.isValid()) return a;
    if ("string" == typeof b)
      if (/^\d+$/.test(b)) b = r(b);
      else if (((b = a.localeData().monthsParse(b)), "number" != typeof b))
        return a;
    return (
      (c = Math.min(a.date(), ba(a.year(), b))),
      a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
      a
    );
  }
  function ha(b) {
    return null != b
      ? (ga(this, b), a.updateOffset(this, !0), this)
      : N(this, "Month");
  }
  function ia() {
    return ba(this.year(), this.month());
  }
  function ja(a) {
    return this._monthsParseExact
      ? (f(this, "_monthsRegex") || la.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : this._monthsShortStrictRegex && a
      ? this._monthsShortStrictRegex
      : this._monthsShortRegex;
  }
  function ka(a) {
    return this._monthsParseExact
      ? (f(this, "_monthsRegex") || la.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex)
      : this._monthsStrictRegex && a
      ? this._monthsStrictRegex
      : this._monthsRegex;
  }
  function la() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d = [],
      e = [],
      f = [];
    for (b = 0; 12 > b; b++)
      (c = h([2e3, b])),
        d.push(this.monthsShort(c, "")),
        e.push(this.months(c, "")),
        f.push(this.months(c, "")),
        f.push(this.monthsShort(c, ""));
    for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++)
      (d[b] = Z(d[b])), (e[b] = Z(e[b])), (f[b] = Z(f[b]));
    (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ));
  }
  function ma(a) {
    var b,
      c = a._a;
    return (
      c &&
        -2 === j(a).overflow &&
        ((b =
          c[Nd] < 0 || c[Nd] > 11
            ? Nd
            : c[Od] < 1 || c[Od] > ba(c[Md], c[Nd])
            ? Od
            : c[Pd] < 0 ||
              c[Pd] > 24 ||
              (24 === c[Pd] && (0 !== c[Qd] || 0 !== c[Rd] || 0 !== c[Sd]))
            ? Pd
            : c[Qd] < 0 || c[Qd] > 59
            ? Qd
            : c[Rd] < 0 || c[Rd] > 59
            ? Rd
            : c[Sd] < 0 || c[Sd] > 999
            ? Sd
            : -1),
        j(a)._overflowDayOfYear && (Md > b || b > Od) && (b = Od),
        j(a)._overflowWeeks && -1 === b && (b = Td),
        j(a)._overflowWeekday && -1 === b && (b = Ud),
        (j(a).overflow = b)),
      a
    );
  }
  function na(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = a._i,
      i = $d.exec(h) || _d.exec(h);
    if (i) {
      for (j(a).iso = !0, b = 0, c = be.length; c > b; b++)
        if (be[b][1].exec(i[1])) {
          (e = be[b][0]), (d = be[b][2] !== !1);
          break;
        }
      if (null == e) return void (a._isValid = !1);
      if (i[3]) {
        for (b = 0, c = ce.length; c > b; b++)
          if (ce[b][1].exec(i[3])) {
            f = (i[2] || " ") + ce[b][0];
            break;
          }
        if (null == f) return void (a._isValid = !1);
      }
      if (!d && null != f) return void (a._isValid = !1);
      if (i[4]) {
        if (!ae.exec(i[4])) return void (a._isValid = !1);
        g = "Z";
      }
      (a._f = e + (f || "") + (g || "")), Ca(a);
    } else a._isValid = !1;
  }
  function oa(b) {
    var c = de.exec(b._i);
    return null !== c
      ? void (b._d = new Date(+c[1]))
      : (na(b),
        void (
          b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))
        ));
  }
  function pa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return (
      100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    );
  }
  function qa(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return (
      100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
      b
    );
  }
  function ra(a) {
    return sa(a) ? 366 : 365;
  }
  function sa(a) {
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
  }
  function ta() {
    return sa(this.year());
  }
  function ua(a, b, c) {
    var d = 7 + b - c,
      e = (7 + qa(a, 0, d).getUTCDay() - b) % 7;
    return -e + d - 1;
  }
  function va(a, b, c, d, e) {
    var f,
      g,
      h = (7 + c - d) % 7,
      i = ua(a, d, e),
      j = 1 + 7 * (b - 1) + h + i;
    return (
      0 >= j
        ? ((f = a - 1), (g = ra(f) + j))
        : j > ra(a)
        ? ((f = a + 1), (g = j - ra(a)))
        : ((f = a), (g = j)),
      { year: f, dayOfYear: g }
    );
  }
  function wa(a, b, c) {
    var d,
      e,
      f = ua(a.year(), b, c),
      g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
    return (
      1 > g
        ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
        : g > xa(a.year(), b, c)
        ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
        : ((e = a.year()), (d = g)),
      { week: d, year: e }
    );
  }
  function xa(a, b, c) {
    var d = ua(a, b, c),
      e = ua(a + 1, b, c);
    return (ra(a) - d + e) / 7;
  }
  function ya(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }
  function za(b) {
    var c = new Date(a.now());
    return b._useUTC
      ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
      : [c.getFullYear(), c.getMonth(), c.getDate()];
  }
  function Aa(a) {
    var b,
      c,
      d,
      e,
      f = [];
    if (!a._d) {
      for (
        d = za(a),
          a._w && null == a._a[Od] && null == a._a[Nd] && Ba(a),
          a._dayOfYear &&
            ((e = ya(a._a[Md], d[Md])),
            a._dayOfYear > ra(e) && (j(a)._overflowDayOfYear = !0),
            (c = qa(e, 0, a._dayOfYear)),
            (a._a[Nd] = c.getUTCMonth()),
            (a._a[Od] = c.getUTCDate())),
          b = 0;
        3 > b && null == a._a[b];
        ++b
      )
        a._a[b] = f[b] = d[b];
      for (; 7 > b; b++)
        a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
      24 === a._a[Pd] &&
        0 === a._a[Qd] &&
        0 === a._a[Rd] &&
        0 === a._a[Sd] &&
        ((a._nextDay = !0), (a._a[Pd] = 0)),
        (a._d = (a._useUTC ? qa : pa).apply(null, f)),
        null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        a._nextDay && (a._a[Pd] = 24);
    }
  }
  function Ba(a) {
    var b, c, d, e, f, g, h, i;
    (b = a._w),
      null != b.GG || null != b.W || null != b.E
        ? ((f = 1),
          (g = 4),
          (c = ya(b.GG, a._a[Md], wa(Ka(), 1, 4).year)),
          (d = ya(b.W, 1)),
          (e = ya(b.E, 1)),
          (1 > e || e > 7) && (i = !0))
        : ((f = a._locale._week.dow),
          (g = a._locale._week.doy),
          (c = ya(b.gg, a._a[Md], wa(Ka(), f, g).year)),
          (d = ya(b.w, 1)),
          null != b.d
            ? ((e = b.d), (0 > e || e > 6) && (i = !0))
            : null != b.e
            ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
            : (e = f)),
      1 > d || d > xa(c, f, g)
        ? (j(a)._overflowWeeks = !0)
        : null != i
        ? (j(a)._overflowWeekday = !0)
        : ((h = va(c, d, e, f, g)),
          (a._a[Md] = h.year),
          (a._dayOfYear = h.dayOfYear));
  }
  function Ca(b) {
    if (b._f === a.ISO_8601) return void na(b);
    (b._a = []), (j(b).empty = !0);
    var c,
      d,
      e,
      f,
      g,
      h = "" + b._i,
      i = h.length,
      k = 0;
    for (e = V(b._f, b._locale).match(pd) || [], c = 0; c < e.length; c++)
      (f = e[c]),
        (d = (h.match(X(f, b)) || [])[0]),
        d &&
          ((g = h.substr(0, h.indexOf(d))),
          g.length > 0 && j(b).unusedInput.push(g),
          (h = h.slice(h.indexOf(d) + d.length)),
          (k += d.length)),
        sd[f]
          ? (d ? (j(b).empty = !1) : j(b).unusedTokens.push(f), aa(f, d, b))
          : b._strict && !d && j(b).unusedTokens.push(f);
    (j(b).charsLeftOver = i - k),
      h.length > 0 && j(b).unusedInput.push(h),
      j(b).bigHour === !0 &&
        b._a[Pd] <= 12 &&
        b._a[Pd] > 0 &&
        (j(b).bigHour = void 0),
      (j(b).parsedDateParts = b._a.slice(0)),
      (j(b).meridiem = b._meridiem),
      (b._a[Pd] = Da(b._locale, b._a[Pd], b._meridiem)),
      Aa(b),
      ma(b);
  }
  function Da(a, b, c) {
    var d;
    return null == c
      ? b
      : null != a.meridiemHour
      ? a.meridiemHour(b, c)
      : null != a.isPM
      ? ((d = a.isPM(c)), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b)
      : b;
  }
  function Ea(a) {
    var b, c, d, e, f;
    if (0 === a._f.length)
      return (j(a).invalidFormat = !0), void (a._d = new Date(NaN));
    for (e = 0; e < a._f.length; e++)
      (f = 0),
        (b = n({}, a)),
        null != a._useUTC && (b._useUTC = a._useUTC),
        (b._f = a._f[e]),
        Ca(b),
        k(b) &&
          ((f += j(b).charsLeftOver),
          (f += 10 * j(b).unusedTokens.length),
          (j(b).score = f),
          (null == d || d > f) && ((d = f), (c = b)));
    g(a, c || b);
  }
  function Fa(a) {
    if (!a._d) {
      var b = L(a._i);
      (a._a = e(
        [
          b.year,
          b.month,
          b.day || b.date,
          b.hour,
          b.minute,
          b.second,
          b.millisecond,
        ],
        function (a) {
          return a && parseInt(a, 10);
        }
      )),
        Aa(a);
    }
  }
  function Ga(a) {
    var b = new o(ma(Ha(a)));
    return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
  }
  function Ha(a) {
    var b = a._i,
      e = a._f;
    return (
      (a._locale = a._locale || H(a._l)),
      null === b || (void 0 === e && "" === b)
        ? l({ nullInput: !0 })
        : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
          p(b)
            ? new o(ma(b))
            : (c(e) ? Ea(a) : e ? Ca(a) : d(b) ? (a._d = b) : Ia(a),
              k(a) || (a._d = null),
              a))
    );
  }
  function Ia(b) {
    var f = b._i;
    void 0 === f
      ? (b._d = new Date(a.now()))
      : d(f)
      ? (b._d = new Date(f.valueOf()))
      : "string" == typeof f
      ? oa(b)
      : c(f)
      ? ((b._a = e(f.slice(0), function (a) {
          return parseInt(a, 10);
        })),
        Aa(b))
      : "object" == typeof f
      ? Fa(b)
      : "number" == typeof f
      ? (b._d = new Date(f))
      : a.createFromInputFallback(b);
  }
  function Ja(a, b, c, d, e) {
    var f = {};
    return (
      "boolean" == typeof c && ((d = c), (c = void 0)),
      (f._isAMomentObject = !0),
      (f._useUTC = f._isUTC = e),
      (f._l = c),
      (f._i = a),
      (f._f = b),
      (f._strict = d),
      Ga(f)
    );
  }
  function Ka(a, b, c, d) {
    return Ja(a, b, c, d, !1);
  }
  function La(a, b) {
    var d, e;
    if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return Ka();
    for (d = b[0], e = 1; e < b.length; ++e)
      (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
    return d;
  }
  function Ma() {
    var a = [].slice.call(arguments, 0);
    return La("isBefore", a);
  }
  function Na() {
    var a = [].slice.call(arguments, 0);
    return La("isAfter", a);
  }
  function Oa(a) {
    var b = L(a),
      c = b.year || 0,
      d = b.quarter || 0,
      e = b.month || 0,
      f = b.week || 0,
      g = b.day || 0,
      h = b.hour || 0,
      i = b.minute || 0,
      j = b.second || 0,
      k = b.millisecond || 0;
    (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
      (this._days = +g + 7 * f),
      (this._months = +e + 3 * d + 12 * c),
      (this._data = {}),
      (this._locale = H()),
      this._bubble();
  }
  function Pa(a) {
    return a instanceof Oa;
  }
  function Qa(a, b) {
    R(a, 0, 0, function () {
      var a = this.utcOffset(),
        c = "+";
      return (
        0 > a && ((a = -a), (c = "-")),
        c + Q(~~(a / 60), 2) + b + Q(~~a % 60, 2)
      );
    });
  }
  function Ra(a, b) {
    var c = (b || "").match(a) || [],
      d = c[c.length - 1] || [],
      e = (d + "").match(ie) || ["-", 0, 0],
      f = +(60 * e[1]) + r(e[2]);
    return "+" === e[0] ? f : -f;
  }
  function Sa(b, c) {
    var e, f;
    return c._isUTC
      ? ((e = c.clone()),
        (f = (p(b) || d(b) ? b.valueOf() : Ka(b).valueOf()) - e.valueOf()),
        e._d.setTime(e._d.valueOf() + f),
        a.updateOffset(e, !1),
        e)
      : Ka(b).local();
  }
  function Ta(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }
  function Ua(b, c) {
    var d,
      e = this._offset || 0;
    return this.isValid()
      ? null != b
        ? ("string" == typeof b
            ? (b = Ra(Hd, b))
            : Math.abs(b) < 16 && (b = 60 * b),
          !this._isUTC && c && (d = Ta(this)),
          (this._offset = b),
          (this._isUTC = !0),
          null != d && this.add(d, "m"),
          e !== b &&
            (!c || this._changeInProgress
              ? jb(this, db(b - e, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                a.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this)
        : this._isUTC
        ? e
        : Ta(this)
      : null != b
      ? this
      : NaN;
  }
  function Va(a, b) {
    return null != a
      ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
      : -this.utcOffset();
  }
  function Wa(a) {
    return this.utcOffset(0, a);
  }
  function Xa(a) {
    return (
      this._isUTC &&
        (this.utcOffset(0, a),
        (this._isUTC = !1),
        a && this.subtract(Ta(this), "m")),
      this
    );
  }
  function Ya() {
    return (
      this._tzm
        ? this.utcOffset(this._tzm)
        : "string" == typeof this._i && this.utcOffset(Ra(Gd, this._i)),
      this
    );
  }
  function Za(a) {
    return this.isValid()
      ? ((a = a ? Ka(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
      : !1;
  }
  function $a() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function _a() {
    if (!m(this._isDSTShifted)) return this._isDSTShifted;
    var a = {};
    if ((n(a, this), (a = Ha(a)), a._a)) {
      var b = a._isUTC ? h(a._a) : Ka(a._a);
      this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;
    return this._isDSTShifted;
  }
  function ab() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function bb() {
    return this.isValid() ? this._isUTC : !1;
  }
  function cb() {
    return this.isValid() ? this._isUTC && 0 === this._offset : !1;
  }
  function db(a, b) {
    var c,
      d,
      e,
      g = a,
      h = null;
    return (
      Pa(a)
        ? (g = { ms: a._milliseconds, d: a._days, M: a._months })
        : "number" == typeof a
        ? ((g = {}), b ? (g[b] = a) : (g.milliseconds = a))
        : (h = je.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (g = {
            y: 0,
            d: r(h[Od]) * c,
            h: r(h[Pd]) * c,
            m: r(h[Qd]) * c,
            s: r(h[Rd]) * c,
            ms: r(h[Sd]) * c,
          }))
        : (h = ke.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (g = {
            y: eb(h[2], c),
            M: eb(h[3], c),
            w: eb(h[4], c),
            d: eb(h[5], c),
            h: eb(h[6], c),
            m: eb(h[7], c),
            s: eb(h[8], c),
          }))
        : null == g
        ? (g = {})
        : "object" == typeof g &&
          ("from" in g || "to" in g) &&
          ((e = gb(Ka(g.from), Ka(g.to))),
          (g = {}),
          (g.ms = e.milliseconds),
          (g.M = e.months)),
      (d = new Oa(g)),
      Pa(a) && f(a, "_locale") && (d._locale = a._locale),
      d
    );
  }
  function eb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b;
  }
  function fb(a, b) {
    var c = { milliseconds: 0, months: 0 };
    return (
      (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
      a.clone().add(c.months, "M").isAfter(b) && --c.months,
      (c.milliseconds = +b - +a.clone().add(c.months, "M")),
      c
    );
  }
  function gb(a, b) {
    var c;
    return a.isValid() && b.isValid()
      ? ((b = Sa(b, a)),
        a.isBefore(b)
          ? (c = fb(a, b))
          : ((c = fb(b, a)),
            (c.milliseconds = -c.milliseconds),
            (c.months = -c.months)),
        c)
      : { milliseconds: 0, months: 0 };
  }
  function hb(a) {
    return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a);
  }
  function ib(a, b) {
    return function (c, d) {
      var e, f;
      return (
        null === d ||
          isNaN(+d) ||
          (v(
            b,
            "moment()." +
              b +
              "(period, number) is deprecated. Please use moment()." +
              b +
              "(number, period)."
          ),
          (f = c),
          (c = d),
          (d = f)),
        (c = "string" == typeof c ? +c : c),
        (e = db(c, d)),
        jb(this, e, a),
        this
      );
    };
  }
  function jb(b, c, d, e) {
    var f = c._milliseconds,
      g = hb(c._days),
      h = hb(c._months);
    b.isValid() &&
      ((e = null == e ? !0 : e),
      f && b._d.setTime(b._d.valueOf() + f * d),
      g && O(b, "Date", N(b, "Date") + g * d),
      h && ga(b, N(b, "Month") + h * d),
      e && a.updateOffset(b, g || h));
  }
  function kb(a, b) {
    var c = a || Ka(),
      d = Sa(c, this).startOf("day"),
      e = this.diff(d, "days", !0),
      f =
        -6 > e
          ? "sameElse"
          : -1 > e
          ? "lastWeek"
          : 0 > e
          ? "lastDay"
          : 1 > e
          ? "sameDay"
          : 2 > e
          ? "nextDay"
          : 7 > e
          ? "nextWeek"
          : "sameElse",
      g = b && (w(b[f]) ? b[f]() : b[f]);
    return this.format(g || this.localeData().calendar(f, this, Ka(c)));
  }
  function lb() {
    return new o(this);
  }
  function mb(a, b) {
    var c = p(a) ? a : Ka(a);
    return this.isValid() && c.isValid()
      ? ((b = K(m(b) ? "millisecond" : b)),
        "millisecond" === b
          ? this.valueOf() > c.valueOf()
          : c.valueOf() < this.clone().startOf(b).valueOf())
      : !1;
  }
  function nb(a, b) {
    var c = p(a) ? a : Ka(a);
    return this.isValid() && c.isValid()
      ? ((b = K(m(b) ? "millisecond" : b)),
        "millisecond" === b
          ? this.valueOf() < c.valueOf()
          : this.clone().endOf(b).valueOf() < c.valueOf())
      : !1;
  }
  function ob(a, b, c, d) {
    return (
      (d = d || "()"),
      ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
        (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    );
  }
  function pb(a, b) {
    var c,
      d = p(a) ? a : Ka(a);
    return this.isValid() && d.isValid()
      ? ((b = K(b || "millisecond")),
        "millisecond" === b
          ? this.valueOf() === d.valueOf()
          : ((c = d.valueOf()),
            this.clone().startOf(b).valueOf() <= c &&
              c <= this.clone().endOf(b).valueOf()))
      : !1;
  }
  function qb(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }
  function rb(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }
  function sb(a, b, c) {
    var d, e, f, g;
    return this.isValid()
      ? ((d = Sa(a, this)),
        d.isValid()
          ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
            (b = K(b)),
            "year" === b || "month" === b || "quarter" === b
              ? ((g = tb(this, d)),
                "quarter" === b ? (g /= 3) : "year" === b && (g /= 12))
              : ((f = this - d),
                (g =
                  "second" === b
                    ? f / 1e3
                    : "minute" === b
                    ? f / 6e4
                    : "hour" === b
                    ? f / 36e5
                    : "day" === b
                    ? (f - e) / 864e5
                    : "week" === b
                    ? (f - e) / 6048e5
                    : f)),
            c ? g : q(g))
          : NaN)
      : NaN;
  }
  function tb(a, b) {
    var c,
      d,
      e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      f = a.clone().add(e, "months");
    return (
      0 > b - f
        ? ((c = a.clone().add(e - 1, "months")), (d = (b - f) / (f - c)))
        : ((c = a.clone().add(e + 1, "months")), (d = (b - f) / (c - f))),
      -(e + d) || 0
    );
  }
  function ub() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function vb() {
    var a = this.clone().utc();
    return 0 < a.year() && a.year() <= 9999
      ? w(Date.prototype.toISOString)
        ? this.toDate().toISOString()
        : U(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      : U(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }
  function wb(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
    var c = U(this, b);
    return this.localeData().postformat(c);
  }
  function xb(a, b) {
    return this.isValid() && ((p(a) && a.isValid()) || Ka(a).isValid())
      ? db({ to: this, from: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function yb(a) {
    return this.from(Ka(), a);
  }
  function zb(a, b) {
    return this.isValid() && ((p(a) && a.isValid()) || Ka(a).isValid())
      ? db({ from: this, to: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function Ab(a) {
    return this.to(Ka(), a);
  }
  function Bb(a) {
    var b;
    return void 0 === a
      ? this._locale._abbr
      : ((b = H(a)), null != b && (this._locale = b), this);
  }
  function Cb() {
    return this._locale;
  }
  function Db(a) {
    switch ((a = K(a))) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0);
    }
    return (
      "week" === a && this.weekday(0),
      "isoWeek" === a && this.isoWeekday(1),
      "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
      this
    );
  }
  function Eb(a) {
    return (
      (a = K(a)),
      void 0 === a || "millisecond" === a
        ? this
        : ("date" === a && (a = "day"),
          this.startOf(a)
            .add(1, "isoWeek" === a ? "week" : a)
            .subtract(1, "ms"))
    );
  }
  function Fb() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }
  function Gb() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function Hb() {
    return this._offset ? new Date(this.valueOf()) : this._d;
  }
  function Ib() {
    var a = this;
    return [
      a.year(),
      a.month(),
      a.date(),
      a.hour(),
      a.minute(),
      a.second(),
      a.millisecond(),
    ];
  }
  function Jb() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds(),
    };
  }
  function Kb() {
    return this.isValid() ? this.toISOString() : null;
  }
  function Lb() {
    return k(this);
  }
  function Mb() {
    return g({}, j(this));
  }
  function Nb() {
    return j(this).overflow;
  }
  function Ob() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  function Pb(a, b) {
    R(0, [a, a.length], 0, b);
  }
  function Qb(a) {
    return Ub.call(
      this,
      a,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function Rb(a) {
    return Ub.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Sb() {
    return xa(this.year(), 1, 4);
  }
  function Tb() {
    var a = this.localeData()._week;
    return xa(this.year(), a.dow, a.doy);
  }
  function Ub(a, b, c, d, e) {
    var f;
    return null == a
      ? wa(this, d, e).year
      : ((f = xa(a, d, e)), b > f && (b = f), Vb.call(this, a, b, c, d, e));
  }
  function Vb(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
      g = qa(f.year, 0, f.dayOfYear);
    return (
      this.year(g.getUTCFullYear()),
      this.month(g.getUTCMonth()),
      this.date(g.getUTCDate()),
      this
    );
  }
  function Wb(a) {
    return null == a
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (a - 1) + (this.month() % 3));
  }
  function Xb(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }
  function Yb() {
    return this._week.dow;
  }
  function Zb() {
    return this._week.doy;
  }
  function $b(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function _b(a) {
    var b = wa(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function ac(a, b) {
    return "string" != typeof a
      ? a
      : isNaN(a)
      ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
      : parseInt(a, 10);
  }
  function bc(a, b) {
    return c(this._weekdays)
      ? this._weekdays[a.day()]
      : this._weekdays[
          this._weekdays.isFormat.test(b) ? "format" : "standalone"
        ][a.day()];
  }
  function cc(a) {
    return this._weekdaysShort[a.day()];
  }
  function dc(a) {
    return this._weekdaysMin[a.day()];
  }
  function ec(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          d = 0;
        7 > d;
        ++d
      )
        (f = h([2e3, 1]).day(d)),
          (this._minWeekdaysParse[d] = this.weekdaysMin(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[d] = this.weekdaysShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase());
    return c
      ? "dddd" === b
        ? ((e = md.call(this._weekdaysParse, g)), -1 !== e ? e : null)
        : "ddd" === b
        ? ((e = md.call(this._shortWeekdaysParse, g)), -1 !== e ? e : null)
        : ((e = md.call(this._minWeekdaysParse, g)), -1 !== e ? e : null)
      : "dddd" === b
      ? ((e = md.call(this._weekdaysParse, g)),
        -1 !== e
          ? e
          : ((e = md.call(this._shortWeekdaysParse, g)),
            -1 !== e
              ? e
              : ((e = md.call(this._minWeekdaysParse, g)),
                -1 !== e ? e : null)))
      : "ddd" === b
      ? ((e = md.call(this._shortWeekdaysParse, g)),
        -1 !== e
          ? e
          : ((e = md.call(this._weekdaysParse, g)),
            -1 !== e
              ? e
              : ((e = md.call(this._minWeekdaysParse, g)),
                -1 !== e ? e : null)))
      : ((e = md.call(this._minWeekdaysParse, g)),
        -1 !== e
          ? e
          : ((e = md.call(this._weekdaysParse, g)),
            -1 !== e
              ? e
              : ((e = md.call(this._shortWeekdaysParse, g)),
                -1 !== e ? e : null)));
  }
  function fc(a, b, c) {
    var d, e, f;
    if (this._weekdaysParseExact) return ec.call(this, a, b, c);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        d = 0;
      7 > d;
      d++
    ) {
      if (
        ((e = h([2e3, 1]).day(d)),
        c &&
          !this._fullWeekdaysParse[d] &&
          ((this._fullWeekdaysParse[d] = new RegExp(
            "^" + this.weekdays(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysShort(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
            "i"
          ))),
        this._weekdaysParse[d] ||
          ((f =
            "^" +
            this.weekdays(e, "") +
            "|^" +
            this.weekdaysShort(e, "") +
            "|^" +
            this.weekdaysMin(e, "")),
          (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
      )
        return d;
      if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
      if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
      if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }
  function gc(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a
      ? ((a = ac(a, this.localeData())), this.add(a - b, "d"))
      : b;
  }
  function hc(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d");
  }
  function ic(a) {
    return this.isValid()
      ? null == a
        ? this.day() || 7
        : this.day(this.day() % 7 ? a : a - 7)
      : null != a
      ? this
      : NaN;
  }
  function jc(a) {
    return this._weekdaysParseExact
      ? (f(this, "_weekdaysRegex") || mc.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : this._weekdaysStrictRegex && a
      ? this._weekdaysStrictRegex
      : this._weekdaysRegex;
  }
  function kc(a) {
    return this._weekdaysParseExact
      ? (f(this, "_weekdaysRegex") || mc.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : this._weekdaysShortStrictRegex && a
      ? this._weekdaysShortStrictRegex
      : this._weekdaysShortRegex;
  }
  function lc(a) {
    return this._weekdaysParseExact
      ? (f(this, "_weekdaysRegex") || mc.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : this._weekdaysMinStrictRegex && a
      ? this._weekdaysMinStrictRegex
      : this._weekdaysMinRegex;
  }
  function mc() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d,
      e,
      f,
      g = [],
      i = [],
      j = [],
      k = [];
    for (b = 0; 7 > b; b++)
      (c = h([2e3, 1]).day(b)),
        (d = this.weekdaysMin(c, "")),
        (e = this.weekdaysShort(c, "")),
        (f = this.weekdays(c, "")),
        g.push(d),
        i.push(e),
        j.push(f),
        k.push(d),
        k.push(e),
        k.push(f);
    for (g.sort(a), i.sort(a), j.sort(a), k.sort(a), b = 0; 7 > b; b++)
      (i[b] = Z(i[b])), (j[b] = Z(j[b])), (k[b] = Z(k[b]));
    (this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + j.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + i.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + g.join("|") + ")",
        "i"
      ));
  }
  function nc(a) {
    var b =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return null == a ? b : this.add(a - b, "d");
  }
  function oc() {
    return this.hours() % 12 || 12;
  }
  function pc() {
    return this.hours() || 24;
  }
  function qc(a, b) {
    R(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }
  function rc(a, b) {
    return b._meridiemParse;
  }
  function sc(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }
  function tc(a, b, c) {
    return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
  }
  function uc(a, b) {
    b[Sd] = r(1e3 * ("0." + a));
  }
  function vc() {
    return this._isUTC ? "UTC" : "";
  }
  function wc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  function xc(a) {
    return Ka(1e3 * a);
  }
  function yc() {
    return Ka.apply(null, arguments).parseZone();
  }
  function zc(a, b, c) {
    var d = this._calendar[a];
    return w(d) ? d.call(b, c) : d;
  }
  function Ac(a) {
    var b = this._longDateFormat[a],
      c = this._longDateFormat[a.toUpperCase()];
    return b || !c
      ? b
      : ((this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
          return a.slice(1);
        })),
        this._longDateFormat[a]);
  }
  function Bc() {
    return this._invalidDate;
  }
  function Cc(a) {
    return this._ordinal.replace("%d", a);
  }
  function Dc(a) {
    return a;
  }
  function Ec(a, b, c, d) {
    var e = this._relativeTime[c];
    return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }
  function Fc(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return w(c) ? c(b) : c.replace(/%s/i, b);
  }
  function Gc(a, b, c, d) {
    var e = H(),
      f = h().set(d, b);
    return e[c](f, a);
  }
  function Hc(a, b, c) {
    if (
      ("number" == typeof a && ((b = a), (a = void 0)),
      (a = a || ""),
      null != b)
    )
      return Gc(a, b, c, "month");
    var d,
      e = [];
    for (d = 0; 12 > d; d++) e[d] = Gc(a, d, c, "month");
    return e;
  }
  function Ic(a, b, c, d) {
    "boolean" == typeof a
      ? ("number" == typeof b && ((c = b), (b = void 0)), (b = b || ""))
      : ((b = a),
        (c = b),
        (a = !1),
        "number" == typeof b && ((c = b), (b = void 0)),
        (b = b || ""));
    var e = H(),
      f = a ? e._week.dow : 0;
    if (null != c) return Gc(b, (c + f) % 7, d, "day");
    var g,
      h = [];
    for (g = 0; 7 > g; g++) h[g] = Gc(b, (g + f) % 7, d, "day");
    return h;
  }
  function Jc(a, b) {
    return Hc(a, b, "months");
  }
  function Kc(a, b) {
    return Hc(a, b, "monthsShort");
  }
  function Lc(a, b, c) {
    return Ic(a, b, c, "weekdays");
  }
  function Mc(a, b, c) {
    return Ic(a, b, c, "weekdaysShort");
  }
  function Nc(a, b, c) {
    return Ic(a, b, c, "weekdaysMin");
  }
  function Oc() {
    var a = this._data;
    return (
      (this._milliseconds = Le(this._milliseconds)),
      (this._days = Le(this._days)),
      (this._months = Le(this._months)),
      (a.milliseconds = Le(a.milliseconds)),
      (a.seconds = Le(a.seconds)),
      (a.minutes = Le(a.minutes)),
      (a.hours = Le(a.hours)),
      (a.months = Le(a.months)),
      (a.years = Le(a.years)),
      this
    );
  }
  function Pc(a, b, c, d) {
    var e = db(b, c);
    return (
      (a._milliseconds += d * e._milliseconds),
      (a._days += d * e._days),
      (a._months += d * e._months),
      a._bubble()
    );
  }
  function Qc(a, b) {
    return Pc(this, a, b, 1);
  }
  function Rc(a, b) {
    return Pc(this, a, b, -1);
  }
  function Sc(a) {
    return 0 > a ? Math.floor(a) : Math.ceil(a);
  }
  function Tc() {
    var a,
      b,
      c,
      d,
      e,
      f = this._milliseconds,
      g = this._days,
      h = this._months,
      i = this._data;
    return (
      (f >= 0 && g >= 0 && h >= 0) ||
        (0 >= f && 0 >= g && 0 >= h) ||
        ((f += 864e5 * Sc(Vc(h) + g)), (g = 0), (h = 0)),
      (i.milliseconds = f % 1e3),
      (a = q(f / 1e3)),
      (i.seconds = a % 60),
      (b = q(a / 60)),
      (i.minutes = b % 60),
      (c = q(b / 60)),
      (i.hours = c % 24),
      (g += q(c / 24)),
      (e = q(Uc(g))),
      (h += e),
      (g -= Sc(Vc(e))),
      (d = q(h / 12)),
      (h %= 12),
      (i.days = g),
      (i.months = h),
      (i.years = d),
      this
    );
  }
  function Uc(a) {
    return (4800 * a) / 146097;
  }
  function Vc(a) {
    return (146097 * a) / 4800;
  }
  function Wc(a) {
    var b,
      c,
      d = this._milliseconds;
    if (((a = K(a)), "month" === a || "year" === a))
      return (
        (b = this._days + d / 864e5),
        (c = this._months + Uc(b)),
        "month" === a ? c : c / 12
      );
    switch (((b = this._days + Math.round(Vc(this._months))), a)) {
      case "week":
        return b / 7 + d / 6048e5;
      case "day":
        return b + d / 864e5;
      case "hour":
        return 24 * b + d / 36e5;
      case "minute":
        return 1440 * b + d / 6e4;
      case "second":
        return 86400 * b + d / 1e3;
      case "millisecond":
        return Math.floor(864e5 * b) + d;
      default:
        throw new Error("Unknown unit " + a);
    }
  }
  function Xc() {
    return (
      this._milliseconds +
      864e5 * this._days +
      (this._months % 12) * 2592e6 +
      31536e6 * r(this._months / 12)
    );
  }
  function Yc(a) {
    return function () {
      return this.as(a);
    };
  }
  function Zc(a) {
    return (a = K(a)), this[a + "s"]();
  }
  function $c(a) {
    return function () {
      return this._data[a];
    };
  }
  function _c() {
    return q(this.days() / 7);
  }
  function ad(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }
  function bd(a, b, c) {
    var d = db(a).abs(),
      e = _e(d.as("s")),
      f = _e(d.as("m")),
      g = _e(d.as("h")),
      h = _e(d.as("d")),
      i = _e(d.as("M")),
      j = _e(d.as("y")),
      k = (e < af.s && ["s", e]) ||
        (1 >= f && ["m"]) ||
        (f < af.m && ["mm", f]) ||
        (1 >= g && ["h"]) ||
        (g < af.h && ["hh", g]) ||
        (1 >= h && ["d"]) ||
        (h < af.d && ["dd", h]) ||
        (1 >= i && ["M"]) ||
        (i < af.M && ["MM", i]) ||
        (1 >= j && ["y"]) || ["yy", j];
    return (k[2] = b), (k[3] = +a > 0), (k[4] = c), ad.apply(null, k);
  }
  function cd(a, b) {
    return void 0 === af[a] ? !1 : void 0 === b ? af[a] : ((af[a] = b), !0);
  }
  function dd(a) {
    var b = this.localeData(),
      c = bd(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }
  function ed() {
    var a,
      b,
      c,
      d = bf(this._milliseconds) / 1e3,
      e = bf(this._days),
      f = bf(this._months);
    (a = q(d / 60)),
      (b = q(a / 60)),
      (d %= 60),
      (a %= 60),
      (c = q(f / 12)),
      (f %= 12);
    var g = c,
      h = f,
      i = e,
      j = b,
      k = a,
      l = d,
      m = this.asSeconds();
    return m
      ? (0 > m ? "-" : "") +
          "P" +
          (g ? g + "Y" : "") +
          (h ? h + "M" : "") +
          (i ? i + "D" : "") +
          (j || k || l ? "T" : "") +
          (j ? j + "H" : "") +
          (k ? k + "M" : "") +
          (l ? l + "S" : "")
      : "P0D";
  }
  var fd, gd;
  gd = Array.prototype.some
    ? Array.prototype.some
    : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; c > d; d++)
          if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
      };
  var hd = (a.momentProperties = []),
    id = !1,
    jd = {};
  (a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null);
  var kd;
  kd = Object.keys
    ? Object.keys
    : function (a) {
        var b,
          c = [];
        for (b in a) f(a, b) && c.push(b);
        return c;
      };
  var ld,
    md,
    nd = {},
    od = {},
    pd =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    qd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    rd = {},
    sd = {},
    td = /\d/,
    ud = /\d\d/,
    vd = /\d{3}/,
    wd = /\d{4}/,
    xd = /[+-]?\d{6}/,
    yd = /\d\d?/,
    zd = /\d\d\d\d?/,
    Ad = /\d\d\d\d\d\d?/,
    Bd = /\d{1,3}/,
    Cd = /\d{1,4}/,
    Dd = /[+-]?\d{1,6}/,
    Ed = /\d+/,
    Fd = /[+-]?\d+/,
    Gd = /Z|[+-]\d\d:?\d\d/gi,
    Hd = /Z|[+-]\d\d(?::?\d\d)?/gi,
    Id = /[+-]?\d+(\.\d{1,3})?/,
    Jd =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    Kd = {},
    Ld = {},
    Md = 0,
    Nd = 1,
    Od = 2,
    Pd = 3,
    Qd = 4,
    Rd = 5,
    Sd = 6,
    Td = 7,
    Ud = 8;
  (md = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
      }),
    R("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    R("MMM", 0, 0, function (a) {
      return this.localeData().monthsShort(this, a);
    }),
    R("MMMM", 0, 0, function (a) {
      return this.localeData().months(this, a);
    }),
    J("month", "M"),
    W("M", yd),
    W("MM", yd, ud),
    W("MMM", function (a, b) {
      return b.monthsShortRegex(a);
    }),
    W("MMMM", function (a, b) {
      return b.monthsRegex(a);
    }),
    $(["M", "MM"], function (a, b) {
      b[Nd] = r(a) - 1;
    }),
    $(["MMM", "MMMM"], function (a, b, c, d) {
      var e = c._locale.monthsParse(a, d, c._strict);
      null != e ? (b[Nd] = e) : (j(c).invalidMonth = a);
    });
  var Vd = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
    Wd =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    Xd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Yd = Jd,
    Zd = Jd,
    $d =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    _d =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    ae = /Z|[+-]\d\d(?::?\d\d)?/,
    be = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
    ],
    ce = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    de = /^\/?Date\((\-?\d+)/i;
  (a.createFromInputFallback = u(
    "moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }
  )),
    R("Y", 0, 0, function () {
      var a = this.year();
      return 9999 >= a ? "" + a : "+" + a;
    }),
    R(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    R(0, ["YYYY", 4], 0, "year"),
    R(0, ["YYYYY", 5], 0, "year"),
    R(0, ["YYYYYY", 6, !0], 0, "year"),
    J("year", "y"),
    W("Y", Fd),
    W("YY", yd, ud),
    W("YYYY", Cd, wd),
    W("YYYYY", Dd, xd),
    W("YYYYYY", Dd, xd),
    $(["YYYYY", "YYYYYY"], Md),
    $("YYYY", function (b, c) {
      c[Md] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
    }),
    $("YY", function (b, c) {
      c[Md] = a.parseTwoDigitYear(b);
    }),
    $("Y", function (a, b) {
      b[Md] = parseInt(a, 10);
    }),
    (a.parseTwoDigitYear = function (a) {
      return r(a) + (r(a) > 68 ? 1900 : 2e3);
    });
  var ee = M("FullYear", !0);
  a.ISO_8601 = function () {};
  var fe = u(
      "moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
      function () {
        var a = Ka.apply(null, arguments);
        return this.isValid() && a.isValid() ? (this > a ? this : a) : l();
      }
    ),
    ge = u(
      "moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
      function () {
        var a = Ka.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a > this ? this : a) : l();
      }
    ),
    he = function () {
      return Date.now ? Date.now() : +new Date();
    };
  Qa("Z", ":"),
    Qa("ZZ", ""),
    W("Z", Hd),
    W("ZZ", Hd),
    $(["Z", "ZZ"], function (a, b, c) {
      (c._useUTC = !0), (c._tzm = Ra(Hd, a));
    });
  var ie = /([\+\-]|\d\d)/gi;
  a.updateOffset = function () {};
  var je = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
    ke =
      /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  db.fn = Oa.prototype;
  var le = ib(1, "add"),
    me = ib(-1, "subtract");
  (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var ne = u(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (a) {
      return void 0 === a ? this.localeData() : this.locale(a);
    }
  );
  R(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    R(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Pb("gggg", "weekYear"),
    Pb("ggggg", "weekYear"),
    Pb("GGGG", "isoWeekYear"),
    Pb("GGGGG", "isoWeekYear"),
    J("weekYear", "gg"),
    J("isoWeekYear", "GG"),
    W("G", Fd),
    W("g", Fd),
    W("GG", yd, ud),
    W("gg", yd, ud),
    W("GGGG", Cd, wd),
    W("gggg", Cd, wd),
    W("GGGGG", Dd, xd),
    W("ggggg", Dd, xd),
    _(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
      b[d.substr(0, 2)] = r(a);
    }),
    _(["gg", "GG"], function (b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b);
    }),
    R("Q", 0, "Qo", "quarter"),
    J("quarter", "Q"),
    W("Q", td),
    $("Q", function (a, b) {
      b[Nd] = 3 * (r(a) - 1);
    }),
    R("w", ["ww", 2], "wo", "week"),
    R("W", ["WW", 2], "Wo", "isoWeek"),
    J("week", "w"),
    J("isoWeek", "W"),
    W("w", yd),
    W("ww", yd, ud),
    W("W", yd),
    W("WW", yd, ud),
    _(["w", "ww", "W", "WW"], function (a, b, c, d) {
      b[d.substr(0, 1)] = r(a);
    });
  var oe = { dow: 0, doy: 6 };
  R("D", ["DD", 2], "Do", "date"),
    J("date", "D"),
    W("D", yd),
    W("DD", yd, ud),
    W("Do", function (a, b) {
      return a ? b._ordinalParse : b._ordinalParseLenient;
    }),
    $(["D", "DD"], Od),
    $("Do", function (a, b) {
      b[Od] = r(a.match(yd)[0], 10);
    });
  var pe = M("Date", !0);
  R("d", 0, "do", "day"),
    R("dd", 0, 0, function (a) {
      return this.localeData().weekdaysMin(this, a);
    }),
    R("ddd", 0, 0, function (a) {
      return this.localeData().weekdaysShort(this, a);
    }),
    R("dddd", 0, 0, function (a) {
      return this.localeData().weekdays(this, a);
    }),
    R("e", 0, 0, "weekday"),
    R("E", 0, 0, "isoWeekday"),
    J("day", "d"),
    J("weekday", "e"),
    J("isoWeekday", "E"),
    W("d", yd),
    W("e", yd),
    W("E", yd),
    W("dd", function (a, b) {
      return b.weekdaysMinRegex(a);
    }),
    W("ddd", function (a, b) {
      return b.weekdaysShortRegex(a);
    }),
    W("dddd", function (a, b) {
      return b.weekdaysRegex(a);
    }),
    _(["dd", "ddd", "dddd"], function (a, b, c, d) {
      var e = c._locale.weekdaysParse(a, d, c._strict);
      null != e ? (b.d = e) : (j(c).invalidWeekday = a);
    }),
    _(["d", "e", "E"], function (a, b, c, d) {
      b[d] = r(a);
    });
  var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    re = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    se = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    te = Jd,
    ue = Jd,
    ve = Jd;
  R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    J("dayOfYear", "DDD"),
    W("DDD", Bd),
    W("DDDD", vd),
    $(["DDD", "DDDD"], function (a, b, c) {
      c._dayOfYear = r(a);
    }),
    R("H", ["HH", 2], 0, "hour"),
    R("h", ["hh", 2], 0, oc),
    R("k", ["kk", 2], 0, pc),
    R("hmm", 0, 0, function () {
      return "" + oc.apply(this) + Q(this.minutes(), 2);
    }),
    R("hmmss", 0, 0, function () {
      return "" + oc.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2);
    }),
    R("Hmm", 0, 0, function () {
      return "" + this.hours() + Q(this.minutes(), 2);
    }),
    R("Hmmss", 0, 0, function () {
      return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2);
    }),
    qc("a", !0),
    qc("A", !1),
    J("hour", "h"),
    W("a", rc),
    W("A", rc),
    W("H", yd),
    W("h", yd),
    W("HH", yd, ud),
    W("hh", yd, ud),
    W("hmm", zd),
    W("hmmss", Ad),
    W("Hmm", zd),
    W("Hmmss", Ad),
    $(["H", "HH"], Pd),
    $(["a", "A"], function (a, b, c) {
      (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
    }),
    $(["h", "hh"], function (a, b, c) {
      (b[Pd] = r(a)), (j(c).bigHour = !0);
    }),
    $("hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[Pd] = r(a.substr(0, d))),
        (b[Qd] = r(a.substr(d))),
        (j(c).bigHour = !0);
    }),
    $("hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[Pd] = r(a.substr(0, d))),
        (b[Qd] = r(a.substr(d, 2))),
        (b[Rd] = r(a.substr(e))),
        (j(c).bigHour = !0);
    }),
    $("Hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[Pd] = r(a.substr(0, d))), (b[Qd] = r(a.substr(d)));
    }),
    $("Hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[Pd] = r(a.substr(0, d))),
        (b[Qd] = r(a.substr(d, 2))),
        (b[Rd] = r(a.substr(e)));
    });
  var we = /[ap]\.?m?\.?/i,
    xe = M("Hours", !0);
  R("m", ["mm", 2], 0, "minute"),
    J("minute", "m"),
    W("m", yd),
    W("mm", yd, ud),
    $(["m", "mm"], Qd);
  var ye = M("Minutes", !1);
  R("s", ["ss", 2], 0, "second"),
    J("second", "s"),
    W("s", yd),
    W("ss", yd, ud),
    $(["s", "ss"], Rd);
  var ze = M("Seconds", !1);
  R("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }),
    R(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }),
    R(0, ["SSS", 3], 0, "millisecond"),
    R(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }),
    R(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }),
    R(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }),
    R(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }),
    R(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }),
    R(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }),
    J("millisecond", "ms"),
    W("S", Bd, td),
    W("SS", Bd, ud),
    W("SSS", Bd, vd);
  var Ae;
  for (Ae = "SSSS"; Ae.length <= 9; Ae += "S") W(Ae, Ed);
  for (Ae = "S"; Ae.length <= 9; Ae += "S") $(Ae, uc);
  var Be = M("Milliseconds", !1);
  R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
  var Ce = o.prototype;
  (Ce.add = le),
    (Ce.calendar = kb),
    (Ce.clone = lb),
    (Ce.diff = sb),
    (Ce.endOf = Eb),
    (Ce.format = wb),
    (Ce.from = xb),
    (Ce.fromNow = yb),
    (Ce.to = zb),
    (Ce.toNow = Ab),
    (Ce.get = P),
    (Ce.invalidAt = Nb),
    (Ce.isAfter = mb),
    (Ce.isBefore = nb),
    (Ce.isBetween = ob),
    (Ce.isSame = pb),
    (Ce.isSameOrAfter = qb),
    (Ce.isSameOrBefore = rb),
    (Ce.isValid = Lb),
    (Ce.lang = ne),
    (Ce.locale = Bb),
    (Ce.localeData = Cb),
    (Ce.max = ge),
    (Ce.min = fe),
    (Ce.parsingFlags = Mb),
    (Ce.set = P),
    (Ce.startOf = Db),
    (Ce.subtract = me),
    (Ce.toArray = Ib),
    (Ce.toObject = Jb),
    (Ce.toDate = Hb),
    (Ce.toISOString = vb),
    (Ce.toJSON = Kb),
    (Ce.toString = ub),
    (Ce.unix = Gb),
    (Ce.valueOf = Fb),
    (Ce.creationData = Ob),
    (Ce.year = ee),
    (Ce.isLeapYear = ta),
    (Ce.weekYear = Qb),
    (Ce.isoWeekYear = Rb),
    (Ce.quarter = Ce.quarters = Wb),
    (Ce.month = ha),
    (Ce.daysInMonth = ia),
    (Ce.week = Ce.weeks = $b),
    (Ce.isoWeek = Ce.isoWeeks = _b),
    (Ce.weeksInYear = Tb),
    (Ce.isoWeeksInYear = Sb),
    (Ce.date = pe),
    (Ce.day = Ce.days = gc),
    (Ce.weekday = hc),
    (Ce.isoWeekday = ic),
    (Ce.dayOfYear = nc),
    (Ce.hour = Ce.hours = xe),
    (Ce.minute = Ce.minutes = ye),
    (Ce.second = Ce.seconds = ze),
    (Ce.millisecond = Ce.milliseconds = Be),
    (Ce.utcOffset = Ua),
    (Ce.utc = Wa),
    (Ce.local = Xa),
    (Ce.parseZone = Ya),
    (Ce.hasAlignedHourOffset = Za),
    (Ce.isDST = $a),
    (Ce.isDSTShifted = _a),
    (Ce.isLocal = ab),
    (Ce.isUtcOffset = bb),
    (Ce.isUtc = cb),
    (Ce.isUTC = cb),
    (Ce.zoneAbbr = vc),
    (Ce.zoneName = wc),
    (Ce.dates = u("dates accessor is deprecated. Use date instead.", pe)),
    (Ce.months = u("months accessor is deprecated. Use month instead", ha)),
    (Ce.years = u("years accessor is deprecated. Use year instead", ee)),
    (Ce.zone = u(
      "moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779",
      Va
    ));
  var De = Ce,
    Ee = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    },
    Fe = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    Ge = "Invalid date",
    He = "%d",
    Ie = /\d{1,2}/,
    Je = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
    Ke = A.prototype;
  (Ke._calendar = Ee),
    (Ke.calendar = zc),
    (Ke._longDateFormat = Fe),
    (Ke.longDateFormat = Ac),
    (Ke._invalidDate = Ge),
    (Ke.invalidDate = Bc),
    (Ke._ordinal = He),
    (Ke.ordinal = Cc),
    (Ke._ordinalParse = Ie),
    (Ke.preparse = Dc),
    (Ke.postformat = Dc),
    (Ke._relativeTime = Je),
    (Ke.relativeTime = Ec),
    (Ke.pastFuture = Fc),
    (Ke.set = y),
    (Ke.months = ca),
    (Ke._months = Wd),
    (Ke.monthsShort = da),
    (Ke._monthsShort = Xd),
    (Ke.monthsParse = fa),
    (Ke._monthsRegex = Zd),
    (Ke.monthsRegex = ka),
    (Ke._monthsShortRegex = Yd),
    (Ke.monthsShortRegex = ja),
    (Ke.week = Xb),
    (Ke._week = oe),
    (Ke.firstDayOfYear = Zb),
    (Ke.firstDayOfWeek = Yb),
    (Ke.weekdays = bc),
    (Ke._weekdays = qe),
    (Ke.weekdaysMin = dc),
    (Ke._weekdaysMin = se),
    (Ke.weekdaysShort = cc),
    (Ke._weekdaysShort = re),
    (Ke.weekdaysParse = fc),
    (Ke._weekdaysRegex = te),
    (Ke.weekdaysRegex = jc),
    (Ke._weekdaysShortRegex = ue),
    (Ke.weekdaysShortRegex = kc),
    (Ke._weekdaysMinRegex = ve),
    (Ke.weekdaysMinRegex = lc),
    (Ke.isPM = sc),
    (Ke._meridiemParse = we),
    (Ke.meridiem = tc),
    E("en", {
      ordinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (a) {
        var b = a % 10,
          c =
            1 === r((a % 100) / 10)
              ? "th"
              : 1 === b
              ? "st"
              : 2 === b
              ? "nd"
              : 3 === b
              ? "rd"
              : "th";
        return a + c;
      },
    }),
    (a.lang = u("moment.lang is deprecated. Use moment.locale instead.", E)),
    (a.langData = u(
      "moment.langData is deprecated. Use moment.localeData instead.",
      H
    ));
  var Le = Math.abs,
    Me = Yc("ms"),
    Ne = Yc("s"),
    Oe = Yc("m"),
    Pe = Yc("h"),
    Qe = Yc("d"),
    Re = Yc("w"),
    Se = Yc("M"),
    Te = Yc("y"),
    Ue = $c("milliseconds"),
    Ve = $c("seconds"),
    We = $c("minutes"),
    Xe = $c("hours"),
    Ye = $c("days"),
    Ze = $c("months"),
    $e = $c("years"),
    _e = Math.round,
    af = { s: 45, m: 45, h: 22, d: 26, M: 11 },
    bf = Math.abs,
    cf = Oa.prototype;
  (cf.abs = Oc),
    (cf.add = Qc),
    (cf.subtract = Rc),
    (cf.as = Wc),
    (cf.asMilliseconds = Me),
    (cf.asSeconds = Ne),
    (cf.asMinutes = Oe),
    (cf.asHours = Pe),
    (cf.asDays = Qe),
    (cf.asWeeks = Re),
    (cf.asMonths = Se),
    (cf.asYears = Te),
    (cf.valueOf = Xc),
    (cf._bubble = Tc),
    (cf.get = Zc),
    (cf.milliseconds = Ue),
    (cf.seconds = Ve),
    (cf.minutes = We),
    (cf.hours = Xe),
    (cf.days = Ye),
    (cf.weeks = _c),
    (cf.months = Ze),
    (cf.years = $e),
    (cf.humanize = dd),
    (cf.toISOString = ed),
    (cf.toString = ed),
    (cf.toJSON = ed),
    (cf.locale = Bb),
    (cf.localeData = Cb),
    (cf.toIsoString = u(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      ed
    )),
    (cf.lang = ne),
    R("X", 0, 0, "unix"),
    R("x", 0, 0, "valueOf"),
    W("x", Fd),
    W("X", Id),
    $("X", function (a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10));
    }),
    $("x", function (a, b, c) {
      c._d = new Date(r(a));
    }),
    (a.version = "2.13.0"),
    b(Ka),
    (a.fn = De),
    (a.min = Ma),
    (a.max = Na),
    (a.now = he),
    (a.utc = h),
    (a.unix = xc),
    (a.months = Jc),
    (a.isDate = d),
    (a.locale = E),
    (a.invalid = l),
    (a.duration = db),
    (a.isMoment = p),
    (a.weekdays = Lc),
    (a.parseZone = yc),
    (a.localeData = H),
    (a.isDuration = Pa),
    (a.monthsShort = Kc),
    (a.weekdaysMin = Nc),
    (a.defineLocale = F),
    (a.updateLocale = G),
    (a.locales = I),
    (a.weekdaysShort = Mc),
    (a.normalizeUnits = K),
    (a.relativeTimeThreshold = cd),
    (a.prototype = De);
  var df = a;
  return df;
});
/* --- ORGANIC TABS --- */

// --- MODIFIED
// https://github.com/CSS-Tricks/jQuery-Organic-Tabs
(function ($) {
  $.organicTabs = function (el, options) {
    var base = this;
    base.$el = $(el);
    base.$nav = base.$el.find(".tabs__nav");
    base.init = function () {
      base.options = $.extend({}, $.organicTabs.defaultOptions, options);
      var $allListWrap = base.$el.find(".tabs__content"),
        curList = base.$el.find("a.current").attr("href").substring(1);
      $allListWrap.height(base.$el.find("#" + curList).height());
      base.$nav.find("li > a").off("click");
      base.$nav.find("li > a").click(function (event) {
        var curList = base.$el.find("a.current").attr("href").substring(1),
          $newList = $(this),
          listID = $newList.attr("href").substring(1);
        if (listID != curList && base.$el.find(":animated").length == 0) {
          base.$el.find("#" + curList).css({
            opacity: 0,
            "z-index": 10,
            "pointer-events": "none",
          });
          var newHeight = base.$el.find("#" + listID).height();
          $allListWrap.css({
            height: newHeight,
          });
          setTimeout(function () {
            base.$el.find("#" + curList);
            base.$el.find("#" + listID).css({
              opacity: 1,
              "z-index": 100,
              "pointer-events": "auto",
            });
            base.$el.find(".tabs__nav li a").removeClass("current");
            $newList.addClass("current");
          }, 250);
        }

        setTimeout(function () {
          $(window).trigger("organicTabsChange");
        }, 250);
        event.preventDefault();
      });
    };
    base.init();
  };
  $.organicTabs.defaultOptions = {
    speed: 300,
  };
  $.fn.organicTabs = function (options) {
    return this.each(function () {
      new $.organicTabs(this, options);
    });
  };
})(jQuery);
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */

(function (root, factory) {
  "use strict";

  var moment;
  if (typeof exports === "object") {
    // CommonJS module
    // Load moment.js as an optional dependency
    try {
      moment = require("moment");
    } catch (e) {}
    module.exports = factory(moment);
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(function (req) {
      // Load moment.js as an optional dependency
      var id = "moment";
      try {
        moment = req(id);
      } catch (e) {}
      return factory(moment);
    });
  } else {
    root.Pikaday = factory(root.moment);
  }
})(this, function (moment) {
  "use strict";

  /**
   * feature detection and helper functions
   */
  var hasMoment = typeof moment === "function",
    hasEventListeners = !!window.addEventListener,
    document = window.document,
    sto = window.setTimeout,
    addEvent = function (el, e, callback, capture) {
      if (hasEventListeners) {
        el.addEventListener(e, callback, !!capture);
      } else {
        el.attachEvent("on" + e, callback);
      }
    },
    removeEvent = function (el, e, callback, capture) {
      if (hasEventListeners) {
        el.removeEventListener(e, callback, !!capture);
      } else {
        el.detachEvent("on" + e, callback);
      }
    },
    trim = function (str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
    },
    hasClass = function (el, cn) {
      return (" " + el.className + " ").indexOf(" " + cn + " ") !== -1;
    },
    addClass = function (el, cn) {
      if (!hasClass(el, cn)) {
        el.className = el.className === "" ? cn : el.className + " " + cn;
      }
    },
    removeClass = function (el, cn) {
      el.className = trim(
        (" " + el.className + " ").replace(" " + cn + " ", " ")
      );
    },
    isArray = function (obj) {
      return /Array/.test(Object.prototype.toString.call(obj));
    },
    isDate = function (obj) {
      return (
        /Date/.test(Object.prototype.toString.call(obj)) &&
        !isNaN(obj.getTime())
      );
    },
    isWeekend = function (date) {
      var day = date.getDay();
      return day === 0 || day === 6;
    },
    isLeapYear = function (year) {
      // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
      return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    },
    getDaysInMonth = function (year, month) {
      return [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
      ][month];
    },
    setToStartOfDay = function (date) {
      if (isDate(date)) date.setHours(0, 0, 0, 0);
    },
    compareDates = function (a, b) {
      // weak date comparison (use setToStartOfDay(date) to ensure correct result)
      return a.getTime() === b.getTime();
    },
    extend = function (to, from, overwrite) {
      var prop, hasProp;
      for (prop in from) {
        hasProp = to[prop] !== undefined;
        if (
          hasProp &&
          typeof from[prop] === "object" &&
          from[prop] !== null &&
          from[prop].nodeName === undefined
        ) {
          if (isDate(from[prop])) {
            if (overwrite) {
              to[prop] = new Date(from[prop].getTime());
            }
          } else if (isArray(from[prop])) {
            if (overwrite) {
              to[prop] = from[prop].slice(0);
            }
          } else {
            to[prop] = extend({}, from[prop], overwrite);
          }
        } else if (overwrite || !hasProp) {
          to[prop] = from[prop];
        }
      }
      return to;
    },
    fireEvent = function (el, eventName, data) {
      var ev;

      if (document.createEvent) {
        ev = document.createEvent("HTMLEvents");
        ev.initEvent(eventName, true, false);
        ev = extend(ev, data);
        el.dispatchEvent(ev);
      } else if (document.createEventObject) {
        ev = document.createEventObject();
        ev = extend(ev, data);
        el.fireEvent("on" + eventName, ev);
      }
    },
    adjustCalendar = function (calendar) {
      if (calendar.month < 0) {
        calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
        calendar.month += 12;
      }
      if (calendar.month > 11) {
        calendar.year += Math.floor(Math.abs(calendar.month) / 12);
        calendar.month -= 12;
      }
      return calendar;
    },
    /**
     * defaults and localisation
     */
    defaults = {
      // bind the picker to a form field
      field: null,

      // automatically show/hide the picker on `field` focus (default `true` if `field` is set)
      bound: undefined,

      // data-attribute on the input field with an aria assistance tekst (only applied when `bound` is set)
      ariaLabel: "Use the arrow keys to pick a date",

      // position of the datepicker, relative to the field (default to bottom & left)
      // ('bottom' & 'left' keywords are not used, 'top' & 'right' are modifier on the bottom/left position)
      position: "bottom left",

      // automatically fit in the viewport even if it means repositioning from the position option
      reposition: true,

      // the default output format for `.toString()` and `field` value
      format: "YYYY-MM-DD",

      // the toString function which gets passed a current date object and format
      // and returns a string
      toString: null,

      // used to create date object from current input string
      parse: null,

      // the initial date to view when first opened
      defaultDate: null,

      // make the `defaultDate` the initial selected value
      setDefaultDate: false,

      // first day of week (0: Sunday, 1: Monday etc)
      firstDay: 0,

      // the default flag for moment's strict date parsing
      formatStrict: false,

      // the minimum/earliest date that can be selected
      minDate: null,
      // the maximum/latest date that can be selected
      maxDate: null,

      // number of years either side, or array of upper/lower range
      yearRange: 10,

      // show week numbers at head of row
      showWeekNumber: false,

      // Week picker mode
      pickWholeWeek: false,

      // used internally (don't config outside)
      minYear: 0,
      maxYear: 9999,
      minMonth: undefined,
      maxMonth: undefined,

      startRange: null,
      endRange: null,

      isRTL: false,

      // Additional text to append to the year in the calendar title
      yearSuffix: "",

      // Render the month after year in the calendar title
      showMonthAfterYear: false,

      // Render days of the calendar grid that fall in the next or previous month
      showDaysInNextAndPreviousMonths: false,

      // Allows user to select days that fall in the next or previous month
      enableSelectionDaysInNextAndPreviousMonths: false,

      // how many months are visible
      numberOfMonths: 1,

      // when numberOfMonths is used, this will help you to choose where the main calendar will be (default `left`, can be set to `right`)
      // only used for the first display or when a selected date is not visible
      mainCalendar: "left",

      // Specify a DOM element to render the calendar in
      container: undefined,

      // Blur field when date is selected
      blurFieldOnSelect: true,

      // internationalization
      i18n: {
        previousMonth: "Previous Month",
        nextMonth: "Next Month",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },

      // Theme Classname
      theme: null,

      // events array
      events: [],

      // callback function
      onSelect: null,
      onOpen: null,
      onClose: null,
      onDraw: null,

      // Enable keyboard input
      keyboardInput: true,
    },
    /**
     * templating functions to abstract HTML rendering
     */
    renderDayName = function (opts, day, abbr) {
      day += opts.firstDay;
      while (day >= 7) {
        day -= 7;
      }
      return abbr ? opts.i18n.weekdaysShort[day] : opts.i18n.weekdays[day];
    },
    renderDay = function (opts) {
      var arr = [];
      var ariaSelected = "false";
      if (opts.isEmpty) {
        if (opts.showDaysInNextAndPreviousMonths) {
          arr.push("is-outside-current-month");

          if (!opts.enableSelectionDaysInNextAndPreviousMonths) {
            arr.push("is-selection-disabled");
          }
        } else {
          return '<td class="is-empty"></td>';
        }
      }
      if (opts.isDisabled) {
        arr.push("is-disabled");
      }
      if (opts.isToday) {
        arr.push("is-today");
      }
      if (opts.isSelected) {
        arr.push("is-selected");
        ariaSelected = "true";
      }
      if (opts.hasEvent) {
        arr.push("has-event");
      }
      if (opts.isInRange) {
        arr.push("is-inrange");
      }
      if (opts.isStartRange) {
        arr.push("is-startrange");
      }
      if (opts.isEndRange) {
        arr.push("is-endrange");
      }
      return (
        '<td data-day="' +
        opts.day +
        '" class="' +
        arr.join(" ") +
        '" aria-selected="' +
        ariaSelected +
        '">' +
        '<button class="pika-button pika-day" type="button" ' +
        'data-pika-year="' +
        opts.year +
        '" data-pika-month="' +
        opts.month +
        '" data-pika-day="' +
        opts.day +
        '">' +
        opts.day +
        "</button>" +
        "</td>"
      );
    },
    renderWeek = function (d, m, y) {
      // Lifted from http://javascript.about.com/library/blweekyear.htm, lightly modified.
      var onejan = new Date(y, 0, 1),
        weekNum = Math.ceil(
          ((new Date(y, m, d) - onejan) / 86400000 + onejan.getDay() + 1) / 7
        );
      return '<td class="pika-week">' + weekNum + "</td>";
    },
    renderRow = function (days, isRTL, pickWholeWeek, isRowSelected) {
      return (
        '<tr class="pika-row' +
        (pickWholeWeek ? " pick-whole-week" : "") +
        (isRowSelected ? " is-selected" : "") +
        '">' +
        (isRTL ? days.reverse() : days).join("") +
        "</tr>"
      );
    },
    renderBody = function (rows) {
      return "<tbody>" + rows.join("") + "</tbody>";
    },
    renderHead = function (opts) {
      var i,
        arr = [];
      if (opts.showWeekNumber) {
        arr.push("<th></th>");
      }
      for (i = 0; i < 7; i++) {
        arr.push(
          '<th scope="col"><abbr title="' +
            renderDayName(opts, i) +
            '">' +
            renderDayName(opts, i, true) +
            "</abbr></th>"
        );
      }
      return (
        "<thead><tr>" +
        (opts.isRTL ? arr.reverse() : arr).join("") +
        "</tr></thead>"
      );
    },
    renderTitle = function (instance, c, year, month, refYear, randId) {
      var i,
        j,
        arr,
        opts = instance._o,
        isMinYear = year === opts.minYear,
        isMaxYear = year === opts.maxYear,
        html =
          '<div id="' +
          randId +
          '" class="pika-title" role="heading" aria-live="assertive">',
        monthHtml,
        yearHtml,
        prev = true,
        next = true;

      for (arr = [], i = 0; i < 12; i++) {
        arr.push(
          '<option value="' +
            (year === refYear ? i - c : 12 + i - c) +
            '"' +
            (i === month ? ' selected="selected"' : "") +
            ((isMinYear && i < opts.minMonth) ||
            (isMaxYear && i > opts.maxMonth)
              ? 'disabled="disabled"'
              : "") +
            ">" +
            opts.i18n.months[i] +
            "</option>"
        );
      }

      monthHtml =
        '<div class="pika-label">' +
        opts.i18n.months[month] +
        '<select class="pika-select pika-select-month" tabindex="-1">' +
        arr.join("") +
        "</select></div>";

      if (isArray(opts.yearRange)) {
        i = opts.yearRange[0];
        j = opts.yearRange[1] + 1;
      } else {
        i = year - opts.yearRange;
        j = 1 + year + opts.yearRange;
      }

      for (arr = []; i < j && i <= opts.maxYear; i++) {
        if (i >= opts.minYear) {
          arr.push(
            '<option value="' +
              i +
              '"' +
              (i === year ? ' selected="selected"' : "") +
              ">" +
              i +
              "</option>"
          );
        }
      }
      yearHtml =
        '<div class="pika-label">' +
        year +
        opts.yearSuffix +
        '<select class="pika-select pika-select-year" tabindex="-1">' +
        arr.join("") +
        "</select></div>";

      if (opts.showMonthAfterYear) {
        html += yearHtml + monthHtml;
      } else {
        html += monthHtml + yearHtml;
      }

      if (isMinYear && (month === 0 || opts.minMonth >= month)) {
        prev = false;
      }

      if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
        next = false;
      }

      if (c === 0) {
        html +=
          '<button class="pika-prev' +
          (prev ? "" : " is-disabled") +
          '" type="button">' +
          opts.i18n.previousMonth +
          "</button>";
      }
      if (c === instance._o.numberOfMonths - 1) {
        html +=
          '<button class="pika-next' +
          (next ? "" : " is-disabled") +
          '" type="button">' +
          opts.i18n.nextMonth +
          "</button>";
      }

      return (html += "</div>");
    },
    renderTable = function (opts, data, randId) {
      return (
        '<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="' +
        randId +
        '">' +
        renderHead(opts) +
        renderBody(data) +
        "</table>"
      );
    },
    /**
     * Pikaday constructor
     */
    Pikaday = function (options) {
      var self = this,
        opts = self.config(options);

      self._onMouseDown = function (e) {
        if (!self._v) {
          return;
        }
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (!target) {
          return;
        }

        if (!hasClass(target, "is-disabled")) {
          if (
            hasClass(target, "pika-button") &&
            !hasClass(target, "is-empty") &&
            !hasClass(target.parentNode, "is-disabled")
          ) {
            self.setDate(
              new Date(
                target.getAttribute("data-pika-year"),
                target.getAttribute("data-pika-month"),
                target.getAttribute("data-pika-day")
              )
            );
            if (opts.bound) {
              sto(function () {
                self.hide();
                if (opts.blurFieldOnSelect && opts.field) {
                  opts.field.blur();
                }
              }, 100);
            }
          } else if (hasClass(target, "pika-prev")) {
            self.prevMonth();
          } else if (hasClass(target, "pika-next")) {
            self.nextMonth();
          }
        }
        if (!hasClass(target, "pika-select")) {
          // if this is touch event prevent mouse events emulation
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
            return false;
          }
        } else {
          self._c = true;
        }
      };

      self._onChange = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (!target) {
          return;
        }
        if (hasClass(target, "pika-select-month")) {
          self.gotoMonth(target.value);
        } else if (hasClass(target, "pika-select-year")) {
          self.gotoYear(target.value);
        }
      };

      self._onKeyChange = function (e) {
        e = e || window.event;

        if (self.isVisible()) {
          switch (e.keyCode) {
            case 13:
            case 27:
              if (opts.field) {
                opts.field.blur();
              }
              break;
            case 37:
              e.preventDefault();
              self.adjustDate("subtract", 1);
              break;
            case 38:
              self.adjustDate("subtract", 7);
              break;
            case 39:
              self.adjustDate("add", 1);
              break;
            case 40:
              self.adjustDate("add", 7);
              break;
          }
        }
      };

      self._onInputChange = function (e) {
        var date;

        if (e.firedBy === self) {
          return;
        }
        if (opts.parse) {
          date = opts.parse(opts.field.value, opts.format);
        } else if (hasMoment) {
          date = moment(opts.field.value, opts.format, opts.formatStrict);
          date = date && date.isValid() ? date.toDate() : null;
        } else {
          date = new Date(Date.parse(opts.field.value));
        }
        if (isDate(date)) {
          self.setDate(date);
        }
        if (!self._v) {
          self.show();
        }
      };

      self._onInputFocus = function () {
        self.show();
      };

      self._onInputClick = function () {
        self.show();
      };

      self._onInputBlur = function () {
        // IE allows pika div to gain focus; catch blur the input field
        var pEl = document.activeElement;
        do {
          if (hasClass(pEl, "pika-single")) {
            return;
          }
        } while ((pEl = pEl.parentNode));

        if (!self._c) {
          self._b = sto(function () {
            self.hide();
          }, 50);
        }
        self._c = false;
      };

      self._onClick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
          pEl = target;
        if (!target) {
          return;
        }
        if (!hasEventListeners && hasClass(target, "pika-select")) {
          if (!target.onchange) {
            target.setAttribute("onchange", "return;");
            addEvent(target, "change", self._onChange);
          }
        }
        do {
          if (hasClass(pEl, "pika-single") || pEl === opts.trigger) {
            return;
          }
        } while ((pEl = pEl.parentNode));
        if (self._v && target !== opts.trigger && pEl !== opts.trigger) {
          self.hide();
        }
      };

      self.el = document.createElement("div");
      self.el.className =
        "pika-single" +
        (opts.isRTL ? " is-rtl" : "") +
        (opts.theme ? " " + opts.theme : "");

      addEvent(self.el, "mousedown", self._onMouseDown, true);
      addEvent(self.el, "touchend", self._onMouseDown, true);
      addEvent(self.el, "change", self._onChange);

      if (opts.keyboardInput) {
        addEvent(document, "keydown", self._onKeyChange);
      }

      if (opts.field) {
        if (opts.container) {
          opts.container.appendChild(self.el);
        } else if (opts.bound) {
          document.body.appendChild(self.el);
        } else {
          opts.field.parentNode.insertBefore(self.el, opts.field.nextSibling);
        }
        addEvent(opts.field, "change", self._onInputChange);

        if (!opts.defaultDate) {
          if (hasMoment && opts.field.value) {
            opts.defaultDate = moment(opts.field.value, opts.format).toDate();
          } else {
            opts.defaultDate = new Date(Date.parse(opts.field.value));
          }
          opts.setDefaultDate = true;
        }
      }

      var defDate = opts.defaultDate;

      if (isDate(defDate)) {
        if (opts.setDefaultDate) {
          self.setDate(defDate, true);
        } else {
          self.gotoDate(defDate);
        }
      } else {
        self.gotoDate(new Date());
      }

      if (opts.bound) {
        this.hide();
        self.el.className += " is-bound";
        addEvent(opts.trigger, "click", self._onInputClick);
        addEvent(opts.trigger, "focus", self._onInputFocus);
        addEvent(opts.trigger, "blur", self._onInputBlur);
      } else {
        this.show();
      }
    };

  /**
   * public Pikaday API
   */
  Pikaday.prototype = {
    /**
     * configure functionality
     */
    config: function (options) {
      if (!this._o) {
        this._o = extend({}, defaults, true);
      }

      var opts = extend(this._o, options, true);

      opts.isRTL = !!opts.isRTL;

      opts.field = opts.field && opts.field.nodeName ? opts.field : null;

      opts.theme =
        typeof opts.theme === "string" && opts.theme ? opts.theme : null;

      opts.bound = !!(opts.bound !== undefined
        ? opts.field && opts.bound
        : opts.field);

      opts.trigger =
        opts.trigger && opts.trigger.nodeName ? opts.trigger : opts.field;

      opts.disableWeekends = !!opts.disableWeekends;

      opts.disableDayFn =
        typeof opts.disableDayFn === "function" ? opts.disableDayFn : null;

      var nom = parseInt(opts.numberOfMonths, 10) || 1;
      opts.numberOfMonths = nom > 4 ? 4 : nom;

      if (!isDate(opts.minDate)) {
        opts.minDate = false;
      }
      if (!isDate(opts.maxDate)) {
        opts.maxDate = false;
      }
      if (opts.minDate && opts.maxDate && opts.maxDate < opts.minDate) {
        opts.maxDate = opts.minDate = false;
      }
      if (opts.minDate) {
        this.setMinDate(opts.minDate);
      }
      if (opts.maxDate) {
        this.setMaxDate(opts.maxDate);
      }

      if (isArray(opts.yearRange)) {
        var fallback = new Date().getFullYear() - 10;
        opts.yearRange[0] = parseInt(opts.yearRange[0], 10) || fallback;
        opts.yearRange[1] = parseInt(opts.yearRange[1], 10) || fallback;
      } else {
        opts.yearRange =
          Math.abs(parseInt(opts.yearRange, 10)) || defaults.yearRange;
        if (opts.yearRange > 100) {
          opts.yearRange = 100;
        }
      }

      return opts;
    },

    /**
     * return a formatted string of the current selection (using Moment.js if available)
     */
    toString: function (format) {
      format = format || this._o.format;
      if (!isDate(this._d)) {
        return "";
      }
      if (this._o.toString) {
        return this._o.toString(this._d, format);
      }
      if (hasMoment) {
        return moment(this._d).format(format);
      }
      return this._d.toDateString();
    },

    /**
     * return a Moment.js object of the current selection (if available)
     */
    getMoment: function () {
      return hasMoment ? moment(this._d) : null;
    },

    /**
     * set the current selection from a Moment.js object (if available)
     */
    setMoment: function (date, preventOnSelect) {
      if (hasMoment && moment.isMoment(date)) {
        this.setDate(date.toDate(), preventOnSelect);
      }
    },

    /**
     * return a Date object of the current selection
     */
    getDate: function () {
      return isDate(this._d) ? new Date(this._d.getTime()) : null;
    },

    /**
     * set the current selection
     */
    setDate: function (date, preventOnSelect) {
      if (!date) {
        this._d = null;

        if (this._o.field) {
          this._o.field.value = "";
          fireEvent(this._o.field, "change", { firedBy: this });
        }

        return this.draw();
      }
      if (typeof date === "string") {
        date = new Date(Date.parse(date));
      }
      if (!isDate(date)) {
        return;
      }

      var min = this._o.minDate,
        max = this._o.maxDate;

      if (isDate(min) && date < min) {
        date = min;
      } else if (isDate(max) && date > max) {
        date = max;
      }

      this._d = new Date(date.getTime());
      setToStartOfDay(this._d);
      this.gotoDate(this._d);

      if (this._o.field) {
        this._o.field.value = this.toString();
        fireEvent(this._o.field, "change", { firedBy: this });
      }
      if (!preventOnSelect && typeof this._o.onSelect === "function") {
        this._o.onSelect.call(this, this.getDate());
      }
    },

    /**
     * change view to a specific date
     */
    gotoDate: function (date) {
      var newCalendar = true;

      if (!isDate(date)) {
        return;
      }

      if (this.calendars) {
        var firstVisibleDate = new Date(
            this.calendars[0].year,
            this.calendars[0].month,
            1
          ),
          lastVisibleDate = new Date(
            this.calendars[this.calendars.length - 1].year,
            this.calendars[this.calendars.length - 1].month,
            1
          ),
          visibleDate = date.getTime();
        // get the end of the month
        lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
        lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
        newCalendar =
          visibleDate < firstVisibleDate.getTime() ||
          lastVisibleDate.getTime() < visibleDate;
      }

      if (newCalendar) {
        this.calendars = [
          {
            month: date.getMonth(),
            year: date.getFullYear(),
          },
        ];
        if (this._o.mainCalendar === "right") {
          this.calendars[0].month += 1 - this._o.numberOfMonths;
        }
      }

      this.adjustCalendars();
    },

    adjustDate: function (sign, days) {
      var day = this.getDate() || new Date();
      var difference = parseInt(days) * 24 * 60 * 60 * 1000;

      var newDay;

      if (sign === "add") {
        newDay = new Date(day.valueOf() + difference);
      } else if (sign === "subtract") {
        newDay = new Date(day.valueOf() - difference);
      }

      this.setDate(newDay);
    },

    adjustCalendars: function () {
      this.calendars[0] = adjustCalendar(this.calendars[0]);
      for (var c = 1; c < this._o.numberOfMonths; c++) {
        this.calendars[c] = adjustCalendar({
          month: this.calendars[0].month + c,
          year: this.calendars[0].year,
        });
      }
      this.draw();
    },

    gotoToday: function () {
      this.gotoDate(new Date());
    },

    /**
     * change view to a specific month (zero-index, e.g. 0: January)
     */
    gotoMonth: function (month) {
      if (!isNaN(month)) {
        this.calendars[0].month = parseInt(month, 10);
        this.adjustCalendars();
      }
    },

    nextMonth: function () {
      this.calendars[0].month++;
      this.adjustCalendars();
    },

    prevMonth: function () {
      this.calendars[0].month--;
      this.adjustCalendars();
    },

    /**
     * change view to a specific full year (e.g. "2012")
     */
    gotoYear: function (year) {
      if (!isNaN(year)) {
        this.calendars[0].year = parseInt(year, 10);
        this.adjustCalendars();
      }
    },

    /**
     * change the minDate
     */
    setMinDate: function (value) {
      if (value instanceof Date) {
        setToStartOfDay(value);
        this._o.minDate = value;
        this._o.minYear = value.getFullYear();
        this._o.minMonth = value.getMonth();
      } else {
        this._o.minDate = defaults.minDate;
        this._o.minYear = defaults.minYear;
        this._o.minMonth = defaults.minMonth;
        this._o.startRange = defaults.startRange;
      }

      this.draw();
    },

    /**
     * change the maxDate
     */
    setMaxDate: function (value) {
      if (value instanceof Date) {
        setToStartOfDay(value);
        this._o.maxDate = value;
        this._o.maxYear = value.getFullYear();
        this._o.maxMonth = value.getMonth();
      } else {
        this._o.maxDate = defaults.maxDate;
        this._o.maxYear = defaults.maxYear;
        this._o.maxMonth = defaults.maxMonth;
        this._o.endRange = defaults.endRange;
      }

      this.draw();
    },

    setStartRange: function (value) {
      this._o.startRange = value;
    },

    setEndRange: function (value) {
      this._o.endRange = value;
    },

    /**
     * refresh the HTML
     */
    draw: function (force) {
      if (!this._v && !force) {
        return;
      }
      var opts = this._o,
        minYear = opts.minYear,
        maxYear = opts.maxYear,
        minMonth = opts.minMonth,
        maxMonth = opts.maxMonth,
        html = "",
        randId;

      if (this._y <= minYear) {
        this._y = minYear;
        if (!isNaN(minMonth) && this._m < minMonth) {
          this._m = minMonth;
        }
      }
      if (this._y >= maxYear) {
        this._y = maxYear;
        if (!isNaN(maxMonth) && this._m > maxMonth) {
          this._m = maxMonth;
        }
      }

      randId =
        "pika-title-" +
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
          .substr(0, 2);

      for (var c = 0; c < opts.numberOfMonths; c++) {
        html +=
          '<div class="pika-lendar">' +
          renderTitle(
            this,
            c,
            this.calendars[c].year,
            this.calendars[c].month,
            this.calendars[0].year,
            randId
          ) +
          this.render(this.calendars[c].year, this.calendars[c].month, randId) +
          "</div>";
      }

      this.el.innerHTML = html;

      if (opts.bound) {
        if (opts.field.type !== "hidden") {
          sto(function () {
            opts.trigger.focus();
          }, 1);
        }
      }

      if (typeof this._o.onDraw === "function") {
        this._o.onDraw(this);
      }

      if (opts.bound) {
        // let the screen reader user know to use arrow keys
        opts.field.setAttribute("aria-label", opts.ariaLabel);
      }
    },

    adjustPosition: function () {
      var field,
        pEl,
        width,
        height,
        viewportWidth,
        viewportHeight,
        scrollTop,
        left,
        top,
        clientRect,
        leftAligned,
        bottomAligned;

      if (this._o.container) return;

      this.el.style.position = "absolute";

      field = this._o.trigger;
      pEl = field;
      width = this.el.offsetWidth;
      height = this.el.offsetHeight;
      viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      scrollTop =
        window.pageYOffset ||
        document.body.scrollTop ||
        document.documentElement.scrollTop;
      leftAligned = true;
      bottomAligned = true;

      if (typeof field.getBoundingClientRect === "function") {
        clientRect = field.getBoundingClientRect();
        left = clientRect.left + window.pageXOffset;
        top = clientRect.bottom + window.pageYOffset;
      } else {
        left = pEl.offsetLeft;
        top = pEl.offsetTop + pEl.offsetHeight;
        while ((pEl = pEl.offsetParent)) {
          left += pEl.offsetLeft;
          top += pEl.offsetTop;
        }
      }

      // default position is bottom & left
      if (
        (this._o.reposition && left + width > viewportWidth) ||
        (this._o.position.indexOf("right") > -1 &&
          left - width + field.offsetWidth > 0)
      ) {
        left = left - width + field.offsetWidth;
        leftAligned = false;
      }
      if (
        (this._o.reposition && top + height > viewportHeight + scrollTop) ||
        (this._o.position.indexOf("top") > -1 &&
          top - height - field.offsetHeight > 0)
      ) {
        top = top - height - field.offsetHeight;
        bottomAligned = false;
      }

      this.el.style.left = left + "px";
      this.el.style.top = top + "px";

      addClass(this.el, leftAligned ? "left-aligned" : "right-aligned");
      addClass(this.el, bottomAligned ? "bottom-aligned" : "top-aligned");
      removeClass(this.el, !leftAligned ? "left-aligned" : "right-aligned");
      removeClass(this.el, !bottomAligned ? "bottom-aligned" : "top-aligned");
    },

    /**
     * render HTML for a particular month
     */
    render: function (year, month, randId) {
      var opts = this._o,
        now = new Date(),
        days = getDaysInMonth(year, month),
        before = new Date(year, month, 1).getDay(),
        data = [],
        row = [];
      setToStartOfDay(now);
      if (opts.firstDay > 0) {
        before -= opts.firstDay;
        if (before < 0) {
          before += 7;
        }
      }
      var previousMonth = month === 0 ? 11 : month - 1,
        nextMonth = month === 11 ? 0 : month + 1,
        yearOfPreviousMonth = month === 0 ? year - 1 : year,
        yearOfNextMonth = month === 11 ? year + 1 : year,
        daysInPreviousMonth = getDaysInMonth(
          yearOfPreviousMonth,
          previousMonth
        );
      var cells = days + before,
        after = cells;
      while (after > 7) {
        after -= 7;
      }
      cells += 7 - after;
      var isWeekSelected = false;
      for (var i = 0, r = 0; i < cells; i++) {
        var day = new Date(year, month, 1 + (i - before)),
          isSelected = isDate(this._d) ? compareDates(day, this._d) : false,
          isToday = compareDates(day, now),
          hasEvent =
            opts.events.indexOf(day.toDateString()) !== -1 ? true : false,
          isEmpty = i < before || i >= days + before,
          dayNumber = 1 + (i - before),
          monthNumber = month,
          yearNumber = year,
          isStartRange = opts.startRange && compareDates(opts.startRange, day),
          isEndRange = opts.endRange && compareDates(opts.endRange, day),
          isInRange =
            opts.startRange &&
            opts.endRange &&
            opts.startRange < day &&
            day < opts.endRange,
          isDisabled =
            (opts.minDate && day < opts.minDate) ||
            (opts.maxDate && day > opts.maxDate) ||
            (opts.disableWeekends && isWeekend(day)) ||
            (opts.disableDayFn && opts.disableDayFn(day));

        if (isEmpty) {
          if (i < before) {
            dayNumber = daysInPreviousMonth + dayNumber;
            monthNumber = previousMonth;
            yearNumber = yearOfPreviousMonth;
          } else {
            dayNumber = dayNumber - days;
            monthNumber = nextMonth;
            yearNumber = yearOfNextMonth;
          }
        }

        var dayConfig = {
          day: dayNumber,
          month: monthNumber,
          year: yearNumber,
          hasEvent: hasEvent,
          isSelected: isSelected,
          isToday: isToday,
          isDisabled: isDisabled,
          isEmpty: isEmpty,
          isStartRange: isStartRange,
          isEndRange: isEndRange,
          isInRange: isInRange,
          showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths,
          enableSelectionDaysInNextAndPreviousMonths:
            opts.enableSelectionDaysInNextAndPreviousMonths,
        };

        if (opts.pickWholeWeek && isSelected) {
          isWeekSelected = true;
        }

        row.push(renderDay(dayConfig));

        if (++r === 7) {
          if (opts.showWeekNumber) {
            row.unshift(renderWeek(i - before, month, year));
          }
          data.push(
            renderRow(row, opts.isRTL, opts.pickWholeWeek, isWeekSelected)
          );
          row = [];
          r = 0;
          isWeekSelected = false;
        }
      }
      return renderTable(opts, data, randId);
    },

    isVisible: function () {
      return this._v;
    },

    show: function () {
      if (!this.isVisible()) {
        this._v = true;
        this.draw();
        removeClass(this.el, "is-hidden");
        if (this._o.bound) {
          addEvent(document, "click", this._onClick);
          this.adjustPosition();
        }
        if (typeof this._o.onOpen === "function") {
          this._o.onOpen.call(this);
        }
      }
    },

    hide: function () {
      var v = this._v;
      if (v !== false) {
        if (this._o.bound) {
          removeEvent(document, "click", this._onClick);
        }
        this.el.style.position = "static"; // reset
        this.el.style.left = "auto";
        this.el.style.top = "auto";
        addClass(this.el, "is-hidden");
        this._v = false;
        if (v !== undefined && typeof this._o.onClose === "function") {
          this._o.onClose.call(this);
        }
      }
    },

    /**
     * GAME OVER
     */
    destroy: function () {
      var opts = this._o;

      this.hide();
      removeEvent(this.el, "mousedown", this._onMouseDown, true);
      removeEvent(this.el, "touchend", this._onMouseDown, true);
      removeEvent(this.el, "change", this._onChange);
      if (opts.keyboardInput) {
        removeEvent(document, "keydown", this._onKeyChange);
      }
      if (opts.field) {
        removeEvent(opts.field, "change", this._onInputChange);
        if (opts.bound) {
          removeEvent(opts.trigger, "click", this._onInputClick);
          removeEvent(opts.trigger, "focus", this._onInputFocus);
          removeEvent(opts.trigger, "blur", this._onInputBlur);
        }
      }
      if (this.el.parentNode) {
        this.el.parentNode.removeChild(this.el);
      }
    },
  };

  return Pikaday;
});

/*!
 * jQuery Rellax Plugin v0.3.7.1
 * Examples and documentation at http://pixelgrade.github.io/rellax/
 * Copyright (c) 2016 - 2019 PixelGrade http://www.pixelgrade.com
 * Licensed under MIT http://www.opensource.org/licenses/mit-license.php/
 */
(function ($, window, document, undefined) {
  if (!window.requestAnimationFrame) {
    return;
  }

  function Rellax(element, options) {
    this.$el = $(element);
    this.ready = false;
    this.options = $.extend($.fn.rellax.defaults, options);
    this.$parent = this.$el.parent().closest(this.options.container);
    this.parent = this.$parent.data("plugin_" + Rellax);

    var $el = this.$el,
      amount = $el.data("rellax-amount"),
      bleed = $el.data("rellax-bleed"),
      fill = $el.data("rellax-fill"),
      scale = $el.data("rellax-scale");

    this.options.amount =
      amount !== undefined ? parseFloat(amount) : this.options.amount;
    this.options.bleed =
      bleed !== undefined ? parseFloat(bleed) : this.options.bleed;
    this.options.scale =
      scale !== undefined ? parseFloat(scale) : this.options.scale;
    this.options.fill = fill !== undefined;

    if (this.options.amount === 0) {
      return;
    }

    this._setParentHeight();
    this._resetElement();
    this._reloadElement();
    this._prepareElement();
    this._updatePosition();

    elements.push(this);
  }

  $.extend(Rellax.prototype, {
    constructor: Rellax,
    _resetElement: function () {
      this.$el.css({
        position: "",
        top: "",
        left: "",
        width: "",
        height: "",
        transform: "",
      });
    },
    _reloadElement: function () {
      this.$el.css({
        position: "",
        top: "",
        left: "",
        width: "",
        height: "",
      });
      this.offset = this.$el.offset();
      this.height = this.$el.outerHeight();
      this.width = this.$el.outerWidth();

      if (this.parent === undefined) {
        this.offset.top -= this.options.bleed;
        this.height += 2 * this.options.bleed;
      }

      this.ready = true;
    },
    _scaleElement: function () {
      var parentHeight = this.$parent.outerHeight(),
        parentWidth = this.$parent.outerWidth(),
        scaleY =
          (parentHeight +
            (windowHeight - parentHeight) * (1 - this.options.amount)) /
          this.height,
        scaleX = parentWidth / this.width,
        scale = Math.max(scaleX, scaleY);

      this.width = this.width * scale;
      this.height = this.height * scale;

      this.offset.top = (parentHeight - this.height) / 2;
      this.offset.left = (parentWidth - this.width) / 2;
    },
    _prepareElement: function () {
      if (this.parent === undefined) {
        this.$el.addClass("rellax-element");
        this.$el.css({
          position: "fixed",
          top: this.offset.top,
          left: this.offset.left,
          width: this.width,
          height: this.height,
        });
      } else {
        this._scaleElement();
        this.$el.css({
          position: "absolute",
          top: this.offset.top,
          left: this.offset.left,
          width: this.width,
          height: this.height,
        });
      }
    },
    _setParentHeight: function () {
      if (this.parent == undefined) {
        var $parent = this.$el.parent(),
          parentHeight = $parent.css("minHeight", "").outerHeight();

        parentHeight =
          windowHeight < parentHeight ? windowHeight : parentHeight;
        $parent.css("minHeight", parentHeight);
      }
    },
    _updatePosition: function (forced) {
      if (this.ready !== true) return;

      var progress = this._getProgress(),
        height = this.parent !== undefined ? this.parent.height : this.height,
        move = (windowHeight + height) * (progress - 0.5) * this.options.amount,
        scale = 1 + (this.options.scale - 1) * progress,
        scaleTransform = scale >= 1 ? "scale(" + scale + ")" : "";

      if (this.parent === undefined) {
        move *= -1;
      }

      if (forced !== true && (progress < 0 || progress > 1)) {
        this.$el.addClass("rellax-hidden");
        return;
      }

      this.$el.removeClass("rellax-hidden");

      this.$el.data("progress", progress);

      if (this.$el.is(this.options.container)) {
        this.$el.css("transform", "translate3d(0," + -lastScrollY + "px,0)");
      } else {
        this.$el.css(
          "transform",
          "translate3d(0," + move + "px,0) " + scaleTransform
        );
      }
    },
    _getProgress: function () {
      if (this.parent !== undefined) {
        return parseFloat(this.$parent.data("progress"));
      } else {
        return (
          (lastScrollY - this.offset.top + windowHeight) /
          (windowHeight + this.height)
        );
      }
    },
  });

  $.fn.rellax = function (options) {
    return this.each(function () {
      var element = $.data(this, "plugin_" + Rellax),
        idx;

      if (typeof options !== "string" && typeof element === "undefined") {
        $.data(this, "plugin_" + Rellax, new Rellax(this, options));
      } else {
        if (options === "destroy") {
          idx = elements.indexOf(element);
          if (idx > -1) {
            elements[idx]._resetElement();
            elements[idx].$el.removeClass("rellax-element rellax-hidden");
            $.removeData(this, "plugin_" + Rellax);
            elements.splice(idx, 1);
          }
        }
      }
    });
  };

  $.fn.rellax.defaults = {
    amount: 0.5,
    bleed: 0,
    scale: 1,
    container: "[data-rellax-container]",
  };

  var $window = $(window),
    windowWidth = window.screen.width || window.innerWidth,
    windowHeight = window.screen.height || window.innerHeight,
    lastScrollY =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0),
    frameRendered = true,
    elements = [];

  function render() {
    if (frameRendered !== true) {
      updateAll();
    }
    window.requestAnimationFrame(render);
    frameRendered = true;
  }

  function updateAll(forced) {
    $.each(elements, function (i, element) {
      element._updatePosition(forced);
    });
  }

  function resetAll() {
    $.each(elements, function (i, element) {
      element._resetElement();
    });
  }

  function reloadAll() {
    $.each(elements, function (i, element) {
      element._reloadElement();
    });
  }

  function prepareAll() {
    $.each(elements, function (i, element) {
      element._prepareElement();
    });
  }

  function setHeights() {
    $.each(elements, function (i, element) {
      element._setParentHeight();
    });
  }

  function badRestart() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    setHeights();
    resetAll();
    reloadAll();
    prepareAll();
    updateAll(true);
    $(window).trigger("rellax:restart");
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  function bindEvents() {
    var restart = debounce(badRestart, 300);

    $(document).ready(render);

    $window.on("scroll", function () {
      if (frameRendered === true) {
        lastScrollY =
          (window.pageYOffset || document.documentElement.scrollTop) -
          (document.documentElement.clientTop || 0);
      }
      frameRendered = false;
    });

    $window.on("rellax", restart);
  }

  bindEvents();
})(jQuery, window, document);

/* ==== RESPOND JS ==== */

/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia =
  window.matchMedia ||
  (function (a) {
    "use strict";
    var c,
      d = a.documentElement,
      e = d.firstElementChild || d.firstChild,
      f = a.createElement("body"),
      g = a.createElement("div");
    return (
      (g.id = "mq-test-1"),
      (g.style.cssText = "position:absolute;top:-100em"),
      (f.style.background = "none"),
      f.appendChild(g),
      function (a) {
        return (
          (g.innerHTML =
            '&shy;<style media="' +
            a +
            '"> #mq-test-1 { width: 42px; }</style>'),
          d.insertBefore(f, e),
          (c = 42 === g.offsetWidth),
          d.removeChild(f),
          {
            matches: c,
            media: a,
          }
        );
      }
    );
  })(document);

/*! Respond.js v1.3.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function (a) {
  "use strict";
  function x() {
    u(!0);
  }

  var b = {};
  if (
    ((a.respond = b),
    (b.update = function () {}),
    (b.mediaQueriesSupported =
      a.matchMedia && a.matchMedia("only all").matches),
    !b.mediaQueriesSupported)
  ) {
    var q,
      r,
      t,
      c = a.document,
      d = c.documentElement,
      e = [],
      f = [],
      g = [],
      h = {},
      i = 30,
      j = c.getElementsByTagName("head")[0] || d,
      k = c.getElementsByTagName("base")[0],
      l = j.getElementsByTagName("link"),
      m = [],
      n = function () {
        for (var b = 0; l.length > b; b++) {
          var c = l[b],
            d = c.href,
            e = c.media,
            f = c.rel && "stylesheet" === c.rel.toLowerCase();
          d &&
            f &&
            !h[d] &&
            (c.styleSheet && c.styleSheet.rawCssText
              ? (p(c.styleSheet.rawCssText, d, e), (h[d] = !0))
              : ((!/^([a-zA-Z:]*\/\/)/.test(d) && !k) ||
                  d.replace(RegExp.$1, "").split("/")[0] === a.location.host) &&
                m.push({
                  href: d,
                  media: e,
                }));
        }
        o();
      },
      o = function () {
        if (m.length) {
          var b = m.shift();
          v(b.href, function (c) {
            p(c, b.href, b.media),
              (h[b.href] = !0),
              a.setTimeout(function () {
                o();
              }, 0);
          });
        }
      },
      p = function (a, b, c) {
        var d = a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
          g = (d && d.length) || 0;
        b = b.substring(0, b.lastIndexOf("/"));
        var h = function (a) {
            return a.replace(
              /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
              "$1" + b + "$2$3"
            );
          },
          i = !g && c;
        b.length && (b += "/"), i && (g = 1);
        for (var j = 0; g > j; j++) {
          var k, l, m, n;
          i
            ? ((k = c), f.push(h(a)))
            : ((k = d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1),
              f.push(RegExp.$2 && h(RegExp.$2))),
            (m = k.split(",")),
            (n = m.length);
          for (var o = 0; n > o; o++)
            (l = m[o]),
              e.push({
                media:
                  (l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) &&
                    RegExp.$2) ||
                  "all",
                rules: f.length - 1,
                hasquery: l.indexOf("(") > -1,
                minw:
                  l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) &&
                  parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                maxw:
                  l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/) &&
                  parseFloat(RegExp.$1) + (RegExp.$2 || ""),
              });
        }
        u();
      },
      s = function () {
        var a,
          b = c.createElement("div"),
          e = c.body,
          f = !1;
        return (
          (b.style.cssText = "position:absolute;font-size:1em;width:1em"),
          e ||
            ((e = f = c.createElement("body")), (e.style.background = "none")),
          e.appendChild(b),
          d.insertBefore(e, d.firstChild),
          (a = b.offsetWidth),
          f ? d.removeChild(e) : e.removeChild(b),
          (a = t = parseFloat(a))
        );
      },
      u = function (b) {
        var h = "clientWidth",
          k = d[h],
          m = ("CSS1Compat" === c.compatMode && k) || c.body[h] || k,
          n = {},
          o = l[l.length - 1],
          p = new Date().getTime();
        if (b && q && i > p - q)
          return a.clearTimeout(r), (r = a.setTimeout(u, i)), void 0;
        q = p;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var w = e[v],
              x = w.minw,
              y = w.maxw,
              z = null === x,
              A = null === y,
              B = "em";
            x && (x = parseFloat(x) * (x.indexOf(B) > -1 ? t || s() : 1)),
              y && (y = parseFloat(y) * (y.indexOf(B) > -1 ? t || s() : 1)),
              (w.hasquery && ((z && A) || !(z || m >= x) || !(A || y >= m))) ||
                (n[w.media] || (n[w.media] = []), n[w.media].push(f[w.rules]));
          }
        for (var C in g)
          g.hasOwnProperty(C) &&
            g[C] &&
            g[C].parentNode === j &&
            j.removeChild(g[C]);
        for (var D in n)
          if (n.hasOwnProperty(D)) {
            var E = c.createElement("style"),
              F = n[D].join("\n");
            (E.type = "text/css"),
              (E.media = D),
              j.insertBefore(E, o.nextSibling),
              E.styleSheet
                ? (E.styleSheet.cssText = F)
                : E.appendChild(c.createTextNode(F)),
              g.push(E);
          }
      },
      v = function (a, b) {
        var c = w();
        c &&
          (c.open("GET", a, !0),
          (c.onreadystatechange = function () {
            4 !== c.readyState ||
              (200 !== c.status && 304 !== c.status) ||
              b(c.responseText);
          }),
          4 !== c.readyState && c.send(null));
      },
      w = (function () {
        var b = !1;
        try {
          b = new a.XMLHttpRequest();
        } catch (c) {
          b = new a.ActiveXObject("Microsoft.XMLHTTP");
        }
        return function () {
          return b;
        };
      })();
    n(),
      (b.update = n),
      a.addEventListener
        ? a.addEventListener("resize", x, !1)
        : a.attachEvent && a.attachEvent("onresize", x);
  }
})(this);

// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeStamp",
    "trace",
    "warn",
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

/*!
 Autosize v1.17.8 - 2013-09-07
 Automatically adjust textarea height based on user input.
 (c) 2013 Jack Moore - http://www.jacklmoore.com/autosize
 license: http://www.opensource.org/licenses/mit-license.php
 */
(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(window.jQuery || window.$);
})(function (e) {
  var t,
    o = {
      className: "autosizejs",
      append: "",
      callback: !1,
      resizeDelay: 10,
    },
    i =
      '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
    n = [
      "fontFamily",
      "fontSize",
      "fontWeight",
      "fontStyle",
      "letterSpacing",
      "textTransform",
      "wordSpacing",
      "textIndent",
    ],
    s = e(i).data("autosize", !0)[0];
  (s.style.lineHeight = "99px"),
    "99px" === e(s).css("lineHeight") && n.push("lineHeight"),
    (s.style.lineHeight = ""),
    (e.fn.autosize = function (i) {
      return this.length
        ? ((i = e.extend({}, o, i || {})),
          s.parentNode !== document.body && e(document.body).append(s),
          this.each(function () {
            function o() {
              var t, o;
              "getComputedStyle" in window
                ? ((t = window.getComputedStyle(u)),
                  (o = u.getBoundingClientRect().width),
                  e.each(
                    [
                      "paddingLeft",
                      "paddingRight",
                      "borderLeftWidth",
                      "borderRightWidth",
                    ],
                    function (e, i) {
                      o -= parseInt(t[i], 10);
                    }
                  ),
                  (s.style.width = o + "px"))
                : (s.style.width = Math.max(p.width(), 0) + "px");
            }

            function a() {
              var a = {};
              if (
                ((t = u),
                (s.className = i.className),
                (d = parseInt(p.css("maxHeight"), 10)),
                e.each(n, function (e, t) {
                  a[t] = p.css(t);
                }),
                e(s).css(a),
                o(),
                window.chrome)
              ) {
                var r = u.style.width;
                (u.style.width = "0px"), u.offsetWidth, (u.style.width = r);
              }
            }

            function r() {
              var e, n;
              t !== u ? a() : o(),
                (s.value = u.value + i.append),
                (s.style.overflowY = u.style.overflowY),
                (n = parseInt(u.style.height, 10)),
                (s.scrollTop = 0),
                (s.scrollTop = 9e4),
                (e = s.scrollTop),
                d && e > d
                  ? ((u.style.overflowY = "scroll"), (e = d))
                  : ((u.style.overflowY = "hidden"), c > e && (e = c)),
                (e += f),
                n !== e &&
                  ((u.style.height = e + "px"), w && i.callback.call(u, u));
            }

            function l() {
              clearTimeout(h),
                (h = setTimeout(function () {
                  var e = p.width();
                  e !== g && ((g = e), r());
                }, parseInt(i.resizeDelay, 10)));
            }

            var d,
              c,
              h,
              u = this,
              p = e(u),
              f = 0,
              w = e.isFunction(i.callback),
              z = {
                height: u.style.height,
                overflow: u.style.overflow,
                overflowY: u.style.overflowY,
                wordWrap: u.style.wordWrap,
                resize: u.style.resize,
              },
              g = p.width();
            p.data("autosize") ||
              (p.data("autosize", !0),
              ("border-box" === p.css("box-sizing") ||
                "border-box" === p.css("-moz-box-sizing") ||
                "border-box" === p.css("-webkit-box-sizing")) &&
                (f = p.outerHeight() - p.height()),
              (c = Math.max(
                parseInt(p.css("minHeight"), 10) - f || 0,
                p.height()
              )),
              p.css({
                overflow: "hidden",
                overflowY: "hidden",
                wordWrap: "break-word",
                resize:
                  "none" === p.css("resize") || "vertical" === p.css("resize")
                    ? "none"
                    : "horizontal",
              }),
              "onpropertychange" in u
                ? "oninput" in u
                  ? p.on("input.autosize keyup.autosize", r)
                  : p.on("propertychange.autosize", function () {
                      "value" === event.propertyName && r();
                    })
                : p.on("input.autosize", r),
              i.resizeDelay !== !1 && e(window).on("resize.autosize", l),
              p.on("autosize.resize", r),
              p.on("autosize.resizeIncludeStyle", function () {
                (t = null), r();
              }),
              p.on("autosize.destroy", function () {
                (t = null),
                  clearTimeout(h),
                  e(window).off("resize", l),
                  p
                    .off("autosize")
                    .off(".autosize")
                    .css(z)
                    .removeData("autosize");
              }),
              r());
          }))
        : this;
    });
});

// Place any jQuery/helper plugins in here.

/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
(function ($) {
  var focused = true;

  //FlexSlider: Object Instance
  $.flexslider = function (el, options) {
    var slider = $(el);

    // making variables public

    //if rtl value was not passed and html is in rtl..enable it by default.
    if (typeof options.rtl == "undefined" && $("html").attr("dir") == "rtl") {
      options.rtl = true;
    }
    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
      msGesture =
        window.navigator &&
        window.navigator.msPointerEnabled &&
        window.MSGesture,
      touch =
        ("ontouchstart" in window ||
          msGesture ||
          (window.DocumentTouch && document instanceof DocumentTouch)) &&
        slider.vars.touch,
      // deprecating this idea, as devices are being released with both of these events
      eventType = "click touchend MSPointerUp keyup",
      watchedEvent = "",
      watchedEventClearTimer,
      vertical = slider.vars.direction === "vertical",
      reverse = slider.vars.reverse,
      carousel = slider.vars.itemWidth > 0,
      fade = slider.vars.animation === "fade",
      asNav = slider.vars.asNavFor !== "",
      methods = {};

    // Store a reference to the slider object
    $.data(el, "flexslider", slider);

    // Private slider methods
    methods = {
      init: function () {
        slider.animating = false;
        // Get current slide and make sure it is a number
        slider.currentSlide = parseInt(
          slider.vars.startAt ? slider.vars.startAt : 0,
          10
        );
        if (isNaN(slider.currentSlide)) {
          slider.currentSlide = 0;
        }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd =
          slider.currentSlide === 0 || slider.currentSlide === slider.last;
        slider.containerSelector = slider.vars.selector.substr(
          0,
          slider.vars.selector.search(" ")
        );
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        // SYNC:
        slider.syncExists = $(slider.vars.sync).length > 0;
        // SLIDE:
        if (slider.vars.animation === "slide") {
          slider.vars.animation = "swing";
        }
        slider.prop = vertical
          ? "top"
          : slider.vars.rtl
          ? "marginRight"
          : "marginLeft";
        slider.args = {};
        // SLIDESHOW:
        slider.manualPause = false;
        slider.stopped = false;
        //PAUSE WHEN INVISIBLE
        slider.started = false;
        slider.startTimeout = null;
        // TOUCH/USECSS:
        slider.transitions =
          !slider.vars.video &&
          !fade &&
          slider.vars.useCSS &&
          (function () {
            var obj = document.createElement("div"),
              props = [
                "perspectiveProperty",
                "WebkitPerspective",
                "MozPerspective",
                "OPerspective",
                "msPerspective",
              ];
            for (var i in props) {
              if (obj.style[props[i]] !== undefined) {
                slider.pfx = props[i].replace("Perspective", "").toLowerCase();
                slider.prop = "-" + slider.pfx + "-transform";
                return true;
              }
            }
            return false;
          })();
        slider.isFirefox =
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        slider.ensureAnimationEnd = "";
        // CONTROLSCONTAINER:
        if (slider.vars.controlsContainer !== "")
          slider.controlsContainer =
            $(slider.vars.controlsContainer).length > 0 &&
            $(slider.vars.controlsContainer);
        // MANUAL:
        if (slider.vars.manualControls !== "")
          slider.manualControls =
            $(slider.vars.manualControls).length > 0 &&
            $(slider.vars.manualControls);

        // CUSTOM DIRECTION NAV:
        if (slider.vars.customDirectionNav !== "")
          slider.customDirectionNav =
            $(slider.vars.customDirectionNav).length === 2 &&
            $(slider.vars.customDirectionNav);

        // RANDOMIZE:
        if (slider.vars.randomize) {
          slider.slides.sort(function () {
            return Math.round(Math.random()) - 0.5;
          });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();

        // INIT
        slider.setup("init");

        // CONTROLNAV:
        if (slider.vars.controlNav) {
          methods.controlNav.setup();
        }

        // DIRECTIONNAV:
        if (slider.vars.directionNav) {
          methods.directionNav.setup();
        }

        // KEYBOARD:
        if (
          slider.vars.keyboard &&
          ($(slider.containerSelector).length === 1 ||
            slider.vars.multipleKeyboard)
        ) {
          $(document).bind("keyup", function (event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = slider.vars.rtl
                ? keycode === 37
                  ? slider.getTarget("next")
                  : keycode === 39
                  ? slider.getTarget("prev")
                  : false
                : keycode === 39
                ? slider.getTarget("next")
                : keycode === 37
                ? slider.getTarget("prev")
                : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }
        // MOUSEWHEEL:
        if (slider.vars.mousewheel) {
          slider.bind("mousewheel", function (event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target =
              delta < 0 ? slider.getTarget("next") : slider.getTarget("prev");
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }

        // PAUSEPLAY
        if (slider.vars.pausePlay) {
          methods.pausePlay.setup();
        }

        //PAUSE WHEN INVISIBLE
        if (slider.vars.slideshow && slider.vars.pauseInvisible) {
          methods.pauseInvisible.init();
        }

        // SLIDSESHOW
        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(
              function () {
                if (!slider.manualPlay && !slider.manualPause) {
                  slider.pause();
                }
              },
              function () {
                if (
                  !slider.manualPause &&
                  !slider.manualPlay &&
                  !slider.stopped
                ) {
                  slider.play();
                }
              }
            );
          }
          // initialize animation
          //If we're visible, or we don't use PageVisibility API
          if (
            !slider.vars.pauseInvisible ||
            !methods.pauseInvisible.isHidden()
          ) {
            slider.vars.initDelay > 0
              ? (slider.startTimeout = setTimeout(
                  slider.play,
                  slider.vars.initDelay
                ))
              : slider.play();
          }
        }

        // ASNAV:
        if (asNav) {
          methods.asNav.setup();
        }

        // TOUCH
        if (touch && slider.vars.touch) {
          methods.touch();
        }

        // FADE&&SMOOTHHEIGHT || SLIDE:
        if (!fade || (fade && slider.vars.smoothHeight)) {
          $(window).bind("resize orientationchange focus", methods.resize);
        }

        slider.find("img").attr("draggable", "false");

        // API: start() Callback
        setTimeout(function () {
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function () {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(slider.currentItem)
            .addClass(namespace + "active-slide");
          if (!msGesture) {
            slider.slides.on(eventType, function (e) {
              e.preventDefault();
              var $slide = $(this),
                target = $slide.index();
              var posFromX;
              if (slider.vars.rtl) {
                posFromX =
                  -1 * ($slide.offset().right - $(slider).scrollLeft()); // Find position of slide relative to right of slider container
              } else {
                posFromX = $slide.offset().left - $(slider).scrollLeft(); // Find position of slide relative to left of slider container
              }
              if (
                posFromX <= 0 &&
                $slide.hasClass(namespace + "active-slide")
              ) {
                slider.flexAnimate(slider.getTarget("prev"), true);
              } else if (
                !$(slider.vars.asNavFor).data("flexslider").animating &&
                !$slide.hasClass(namespace + "active-slide")
              ) {
                slider.direction =
                  slider.currentItem < target ? "next" : "prev";
                slider.flexAnimate(
                  target,
                  slider.vars.pauseOnAction,
                  false,
                  true,
                  true
                );
              }
            });
          } else {
            el._slider = slider;
            slider.slides.each(function () {
              var that = this;
              that._gesture = new MSGesture();
              that._gesture.target = that;
              that.addEventListener(
                "MSPointerDown",
                function (e) {
                  e.preventDefault();
                  if (e.currentTarget._gesture) {
                    e.currentTarget._gesture.addPointer(e.pointerId);
                  }
                },
                false
              );
              that.addEventListener("MSGestureTap", function (e) {
                e.preventDefault();
                var $slide = $(this),
                  target = $slide.index();
                if (
                  !$(slider.vars.asNavFor).data("flexslider").animating &&
                  !$slide.hasClass("active")
                ) {
                  slider.direction =
                    slider.currentItem < target ? "next" : "prev";
                  slider.flexAnimate(
                    target,
                    slider.vars.pauseOnAction,
                    false,
                    true,
                    true
                  );
                }
              });
            });
          }
        },
      },
      controlNav: {
        setup: function () {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else {
            // MANUALCONTROLS:
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function () {
          var type =
              slider.vars.controlNav === "thumbnails"
                ? "control-thumbs"
                : "control-paging",
            j = 1,
            item,
            slide;

          slider.controlNavScaffold = $(
            '<ol class="' +
              namespace +
              "control-nav " +
              namespace +
              type +
              '"></ol>'
          );

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);

              if (undefined === slide.attr("data-thumb-alt")) {
                slide.attr("data-thumb-alt", "");
              }

              item = $("<a></a>").attr("href", "#").text(j);
              if (slider.vars.controlNav === "thumbnails") {
                item = $("<img/>").attr("src", slide.attr("data-thumb"));
              }

              if ("" !== slide.attr("data-thumb-alt")) {
                item.attr("alt", slide.attr("data-thumb-alt"));
              }

              if (
                "thumbnails" === slider.vars.controlNav &&
                true === slider.vars.thumbCaptions
              ) {
                var captn = slide.attr("data-thumbcaption");
                if ("" !== captn && undefined !== captn) {
                  var caption = $("<span></span>")
                    .addClass(namespace + "caption")
                    .text(captn);
                  item.append(caption);
                }
              }

              var liElement = $("<li>");
              item.appendTo(liElement);
              liElement.append("</li>");

              slider.controlNavScaffold.append(liElement);
              j++;
            }
          }

          // CONTROLSCONTAINER:
          slider.controlsContainer
            ? $(slider.controlsContainer).append(slider.controlNavScaffold)
            : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate(
            "a, img",
            eventType,
            function (event) {
              event.preventDefault();

              if (watchedEvent === "" || watchedEvent === event.type) {
                var $this = $(this),
                  target = slider.controlNav.index($this);

                if (!$this.hasClass(namespace + "active")) {
                  slider.direction =
                    target > slider.currentSlide ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
              }

              // setup flags to prevent event duplication
              if (watchedEvent === "") {
                watchedEvent = event.type;
              }
              methods.setToClearWatchedEvent();
            }
          );
        },
        setupManual: function () {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function (event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + "active")) {
                target > slider.currentSlide
                  ? (slider.direction = "next")
                  : (slider.direction = "prev");
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function () {
          var selector = slider.vars.controlNav === "thumbnails" ? "img" : "a";
          slider.controlNav = $(
            "." + namespace + "control-nav li " + selector,
            slider.controlsContainer ? slider.controlsContainer : slider
          );
        },
        active: function () {
          slider.controlNav
            .removeClass(namespace + "active")
            .eq(slider.animatingTo)
            .addClass(namespace + "active");
        },
        update: function (action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append(
              $('<li><a href="#">' + slider.count + "</a></li>")
            );
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find("li").remove();
          } else {
            slider.controlNav.eq(pos).closest("li").remove();
          }
          methods.controlNav.set();
          slider.pagingCount > 1 &&
          slider.pagingCount !== slider.controlNav.length
            ? slider.update(pos, action)
            : methods.controlNav.active();
        },
      },
      directionNav: {
        setup: function () {
          var directionNavScaffold = $(
            '<ul class="' +
              namespace +
              'direction-nav"><li class="' +
              namespace +
              'nav-prev"><a class="' +
              namespace +
              'prev" href="#">' +
              slider.vars.prevText +
              '</a></li><li class="' +
              namespace +
              'nav-next"><a class="' +
              namespace +
              'next" href="#">' +
              slider.vars.nextText +
              "</a></li></ul>"
          );

          // CUSTOM DIRECTION NAV:
          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;
            // CONTROLSCONTAINER:
          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider.controlsContainer
            );
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $(
              "." + namespace + "direction-nav li a",
              slider
            );
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function (event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = $(this).hasClass(namespace + "next")
                ? slider.getTarget("next")
                : slider.getTarget("prev");
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function () {
          var disabledClass = namespace + "disabled";
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr("tabindex", "-1");
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "prev")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav
                .removeClass(disabledClass)
                .filter("." + namespace + "next")
                .addClass(disabledClass)
                .attr("tabindex", "-1");
            } else {
              slider.directionNav
                .removeClass(disabledClass)
                .removeAttr("tabindex");
            }
          } else {
            slider.directionNav
              .removeClass(disabledClass)
              .removeAttr("tabindex");
          }
        },
      },
      pausePlay: {
        setup: function () {
          var pausePlayScaffold = $(
            '<div class="' + namespace + 'pauseplay"><a href="#"></a></div>'
          );

          // CONTROLSCONTAINER:
          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $(
              "." + namespace + "pauseplay a",
              slider.controlsContainer
            );
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $("." + namespace + "pauseplay a", slider);
          }

          methods.pausePlay.update(
            slider.vars.slideshow ? namespace + "pause" : namespace + "play"
          );

          slider.pausePlay.bind(eventType, function (event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + "pause")) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }

            // setup flags to prevent event duplication
            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function (state) {
          state === "play"
            ? slider.pausePlay
                .removeClass(namespace + "pause")
                .addClass(namespace + "play")
                .html(slider.vars.playText)
            : slider.pausePlay
                .removeClass(namespace + "play")
                .addClass(namespace + "pause")
                .html(slider.vars.pauseText);
        },
      },
      touch: function () {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if (!msGesture) {
          onTouchStart = function (e) {
            if (slider.animating) {
              e.preventDefault();
            } else if (
              window.navigator.msPointerEnabled ||
              e.touches.length === 1
            ) {
              slider.pause();
              // CAROUSEL:
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              // CAROUSEL:

              // Local vars for X and Y points.
              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                  ? slider.limit -
                    (slider.itemW + slider.vars.itemMargin) *
                      slider.move *
                      slider.animatingTo
                  : carousel && slider.currentSlide === slider.last
                  ? slider.limit
                  : carousel
                  ? (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.currentSlide
                  : reverse
                  ? (slider.last - slider.currentSlide + slider.cloneOffset) *
                    cwidth
                  : (slider.currentSlide + slider.cloneOffset) * cwidth;
              startX = vertical ? localY : localX;
              startY = vertical ? localX : localY;
              el.addEventListener("touchmove", onTouchMove, false);
              el.addEventListener("touchend", onTouchEnd, false);
            }
          };

          onTouchMove = function (e) {
            // Local vars for X and Y points.

            localX = e.touches[0].pageX;
            localY = e.touches[0].pageY;

            dx = vertical
              ? startX - localY
              : (slider.vars.rtl ? -1 : 1) * (startX - localX);
            scrolling = vertical
              ? Math.abs(dx) < Math.abs(localX - startY)
              : Math.abs(dx) < Math.abs(localY - startY);
            var fxms = 500;

            if (!scrolling || Number(new Date()) - startT > fxms) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    dx /
                    ((slider.currentSlide === 0 && dx < 0) ||
                    (slider.currentSlide === slider.last && dx > 0)
                      ? Math.abs(dx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          };

          onTouchEnd = function (e) {
            // finish the touch by undoing the touch session
            el.removeEventListener("touchmove", onTouchMove, false);

            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");

              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    true
                  );
                }
              }
            }
            el.removeEventListener("touchend", onTouchEnd, false);

            startX = null;
            startY = null;
            dx = null;
            offset = null;
          };

          el.addEventListener("touchstart", onTouchStart, false);
        } else {
          el.style.msTouchAction = "none";
          el._gesture = new MSGesture();
          el._gesture.target = el;
          el.addEventListener("MSPointerDown", onMSPointerDown, false);
          el._slider = slider;
          el.addEventListener("MSGestureChange", onMSGestureChange, false);
          el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

          function onMSPointerDown(e) {
            e.stopPropagation();
            if (slider.animating) {
              e.preventDefault();
            } else {
              slider.pause();
              el._gesture.addPointer(e.pointerId);
              accDx = 0;
              cwidth = vertical ? slider.h : slider.w;
              startT = Number(new Date());
              // CAROUSEL:

              offset =
                carousel && reverse && slider.animatingTo === slider.last
                  ? 0
                  : carousel && reverse
                  ? slider.limit -
                    (slider.itemW + slider.vars.itemMargin) *
                      slider.move *
                      slider.animatingTo
                  : carousel && slider.currentSlide === slider.last
                  ? slider.limit
                  : carousel
                  ? (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.currentSlide
                  : reverse
                  ? (slider.last - slider.currentSlide + slider.cloneOffset) *
                    cwidth
                  : (slider.currentSlide + slider.cloneOffset) * cwidth;
            }
          }

          function onMSGestureChange(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            var transX = -e.translationX,
              transY = -e.translationY;

            //Accumulate translations.
            accDx = accDx + (vertical ? transY : transX);
            dx = (slider.vars.rtl ? -1 : 1) * accDx;
            scrolling = vertical
              ? Math.abs(accDx) < Math.abs(-transX)
              : Math.abs(accDx) < Math.abs(-transY);

            if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
              setImmediate(function () {
                el._gesture.stop();
              });

              return;
            }

            if (!scrolling || Number(new Date()) - startT > 500) {
              e.preventDefault();
              if (!fade && slider.transitions) {
                if (!slider.vars.animationLoop) {
                  dx =
                    accDx /
                    ((slider.currentSlide === 0 && accDx < 0) ||
                    (slider.currentSlide === slider.last && accDx > 0)
                      ? Math.abs(accDx) / cwidth + 2
                      : 1);
                }
                slider.setProps(offset + dx, "setTouch");
              }
            }
          }

          function onMSGestureEnd(e) {
            e.stopPropagation();
            var slider = e.target._slider;
            if (!slider) {
              return;
            }
            if (
              slider.animatingTo === slider.currentSlide &&
              !scrolling &&
              !(dx === null)
            ) {
              var updateDx = reverse ? -dx : dx,
                target =
                  updateDx > 0
                    ? slider.getTarget("next")
                    : slider.getTarget("prev");

              if (
                slider.canAdvance(target) &&
                ((Number(new Date()) - startT < 550 &&
                  Math.abs(updateDx) > 50) ||
                  Math.abs(updateDx) > cwidth / 2)
              ) {
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              } else {
                if (!fade) {
                  slider.flexAnimate(
                    slider.currentSlide,
                    slider.vars.pauseOnAction,
                    true
                  );
                }
              }
            }

            startX = null;
            startY = null;
            dx = null;
            offset = null;
            accDx = 0;
          }
        }
      },
      resize: function () {
        if (!slider.animating && slider.is(":visible")) {
          if (!carousel) {
            slider.doMath();
          }

          if (fade) {
            // SMOOTH HEIGHT:
            methods.smoothHeight();
          } else if (carousel) {
            //CAROUSEL:
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          } else if (vertical) {
            //VERTICAL:
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            // SMOOTH HEIGHT:
            if (slider.vars.smoothHeight) {
              methods.smoothHeight();
            }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function (dur) {
        if (!vertical || fade) {
          var $obj = fade ? slider : slider.viewport;
          dur
            ? $obj.animate(
                { height: slider.slides.eq(slider.animatingTo).innerHeight() },
                dur
              )
            : $obj.innerHeight(
                slider.slides.eq(slider.animatingTo).innerHeight()
              );
        }
      },
      sync: function (action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
          target = slider.animatingTo;

        switch (action) {
          case "animate":
            $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
            break;
          case "play":
            if (!$obj.playing && !$obj.asNav) {
              $obj.play();
            }
            break;
          case "pause":
            $obj.pause();
            break;
        }
      },
      uniqueID: function ($clone) {
        // Append _clone to current level and children elements with id attributes
        $clone
          .filter("[id]")
          .add($clone.find("[id]"))
          .each(function () {
            var $this = $(this);
            $this.attr("id", $this.attr("id") + "_clone");
          });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function () {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname =
              visProp.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(evtname, function () {
              if (methods.pauseInvisible.isHidden()) {
                if (slider.startTimeout) {
                  clearTimeout(slider.startTimeout); //If clock is ticking, stop timer and prevent from starting while invisible
                } else {
                  slider.pause(); //Or just pause
                }
              } else {
                if (slider.started) {
                  slider.play(); //Initiated before, just play
                } else {
                  if (slider.vars.initDelay > 0) {
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); //Didn't init before: simply init or wait for it
                  }
                }
              }
            });
          }
        },
        isHidden: function () {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function () {
          var prefixes = ["webkit", "moz", "ms", "o"];
          // if 'hidden' is natively supported just return it
          if ("hidden" in document) {
            return "hidden";
          }
          // otherwise loop over all the known prefixes until we find one
          for (var i = 0; i < prefixes.length; i++) {
            if (prefixes[i] + "Hidden" in document) {
              return prefixes[i] + "Hidden";
            }
          }
          // otherwise it's not supported
          return null;
        },
      },
      setToClearWatchedEvent: function () {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function () {
          watchedEvent = "";
        }, 3000);
      },
    };

    // public methods
    slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = target > slider.currentSlide ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1)
        slider.direction = slider.currentItem < target ? "next" : "prev";

      if (
        !slider.animating &&
        (slider.canAdvance(target, fromNav) || override) &&
        slider.is(":visible")
      ) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data("flexslider");
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = slider.currentItem < target ? "next" : "prev";
          master.direction = slider.direction;

          if (
            Math.ceil((target + 1) / slider.visible) - 1 !==
              slider.currentSlide &&
            target !== 0
          ) {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            target = Math.floor(target / slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides
              .removeClass(namespace + "active-slide")
              .eq(target)
              .addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        // SLIDESHOW:
        if (pause) {
          slider.pause();
        }

        // API: before() animation Callback
        slider.vars.before(slider);

        // SYNC:
        if (slider.syncExists && !fromNav) {
          methods.sync("animate");
        }

        // CONTROLNAV
        if (slider.vars.controlNav) {
          methods.controlNav.active();
        }

        // !CAROUSEL:
        // CANDIDATE: slide active class (for add/remove slide)
        if (!carousel) {
          slider.slides
            .removeClass(namespace + "active-slide")
            .eq(target)
            .addClass(namespace + "active-slide");
        }

        // INFINITE LOOP:
        // CANDIDATE: atEnd
        slider.atEnd = target === 0 || target === slider.last;

        // DIRECTIONNAV:
        if (slider.vars.directionNav) {
          methods.directionNav.update();
        }

        if (target === slider.last) {
          // API: end() of cycle Callback
          slider.vars.end(slider);
          // SLIDESHOW && !INFINITE LOOP:
          if (!slider.vars.animationLoop) {
            slider.pause();
          }
        }

        // SLIDE:
        if (!fade) {
          var dimension = vertical
              ? slider.slides.filter(":first").height()
              : slider.computedW,
            margin,
            slideString,
            calcNext;

          // INFINITE LOOP / REVERSE:
          if (carousel) {
            margin = slider.vars.itemMargin;
            calcNext =
              (slider.itemW + margin) * slider.move * slider.animatingTo;
            slideString =
              calcNext > slider.limit && slider.visible !== 1
                ? slider.limit
                : calcNext;
          } else if (
            slider.currentSlide === 0 &&
            target === slider.count - 1 &&
            slider.vars.animationLoop &&
            slider.direction !== "next"
          ) {
            slideString = reverse
              ? (slider.count + slider.cloneOffset) * dimension
              : 0;
          } else if (
            slider.currentSlide === slider.last &&
            target === 0 &&
            slider.vars.animationLoop &&
            slider.direction !== "prev"
          ) {
            slideString = reverse ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = reverse
              ? (slider.count - 1 - target + slider.cloneOffset) * dimension
              : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }

            // Unbind previous transitionEnd events and re-bind new transitionEnd event
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind(
              "webkitTransitionEnd transitionend",
              function () {
                clearTimeout(slider.ensureAnimationEnd);
                slider.wrapup(dimension);
              }
            );

            // Insurance for the ever-so-fickle transitionEnd event
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function () {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);
          } else {
            slider.container.animate(
              slider.args,
              slider.vars.animationSpeed,
              slider.vars.easing,
              function () {
                slider.wrapup(dimension);
              }
            );
          }
        } else {
          // FADE:
          if (!touch) {
            slider.slides
              .eq(slider.currentSlide)
              .css({ zIndex: 1 })
              .animate(
                { opacity: 0 },
                slider.vars.animationSpeed,
                slider.vars.easing
              );
            slider.slides
              .eq(target)
              .css({ zIndex: 2 })
              .animate(
                { opacity: 1 },
                slider.vars.animationSpeed,
                slider.vars.easing,
                slider.wrapup
              );
          } else {
            slider.slides
              .eq(slider.currentSlide)
              .css({ opacity: 0, zIndex: 1 });
            slider.slides.eq(target).css({ opacity: 1, zIndex: 2 });
            slider.wrapup(dimension);
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) {
          methods.smoothHeight(slider.vars.animationSpeed);
        }
      }
    };
    slider.wrapup = function (dimension) {
      // SLIDE:
      if (!fade && !carousel) {
        if (
          slider.currentSlide === 0 &&
          slider.animatingTo === slider.last &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpEnd");
        } else if (
          slider.currentSlide === slider.last &&
          slider.animatingTo === 0 &&
          slider.vars.animationLoop
        ) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      // API: after() animation Callback
      slider.vars.after(slider);
    };

    // SLIDESHOW:
    slider.animateSlides = function () {
      if (!slider.animating && focused) {
        slider.flexAnimate(slider.getTarget("next"));
      }
    };
    // SLIDESHOW:
    slider.pause = function () {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("play");
      }
      // SYNC:
      if (slider.syncExists) {
        methods.sync("pause");
      }
    };
    // SLIDESHOW:
    slider.play = function () {
      if (slider.playing) {
        clearInterval(slider.animatedSlides);
      }
      slider.animatedSlides =
        slider.animatedSlides ||
        setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      // PAUSEPLAY:
      if (slider.vars.pausePlay) {
        methods.pausePlay.update("pause");
      }
      // SYNC:
      if (slider.syncExists) {
        methods.sync("play");
      }
    };
    // STOP:
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function (target, fromNav) {
      // ASNAV:
      var last = asNav ? slider.pagingCount - 1 : slider.last;
      return fromNav
        ? true
        : asNav &&
          slider.currentItem === slider.count - 1 &&
          target === 0 &&
          slider.direction === "prev"
        ? true
        : asNav &&
          slider.currentItem === 0 &&
          target === slider.pagingCount - 1 &&
          slider.direction !== "next"
        ? false
        : target === slider.currentSlide && !asNav
        ? false
        : slider.vars.animationLoop
        ? true
        : slider.atEnd &&
          slider.currentSlide === 0 &&
          target === last &&
          slider.direction !== "next"
        ? false
        : slider.atEnd &&
          slider.currentSlide === last &&
          target === 0 &&
          slider.direction === "next"
        ? false
        : true;
    };
    slider.getTarget = function (dir) {
      slider.direction = dir;
      if (dir === "next") {
        return slider.currentSlide === slider.last
          ? 0
          : slider.currentSlide + 1;
      } else {
        return slider.currentSlide === 0
          ? slider.last
          : slider.currentSlide - 1;
      }
    };

    // SLIDE:
    slider.setProps = function (pos, special, dur) {
      var target = (function () {
        var posCheck = pos
            ? pos
            : (slider.itemW + slider.vars.itemMargin) *
              slider.move *
              slider.animatingTo,
          posCalc = (function () {
            if (carousel) {
              return special === "setTouch"
                ? pos
                : reverse && slider.animatingTo === slider.last
                ? 0
                : reverse
                ? slider.limit -
                  (slider.itemW + slider.vars.itemMargin) *
                    slider.move *
                    slider.animatingTo
                : slider.animatingTo === slider.last
                ? slider.limit
                : posCheck;
            } else {
              switch (special) {
                case "setTotal":
                  return reverse
                    ? (slider.count -
                        1 -
                        slider.currentSlide +
                        slider.cloneOffset) *
                        pos
                    : (slider.currentSlide + slider.cloneOffset) * pos;
                case "setTouch":
                  return reverse ? pos : pos;
                case "jumpEnd":
                  return reverse ? pos : slider.count * pos;
                case "jumpStart":
                  return reverse ? slider.count * pos : pos;
                default:
                  return pos;
              }
            }
          })();

        return posCalc * (slider.vars.rtl ? 1 : -1) + "px";
      })();

      if (slider.transitions) {
        if (slider.isFirefox) {
          target = vertical
            ? "translate3d(0," + target + ",0)"
            : "translate3d(" + (parseInt(target) + "px") + ",0,0)";
        } else {
          target = vertical
            ? "translate3d(0," + target + ",0)"
            : "translate3d(" +
              ((slider.vars.rtl ? -1 : 1) * parseInt(target) + "px") +
              ",0,0)";
        }
        dur = dur !== undefined ? dur / 1000 + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
        slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) {
        slider.container.css(slider.args);
      }

      slider.container.css("transform", target);
    };

    slider.setup = function (type) {
      // SLIDE:
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>')
            .css({ overflow: "hidden", position: "relative" })
            .appendTo(slider)
            .append(slider.container);
          // INFINITE LOOP:
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          // REVERSE:
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        // INFINITE LOOP && !CAROUSEL:
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          // clear out old clones
          if (type !== "init") {
            slider.container.find(".clone").remove();
          }
          slider.container
            .append(
              methods
                .uniqueID(slider.slides.first().clone().addClass("clone"))
                .attr("aria-hidden", "true")
            )
            .prepend(
              methods
                .uniqueID(slider.slides.last().clone().addClass("clone"))
                .attr("aria-hidden", "true")
            );
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = reverse
          ? slider.count - 1 - slider.currentSlide + slider.cloneOffset
          : slider.currentSlide + slider.cloneOffset;
        // VERTICAL:
        if (vertical && !carousel) {
          slider.container
            .height((slider.count + slider.cloneCount) * 200 + "%")
            .css("position", "absolute")
            .width("100%");
          setTimeout(
            function () {
              slider.newSlides.css({ display: "block" });
              slider.doMath();
              slider.viewport.height(slider.h);
              slider.setProps(sliderOffset * slider.h, "init");
            },
            type === "init" ? 100 : 0
          );
        } else {
          slider.container.width(
            (slider.count + slider.cloneCount) * 200 + "%"
          );
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(
            function () {
              slider.doMath();
              if (slider.vars.rtl) {
                if (slider.isFirefox) {
                  slider.newSlides.css({
                    width: slider.computedW,
                    marginRight: slider.computedM,
                    float: "right",
                    display: "block",
                  });
                } else {
                  slider.newSlides.css({
                    width: slider.computedW,
                    marginRight: slider.computedM,
                    float: "left",
                    display: "block",
                  });
                }
              } else {
                slider.newSlides.css({
                  width: slider.computedW,
                  marginRight: slider.computedM,
                  float: "left",
                  display: "block",
                });
              }
              // SMOOTH HEIGHT:
              if (slider.vars.smoothHeight) {
                methods.smoothHeight();
              }
            },
            type === "init" ? 100 : 0
          );
        }
      } else {
        // FADE:
        if (slider.vars.rtl) {
          slider.slides.css({
            width: "100%",
            float: "right",
            marginLeft: "-100%",
            position: "relative",
          });
        } else {
          slider.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative",
          });
        }
        if (type === "init") {
          if (!touch) {
            //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides
                .css({ opacity: 0, display: "block", zIndex: 1 })
                .eq(slider.currentSlide)
                .css({ zIndex: 2 })
                .css({ opacity: 1 });
            } else {
              slider.slides
                .css({ opacity: 0, display: "block", zIndex: 1 })
                .eq(slider.currentSlide)
                .css({ zIndex: 2 })
                .animate(
                  { opacity: 1 },
                  slider.vars.animationSpeed,
                  slider.vars.easing
                );
            }
          } else {
            slider.slides
              .css({
                opacity: 0,
                display: "block",
                webkitTransition:
                  "opacity " + slider.vars.animationSpeed / 1000 + "s ease",
                zIndex: 1,
              })
              .eq(slider.currentSlide)
              .css({ opacity: 1, zIndex: 2 });
          }
        }
        // SMOOTH HEIGHT:
        if (slider.vars.smoothHeight) {
          methods.smoothHeight();
        }
      }
      // !CAROUSEL:
      // CANDIDATE: active slide
      if (!carousel) {
        slider.slides
          .removeClass(namespace + "active-slide")
          .eq(slider.currentSlide)
          .addClass(namespace + "active-slide");
      }

      //FlexSlider: init() Callback
      slider.vars.init(slider);
    };

    slider.doMath = function () {
      var slide = slider.slides.first(),
        slideMargin = slider.vars.itemMargin,
        minItems = slider.vars.minItems,
        maxItems = slider.vars.maxItems;

      slider.w =
        slider.viewport === undefined
          ? slider.width()
          : slider.viewport.width();
      if (slider.isFirefox) {
        slider.w = slider.width();
      }
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      // CAROUSEL:
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.itemM = slideMargin;
        slider.minW = minItems ? minItems * slider.itemT : slider.w;
        slider.maxW = maxItems
          ? maxItems * slider.itemT - slideMargin
          : slider.w;
        slider.itemW =
          slider.minW > slider.w
            ? (slider.w - slideMargin * (minItems - 1)) / minItems
            : slider.maxW < slider.w
            ? (slider.w - slideMargin * (maxItems - 1)) / maxItems
            : slider.vars.itemWidth > slider.w
            ? slider.w
            : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w / slider.itemW);
        slider.move =
          slider.vars.move > 0 && slider.vars.move < slider.visible
            ? slider.vars.move
            : slider.visible;
        slider.pagingCount = Math.ceil(
          (slider.count - slider.visible) / slider.move + 1
        );
        slider.last = slider.pagingCount - 1;
        slider.limit =
          slider.pagingCount === 1
            ? 0
            : slider.vars.itemWidth > slider.w
            ? slider.itemW * (slider.count - 1) +
              slideMargin * (slider.count - 1)
            : (slider.itemW + slideMargin) * slider.count -
              slider.w -
              slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.itemM = slideMargin;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
      slider.computedM = slider.itemM;
    };

    slider.update = function (pos, action) {
      slider.doMath();

      // update currentSlide and slider.animatingTo if necessary
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      // update controlNav
      if (slider.vars.controlNav && !slider.manualControls) {
        if (
          (action === "add" && !carousel) ||
          slider.pagingCount > slider.controlNav.length
        ) {
          methods.controlNav.update("add");
        } else if (
          (action === "remove" && !carousel) ||
          slider.pagingCount < slider.controlNav.length
        ) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      // update directionNav
      if (slider.vars.directionNav) {
        methods.directionNav.update();
      }
    };

    slider.addSlide = function (obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      // append new slide
      if (vertical && reverse) {
        pos !== undefined
          ? slider.slides.eq(slider.count - pos).after($obj)
          : slider.container.prepend($obj);
      } else {
        pos !== undefined
          ? slider.slides.eq(pos).before($obj)
          : slider.container.append($obj);
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.update(pos, "add");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      //FlexSlider: added() Callback
      slider.vars.added(slider);
    };
    slider.removeSlide = function (obj) {
      var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;

      // update count
      slider.count -= 1;
      slider.last = slider.count - 1;

      // remove slide
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        vertical && reverse
          ? slider.slides.eq(slider.last).remove()
          : slider.slides.eq(obj).remove();
      }

      // update currentSlide, animatingTo, controlNav, and directionNav
      slider.doMath();
      slider.update(pos, "remove");

      // update slider.slides
      slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
      // re-setup the slider to accomdate new slide
      slider.setup();

      // FlexSlider: removed() Callback
      slider.vars.removed(slider);
    };

    //FlexSlider: Initialize
    methods.init();
  };

  // Ensure the slider isn't focussed if the window loses focus.
  $(window)
    .blur(function (e) {
      focused = false;
    })
    .focus(function (e) {
      focused = true;
    });

  //FlexSlider: Default Settings
  $.flexslider.defaults = {
    namespace: "flex-", //{NEW} String: Prefix string attached to the class of every element generated by the plugin
    selector: ".slides > li", //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
    animation: "fade", //String: Select your animation type, "fade" or "slide"
    easing: "swing", //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
    direction: "horizontal", //String: Select the sliding direction, "horizontal" or "vertical"
    reverse: false, //{NEW} Boolean: Reverse the animation direction
    animationLoop: true, //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
    smoothHeight: false, //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
    startAt: 0, //Integer: The slide that the slider should start on. Array notation (0 = first slide)
    slideshow: true, //Boolean: Animate slider automatically
    slideshowSpeed: 7000, //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 600, //Integer: Set the speed of animations, in milliseconds
    initDelay: 0, //{NEW} Integer: Set an initialization delay, in milliseconds
    randomize: false, //Boolean: Randomize slide order
    fadeFirstSlide: true, //Boolean: Fade in the first slide when animation type is "fade"
    thumbCaptions: false, //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.

    // Usability features
    pauseOnAction: true, //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
    pauseOnHover: false, //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
    pauseInvisible: true, //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
    useCSS: true, //{NEW} Boolean: Slider will use CSS3 transitions if available
    touch: true, //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
    video: false, //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches

    // Primary Controls
    controlNav: true, //Boolean: Create navigation for paging control of each slide? Note: Leave true for manualControls usage
    directionNav: true, //Boolean: Create navigation for previous/next navigation? (true/false)
    prevText: "Previous", //String: Set the text for the "previous" directionNav item
    nextText: "Next", //String: Set the text for the "next" directionNav item

    // Secondary Navigation
    keyboard: true, //Boolean: Allow slider navigating via keyboard left/right keys
    multipleKeyboard: false, //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
    mousewheel: false, //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
    pausePlay: false, //Boolean: Create pause/play dynamic element
    pauseText: "Pause", //String: Set the text for the "pause" pausePlay item
    playText: "Play", //String: Set the text for the "play" pausePlay item

    // Special properties
    controlsContainer: "", //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
    manualControls: "", //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
    customDirectionNav: "", //{NEW} jQuery Object/Selector: Custom prev / next button. Must be two jQuery elements. In order to make the events work they have to have the classes "prev" and "next" (plus namespace)
    sync: "", //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
    asNavFor: "", //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider

    // Carousel Options
    itemWidth: 0, //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
    itemMargin: 0, //{NEW} Integer: Margin between carousel items.
    minItems: 1, //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
    maxItems: 0, //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
    move: 0, //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
    allowOneSlide: true, //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide

    // Browser Specific
    isFirefox: false, // {NEW} Boolean: Set to true when Firefox is the browser used.

    // Callback API
    start: function () {}, //Callback: function(slider) - Fires when the slider loads the first slide
    before: function () {}, //Callback: function(slider) - Fires asynchronously with each slider animation
    after: function () {}, //Callback: function(slider) - Fires after each slider animation completes
    end: function () {}, //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
    added: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is added
    removed: function () {}, //{NEW} Callback: function(slider) - Fires after a slide is removed
    init: function () {}, //{NEW} Callback: function(slider) - Fires after the slider is initially setup
    rtl: false, //{NEW} Boolean: Whether or not to enable RTL mode
  };

  //FlexSlider: Plugin Function
  $.fn.flexslider = function (options) {
    if (options === undefined) {
      options = {};
    }

    if (typeof options === "object") {
      return this.each(function () {
        var $this = $(this),
          selector = options.selector ? options.selector : ".slides > li",
          $slides = $this.find(selector);

        if (
          ($slides.length === 1 && options.allowOneSlide === false) ||
          $slides.length === 0
        ) {
          $slides.fadeIn(400);
          if (options.start) {
            options.start($this);
          }
        } else if ($this.data("flexslider") === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      // Helper strings to quickly perform functions on the slider
      var $slider = $(this).data("flexslider");
      switch (options) {
        case "play":
          $slider.play();
          break;
        case "pause":
          $slider.pause();
          break;
        case "stop":
          $slider.stop();
          break;
        case "next":
          $slider.flexAnimate($slider.getTarget("next"), true);
          break;
        case "prev":
        case "previous":
          $slider.flexAnimate($slider.getTarget("prev"), true);
          break;
        default:
          if (typeof options === "number") {
            $slider.flexAnimate(options, true);
          }
      }
    }
  };
})(jQuery);
(function ($, window, undefined) {
  /* --- DETECT VIEWPORT SIZE --- */

  function browserSize() {
    wh = $(window).height();
    ww = $(window).width();
    dh = $(document).height();
    ar = ww / wh;
  }

  /* --- DETECT PLATFORM --- */

  function platformDetect() {
    $.support.touch = "ontouchend" in document;
    var navUA = navigator.userAgent.toLowerCase(),
      navPlat = navigator.platform.toLowerCase();

    var isiPhone = navPlat.indexOf("iphone"),
      isiPod = navPlat.indexOf("ipod"),
      isAndroidPhone = navPlat.indexOf("android"),
      safari =
        navUA.indexOf("safari") != -1 && navUA.indexOf("chrome") == -1
          ? true
          : false,
      svgSupport = window.SVGAngle ? true : false,
      svgSupportAlt = document.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#BasicStructure",
        "1.1"
      )
        ? true
        : false,
      ff3x = /gecko/i.test(navUA) && /rv:1.9/i.test(navUA) ? true : false;

    ieMobile = navigator.userAgent.match(/Windows Phone/i) ? true : false;
    phone = isiPhone > -1 || isiPod > -1 || isAndroidPhone > -1 ? true : false;
    touch = $.support.touch ? true : false;
    ltie9 = $.support.leadingWhitespace ? false : true;

    var $bod = $("body");

    if (touch) $("html").addClass("touch");
    if (ieMobile) $("html").addClass("is--winmob");
    if (is_android) $("html").addClass("is--ancient-android");
    if (safari) $bod.addClass("safari");
    if (phone) $bod.addClass("phone");
  }
  // /* ====== SHARED VARS ====== */

  var phone, touch, ltie9, dh, ar, fonts, ieMobile;

  var ua = navigator.userAgent;
  var winLoc = window.location.toString();

  var is_webkit = ua.match(/webkit/i);
  var is_firefox = ua.match(/gecko/i);
  var is_newer_ie = ua.match(/msie (9|([1-9][0-9]))/i);
  var is_older_ie = ua.match(/msie/i) && !is_newer_ie;
  var is_ancient_ie = ua.match(/msie 6/i);
  var is_ie = is_ancient_ie || is_older_ie || is_newer_ie;
  var is_mobile_ie = navigator.userAgent.indexOf("IEMobile") !== -1;
  var is_mobile = ua.match(/mobile/i) ? true : false;
  var is_OSX = ua.match(/(iPad|iPhone|iPod|Macintosh)/g) ? true : false;
  var iOS = getIOSVersion(ua);
  var is_EDGE = /Edge\/12./i.test(navigator.userAgent);

  var latestKnownScrollY = -1,
    newScrollY =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0),
    ticking = false;

  if (is_EDGE) {
    jQuery("body").addClass("is-edge");
  }

  var nua = navigator.userAgent;
  var is_android =
    nua.indexOf("Mozilla/5.0") !== -1 &&
    nua.indexOf("Android ") !== -1 &&
    nua.indexOf("AppleWebKit") !== -1 &&
    nua.indexOf("Chrome") === -1;
  var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

  var useTransform = true;
  var use2DTransform = ua.match(/msie 9/i) || winLoc.match(/transform\=2d/i);
  var transform;

  // setting up transform prefixes
  var prefixes = {
    webkit: "webkitTransform",
    firefox: "MozTransform",
    ie: "msTransform",
    w3c: "transform",
  };

  if (useTransform) {
    if (is_webkit) {
      transform = prefixes.webkit;
    } else if (is_firefox) {
      transform = prefixes.firefox;
    } else if (is_newer_ie) {
      transform = prefixes.ie;
    }
  }

  var windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth,
    windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

  /* --- To enable verbose debug add to Theme Options > Custom Code footer -> globalDebug=true; --- */
  var globalDebug = false,
    timestamp;

  /* --- 404 Page --- */
  if (
    typeof window.gifImages !== "undefined" &&
    !window.gifImages instanceof Array &&
    window.gifImages.length !== 0
  ) {
    window.gifImages = [
      "http://i.imgur.com/ShiZM6m.gif",
      "http://i.imgur.com/8ZYNp.gif",
      "http://i.imgur.com/Xb4fq.gif",
      "http://i.imgur.com/UYPLKwN.gif",
      "http://media.tumblr.com/d9e792a91d5391b8a7aa22689d4e2555/tumblr_inline_mwq1hmelce1qmoozl.gif",
      "http://www.teen.com/wp-content/uploads/2013/10/world-without-jennifer-lawrence-gifs-food-uproxx-2.gif",
    ];
  }

  function getGif() {
    return gifImages[Math.floor(Math.random() * gifImages.length)];
  }

  function changeBackground() {
    $(".error404").css("background-image", "url(" + getGif() + ")");
  }

  $(window).on("load", function () {
    if ($(".error404").length) {
      changeBackground();
    }
  });

  $(window).keydown(function (e) {
    if (e.keyCode === 32) {
      changeBackground();
    }
  });

  /* --- Cover Animations Init --- */

  var CoverAnimation = {
    selector: ".article__header",
    initialized: false,
    animated: false,

    initialize: function () {
      if (is_EDGE) {
        return;
      }

      var that = this;

      $(this.selector).each(function (i, header) {
        var $header = $(header),
          $headline = $header.find(".article__headline"),
          timeline = new TimelineMax({ paused: true }),
          $title = $headline.find(".headline__primary"),
          $subtitle = $headline.find(".headline__secondary"),
          $description = $headline.find(".headline__description"),
          $star = $headline.find(".star"),
          $lines = $headline.find(".line"),
          $arrows = $description.find(".arrow"),
          $hr = $description.find("hr"),
          headerTop = $header.offset().top,
          headerHeight = $header.outerHeight();

        $header.find(".pixcode--separator").width($title.width());

        $description.css({ opacity: 1 });
        $description = $description.children().not(".pixcode--separator");
        $description.css({ opacity: 0 });

        // ------ A

        if ($title.length && $title.text().trim().length) {
          timeline.fromTo(
            $title,
            0.72,
            { "letter-spacing": "1em", "margin-right": "-0.9em" },
            {
              "letter-spacing": "0.2em",
              "margin-right": "-0.1em",
              ease: Expo.easeOut,
            }
          );
          timeline.fromTo(
            $title,
            0.89,
            { opacity: 0 },
            { opacity: 1, ease: Expo.easeOut },
            "-=0.72"
          );
          timeline.fromTo(
            $title,
            1,
            { y: 30 },
            { y: 0, ease: Expo.easeOut },
            "-=0.89"
          );
        }

        if ($subtitle.length) {
          timeline.fromTo(
            $subtitle,
            0.65,
            { opacity: 0 },
            { opacity: 1, ease: Quint.easeOut },
            "-=0.65"
          );
          timeline.fromTo(
            $subtitle,
            0.9,
            { y: 30 },
            { y: 0, ease: Quint.easeOut },
            "-=0.65"
          );
        }

        if ($star.length) {
          timeline.fromTo(
            $star,
            0.15,
            { opacity: 0 },
            { opacity: 1, ease: Quint.easeOut },
            "-=0.6"
          );
          timeline.fromTo(
            $star,
            0.55,
            { rotation: -270 },
            { rotation: 0, ease: Back.easeOut },
            "-=0.5"
          );
        }

        if ($lines.length) {
          timeline.fromTo(
            $lines,
            0.6,
            { width: 0 },
            { width: "42%", opacity: 1, ease: Quint.easeOut },
            "-=0.55"
          );
          timeline.fromTo(
            $hr,
            0.6,
            { width: 0 },
            { width: "100%", opacity: 1, ease: Quint.easeOut },
            "-=0.6"
          );
        }

        if ($arrows.length) {
          timeline.fromTo(
            $arrows,
            0.2,
            { opacity: 0 },
            { opacity: 1, ease: Quint.easeOut },
            "-=0.27"
          );
        }

        if ($description.length) {
          timeline.fromTo(
            $description,
            0.5,
            { opacity: 0 },
            { opacity: 1, ease: Quint.easeOut },
            "-=0.28"
          );
          timeline.fromTo($description, 0.75, { y: -20 }, { y: 0 }, "-=0.5");
        }

        // ------ B
        timeline.addLabel("animatedIn");

        // if (i == 0) {
        //     timeline.fromTo($headline, 1.08, {y: 0}, {y: 150, ease: Linear.easeNone});
        //     timeline.fromTo($title, 1.08, {y: 0}, {opacity: 0, y: -60, ease: Quad.easeIn}, '-=1.08');
        // } else {
        timeline.fromTo(
          $title,
          1.08,
          { y: 0 },
          { opacity: 0, y: -60, ease: Quad.easeIn }
        );
        // }

        timeline.to(
          $description,
          1.08,
          { y: 60, opacity: 0, ease: Quad.easeIn },
          "-=1.08"
        );
        timeline.to(
          $subtitle,
          1.08,
          { opacity: 0, y: -90, ease: Quad.easeIn },
          "-=1.08"
        );
        timeline.to(
          $lines,
          0.86,
          { width: 0, opacity: 0, ease: Quad.easeIn },
          "-=0.94"
        );
        timeline.to(
          $hr,
          0.86,
          { width: 0, opacity: 0, ease: Quad.easeIn },
          "-=0.86"
        );
        timeline.to($star, 1, { rotation: 180 }, "-=1.08");
        timeline.to($star, 0.11, { opacity: 0 }, "-=0.03");
        timeline.to($arrows, 0.14, { opacity: 0 }, "-=1.08");

        timeline.addLabel("animatedOut");

        // ------ C

        var animatedInTime = timeline.getLabelTime("animatedIn"),
          animatedOutTime = timeline.getLabelTime("animatedOut"),
          start = headerTop + headerHeight / 2 - windowHeight / 2,
          end = start + headerHeight / 2,
          ab,
          bc;

        if (i === 0) {
          start = headerTop;
          end = start + windowHeight / 2;
        }

        ab = animatedInTime / animatedOutTime;
        bc = 1 - ab;

        if (!that.initialized) {
          timeline.tweenTo("animatedIn", {
            onComplete: function () {
              if (Modernizr.touchevents) {
                $headline.data("animated", true);
              }
            },
          });

          if (!Modernizr.touchevents) {
            timeline.tweenTo("animatedOut", {
              onComplete: function () {
                $headline.data("animated", true);
              },
              onUpdate: function () {
                var progress =
                    (1 / (end - start)) * (latestKnownScrollY - start),
                  partialProgress = progress < 0 ? ab : ab + bc * progress,
                  currentProgress = timeline.progress();

                if (Math.abs(partialProgress - currentProgress) < 0.01) {
                  $headline.data("animated", true);
                  this.kill();
                }
              },
            });
          }
        }

        $headline.data("tween", {
          timeline: timeline,
          ab: ab,
          bc: bc,
          start: start,
          end: end,
        });
      });

      that.initialized = true;
      that.update();
    },

    update: function () {
      if (is_EDGE) {
        return;
      }

      var that = this;

      $(this.selector).each(function (i, element) {
        var $headline = $(element).find(".article__headline"),
          options = $headline.data("tween"),
          progress = 0;

        // some sanity check
        // we wouldn't want to divide by 0 - the Universe might come to an end
        if (!empty(options) && options.end - options.start !== 0) {
          // progress on the total timeline (ac)
          progress =
            (1 / (options.end - options.start)) *
            (latestKnownScrollY - options.start);

          // progress on partial timeline (bc)
          // point B being labeled as "animated"
          var partialProgress = options.ab + options.bc * progress;

          $headline.data("progress", partialProgress);

          if (!$headline.data("animated")) {
            return;
          }

          if (0 > progress) {
            partialProgress = options.ab;
          }

          if (1 > partialProgress) {
            options.timeline.progress(partialProgress);
            return;
          }

          options.timeline.progress(1);
        }
      });
    },
  };
  var DownArrow = {
    selector: ".down-arrow",
    $arrow: null,
    timeline: null,
    start: 0,
    end: 0,
    bubble: false,

    initialize: function () {
      var that = this;

      this.$arrow = $(this.selector);

      if (empty(this.$arrow)) {
        return;
      }

      this.start = 0;
      this.end = this.start + 300;
      this.timeline = new TimelineMax({ paused: true });
      this.$next = this.$arrow.closest(".article--page");

      if (!empty(this.$next)) {
        this.nextTop = this.$next.offset().top;
        this.nextHeight = this.$next.outerHeight();
      }

      if (this.$arrow.hasClass("down-arrow--bubble")) {
        this.timeline.to(this.$arrow, 0.2, {
          y: 10,
          opacity: 0,
          ease: Linear.easeNone,
          overwrite: "none",
        });
        this.timeline.to(".blurp--top", 0.3, {
          scaleY: 0,
          ease: Linear.easeNone,
          overwrite: "none",
        });
        this.bubble = true;
      } else {
        this.timeline.to(this.$arrow, 1, {
          y: 100,
          opacity: 0,
          ease: Linear.easeNone,
          overwrite: "none",
        });
      }

      this.$arrow.on("click", function (e) {
        e.preventDefault();

        if (empty(that.$next)) {
          return;
        }

        if (that.$next.is(".article__header")) {
          smoothScrollTo(that.nextTop - windowHeight / 2 + that.nextHeight / 2);
        } else {
          smoothScrollTo(that.nextTop - $(".site-header").height());
        }
      });
    },

    update: function () {
      if (empty(this.$arrow) || this.bubble) {
        return;
      }

      if (Modernizr.touchevents && is_OSX) {
        this.timeline.progress(0);
        return;
      }

      setProgress(this.timeline, this.start, this.end);
    },
  };
  // /* ====== HELPER FUNCTIONS ====== */

  //similar to PHP's empty function
  function empty(data) {
    if (typeof data == "number" || typeof data == "boolean") {
      return false;
    }
    if (typeof data == "undefined" || data === null) {
      return true;
    }
    if (typeof data.length != "undefined") {
      return data.length === 0;
    }
    var count = 0;
    for (var i in data) {
      // if(data.hasOwnProperty(i))
      //
      // This doesn't work in ie8/ie9 due the fact that hasOwnProperty works only on native objects.
      // http://stackoverflow.com/questions/8157700/object-has-no-hasownproperty-method-i-e-its-undefined-ie8
      //
      // for hosts objects we do this
      if (Object.prototype.hasOwnProperty.call(data, i)) {
        count++;
      }
    }
    return count === 0;
  }

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // taken from https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
  function hasParent(e, id) {
    if (!e) return false;
    var el = e.target || e.srcElement || e || false;
    while (el && el.id != id) {
      el = el.parentNode || false;
    }
    return el !== false;
  }

  function mobilecheck() {
    var check = false;
    (function (a) {
      if (
        /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  }

  /* --- Set Query Parameter--- */
  function setQueryParameter(uri, key, value) {
    var re = new RegExp("([?|&])" + key + "=.*?(&|$)", "i");
    separator = uri.indexOf("?") !== -1 ? "&" : "?";
    if (uri.match(re)) {
      return uri.replace(re, "$1" + key + "=" + value + "$2");
    } else {
      return uri + separator + key + "=" + value;
    }
  }

  // http://stackoverflow.com/a/7557433
  function isElementInViewport(el) {
    //special bonus for those using jQuery
    if (el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /*or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /*or $(window).width() */
    );
  }

  function getIOSVersion(ua) {
    ua = ua || navigator.userAgent;
    return (
      parseFloat(
        (
          "" +
          (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(
            ua
          ) || [0, ""])[1]
        )
          .replace("undefined", "3_2")
          .replace("_", ".")
          .replace("_", "")
      ) || false
    );
  }

  function setProgress(timeline, start, end) {
    var progress = (latestKnownScrollY - start) / (end - start);

    if (0 > progress) {
      timeline.progress(0);
      return;
    }

    if (1 < progress) {
      timeline.progress(1);
      return;
    }

    timeline.progress(progress);
  }

  /**
   * Generic tree implementation
   *
   * This class represents any node in the tree.
   */
  var Node = function (val) {
    this.val = val;
    this.children = [];
    this.parent = null;

    /**
     * Sets the parent node of this node.
     */
    this.setParentNode = function (node) {
      this.parent = node;
      node.children[node.children.length] = this;
    };

    /**
     * Gets the parent node of this node.
     */
    this.getParentNode = function () {
      return this.parent;
    };

    /**
     * Adds a child node of this node.
     */
    this.addChild = function (node) {
      node.parent = this;
      this.children[this.children.length] = node;
    };

    /**
     * Gets the array of child nodes of this node.
     */
    this.getChildren = function () {
      return this.children;
    };

    /**
     * Removes all the children of this node.
     */
    this.removeChildren = function () {
      var child;
      for (var i = 0; i < this.children.length; i++) {
        child = this.children[i];
        child.parent = null;
      }
      this.children = [];
    };

    /**
     * Recursively counts the number of all descendants, from children down, and
     * returns the total number.
     */
    this.getTotalDescendantCount = function () {
      var count = 0,
        child;
      for (var i = 0; i < this.children.length; i++) {
        child = this.children[i];
        count += child.getTotalDescendantCount();
      }
      return count + this.children.length;
    };
  };

  /**
   * Protocol Buffer implementation, which extends the functionality of Node
   * while specifically typing the stored value
   */
  var PrBufNode = function (id, type, value) {
    this.val = {
      id: id,
      type: type,
      value: value,
    };
    this.children = [];
    this.parent = null;
  };

  PrBufNode.prototype = new Node();
  PrBufNode.prototype.constructor = PrBufNode;

  PrBufNode.prototype.id = function () {
    return this.val.id;
  };
  PrBufNode.prototype.type = function () {
    return this.val.type;
  };
  PrBufNode.prototype.value = function () {
    return this.val.value;
  };

  /**
   * Compares the number of descendants with the value specified in the map element.
   * If all the children have not yet been added, we continue adding to this element.
   */
  PrBufNode.prototype.findLatestIncompleteNode = function () {
    //if it's a branch (map) node ('m') and has room,
    //or if it's the root (identified by having a null parent), which has no element limit,
    //then return this node
    if (
      (this.val.type === "m" &&
        this.val.value > this.getTotalDescendantCount()) ||
      null === this.parent
    ) {
      return this;
    } else {
      return this.parent.findLatestIncompleteNode();
    }
  };

  /**
   * Parses the input URL 'data' protocol buffer parameter into a tree
   */
  PrBufNode.create = function (urlToParse) {
    var rootNode = null;
    var re = /data=!([^?&]+)/;
    var dataArray = urlToParse.match(re);
    if (dataArray && dataArray.length >= 1) {
      rootNode = new PrBufNode();
      var workingNode = rootNode;
      //we iterate through each of the elements, creating a node for it, and
      //deciding where to place it in the tree
      var elemArray = dataArray[1].split("!");
      for (var i = 0; i < elemArray.length; i++) {
        var elemRe = /^([0-9]+)([a-z])(.+)$/;
        var elemValsArray = elemArray[i].match(elemRe);
        if (elemValsArray && elemValsArray.length > 3) {
          var elemNode = new PrBufNode(
            elemValsArray[1],
            elemValsArray[2],
            elemValsArray[3]
          );
          workingNode.addChild(elemNode);
          workingNode = elemNode.findLatestIncompleteNode();
        }
      }
    }
    return rootNode;
  };

  /**
   * Represents a basic waypoint, with latitude and longitude.
   *
   * If both are not specified, the waypoint is considered to be valid
   * but empty waypoint (these can exist in the data parameter, where
   * the coordinates have been specified in the URL path.
   */
  var GmdpWaypoint = function (lat, lng, primary) {
    this.lat = lat;
    this.lng = lng;
    this.primary = primary ? true : false;
  };

  /**
   * Represents a basic route, comprised of an ordered list of
   * GmdpWaypoint objects.
   */
  var GmdpRoute = function () {
    this.route = new Array();
  };

  /**
   * Pushes a GmdpWaypoint on to the end of this GmdpRoute.
   */
  GmdpRoute.prototype.pushWaypoint = function (wpt) {
    if (wpt instanceof GmdpWaypoint) {
      this.route.push(wpt);
    }
  };

  /**
   * Sets the mode of transportation.
   * If the passed parameter represents one of the integers normally used by Google Maps,
   * it will be interpreted as the relevant transport mode, and set as a string:
   * "car", "bike", "foot", "transit", "flight"
   */
  GmdpRoute.prototype.setTransportation = function (transportation) {
    switch (transportation) {
      case "0":
        this.transportation = "car";
        break;
      case "1":
        this.transportation = "bike";
        break;
      case "2":
        this.transportation = "foot";
        break;
      case "3":
        this.transportation = "transit";
        break;
      case "4":
        this.transportation = "flight";
        break;
      default:
        this.transportation = transportation;
        break;
    }
  };

  /**
   * Returns the mode of transportation (if any) for the route.
   */
  GmdpRoute.prototype.getTransportation = function () {
    return this.transportation;
  };

  GmdpRoute.prototype.setUnit = function (unit) {
    switch (unit) {
      case "0":
        this.unit = "km";
        break;
      case "1":
        this.unit = "miles";
        break;
    }
  };

  GmdpRoute.prototype.getUnit = function () {
    return this.unit;
  };

  GmdpRoute.prototype.setRoutePref = function (routePref) {
    switch (routePref) {
      case "0":
      case "1":
        this.routePref = "best route";
        break;
      case "2":
        this.routePref = "fewer transfers";
        break;
      case "3":
        this.routePref = "less walking";
        break;
    }
  };

  GmdpRoute.prototype.getRoutePref = function () {
    return this.routePref;
  };

  GmdpRoute.prototype.setArrDepTimeType = function (arrDepTimeType) {
    switch (arrDepTimeType) {
      case "0":
        this.arrDepTimeType = "depart at";
        break;
      case "1":
        this.arrDepTimeType = "arrive by";
        break;
      case "2":
        this.arrDepTimeType = "last available";
        break;
    }
  };

  GmdpRoute.prototype.getArrDepTimeType = function () {
    return this.arrDepTimeType;
  };

  GmdpRoute.prototype.addTransitModePref = function (transitModePref) {
    //there can be multiple preferred transit modes, so we store them in an array
    //we assume there will be no duplicate values, but it probably doesn't matter
    //even if there are
    switch (transitModePref) {
      case "0":
        this.transitModePref.push("bus");
        break;
      case "1":
        this.transitModePref.push("subway");
        break;
      case "2":
        this.transitModePref.push("train");
        break;
      case "3":
        this.transitModePref.push("tram / light rail");
        break;
    }
  };

  GmdpRoute.prototype.getTransitModePref = function () {
    return this.transitModePref;
  };

  /**
   * Returns the list of all waypoints belonging to this route.
   */
  GmdpRoute.prototype.getAllWaypoints = function () {
    return this.route;
  };

  function GmdpException(message) {
    this.message = message;
    // Use V8's native method if available, otherwise fallback
    if ("captureStackTrace" in Error) {
      Error.captureStackTrace(this, GmdpException);
    } else {
      this.stack = new Error().stack;
    }
  }

  GmdpException.prototype = Object.create(Error.prototype);
  GmdpException.prototype.name = "GmdpException";

  /**
   * Represents a google maps data parameter, constructed from the passed URL.
   *
   * Utility methods defined below allow the user to easily extract interesting
   * information from the data parameter.
   */
  var Gmdp = function (url) {
    this.prBufRoot = PrBufNode.create(url);
    this.mapType = "map";

    if (this.prBufRoot == null) {
      throw new GmdpException("no parsable data parameter found");
    }

    //the main top node for routes is 4m; other urls (eg. streetview) feature 3m etc.
    var routeTop = null;
    var streetviewTop = null;
    var rootChildren = this.prBufRoot.getChildren(),
      child;

    for (var i = 0; i < rootChildren.length; i++) {
      child = rootChildren[i];
      if (child.id() == 3 && child.type() == "m") {
        var mapTypeChildren = child.getChildren();
        if (mapTypeChildren && mapTypeChildren.length >= 1) {
          if (
            mapTypeChildren[0].id() == 1 &&
            mapTypeChildren[0].type() == "e"
          ) {
            switch (mapTypeChildren[0].value()) {
              case "1":
                this.mapType = "streetview";
                streetviewTop = child;
                break;
              case "3":
                this.mapType = "earth";
                break;
            }
          }
        }
      } else if (child.id() == 4 && child.type() == "m") {
        routeTop = child;
      }
    }
    if (routeTop) {
      var directions = null,
        routeChildren = routeTop.getChildren();

      for (var i = 0; i < routeChildren.length; i++) {
        child = routeChildren[i];
        if (child.id() == 4 && child.type() == "m") {
          directions = child;
        }
      }
      if (directions) {
        this.route = new GmdpRoute();
        this.route.arrDepTimeType = "leave now"; //default if no value is specified
        this.route.avoidHighways = false;
        this.route.avoidTolls = false;
        this.route.avoidFerries = false;
        this.route.transitModePref = [];

        var directionsChildren = directions.getChildren();

        for (var i = 0; i < directionsChildren.length; i++) {
          child = directionsChildren[i];
          if (primaryChild.id() == 1 && primaryChild.type() == "m") {
            if (primaryChild.value() == 0) {
              this.route.pushWaypoint(
                new GmdpWaypoint(undefined, undefined, true)
              );
            } else {
              var addedPrimaryWpt = false;
              var wptNodes = primaryChild.getChildren(),
                wptNode;
              for (var i = 0; i < wptNodes.length; i++) {
                wptNode = wptNodes[i];
                if (wptNode.id() == 2) {
                  //this is the primary wpt, add coords
                  var coordNodes = wptNode.getChildren();
                  if (
                    coordNodes &&
                    coordNodes.length >= 2 &&
                    coordNodes[0].id() == 1 &&
                    coordNodes[0].type() == "d" &&
                    coordNodes[1].id() == 2 &&
                    coordNodes[1].type() == "d"
                  ) {
                    this.route.pushWaypoint(
                      new GmdpWaypoint(
                        coordNodes[1].value(),
                        coordNodes[0].value(),
                        true
                      )
                    );
                  }
                  addedPrimaryWpt = true;
                } else if (wptNode.id() == 3) {
                  //this is a secondary (unnamed) wpt
                  //
                  //but first, if we haven't yet added the primary wpt,
                  //then the coordinates are apparently not specified,
                  //so we should add an empty wpt
                  if (!addedPrimaryWpt) {
                    this.route.pushWaypoint(
                      new GmdpWaypoint(undefined, undefined, true)
                    );
                    addedPrimaryWpt = true;
                  }

                  //now proceed with the secondary wpt itself
                  var secondaryWpts = wptNode.getChildren();
                  if (secondaryWpts && secondaryWpts.length > 1) {
                    var coordNodes = secondaryWpts[0].getChildren();
                    if (
                      coordNodes &&
                      coordNodes.length >= 2 &&
                      coordNodes[0].id() == 1 &&
                      coordNodes[0].type() == "d" &&
                      coordNodes[1].id() == 2 &&
                      coordNodes[1].type() == "d"
                    ) {
                      this.route.pushWaypoint(
                        new GmdpWaypoint(
                          coordNodes[1].value(),
                          coordNodes[0].value(),
                          false
                        )
                      );
                    }
                  }
                }
              }
            }
          } else if (primaryChild.id() == 2 && primaryChild.type() == "m") {
            var routeOptions = primaryChild.getChildren(),
              routeOption;
            for (var i = 0; i < routeOptions.length; i++) {
              routeOption = routeOptions[i];

              if (routeOption.id() == 1 && routeOption.type() == "b") {
                this.route.avoidHighways = true;
              } else if (routeOption.id() == 2 && routeOption.type() == "b") {
                this.route.avoidTolls = true;
              } else if (routeOption.id() == 3 && routeOption.type() == "b") {
                this.route.avoidFerries = true;
              } else if (routeOption.id() == 4 && routeOption.type() == "e") {
                this.route.setRoutePref(routeOption.value());
              } else if (routeOption.id() == 5 && routeOption.type() == "e") {
                this.route.addTransitModePref(routeOption.value());
              } else if (routeOption.id() == 6 && routeOption.type() == "e") {
                this.route.setArrDepTimeType(routeOption.value());
              }
              if (routeOption.id() == 8 && routeOption.type() == "j") {
                this.route.arrDepTime = routeOption.value(); //as a unix timestamp
              }
            }
          } else if (primaryChild.id() == 3 && primaryChild.type() == "e") {
            this.route.setTransportation(primaryChild.value());
          } else if (primaryChild.id() == 4 && primaryChild.type() == "e") {
            this.route.setUnit(primaryChild.value());
          }
        }
      }
    }
    if (streetviewTop) {
      var streetviewChildren = streetviewTop.getChildren(),
        streetviewChild;
      for (var i = 0; i < streetviewChildren.length; i++) {
        streetviewChild = streetviewChildren[i];
        if (streetviewChild.id() == 3 && streetviewChild.type() == "m") {
          var svInfos = streetviewChild.getChildren(),
            svInfo;
          for (var i = 0; i < svInfos.length; i++) {
            svInfo = svInfos[i];
            if (svInfo.id() == 2 && svInfo.type() == "e") {
              if (svInfo.value() == 4) {
                //!2e4!3e11 indicates a photosphere, rather than standard streetview
                //but the 3e11 doesn't seem to matter too much (?)
                this.mapType = "photosphere";
              }
            }
            if (svInfo.id() == 6 && svInfo.type() == "s") {
              this.svURL = decodeURIComponent(svInfo.value());
            }
          }
        }
      }
    }
  };

  /**
   * Returns the route defined by this data parameter.
   */
  Gmdp.prototype.getRoute = function () {
    return this.route;
  };

  /**
   * Returns the main map type ("map", "earth").
   */
  Gmdp.prototype.getMapType = function () {
    return this.mapType;
  };

  /**
   * Returns the main map type ("map", "earth").
   */
  Gmdp.prototype.getStreetviewURL = function () {
    return this.svURL;
  };
  /* --- Magnific Popup Initialization --- */

  function magnificPopupInit() {
    if (globalDebug) {
      console.log("Magnific Popup - Init");
    }

    $(".js-post-gallery").each(function () {
      // the containers for all your galleries should have the class gallery
      $(this).magnificPopup({
        tPrev: rosaStrings.tPrev,
        tNext: rosaStrings.tNext,
        tCounter: rosaStrings.tCounter,
        delegate:
          'a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]', // the container for each your gallery items
        type: "image",
        closeOnContentClick: false,
        closeBtnInside: false,
        closeOnBgClick: false,
        fixedContentPos: true,
        removalDelay: 500,
        mainClass: "mfp-fade",
        image: {
          markup:
            '<div class="mfp-figure">' +
            '<div class="mfp-close"></div>' +
            '<div class="mfp-img"></div>' +
            '<div class="mfp-bottom-bar">' +
            '<div class="mfp-title"></div>' +
            '<div class="mfp-counter"></div>' +
            "</div>" +
            "</div>",
          titleSrc: function (item) {
            var output = "";
            if (
              typeof item.el.attr("data-alt") !== "undefined" &&
              item.el.attr("data-alt") !== ""
            ) {
              output += "<small>" + item.el.attr("data-alt") + "</small>";
            }
            return output;
          },
        },
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          //arrowMarkup: '<a href="#" class="gallery-arrow gallery-arrow--%dir% control-item arrow-button arrow-button--%dir%">%dir%</a>'
        },
        callbacks: {
          elementParse: function (item) {
            if (this.currItem != undefined) {
              item = this.currItem;
            }

            var output = "";
            if (
              typeof item.el.attr("data-alt") !== "undefined" &&
              item.el.attr("data-alt") !== ""
            ) {
              output += "<small>" + item.el.attr("data-alt") + "</small>";
            }

            $(".mfp-title").html(output);
          },
          change: function (item) {
            var output = "";
            if (
              typeof item.el.attr("data-alt") !== "undefined" &&
              item.el.attr("data-alt") !== ""
            ) {
              output += "<small>" + item.el.attr("data-alt") + "</small>";
            }

            $(".mfp-title").html(output);
          },
          beforeClose: function () {
            $(".mfp-arrow, .mfp-close").hide();
          },
        },
      });
    });
  }

  var GMap = function () {
    this.pinIconMarkup = $(".js-map-pin").html();
  };

  GMap.prototype.init = function ($container) {
    var that = this;
    var $body = $("body");

    $container = typeof $container !== "undefined" ? $container : $body;

    $container.find(".c-hero__map").each(function (i, obj) {
      var $map = $(obj);
      that.initializeMap($map);
    });
  };

  GMap.prototype.initializeMap = function ($map) {
    var that = this;

    if (typeof google !== "undefined") {
      var url = $map.data("url"),
        style =
          typeof $map.data("customstyle") !== "undefined"
            ? "rosa"
            : google.maps.MapTypeId.ROADMAP,
        markerContent = $map.data("markercontent"),
        coordinates,
        pins = [];

      if (typeof url === "string") {
        coordinates = that.getCenterFrom(url);
        pins = that.getPinsFrom(url, markerContent);

        // if there are no markers encoded in the url
        // place a pin the center of the map
        if (pins.length === 0 && typeof coordinates !== "undefined") {
          pins.push({
            position: [coordinates.latitude, coordinates.longitude],
            content: that.getPinMarkup(markerContent),
            x: 0,
            y: 4,
          });
        }
      } else {
        var pinsData = $map.data("pins");

        $.each(pinsData, function (label, url) {
          coordinates = that.getCenterFrom(url);

          pins.push({
            position: [coordinates["latitude"], coordinates["longitude"]],
            content: that.getPinMarkup(label, "pin"),
            x: 0,
            y: 4,
          });
        });
      }

      $map
        .gmap3({
          center: [coordinates.latitude, coordinates.longitude],
          zoom: parseInt(coordinates.zoom),
          mapTypeId: style,
          scrollwheel: false,
          mapTypeControl: false,
          zoomControl: true,
          zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER,
          },
          fullscreenControl: true,
        })
        .styledmaptype("rosa", that.customStyle, { name: "Rosa" })
        .overlay(pins);

      $body.on("rosa:update-map-color", function (e, color) {
        that.customStyle[1].stylers[0].hue = color;
        $map.gmap3().styledmaptype("rosa", that.customStyle, { name: "Rosa" });
      });

      if (pins.length > 1) {
        $map.gmap3().fit();
      }
    }
  };

  GMap.prototype.getCenterFrom = function (url) {
    var split = url.split("@")[1].split("/")[0].split("z")[0].split(","),
      coordinates = {};

    if (2 === split.length || 3 === split.length) {
      coordinates.latitude = parseFloat(split[0]);
      coordinates.longitude = parseFloat(split[1]);

      if (3 === split.length) {
        coordinates.zoom = parseFloat(split[2]);
      }
      return coordinates;
    }

    return false;
  };

  GMap.prototype.getPinsFrom = function (url, markerContent) {
    var that = this,
      coordinates = [],
      pins = [];

    function parseChildren(obj) {
      var coord = [];
      $.each(obj.getChildren(), function (i, child) {
        if (child.type() == "d") {
          coord.push(child.value());
        }
        parseChildren(child);
      });

      if (coord.length === 2) {
        coordinates.push(coord);
      }
    }

    if (url.indexOf("data=") > -1) {
      parseChildren(new Gmdp(url).prBufRoot);
    }

    $.each(coordinates, function (i, coord) {
      pins.push({
        position: [coord[0], coord[1]],
        content: that.getPinMarkup(markerContent, "tooltip"),
        x: 0,
        y: 4,
      });
    });

    return pins;
  };

  GMap.prototype.getPinMarkup = function (content, type) {
    type = type || "tooltip";

    if (type === "tooltip") {
      return (
        '<div class="map-tooltip"><div class="map-tooltip__content">' +
        content +
        "</div></div>"
      );
    } else {
      return (
        '<div class="map-pin"><div class="map-pin__text">' +
        content +
        "</div>" +
        this.pinIconMarkup +
        "</div>"
      );
    }
  };

  GMap.prototype.customStyle = [
    {
      stylers: [
        { saturation: -100 },
        { gamma: 3.0 },
        { visibility: "simplified" },
      ],
    },
    {
      featureType: "road",
      stylers: [
        { hue: $("body").data("color") ? $("body").data("color") : "#ffaa00" },
        { saturation: 48 },
        { gamma: 0.4 },
        { visibility: "on" },
      ],
    },
    {
      featureType: "administrative",
      stylers: [{ saturation: -30 }, { gamma: 0.6 }, { visibility: "on" }],
    },
    {
      featureType: "administrative.neighborhood",
      stylers: [{ visibility: "off" }],
    },
  ];

  var Parallax = function (selector, options) {
    this.disabled = false;
    this.selector = selector;
    this.options = options;
  };

  Parallax.prototype.init = function ($container) {
    $container = $container || $("body");
    if (this.disabled === false) {
      $container.find(this.selector).rellax(this.options);
    }
  };

  Parallax.prototype.disable = function () {
    this.disabled = true;
    this.destroy();
  };

  Parallax.prototype.destroy = function () {
    $(this.selector).rellax("destroy");
  };

  Parallax.prototype.enable = function () {
    this.disabled = false;
    $(this.selector).rellax(this.options);
  };

  (function ($) {
    function observe($container) {
      var MutationObserver = window.MutationObserver,
        observer,
        config;

      if (typeof MutationObserver === "undefined") {
        return;
      }

      observer = new MutationObserver(function () {
        $(window).trigger("rellax");
      });

      config = {
        childList: true,
        characterData: false,
        attributes: false,
        subtree: true,
      };

      $container.each(function () {
        observer.observe(this, config);
      });
    }

    observe($(".article__content"));
  })(jQuery);
  /* --- Royal Slider Init --- */

  function royalSliderInit($container) {
    if (globalDebug) {
      console.log("Royal Slider - Init");
    }

    $container = typeof $container !== "undefined" ? $container : $("body");

    // Transform Wordpress Galleries to Sliders
    $container.find(".wp-gallery").each(function () {
      sliderMarkupGallery($(this));
    });

    // Find and initialize each slider
    $container.find(".js-pixslider").each(function () {
      var $slider = $(this);
      $slider.imagesLoaded(function () {
        sliderInit($slider);
      });
    });
  }

  /*
   * Slider Initialization
   */
  function sliderInit($slider) {
    $slider.find("img").removeClass("invisible");

    var $children = $(this).children(),
      rs_arrows = typeof $slider.data("arrows") !== "undefined",
      rs_bullets =
        typeof $slider.data("bullets") !== "undefined" ? "bullets" : "none",
      rs_autoheight = typeof $slider.data("autoheight") !== "undefined",
      rs_autoScaleSlider = false,
      rs_autoScaleSliderWidth = $slider.data("autoscalesliderwidth"),
      rs_autoScaleSliderHeight = $slider.data("autoscalesliderheight"),
      rs_customArrows = typeof $slider.data("customarrows") !== "undefined",
      rs_slidesSpacing =
        typeof $slider.data("slidesspacing") !== "undefined"
          ? parseInt($slider.data("slidesspacing"))
          : 0,
      rs_keyboardNav = typeof $slider.data("fullscreen") !== "undefined",
      rs_imageScale = $slider.data("imagescale"),
      rs_visibleNearby = typeof $slider.data("visiblenearby") !== "undefined",
      rs_imageAlignCenter =
        typeof $slider.data("imagealigncenter") !== "undefined",
      rs_transition =
        typeof $slider.data("slidertransition") !== "undefined" &&
        $slider.data("slidertransition") !== ""
          ? $slider.data("slidertransition")
          : "move",
      rs_autoPlay = typeof $slider.data("sliderautoplay") !== "undefined",
      rs_delay =
        typeof $slider.data("sliderdelay") !== "undefined" &&
        $slider.data("sliderdelay") !== ""
          ? $slider.data("sliderdelay")
          : "1000",
      rs_drag = true,
      rs_globalCaption = typeof $slider.data("showcaptions") !== "undefined",
      is_headerSlider = $slider.hasClass("header--slideshow"),
      hoverArrows = typeof $slider.data("hoverarrows") !== "undefined";

    // Single slide case
    if ($children.length === 1) {
      rs_arrows = false;
      rs_bullets = "none";
      rs_customArrows = false;
      rs_keyboardNav = false;
      rs_drag = false;
      rs_transition = "fade";
    }
    // make sure default arrows won't appear if customArrows is set
    if (rs_customArrows) {
      rs_arrows = false;
    }

    //the main params for Royal Slider
    var royalSliderParams = {
      autoHeight: rs_autoheight,
      autoScaleSlider: rs_autoScaleSlider,
      loop: true,
      autoScaleSliderWidth: rs_autoScaleSliderWidth,
      autoScaleSliderHeight: rs_autoScaleSliderHeight,
      imageScaleMode: rs_imageScale,
      imageAlignCenter: rs_imageAlignCenter,
      slidesSpacing: rs_slidesSpacing,
      arrowsNav: rs_arrows,
      controlNavigation: rs_bullets,
      keyboardNavEnabled: rs_keyboardNav,
      arrowsNavAutoHide: false,
      sliderDrag: rs_drag,
      transitionType: rs_transition,
      autoPlay: {
        enabled: rs_autoPlay,
        stopAtAction: true,
        pauseOnHover: true,
        delay: rs_delay,
      },
      globalCaption: rs_globalCaption,
      numImagesToPreload: 4,
    };

    if (rs_visibleNearby) {
      royalSliderParams["visibleNearby"] = {
        enabled: true,
        //centerArea: 0.8,
        center: true,
        breakpoint: 0,
        //breakpointCenterArea: 0.64,
        navigateByCenterClick: false,
      };
    }

    // lets fire it up

    $slider.royalSlider(royalSliderParams);
    $slider.addClass("slider--loaded");

    var royalSlider = $slider.data("royalSlider");
    var slidesNumber = royalSlider.numSlides;

    royalSlider.ev.on("rsAfterSlideChange rsAfterContentSet", function (event) {
      $(window).trigger("rellax");
    });

    // create the markup for the customArrows
    if (royalSlider && rs_customArrows) {
      var classes = "slider__custom-arrows";

      if (is_headerSlider) {
        classes = "slider-arrows-header";
      }

      if (hoverArrows && !Modernizr.touchevents) {
        classes += " arrows--hover ";
      }

      $slider.find(".slider__custom-arrows").off("click").remove();

      var $gallery_control = $(
        '<div class="' +
          classes +
          '">' +
          '<div class="rsArrow rsArrowLeft js-arrow-left" style="display: block;"><div class="rsArrowIcn"></div></div>' +
          '<div class="rsArrow rsArrowRight js-arrow-right" style="display: block;"><div class="rsArrowIcn"></div></div>' +
          "</div>"
      );

      if ($slider.data("customarrows") === "left") {
        $gallery_control.addClass("gallery-control--left");
      }

      $gallery_control.insertBefore($slider);

      $gallery_control.on("click", ".js-arrow-left", function (event) {
        event.preventDefault();
        royalSlider.prev();
      });

      $gallery_control.on("click", ".js-arrow-right", function (event) {
        event.preventDefault();
        royalSlider.next();
      });
    }

    if (hoverArrows && !Modernizr.touchevents) {
      hoverArrow($gallery_control.find(".rsArrow"));
    }

    if (slidesNumber === 1) {
      $slider.addClass("single-slide");
    }

    $slider.addClass("slider--loaded");
  }

  /*
   * Wordpress Galleries to Sliders
   * Create the markup for the slider from the gallery shortcode
   * take all the images and insert them in the .gallery <div>
   */
  function sliderMarkupGallery($gallery) {
    var $old_gallery = $gallery,
      gallery_data = $gallery.data(),
      $images = $old_gallery.find("img"),
      $new_gallery = $('<div class="pixslider js-pixslider">');

    $images.prependTo($new_gallery).addClass("rsImg");

    //add the data attributes
    $.each(gallery_data, function (key, value) {
      $new_gallery.attr("data-" + key, value);
    });

    $old_gallery.replaceWith($new_gallery);
  }

  /*
 Get slider arrows to hover, following the cursor
 */

  function hoverArrow($arrow) {
    $arrow.each(function (i, obj) {
      var $arrow = $(obj),
        update = false,
        offset = $arrow.offset(),
        $icon = $arrow.find(".rsArrowIcn"),
        mouseX,
        mouseY;

      $arrow.mouseenter(function (e) {
        offset = $arrow.offset();
        $(this).addClass("visible");
        update = true;
      });

      $arrow.mousemove(function (e) {
        mouseX = e.pageX - offset.left;
        mouseY = e.pageY - offset.top;
      });

      $arrow.mouseleave(function (e) {
        $(this).removeClass("visible");
        update = false;
      });

      function loop() {
        if (update) {
          TweenMax.to($icon, 0, {
            x: mouseX,
            y: mouseY,
            z: 0.01,
            force3D: true,
          });
        }
        requestAnimationFrame(loop);
      }

      loop();
    });
  }
  var ScrollToTop = (function () {
    var start = 0,
      end = 0,
      timeline = null,
      played = false,
      footerHeight;

    function initialize() {
      var $button = $(".btn--top"),
        offsetTop = 0,
        start = offsetTop - windowHeight + (footerHeight * 3) / 4;

      footerHeight = $(".copyright-area").outerHeight();

      if (empty($button)) {
        return;
      }

      offsetTop = $button.offset().top;
      $button.data("offsetTop", offsetTop);

      this.timeline = new TimelineMax({ paused: true });

      this.timeline.fromTo(
        ".blurp--bottom",
        0.6,
        {
          y: 40,
          scale: 0.5,
        },
        {
          y: 0,
          scale: 1,
          ease: Power3.easeOut,
          force3D: true,
        }
      );

      this.timeline.fromTo(
        $(".btn__arrow--top"),
        0.4,
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: Back.easeOut,
        },
        "-=0.1"
      );

      this.timeline.fromTo(
        $(".btn__arrow--bottom"),
        0.4,
        {
          y: 15,
          opacity: 0,
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: Back.easeOut,
        },
        "-=0.25"
      );

      $button.on("click", function (e) {
        e.preventDefault();
        smoothScrollTo(0);
      });

      this.update();
    }

    function update() {
      var $button = $(".btn--top"),
        offsetTop = $button.data("offsetTop"),
        start = offsetTop - windowHeight + (footerHeight * 3) / 4,
        end = start + windowHeight;

      if (empty($button) || this.timeline == null) {
        return;
      }

      if (Modernizr.touchevents && is_OSX) {
        this.timeline.progress(1);
        return;
      }

      if (start < latestKnownScrollY) {
        if (!this.played) {
          this.timeline.play();
          this.played = true;
        }
      } else {
        if (this.played) {
          this.timeline.reverse();
          this.played = false;
        }
      }
    }

    return {
      initialize: initialize,
      update: update,
    };
  })();

  /* --- Sticky Header Init --- */

  var StickyHeader = (function () {
    var headerSelector = ".site-header",
      $header = $(headerSelector),
      headerHeight,
      $headers;

    function init() {
      headerHeight = $header.outerHeight();
      $headers = $(".article__header").first();
    }

    function update() {
      var inversed = false,
        adminBarHeight = $("#wpadminbar").outerHeight(),
        headerHeight = $header.outerHeight();

      $headers.each(function (i, obj) {
        var $obj = $(obj),
          start = $obj.offset().top,
          end = start + $obj.outerHeight();

        if (
          latestKnownScrollY >= start - adminBarHeight &&
          latestKnownScrollY <= end - headerHeight - adminBarHeight
        ) {
          inversed = true;
        }
      });

      // if ( ! inversed ) {
      // 	$header.removeClass( 'headroom--top' ).addClass( 'headroom--not-top' );
      // } else {
      // 	$header.removeClass( 'headroom--not-top' ).addClass( 'headroom--top' );
      // }
    }

    return {
      init: init,
      update: update,
    };
  })();

  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  // requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

  // MIT license

  (function () {
    var lastTime = 0;
    var vendors = ["ms", "moz", "webkit", "o"];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function (id) {
        clearTimeout(id);
      };
  })();

  //here we change the link of the Edit button in the Admin Bar
  //to make sure it reflects the current page
  function adminBarEditFix(id) {
    //get the admin ajax url and clean it
    var baseURL = rosaStrings.ajaxurl.replace("admin-ajax.php", "post.php");

    $("#wp-admin-bar-edit a").attr(
      "href",
      baseURL + "?post=" + id + "&action=edit"
    );
  }

  /* --- Load AddThis Async --- */
  function loadAddThisScript() {
    if (window.addthis) {
      if (globalDebug) {
        console.log("AddThis Load Script");
      }
      // Listen for the ready event
      addthis.addEventListener("addthis.ready", addthisReady);
      addthis.init();
    }
  }

  /* --- AddThis On Ready - The API is fully loaded --- */
  //only fire this the first time we load the AddThis API - even when using ajax
  function addthisReady() {
    if (globalDebug) {
      console.log("AddThis Ready");
    }
    addThisInit();
  }

  /* --- AddThis Init --- */
  function addThisInit() {
    if (window.addthis) {
      if (globalDebug) {
        console.log("AddThis Toolbox INIT");
      }

      addthis.toolbox(".addthis_toolbox");
    }
  }

  var HandleSubmenusOnTouch = (function () {
    var isInitiated = false;

    function init() {
      if (isInitiated) return;

      // Make sure there are no open menu items
      $(".menu-item-has-children").removeClass("hover");

      // Add a class so we know the items to handle
      $(".menu-item-has-children > a").each(function () {
        $(this).addClass("prevent-one");
      });

      $("a.prevent-one").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($(this).hasClass("active")) {
          window.location.href = $(this).attr("href");
        }

        $("a.prevent-one").removeClass("active");
        $(this).addClass("active");

        // When a parent menu item is activated,
        // close other menu items on the same level
        $(this).parent().siblings().removeClass("hover");

        // Open the sub menu of this parent item
        $(this).parent().addClass("hover");
      });

      isInitiated = true;
    }

    function release() {
      $("a.prevent-one").unbind();
      isInitiated = false;
    }

    return {
      init: init,
      release: release,
    };
  })();

  function getIEversion() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }

    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf("rv:");
      return parseInt(ua.substring(rv + 3, ua.indexOf(".", rv)), 10);
    }

    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf(".", edge)), 10);
    }

    // other browser
    return false;
  }

  /* ====== INTERNAL FUNCTIONS ====== */

  /* --- NICESCROLL --- */

  var $body = $("body"),
    $html = $("html"),
    $window = $(window),
    $document = $(document),
    documentHeight = $document.height(),
    aspectRatio = windowWidth / windowHeight,
    orientation = getOrientation(),
    isTouch = !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    );

  var $target = $(window.location.hash).filter(".article--page");

  if ($target.length) {
    requestAnimationFrame(function () {
      window.scrollTo(0, $target.offset().top - $(".site-header").height());
    });
  }

  function niceScrollInit() {
    if (globalDebug) {
      console.log("NiceScroll Init");
    }

    var smoothScroll = $("body").data("smoothscrolling") !== undefined,
      root = document.documentElement;

    if (
      smoothScroll &&
      !is_EDGE &&
      !Modernizr.touchevents &&
      !is_mobile_ie &&
      !is_OSX
    ) {
      var $window = $(window); // Window object

      $window.on("mousewheel DOMMouseScroll", function (event) {
        var scrollTo,
          scrollDistance = 400,
          delta;

        if (event.type == "mousewheel") {
          delta = event.originalEvent.wheelDelta / 120;
        } else if (event.type == "DOMMouseScroll") {
          delta = -event.originalEvent.detail / 3;
        }

        scrollTo = latestKnownScrollY - delta * scrollDistance;

        if (scrollTo) {
          event.preventDefault();

          TweenMax.to($window, 0.6, {
            scrollTo: {
              y: scrollTo,
              autoKill: true,
            },
            ease: Power1.easeOut, // For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
            autoKill: true,
            overwrite: 5,
          });
        }
      });
    }
  }

  function smoothScrollTo(y, speed) {
    speed = typeof speed === "undefined" ? 1 : speed;

    var distance = Math.abs(latestKnownScrollY - y),
      time = (speed * distance) / 2000;

    TweenMax.to($(window), time, {
      scrollTo: { y: y, autoKill: false, ease: Quint.easeInOut },
    });
  }

  function menuTrigger() {
    $(".js-nav-trigger").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var $html = $("html");

      if ($html.hasClass("navigation--is-visible")) {
        $html.removeClass("navigation--is-visible");
      } else {
        $html.addClass("navigation--is-visible");

        if ($html.is(".is--ancient-android, .is--winmob, .is--ie")) {
          $(".navigation--main").height(windowHeight);
        }
      }
    });
  }

  function cartOnMobile() {
    if ($(".js-open-cart").length) {
      var cartNav = $(".mobile-cart"),
        cartMenu = $(".menu-item--cart"),
        icon = $(".js-open-cart").detach();

      if (windowWidth < 900) {
        icon.appendTo(cartNav);
      } else {
        icon.appendTo(cartMenu);
      }
    }
  }

  /* --- $VIDEOS --- */

  function initVideos() {
    var videos = $("iframe, video");

    // Figure out and save aspect ratio for each video
    videos.each(function () {
      $(this)
        .data("aspectRatio", this.width / this.height)
        // and remove the hard coded width/height
        .removeAttr("height")
        .removeAttr("width");
    });

    // Firefox Opacity Video Hack
    $("iframe").each(function () {
      var url = $(this).attr("src");
      if (!empty(url)) {
        $(this).attr("src", setQueryParameter(url, "wmode", "transparenartt"));
      }
    });
  }

  function resizeVideos() {
    var videos = $("iframe, video");

    videos.each(function () {
      var video = $(this),
        ratio = video.data("aspectRatio"),
        w = video.css("width", "100%").width(),
        h = w / ratio;
      video.height(h);
    });
  }

  /* ====== INTERNAL FUNCTIONS END ====== */

  function init() {
    if (globalDebug) {
      console.group("Init");
    }

    // /* GLOBAL VARS */
    touch = false;

    if (
      typeof isIe !== "undefined" ||
      (!window.ActiveXObject && "ActiveXObject" in window)
    ) {
      $("html").addClass("is--ie");
    }

    if (is_EDGE) {
      $("html").addClass("is--ie-edge");
    }

    //  GET BROWSER DIMENSIONS
    browserSize();

    // /* DETECT PLATFORM */
    platformDetect();

    loadAddThisScript();

    if (is_android || window.opera) {
      $("html").addClass("android-browser").removeClass("no-android-browser");
    }

    /* ONE TIME EVENT HANDLERS */
    eventHandlersOnce();

    /* INSTANTIATE EVENT HANDLERS */
    eventHandlers();
    updateHeaderPadding();

    var $borderTemplate = $(".border-waves-template");

    $(".border-waves").each(function (i, obj) {
      var $obj = $(obj),
        $before = $borderTemplate
          .clone()
          .removeClass("border-waves-template")
          .addClass("border-waves-before"),
        $after = $borderTemplate
          .clone()
          .removeClass("border-waves-template")
          .addClass("border-waves-after");

      $before.appendTo($obj);
      $after.appendTo($obj);
    });

    $(".navigation--main").on("DOMMouseScroll mousewheel", function (ev) {
      var $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.height(),
        delta =
          ev.type == "DOMMouseScroll"
            ? ev.originalEvent.detail * -40
            : ev.originalEvent.wheelDelta,
        up = delta > 0;

      var prevent = function () {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
      };

      if (!up && -delta > scrollHeight - height - scrollTop) {
        // Scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
      } else if (up && delta > scrollTop) {
        // Scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
      }
    });

    cartOnMobile();

    if (globalDebug) {
      console.groupEnd();
    }
  }

  /* ====== EVENT HANDLERS ====== */

  function eventHandlersOnce() {
    if (globalDebug) {
      console.group("Event Handlers Once");
    }

    menuTrigger();

    if (globalDebug) {
      console.groupEnd();
    }
  }

  function eventHandlers() {
    if (globalDebug) {
      console.group("Event Handlers");
    }

    //Magnific Popup arrows
    $("body")
      .off("click", ".js-arrow-popup-prev", magnificPrev)
      .on("click", ".js-arrow-popup-prev", magnificPrev);
    $("body")
      .off("click", ".js-arrow-popup-next", magnificNext)
      .on("click", ".js-arrow-popup-next", magnificNext);

    $(document).on(
      "spam.wpcf7 invalid.wpcf7 mailsent.wpcf7 mailfailed.wpcf7",
      function () {
        setTimeout(function () {
          CoverAnimation.initialize();
        }, 300);
      }
    );

    var filterHandler;

    if (touch) {
      filterHandler = "click";
    } else {
      filterHandler = "hover";
    }

    if (touch && windowWidth < 900) {
      HandleSubmenusOnTouch.init();
    }

    if (ieMobile) {
      filterHandler = "click";
    }

    $(".categories__menu").on(filterHandler, function (e) {
      e.stopPropagation();

      $(this).toggleClass("active");
    });

    if (globalDebug) {
      console.groupEnd();
    }
  }

  /* --- GLOBAL EVENT HANDLERS --- */

  function magnificPrev(e) {
    if (globalDebug) {
      console.log("Magnific Popup Prev");
    }

    e.preventDefault();
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.prev();
    return false;
  }

  function magnificNext(e) {
    if (globalDebug) {
      console.log("Magnific Popup Next");
    }

    e.preventDefault();
    var magnificPopup = $.magnificPopup.instance;
    magnificPopup.next();
    return false;
  }

  // $(window).bind('beforeunload', function(event) {
  // 	if (globalDebug) {console.log("ON BEFORE UNLOAD");}

  // 	event.stopPropagation();

  // 	animateBlog('out');
  // });

  /* ====== ON DOCUMENT READY ====== */

  $(document).ready(function () {
    $(this).scrollTop(0);
    if (globalDebug) {
      console.group("OnDocumentReady");
    }

    /* --- INITIALIZE --- */
    init();

    if (globalDebug) {
      console.groupEnd();
    }
  });

  /* ====== ON WINDOW LOAD ====== */

  $(window).load(function () {
    if (globalDebug) {
      console.group("OnWindowLoad");
    }

    StickyHeader.init();

    if (is_mobile_ie) {
      $("html").addClass("mobile-ie");
    }

    //Set textarea from contact page to autoresize
    if ($("textarea").length) {
      $("textarea").autosize();
    }

    if (!$("html").is(".ie9, .lt-ie9")) {
      setTimeout(function () {
        CoverAnimation.initialize();
      }, 600);
    } else {
      setTimeout(function () {
        CoverAnimation.initialize();
      }, 400);
    }

    niceScrollInit();

    magnificPopupInit();
    initVideos();
    resizeVideos();

    var Map = new GMap();
    Map.init();

    if (!empty($("#date-otreservations"))) {
      var dateFormat = $("#date-otreservations")
        .closest(".otw-wrapper")
        .children(".txtDateFormat")
        .attr("value")
        .toUpperCase();

      function disabledWeekends() {
        if ($(".pixcode--otreservations").hasClass("disable-weekends")) {
          return true;
        }

        return false;
      }

      // Pikaday
      var picker = new Pikaday({
        field: document.getElementById("date-otreservations"),
        format: dateFormat,
        minDate: moment().toDate(),
        defaultDate: moment().toDate(),
        setDefaultDate: true,
        disableWeekends: disabledWeekends(),
      });
    }

    $(".pixcode--tabs").organicTabs();
    DownArrow.initialize();

    setTimeout(function () {
      ScrollToTop.initialize();
    }, 60);

    royalSliderInit();
    updateHeaderPadding();

    loop();

    var $bulletedSections = $("[data-bully]");

    if ($bulletedSections.length > 1) {
      $bulletedSections.bully();

      $(".c-bully__bullet").each(function (i, obj) {
        var stagger = i * 400,
          $obj = $(obj);

        setTimeout(function () {
          $obj.addClass("c-bully__bullet--pop");
        }, stagger);
      });
    }

    Rosa.Parallax.init();
    $html.addClass("is--loaded");
  });

  function getOrientation() {
    return windowWidth > windowHeight ? "landscape" : "portrait";
  }

  function updateHeaderPadding() {
    var $header = $(".site-header"),
      headerHeight = $header.outerHeight();

    if (!$header.next().is(".c-hero")) {
      $("#page").css("paddingTop", headerHeight);
    }
  }

  $window.on("resize", function () {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  });

  $(window).on("debouncedresize", onResize);

  $(window).on("rellax:restart", function () {
    $(".js-pixslider").each(function (i, obj) {
      var rs = $(obj).data("royalSlider");

      if (typeof rs !== "undefined") {
        rs.updateSliderSize(true);
      }
    });
  });

  function onResize() {
    var neworientation = getOrientation();

    if (neworientation !== orientation) {
      orientation = neworientation;
      $(window).trigger("debouncedorientationchange");
    }

    resizeVideos();
    cartOnMobile();

    if (touch && windowWidth < 900) {
      HandleSubmenusOnTouch.init();
    } else {
      HandleSubmenusOnTouch.release();
    }

    requestAnimationFrame(refreshStuff);
  }

  function refreshStuff() {
    CoverAnimation.initialize();
    ScrollToTop.initialize();
    $window.trigger("rellax");
  }

  function updateStuff() {
    ScrollToTop.update();
    DownArrow.update();
    CoverAnimation.update();

    if (windowWidth >= 900) {
      StickyHeader.update();
    }
  }

  $(window).on("organicTabsChange", function () {
    onResize();
    refreshStuff();
    $window.trigger("rellax");
  });

  $window.scroll(function () {
    newScrollY =
      (window.pageYOffset || document.documentElement.scrollTop) -
      (document.documentElement.clientTop || 0);
  });

  function loop() {
    // Avoid calculations if not needed
    if (latestKnownScrollY !== newScrollY) {
      latestKnownScrollY = newScrollY;
      updateStuff();
    }
    requestAnimationFrame(loop);
  }

  if (
    navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) &&
    window.innerHeight != document.documentElement.clientHeight
  ) {
    var fixViewportHeight = function () {
      $("html, body").outerHeight(window.innerHeight);
    };

    window.addEventListener("scroll", fixViewportHeight, false);
    window.addEventListener("orientationchange", fixViewportHeight, false);
    fixViewportHeight();
  }

  // smooth scrolling to anchors
  $(function () {
    var $header = $(".site-header"),
      headerHeight = parseInt($header.outerHeight(), 10),
      $html = $("html");

    $('.site-header a[href*="#"]:not([href="#"])').click(function () {
      var timeout = 0;

      if ($html.hasClass("navigation--is-visible")) {
        $("body").css("overflow", "");
        $html.removeClass("navigation--is-visible");
        timeout = 600;
      }

      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          setTimeout(function () {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - headerHeight,
              },
              1000
            );
          }, timeout);
          return false;
        }
      }
    });
  });

  var ieVersion = getIEversion();
  var Rosa = {};

  Rosa.Parallax = new Parallax("[data-rellax]", {
    bleed: 60,
    container: "[data-rellax-container]",
  });

  Rosa.Parallax.disabled = is_mobile || (ieVersion && ieVersion < 12);

  // returns the depth of the element "e" relative to element with id=id
  // for this calculation only parents with classname = waypoint are considered
  /* function getLevelDepth(e, id, waypoint, cnt) {
	cnt = cnt || 0;
	if (e.id.indexOf(id) >= 0) return cnt;
	if ($(e).hasClass(waypoint)) {
		++cnt;
	}
	return e.parentNode && getLevelDepth(e.parentNode, id, waypoint, cnt);
} */

  // returns the closest element to 'e' that has class "classname"
  function closest(e, classname) {
    if ($(e).hasClass(classname)) {
      return e;
    }
    return e.parentNode && closest(e.parentNode, classname);
  }
})(jQuery, window);

$(document).on("scroll", function () {
  if ($(document).scrollTop() > 86) {
    $(".site-header").addClass("shrink");
    $(".site-logo-img--light-bg").addClass("site-logo-img--light");
  } else {
    $(".site-header").removeClass("shrink");
    $(".site-logo-img--light-bg").removeClass("site-logo-img--light");
  }
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop() + parseInt(150);
    // Assign active class to nav links while scolling
    $(".scroll-page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".nav--main li.current-menu-item").removeClass("current-menu-item");
        $(".nav--main li").eq(i).addClass("current-menu-item");
      }
    });
  })
  .scroll();
$("#eventDate").datepicker({
  autoclose: true,
  todayHighlight: true,
  startDate: new Date(),
  format: "dd/mm/yyyy",
});

let link = setInterval(function () {
  if (
    $("a[href^='https://elfsight.com/']") &&
    $("a[href^='https://elfsight.com/']")[0]
  ) {
    clearInterval(link);
    $("a[href^='https://elfsight.com/']")[0].style = {};
    $("a[href^='https://elfsight.com/']")[0].style.display = "none";
  }
}, 1000);
