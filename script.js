// Event Handling
const actionBtn = document.getElementById('actionBtn');
const actionText = document.getElementById('actionText');
let clickCount = 0;

actionBtn.addEventListener('click', () => {
    clickCount++;
    actionText.textContent = `Button clicked ${clickCount} times!`;
    actionBtn.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
});

actionBtn.addEventListener('mouseover', () => {
    actionBtn.style.transform = 'scale(1.1)';
});

actionBtn.addEventListener('mouseout', () => {
    actionBtn.style.transform = 'scale(1)';
});

// Bonus: Double-click secret action
actionBtn.addEventListener('dblclick', () => {
    actionText.textContent = 'Secret double-click activated! 🎉';
    actionText.style.color = 'purple';
});

document.getElementById('keyInput').addEventListener('keypress', (e) => {
    document.getElementById('keyOutput').textContent = `You pressed: ${e.key}`;
});

// Image Gallery
let currentImage = 0;
const images = document.querySelectorAll('.gallery-img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage(currentImage);
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
}

// Tabs
function openTab(tabNumber) {
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab${tabNumber}`).classList.add('active');
    document.querySelector(`.tab-btn:nth-child(${tabNumber})`).classList.add('active');
}

// Form Validation
function validateForm(event) {
    event.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (!name) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (!password) {
        passwordError.textContent = 'Password is required';
        isValid = false;
    } else if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('userForm').reset();
    }
}

// Bonus: Real-time feedback
document.getElementById('email').addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('emailError').textContent = 
        e.target.value && !emailRegex.test(e.target.value) ? 'Invalid email format' : '';
});

document.getElementById('password').addEventListener('input', (e) => {
    document.getElementById('passwordError').textContent = 
        e.target.value && e.target.value.length < 8 ? 'Password must be at least 8 characters' : '';
});
