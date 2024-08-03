document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const feedback = document.getElementById('form-feedback');

    if (name && email && message) {
        feedback.textContent = 'Thank you for your message!';
        feedback.style.color = 'green';
    } else {
        feedback.textContent = 'Please fill in all fields.';
    }
});

// Image slider control
const slider = document.getElementById('myRange');
const images = document.querySelectorAll('.slides');
slider.addEventListener('input', function() {
    const value = slider.value;
    images.forEach((img, index) => {
        if ((index + 1) * 10 <= value) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
});

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Ensure something is drawn on the canvas
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

// Additional drawing for visibility
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = 'green';
ctx.font = '20px Arial';
ctx.fillText('Hello Canvas', 200, 50);

document.getElementById('search-input').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});