"use strict";

const $ = selector => document.querySelector (selector);

    $("#join_list").addEventListener("click", evt => {
        const email1=$("#email_1").value;
        const email2=$("#email_2").value;
        const firts_name=$("#first_name").value;

        let error_message ="";
        
        if (email1 == "")  {
            error_message += "First email is required.\n";
        }

        if (email2 == "")  {
            error_message += "Please re-enter email.\n";
        }

        if (email1 != email2)  {
            error_message += "Both emails must match.\n";
        }

        if (firts_name == "")  {
            error_message += "First name is required.\n";
        }

        if (error_message != "")  {
            alert (error_message);
            evt.preventDefault();
        }

    });

    $("#clear_form").addEventListener ("click", ()=> {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("email_1").focus();

    });