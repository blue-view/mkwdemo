; (function ($) {
    var Dialog = function (config) {
        var _this = this;
        //默认参数配置
        this.config = {
            width: 'auto',
            height: 'auto',
            message: null,
            //对话框的类型
            type: "loading",
            //配置按钮
            buttons: null,
            //弹出框延迟多久关闭
            delay: null,
            maskOpacity: null,
            //是否启用动画
            effect: false
        };
        //默认参数扩展
        if (config && $.isPlainObject(config)) {
            $.extend(this.config, config);
        }
        else {
            _this.config = false;
        }
        // console.log(this.config);
        //创建基本的DOM
        this.body = $('body');
        //创建遮罩层
        this.mask = $('<div class="g-dialog-container"></div>');
        //创建弹出库
        this.win = $(' <div class="diglog-window">');
        //创建头部
        this.winHeader = $('<div class="dialog-header icon iconfont"></div>');
        //创建内容区域
        this.winContent = $(' <div class="dialog-content"></div>');
        //创建按钮组
        this.WinFooter = $('<div class="dialog-footer"></div>');
        //渲染DOM
        this.createDOM();
    }
    Dialog.zIndex=10000;
    Dialog.prototype = {
        createDOM: function () {
            var _this = this,
                config = this.config,
                mask = this.mask,
                win = this.win,
                winHeader = this.winHeader,
                winContent = this.winContent,
                WinFooter = this.WinFooter,
                body = this.body;
                //增加弹框的层级
               
                this.mask.css("zIndex", Dialog.zIndex++);
            //如果没有传递任何配置的参数
            if (!config) {
                winHeader.addClass('icon-loading').addClass('loading');
                win.append(winHeader);
                mask.append(win);
                body.append(mask);
                if (config.effect) {
                    this.animation();
                }
            } else {
                console.log(config.type);
                winHeader.addClass('icon-' + config.type).addClass(config.type);
                win.append(winHeader);
                //如果传递了信息
                if (config.message) {
                    win.append(winContent.html(config.message));
                }
                //按钮组
                if (config.buttons) {
                    this.createButtons(WinFooter, config.buttons);
                    win.append(WinFooter);
                }
                //插入到页面
                mask.append(win);
                body.append(mask);
                //设置宽高
                if (config.width != "auto") {
                    win.width(config.width);
                }
                if (config.height != "auto") {
                    win.height(config.height);
                }
                if (config.maskOpacity) {
                    mask.css("backgroundColor", "rgba(0,0,0," + config.maskOpacity + ")");
                }
                //弹出框弹出多久关闭
                if (config.delay && config.delay != 0) {
                    window.setTimeout(function () {
                        _this.close();
                    }, config.delay);
                }
                if (config.effect) {
                    this.animation();
                }
            }
        },
        close: function () {
            this.mask.remove();
        },
        animation: function () {
            var _this=this;
            this.win.css("transform", "scale(0,0)");
            setTimeout(function(){
                _this.win.css("transform", "scale(1,1)");
            },200);
        },
        createButtons: function (footer, buttons) {
            var _this = this;
            $(buttons).each(function () {
                var type = this.type ? " class=' " + this.type + "'" : "";
                var text = this.text;
                var callback = this.callback;
                var button = $("<button type='button' " + type + ">" + text + "</button>");
                if (callback) {
                    button.tap(function (e) {
                        var isClose = callback();
                        e.stopPropagation();
                        if (isClose != false) {
                            _this.close();
                        }
                    });
                }
                else {
                    button.tap(function () {
                        _this.close();
                    });

                }
                footer.append(button);
            });
        }

    };
    window.Dialog = Dialog;
    $.dialog = function (config) {
        return new Dialog(config);
    }
})(Zepto);