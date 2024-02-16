"use strict";

const btn = document.querySelector(".main_card_btn2");
const icon = document.getElementById("main_btn_icon");
const btn_text = document.getElementById("main_btn_text");

function animateButtonOn() {
  icon.style.left = "10px";
  btn.style.width = "205px";
  btn_text.style.paddingLeft = "25px";
}
function animateButtonOff() {
  icon.style.left = "-30%";
  btn.style.width = "185px";
  btn_text.style.paddingLeft = "0px";
}
