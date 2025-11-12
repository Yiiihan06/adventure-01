// State management
let currentPage = 1;
const totalPages = 3;

// Get elements
const pages = document.querySelectorAll('.page');
const indicators = document.querySelectorAll('.indicator');
const navButtons = document.querySelectorAll('.nav-btn');
const pageTexts = document.querySelectorAll('.page-text');

// Initialize
function init() {
    // Set up navigation button listeners
    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const pageNum = parseInt(btn.dataset.page);
            navigateToPage(pageNum);
        });
    });

    // Set up text link navigation
    pageTexts.forEach(text => {
        text.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = parseInt(text.dataset.navigate);
            if (targetPage) {
                navigateToPage(targetPage);
            }
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateNext();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigatePrev();
        } else if (e.key >= '1' && e.key <= '3') {
            e.preventDefault();
            navigateToPage(parseInt(e.key));
        }
    });

    // Touch/swipe navigation for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            navigateNext();
        }
        if (touchEndX > touchStartX + swipeThreshold) {
            navigatePrev();
        }
    }

    // Mouse wheel navigation (optional)
    let isScrolling = false;
    document.addEventListener('wheel', (e) => {
        if (isScrolling) return;
        
        isScrolling = true;
        
        if (e.deltaY > 0) {
            navigateNext();
        } else if (e.deltaY < 0) {
            navigatePrev();
        }
        
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    }, { passive: true });
}

// Navigation functions
function navigateToPage(pageNum) {
    if (pageNum < 1 || pageNum > totalPages || pageNum === currentPage) {
        return;
    }

    // Update current page
    const prevPage = currentPage;
    currentPage = pageNum;

    // Update pages
    pages.forEach((page, index) => {
        if (index + 1 === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    // Update indicators
    indicators.forEach((indicator, index) => {
        if (index + 1 === currentPage) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });

    // Add animation effect
    addTransitionEffect(prevPage, currentPage);

    // Update URL hash (optional, for bookmarking)
    window.location.hash = `page${currentPage}`;
}

function navigateNext() {
    const nextPage = currentPage < totalPages ? currentPage + 1 : 1;
    navigateToPage(nextPage);
}

function navigatePrev() {
    const prevPage = currentPage > 1 ? currentPage - 1 : totalPages;
    navigateToPage(prevPage);
}

// Add transition effects
function addTransitionEffect(from, to) {
    const fromPage = document.getElementById(`page${from}`);
    const toPage = document.getElementById(`page${to}`);

    // Direction-based animation
    if (to > from) {
        // Moving forward
        fromPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        toPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    } else {
        // Moving backward
        fromPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        toPage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    }
}

// Handle initial page load with hash
function handleInitialHash() {
    const hash = window.location.hash;
    if (hash) {
        const pageMatch = hash.match(/page(\d+)/);
        if (pageMatch) {
            const pageNum = parseInt(pageMatch[1]);
            if (pageNum >= 1 && pageNum <= totalPages) {
                navigateToPage(pageNum);
            }
        }
    }
}

// Handle browser back/forward buttons
window.addEventListener('hashchange', () => {
    handleInitialHash();
});

// Preload images for smoother experience
function preloadImages() {
    const images = [
        'https://www.figma.com/api/mcp/asset/a3b2e6e0-06bc-478d-9f13-dd74eed071ed',
        'https://www.figma.com/api/mcp/asset/85021cdd-92e2-4cc9-8d46-1bfca05751a5',
        'https://www.figma.com/api/mcp/asset/da9208ef-722c-428f-9c71-5ca67bccb9a7'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        handleInitialHash();
        preloadImages();
    });
} else {
    init();
    handleInitialHash();
    preloadImages();
}

// Add page transition animations
function addPageAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
        }

        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -50%) scale(1.05);
            }
        }

        .page.active {
            animation: fadeIn 0.5s ease forwards;
        }

        .page:not(.active) {
            animation: fadeOut 0.5s ease forwards;
        }
    `;
    document.head.appendChild(style);
}

addPageAnimation();

// Export for potential use in other scripts
window.FigmaNavigation = {
    navigateToPage,
    navigateNext,
    navigatePrev,
    getCurrentPage: () => currentPage,
    getTotalPages: () => totalPages
};
