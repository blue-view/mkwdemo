define(['jquery'], function ($) {

    function Widget() {
        this.box = null;
    }
    
    Widget.prototype = {
        on: function (type, handle) {
            if (typeof this.handles[type] == 'undefined') {
                this.handles[type] = [];
            }
            this.handles[type].push(handle);
            return this;
        },
        fire: function (type, data) {
            if (this.handles[type] instanceof Array) {
                var handles = this.handles[type];
                for (var i = 0, len = handles.length; i < len; i++) {
                    handles[i](data);
                }
            }
        },
        renderUI: function () { },//接口：添加dom节点
        bindUI: function () { },//监听事件
        syncUI: function () { },//初始化组件属性

        render: function (container) {
            this.renderUI();
            this.handles = {};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.box);
        },//渲染组件
        destrctor: function () { },//销毁前的处理函数,
        destroy: function () {
            this.destrctor();
            this.box.off();
            this.box.remove();
        }
    }
    return {
        Widget: Widget
    }
});