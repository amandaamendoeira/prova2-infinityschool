const titleElement = document.getElementById('typing-title');
const titleText = "Amanda Amendoeira Cavalcanti";
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); 
    }
}

typeWriter();