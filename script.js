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


// Navbar Hide/Show on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling DOWN - hide navbar
        navbar.classList.add('hide-nav');
    } else {
        // Scrolling UP - show navbar
        navbar.classList.remove('hide-nav');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


// Tech For Sale Modal
function openInterestModal(itemName, price) {
    const modal = document.getElementById('interestModal');
    document.getElementById('itemName').textContent = itemName;
    document.getElementById('modalItem').value = itemName;
    document.getElementById('modalPrice').value = price;
    modal.style.display = 'block';
}

function closeInterestModal() {
    const modal = document.getElementById('interestModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('interestModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
