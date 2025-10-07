// Cricket Betting Championship - Main JavaScript
// Handles all interactions, animations, and effects

// Global variables
let selectedTeam = null;
let currentMatch = null;
let particleApp = null;

// Match data
const matchData = {
    'afg-vs-ban': {
        teamA: { name: 'Afghanistan', flag: '🇦🇫', captain: 'Rashid Khan' },
        teamB: { name: 'Bangladesh', flag: '🇧🇩', captain: 'Najmul Hossain' },
        format: '1st ODI',
        date: 'Today',
        venue: 'Sheikh Zayed Stadium, Abu Dhabi'
    },
    'ind-vs-wi': {
        teamA: { name: 'India', flag: '🇮🇳', captain: 'Rohit Sharma' },
        teamB: { name: 'West Indies', flag: '🇼🇮', captain: 'Rovman Powell' },
        format: 'Test Series',
        date: 'Oct 10',
        venue: 'M. Chinnaswamy Stadium, Bengaluru'
    },
    'nam-vs-sa': {
        teamA: { name: 'Namibia', flag: '🇳🇦', captain: 'Gerhard Erasmus' },
        teamB: { name: 'South Africa', flag: '🇿🇦', captain: 'Aiden Markram' },
        format: 'T20',
        date: 'Oct 11',
        venue: 'Wanderers Stadium, Johannesburg'
    },
    'pak-vs-sa': {
        teamA: { name: 'Pakistan', flag: '🇵🇰', captain: 'Babar Azam' },
        teamB: { name: 'South Africa', flag: '🇿🇦', captain: 'Aiden Markram' },
        format: 'Test',
        date: 'Oct 12-16',
        venue: 'Rawalpindi Cricket Stadium'
    }
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeParticles();
    initializeCarousels();
    initializeCounters();
    initializeEventListeners();
});

// Initialize all animations
function initializeAnimations() {
    // Typewriter effect for main title
    if (document.getElementById('typed-title')) {
        new Typed('#typed-title', {
            strings: [
                'CRICKET BETTING CHAMPIONSHIP',
                'WIN BIG DAILY',
                'BET ON YOUR TEAM',
                'GET INSTANT CASH'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Animate prize boxes
    animatePrizeBoxes();
    
    // Animate match cards
    animateMatchCards();
    
    // Animate winner cards
    animateWinnerCards();
}

// Initialize particle background
function initializeParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2
        });
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.width;
            if (particle.x > canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.height;
            if (particle.y > canvas.height) particle.y = 0;
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
            ctx.fill();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    animateParticles();
    
    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize carousels
function initializeCarousels() {
    // Matches carousel
    if (document.getElementById('matches-carousel')) {
        new Splide('#matches-carousel', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }
    
    // Winners carousel
    if (document.getElementById('winners-carousel')) {
        new Splide('#winners-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            breakpoints: {
                768: {
                    perPage: 1
                },
                1024: {
                    perPage: 2
                }
            }
        }).mount();
    }
}

// Initialize counters with animation
function initializeCounters() {
    animateCounter('users-count', 100000, '+', 2000);
    animateCounter('prizes-count', 50000, '$', 2000);
    animateCounter('matches-count', 1000, '', 2000);
    animateCounter('total-winners', 348, '', 348);
    animateCounter('total-prizes', 500, '$', 500);
    animateCounter('today-winners', 15, '', 15);
}

// Animate counter numbers
function animateCounter(elementId, targetValue, prefix = '', duration = 2000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const startValue = 0;
    const increment = targetValue / (duration / 16);
    let currentValue = startValue;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        
        const displayValue = Math.floor(currentValue).toLocaleString();
        element.textContent = prefix + displayValue;
    }, 16);
}

// Initialize event listeners
function initializeEventListeners() {
    // Download button
    const downloadBtn = document.getElementById('download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Add click animation
            anime({
                targets: downloadBtn,
                scale: [1, 0.95, 1],
                duration: 200,
                easing: 'easeInOutQuad'
            });
            
            // Redirect to app download page
            setTimeout(() => {
                window.open('https://app.crickgd.live/get-app.html', '_blank');
            }, 300);
        });
    }
    
    // Add hover effects to interactive elements
    addHoverEffects();
}

// Add hover effects
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.match-card, .winner-card, .leaderboard-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            anime({
                targets: element,
                scale: 1.02,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
        
        element.addEventListener('mouseleave', () => {
            anime({
                targets: element,
                scale: 1,
                duration: 300,
                easing: 'easeOutQuad'
            });
        });
    });
}

// Animate prize boxes
function animatePrizeBoxes() {
    const prizeBoxes = document.querySelectorAll('.prize-box');
    
    prizeBoxes.forEach((box, index) => {
        // Staggered animation
        anime({
            targets: box,
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 800,
            delay: index * 200,
            easing: 'easeOutBounce'
        });
        
        // Continuous floating animation
        anime({
            targets: box,
            translateY: [-10, 10],
            duration: 2000 + (index * 500),
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    });
}

// Animate match cards
function animateMatchCards() {
    const matchCards = document.querySelectorAll('.match-card');
    
    matchCards.forEach((card, index) => {
        anime({
            targets: card,
            translateX: [-50, 0],
            opacity: [0, 1],
            duration: 600,
            delay: index * 150,
            easing: 'easeOutQuad'
        });
    });
}

// Animate winner cards
function animateWinnerCards() {
    const winnerCards = document.querySelectorAll('.winner-card');
    
    winnerCards.forEach((card, index) => {
        anime({
            targets: card,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            delay: index * 100,
            easing: 'easeOutBack'
        });
    });
}

// Match modal functions
function openMatchModal(matchId) {
    currentMatch = matchId;
    const match = matchData[matchId];
    
    if (!match) return;
    
    // Update modal content
    document.getElementById('teamA-flag').textContent = match.teamA.flag;
    document.getElementById('teamA-name').textContent = match.teamA.name;
    document.getElementById('teamB-flag').textContent = match.teamB.flag;
    document.getElementById('teamB-name').textContent = match.teamB.name;
    
    // Update match info
    const matchInfo = document.getElementById('modalMatchInfo');
    matchInfo.innerHTML = `
        <div class="text-center mb-4">
            <div class="text-lg font-bold">${match.teamA.name} vs ${match.teamB.name}</div>
            <div class="text-sm text-gray-400">${match.format} • ${match.date}</div>
            <div class="text-xs text-gray-500 mt-1">${match.venue}</div>
        </div>
        <div class="flex justify-center items-center space-x-4 mb-4">
            <div class="text-center">
                <div class="text-3xl mb-1">${match.teamA.flag}</div>
                <div class="text-xs text-gray-400">${match.teamA.captain}</div>
            </div>
            <div class="text-2xl font-bold text-red-400">VS</div>
            <div class="text-center">
                <div class="text-3xl mb-1">${match.teamB.flag}</div>
                <div class="text-xs text-gray-400">${match.teamB.captain}</div>
            </div>
        </div>
    `;
    
    // Show modal
    const modal = document.getElementById('matchModal');
    modal.classList.remove('hidden');
    
    // Animate modal appearance
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutBack'
    });
    
    // Reset selections
    selectedTeam = null;
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    updateTeamSelectors();
}

function closeMatchModal() {
    const modal = document.getElementById('matchModal');
    
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [1, 0.8],
        opacity: [1, 0],
        duration: 200,
        easing: 'easeInBack',
        complete: () => {
            modal.classList.add('hidden');
        }
    });
}

function selectTeam(team) {
    selectedTeam = team;
    updateTeamSelectors();
}

function updateTeamSelectors() {
    const teamASelector = document.getElementById('teamA-selector');
    const teamBSelector = document.getElementById('teamB-selector');
    
    // Reset both selectors
    teamASelector.classList.remove('selected');
    teamBSelector.classList.remove('selected');
    
    // Highlight selected team
    if (selectedTeam === 'A') {
        teamASelector.classList.add('selected');
    } else if (selectedTeam === 'B') {
        teamBSelector.classList.add('selected');
    }
}

function placeBet() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validation
    if (!username || !email) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!selectedTeam) {
        alert('Please select a team');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Animate button
    const button = document.getElementById('placeBetBtn');
    button.textContent = 'PLACING BET...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        closeMatchModal();
        showSuccessModal();
        createConfetti();
        
        // Reset button
        button.textContent = 'PLACE BET NOW';
        button.disabled = false;
    }, 1500);
}

function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [0.5, 1],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutBack'
    });
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    
    anime({
        targets: modal.querySelector('.modal-content'),
        scale: [1, 0.5],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInBack',
        complete: () => {
            modal.classList.add('hidden');
        }
    });
}

function createConfetti() {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    // Clear existing confetti
    container.innerHTML = '';
    
    // Create confetti pieces
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        
        container.appendChild(confetti);
        
        // Animate confetti
        anime({
            targets: confetti,
            translateY: window.innerHeight + 100,
            translateX: (Math.random() - 0.5) * 200,
            rotate: Math.random() * 360,
            duration: Math.random() * 2000 + 1000,
            easing: 'easeInQuad',
            complete: () => {
                confetti.remove();
            }
        });
    }
}

function getRandomColor() {
    const colors = ['#ffd700', '#00d4ff', '#39ff14', '#ff1493', '#ff6b35', '#4ecdc4'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states for better UX
function showLoading(element) {
    element.style.opacity = '0.6';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData = {}) {
    console.log('Analytics Event:', eventName, eventData);
    // Implement actual analytics tracking here
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('#download-btn')) {
        trackEvent('app_download_click');
    } else if (e.target.matches('#placeBetBtn')) {
        trackEvent('bet_placed', { team: selectedTeam, match: currentMatch });
    } else if (e.target.matches('.match-card')) {
        trackEvent('match_card_click', { match: e.target.dataset.matchId });
    }
});

// Export functions for global access
window.openMatchModal = openMatchModal;
window.closeMatchModal = closeMatchModal;
window.selectTeam = selectTeam;
window.placeBet = placeBet;
window.closeSuccessModal = closeSuccessModal;
window.showLoading = showLoading;
window.hideLoading = hideLoading;