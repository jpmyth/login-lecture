"use strict"

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtd = document.querySelector("button");

loginBtd.addEventListener("click", login);

function login() {
   const req = {
     id: id.value,
     psword: psword.value,  
    };
}