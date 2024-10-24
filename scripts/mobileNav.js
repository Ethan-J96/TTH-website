function initMobileNav() {
    const hamburger = document.querySelector('.mobile_navbar_hamburger');
    const dropdown = document.querySelector('.mobile_navbar_dropdown');
    
    if (!hamburger || !dropdown) {
        console.error('Mobile nav elements not found');
        return;
    }

    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        hamburger.classList.toggle('active');
        dropdown.classList.toggle('active');
        console.log('Hamburger clicked!');
    });

    // Update link click handling
    document.querySelectorAll('.mobile_navbar__links .navbar_link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            console.log('Clicked link:', href); // Debug log
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                console.log('Target element:', targetElement); // Debug log
                if (targetElement) {
                    hamburger.classList.remove('active');
                    dropdown.classList.remove('active');
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('active');
        }
    });
}

// Make sure the DOM is loaded before initializing
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
} else {
    initMobileNav();
}