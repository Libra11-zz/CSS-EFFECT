window.onload = function () {
  var way_res = [];
  var btn_txt = document.querySelectorAll(".btn");
  var txt = document.querySelector(".txt");
  var btn_way = document.querySelectorAll(".btn_click");
  for (let i = 0; i < btn_way.length; i++) {
    btn_way[i].addEventListener("click", function () {
      if (this.value === "AC") {
        way_res = [];
        txt.innerHTML = 0;
      } else {
        txt.innerHTML = txt.innerHTML.substr(0, txt.innerHTML.length - 1);
      }
    });
  }
  for (var i = 0; i < btn_txt.length; i++) {
    btn_txt[i].onclick = function () {
      if (txt.innerHTML == 0 && this.value == ".") {
        txt.innerHTML = "0.";
      } else {
        if (txt.innerHTML == 0) {
          txt.innerHTML = "";
        }
        if (!isNaN(this.value) || this.value == ".") {
          if (txt.innerHTML.indexOf(".") != -1) {
            if (this.value != ".") {
              txt.innerHTML += this.value;
            }
          } else {
            txt.innerHTML += this.value;
          }
        } else {
          if (this.value != "=") {
            way_res[way_res.length] = txt.innerHTML;
            way_res[way_res.length] = this.value;
            txt.innerHTML = txt.innerHTML + this.value;
          } else {
            way_res[way_res.length] = txt.innerHTML;
            console.log(way_res);
            txt.innerHTML = eval(way_res[2]);
            way_res = [];
          }
        }
      }
    };
  }
};
