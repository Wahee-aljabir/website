document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const dropdownMenu = document.getElementById('dropdownMenu');

    const suggestions = {
        "Quiz": "Quiz.html",
        "Hangman": "hangman.html",
        "Todo": "todo.html",
        "Pong": "Pong.html",
        "Coding": "coding.html",
        "Qrcode Generater": "Qrcode.html",
        "Dictionary": "Dictionary.html",
        "Halaltube": "youtube2.html",
        "Qrcode Scan": "Qrcodescan.html",
        "Boycott": "Boycott.html",
        "Billboard": "Billboard.html"
    };

    const passwordProtected = {
        "Coding": "coding.html"
    };

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        dropdownMenu.innerHTML = '';
        if (query) {
            const filteredSuggestions = Object.keys(suggestions).filter(item => item.toLowerCase().includes(query));
            filteredSuggestions.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('dropdown-item');
                div.textContent = item;
                div.addEventListener('click', () => {
                    if (passwordProtected[item]) {
                        const password = prompt("Enter the password to access this project:");
                        if (password === "PASSWORD") {
                            window.location.href = suggestions[item];
                        } else {
                            alert("Incorrect password!");
                        }
                    } else {
                        window.location.href = suggestions[item];
                    }
                });
                dropdownMenu.appendChild(div);
            });
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    document.addEventListener('click', (event) => {
        if (!searchInput.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});