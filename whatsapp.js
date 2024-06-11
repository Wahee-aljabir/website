const apiKey = '$2a$10$rzX4Ltk.cDKi.3LJ42sPZelnW2p5W8GSvYhrWPPpTLzzufsbXijqm';
const binId = '66648010e41b4d34e4006255';
const jsonbinUrl = `https://api.jsonbin.io/v3/b/${binId}`;

$(document).ready(async function () {

    $('#myInput').val('');
    $('#name').val('');

    var currentChatNo = 0;

    var allMessages = [

    ];

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
            //allMessages.push(name + ": " + text + "  time: " + currentTime);

            var newMessage = {
                chatnumber: currentChatNo,
                text: text,
                from: name,
                time: currentTime
            };
            allMessages.push(newMessage);

            if (allMessages.length > 100) {
                allMessages.splice(0, allMessages.length - 100);
                $('.chatbox .message:first').remove();
            }
            console.log("Current number of messages in the array: " + allMessages.length);
            inputArea.val('');
            addMessage(newMessage);

            saveMessageJsonBin();
        }
    }

    function addMessage(message) {
        var newMessageDiv = $('<div class="message my_message"><p>Hi<br><span>12:15</span></p></div>');
        newMessageDiv.find('p').html(message.from + ": " + message.text + " The time is: " + message.time);
        newMessageDiv.find('span').html(message.time);
        $('.chatbox').append(newMessageDiv);

    }

    //Event listener for the Send button
    $('#sendButton').click(sendText);

    //Event listener for the Send button
    $('.chatname').click(chatClick);

    $('#tryit').click(myFunction);


    function chatClick() {
        var div = $(this);
        var chatno = div.attr("chatnumber");
        currentChatNo = parseInt(chatno);
        if (currentChatNo === 1){
            $('#child').show('slow');
        }
        else{
            $(".chatname.active").removeClass('active');
            div.addClass('active');

            showMessagesForChat(currentChatNo, allMessages);
        };
        
        if (currentChatNo === 0){
            $('#child').hide('fast')
        }
    };

    // Event listener for pressing Enter key in the textarea
    inputArea.keypress(function (e) {
        if (e.which === 13) { // 13 is the Enter key
            e.preventDefault(); // Prevent default action (new line or form submission)
            sendText();

        };
    });

    async function saveMessageJsonBin() {
        await storeMessages(allMessages);

    };

    function showMessagesForChat(chatNumber, allMessages) {
        $(".chatbox").empty();

        allMessages.forEach(m => {
            if (m.chatnumber == chatNumber) {
                addMessage(m);
            };
        });

    };

    async function loadMessagesFromJsonBin(allMessages) {
        allMessages.splice(0, 0);
        await loadMessages(allMessages, function () {

            showMessagesForChat(currentChatNo, allMessages);
        });
        //document.getElementById("output").innerText = JSON.stringify(messages);

    };

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
        };
    };

    async function loadMessages(messages, finished) {
        try {

            let req = new XMLHttpRequest();

            req.onreadystatechange = () => {
                if (req.readyState == XMLHttpRequest.DONE) {
                    const json = JSON.parse(req.responseText); // eval(req.responseText);
                    const record = json.record;
                    record.forEach(y => messages.push(y));

                    finished();
                };
            };

            req.open("GET", jsonbinUrl, true);
            req.setRequestHeader("X-Access-Key", apiKey);
            req.send();

        } catch (error) {
            console.error("Error:", error);
        };
    };

    function myFunction() {
        var letter = document.getElementById("myInput").value;
        var website;
        // If the letter is "c"
        if (letter === "HAM_BURGER") {
            showMessagesForChat(currentChatNo, allMessages);
            $('#child').hide();

            // If the letter is anything else
        } else {
            text = "Wrong Password! &#128551";
            showMessagesForChat(0, allMessages);
        };
        $("#demo").html(text);
    };
});