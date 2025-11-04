// js/billingInvoices.js

document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------------------
    // 1. INVOICE FILTER TAB LOGIC
    // -----------------------------------------------------------------
    const filterTabs = document.querySelectorAll('.filter-tabs-group .tab');

    filterTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            // Manage 'active' class visually
            filterTabs.forEach(t => t.classList.remove('active'));
            event.currentTarget.classList.add('active');
            
            const filterType = event.currentTarget.textContent.trim();
            console.log(`[BILLING] Filtering invoice table by status: ${filterType}`);
            
            // Apply the visual filter
            filterTableByStatus(filterType);
        });
    });

    // Helper function to simulate filtering the invoice table rows
    function filterTableByStatus(status) {
        const rows = document.querySelectorAll('.billing-table-wrapper tbody tr');
        
        rows.forEach(row => {
            // Status is the 6th column in the Billing table
            const statusCell = row.querySelector('td:nth-child(6)'); 
            if (!statusCell) return;

            const rowStatusText = statusCell.textContent.trim();
            let shouldShow = false;
            
            if (status === 'All') {
                shouldShow = true;
            } else if (status === 'Paid' && rowStatusText === 'Paid') {
                shouldShow = true;
            } else if (status === 'Pending' && rowStatusText === 'Pending') {
                shouldShow = true;
            } else if (status === 'Overdue' && rowStatusText === 'Overdue') {
                shouldShow = true;
            }
            
            row.style.display = shouldShow ? '' : 'none';
        });
    }

    // Ensure 'All' tab is active and filtering is run on load
    filterTableByStatus('All');


    // -----------------------------------------------------------------
    // 2. HEADER BUTTON & TABLE ACTION LOGIC
    // -----------------------------------------------------------------
    const generateInvoiceBtn = document.querySelector('.main-header .add-product-btn');
    const actionLinks = document.querySelectorAll('.billing-table-wrapper .action-link');

    // Action for the 'Generate Invoice' button in the header
    if (generateInvoiceBtn) {
        generateInvoiceBtn.addEventListener('click', () => {
            alert("Redirecting to New Invoice creation screen.");
            console.log("[BILLING] New Invoice generation initiated.");
        });
    }

    // Actions for buttons within the invoice table (Remind, Alert, View)
    actionLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const actionText = event.currentTarget.textContent.trim();
            const row = event.currentTarget.closest('tr');
            const invoiceId = row.querySelector('td:nth-child(1)').textContent;
            
            console.log(`[BILLING] Action: ${actionText} initiated for Invoice ID: ${invoiceId}`);
            
            if (actionText.includes('Remind')) {
                alert(`Sending email reminder for Invoice ${invoiceId} (Pending).`);
            } else if (actionText.includes('Alert')) {
                alert(`Escalating collections process for Invoice ${invoiceId} (Overdue).`);
            } else if (actionText.includes('View')) {
                 alert(`Opening detailed view for Invoice ${invoiceId}.`);
            }
        });
    });
});