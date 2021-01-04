//First create a list of all bold items
let bold_Items;
window.onload = getBold_items();

function getBold_items() {
  bold_Items = document.getElementsByTagName("strong");
}

function highlight() {
  for (let i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.color = "green";
  }
}

function return_normal() {
  for (let i = 0; i < bold_Items.length; i++) {
    bold_Items[i].style.color = "black";
  }
}
