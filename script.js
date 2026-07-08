AOS.init();


var typed = new Typed(".typing", {

    strings: [
        "Cybersecurity Researcher",
        "Computer Scientist",
        "IT Repair Specialist",
        "Technology Enthusiast"
    ],

    typeSpeed: 70,
    backSpeed: 40,
    loop: true

});



particlesJS.load(
    "particles-js",
    "particles.json"
);


// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    updateThemeIcon('sun');
} else {
    document.body.classList.remove('light-mode');
    updateThemeIcon('moon');
}

function updateThemeIcon(icon) {
    themeToggle.innerHTML = `<i class="fas fa-${icon}"></i>`;
}

themeToggle.addEventListener('click', function() {
    const isLightMode = document.body.classList.toggle('light-mode');
    const theme = isLightMode ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
    updateThemeIcon(isLightMode ? 'sun' : 'moon');
});
