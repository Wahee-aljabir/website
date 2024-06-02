const apiKey = '$2a$10$rzX4Ltk.cDKi.3LJ42sPZelnW2p5W8GSvYhrWPPpTLzzufsbXijqm';
const binId = '6646469ce41b4d34e4f4c737';
const jsonbinUrl = `https://api.jsonbin.io/v3/b/${binId}`;

$(document).ready(async function () {

    //var savedMessages = localStorage.getItem("messages") || "";
    //var allMessages = savedMessages.split("|");
    var allMessages = [];
    await loadMessagesFromJsonBin(allMessages);

    const inputArea = $('#allMessages');
    const namearea = $('#name');
    // Function to handle sending text
    function sendText() {
        var text = inputArea.val().trim();
        var name = namearea.val().trim();
        if (!name) {
            alert("Name is required");
            return;
        }
        if (text + name) {
            var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            allMessages.push(name + ": " + text + "  time: " + currentTime);
            if (allMessages.length > 100) {
                allMessages.splice(0, allMessages.length - 100);
                $('.chatbox .message:first').remove();
            }
            console.log("Current number of messages in the array: " + allMessages.length);
            inputArea.val('');
            addMessage(name + ": " + text + "  time: " + currentTime);
        }
    }

    function addMessage(text) {
        var allMessagesDiv = $('<div class="message my_message"><p>Hi<br><span>12:15</span></p></div>');
        allMessagesDiv.find('p').html(text);
        $('.chatbox').append(allMessagesDiv);

    }

    // Event listener for the Send button
    $('#sendButton').click(sendText);

    // Event listener for pressing Enter key in the textarea
    inputArea.keypress(function (e) {
        if (e.which === 13) { // 13 is the Enter key
            e.preventDefault(); // Prevent default action (new line or form submission)
            sendText();
            saveMessageJsonBin();
        }
    });



    async function saveMessageJsonBin() {
        await storeMessages(allMessages);

    }

    async function loadMessagesFromJsonBin(allMessages) {
        allMessages.splice(0, 0);
        await loadMessages(allMessages, function () {
            allMessages.forEach(m => addMessage(m));
            //$('.chatbox .message:last').scrollTo();
        });
        //document.getElementById("output").innerText = JSON.stringify(messages);

    }

    async function storeMessages(messages) {


        try {

            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    console.log(req.responseText);
                }
            };

            req.open("PUT", jsonbinUrl, true);
            req.setRequestHeader("Content-Type", "application/json");
            req.setRequestHeader("X-Access-Key", apiKey);

            const json = JSON.stringify(messages);

            req.send(json);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    async function loadMessages(messages, finished) {
        try {

            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    const json = JSON.parse(req.responseText); // eval(req.responseText);
                    const record = json.record;
                    record.forEach(y => messages.push(y));

                    finished();
                }
            };

            req.open("GET", jsonbinUrl, true);
            req.setRequestHeader("X-Access-Key", apiKey);
            req.send();

        } catch (error) {
            console.error("Error:", error);
        }
    }
});