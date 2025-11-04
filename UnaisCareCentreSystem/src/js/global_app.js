
// js/global_app.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Global application scripts loaded.");

    // -----------------------------------------------------------------
    // 1. GLOBAL NAVIGATION AND HEADER LOGIC (Runs on every page)
    // -----------------------------------------------------------------
    
    // Example: Highlight the active item in the sidebar based on the current page URL
    const currentPath = window.location.pathname.split('/').pop() || 'HomePage.html';

    const navItems = document.querySelectorAll('.sidebar-nav .nav-item a, .sidebar-nav .nav-item span');
    
    navItems.forEach(item => {
        const link = item.closest('li');
        const href = item.getAttribute('href');
        
        if (href && href.includes(currentPath)) {
            link.classList.add('active');
        } else if (item.textContent.trim() === 'Settings' && currentPath === 'Settings.html') {
             // Handle the 'Settings' span placeholder if the link is not defined
             link.classList.add('active');
        }
    });

    // Example: Header Icon Button Placeholder
    const iconButtons = document.querySelectorAll('.main-header .icon-button');
    iconButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i').className;
            alert(`Opening functionality for icon: ${icon.split(' ')[1]}`);
        });
    });


    // -----------------------------------------------------------------
    // 2. UTILITY FUNCTIONS (Can be added here or in a separate utility.js)
    // -----------------------------------------------------------------
    // Example: Function to handle smooth scrolling or date formatting.
    
    // If you had code in main.js, this is where it should be moved.
    
});
