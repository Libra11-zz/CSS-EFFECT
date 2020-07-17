window.onload = function () {
  document.onmousemove = function (e) {
    let light = document.querySelector("#light");
    light.style.top = e.pageY - 250 + "px";
    light.style.left = e.pageX - 250 + "px";
  };
};
