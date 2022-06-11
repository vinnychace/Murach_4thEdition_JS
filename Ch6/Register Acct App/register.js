"use strict";

const $ = selector => document.querySelector(selector);

const displayErrorMsgs = msg => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }

    const node = $("ul");
    if (node == null) {
        const form = $("form");
        form.parentNode.insertBefore(ul, form);
    }
        else { 
            node.parentNode.replaceChild(ul, node);
    }
}

const processEntries = () => {
    const email = $("#email_address");
    const phone = $("phone");
    const country = $("#country");
    const terms = $("#terms");

    const msgs = [];

    if (email.value == ""){
        msgs[msgs.length] = "Please enter an email address.";
    }
    if (phone.value == ""){
        msgs[msgs.length] = "Please enter a mobile phone number.";
    }
    if (country.value == ""){
        msgs[msgs.length] = "Please select a country.";
    }
    if (terms.checked == false){
        msgs[msgs.length] = "You must agree to the terms of service.";
    }

    if (msgs.length == 0) {
        $("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }

};

const resetForm = () => {
    $("form").reset();
    $("ul").remove();
    $("email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    $("#register").addEventListener("click", processEntries);
    $("#reset_form").addEventListener("click", resetForm);
    $("#email_address").focus();
});