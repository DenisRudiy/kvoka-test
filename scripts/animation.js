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

const cont_btn = document.querySelector(".contact_btn");
const cont_icon = document.getElementById("contact_btn_icon");
const cont_btn_text = document.getElementById("contact_btn_text");

function animateContButtonOn() {
  cont_icon.style.left = "10px";
  cont_btn.style.width = "205px";
  cont_btn_text.style.paddingLeft = "25px";
}
function animateContButtonOff() {
  cont_icon.style.left = "-30%";
  cont_btn_text.style.width = "185px";
  cont_btn_text.style.paddingLeft = "0px";
}
