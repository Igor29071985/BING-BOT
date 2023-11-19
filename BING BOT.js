// ==UserScript==
// @name         BING BOT
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let searchBtn = document.getElementById("search_icon");
let input = document.getElementsByName("q")[0];
let links = document.links;
let keywords = ["10 самых популярных шрифтов от Google", "Отключение редакций и ревизий", "Вывод произвольных типов записей и полей" ]
let keyword = keywords[getRandom(0, keywords.length)];

if (searchBtn !==null) {
  input.value = keyword;
  searchBtn.click();
} else {

  for (let i = 0; i < links.length; i++) {
    if (links[i].href.includes("napli.ru")) {
      console.log("Нашел строку" + links[i])
      let link = links[i];
      link.click();
      break;
    }
  }
}



function getRandom(min, max) {
return Math.floor (Math.random() * (max - min) + min);
}
