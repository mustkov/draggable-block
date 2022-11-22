// Custom Scripts
(function () {
  var container = document.getElementById("container"),
    elem = document.getElementById("draggable");

  var isMouseDown = false,
    mouseX,
    mouseY,
    elemTop,
    elemLeft,
    diffX,
    diffY,
    newElemTop,
    newElemLeft,
    rightBorder,
    bottomBorder;

  var containerWidth = container.clientWidth,
    containerHeight = container.clientHeight,
    elemWidth = elem.clientWidth,
    elemHeight = elem.clientHeight;

  function mouseDown(e) {
    isMouseDown = true;
    hitCounter = 0;

    mouseX = e.clientX;
    mouseY = e.clientY;

    elemTop = elem.offsetTop;
    elemLeft = elem.offsetLeft;

    diffX = mouseX - elemLeft;
    diffY = mouseY - elemTop;
  }

  function mouseUp() {
    isMouseDown = false;
  }

  function mouseMove(e) {
    if (!isMouseDown) return;

    var newMouseX = e.clientX;
    var newMouseY = e.clientY;

    newElemTop = newMouseY - diffY;
    newElemLeft = newMouseX - diffX;

    (rightBorder = containerWidth - elemWidth),
      (bottomBorder = containerHeight - elemHeight);

    if (
      newElemLeft < 0 ||
      newElemTop < 0 ||
      newElemLeft > rightBorder ||
      newElemTop > bottomBorder
    ) {
      if (newElemLeft < 0) {
        newElemLeft = 0;
      }

      if (newElemTop < 0) {
        newElemTop = 0;
      }
      if (newElemLeft > rightBorder) {
        newElemLeft = rightBorder;
      }
      if (newElemTop > bottomBorder) {
        newElemTop = bottomBorder;
      }
    }

    elem.style.top = newElemTop + "px";
    elem.style.left = newElemLeft + "px";
  }

  document.addEventListener("mousemove", mouseMove);
  elem.addEventListener("mouseup", mouseUp);
  elem.addEventListener("mousedown", mouseDown);
})();

