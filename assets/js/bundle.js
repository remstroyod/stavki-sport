"use strict";var Home={init:function(){this.header=this.header(this),this.products=this.products(this)},header:function(){if(document.querySelector(".collapseHeaderTextBtn")){const e=document.querySelector(".collapseHeaderTextBtn");e.addEventListener("click",function(e){e.preventDefault(),this.parentElement.classList.toggle("active")})}},products:function(){document.querySelector(".productToggleBtn")&&document.querySelectorAll(".productToggleBtn").forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),this.parentElement.classList.toggle("active")})})}};Home.init();