$(document).ready(function() {
    $("#messageArea").on("submit", function(event) {
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const str_time = hour + ":" +minute;
        var rawText = $("#text").val();
        console.log(rawText);
        var msg = $(".msg_cotainer_send").value;
        console.log(msg);
        var userHtml = '<div class="d-flex justify-content-end mb-4"><div class="msg_cotainer_send">' + rawText + '<span class="msg_time_send">'+ str_time + '</span></div><div class="img_cont_msg"><img src="https://i.ibb.co/d5b84Xw/Untitled-design.png" class="rounded-circle user_img_msg"></div></div>';
        
        $("#text").val("");
        $("#messageFormeight").append(userHtml);

        // Modify the URL in the AJAX request to include "Chatbot.html?msg="
        $.ajax({
            type: "POST",
            url: `Chatbot.html?msg=`, // Modify the URL here
        }).done(function(data) {
            var botHtml = '<div class="d-flex justify-content-start mb-4"><div class="img_cont_msg"><img src="https://i.ibb.co/fSNP7Rz/icons8-chatgpt-512.png" class="rounded-circle user_img_msg"></div><div class="msg_cotainer">' + data + '<span class="msg_time">' + str_time + '</span></div></div>';
            $("#messageFormeight").append($.parseHTML(botHtml));
        });
        event.preventDefault();
    });
});