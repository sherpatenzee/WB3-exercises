"use strict";

window.onload = init;

function init() 
{
   const dateBtn = document.getElementById("btn");
   dateBtn.onclick = onBtnClicked;
   
}

function onBtnClicked()
{
  let input = document.getElementById("box");
  let date = input.value;
  let display = document.getElementById("msg");
  display.innerHTML = date.toString();
}