// js/requestTracker.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. REQUEST FILTER TAB LOGIC
    // -----------------------------------------------------------------
    const filterTabs = document.querySelectorAll('.filter-tabs-group .tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Remove 'active' class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add 'active' class to the clicked tab
            event.currentTarget.classList.add('active');
            
            // Identify the filter type
            const filterType = event.currentTarget.textContent.trim();
            
            // NOTE: In a real application, AJAX calls would be made here to filter data.
            console.log(`[REQUESTS] Filtering table by status: ${filterType}`);
            
            // Placeholder: Visually demonstrate filtering by status class
            filterTableByStatus(filterType);
        });
    });

    // Helper function to simulate filtering
    function filterTableByStatus(status) {
        const rows = document.querySelectorAll('.requests-table-wrapper tbody tr');
        
        rows.forEach(row => {
            const statusCell = row.querySelector('td:nth-child(7)'); // Status is the 7th column
            if (!statusCell) return;

            const rowStatus = statusCell.textContent.trim();
            const shouldShow = status === 'All' || 
                              (status === 'Pending' && rowStatus === 'Pending') ||
                              (status === 'In Progress' && rowStatus === 'In Progress') ||
                              (status === 'Maintenance' && rowStatus === 'Maintenance') ||
                              // Catch all for any other specific filter we might add
                              (status !== 'All' && rowStatus.toLowerCase().includes(status.toLowerCase()));
            
            row.style.display = shouldShow ? '' : 'none';
        });
    }

    // -----------------------------------------------------------------
    // 2. TABLE ACTION LOGIC (Assign/Complete Buttons)
    // -----------------------------------------------------------------
    const actionLinks = document.querySelectorAll('.requests-table-wrapper .action-link');

    actionLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const actionText = event.currentTarget.textContent.trim();
            const row = event.currentTarget.closest('tr');
            const requestId = row.querySelector('td:nth-child(1)').textContent;
            
            console.log(`[REQUESTS] Action: ${actionText} initiated for Request ID: ${requestId}`);
            
            if (actionText.includes('Assign')) {
                // Simulate assigning the task
                alert(`Assigning Request ${requestId} to a staff member.`);
                // In a real app, update the 'Assigned Staff' column and set status to 'In Progress'
                
            } else if (actionText.includes('Complete')) {
                // Simulate completing the task
                const confirmComplete = confirm(`Are you sure you want to mark Request ${requestId} as Completed?`);
                if (confirmComplete) {
                    alert(`Request ${requestId} marked as Completed.`);
                    // In a real app, hide the row or update its status visually
                    row.querySelector('td:nth-child(7)').innerHTML = '<span class="status-completed-text">Completed</span>';
                }
            } else if (actionText.includes('Review')) {
                // For completed tasks
                 alert(`Opening detailed review for Request ${requestId}.`);
            }
        });
    });
});