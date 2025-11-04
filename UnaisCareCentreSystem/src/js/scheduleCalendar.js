// js/scheduleCalendar.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // MODAL LOGIC (New Event Button)
    // -----------------------------------------------------------------
    const newEventBtn = document.querySelector('.main-header .add-product-btn');
    const modal = document.getElementById('newEventModal');
    const closeModalBtn = document.querySelector('#newEventModal .close-button');

    if (newEventBtn && modal) {
        // Open Modal
        newEventBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            console.log("[SCHEDULES] 'New Event/Shift' modal opened.");
        });

        // Close Modal via X button
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close Modal if the user clicks anywhere outside of it
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Placeholder for Save Button
        const saveBtn = document.querySelector('.modal-submit-btn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                alert("Simulating saving the new event to the calendar!");
                modal.style.display = 'none';
            });
        }
    }

    // -----------------------------------------------------------------
    // 1. VIEW CONTROL TABS (Week, Day, Month)
    // -----------------------------------------------------------------
    const viewTabs = document.querySelectorAll('.view-controls .view-tab');

    viewTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Manage 'active' class visually
            viewTabs.forEach(t => t.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            const viewType = event.currentTarget.textContent.trim();
            console.log(`[SCHEDULES] Calendar view changed to: ${viewType}`);
        });
    });


    // -----------------------------------------------------------------
    // 2. PERIOD NAVIGATION (Previous/Next buttons)
    // -----------------------------------------------------------------
    const navButtons = document.querySelectorAll('.calendar-header .nav-btn');
    const periodHeader = document.querySelector('.calendar-header .current-period');
    
    // Simple state to track the current period visually (using a placeholder date)
    let currentDate = new Date('2025-11-03T12:00:00'); 
    
    // Function to update the header text based on the current date (Simulated Weekly View)
    function updatePeriodHeader(date) {
        const start = new Date(date);
        const end = new Date(date);
        end.setDate(end.getDate() + 6); // Add 6 days for a full week

        const options = { month: 'long', day: 'numeric', year: 'numeric' };
        const startString = start.toLocaleDateString('en-MY', options);
        const endString = end.toLocaleDateString('en-MY', options);
        
        periodHeader.textContent = `Week of ${startString.split(', ')[0]} - ${endString}`;
    }

    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const isNext = event.currentTarget.querySelector('.fa-chevron-right');
            
            if (isNext) {
                currentDate.setDate(currentDate.getDate() + 7);
                console.log("[SCHEDULES] Moved to next week.");
            } else {
                currentDate.setDate(currentDate.getDate() - 7);
                console.log("[SCHEDULES] Moved to previous week.");
            }

            updatePeriodHeader(currentDate);
        });
    });

    // Initialize the header on load
    updatePeriodHeader(currentDate);
});