// Chatbot Functionality
document.getElementById('openChat').addEventListener('click', function() {
    document.querySelector('.chatbox').style.display = 'flex';
    this.style.display = 'none';
});

document.getElementById('closeChat').addEventListener('click', function() {
    document.querySelector('.chatbox').style.display = 'none';
    document.getElementById('openChat').style.display = 'block';
});

document.getElementById('chatInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const message = e.target.value;
        const chatBody = document.querySelector('.chatbox-body');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        chatBody.appendChild(newMessage);
        e.target.value = '';
    }
});

// JavaScript to change background color on scroll
window.addEventListener("scroll", function() {
    const body = document.querySelector("body");
    if (window.scrollY > 100) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});
