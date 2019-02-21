require.config({
    paths: {
        jquery: "jquery",
        jqueryui: "jqueryui"
    }
});
require(['jquery', 'window'], function ($, w) {
    $("#a1").click(function () {
        
        var _w = new w.Window();
        _w.alert(
            {
                title: '系统消息',
                content: 'window',
                width: 300,
                height: 200,
                skinClassName: "skinClassNameA",
                hasCloseBtn: true,
                sureText: 'ok',
                hasMask: true,
                isDraggable: true,
                dragHandle: '.box-header',
                sure_callback: function () {
                    alert('sure_callback!')
                },
                close_callback: function () {
                    alert('close_callback!')
                }
            }).
            on('alert', function () {
                alert(1);
            }).on('alert', function () {
                alert(2);
            })
    });
});