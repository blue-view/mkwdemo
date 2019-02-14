
window.onload = function () {
    document.onselectstart = new Function("event.returnValue=false;");
    var rightDiv = document.getElementById("right");
    var mainDiv = document.getElementById("main");
    var upDiv = document.getElementById("up");
    var leftDiv = document.getElementById("left");
    var downDiv = document.getElementById("down");
    var leftUp = document.getElementById("leftUp");
    var rightUp = document.getElementById("rightUp");
    var rightDown = document.getElementById("rightDown");
    var leftDown = document.getElementById("leftDown");

    var ifkeyDown = false;
    var contact = '';
    rightDiv.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "right";
    }
    upDiv.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "up";
    }
    leftDiv.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "left";
    }
    downDiv.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "down";
    }
    leftUp.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "leftUp";
    }
    rightUp.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "rightUp";
    }
    rightDown.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "rightDown";
    }

    leftDown.onmousedown = function (e) {
        ifkeyDown = true;
        contact = "leftDown";
    }

    window.onmousemove = function (e) {
        if (ifkeyDown) {
            var e = e || window.eve;
            if (contact == "right") {
                rightMove(e);
            }
            else if (contact == "up") {
                upMove(e);
            }
            else if (contact == "left") {
                leftMove(e);
            }
            else if (contact == "down") {

                downMove(e);
            }
            else if (contact == "leftUp") {
                leftMove(e);
                upMove(e);

            } else if (contact == "rightUp") {
                rightMove(e);
                upMove(e);
            }
            else if (contact == "rightDown") {
                rightMove(e);
                downMove(e);
            }
            else if (contact == "leftDown") {
                leftMove(e);
                downMove(e);
            }
            selChoice();
        }
    }
    function rightMove(e) {
        var x = e.clientX;
        var widthBefore = mainDiv.offsetWidth - 2;
        var addWidth = x - getPos(mainDiv).left - widthBefore;
        mainDiv.style.width = addWidth + widthBefore + "px";
    }
    function upMove(e) {
        var y = e.clientY;
        var mainY = getPos(mainDiv).top;
        var addHeight = mainY - y;
        var heightBefore = mainDiv.offsetHeight - 2
        mainDiv.style.height = addHeight + heightBefore + "px";
        mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
    }
    function leftMove(e) {
        var x = e.clientX;
        var widthBefore = mainDiv.offsetWidth - 2;
        var addWidth = getPos(mainDiv).left - x;
        mainDiv.style.width = addWidth + widthBefore + "px";
        mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
    }
    function downMove(e) {
        var y = e.clientY;
        var mainY = getPos(mainDiv).top;
        var heightBefore = mainDiv.offsetHeight - 2;
        var addHeight = y - mainY - heightBefore;
        mainDiv.style.height = addHeight + heightBefore + "px";
        // mainDiv.style.top = mainDiv.offsetTop + addHeight + "px";
    }
    function selChoice() {
        var top = mainDiv.offsetTop;
        var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
        var left = mainDiv.offsetLeft;
        var down = mainDiv.offsetTop + mainDiv.offsetHeight;

        var img2 = document.getElementById("img2");
        img2.style.clip = "rect(" + top + "px," + right + "px," + down + "px," + left + "px)";
    }
    rightDiv.onmouseup = function () {
        ifkeyDown = false;
    }
    upDiv.onmouseup = function () {
        ifkeyDown = false;
    }
    leftDiv.onmouseup = function () {
        ifkeyDown = false;
    }
    downDiv.onmouseup = function () {
        ifkeyDown = false;
    }
    leftUp.onmouseup = function () {
        ifkeyDown = false;
    }
    rightUp.onmouseup = function () {
        ifkeyDown = false;
    }
    rightDown.onmouseup = function () {
        ifkeyDown = false;
    }
    leftDown.onmouseup = function () {
        ifkeyDown = false;

    }
    function getPos(node) {
        var left = node.offsetLeft;
        var top = node.offsetTop;
        var parent = node.offsetParent;
        while (parent != null) {
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent
        }
        return {
            left: left,
            top: top
        };
    }
}
