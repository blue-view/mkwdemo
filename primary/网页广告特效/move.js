function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
function moveStart(obj, json, callback) {
    var flag = true;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var attr in json) {
            if (attr == "opacity") {
                distance = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            }
            else {
                distance = parseInt(getStyle(obj, attr));
            }
            var speed = (json[attr] - distance) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (distance != json[attr]) {
                flag = false;
            }
            if (attr == "opacity") {
                obj.style.filter = "alpha(opactiy:" + (distance + speed) + ")"
                obj.style.opacity = (distance + speed) / 100;
            }
            else {
                obj.style[attr] = distance + speed + "px";
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            callback && callback();
        }

    }, 50);

}
