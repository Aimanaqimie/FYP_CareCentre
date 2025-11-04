// js/inventoryManager.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. MODAL LOGIC (Handling 'Add Product' button and closing)
    // -----------------------------------------------------------------
    const modal = document.getElementById('addProductModal');
    const addProductBtn = document.querySelector('.add-product-btn');
    const closeModalBtn = document.querySelector('.modal-content .close-button');

    if (addProductBtn && modal) {
        addProductBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close the modal if the user clicks anywhere outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // -----------------------------------------------------------------
    // 2. FILTER TAB LOGIC (Handling button clicks and filtering the table)
    // -----------------------------------------------------------------
    const filterTabs = document.querySelectorAll('.filter-tabs-group .tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Manage 'active' class visually
            filterTabs.forEach(t => t.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            // Get the filter type from the button's text content
            const filterType = event.currentTarget.textContent.trim();
            console.log(`[INVENTORY] Filtering table by status: ${filterType}`);
            
            // Apply the visual filter
            filterTableByStatus(filterType);
        });
    });

    // Helper function to simulate filtering the inventory table rows
    function filterTableByStatus(status) {
        const rows = document.querySelectorAll('.inventory-table-wrapper tbody tr');
        
        rows.forEach(row => {
            // Status is the 7th column in the Inventory table
            const statusCell = row.querySelector('td:nth-child(7)'); 
            if (!statusCell) return;

            const rowStatusText = statusCell.textContent.trim();
            let shouldShow = false;
            
            // Normalize status checks to match the text content in the <td>
            if (status === 'All') {
                shouldShow = true;
            } else if (status === 'Low Stock' && rowStatusText === 'Low Stock') {
                shouldShow = true;
            } else if (status === 'Expired' && rowStatusText === 'Expired') {
                // Note: We don't have an 'Expired' row in the HTML yet, but the logic is ready.
                shouldShow = true;
            } else if (status === 'Medical' && row.querySelector('td:nth-child(3)').textContent.trim() === 'Medical') {
                 // Example of filtering by Category (3rd column)
                 shouldShow = true;
            }
            
            row.style.display = shouldShow ? '' : 'none';
        });
    }
    
    // Ensure 'All' tab is active and filtering is run on load
    filterTableByStatus('All');
});