const receipt = document.querySelector(".receipt");
const button = document.querySelector("button");

const toggleReceipt = () => {
  receipt.classList.toggle("active");

  if (receipt.classList.contains("active")) {
    button.innerHTML = "收起";
  } else {
    button.innerHTML = "展开";
  }
};

button.addEventListener("click", toggleReceipt);
