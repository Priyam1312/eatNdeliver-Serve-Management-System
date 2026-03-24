// DOM Elements
const boxes = document.querySelectorAll('.box');
const statItems = document.querySelectorAll('.stat-item');
const aboutContainer = document.getElementById('about-content');
const counters = document.querySelectorAll('.stat-number');
let counterStarted = false;

// Target values for counters
const targetValues = {
    restaurant: 300000,
    city: 800,
    order: 3 // We'll multiply this by 1 billion in the counter function
};

// Scroll to services function
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Scroll to top function
function scrollToTop() {
    document.getElementById('home').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Counter animation function
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(start));
        }
    }, 16);
}

// Format numbers with commas
function formatNumber(num) {
    if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1) + 'B+';
    }
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toLocaleString() + '+';
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Animate boxes when they come into view
function animateBoxes() {
    boxes.forEach((box, index) => {
        if (isInViewport(box) && !box.classList.contains('fade-in')) {
            setTimeout(() => {
                box.classList.add('fade-in');
            }, index * 300);
        }
    });
}

// Animate stats when they come into view
function animateStats() {
    statItems.forEach((item, index) => {
        if (isInViewport(item) && !item.classList.contains('scale-in')) {
            setTimeout(() => {
                item.classList.add('scale-in');
                
                // Start counters only once
                if (!counterStarted) {
                    counterStarted = true;
                    
                    // Animate restaurant counter
                    animateCounter(
                        document.getElementById('restaurant-counter'),
                        targetValues.restaurant
                    );
                    
                    // Animate city counter
                    animateCounter(
                        document.getElementById('city-counter'),
                        targetValues.city
                    );
                    
                    // Animate order counter (3 billion)
                    animateCounter(
                        document.getElementById('order-counter'),
                        targetValues.order * 1000000000, // Convert to 3 billion
                        2500 // Slightly longer duration for larger number
                    );
                }
            }, index * 200);
        }
    });
}

// Animate about section
function animateAbout() {
    if (isInViewport(aboutContainer) && !aboutContainer.classList.contains('fade-in')) {
        aboutContainer.classList.add('fade-in');
    }
}

// Update navbar link active state on scroll
function updateNavbar() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}

// Update navbar based on login status
function updateNavbarAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const authButtons = document.querySelector('.auth-buttons');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (isLoggedIn) {
        // Get current user
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
        // Remove auth buttons
        if (authButtons) {
            authButtons.style.display = 'none';
        }
        
        // Add user menu
        const userMenu = document.createElement('div');
        userMenu.className = 'user-menu';
        userMenu.innerHTML = `
            <div class="user-avatar-small">
                <i class="fas fa-user"></i>
            </div>
            <span class="user-name">${currentUser?.fullName || 'User'}</span>
            <button class="logout-btn" onclick="logout()">Logout</button>
        `;
        
        // Insert user menu
        if (navbarNav && navbarNav.parentNode) {
            navbarNav.parentNode.insertBefore(userMenu, navbarNav.nextSibling);
        }
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    location.reload();
}

// Auto show auth modal after 5 minutes
function setupAutoAuthModal() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const modalShown = sessionStorage.getItem('authModalShown');
    
    if (!isLoggedIn && !modalShown) {
        // Show modal after 5 minutes (300000ms)
        setTimeout(() => {
            showAuthModal();
            sessionStorage.setItem('authModalShown', 'true');
        }, 300000); // 5 minutes
    }
}

// Show auth modal
function showAuthModal() {
    const modal = document.getElementById('autoAuthModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Close modal when clicking X
        document.querySelector('.close-auth-modal').onclick = function() {
            modal.style.display = 'none';
        };
        
        // Close modal when clicking continue without account
        document.querySelector('.continue-btn').onclick = function() {
            modal.style.display = 'none';
        };
        
        // Close modal when clicking outside
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
}

// Simple Modal Functions (simplified for demonstration)
function openLoginModal() {
    window.location.href = 'login.html';
}       

function openSignupModal() {
    window.location.href = 'signup.html';
}       