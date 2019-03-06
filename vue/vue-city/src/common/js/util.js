module.exports ={
    setRem: function () {
        var html = document.documentElement;
        var hWidth = html.getBoundingClientRect().width;
        html.style.fontSize = hWidth / 10 + "px";
        if (hWidth > 540) {
            html.style.fontSize = "54px";
        }
    }
}