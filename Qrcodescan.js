const wrapper = document.querySelector(".wrapper"),
form = wrapper.querySelector("form"),
fileInp = form.querySelector("input"),
infoText = form.querySelector("p"),
copyBtn = wrapper.querySelector(".copy"),
closeBtn = wrapper.querySelector(".close");

function fetchRequest(formData, file) {
    infoText.innerText = "Scanning QR Code..."
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: "POST", body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        console.log(result);
        wrapper.querySelector("textarea").innerText = result;
        form.querySelector("img").src = URL.createObjectURL(file);
        infoText.innerText = "Upload Qr Code to Scan";
        wrapper.classList.add("active");
    });
}

fileInp.addEventListener("change", e => {
    let file = e.target.files[0];
    if (!file) return;
    let formData = new FormData();
    formData.append("file", file);
    fetchRequest(formData, file);
});

copyBtn.addEventListener("click", () => {
    let text = wrapper.querySelector("textarea").textContent;
    navigator.clipboard.writeText(text);
});

form.addEventListener("click", () => fileInp.click());
closeBtn.addEventListener("click", () => wrapper.classList.remove("active"));