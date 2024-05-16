$(document).ready(function() {

    var savedMessages = localStorage.getItem("messages") || "";
    var newmessages = savedMessages.split("|");
    newmessages.forEach(addMessage);
    
    const inputArea = $('#newmessage');
    // Function to handle sending text
    function sendText() {
        var text = inputArea.val().trim(); // Trim whitespace
        if (text) { // Check if text is not empty
            newmessages.push(text);
            localStorage.setItem("messages", newmessages.join("|"));

            inputArea.val(''); // Clear the textarea
            addMessage(text);
        }
    }

    function addMessage(text) {
        var newmessageDiv = $('<div class="message my_message"><p>Hi<br><span>12:15</span></p></div>');
        newmessageDiv.find('p').text(text);                
        $('.chatbox').append(newmessageDiv);
        
    }
    
    // Event listener for the Send button
    $('#sendButton').click(sendText);

    // Event listener for pressing Enter key in the textarea
    inputArea.keypress(function(e) {
        if (e.which === 13) { // 13 is the Enter key
            e.preventDefault(); // Prevent default action (new line or form submission)
            sendText();
        }
    });
});