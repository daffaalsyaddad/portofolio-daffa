// ==================== ADVANCED ANIMATIONS & INTERACTIONS ====================


function openModal(title, image){

document.getElementById("modalTitle").innerText = title;
document.getElementById("modalImage").src = image;

const modal = document.getElementById("certModal");

modal.classList.remove("hidden");
modal.classList.add("flex");

}

function closeModal(){

const modal = document.getElementById("certModal");

modal.classList.remove("flex");
modal.classList.add("hidden");

}


// Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('-translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('-translate-x-full');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Modal functions untuk certificates
    

    

    // Close modal when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('certModal');
        if (event.target == modal) {
            closeModal();
        }
    }

    // Form submission handler
    function handleSubmit(event) {
        event.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.');
        event.target.reset();
    }

    // Navbar scroll effect dengan smooth transition
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(17, 17, 17, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'rgba(17, 17, 17, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });

    // Active link highlighting dengan smooth transition
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-purple-400');
            link.classList.remove('font-medium');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-purple-400');
                link.classList.add('font-medium');
            }
        });
    });

    // Parallax effect untuk background
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
        const moveY = (e.clientY / window.innerHeight - 0.5) * 20;
        
        const heroImage = document.querySelector('#home .floating');
        if (heroImage) {
            heroImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
// 1. PRELOADER ANIMATION - Loading screen yang keren
window.addEventListener('load', () => {
    // Buat preloader element
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-spinner"></div>
            <div class="preloader-text mt-4 text-gradient">Daffa.dev</div>
        </div>
    `;
    
    // Style preloader
    const style = document.createElement('style');
    style.textContent = `
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0f0f0f;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        
        .preloader-content {
            text-align: center;
            animation: preloaderFade 2s infinite;
        }
        
        .preloader-spinner {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(139, 92, 246, 0.1);
            border-top-color: #8b5cf6;
            border-right-color: #22d3ee;
            border-radius: 50%;
            animation: spinner 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
            margin: 0 auto 20px;
            box-shadow: 0 0 30px rgba(139, 92, 246, 0.3);
        }
        
        .preloader-text {
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 2px;
            animation: textGlow 1.5s ease-in-out infinite;
        }
        
        @keyframes spinner {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        @keyframes preloaderFade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
        }
        
        @keyframes textGlow {
            0%, 100% { text-shadow: 0 0 10px rgba(139, 92, 246, 0.5); }
            50% { text-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 50px rgba(34, 211, 238, 0.5); }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(preloader);
    
    // Hilangkan preloader setelah 1.5 detik
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(() => preloader.remove(), 1000);
    }, 1500);
});

// 2. CURSOR CUSTOM EFFECT - Kursor dengan efek glow
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 30px;
        height: 30px;
        border: 2px solid #8b5cf6;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
        transition-property: width, height, border, transform;
        transform: translate(-50%, -50%);
        mix-blend-mode: difference;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
    }
    
    .custom-cursor.hover {
        width: 50px;
        height: 50px;
        border-color: #22d3ee;
        background: rgba(34, 211, 238, 0.1);
        box-shadow: 0 0 30px rgba(34, 211, 238, 0.6);
    }
    
    .custom-cursor.click {
        transform: translate(-50%, -50%) scale(0.8);
        background: rgba(139, 92, 246, 0.3);
    }
    
    @media (max-width: 768px) {
        .custom-cursor {
            display: none;
        }
    }
`;
document.head.appendChild(cursorStyle);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Hover effect pada elemen yang bisa diklik
const clickables = document.querySelectorAll('a, button, .project-card, .skill-card, .cert-card');
clickables.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Click effect
document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// 3. PARALLAX SCROLLING EFFECT
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax untuk background hero
    const heroSection = document.querySelector('#home');
    if (heroSection) {
        const heroBg = heroSection.querySelector('.bg-grid');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    }
    
    // Parallax untuk floating elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((el, index) => {
        const speed = 0.1 + (index * 0.05);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// 4. TYPEWRITER EFFECT untuk hero section
const heroSubtitle = document.querySelector('#home h2');
if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    heroSubtitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroSubtitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    };
    
    // Mulai typewriter setelah preloader selesai
    setTimeout(typeWriter, 2000);
}

// 5. SCROLL PROGRESS BAR
const progressBar = document.createElement('div');
progressBar.className = 'scroll-progress';
document.body.appendChild(progressBar);

const progressStyle = document.createElement('style');
progressStyle.textContent = `
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #8b5cf6, #22d3ee);
        z-index: 9998;
        transition: width 0.1s ease;
        box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
    }
`;
document.head.appendChild(progressStyle);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// 6. COUNT UP ANIMATION untuk statistik
const stats = document.querySelectorAll('.stat-card .text-gradient');
const statsNumbers = [10, 8, 15]; // Sesuaikan dengan angka di website

const countUp = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateNumber = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target + '+';
        }
    };
    
    updateNumber();
};

// Intersection Observer untuk memulai count up saat elemen terlihat
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            countUp(statNumber, statsNumbers[index]);
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

stats.forEach((stat, index) => {
    statsObserver.observe(stat);
});

// 7. 3D TILT EFFECT pada project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// 8. GLOW EFFECT ON SCROLL untuk section titles
const sectionTitles = document.querySelectorAll('section h2');

window.addEventListener('scroll', () => {
    sectionTitles.forEach(title => {
        const rect = title.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const scrollPercent = 1 - (rect.top / window.innerHeight);
            const glowIntensity = Math.max(0.3, Math.min(1, scrollPercent * 2));
            title.style.textShadow = `0 0 ${30 * glowIntensity}px rgba(139, 92, 246, ${glowIntensity})`;
        }
    });
});

// 9. ANIMATED BACKGROUND PARTICLES
const canvas = document.createElement('canvas');
canvas.id = 'particle-canvas';
canvas.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
`;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#22d3ee';
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }
    
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let particle of particles) {
        particle.update();
        particle.draw();
    }
    
    requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', initParticles);

// 10. SMOOTH PAGE TRANSITIONS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            // Fade out effect
            document.body.style.opacity = '0.5';
            document.body.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                setTimeout(() => {
                    document.body.style.opacity = '1';
                }, 300);
            }, 150);
        }
    });
});

// 11. MAGNETIC BUTTON EFFECT
const buttons = document.querySelectorAll('a[href="#"], button');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        const strength = Math.min(1, (maxDistance - distance) / maxDistance);
        
        if (distance < maxDistance) {
            button.style.transform = `translate(${x * strength * 0.3}px, ${y * strength * 0.3}px)`;
        }
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translate(0, 0)';
    });
});

// 12. LAZY LOADING WITH BLUR EFFECT untuk gambar
const images = document.querySelectorAll('img');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.style.transition = 'filter 1s ease';
            img.style.filter = 'blur(0)';
            imageObserver.unobserve(img);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

images.forEach(img => {
    img.style.filter = 'blur(10px)';
    imageObserver.observe(img);
});

// 13. TEXT REVEAL ON SCROLL
const revealTexts = document.querySelectorAll('p, h1, h2, h3');

const textObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

revealTexts.forEach(text => {
    text.style.opacity = '0';
    text.style.transform = 'translateY(20px)';
    text.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    textObserver.observe(text);
});

// 14. DYNAMIC NAVBAR HIDE/SHOW ON SCROLL
let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll down - hide navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up - show navbar
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// 15. RIPPLE EFFECT ON CLICK
function createRipple(event) {
    const button = event.currentTarget;
    
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.querySelector('.ripple');
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(34, 211, 238, 0.3) 100%);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

document.querySelectorAll('a, button').forEach(el => {
    el.style.position = 'relative';
    el.style.overflow = 'hidden';
    el.addEventListener('click', createRipple);
});

// 16. AUTO HIGHLIGHT CURRENT SECTION IN NAVBAR (Enhanced)
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-purple-400', 'font-medium', 'scale-110');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('text-purple-400', 'font-medium', 'scale-110');
            link.style.transition = 'all 0.3s ease';
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);
highlightNavOnScroll();

// 17. TOOLTIP FOR SOCIAL ICONS
const socialIcons = document.querySelectorAll('.flex.gap-4 a');

socialIcons.forEach(icon => {
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.textContent = icon.getAttribute('href') ? 'Visit profile' : 'Coming soon';
    
    icon.style.position = 'relative';
    icon.appendChild(tooltip);
});

const tooltipStyle = document.createElement('style');
tooltipStyle.textContent = `
    .tooltip {
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%) scale(0);
        background: linear-gradient(135deg, #8b5cf6, #22d3ee);
        color: white;
        padding: 4px 8px;
        border-radius: 20px;
        font-size: 12px;
        white-space: nowrap;
        transition: transform 0.2s ease;
        z-index: 10;
        box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
    }
    
    a:hover .tooltip {
        transform: translateX(-50%) scale(1);
    }
`;
document.head.appendChild(tooltipStyle);

// 18. DYNAMIC BACKGROUND COLOR ON SCROLL
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const hue = 270 + (scrollPercent * 0.3); // Purple to cyan transition
    document.body.style.backgroundColor = `hsl(${hue}, 10%, 5%)`;
});

// 19. SHAKE EFFECT ON FORM SUBMIT (untuk validasi demo)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = contactForm.querySelector('button[type="submit"]');
        button.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            button.style.animation = '';
            alert('✨ Terima kasih! Pesan Anda telah terkirim. Saya akan segera menghubungi Anda kembali.');
            contactForm.reset();
        }, 500);
    });
}

const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(shakeStyle);

// 20. CELEBRATION CONFETTI ON CV DOWNLOAD
const cvButton = document.querySelector('a[href="#"].bg-gradient-to-r');
if (cvButton) {
    cvButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create confetti
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.background = Math.random() > 0.5 ? '#8b5cf6' : '#22d3ee';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }
        
        alert('📄 Download CV - Demo version');
    });
}

const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        animation: confetti-fall 3s ease-in forwards;
        z-index: 9999;
        pointer-events: none;
    }
    
    @keyframes confetti-fall {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// 21. AUDIO VISUALIZER EFFECT pada skill cards
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
    const bars = document.createElement('div');
    bars.className = 'audio-bars';
    
    for (let i = 0; i < 5; i++) {
        const bar = document.createElement('span');
        bar.style.animationDelay = i * 0.1 + 's';
        bars.appendChild(bar);
    }
    
    card.style.position = 'relative';
    card.appendChild(bars);
});

const audioBarsStyle = document.createElement('style');
audioBarsStyle.textContent = `
    .audio-bars {
        position: absolute;
        bottom: 10px;
        right: 10px;
        display: flex;
        gap: 3px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .skill-card:hover .audio-bars {
        opacity: 1;
    }
    
    .audio-bars span {
        width: 3px;
        height: 20px;
        background: linear-gradient(to top, #8b5cf6, #22d3ee);
        border-radius: 3px;
        animation: audioWave 0.8s ease-in-out infinite;
        transform-origin: bottom;
    }
    
    @keyframes audioWave {
        0%, 100% { transform: scaleY(0.3); }
        50% { transform: scaleY(1); }
    }
`;
document.head.appendChild(audioBarsStyle);

console.log('✨ All animations and interactions loaded successfully!');