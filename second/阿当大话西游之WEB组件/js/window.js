define(['widget', 'jquery', 'jqueryui'], function (widget, $, $UI) {
    function Window() {
        this.cfg = {
            width: 500,
            height: 300,
            title: 'welcome',
            content: 'skinClassNameA',
            sureText: "确定",
            hasMask: false,
            isDraggable: false,
            dragHandle: null,
            skinClassName: null,
            hasCloseBtn: false,
            sure_callback: null,
            close_callback: null

        };
    }
    Window.prototype = $.extend({}, new widget.Widget(), {
        renderUI: function () {
            this.box = $("<div class='box'>" +
                "<div class='box-header'>" + this.cfg.title + "</div>" +
                '<div class="box-content">' + this.cfg.content + '</div>' +
                '<div class="box-footer"><input type="button" value="' + this.cfg.sureText + '" class="sure"/></div>'
                + "</div>");

            if (this.cfg.hasMask) {
                this._mask = $('<div class="mask"></div>');
                this._mask.appendTo('body');
            }

            if (this.cfg.hasCloseBtn) {
                var closeBtn = $('<span class="box-closeBtn">X</span>')
                closeBtn.appendTo(this.box);
            }
            this.box.appendTo(document.body);
        },
        bindUI: function () {
            var that = this;
            this.box.delegate('.sure', 'click', function () {
                that.fire('alert');
                that.destroy();
            }).delegate('.box-closeBtn', 'click', function () {
                that.fire('close');
                that.destroy();
            });

            this.cfg.close_callback && that.on('close', this.cfg.close_callback);
            this.cfg.sure_callback && that.on('alert', this.cfg.sure_callback);


        },//监听事件
        syncUI: function () {
            this.box.css({
                width: this.cfg.width + "px",
                height: this.cfg.height + "px",
                marginLeft: -this.cfg.width / 2 + "px",
                marginTop: -this.cfg.height / 2 + "px"
            });
            if (this.cfg.skinClassName) {
                this.box.addClass(this.cfg.skinClassName);
            }

            if (this.cfg.isDraggable) {
                if (this.cfg.dragHandle) {
                    this.box.draggable({ handle: this.cfg.dragHandle });
                } else {
                    this.box.draggable();
                }
            }
        },//初始化组件属性
        destrctor: function () {
            this._mask && this._mask.remove();
        },//销毁前的处理函数,
        alert: function (cfg) {
            $.extend(this.cfg, cfg);
            this.render();
            return this;
        },
        confirm: function () { },
        prompt: function () { }
    });
    return { Window: Window }

});