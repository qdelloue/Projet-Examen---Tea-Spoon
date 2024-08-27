// Navbar
const bars = document.querySelector('.bars');
const menu = document.querySelector('.nav-items');

bars.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

document.addEventListener('mouseup', (e) => {
    if (!menu.contains(e.target) && !bars.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});

// Form
const connexion = document.getElementById('connexion');
const signin = document.getElementById('signin');
const login = document.getElementById('login');
const signinBtn = document.getElementById('signin-button');
const loginBtn = document.getElementById('login-button');
const signinLink = signin.querySelector('a');
const loginLink = login.querySelector('a');

signinBtn.addEventListener('click', () => {
    connexion.style.display = "none";
    signin.style.display = "flex";
});

loginBtn.addEventListener('click', () => {
    connexion.style.display = "none";
    login.style.display = "flex";
});

signinLink.addEventListener('click', (e) => {
    e.preventDefault();
    signin.style.display = "none";
    login.style.display = "flex";
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    login.style.display = "none";
    signin.style.display = "flex";
});