(function ($) {
    var _prefix = (function (temp) {
        var aPrefix = ["webkit", "Moz", "o", "ms"],
            props = "";
        for (var i in aPrefix) {
            props = aPrefix[i] + "Transition";
            if (temp.style[props] !== undefined) {
                return "-" + aPrefix[i].toLowerCase() + "-";
            }
        }
        return false;

    })(document.createElement(PageSwitch));
    var PageSwitch = (function () {
        function PageSwitch(element, options) {
            this.settings = $.extend(true, $.fn.PageSwitch.defaults, options || {});
            this.element = element;
            this.init();
        }
        PageSwitch.prototype = {
            /**
             * 说明：初始化插件
             * 实现：初始化dom结构，布局，分页及绑定事件
             */
            init: function () {
                var me = this;
                me.selectors = me.settings.selectors;
                // console.log(me.settings);
                me.sections = me.element.find(me.selectors.sections);
                me.section = me.sections.find(me.selectors.section);

                me.direction = me.settings.direction == "vertical" ? true : false;
                // console.log(me.direction);
                me.pagesCount = me.pagesCount();
                me.index = (me.settings.index >= 0 && me.settings.index < me.pagesCount) ? me.settings.index : 0;
                me.canScroll = true;
                if (!me.direction) {
                    me._initLayout();
                }
                if (me.settings.pagination) {
                    me._initPageing();
                }
            },
            /**说明：获取滑动页面熟练*/
            pagesCount: function () {
                return this.section.length;
            },
            /**说明：获取滑动的宽度(横屏滑动)或高度(竖屏滑动) */
            switchLength:function () {
                return this.direction ? this.element.height() : this.element.width()
            },
            prev: function () {
                var me = this;
                if (me.index > 0) {
                    me.index--;
                }
                else if (me.settings.loop) {
                    me.index = me.pagesCount - 1;
                }
                me._scrollPage();
            },
            next: function () {
                var me = this;
                if (me.index <me.pagesCount-1) {
                    me.index++;
                    // console.log(me.index);
                }
                else if (me.settings.loop) {
                    me.index = 0;
                }
                // console.log(me.index);
                me._scrollPage();
            },
            /**说民：主要针对横屏情况进行页面布局 */
            _initLayout: function () {
                var me = this;
                var width = (me.pagesCount * 100) + "%",
                    cellWidth = (100 / me.pagesCount.toFixed(2)) + "%";
                // console.log(me.sections);
                me.element.width(width);
                me.section.width(cellWidth).css("float","left");
            },
            /**说明：实现分页的dom结构及css样式 */
            _initPageing: function () {
                var me = this,
                    pageClass = me.selectors.page.substring(1);
                me.activeClass = me.selectors.active.substring(1);
                var pageHTML = '<ul class="' + pageClass + '">';
                for (var i = 0; i < me.pagesCount; i++) {
                    pageHTML += "<li></li>";
                }
                pageHTML += "</ul>";
                me.element.append(pageHTML);
                var pages = me.element.find(me.selectors.page);
                me.pageItem = pages.find("li");
                me.pageItem.eq(me.index).addClass(me.activeClass);
                if (me.direction) {
                    pages.addClass("vertical");
                }
                else {
                    pages.addClass("horizontal");
                }
                me._initEvent();
            },
            _scrollPage: function () {
               
                var me = this;
                var  dest ={
                        top:me.section.eq(me.index).get(0).offsetTop,
                        left:me.section.eq(me.index).get(0).offsetLeft
                    } ;
                // var dest=me.section.eq(me.index).position();
                    // console.log(me.section.eq(me.index));
                    // console.log(me.section.eq(me.index));
                    // console.log(me.canScroll);
                    // console.log(me.index);
                    // console.log(dest.top);
                    // console.log(me.section.eq(me.index).get(0).offsetLeft);
                if (!dest) return;
                me.canScroll = false;
                if (_prefix) {
                    me.sections.css(_prefix + "transition", "all " + me.settings.duration + "ms " + me.settings.easing);
                    var translate = me.direction ? "translateY(-" + dest.top + "px)" : "translateX(-" + dest.left + "px)";
                    // console.log(_prefix + "transform");
                    me.sections.css(_prefix + "transform", translate);
                    // console.log(me.sections.css(_prefix + "transform"));
   
                }
                else {
                    var animateCss = me.direction ? { top: -dest.top } : { left: -dest.left };
                    me.sections.animation(animateCss, me.settings.duration, function () {
                        me.canScroll = true;
                        if (me.settings.callback && $.type(me.settings.callback) == "function") {
                            me.settings.callback();
                        }
                    });
                    if (me.settings.pagination) {
                        me.pageItem.eq(me.index).addClass(me.activeClass).siblings("li").removeClass(me.activeClass);
                    }
                }

            },
            /**说明：初始化事件 */
            _initEvent: function () {
                var me = this;
                me.element.on('click', me.selectors.page + "li", function () {
                    me.index = $(this).index();
                    me._scrollPage();
                });

                me.element.on("mousewheel DOMMouseScroll", function (e) {
               
                    if (me.canScroll) {
                        var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;
                        if (delta > 0 && (me.index && !me.settings.loop || me.settings.loop)) {                     
                            me.prev();
                        }
                        else if (delta < 0 && (me.index < (me.pagesCount - 1) && !me.settings.loop || me.settings.loop)) {
                            me.next();
                        }
                    }

                });
                if (me.settings.keyboard) {
                    $(window).on("keydown", function (e) {
                        var keyCode = e.keyCode;
                        if (keyCode == 37 || keyCode == 38) {
                            me.prev();
                        }
                        else if (keyCode == 39 || keyCode == 40) {
                            me.next();
                        }
                    });
                }
                $(window).resize(function () {
                    var currentLength = me.switchLength(),
                        offset = me.settings.direction ? me.section.eq(me.index).offset().top
                            : me.section.eq(me.index).offset().left;
                    if (Math.abs(offset) > currentLength / 2 && me.index < (me.pagesCount - 1)) {
                        me.index++;
                    }
                    if (me.index) {
                        me._scrollPage();
                    }
                });
                me.sections.on("transitionend webkitTransitionEnd,oTransitionEnd otransitionend", function () {
               
                    me.canScroll = true;
                    // console.log(me.canScroll);
                    if (me.settings.callback && $.type(me.settings.callback) == "function") {
                        me.settings.callback();
                    }
                });
            }
        }
        return PageSwitch;
    })();
    $.fn.PageSwitch = function (options) {
        return this.each(function () {
            var me = $(this),
                instance = me.data("PageSwitch");
            if (!instance) {
                instance = new PageSwitch(me, options);
                me.data("PageSwitch", instance);
            }
            if ($.type(options) === "string") return instance[options]();
            // $("div").PageSwitch("init");
        })
    }

    $.fn.PageSwitch.defaults = {
        selectors: {
            sections: ".sections",
            section: ".section",
            page: ".pages",
            active: ".active"
        },
        index: 0,
        easing: "ease",
        duration: 500,
        loop: false,
        pagination: true,
        keyboard: true,
        direction: "vertical",
        callback: ""
    }
})(jQuery)
