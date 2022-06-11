"use strict";

const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    const caption = $ ("#caption");
    const main_image = $("#main_image");

    const links = $("#image_list").querySelectorAll("a");

    const image_cache = [];

    let image = null;

    for (let link of links) {
        image= new Image();
        image.src= link.href;
        image.alt= link.title;

        image_cache [image_cache.length] = image;
    }

    let image_counter = 0;

    setInterval( () => {
        image_counter= (image_counter + 1) % image_cache.length;
        image = image_cache[image_counter];

        main_image.src = image.src;
        main_image.alt = image.alt;
        caption.textContext = image.alt;
    }, 2000);

});