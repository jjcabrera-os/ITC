const customCursor = document.getElementById('cursor');

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    setTimeout(function() {
        customCursor.style.left = mouseX + 'px';
        customCursor.style.top = mouseY + 'px';
    }, 50);
});

document.addEventListener('mousedown', function() {
    customCursor.classList.add('cursor-click');
});

document.addEventListener('mouseup', function() {
    customCursor.classList.remove('cursor-click');
});

const allSections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

const navObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const currentSectionId = entry.target.getAttribute('id');
            navLinks.forEach(function(link) {
                link.classList.remove('active-nav-link');
                if (link.getAttribute('href') === '#' + currentSectionId) {
                    link.classList.add('active-nav-link');
                }
            });
        }
    });
}, {
    threshold: 0.5 
});

allSections.forEach(function(section) {
    navObserver.observe(section);
});

const glitchElements = document.querySelectorAll('.glitch-text');
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function runGlitch(element) {
    let iterations = 0;
    const originalText = element.dataset.value;

    const interval = setInterval(function() {
        let newText = "";
        for (let i = 0; i < originalText.length; i++) {
            if (i < iterations) {
                newText += originalText[i];
            } else {
                const randomIndex = Math.floor(Math.random() * 26);
                newText += alphabet[randomIndex];
            }
        }
        element.innerText = newText;
        if (iterations >= originalText.length) {
            clearInterval(interval);
        }
        iterations += 1 / 3;
    }, 30);
}

glitchElements.forEach(function(element) {
    element.addEventListener('mouseover', function(event) {
        runGlitch(event.target);
    });
});

window.onload = function() {
    const mainTitle = document.getElementById('main-title');
    if (mainTitle) {
        runGlitch(mainTitle);
    }
};

const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(function(card) {
    card.addEventListener('mousemove', function(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
});